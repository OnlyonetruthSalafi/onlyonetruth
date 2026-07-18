"use client";

// ════════════════════════════════════════════════════════════════════
//  CanonPathMap — แผนภาพเส้นทางตัวบทสู่สารบบพันธสัญญาใหม่ (หน้า Methodology)
//  คู่ขนานกับ IsnadChainMap ฝั่งอิสลาม: จุดแสงเดินตามเส้น + คลิกเปิดการ์ด
//  จุดต่างเชิงระเบียบวิธีที่แผนภาพตั้งใจแสดง: ทอด "ผู้คัดลอกนิรนาม (?)"
//  ระหว่างผู้เขียนถึงสำเนาเก่าแก่ที่สุด ซึ่งไม่มีบันทึกชื่อหรือจำนวนทอด
// ════════════════════════════════════════════════════════════════════

import { useState } from "react";

const W = 900;
const H = 560;

const GENS = [
  { key: "g0", label: "ต้นทาง", sub: "ราว ค.ศ. 30-33", y: 70 },
  { key: "g1", label: "งานเขียนยุคแรก", sub: "ราว ค.ศ. 50-100", y: 185 },
  { key: "g2", label: "ผู้คัดลอกนิรนาม", sub: "ศตวรรษที่ 1-4 · ไม่ทราบจำนวนทอด", y: 300 },
  { key: "g3", label: "ต้นฉบับที่ตกทอด", sub: "หลักฐานทางกายภาพ", y: 415 },
  { key: "g4", label: "การรับรองสารบบ", sub: "ราว ค.ศ. 200-397", y: 515 },
];

