"use client";

// ════════════════════════════════════════════════════════════════════
//  FaithJourneyMap — แผนที่ 2.5D อินเทอร์แอกทีฟ "Paths of Faith"
//  ต่อยอดจาก PropagationMap (หน้าแรก): หมุดนามธรรมเดินตามเส้นทาง
//  + การ์ดประวัติไทย + ปุ่มเปิด/ปิดเส้นทาง + โหมด calibrate (dev)
//  หลักการ aniconic: ไม่มีรูปบุคคลใด ๆ — ผู้เดินทางเป็นจุดแสงเท่านั้น
// ════════════════════════════════════════════════════════════════════

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { JOURNEYS } from "../lib/paths-of-faith/data";

const DWELL_MS = 1800; // หยุดพักที่เมือง (หารด้วยความเร็ว)
const SPEEDS = [0.5, 1, 2, 3];
const SILHOUETTE = "#171310"; // เงาทึบผู้เดินทาง ไม่มีรายละเอียดใบหน้า (หลักการอิสลาม — แบบเดียวกับหน้าแรก)

function buildPts(route, journey, overrides) {
  const cityMap = {};
  journey.cities.forEach((c) => { cityMap[c.key] = c; });
  return route.stops.map((s) => {
    const c = cityMap[s.city];
    const pos = (overrides && overrides[s.city]) || c.pos;
    return { x: pos.x * journey.viewW, y: pos.y * journey.viewH };
  });
}

