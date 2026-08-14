"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const christianCities = [
  { name: "ROME", x: 492, y: 215 },
  { name: "THESSALONICA", x: 744, y: 160 },
  { name: "PHILIPPI", x: 824, y: 105 },
  { name: "CORINTH", x: 656, y: 340 },
  { name: "ATHENS", x: 736, y: 340 },
  { name: "EPHESUS", x: 912, y: 320 },
  { name: "CONSTANTINOPLE", x: 1056, y: 210 },
];

const islamicCities = [
  { name: "ALEXANDRIA", x: 752, y: 540 },
  { name: "TARSUS", x: 1280, y: 300 },
  { name: "ANTIOCH", x: 1216, y: 390 },
  { name: "DAMASCUS", x: 1184, y: 460 },
  { name: "JERUSALEM", x: 1120, y: 530 },
  { name: "KHAYBAR", x: 1152, y: 610 },
  { name: "MEDINA", x: 1248, y: 690 },
  { name: "TAIF", x: 1312, y: 750 },
  { name: "MECCA", x: 1312, y: 810 },
];

// ── Paths of Faith: เส้นทางเดินของผู้เผยแผ่ (subset เรียงลำดับ, พิกัดอิง viewBox 1600×1000) ──
const christianRoute = [
  { name: "JERUSALEM", nameTh: "เยรูซาเล็ม", x: 1120, y: 530 },
  { name: "DAMASCUS", nameTh: "ดามัสกัส", x: 1184, y: 460 },
  { name: "ANTIOCH", nameTh: "อันติออก", x: 1216, y: 390 },
  { name: "TARSUS", nameTh: "ทาร์ซัส", x: 1280, y: 300 },
  { name: "EPHESUS", nameTh: "เอเฟซัส", x: 912, y: 320 },
  { name: "CORINTH", nameTh: "โครินธ์", x: 656, y: 340 },
  { name: "THESSALONICA", nameTh: "เธสะโลนิกา", x: 744, y: 160 },
  { name: "PHILIPPI", nameTh: "ฟีลิปปี", x: 824, y: 105 },
  { name: "ROME", nameTh: "โรม", x: 492, y: 215 },
];
const islamicRoute = [
  { name: "MECCA", nameTh: "มักกะฮ์", x: 1312, y: 810 },
  { name: "TAIF", nameTh: "ฏออิฟ", x: 1312, y: 750 },
  { name: "MEDINA", nameTh: "มะดีนะฮ์", x: 1248, y: 690 },
  { name: "KHAYBAR", nameTh: "ค็อยบัร", x: 1152, y: 610 },
  { name: "JERUSALEM", nameTh: "เยรูซาเล็ม", x: 1120, y: 530 },
  { name: "DAMASCUS", nameTh: "ดามัสกัส", x: 1184, y: 460 },
  { name: "ANTIOCH", nameTh: "อันติออก", x: 1216, y: 390 },
  { name: "TARSUS", nameTh: "ทาร์ซัส", x: 1280, y: 300 },
];

// โทนสีตามเส้นทาง: อิสลาม = ทอง/มรกต, คริสต์ = น้ำเงินเงิน/อำพัน
const ROUTE_THEME = {
  islam: { glow: "#D4AF37", accent: "#0F5132", trail: "#D4AF37", speed: 105 },
  christian: { glow: "#7f9ecb", accent: "#B8860B", trail: "#7f9ecb", speed: 100 },
};
const SILHOUETTE = "#171310"; // เงาทึบ ไม่มีรายละเอียดใบหน้า (หลักการอิสลาม)

function polyPath(pts) {
  return "M " + pts.map((p) => `${p.x} ${p.y}`).join(" L ");
}
function polyLen(pts) {
  let s = 0;
  for (let i = 1; i < pts.length; i++) {
    s += Math.hypot(pts[i].x - pts[i - 1].x, pts[i].y - pts[i - 1].y);
  }
  return s;
}

// ฝุ่นทอง/ละอองแสงลอยช้าๆ — ค่าคงที่ (กัน hydration mismatch)
const DUST = [
  { x: 220, y: 180, r: 2.4, dx: 26, dy: -34, dur: 11, delay: 0, o: 0.35 },
  { x: 520, y: 120, r: 1.8, dx: -30, dy: 22, dur: 13, delay: 2, o: 0.28 },
  { x: 880, y: 90, r: 2.1, dx: 18, dy: 30, dur: 12, delay: 1, o: 0.32 },
  { x: 1180, y: 160, r: 1.6, dx: -22, dy: -26, dur: 14, delay: 3, o: 0.24 },
  { x: 360, y: 460, r: 2.6, dx: 30, dy: -20, dur: 10, delay: 4, o: 0.3 },
  { x: 760, y: 520, r: 1.9, dx: -26, dy: -30, dur: 15, delay: 1.5, o: 0.26 },
  { x: 1080, y: 440, r: 2.2, dx: 20, dy: 28, dur: 12, delay: 5, o: 0.3 },
  { x: 1360, y: 520, r: 1.7, dx: -18, dy: 24, dur: 13, delay: 2.5, o: 0.24 },
  { x: 480, y: 760, r: 2.3, dx: 28, dy: -24, dur: 11, delay: 3.5, o: 0.3 },
  { x: 980, y: 800, r: 2.0, dx: -24, dy: -28, dur: 14, delay: 0.5, o: 0.26 },
  { x: 1240, y: 860, r: 1.8, dx: 22, dy: 20, dur: 12, delay: 4.5, o: 0.28 },
  { x: 140, y: 640, r: 2.1, dx: 30, dy: 26, dur: 13, delay: 6, o: 0.24 },
];

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const els = root.querySelectorAll("[data-reveal]");
    els.forEach((el) => el.classList.add("reveal"));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return ref;
}

// ── Timeline: เอฟเฟกต์ตามการเลื่อนลง ─────────────────────────────
//  1) แกนกลางเรืองแสง "วิ่งลง" ตาม scroll (comet head นำหน้า)
//  2) การ์ดสไลด์เข้าแบบมีทิศทาง + node ติดไฟเมื่อโผล่เข้าจอ
function useTimelineScroll() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cards = el.querySelectorAll(".tl-card");

    if (reduced) {
      cards.forEach((c) => c.classList.add("tl-in"));
      el.style.setProperty("--tl-progress", "1");
      return;
    }

    // การ์ดโผล่เข้าจอ → ติด class tl-in (สไลด์เข้า + จุดเพชรติดไฟ)
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("tl-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25, rootMargin: "0px 0px -60px 0px" }
    );
    cards.forEach((c) => io.observe(c));

    // ความคืบหน้าการ scroll → เติมแกนกลางเรืองแสง
    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // 0 = ขอบบนของ timeline แตะเส้นกึ่งกลางล่างของจอ, 1 = เลื่อนพ้นทั้งบล็อก
      const p = (vh * 0.82 - rect.top) / rect.height;
      el.style.setProperty("--tl-progress", String(Math.max(0, Math.min(1, p))));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  return ref;
}