const NODES = {
  jesus: {
    x: 450, y: 70, gen: 0, cross: true,
    name: "พระเยซู",
    detail: "ต้นทางของคำสอน — พระองค์ไม่ได้เขียนหนังสือเอง คำสอนถูกส่งต่อแบบปากเปล่าราว 20-70 ปีก่อนถูกบันทึกเป็นลายลักษณ์อักษร",
  },
  paul: {
    x: 170, y: 185, gen: 1,
    name: "จดหมายเปาโล",
    detail: "ราว ค.ศ. 50-62 — งานเขียนที่เก่าแก่ที่สุดในพันธสัญญาใหม่ ระบุชื่อผู้เขียนชัดเจน แต่เปาโลไม่เคยพบพระเยซูระหว่างพระชนม์ชีพ (กล่าวถึงนิมิตบนถนนสู่ดามัสกัส)",
  },
  gospels: {
    x: 357, y: 185, gen: 1,
    name: "พระกิตติคุณ 4 เล่ม",
    detail: "ราว ค.ศ. 65-100 — เขียนแบบนิรนาม ตัวบทไม่ระบุชื่อผู้เขียนภายใน ชื่อมัทธิว มาระโก ลูกา ยอห์น ถูกผูกโดยธรรมเนียมคริสตจักรราวศตวรรษที่ 2",
  },
  hebrews: {
    x: 543, y: 185, gen: 1, unknown: true,
    name: "ฮีบรู (ผู้เขียน?)",
    detail: "ราวปลายศตวรรษที่ 1 — ไม่ระบุผู้เขียน และถกเถียงกันมาแต่โบราณ Origen สรุปว่า \"ใครเป็นผู้เขียน พระเจ้าเท่านั้นที่ทรงทราบ\" (Eusebius, HE 6.25.14)",
  },
  revelation: {
    x: 730, y: 185, gen: 1,
    name: "วิวรณ์",
    detail: "ราว ค.ศ. 95 — เขียนโดย \"ยอห์น\" แห่งเกาะปัทมอส ซึ่งจะใช่อัครทูตยอห์นหรือไม่ยังเป็นข้อถกเถียง หนังสือเล่มนี้ถูกโต้แย้งสถานะนานหลายศตวรรษ",
  },
  c1: {
    x: 230, y: 300, gen: 2, unknown: true,
    name: "?",
    detail: "ผู้คัดลอกนิรนาม — ระหว่างต้นฉบับผู้เขียน (autograph ซึ่งสูญหายทั้งหมด) ถึงสำเนาเก่าแก่ที่สุดที่ตกทอดมา ไม่มีบันทึกว่าใครคัดลอก กี่ทอด และแต่ละคนแม่นยำเพียงใด",
  },
  c2: {
    x: 450, y: 300, gen: 2, unknown: true,
    name: "?",
    detail: "ผู้คัดลอกนิรนาม — ช่องว่างนี้เองที่ทำให้เกิด Variant Readings หลายแสนจุดระหว่างต้นฉบับ และเป็นเหตุให้ต้องมีศาสตร์ Textual Criticism ย้อนสืบหาข้อความดั้งเดิม",
  },
  c3: {
    x: 670, y: 300, gen: 2, unknown: true,
    name: "?",
    detail: "ผู้คัดลอกนิรนาม — ต่างจากระบบอิสนาดที่บังคับระบุชื่อทุกทอด สายส่งต่อของพันธสัญญาใหม่ไม่มีธรรมเนียมบันทึกตัวตนผู้คัดลอกไว้เลย",
  },
  p46: {
    x: 170, y: 415, gen: 3,
    name: "P46",
    detail: "ราว ค.ศ. 200 — สำเนาชุดจดหมายเปาโลเก่าแก่ที่สุด (Chester Beatty) ห่างจากตัวจดหมายจริงราว 150 ปี",
  },
  p52: {
    x: 357, y: 415, gen: 3,
    name: "P52",
    detail: "ราว ค.ศ. 125 — เศษกระดาษยอห์น 18 ขนาดฝ่ามือ ชิ้นส่วนพันธสัญญาใหม่เก่าแก่ที่สุดที่รู้จัก กำหนดอายุด้วยการเทียบลายมือ (±25-50 ปี) — ดูหน้า P52 ในคลังเอกสารของเว็บนี้",
  },
  vaticanus: {
    x: 543, y: 415, gen: 3,
    name: "Codex Vaticanus",
    detail: "ราว ค.ศ. 325-350 — สำเนาไบเบิลเกือบสมบูรณ์ที่เก่าแก่ที่สุดเล่มหนึ่ง ห่างจากยุคผู้เขียนราว 250 ปี",
  },
  sinaiticus: {
    x: 730, y: 415, gen: 3,
    name: "Codex Sinaiticus",
    detail: "ราว ค.ศ. 350 — พันธสัญญาใหม่ครบเล่มที่เก่าแก่ที่สุด และยังเย็บรวม Shepherd of Hermas กับจดหมายบารนาบัสที่ภายหลังถูกคัดออกจากสารบบ",
  },
  muratorian: {
    x: 265, y: 515, gen: 4,
    name: "Muratorian Fragment",
    detail: "ราว ค.ศ. 170-200 — รายชื่อสารบบเก่าแก่ที่สุดที่พบ มีราว 22 เล่ม ยังไม่มีฮีบรู ยากอบ และ 1-2 เปโตร",
  },
  athanasius: {
    x: 450, y: 515, gen: 4,
    name: "อาธานาซิอุส ค.ศ. 367",
    detail: "จดหมายเทศกาลฉบับที่ 39 — เอกสารฉบับแรกในประวัติศาสตร์ที่ระบุหนังสือ 27 เล่มตรงกับพันธสัญญาใหม่ปัจจุบัน ราว 330 ปีหลังยุคพระเยซู",
  },
  carthage: {
    x: 635, y: 515, gen: 4,
    name: "สภาคาร์เธจ ค.ศ. 397",
    detail: "รับรองรายชื่อ 27 เล่มอย่างเป็นทางการในคริสตจักรตะวันตก — จุดที่กระบวนการคัดเลือกสารบบราว 4 ศตวรรษถือว่าลงตัว",
  },
};

// เส้นประ = ทอดที่ไม่ทราบตัวตน/ประเพณีปากเปล่า | เส้นทึบ = เอกสารจริงที่ตกทอด
const EDGES = [
  { from: "jesus", to: "paul", dashed: true },
  { from: "jesus", to: "gospels", dashed: true },
  { from: "jesus", to: "hebrews", dashed: true },
  { from: "jesus", to: "revelation", dashed: true },
  { from: "paul", to: "c1", dashed: true },
  { from: "gospels", to: "c2", dashed: true },
  { from: "hebrews", to: "c2", dashed: true },
  { from: "revelation", to: "c3", dashed: true },
  { from: "c1", to: "p46" },
  { from: "c1", to: "vaticanus" },
  { from: "c2", to: "p52" },
  { from: "c2", to: "sinaiticus" },
  { from: "c3", to: "sinaiticus" },
  { from: "p46", to: "muratorian", dashed: true },
  { from: "p52", to: "athanasius", dashed: true },
  { from: "vaticanus", to: "athanasius", dashed: true },
  { from: "sinaiticus", to: "carthage", dashed: true },
];

// ตามรอยพระกิตติคุณยอห์น: พระเยซู → พระกิตติคุณ → ผู้คัดลอก? → P52 → การรับรอง
const JOHN_TRAIL = new Set([
  "jesus-gospels",
  "gospels-c2",
  "c2-p52",
  "p52-athanasius",
]);
const JOHN_NODES = new Set(["jesus", "gospels", "c2", "p52", "athanasius"]);