function polyD(pts) {
  return "M " + pts.map((p) => `${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(" L ");
}

function polyLen(pts) {
  let s = 0;
  for (let i = 1; i < pts.length; i++) s += Math.hypot(pts[i].x - pts[i - 1].x, pts[i].y - pts[i - 1].y);
  return s;
}

export default function FaithJourneyMap({ journeyId: controlledId, onJourneyChange } = {}) {
  const [internalJourneyId, setInternalJourneyId] = useState("islam");
  const journeyId = controlledId ?? internalJourneyId; // controlled ถ้ามี prop, ไม่งั้นคุม state เอง
  const journey = JOURNEYS.find((j) => j.id === journeyId);

  const [activeRouteId, setActiveRouteId] = useState(JOURNEYS[0].routes[0].id);
  const [visibleRoutes, setVisibleRoutes] = useState(() => {
    const v = {};
    JOURNEYS.forEach((j) => j.routes.forEach((r) => { v[r.id] = true; }));
    return v;
  });
  const [playing, setPlaying] = useState(true);
  const [ended, setEnded] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [restartKey, setRestartKey] = useState(0);
  const [reduced, setReduced] = useState(false);
  const [calibrate, setCalibrate] = useState(false);
  const [calPos, setCalPos] = useState(null);
  const [overrides, setOverrides] = useState({});
  const [visited, setVisited] = useState({});   // `${routeId}:${stopIdx}` → true
  const [card, setCard] = useState(null);       // { routeId, stopIdx }
  const [currentIdx, setCurrentIdx] = useState(0);
  const [effects, setEffects] = useState([]);

  const mapBoxRef = useRef(null);
  const walkerRef = useRef(null);
  const walkerBodyRef = useRef(null);
  const trailRef = useRef(null);
  const progressRef = useRef(null);
  const playingRef = useRef(playing);
  const speedRef = useRef(speed);
  const effectId = useRef(0);
  const dragRef = useRef(null);

  playingRef.current = playing;
  speedRef.current = speed;

  const activeRoute = journey.routes.find((r) => r.id === activeRouteId) || journey.routes[0];
  const cityByKey = useMemo(() => {
    const m = {};
    journey.cities.forEach((c) => { m[c.key] = (overrides[c.key] ? { ...c, pos: overrides[c.key] } : c); });
    return m;
  }, [journey, overrides]);

  // ตรวจ prefers-reduced-motion และ ?calibrate=1 (เฉพาะ dev)
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = (e) => setReduced(e.matches);
    mq.addEventListener?.("change", onChange);
    if (process.env.NODE_ENV !== "production") {
      setCalibrate(new URLSearchParams(window.location.search).get("calibrate") === "1");
    }
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  const spawnEffect = (pt, color) => {
    const id = ++effectId.current;
    const particles = Array.from({ length: 12 }, (_, i) => {
      const ang = (i / 12) * Math.PI * 2 + (i % 3) * 0.5;
      const dist = 20 + ((i * 31) % 24);
      return { dx: Math.cos(ang) * dist, dy: Math.sin(ang) * dist, r: 1 + ((i * 7) % 3) * 0.6, delay: (i % 5) * 0.03 };
    });
    setEffects((e) => [...e, { id, x: pt.x, y: pt.y, color, particles }]);
    setTimeout(() => setEffects((e) => e.filter((x) => x.id !== id)), 1500);
  };

  // ── engine: เดินตามเส้นทาง + dwell + arrival ──────────────────────
  useEffect(() => {
    setVisited({});
    setCard(null);
    setCurrentIdx(0);
    setEnded(false);

    if (reduced) {
      // reduced-motion: โชว์ทุกเมืองของทุกเส้นในสภาพ "ผ่านแล้ว" คลิกเปิดการ์ดเอง
      const all = {};
      journey.routes.forEach((r) => r.stops.forEach((_, i) => { all[`${r.id}:${i}`] = true; }));
      setVisited(all);
      if (trailRef.current) trailRef.current.style.strokeDashoffset = "0";
      if (progressRef.current) progressRef.current.style.width = "100%";
      return;
    }

    const route = journey.routes.find((r) => r.id === activeRouteId);
    if (!route) return;
    const pts = buildPts(route, journey, overrides);
    const cum = [0];
    for (let i = 1; i < pts.length; i++) cum.push(cum[i - 1] + Math.hypot(pts[i].x - pts[i - 1].x, pts[i].y - pts[i - 1].y));
    const total = cum[cum.length - 1] || 1;
    const base = journey.viewW * 0.075; // หน่วย viewBox ต่อวินาที ที่ 1×

    let dist = 0, next = 1, dwell = 0, done = pts.length < 2;
    let cardDismissed = false; // ปิดการ์ดอัตโนมัติเมื่อเริ่มเดินต่อ กันการ์ดบังตัวละครระหว่างทาง

    const fire = (idx) => {
      setVisited((v) => ({ ...v, [`${route.id}:${idx}`]: true }));
      setCard({ routeId: route.id, stopIdx: idx });
      setCurrentIdx(idx);
      spawnEffect(pts[idx], route.color);
      cardDismissed = false;
    };

    fire(0);
    dwell = DWELL_MS / 1000;

    let raf, last = performance.now();
    const step = (now) => {
      raf = requestAnimationFrame(step);
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      if (!playingRef.current) return;

      if (!done) {
        if (dwell > 0) {
          dwell -= dt * speedRef.current;
        } else {
          if (!cardDismissed) {
            cardDismissed = true;
            setCard(null);
          }
          dist += base * speedRef.current * dt;
          if (dist >= cum[next]) {
            dist = cum[next];
            fire(next);
            dwell = DWELL_MS / 1000;
            next++;
            if (next >= pts.length) { done = true; setEnded(true); setPlaying(false); }
          }
        }
      }

      // ตำแหน่งหมุดเดินทางบน polyline
      let k = 0;
      while (k < pts.length - 2 && dist > cum[k + 1]) k++;
      const segLen = (cum[k + 1] - cum[k]) || 1;
      const lt = Math.min(1, Math.max(0, (dist - cum[k]) / segLen));
      const a = pts[k], b = pts[k + 1] || pts[k];
      const x = a.x + (b.x - a.x) * lt;
      const y = a.y + (b.y - a.y) * lt;
      const moving = dwell <= 0 && !done;
      const bob = moving ? Math.sin(now / 150) * 1.7 : 0;
      const depth = 0.82 + (y / journey.viewH) * 0.34; // 2.5D: ล่าง=ใกล้=ใหญ่
      const flip = (b.x - a.x) < -0.5 ? -1 : 1;
      walkerRef.current?.setAttribute("transform", `translate(${x.toFixed(1)} ${y.toFixed(1)}) scale(${depth.toFixed(3)})`);
      walkerBodyRef.current?.setAttribute("transform", `translate(0 ${bob.toFixed(2)}) scale(${flip} 1)`);
      if (trailRef.current) trailRef.current.style.strokeDashoffset = String((total - dist).toFixed(1));
      if (progressRef.current) progressRef.current.style.width = `${((dist / total) * 100).toFixed(1)}%`;
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [journeyId, activeRouteId, reduced, restartKey, overrides]);

  // ── handlers ───────────────────────────────────────────────────────
  const switchJourney = (id) => {
    if (id === journeyId) return;
    const j = JOURNEYS.find((x) => x.id === id);
    setInternalJourneyId(id);
    onJourneyChange?.(id);
    setActiveRouteId(j.routes[0].id);
    setEffects([]);
    setPlaying(true);
    setRestartKey((k) => k + 1);
  };

  const pickRoute = (id) => {
    setActiveRouteId(id);
    setVisibleRoutes((v) => ({ ...v, [id]: true }));
    setPlaying(true);
    setRestartKey((k) => k + 1);
  };

  const toggleRoute = (id) => setVisibleRoutes((v) => ({ ...v, [id]: !v[id] }));

  const allVisible = journey.routes.every((r) => visibleRoutes[r.id]);
  const toggleAll = () => {
    setVisibleRoutes((v) => {
      const nv = { ...v };
      journey.routes.forEach((r) => { nv[r.id] = !allVisible; });
      return nv;
    });
  };

  const restart = () => { setPlaying(true); setRestartKey((k) => k + 1); };

  const openCityCard = (cityKey) => {
    // หา stop ของเมืองนี้: เส้น active ก่อน แล้วค่อยเส้นอื่นของ journey
    const routes = [activeRoute, ...journey.routes.filter((r) => r.id !== activeRoute.id)];
    for (const r of routes) {
      const idx = r.stops.findIndex((s) => s.city === cityKey);
      if (idx >= 0) { setCard({ routeId: r.id, stopIdx: idx }); return; }
    }
  };

  // ── calibrate (dev เท่านั้น) ───────────────────────────────────────
  const normFromEvent = (e) => {
    const box = mapBoxRef.current?.getBoundingClientRect();
    if (!box) return null;
    return {
      x: Math.min(1, Math.max(0, (e.clientX - box.left) / box.width)),
      y: Math.min(1, Math.max(0, (e.clientY - box.top) / box.height)),
    };
  };

  const onCalMove = (e) => {
    const p = normFromEvent(e);
    if (!p) return;
    setCalPos(p);
    if (dragRef.current) {
      const key = dragRef.current;
      setOverrides((o) => ({ ...o, [key]: p }));
    }
  };

  const onCalClick = (e) => {
    const p = normFromEvent(e);
    if (!p) return;
    const snippet = `{ x: ${p.x.toFixed(3)}, y: ${p.y.toFixed(3)} }`;
    navigator.clipboard?.writeText(snippet).catch(() => {});
    // eslint-disable-next-line no-console
    console.log(`[calibrate] ${snippet}  (คัดลอกแล้ว)`);
  };

  const onCalPinDown = (key) => (e) => {
    e.stopPropagation();
    dragRef.current = key;
  };

  const onCalUp = () => {
    if (dragRef.current) {
      const key = dragRef.current;
      const p = overrides[key];
      // eslint-disable-next-line no-console
      if (p) console.log(`[calibrate] ${key}: { x: ${p.x.toFixed(3)}, y: ${p.y.toFixed(3)} }`);
      dragRef.current = null;
    }
  };

  // ── ข้อมูลสำหรับเรนเดอร์ ──────────────────────────────────────────
  const routeGeom = useMemo(() => {
    return journey.routes.map((r) => {
      const pts = buildPts(r, journey, overrides);
      return { route: r, pts, d: polyD(pts), len: polyLen(pts) };
    });
  }, [journey, overrides]);

  const activeGeom = routeGeom.find((g) => g.route.id === activeRoute.id);

  // ป้ายชื่อเมืองที่ผ่านแล้ว (dedupe ต่อเมือง — เมืองเดียวอาจมีหลาย stop)
  const visitedCities = useMemo(() => {
    const m = {};
    journey.routes.forEach((r) => {
      if (!visibleRoutes[r.id] && r.id !== activeRoute.id) return;
      r.stops.forEach((s, i) => {
        if (visited[`${r.id}:${i}`]) m[s.city] = { color: r.color };
      });
    });
    return m;
  }, [journey, visited, visibleRoutes, activeRoute]);

  const cardData = useMemo(() => {
    if (!card) return null;
    const r = journey.routes.find((x) => x.id === card.routeId);
    const stop = r?.stops[card.stopIdx];
    const city = stop && cityByKey[stop.city];
    if (!r || !stop || !city) return null;
    return { route: r, stop, city };
  }, [card, journey, cityByKey]);

  const currentStop = activeRoute.stops[Math.min(currentIdx, activeRoute.stops.length - 1)];
  const currentCity = currentStop && cityByKey[currentStop.city];

  return (
    <div className="w-full">
      {/* ── ตัวสลับ Journey ── */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-4" role="tablist" aria-label="เลือกการเดินทาง">
        {JOURNEYS.map((j) => (
          <button
            key={j.id}
            role="tab"
            aria-selected={j.id === journeyId}
            aria-label={`ดูการเดินทาง${j.label}`}
            onClick={() => switchJourney(j.id)}
            className={`font-pridi text-sm px-5 py-2 rounded-btn border transition-all duration-base ${
              j.id === journeyId
                ? "bg-gold text-ink border-gold shadow-glow-sm font-semibold"
                : "bg-transparent text-paper-white/70 border-paper-white/25 hover:border-gold/60 hover:text-gold"
            }`}
          >
            {j.label}
          </button>
        ))}
      </div>

      {/* ── แผนที่ (เลื่อนแนวนอนได้บนจอแคบ) ── */}
      <div className="overflow-x-auto rounded-lg" style={{ WebkitOverflowScrolling: "touch" }}>
        <div
          ref={mapBoxRef}
          className={`relative mx-auto min-w-[640px] max-w-5xl select-none ${calibrate ? "pf-calibrate" : ""}`}
          style={{ aspectRatio: `${journey.viewW}/${journey.viewH}`, boxShadow: "0 20px 60px rgba(0,0,0,0.5)", borderRadius: "0.5rem", overflow: "hidden" }}
          onMouseMove={calibrate ? onCalMove : undefined}
          onClick={calibrate ? onCalClick : undefined}
          onMouseUp={calibrate ? onCalUp : undefined}
          onMouseLeave={calibrate ? onCalUp : undefined}
        >
          <Image
            src={journey.mapImage}
            alt={journey.mapAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 1024px"
            style={{ objectFit: "fill", background: "#c9a876" }}
          />

          {/* SVG: เส้นทาง + หมุดเดินทาง + เอฟเฟกต์ */}
          <svg
            viewBox={`0 0 ${journey.viewW} ${journey.viewH}`}
            preserveAspectRatio="none"
            className="absolute inset-0 w-full h-full"
            style={{ pointerEvents: "none" }}
            aria-hidden="true"
          >
            <defs>
              <radialGradient id="fjm-walker-glow">
                <stop offset="0%" stopColor={activeRoute.color} stopOpacity="0.9" />
                <stop offset="100%" stopColor={activeRoute.color} stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* เส้นทางที่เปิดแสดง (ไม่ใช่เส้น active): โชว์เต็มเส้น */}
            {routeGeom.map(({ route, d }) =>
              route.id !== activeRoute.id && visibleRoutes[route.id] ? (
                <path
                  key={route.id} d={d} fill="none" stroke={route.color}
                  strokeWidth="2.4" strokeOpacity="0.55" strokeLinecap="round" strokeDasharray="1 9"
                  style={{ filter: `drop-shadow(0 0 3px ${route.color})` }}
                />
              ) : null
            )}

            {/* เส้น active: ฐานจาง + trail เรืองแสงวาดตามการเดิน */}
            {activeGeom && visibleRoutes[activeRoute.id] && (
              <>
                <path d={activeGeom.d} fill="none" stroke={activeRoute.color} strokeWidth="1.6" strokeOpacity="0.25" strokeDasharray="5 7" />
                <path
                  ref={trailRef} d={activeGeom.d} fill="none" stroke={activeRoute.color}
                  strokeWidth="3" strokeLinecap="round"
                  style={{
                    strokeDasharray: activeGeom.len,
                    strokeDashoffset: reduced ? 0 : activeGeom.len,
                    filter: `drop-shadow(0 0 4px ${activeRoute.color})`,
                  }}
                />
              </>
            )}

            {/* เอฟเฟกต์ arrival: ripple + particles */}
            {effects.map((e) => (
              <g key={e.id} transform={`translate(${e.x} ${e.y})`}>
                <circle r="12" className="pf-ripple" fill="none" stroke={e.color} strokeWidth="2.5" />
                <circle r="12" className="pf-ripple" fill="none" stroke={e.color} strokeWidth="1.4" style={{ animationDelay: "0.2s" }} />
                {e.particles.map((p, i) => (
                  <circle key={i} r={p.r} className="pf-particle" fill={e.color} style={{ "--dx": `${p.dx.toFixed(1)}px`, "--dy": `${p.dy.toFixed(1)}px`, animationDelay: `${p.delay}s` }} />
                ))}
              </g>
            ))}

            {/* ผู้เดินทาง — เงา silhouette สวมเสื้อคลุม ไม่มีใบหน้า (แบบเดียวกับหน้าแรก) */}
            {!reduced && (
              <g ref={walkerRef} transform="translate(-100 -100)" style={{ pointerEvents: "none" }}>
                {/* เงาใต้เท้า ยึดตัวกับพื้นแผนที่ */}
                <ellipse cx="0" cy="1.5" rx="11" ry="3.4" fill="#000" opacity="0.28" style={{ filter: "blur(1.5px)" }} />
                <g ref={walkerBodyRef} transform="scale(1 1)">
                  {/* แสงเรืองรอบตัว (glow halo) ตามสีเส้นทาง */}
                  <circle cx="0" cy="-13" r="18" fill="url(#fjm-walker-glow)" opacity="0.5" />
                  {/* เงาผู้สวมเสื้อคลุม — ทึบ ไม่มีรายละเอียดบุคคล */}
                  <path d="M0,-25 C -6,-23 -8,-10 -10,0 L 10,0 C 8,-10 6,-23 0,-25 Z" fill={SILHOUETTE} />
                  <circle cx="0" cy="-25" r="5" fill={SILHOUETTE} />
                  <path d="M0,-25 C -6,-23 -8,-10 -10,0 L 10,0 C 8,-10 6,-23 0,-25 Z" fill="none" stroke={activeRoute.color} strokeWidth="0.7" opacity="0.55" />
                </g>
              </g>
            )}
          </svg>

          {/* HTML overlay: หมุดเมือง (ปุ่ม) + ป้ายชื่อ */}
          {journey.cities.map((c) => {
            const pos = cityByKey[c.key].pos;
            const v = visitedCities[c.key];
            const isCurrent = !reduced && currentStop && currentStop.city === c.key && cardData;
            return (
              <div
                key={c.key}
                className="absolute"
                style={{ left: `${pos.x * 100}%`, top: `${pos.y * 100}%`, transform: "translate(-50%, -50%)" }}
              >
                <button
                  aria-label={`เปิดประวัติเมือง${c.th}`}
                  onClick={(e) => { e.stopPropagation(); if (!calibrate) openCityCard(c.key); }}
                  onMouseDown={calibrate ? onCalPinDown(c.key) : undefined}
                  className="block rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                  style={{
                    width: c.minor ? 11 : 16,
                    height: c.minor ? 11 : 16,
                    background: v ? v.color : "rgba(212,175,55,0.85)",
                    border: "2px solid rgba(0,0,0,0.55)",
                    boxShadow: v ? `0 0 8px ${v.color}` : "0 0 5px rgba(212,175,55,0.7)",
                    cursor: calibrate ? "grab" : "pointer",
                  }}
                />
                {(v || calibrate) && (
                  <div
                    className={`absolute left-1/2 bottom-full mb-1 -translate-x-1/2 text-center whitespace-nowrap pointer-events-none ${isCurrent ? "fjm-label-zoom" : ""}`}
                    style={{ textShadow: "0 1px 3px rgba(0,0,0,0.9), 0 0 6px rgba(0,0,0,0.7)" }}
                  >
                    <span className="block font-cinzel font-bold text-white" style={{ fontSize: isCurrent ? 15 : c.minor ? 9 : 11, lineHeight: 1.2 }}>{c.en}</span>
                    <span className="block font-pridi" style={{ fontSize: isCurrent ? 12 : c.minor ? 9 : 10, color: v ? v.color : "#D4AF37" }}>{c.th}</span>
                  </div>
                )}
              </div>
            );
          })}

          {/* การ์ดประวัติป๊อปอัป — วางใกล้เมือง ด้านที่หันออกจากแนวเส้นทาง
              (ทิศ = เมือง − จุดศูนย์กลางเส้นทาง) และ clamp ไม่ให้หลุดขอบแผนที่ */}
          {cardData && (() => {
            const pos = cardData.city.pos;
            const stops = cardData.route.stops;
            let cx = 0, cy = 0;
            stops.forEach((s) => { const c = cityByKey[s.city]; cx += c.pos.x; cy += c.pos.y; });
            cx /= stops.length; cy /= stops.length;
            let dx = pos.x - cx, dy = pos.y - cy;
            if (Math.abs(dx) < 0.01 && Math.abs(dy) < 0.01) dx = 1; // เมืองอยู่กลางเส้นทางพอดี → ออกด้านขวา
            const CARD_W = 240, CARD_H = 185;
            let leftCalc, topCalc;
            if (Math.abs(dx) >= Math.abs(dy)) {
              // วางซ้าย/ขวาของเมือง เว้นระยะพ้นตัวละคร
              leftCalc = dx >= 0 ? `calc(${pos.x * 100}% + 26px)` : `calc(${pos.x * 100}% - ${CARD_W + 26}px)`;
              topCalc = `calc(${pos.y * 100}% - ${CARD_H / 2}px)`;
            } else {
              // วางบน/ล่างของเมือง (ด้านบนเว้นเผื่อป้ายชื่อซูม)
              leftCalc = `calc(${pos.x * 100}% - ${CARD_W / 2}px)`;
              topCalc = dy >= 0 ? `calc(${pos.y * 100}% + 20px)` : `calc(${pos.y * 100}% - ${CARD_H + 44}px)`;
            }
            return (
              <div
                role="dialog"
                aria-label={`ประวัติเมือง${cardData.city.th}`}
                className="fjm-card-in absolute z-20 w-[240px] rounded-lg p-3.5"
                style={{
                  left: `clamp(8px, ${leftCalc}, calc(100% - ${CARD_W + 8}px))`,
                  top: `clamp(8px, ${topCalc}, calc(100% - ${CARD_H + 8}px))`,
                  background: "rgba(232,216,176,0.94)",
                  border: "1px solid #C5A059",
                  boxShadow: `0 8px 28px rgba(0,0,0,0.45), 0 0 0 3px rgba(197,160,89,0.18), inset 0 0 24px rgba(197,160,89,0.12)`,
                  borderTop: `3px solid ${cardData.route.color}`,
                }}
              >
                <button
                  aria-label="ปิดการ์ดประวัติ"
                  onClick={(e) => { e.stopPropagation(); setCard(null); }}
                  className="absolute top-1.5 right-2 font-cinzel text-ink/50 hover:text-ink text-sm leading-none"
                >
                  ✕
                </button>
                <div className="flex items-center gap-2 mb-1.5">
                  <span
                    className="font-cinzel text-[11px] tracking-widest px-2 py-0.5 rounded"
                    style={{ background: cardData.route.color, color: "#fff", textShadow: "0 1px 2px rgba(0,0,0,0.4)" }}
                  >
                    {cardData.stop.year}
                  </span>
                </div>
                <h4 className="font-cinzel text-base font-bold text-ink leading-tight">{cardData.city.en}</h4>
                <p className="font-pridi text-xs text-ink-muted mb-1.5">{cardData.city.th}</p>
                <p className="font-pridi text-[13px] text-ink/85 leading-relaxed">{cardData.stop.th}</p>
                <p className="font-pridi text-[11px] mt-2 pt-1.5 border-t border-ink/15" style={{ color: cardData.route.color, filter: "brightness(0.72)" }}>
                  {cardData.route.name}
                </p>
              </div>
            );
          })()}

          {/* vignette */}
          <div className="absolute inset-0" style={{ pointerEvents: "none", background: "radial-gradient(ellipse at center, transparent 58%, rgba(0,0,0,0.4) 100%)" }} />

          {/* calibrate readout */}
          {calibrate && (
            <div className="absolute top-2 left-2 px-2 py-1 rounded text-[11px] font-mono z-30" style={{ background: "rgba(0,0,0,0.75)", color: "#D4AF37", pointerEvents: "none" }}>
              CALIBRATE — คลิก=คัดลอกพิกัด · ลากหมุดเพื่อปรับ
              {calPos && <span className="block">{`x: ${calPos.x.toFixed(3)}, y: ${calPos.y.toFixed(3)}`}</span>}
            </div>
          )}
        </div>
      </div>

      {/* ── แถบควบคุม ── */}
      <div className="max-w-5xl mx-auto mt-5 space-y-3">
        {/* ชิปเส้นทาง */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {journey.routes.map((r) => {
            const active = r.id === activeRoute.id;
            const shown = !!visibleRoutes[r.id];
            return (
              <div
                key={r.id}
                className={`flex items-center rounded-full border transition-all duration-base ${
                  active ? "shadow-glow-sm" : ""
                }`}
                style={{
                  borderColor: shown ? r.color : "rgba(255,255,255,0.2)",
                  background: active ? `${r.color}26` : "rgba(255,255,255,0.04)",
                  opacity: shown ? 1 : 0.5,
                }}
              >
                <button
                  aria-label={`เลือกและเริ่มเดินเส้นทาง ${r.name}`}
                  aria-pressed={active}
                  onClick={() => pickRoute(r.id)}
                  className="flex items-center gap-2 pl-3 pr-1.5 py-1.5 font-pridi text-xs text-paper-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-l-full"
                >
                  <span className="inline-block w-2.5 h-2.5 rounded-full" style={{ background: r.color, boxShadow: `0 0 6px ${r.color}` }} />
                  {r.name}
                </button>
                <button
                  aria-label={shown ? `ซ่อนเส้นทาง ${r.name}` : `แสดงเส้นทาง ${r.name}`}
                  aria-pressed={shown}
                  onClick={() => toggleRoute(r.id)}
                  className="px-2 py-1.5 text-sm leading-none focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-r-full"
                  style={{ opacity: shown ? 1 : 0.45 }}
                  title={shown ? "ซ่อนเส้นนี้" : "แสดงเส้นนี้"}
                >
                  👁
                </button>
              </div>
            );
          })}
          <button
            aria-label={allVisible ? "ซ่อนทุกเส้นทาง" : "แสดงทุกเส้นทาง"}
            onClick={toggleAll}
            className="font-pridi text-xs px-3 py-1.5 rounded-full border border-paper-white/25 text-paper-white/70 hover:border-gold/60 hover:text-gold transition-all duration-base"
          >
            {allVisible ? "ซ่อนทุกเส้นทาง" : "แสดงทุกเส้นทาง"}
          </button>
        </div>

        {/* เล่น/หยุด/เริ่มใหม่/ความเร็ว + progress */}
        {!reduced && (
          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="flex items-center gap-1.5">
              <button
                aria-label={playing ? "หยุดการเดินทางชั่วคราว" : "เล่นการเดินทาง"}
                onClick={() => { if (ended) { restart(); } else { setPlaying((p) => !p); } }}
                className="font-pridi text-sm w-9 h-9 rounded-full border border-gold/50 text-gold hover:bg-gold/10 transition-all duration-base"
              >
                {ended ? "↻" : playing ? "❚❚" : "▶"}
              </button>
              <button
                aria-label="เริ่มการเดินทางใหม่"
                onClick={restart}
                className="font-pridi text-sm w-9 h-9 rounded-full border border-paper-white/25 text-paper-white/70 hover:border-gold/60 hover:text-gold transition-all duration-base"
              >
                ↺
              </button>
            </div>
            <div className="flex items-center gap-1" role="group" aria-label="ความเร็วการเดินทาง">
              {SPEEDS.map((s) => (
                <button
                  key={s}
                  aria-label={`ความเร็ว ${s} เท่า`}
                  aria-pressed={speed === s}
                  onClick={() => setSpeed(s)}
                  className={`font-pridi text-[11px] px-2 py-1 rounded border transition-all duration-base ${
                    speed === s ? "border-gold text-gold bg-gold/10" : "border-paper-white/20 text-paper-white/60 hover:text-gold"
                  }`}
                >
                  {s}×
                </button>
              ))}
            </div>
            {/* ตัวบอกยุค + progress */}
            <div className="flex items-center gap-2 min-w-[220px] max-w-xs flex-1">
              <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.12)" }}>
                <div ref={progressRef} className="h-full rounded-full" style={{ width: "0%", background: activeRoute.color, boxShadow: `0 0 6px ${activeRoute.color}`, transition: "width 0.2s linear" }} />
              </div>
              <span className="font-pridi text-[11px] text-paper-white/70 whitespace-nowrap">
                {currentStop ? `${currentStop.year} · ${currentCity?.th || ""}` : ""}
              </span>
            </div>
          </div>
        )}
        {reduced && (
          <p className="text-center font-pridi text-xs text-paper-white/60">
            โหมดลดการเคลื่อนไหว: แสดงเส้นทางทั้งหมดแบบนิ่ง — คลิกหมุดเมืองเพื่ออ่านประวัติ
          </p>
        )}
      </div>

      {/* เชิงอรรถประวัติศาสตร์ */}
      <p className="max-w-3xl mx-auto mt-6 text-center font-pridi text-xs text-paper-white/50 leading-relaxed px-4">
        {journey.note}
      </p>
    </div>
  );
}