const condensedItems = [
  { side: "left", year: "ค.ศ. 610-632", title: "ยุคการประทานและบันทึกวะฮีย์" },
  { side: "right", year: "ค.ศ. 90-150", title: "ยุคปิตาจารย์ (Apostolic Fathers)" },
  { side: "left", year: "ค.ศ. 632", title: "ท่านนบีมูฮัมหมัดเสียชีวิต — ท่านอบูบักรเป็นเคาะลีฟะฮ์" },
  { side: "right", year: "ค.ศ. 140", title: "มาร์เชียนแห่งซิโนป — จุดหักเหสำคัญ" },
  { side: "left", year: "ค.ศ. 633 (ยุทธการยะมามะฮ์)", title: "จุดเปลี่ยนสำคัญ: การเสียชีวิตของฮาฟิซจำนวนมาก" },
  { side: "right", year: "ค.ศ. 150", title: "จัสติน มาร์เทอร์ ตอบโต้" },
  { side: "left", year: "ค.ศ. 633-634", title: "การรวบรวมโดย Zayd ibn Thābit" },
  { side: "right", year: "ค.ศ. 170-200", title: "Muratorian Canon" },
  { side: "left", year: "ค.ศ. 634-644", title: "Suḥuf เก็บรักษาโดยเคาะลีฟะฮ์" },
  { side: "right", year: "ค.ศ. 180", title: "อิเรเนียส — พระกิตติคุณ 4 เล่ม" },
  { side: "left", year: "ค.ศ. 644-656", title: "ยุคเคาะลีฟะฮ์อุษมาน" },
  { side: "right", year: "ค.ศ. 250", title: "โอริเจน — จัดหมวดหมู่ 3 กลุ่ม" },
  { side: "left", year: "ค.ศ. 650", title: " ท่าน Zayd ibn Thābit เป็นแกนนำชำระอัลกุรอานอีกครั้ง " },
  { side: "right", year: "ค.ศ. 325", title: "ยูเซบิอุส บันทึกยืนยัน" },
  { side: "left", year: "ค.ศ. 653", title: "ส่งมาตรฐานไปทั่วอาณาจักร" },
  { side: "right", year: "ค.ศ. 367", title: "อาธานาเซียส — รายชื่อ 27 เล่มครั้งแรก" },
  { side: "left", year: "ค.ศ. 656 เป็นต้นไป", title: "Muṣḥaf อุษมาน กลายเป็นมาตรฐานถาวร" },
  { side: "right", year: "ค.ศ. 382", title: "เจอโรม แปล Vulgate" },
  { side: "left", year: "ปัจจุบัน", title: "อัลกุรอานฉบับเดียวทั่วโลก" },
  { side: "right", year: "ค.ศ. 393 และ 397", title: "สภาฮิปโปและคาร์เธจ" },
];

const quranCondensed = condensedItems.filter((item) => item.side === "left");
const bibleCondensed = condensedItems.filter((item) => item.side === "right");

// ── ป้ายกำกับสีประจำคอลัมน์ + เลขโรมัน (ลายน้ำ) เหมือนหน้า textual-history ──
const TL_ACCENT = {
  quran: { label: "#8fd4a4", chipText: "#c3e8cd", chipBg: "rgba(35,110,60,0.35)", chipBorder: "rgba(63,174,90,0.4)" },
  bible: { label: "#8fb4e8", chipText: "#c9daf5", chipBg: "rgba(43,84,140,0.35)", chipBorder: "rgba(120,160,220,0.4)" },
};
const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"];

const collections = [
  {
    glyph: "📜",
    title: "Qur'anic Manuscripts",
    blurb:
      "ต้นฉบับอัลกุรอานยุคแรก ตั้งแต่ฉบับอักษรฮิญาซีในศตวรรษที่ 1 ฮ.ศ. จนถึงฉบับมาตรฐานสมัยอุษมาน บันทึกความต่อเนื่องของพระวจนะที่ไม่เปลี่ยนแปลง",
    href: "/archive/quran-manuscripts",
  },
  {
    glyph: "🕮",
    title: "Biblical Codices",
    blurb:
      "ต้นฉบับไบเบิลสำคัญอย่าง Codex Sinaiticus และ Codex Vaticanus เปรียบเทียบฉบับ Septuagint, Masoretic และ Patristic เพื่อศึกษาความแตกต่างของข้อความ",
    href: "/archive/biblical-codices",
  },
  {
    glyph: "✉",
    title: "Prophetic Letters",
    blurb:
      "จดหมายทางการทูตของท่านนบีมุฮัมมัด ﷺ ที่ทรงส่งถึงบรรดาประมุขและกษัตริย์ต่างแดน บางฉบับมีเอกสารต้นฉบับที่อ้างว่าหลงเหลือและเก็บรักษาในพิพิธภัณฑ์ อาทิ จดหมายถึงมุก็อวกิสที่พระราชวังท็อปกาปึ อิสตันบูล",
    href: "/archive/prophetic-letters",
  },
  {
    glyph: "⚜",
    title: "Other Writings Outside Canon",
    blurb:
      "งานเขียนคริสเตียนยุคแรกที่ไม่ได้รับการยอมรับเข้าในคัมภีร์ อาทิ พระวรสารนอกสารบบ จดหมายของบรรดา Church Fathers และข้อเขียน Gnostic ที่โบสถ์ปฏิเสธในภายหลัง",
    href: "/archive/other-writings",
  },
];

// ════════════════════════════════════════════════════════════════════
//  PropagationMap — แผนที่แอนิเมชั่น "Paths of Faith"
//  ผู้เดินทางแบบ silhouette (aniconic) + เอฟเฟกต์ arrival + กล้อง 2.5D
// ════════════════════════════════════════════════════════════════════
const CHRISTIAN_D = polyPath(christianRoute);
const ISLAMIC_D = polyPath(islamicRoute);
const CHRISTIAN_LEN = polyLen(christianRoute);
const ISLAMIC_LEN = polyLen(islamicRoute);

function renderWalker(trav, body, theme, gid, start, bodyFill = SILHOUETTE, bodyStroke = theme.glow) {
  return (
    <g ref={trav} transform={`translate(${start.x} ${start.y})`} style={{ pointerEvents: "none" }}>
      {/* เงาใต้เท้า ยึดตัวกับพื้นแผนที่ */}
      <ellipse cx="0" cy="1.5" rx="11" ry="3.4" fill="#000" opacity="0.28" style={{ filter: "blur(1.5px)" }} />
      <g ref={body} transform="scale(1 1)">
        {/* แสงเรืองรอบตัว (glow halo) ตามสีเส้นทาง */}
        <circle cx="0" cy="-13" r="18" fill={`url(#${gid})`} opacity="0.5" />
        {/* เงาผู้สวมเสื้อคลุม — ทึบ ไม่มีใบหน้า */}
        <path d="M0,-25 C -6,-23 -8,-10 -10,0 L 10,0 C 8,-10 6,-23 0,-25 Z" fill={bodyFill} />
        <circle cx="0" cy="-25" r="5" fill={bodyFill} />
        <path d="M0,-25 C -6,-23 -8,-10 -10,0 L 10,0 C 8,-10 6,-23 0,-25 Z" fill="none" stroke={bodyStroke} strokeWidth="0.7" opacity="0.55" />
      </g>
    </g>
  );
}