const edgeKey = (e) => `${e.from}-${e.to}`;

export default function CanonPathMap() {
  const [selected, setSelected] = useState(null);
  const [trail, setTrail] = useState(false);

  const sel = selected ? NODES[selected] : null;

  return (
    <div
      className="relative rounded-card border border-gold/30 overflow-hidden"
      style={{ background: "rgba(20,10,8,0.55)" }}
    >
      <span className="ic-corner ic-corner-tl" />
      <span className="ic-corner ic-corner-tr" />
      <span className="ic-corner ic-corner-bl" />
      <span className="ic-corner ic-corner-br" />

      {/* หัวแผนภาพ + ปุ่มตามรอยยอห์น */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-5 md:px-7 pt-5 md:pt-6">
        <div>
          <p className="font-cinzel text-[10px] tracking-[0.35em] uppercase text-gold/60 mb-1">
            Canon Pathway
          </p>
          <h3 className="font-pridi text-lg md:text-xl text-paper-white font-semibold">
            เส้นทางของตัวบท — จากพระเยซูถึงสารบบ 27 เล่ม
          </h3>
        </div>
        <button
          type="button"
          onClick={() => setTrail((v) => !v)}
          className={`self-start sm:self-auto font-pridi text-xs md:text-sm px-4 py-2 rounded-btn border transition-all duration-300 ${
            trail
              ? "bg-gradient-to-r from-gold-dark via-gold to-gold-light text-ink border-gold shadow-glow-sm"
              : "text-gold border-gold/40 hover:bg-gold/10"
          }`}
        >
          ✦ ตามรอยพระกิตติคุณยอห์น
        </button>
      </div>

      {/* ตัวแผนภาพ — เลื่อนแนวนอนได้บนจอเล็ก */}
      <div className="overflow-x-auto">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="w-full min-w-[720px] h-auto block"
          role="img"
          aria-label="แผนภาพเส้นทางตัวบทพันธสัญญาใหม่จากพระเยซูถึงการรับรองสารบบ"
        >
          <defs>
            <radialGradient id="canon-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(139,26,26,0.55)" />
              <stop offset="100%" stopColor="rgba(139,26,26,0)" />
            </radialGradient>
          </defs>

          {/* ป้ายชั่วรุ่นด้านซ้าย */}
          {GENS.map((g) => (
            <g key={g.key}>
              <line
                x1="20" x2={W - 20} y1={g.y} y2={g.y}
                stroke="rgba(212,175,55,0.07)" strokeWidth="1"
              />
              <text
                x="26" y={g.y - 14}
                className="font-pridi"
                fontSize="13" fill="rgba(212,175,55,0.75)"
              >
                {g.label}
              </text>
              <text
                x="26" y={g.y + 3}
                className="font-pridi"
                fontSize="10" fill="rgba(245,230,211,0.35)"
              >
                {g.sub}
              </text>
            </g>
          ))}

          {/* เส้นทางตัวบท + จุดแสงวิ่งตามสาย */}
          {EDGES.map((e) => {
            const a = NODES[e.from];
            const b = NODES[e.to];
            const key = edgeKey(e);
            const isTrail = trail && JOHN_TRAIL.has(key);
            const dimmed = trail && !isTrail;
            const d = `M ${a.x} ${a.y} L ${b.x} ${b.y}`;
            return (
              <g key={key} style={{ transition: "opacity 0.4s" }} opacity={dimmed ? 0.15 : 1}>
                <path
                  d={d}
                  fill="none"
                  stroke={isTrail ? "#D4AF37" : "rgba(212,175,55,0.35)"}
                  strokeWidth={isTrail ? 3 : 1.5}
                  strokeDasharray={e.dashed ? "5 5" : "none"}
                  style={isTrail ? { filter: "drop-shadow(0 0 5px rgba(212,175,55,0.7))" } : undefined}
                />
                {/* จุดแสงวิ่งเฉพาะเส้นทึบ (เอกสารจริง) — ซ่อนเมื่อ reduced motion */}
                {(!e.dashed || isTrail) && (
                  <circle r={isTrail ? 4 : 2.5} fill={isTrail ? "#F5E6D3" : "#D4AF37"} className="canon-pulse">
                    <animateMotion
                      dur={`${2.6 + (a.x % 5) * 0.35}s`}
                      begin={`${((a.x + b.y) % 20) * 0.12}s`}
                      repeatCount="indefinite"
                      path={d}
                    />
                  </circle>
                )}
              </g>
            );
          })}

          {/* โหนดเอกสาร/บุคคล */}
          {Object.entries(NODES).map(([id, n]) => {
            const active = selected === id;
            const isTrailNode = trail && JOHN_NODES.has(id);
            const dimmed = trail && !isTrailNode;
            return (
              <g
                key={id}
                transform={`translate(${n.x} ${n.y})`}
                onClick={() => setSelected(active ? null : id)}
                style={{ cursor: "pointer", transition: "opacity 0.4s" }}
                opacity={dimmed ? 0.22 : 1}
              >
                {/* พื้นที่กดกว้างขึ้น */}
                <circle r="26" fill="transparent" />
                {n.cross ? (
                  <>
                    <circle r="30" fill="url(#canon-glow)" />
                    {/* ไอคอนบุคคลแบบนามธรรม (เงาศีรษะ-บ่า) แทนต้นทางคำสอน */}
                    <g
                      fill="#D4AF37"
                      style={{ filter: "drop-shadow(0 0 6px rgba(212,175,55,0.8))" }}
                    >
                      <circle cx="0" cy="-6.5" r="5.2" />
                      <path d="M-9.5,10.5 a9.5,8.5 0 0 1 19,0 z" />
                    </g>
                  </>
                ) : (
                  <>
                    <circle
                      r="11"
                      fill={active ? "rgba(212,175,55,0.28)" : "rgba(36,21,18,0.9)"}
                      stroke={active || isTrailNode ? "#D4AF37" : "rgba(212,175,55,0.55)"}
                      strokeWidth={active || isTrailNode ? 2.5 : 1.5}
                      strokeDasharray={n.unknown ? "3 3" : "none"}
                      style={active || isTrailNode ? { filter: "drop-shadow(0 0 6px rgba(212,175,55,0.6))" } : undefined}
                    />
                    {n.unknown ? (
                      <text
                        y="4.5" textAnchor="middle"
                        className="font-cinzel"
                        fontSize="12" fontWeight="700"
                        fill={active || isTrailNode ? "#F5E6D3" : "rgba(212,175,55,0.85)"}
                      >
                        ?
                      </text>
                    ) : (
                      <circle r="3.5" fill={active || isTrailNode ? "#F5E6D3" : "#D4AF37"} />
                    )}
                  </>
                )}
                <text
                  y={n.cross ? -22 : -20}
                  textAnchor="middle"
                  className="font-pridi"
                  fontSize={n.cross ? 15 : 12.5}
                  fontWeight={n.cross || active ? 700 : 400}
                  fill={active || isTrailNode || n.cross ? "#F0D98C" : "rgba(245,230,211,0.85)"}
                >
                  {n.name}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* การ์ดข้อมูล / คำอธิบายเริ่มต้น */}
      <div className="px-5 md:px-7 pb-5 md:pb-6">
        <div
          className="rounded-card border border-gold/25 px-5 py-4 min-h-[86px] transition-all duration-300"
          style={{ background: "rgba(212,175,55,0.06)" }}
        >
          {sel ? (
            <>
              <p className="font-pridi text-base md:text-lg text-gold font-semibold mb-1">
                {sel.name}
                <span className="font-pridi text-xs text-paper/50 font-normal ml-3">
                  {GENS[sel.gen].label} · {GENS[sel.gen].sub}
                </span>
              </p>
              <p className="font-pridi text-sm text-paper/80 leading-relaxed">{sel.detail}</p>
            </>
          ) : (
            <>
              <p className="font-pridi text-sm md:text-base text-paper/75 leading-relaxed mb-1">
                <span className="text-gold">✦ คลิกที่จุดแต่ละจุด</span> เพื่อดูรายละเอียดของแต่ละช่วง —
                สังเกตแถว <span className="text-gold">&quot;?&quot;</span> ตรงกลาง:
                ทอดผู้คัดลอกที่ไม่มีบันทึกชื่อหรือจำนวน ซึ่งเป็นจุดต่างสำคัญจากระบบอิสนาดที่ระบุตัวบุคคลทุกทอด
              </p>
              <p className="font-pridi text-xs text-paper/45 leading-relaxed">
                เส้นประ = ทอดที่ไม่ทราบตัวตน / ประเพณีปากเปล่า · เส้นทึบ = เอกสารจริงที่ตกทอดถึงปัจจุบัน ·
                จุดแสง = สำเนาที่กำลังเดินทาง — แผนภาพอย่างง่ายเพื่อการศึกษา
              </p>
            </>
          )}
        </div>
      </div>

      {/* ปิดแอนิเมชันตาม prefers-reduced-motion */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .canon-pulse { display: none; }
        }
      `}</style>
    </div>
  );
}