function PropagationMap() {
  const svgRef = useRef(null);
  const cameraRef = useRef(null);
  const cTrav = useRef(null), cBody = useRef(null), cTrail = useRef(null);
  const iTrav = useRef(null), iBody = useRef(null), iTrail = useRef(null);
  const camState = useRef({ x: 0, y: 0 });
  const effectId = useRef(0);

  const [reduced, setReduced] = useState(false);
  const [calibrate, setCalibrate] = useState(false);
  const [effects, setEffects] = useState([]);
  const [activated, setActivated] = useState({});

  // ตรวจ ?calibrate=1 และ prefers-reduced-motion
  useEffect(() => {
    if (typeof window === "undefined") return;
    setCalibrate(new URLSearchParams(window.location.search).get("calibrate") === "1");
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = (e) => setReduced(e.matches);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  // โหมดปกติ: walker เดินตาม path + trigger arrival + กล้อง parallax
  useEffect(() => {
    if (reduced) return;
    const routes = [
      { key: "christian", pts: christianRoute, theme: ROUTE_THEME.christian, trav: cTrav, body: cBody, trail: cTrail },
      { key: "islam", pts: islamicRoute, theme: ROUTE_THEME.islam, trav: iTrav, body: iBody, trail: iTrail },
    ];

    const fireArrival = (routeKey, wp, glow, big) => {
      const mapKey = `${routeKey}-${wp.name}`;
      setActivated((a) => (a[mapKey] ? a : { ...a, [mapKey]: { ...wp, glow } }));
      if (!big) return;
      const id = ++effectId.current;
      const particles = Array.from({ length: 14 }, (_, i) => {
        const ang = (i / 14) * Math.PI * 2 + (i % 3) * 0.4;
        const dist = 22 + ((i * 37) % 26);
        return { dx: Math.cos(ang) * dist, dy: Math.sin(ang) * dist, r: 1 + ((i * 7) % 3) * 0.5, delay: (i % 5) * 0.03 };
      });
      setEffects((e) => [...e, { id, x: wp.x, y: wp.y, glow, particles }]);
      setTimeout(() => setEffects((e) => e.filter((x) => x.id !== id)), 1500);
    };

    routes.forEach((r) => {
      r.cum = [0];
      r.seg = [];
      let t = 0;
      for (let i = 1; i < r.pts.length; i++) {
        const l = Math.hypot(r.pts[i].x - r.pts[i - 1].x, r.pts[i].y - r.pts[i - 1].y);
        r.seg.push(l); t += l; r.cum.push(t);
      }
      r.total = t; r.dist = 0; r.next = 1; r.pauseUntil = 0; r.lapHold = 0;
      fireArrival(r.key, r.pts[0], r.theme.glow, true);
    });

    const posAt = (r) => {
      let k = 0;
      while (k < r.seg.length - 1 && r.dist > r.cum[k + 1]) k++;
      const segLen = r.seg[k] || 1;
      const lt = Math.min(1, Math.max(0, (r.dist - r.cum[k]) / segLen));
      const a = r.pts[k], b = r.pts[k + 1] || r.pts[k];
      return { x: a.x + (b.x - a.x) * lt, y: a.y + (b.y - a.y) * lt, dx: b.x - a.x };
    };

    let raf, last = performance.now();
    const step = (now) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      let fx = 0, fy = 0, n = 0;
      routes.forEach((r) => {
        const atEnd = r.next >= r.pts.length;
        if (!atEnd && now >= r.pauseUntil) {
          r.dist += r.theme.speed * dt;
          if (r.dist >= r.cum[r.next]) {
            r.dist = r.cum[r.next];
            fireArrival(r.key, r.pts[r.next], r.theme.glow, true);
            r.pauseUntil = now + 620; // พักสั้นๆ ตอนถึงเมือง
            r.next++;
          }
        } else if (atEnd) {
          if (!r.lapHold) r.lapHold = now + 1600;
          if (now >= r.lapHold) {
            r.dist = 0; r.next = 1; r.pauseUntil = 0; r.lapHold = 0;
            setActivated((a) => {
              const c = { ...a };
              Object.keys(c).forEach((kk) => { if (kk.startsWith(r.key + "-")) delete c[kk]; });
              return c;
            });
            fireArrival(r.key, r.pts[0], r.theme.glow, false);
          }
        }
        const p = posAt(r);
        const depth = 0.82 + (p.y / 1000) * 0.34; // 2.5D: ล่าง=ใกล้=ใหญ่
        const flip = p.dx < -0.5 ? -1 : 1;
        const moving = now >= r.pauseUntil && !atEnd;
        const bob = moving ? Math.sin(now / 150) * 1.7 : 0;
        r.trav.current?.setAttribute("transform", `translate(${p.x.toFixed(1)} ${p.y.toFixed(1)}) scale(${depth.toFixed(3)})`);
        r.body.current?.setAttribute("transform", `translate(0 ${bob.toFixed(2)}) scale(${flip} 1)`);
        const frac = r.total ? r.dist / r.total : 0;
        if (r.trail.current) r.trail.current.style.strokeDashoffset = String((r.total * (1 - frac)).toFixed(1));
        fx += p.x; fy += p.y; n++;
      });
      // กล้อง parallax เบาๆ ตามตำแหน่งเฉลี่ยของผู้เดินทาง
      if (n && cameraRef.current) {
        const tx = ((fx / n) / 1600 - 0.5) * -4.4;
        const ty = ((fy / n) / 1000 - 0.5) * -3.0;
        const cs = camState.current;
        cs.x += (tx - cs.x) * 0.05;
        cs.y += (ty - cs.y) * 0.05;
        cameraRef.current.style.transform = `scale(1.06) translate(${cs.x.toFixed(3)}%, ${cs.y.toFixed(3)}%)`;
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [reduced]);

  // reduced-motion: วางผู้เดินทางที่ปลายทาง เติมเส้นเต็ม โชว์ชื่อทุกเมือง (ไม่มีเอฟเฟกต์)
  useEffect(() => {
    if (!reduced) return;
    const park = (pts, trav, body, trail) => {
      const last = pts[pts.length - 1];
      const depth = 0.82 + (last.y / 1000) * 0.34;
      trav.current?.setAttribute("transform", `translate(${last.x} ${last.y}) scale(${depth})`);
      body.current?.setAttribute("transform", "scale(1 1)");
      if (trail.current) trail.current.style.strokeDashoffset = "0";
    };
    park(christianRoute, cTrav, cBody, cTrail);
    park(islamicRoute, iTrav, iBody, iTrail);
    const all = {};
    christianRoute.forEach((w) => { all[`christian-${w.name}`] = { ...w, glow: ROUTE_THEME.christian.glow }; });
    islamicRoute.forEach((w) => { all[`islam-${w.name}`] = { ...w, glow: ROUTE_THEME.islam.glow }; });
    setActivated(all);
    if (cameraRef.current) cameraRef.current.style.transform = "none";
  }, [reduced]);

  const onCalibrate = (e) => {
    const svg = svgRef.current;
    if (!svg) return;
    const pt = svg.createSVGPoint();
    pt.x = e.clientX; pt.y = e.clientY;
    const m = svg.getScreenCTM();
    if (!m) return;
    const u = pt.matrixTransform(m.inverse());
    const xPct = ((u.x / 1600) * 100).toFixed(1);
    const yPct = ((u.y / 1000) * 100).toFixed(1);
    // eslint-disable-next-line no-console
    console.log(`[calibrate] unit x=${Math.round(u.x)} y=${Math.round(u.y)}  |  % x=${xPct} y=${yPct}`);
  };

  return (
    <div
      className={`relative mx-auto rounded-lg overflow-hidden max-w-4xl ${calibrate ? "pf-calibrate" : ""}`}
      style={{ aspectRatio: "890/548", boxShadow: "0 20px 60px rgba(0,0,0,0.5)" }}
    >
      <div ref={cameraRef} className="absolute inset-0" style={{ transformOrigin: "center", willChange: "transform" }}>
        <Image
          src="/map/propagation-map-v2.jpg"
          alt="แผนที่เส้นทางการเผยแพร่ศาสนาอิสลามและคริสต์"
          fill
          sizes="(max-width: 1024px) 100vw, 890px"
          priority
          className="object-cover"
          onError={(e) => { e.target.style.display = "none"; e.target.nextSibling.style.display = "flex"; }}
        />
        <div style={{ display: "none" }} className="absolute inset-0 items-center justify-center bg-[#c9a876]">
          <p className="font-pridi text-ink/60 text-sm">รอไฟล์ /map/propagation-map-v2.jpg</p>
        </div>

        <svg
          ref={svgRef}
          viewBox="0 0 1600 1000"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="xMidYMid slice"
          style={{ pointerEvents: calibrate ? "auto" : "none" }}
          onClick={calibrate ? onCalibrate : undefined}
        >
          <defs>
            <radialGradient id="pf-glow-islam">
              <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="pf-glow-christian">
              <stop offset="0%" stopColor="#7f9ecb" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#7f9ecb" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* ฝุ่นทอง/ละอองแสง ambient */}
          {!reduced && DUST.map((d, i) => (
            <circle
              key={i} cx={d.x} cy={d.y} r={d.r} fill="#D4AF37" className="pf-dust"
              style={{ "--dx": `${d.dx}px`, "--dy": `${d.dy}px`, "--dur": `${d.dur}s`, "--delay": `${d.delay}s`, "--maxo": d.o }}
            />
          ))}

          {/* เส้นทางฐาน (จาง) */}
          <path d={CHRISTIAN_D} fill="none" stroke="#7f9ecb" strokeWidth="1.4" strokeOpacity="0.22" strokeDasharray="5 7" />
          <path d={ISLAMIC_D} fill="none" stroke="#D4AF37" strokeWidth="1.4" strokeOpacity="0.22" strokeDasharray="5 7" />
          {/* เส้นทางเรืองแสง เติมตาม progress */}
          <path
            ref={cTrail} d={CHRISTIAN_D} fill="none" stroke={ROUTE_THEME.christian.trail} strokeWidth="2.2" strokeLinecap="round"
            style={{ strokeDasharray: CHRISTIAN_LEN, strokeDashoffset: CHRISTIAN_LEN, filter: "drop-shadow(0 0 3px rgba(127,158,203,0.85))" }}
          />
          <path
            ref={iTrail} d={ISLAMIC_D} fill="none" stroke={ROUTE_THEME.islam.trail} strokeWidth="2.2" strokeLinecap="round"
            style={{ strokeDasharray: ISLAMIC_LEN, strokeDashoffset: ISLAMIC_LEN, filter: "drop-shadow(0 0 3px rgba(212,175,55,0.85))" }}
          />

          {/* หมุดเมืองทั้งหมด */}
          {christianCities.map((c) => (
            <g key={c.name}>
              <circle cx={c.x} cy={c.y} r="5" fill="#1a1a1a" style={{ filter: "drop-shadow(0 0 4px rgba(0,0,0,0.9))" }} />
              {!reduced && (
                <circle cx={c.x} cy={c.y} r="8" fill="none" stroke="#7f9ecb" strokeWidth="1.4" opacity="0.5">
                  <animate attributeName="r" values="8;15;8" dur="2.8s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.55;0;0.55" dur="2.8s" repeatCount="indefinite" />
                </circle>
              )}
            </g>
          ))}
          {islamicCities.map((c) => (
            <g key={c.name}>
              <circle cx={c.x} cy={c.y} r="5" fill="#D4AF37" style={{ filter: "drop-shadow(0 0 4px rgba(212,175,55,0.9))" }} />
              {!reduced && (
                <circle cx={c.x} cy={c.y} r="8" fill="none" stroke="#D4AF37" strokeWidth="1.4" opacity="0.5">
                  <animate attributeName="r" values="8;15;8" dur="3.1s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.55;0;0.55" dur="3.1s" repeatCount="indefinite" />
                </circle>
              )}
            </g>
          ))}

          {/* เมืองที่ผ่านแล้ว: glow ค้าง + ป้ายชื่อ */}
          {Object.entries(activated).map(([k, c]) => (
            <g key={k} style={{ pointerEvents: "none" }}>
              <circle cx={c.x} cy={c.y} r="7.5" fill="none" stroke={c.glow} strokeWidth="2" opacity="0.9" style={{ filter: `drop-shadow(0 0 5px ${c.glow})` }} />
              <g className="pf-name">
                <text x={c.x} y={c.y - 20} textAnchor="middle" fill="#fff" fontFamily="var(--font-cinzel), serif" fontWeight="bold" fontSize="14" style={{ paintOrder: "stroke", stroke: "rgba(0,0,0,0.85)", strokeWidth: 3 }}>{c.name}</text>
                <text x={c.x} y={c.y - 6} textAnchor="middle" fill={c.glow} fontFamily="var(--font-pridi), sans-serif" fontSize="11" style={{ paintOrder: "stroke", stroke: "rgba(0,0,0,0.8)", strokeWidth: 2.5 }}>{c.nameTh}</text>
              </g>
            </g>
          ))}

          {/* เอฟเฟกต์ arrival: ripple + particle burst */}
          {effects.map((e) => (
            <g key={e.id} transform={`translate(${e.x} ${e.y})`} style={{ pointerEvents: "none" }}>
              <circle r="12" className="pf-ripple" fill="none" stroke={e.glow} strokeWidth="2" />
              <circle r="12" className="pf-ripple" fill="none" stroke={e.glow} strokeWidth="1.2" style={{ animationDelay: "0.2s" }} />
              {e.particles.map((p, i) => (
                <circle key={i} r={p.r} className="pf-particle" fill={e.glow} style={{ "--dx": `${p.dx.toFixed(1)}px`, "--dy": `${p.dy.toFixed(1)}px`, animationDelay: `${p.delay}s` }} />
              ))}
            </g>
          ))}

          {/* ผู้เดินทาง silhouette ทั้งสองเส้นทาง */}
          {renderWalker(cTrav, cBody, ROUTE_THEME.christian, "pf-glow-christian", christianRoute[0])}
          {renderWalker(iTrav, iBody, ROUTE_THEME.islam, "pf-glow-islam", islamicRoute[0], "#8b1a1a", "#3a0a0a")}
        </svg>
      </div>

      {/* vignette (คงที่ นอกกล้อง) */}
      <div className="absolute inset-0" style={{ pointerEvents: "none", background: "radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.45) 100%)" }} />

      {calibrate && (
        <div className="absolute top-2 left-2 px-2 py-1 rounded text-[10px] font-mono" style={{ background: "rgba(0,0,0,0.72)", color: "#D4AF37", pointerEvents: "none" }}>
          CALIBRATE — คลิกบนแผนที่ ดูพิกัดใน console
        </div>
      )}
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════
//  FeaturedVideoTheater — จอวิดีโอแบบโรงละคร (click-to-play facade)
//  โหลดเป็นภาพปกก่อน คลิกแล้วจึงฝัง iframe autoplay → เร็วและอลังการ
// ════════════════════════════════════════════════════════════════════
const FEATURED_VIDEO_ID = "JrJSmEhp15o";

function FeaturedVideoTheater() {
  const [playing, setPlaying] = useState(false);

  return (
    <div id="video-section" data-reveal className="relative w-full max-w-3xl mx-auto">

      {/* ลำแสงโปรเจกเตอร์สาดลงจากด้านบนสู่จอ */}
      <div className="intro-cine-projector" aria-hidden />

      {/* แสงเรืองรอบจอ (aura ทอง-แดงเข้ม) */}
      <div
        className="absolute -inset-8 md:-inset-12 rounded-[2rem] blur-3xl intro-cine-aura"
        aria-hidden
      />

      {/* กรอบจดหมายเหตุชั้นนอก + วงแหวนแสงหมุน */}
      <div className="intro-lux-frame intro-cine-frame relative rounded-2xl p-2.5 md:p-4">
        <span className="intro-cine-halo" aria-hidden />
        <span className="ic-corner ic-corner-tl" />
        <span className="ic-corner ic-corner-tr" />
        <span className="ic-corner ic-corner-bl" />
        <span className="ic-corner ic-corner-br" />

        <div
          className="relative rounded-xl overflow-hidden ring-1 ring-gold/30 bg-black"
          style={{ boxShadow: "0 32px 80px -16px rgba(0,0,0,0.8), inset 0 0 0 1px rgba(212,175,55,0.18)" }}
        >
          <div className="relative pb-[56.25%] h-0">
            {playing ? (
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${FEATURED_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
                title="การศึกษาคัมภีร์โบราณ — Featured Lecture"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            ) : (
              <button
                type="button"
                onClick={() => setPlaying(true)}
                className="group absolute inset-0 w-full h-full cursor-pointer"
                aria-label="เล่นวิดีโอ: การศึกษาคัมภีร์โบราณ"
              >
                {/* ภาพปกจาก YouTube */}
                <Image
                  src={`https://img.youtube.com/vi/${FEATURED_VIDEO_ID}/maxresdefault.jpg`}
                  alt="ปกวิดีโอ การศึกษาคัมภีร์โบราณ"
                  fill
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
                  onError={(e) => {
                    e.target.src = `https://img.youtube.com/vi/${FEATURED_VIDEO_ID}/hqdefault.jpg`;
                  }}
                />
                {/* ฟิล์มไล่เฉด cinematic + วิกเน็ตต์ */}
                <span
                  className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-80"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(10,6,4,0.35) 0%, rgba(10,6,4,0.05) 35%, rgba(10,6,4,0.15) 60%, rgba(10,6,4,0.78) 100%), radial-gradient(ellipse at center, transparent 45%, rgba(0,0,0,0.5) 100%)",
                  }}
                />
                {/* ประกายแสงกวาดผ่านจอ */}
                <span className="intro-cine-sheen" aria-hidden />

                {/* ปุ่ม Play กลางจอ */}
                <span className="absolute inset-0 grid place-items-center">
                  <span className="intro-cine-play grid place-items-center transition-transform duration-500 group-hover:scale-110">
                    <svg className="w-7 h-7 md:w-9 md:h-9 translate-x-0.5 text-ink" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </span>

                {/* แถบชื่อเรื่องด้านล่างจอ */}
                <span className="absolute inset-x-0 bottom-0 px-5 pb-5 md:px-8 md:pb-7 text-left">
                  <span className="flex items-center gap-2 mb-2">
                    <span className="h-px w-6 bg-gold/60" />
                    <span className="font-cinzel text-[0.55rem] md:text-[0.65rem] text-gold/90 tracking-[0.35em] uppercase">
                      Featured Lecture
                    </span>
                  </span>
                  <span className="block font-pridi text-paper-white text-base md:text-2xl font-semibold leading-snug drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                    การศึกษาและพิสูจน์คัมภีร์โบราณ
                  </span>
                  <span className="mt-2 inline-flex items-center gap-2 font-pridi text-xs md:text-sm text-paper-white/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                    คลิกเพื่อรับชมการบรรยาย
                  </span>
                </span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Caption plate ใต้จอ */}
      <div className="flex items-center justify-center gap-3 mt-6">
        <span className="h-px w-8 md:w-14 bg-gradient-to-r from-transparent to-gold/50" />
        <span className="intro-lux-diamond" style={{ width: 5, height: 5 }} />
        <p className="font-cinzel text-[0.6rem] md:text-xs text-gold/60 text-center tracking-[0.3em] uppercase">
          Featured Lecture — Textual History
        </p>
        <span className="intro-lux-diamond" style={{ width: 5, height: 5 }} />
        <span className="h-px w-8 md:w-14 bg-gradient-to-l from-transparent to-gold/50" />
      </div>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════
//  MiniVideoCard — ตัวอย่างวิดีโอขนาดเล็ก (click-to-play facade เช่นกัน)
//  โหลดเป็นภาพปก hqdefault ก่อน คลิกแล้วจึงฝัง iframe → ไม่ถ่วงหน้าเว็บ
// ════════════════════════════════════════════════════════════════════
const INTRO_SAMPLE_VIDEOS = [
  { id: "8aMU3Se2XdY", th: "การส่งต่อ", en: "Transmission" },
  { id: "DBhPfdDi7o4", th: "การเก็บรักษา", en: "Preservation" },
  { id: "TFe0A8_kNcs", th: "การเปลี่ยนแปลง", en: "Variation" },
];

function MiniVideoCard({ video }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="intro-lux-pillar intro-mini-card">
      <div className="relative rounded-md overflow-hidden ring-1 ring-gold/25 bg-black">
        <div className="relative pb-[56.25%] h-0">
          {playing ? (
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1`}
              title={`ตัวอย่างวิดีโอ: ${video.th}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          ) : (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              className="group absolute inset-0 w-full h-full cursor-pointer"
              aria-label={`เล่นตัวอย่างวิดีโอ: ${video.th}`}
            >
              <Image
                src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                alt={`ปกตัวอย่างวิดีโอ ${video.th}`}
                fill
                sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 250px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
              />
              <span
                className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-70"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(10,6,4,0.25) 0%, rgba(10,6,4,0.05) 45%, rgba(10,6,4,0.6) 100%)",
                }}
              />
              <span className="absolute inset-0 grid place-items-center">
                <span className="intro-mini-play grid place-items-center transition-transform duration-500 group-hover:scale-110">
                  <svg className="w-3.5 h-3.5 translate-x-px text-ink" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </span>
            </button>
          )}
        </div>
      </div>

      <span className="block font-pridi text-sm md:text-base text-paper-white/90 font-medium mt-3">{video.th}</span>
      <span className="block font-cinzel text-[0.55rem] md:text-[0.6rem] text-gold/60 tracking-[0.2em] uppercase mt-1">{video.en}</span>
    </div>
  );
}

export default function Home() {
  const rootRef = useReveal();
  const timelineRef = useTimelineScroll();

  return (
    <div ref={rootRef} className="bg-paper text-ink">
      <Navbar />

      {/* HERO */}
      <section
        id="home"
        className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
      >

        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/header.png"
            alt="Ancient Library"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/40 to-ink/70" />
        </div>

        {/* แสงลอดหน้าต่างซ้าย - Beam 1 (หลัก) */}
        <div
          className="absolute z-10 pointer-events-none"
          style={{
            top: '-10%',
            left: '-5%',
            width: '45%',
            height: '130%',
            background: 'linear-gradient(105deg, transparent 0%, rgba(197,160,89,0.12) 30%, rgba(212,175,55,0.25) 50%, rgba(197,160,89,0.12) 70%, transparent 100%)',
            animation: 'lightBeam 4s ease-in-out infinite',
            transformOrigin: 'top left',
          }}
        />

        {/* แสงลอดหน้าต่างซ้าย - Beam 2 */}
        <div
          className="absolute z-10 pointer-events-none"
          style={{
            top: '-10%',
            left: '2%',
            width: '35%',
            height: '120%',
            background: 'linear-gradient(110deg, transparent 0%, rgba(197,160,89,0.08) 40%, rgba(212,175,55,0.18) 55%, rgba(197,160,89,0.08) 70%, transparent 100%)',
            animation: 'lightBeam2 5s ease-in-out infinite',
            animationDelay: '1s',
            transformOrigin: 'top left',
          }}
        />

        {/* แสงลอดหน้าต่างซ้าย - Beam 3 (บาง) */}
        <div
          className="absolute z-10 pointer-events-none"
          style={{
            top: '-5%',
            left: '-2%',
            width: '25%',
            height: '110%',
            background: 'linear-gradient(100deg, transparent 0%, rgba(212,175,55,0.06) 45%, rgba(250,240,230,0.15) 55%, rgba(212,175,55,0.06) 65%, transparent 100%)',
            animation: 'lightBeam3 3.5s ease-in-out infinite',
            animationDelay: '0.5s',
            transformOrigin: 'top left',
          }}
        />

        {/* ฝุ่นล่องลอย - Particle 1 */}
        <div className="absolute z-10 pointer-events-none" style={{ top: '40%', left: '15%' }}>
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                width: i % 3 === 0 ? '3px' : '2px',
                height: i % 3 === 0 ? '3px' : '2px',
                borderRadius: '50%',
                backgroundColor: `rgba(212, 175, 55, ${0.4 + (i % 4) * 0.15})`,
                top: `${(i * 37) % 100}px`,
                left: `${(i * 53) % 200}px`,
                animation: `dustFloat${(i % 3) + 1} ${3 + (i % 4)}s ease-in-out infinite`,
                animationDelay: `${i * 0.4}s`,
              }}
            />
          ))}
        </div>

        {/* ฝุ่นล่องลอย - Particle 2 (กลาง) */}
        <div className="absolute z-10 pointer-events-none" style={{ top: '30%', left: '30%' }}>
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                width: '2px',
                height: '2px',
                borderRadius: '50%',
                backgroundColor: `rgba(250, 240, 230, ${0.3 + (i % 3) * 0.2})`,
                top: `${(i * 29) % 80}px`,
                left: `${(i * 43) % 150}px`,
                animation: `dustFloat${(i % 3) + 1} ${4 + (i % 3)}s ease-in-out infinite`,
                animationDelay: `${i * 0.6}s`,
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-gutter max-w-5xl mx-auto">

          <h1 className="mb-6 leading-tight">
            <span className="block font-cinzel font-normal tracking-wide mb-3 text-5xl md:text-7xl lg:text-8xl text-shimmer">
              A Comparative Study
            </span>
            <span
              className="block font-cinzel font-medium tracking-wider italic text-4xl md:text-6xl lg:text-7xl text-gold text-glow-pulse"
              style={{ textShadow: '0 0 30px rgba(197,160,89,0.6)' }}
            >
              of Ancient Texts
            </span>
          </h1>

          <p
            className="font-pridi text-xl md:text-2xl text-paper-white/90 mb-10 max-w-3xl mx-auto leading-relaxed font-light"
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
          >
            การศึกษาเปรียบเทียบ สำเนาคัมภีร์โบราณ<br />
            การส่งต่อ การเก็บรักษา การถูกเปลี่ยนแปลง<br />
            อันนำไปสู่ความจริงเพียงหนึ่งเดียว
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.getElementById('collections-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary font-pridi text-lg"
            >
              เริ่มต้นค้นคว้า
            </button>
            <button
              className="btn-outline font-pridi text-lg"
              onClick={() => document.getElementById('timeline-section')?.scrollIntoView({ behavior: 'smooth' })}
            >
              เรียนรู้ประวัติศาสตร์ ↓
            </button>
          </div>

        </div>

      </section>

      {/* INTRO / FEATURED LECTURE */}
      <section id="intro-section" className="intro-lux relative py-24 md:py-32 bg-ink overflow-hidden">

        {/* ── ฉากหลังอลังการ: แสงเรือง + ลายเส้นทอง + ละอองแสง ── */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          {/* แสงเรืองมุมบนซ้าย / ล่างขวา */}
          <div className="absolute -top-32 -left-24 w-[34rem] h-[34rem] rounded-full bg-gold/[0.07] blur-[120px]" />
          <div className="absolute -bottom-40 -right-16 w-[38rem] h-[38rem] rounded-full bg-[#8b1a1a]/[0.10] blur-[130px]" />
          {/* เส้นตารางจาง (ลายกระดาษจดหมายเหตุ) */}
          <div className="absolute inset-0 intro-lux-grid opacity-[0.05]" />
          {/* ลำแสงเฉียงบางๆ */}
          <div className="absolute -top-1/4 left-1/3 w-[42%] h-[150%] intro-lux-beam" />
          {/* ละอองทองล่องลอย */}
          {[...Array(10)].map((_, i) => (
            <span
              key={i}
              className="absolute rounded-full"
              style={{
                width: i % 3 === 0 ? '3px' : '2px',
                height: i % 3 === 0 ? '3px' : '2px',
                top: `${(i * 47) % 100}%`,
                left: `${(i * 71) % 100}%`,
                backgroundColor: `rgba(212,175,55,${0.25 + (i % 4) * 0.12})`,
                boxShadow: '0 0 6px rgba(212,175,55,0.5)',
                animation: `dustFloat${(i % 3) + 1} ${9 + (i % 5)}s ease-in-out infinite`,
                animationDelay: `${i * 0.7}s`,
              }}
            />
          ))}
        </div>

        {/* ── เส้นขอบบนประดับ + ออร์นาเมนต์กลาง ── */}
        <div data-reveal className="relative max-w-6xl mx-auto px-gutter mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-4 md:gap-6">
            <span className="h-px flex-1 max-w-[10rem] md:max-w-xs bg-gradient-to-r from-transparent to-gold/50" />
            <span className="intro-lux-diamond" />
            <span className="font-cinzel text-[0.6rem] md:text-xs text-gold/70 tracking-[0.5em] uppercase whitespace-nowrap">
              The Only One Truth
            </span>
            <span className="intro-lux-diamond" />
            <span className="h-px flex-1 max-w-[10rem] md:max-w-xs bg-gradient-to-l from-transparent to-gold/50" />
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto px-gutter">

          {/* === CINEMATIC THEATER LAYOUT: หัวเรื่องกลาง → จอวิดีโอใหญ่ → เสาหลัก + CTA === */}

          {/* หัวเรื่องกลาง */}
          <div className="relative text-center max-w-3xl mx-auto mb-12 md:mb-16">

            {/* ลายน้ำอักษรประดับด้านหลังหัวข้อ (aniconic) */}
            <span
              className="intro-lux-watermark font-amiri"
              style={{ left: "50%", transform: "translateX(-50%)", top: "-4.5rem" }}
              aria-hidden
            >۞</span>

            <div data-reveal className="flex items-center justify-center gap-3 mb-7">
              <span className="h-px w-8 bg-gradient-to-r from-transparent to-gold/60" />
              <p className="font-cinzel text-[0.65rem] md:text-xs text-gold/80 tracking-[0.3em] uppercase">
                A Visual Chronicle of the Sacred Texts
              </p>
              <span className="h-px w-8 bg-gradient-to-l from-transparent to-gold/60" />
            </div>

            <h2 data-reveal className="relative mb-7 leading-[1.08]">
              <span className="block font-cinzel text-4xl md:text-5xl lg:text-[3.9rem] text-paper-white font-normal tracking-wide mb-2">
                รับชมการบรรยายพิเศษ
              </span>
              <span className="block font-cinzel text-4xl md:text-5xl lg:text-[3.9rem] font-medium tracking-wider intro-lux-title">
                พิสูจน์คัมภีร์โบราณ
              </span>
            </h2>

            <div data-reveal className="flex items-center justify-center gap-2 mb-8">
              <span className="h-0.5 w-16 bg-gradient-to-r from-gold/10 to-gold rounded-full" />
              <span className="w-1.5 h-1.5 rotate-45 bg-gold/70" />
              <span className="h-0.5 w-16 bg-gradient-to-l from-gold/10 to-gold rounded-full" />
            </div>

            <p data-reveal className="font-pridi text-paper-white/80 leading-[1.9] text-base md:text-lg mx-auto max-w-2xl">
              เชิญรับชมการบรรยายที่จะพาคุณย้อนรอยประวัติศาสตร์ของตัวบทคัมภีร์ทีละขั้น
              ผ่านหลักฐานต้นฉบับโบราณที่เรียบเรียงเป็นภาพให้เข้าใจง่าย
              ตั้งแต่การส่งต่อ การเก็บรักษา ไปจนถึงร่องรอยการเปลี่ยนแปลง
              อันนำไปสู่ความจริงเพียงหนึ่งเดียว
            </p>
          </div>

          {/* จอวิดีโอโรงละคร */}
          <FeaturedVideoTheater />

          {/* ตัวอย่างวิดีโอ 3 หัวข้อ ใต้จอ */}
          <div data-reveal className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-4 md:gap-6 max-w-sm sm:max-w-3xl mx-auto mt-12 md:mt-14 mb-11">
            {INTRO_SAMPLE_VIDEOS.map((v) => (
              <MiniVideoCard key={v.en} video={v} />
            ))}
          </div>

          {/* ปุ่ม CTA */}
          <div data-reveal className="flex flex-wrap items-center justify-center gap-5">
            <a
              href={`https://www.youtube.com/watch?v=${FEATURED_VIDEO_ID}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-gold/90 hover:bg-gold text-ink font-pridi font-semibold px-8 py-3.5 rounded-md transition-all duration-300 shadow-glow hover:shadow-[0_0_28px_rgba(212,175,55,0.55)] hover:-translate-y-0.5"
            >
              <span className="grid place-items-center w-6 h-6 rounded-full bg-ink/15 transition-transform duration-300 group-hover:scale-110">
                <svg className="w-3 h-3 translate-x-px" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </span>
              รับชมบน YouTube
            </a>
          </div>

        </div>
      </section>

      {/* SCRIPTURE TIMELINE — condensed, สไตล์จดหมายเหตุเดียวกับ /textual-history */}
      <section
        id="timeline-section"
        className="relative py-section md:py-24 overflow-hidden"
        style={{
          background:
            "radial-gradient(110% 55% at 50% 0%, rgba(74,44,32,0.85) 0%, rgba(74,44,32,0) 60%), radial-gradient(120% 60% at 50% 100%, rgba(62,39,35,0.9) 0%, rgba(62,39,35,0) 55%), linear-gradient(180deg, #32201a 0%, #241410 45%, #1d100c 70%, #2c1b15 100%)",
        }}
      >
        {/* แสงพื้นหลังอัมเบียนต์ + วิกเน็ตต์ */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-gold/[0.06] blur-3xl" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[46rem] h-[46rem] rounded-full bg-gold/[0.04] blur-[140px]" />
          <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-gold-light/[0.05] blur-3xl" />
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse 90% 70% at center, transparent 55%, rgba(10,5,3,0.45) 100%)" }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <div data-reveal className="flex items-center justify-center gap-3 md:gap-4 mb-5">
              <span className="h-px w-10 md:w-20 bg-gradient-to-r from-transparent to-gold/60" />
              <span className="intro-lux-diamond" />
              <p className="font-cinzel text-[0.6rem] md:text-xs tracking-[0.45em] uppercase text-gold/80 whitespace-nowrap">
                Chronicle of the Scriptures
              </p>
              <span className="intro-lux-diamond" />
              <span className="h-px w-10 md:w-20 bg-gradient-to-l from-transparent to-gold/60" />
            </div>
            <h2
              data-reveal
              className="font-pridi text-3xl md:text-5xl text-paper-white mb-5 leading-tight"
            >
              ประวัติศาสตร์การรวบรวมคัมภีร์
            </h2>
            <div data-reveal className="flex items-center justify-center gap-2 mb-6">
              <span className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent to-gold/70" />
              <span className="w-1.5 h-1.5 rotate-45 bg-gold/80" />
              <span className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent to-gold/70" />
            </div>
            <p
              data-reveal
              className="font-pridi text-base md:text-lg text-paper-white/70 leading-relaxed"
            >
              เปรียบเทียบกระบวนการอนุรักษ์พระวจนะศักดิ์สิทธิ์ตามลำดับเวลา
            </p>
          </div>

          {/* Column headers */}
          <div className="grid grid-cols-2 mb-4 md:mb-8">
            <div data-reveal className="text-center pr-2 md:pr-10 lg:pr-16">
              <span
                className="font-pridi text-xs md:text-base tracking-[0.15em] md:tracking-[0.2em] uppercase font-bold"
                style={{ color: TL_ACCENT.quran.label }}
              >
                อัลกุรอาน
              </span>
              <div className="mx-auto h-px w-12 mt-2" style={{ background: TL_ACCENT.quran.chipBorder }} />
            </div>
            <div data-reveal className="text-center pl-2 md:pl-10 lg:pl-16">
              <span
                className="font-pridi text-xs md:text-base tracking-[0.15em] md:tracking-[0.2em] uppercase font-bold"
                style={{ color: TL_ACCENT.bible.label }}
              >
                ไบเบิล
              </span>
              <div className="mx-auto h-px w-12 mt-2" style={{ background: TL_ACCENT.bible.chipBorder }} />
            </div>
          </div>

          <div ref={timelineRef} className="relative">
            {/* พื้นหลังอักษรศักดิ์สิทธิ์: อาหรับ (อัลกุรอาน · ซ้าย) ปะทะ กรีก (ไบเบิล · ขวา) กลางแกน */}
            <div className="tl-scripture" aria-hidden>
              <span className="tl-verse tl-verse-ar tl-verse--1 font-amiri">إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ</span>
              <span className="tl-verse tl-verse-gr tl-verse--2">Ἐν ἀρχῇ ἦν ὁ λόγος</span>
              <span className="tl-verse tl-verse-ar tl-verse--3 font-amiri">وَإِنَّا لَهُ لَحَافِظُونَ</span>
              <span className="tl-verse tl-verse-gr tl-verse--4">καὶ ὁ λόγος ἦν πρὸς τὸν θεόν</span>
              {/* แสงเรืองทองจางๆ ตามแนวแกนกลาง */}
              <div className="tl-scripture-seam" />
            </div>
            {/* Center axis */}
            <div className="timeline-axis" />
            {/* แกนเรืองแสงเติมตาม scroll + หัวดาวหาง */}
            <div className="timeline-axis-fill" aria-hidden />

            <div className="relative z-10 grid grid-cols-2 gap-3 md:gap-8">
              {/* Left column: Quran */}
              <div className="space-y-3 md:space-y-6">
                {quranCondensed.map((item, i) => (
                  <div
                    key={i}
                    className="tl-card tl-card--left relative md:pr-10 lg:pr-16"
                    style={{ transitionDelay: `${i * 70}ms` }}
                  >
                    <div className="relative">
                      <article className="tl-panel rounded-card px-3 py-3 md:px-5 md:py-4">
                        <span className="ic-corner ic-corner-tl" />
                        <span className="ic-corner ic-corner-tr" />
                        <span className="ic-corner ic-corner-bl" />
                        <span className="ic-corner ic-corner-br" />
                        <span className="ic-watermark font-amiri">{ROMAN[i]}</span>
                        <p
                          className="relative inline-block font-pridi text-[10px] md:text-xs px-2.5 py-0.5 md:px-3 md:py-1 rounded-full mb-1.5 md:mb-2 border"
                          style={{
                            color: TL_ACCENT.quran.chipText,
                            background: TL_ACCENT.quran.chipBg,
                            borderColor: TL_ACCENT.quran.chipBorder,
                          }}
                        >
                          {item.year}
                        </p>
                        <h3 className="relative font-pridi text-paper-white font-bold text-xs md:text-base leading-snug">
                          {item.title}
                        </h3>
                      </article>
                      <div className="timeline-connector-left hidden md:block" />
                    </div>
                    <div className="hidden md:block absolute right-0 translate-x-1/2 top-7">
                      <div className="tl-node8"><span className="tl-node8-core" /></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right column: Bible */}
              <div className="space-y-3 md:space-y-6">
                {bibleCondensed.map((item, i) => (
                  <div
                    key={i}
                    className="tl-card tl-card--right relative md:pl-10 lg:pl-16"
                    style={{ transitionDelay: `${i * 70}ms` }}
                  >
                    <div className="hidden md:block absolute left-0 -translate-x-1/2 top-7">
                      <div className="tl-node8"><span className="tl-node8-core" /></div>
                    </div>
                    <div className="relative">
                      <article className="tl-panel rounded-card px-3 py-3 md:px-5 md:py-4">
                        <span className="ic-corner ic-corner-tl" />
                        <span className="ic-corner ic-corner-tr" />
                        <span className="ic-corner ic-corner-bl" />
                        <span className="ic-corner ic-corner-br" />
                        <span className="ic-watermark font-cinzel">{ROMAN[i]}</span>
                        <p
                          className="relative inline-block font-pridi text-[10px] md:text-xs px-2.5 py-0.5 md:px-3 md:py-1 rounded-full mb-1.5 md:mb-2 border"
                          style={{
                            color: TL_ACCENT.bible.chipText,
                            background: TL_ACCENT.bible.chipBg,
                            borderColor: TL_ACCENT.bible.chipBorder,
                          }}
                        >
                          {item.year}
                        </p>
                        <h3 className="relative font-pridi text-paper-white font-bold text-xs md:text-base leading-snug">
                          {item.title}
                        </h3>
                      </article>
                      <div className="timeline-connector-right hidden md:block" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div data-reveal className="text-center mt-12">
            <Link
              href="/textual-history"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-ink font-pridi font-semibold px-8 py-3.5 rounded-btn text-base tracking-wide transition-all duration-300 shadow-card hover:shadow-card-hover hover:-translate-y-0.5"
            >
              ศึกษาเพิ่มเติม
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* COLLECTIONS */}
      <section id="collections-section" className="py-section md:py-28 bg-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
            <p
              data-reveal
              className="font-cinzel text-xs tracking-[0.4em] uppercase text-gold-dark mb-4"
            >
              The Archive
            </p>
            <h2
              data-reveal
              className="font-cinzel text-3xl md:text-5xl text-ink mb-5 leading-tight"
            >
              Our Collections
            </h2>
            <div
              data-reveal
              className="mx-auto h-px w-24 bg-gold mb-6"
            />
            <p
              data-reveal
              className="font-cinzel text-base md:text-lg text-ink/75 leading-relaxed"
            >
              คัดสรรคอลเลกชันจากสามสายธารแห่งการถ่ายทอดพระวจนะ — แต่ละเล่มถูกบันทึก เปรียบเทียบ และอธิบายบริบทอย่างเป็นระบบ
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {collections.map((c, i) => (
              <article
                key={c.title}
                data-reveal
                style={{ transitionDelay: `${i * 90}ms` }}
                className="group relative bg-paper-light border-2 border-gold/30 rounded-card p-7 md:p-9 hover:shadow-2xl hover:border-gold transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-gold/15 transition-colors duration-500" />
                <div className="relative">
                  <div className="text-5xl mb-5 text-gold transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
                    {c.glyph}
                  </div>
                  <h3 className="font-cinzel text-2xl md:text-[1.65rem] text-ink mb-3 leading-snug">
                    {c.title}
                  </h3>
                  <p className="font-cinzel text-[0.95rem] leading-relaxed text-ink/75">
                    {c.blurb}
                  </p>
                  {c.href ? (
                    <Link
                      href={c.href}
                      className="btn-primary font-pridi text-sm mt-4 inline-block"
                    >
                      Browse Collection →
                    </Link>
                  ) : (
                    <div className="mt-6 inline-flex items-center gap-2 text-gold-dark font-cinzel text-xs tracking-[0.25em] uppercase opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-500">
                      Browse Collection
                      <span aria-hidden>→</span>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MAP VISUALIZATION — PATHS OF FAITH */}
      <section id="paths-of-faith-section" className="relative py-20 bg-ink overflow-hidden">
        <div className="max-w-5xl mx-auto px-gutter">

          <p className="font-cinzel text-xs text-gold/60 tracking-[0.3em] uppercase text-center mb-4">
            TWO JOURNEYS, TWO FAITHS
          </p>
          <h2 className="font-cinzel text-3xl md:text-4xl text-paper-white text-center mb-3">
            Paths of Propagation
          </h2>
          <h3 className="font-pridi text-xl text-gold text-center mb-12">
            เส้นทางการเผยแพร่ศาสนา
          </h3>

          {/* Map — Paths of Faith animation (silhouette walkers, arrival FX, 2.5D camera) */}
          <PropagationMap />

          {/* Legend */}
          <div className="flex flex-col gap-4 max-w-2xl mx-auto mt-10">
            <div className="flex items-start gap-3">
              <span className="w-8 h-0.5 bg-gold inline-block mt-2 shrink-0"></span>
              <span className="font-pridi text-paper-white/80 text-sm leading-relaxed">
                <strong className="text-gold">อิสลาม</strong> — จากมักกะฮ์และมะดีนะฮ์ สู่ตออิฟ ค็อยบัร เยรูซาเล็ม ดามัสกัส
                อันติออก และตาร์ซุส เส้นทางการขยายตัวของอาณาจักรอิสลามยุคแรก
              </span>
            </div>
            <div className="flex items-start gap-3">
              <span
                className="w-8 h-0.5 inline-block mt-2 shrink-0"
                style={{ backgroundImage: 'repeating-linear-gradient(90deg, #1a1a1a 0 5px, transparent 5px 9px)' }}
              ></span>
              <span className="font-pridi text-paper-white/80 text-sm leading-relaxed">
                <strong className="text-[#1a1a1a] bg-paper-white/90 px-1 rounded">คริสต์</strong> — เส้นทางมิชชันนารีของนักบุญเปาโล
                ผ่านฟิลิปปี เธสะโลนิกา โครินธ์ เอเฟซัส สู่คอนสแตนติโนเปิล
              </span>
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <a href="/paths-of-faith" className="btn-outline font-pridi text-sm">
              สำรวจเส้นทางแห่งศรัทธา →
            </a>
          </div>

        </div>
      </section>

      {/* ARTICLES & RESEARCH */}
      <section id="articles-section" className="py-20 bg-paper">
        <div className="max-w-7xl mx-auto px-gutter">

          <p className="font-cinzel text-xs text-gold tracking-[0.3em] uppercase mb-4">
            ARTICLES & RESEARCH
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* ฝั่งซ้าย */}
            <div>
              <h2 className="font-cinzel text-4xl md:text-5xl text-ink font-normal leading-tight mb-6">
                Scholarly Articles on Ancient Texts
              </h2>

              <div className="w-12 h-0.5 bg-gold/50 mb-8"></div>

              <p className="font-pridi text-ink/70 leading-relaxed mb-4">
                บทความวิชาการที่ศึกษาและเปรียบเทียบต้นฉบับคัมภีร์โบราณ
                โดยอ้างอิงจากงานของนักวิชาการชั้นนำทั้งฝ่ายมุสลิม คริสต์ และนักวิชาการอิสระ
              </p>

              <p className="font-pridi text-ink/70 leading-relaxed mb-10">
                เราเชื่อว่าความจริง เมื่อได้รับการพิสูจน์อย่างรอบคอบ
                จะสามารถผ่านพ้นทุกยุคสมัยได้
              </p>

              <a href="/articles" className="btn-outline font-pridi inline-flex items-center gap-2">
                ดูบทความทั้งหมด
                <span>→</span>
              </a>
            </div>

            {/* ฝั่งขวา: 3 การ์ดบทความ */}
            <div className="space-y-4">

              <a href="/articles/introduction-to-textual-criticism"
                className="group block bg-paper-light border border-gold/20 rounded-card p-6 hover:border-gold/50 hover:shadow-card-hover transition-all duration-300">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <span className="font-cinzel text-xs text-gold tracking-widest uppercase mb-2 block">
                      เปรียบเทียบ · Al-Azami &amp; Metzger
                    </span>
                    <h3 className="font-cinzel text-lg text-ink font-semibold mb-2 group-hover:text-gold transition-colors leading-snug">
                      ปฐมบทแห่งการวิจารณ์ตัวบท
                    </h3>
                    <p className="font-pridi text-ink/60 text-sm leading-relaxed line-clamp-2">
                      ทำความรู้จักศาสตร์การวิจารณ์ตัวบท วัสดุโบราณที่ใช้บันทึกคัมภีร์ และเปรียบเทียบสองเส้นทางการพิทักษ์พระวจนะระหว่างโลกอิสลามและคริสเตียน
                    </p>
                  </div>
                  <span className="text-gold/40 group-hover:text-gold transition-colors text-xl mt-1 shrink-0">→</span>
                </div>
              </a>

              <a href="/articles/intentional-changes-metzger"
                className="group block bg-paper-light border border-gold/20 rounded-card p-6 hover:border-gold/50 hover:shadow-card-hover transition-all duration-300">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <span className="font-cinzel text-xs text-gold tracking-widest uppercase mb-2 block">
                      ไบเบิล · Metzger
                    </span>
                    <h3 className="font-cinzel text-lg text-ink font-semibold mb-2 group-hover:text-gold transition-colors leading-snug">
                      การเปลี่ยนแปลงคัมภีร์โดยเจตนา
                    </h3>
                    <p className="font-pridi text-ink/60 text-sm leading-relaxed line-clamp-2">
                      Bruce Metzger จำแนกการเปลี่ยนแปลงข้อความพันธสัญญาใหม่โดยเจตนา รวมถึงการแก้ไขเพื่อให้สอดคล้องกับหลักเทววิทยา
                    </p>
                  </div>
                  <span className="text-gold/40 group-hover:text-gold transition-colors text-xl mt-1 shrink-0">→</span>
                </div>
              </a>

              <a href="/articles/prophet-in-song-of-solomon"
                className="group block bg-paper-light border border-gold/20 rounded-card p-6 hover:border-gold/50 hover:shadow-card-hover transition-all duration-300">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <span className="font-cinzel text-xs text-gold tracking-widest uppercase mb-2 block">
                      เปรียบเทียบ · Song of Solomon
                    </span>
                    <h3 className="font-cinzel text-lg text-ink font-semibold mb-2 group-hover:text-gold transition-colors leading-snug">
                      ศาสดามุฮัมมัดใน Song of Solomon
                    </h3>
                    <p className="font-pridi text-ink/60 text-sm leading-relaxed line-clamp-2">
                      การตีความ Song of Solomon 5:16 และคำว่า Navi ในภาษาฮีบรู-อาราเมอิก ตามมุมมองของนักวิชาการมุสลิม
                    </p>
                  </div>
                  <span className="text-gold/40 group-hover:text-gold transition-colors text-xl mt-1 shrink-0">→</span>
                </div>
              </a>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
