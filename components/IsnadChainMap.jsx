"use client";

// ════════════════════════════════════════════════════════════════════
//  IsnadChainMap — แผนภาพโครงข่ายสายรายงานอิสนาด (หน้า Methodology)
//  แนวเดียวกับ FaithJourneyMap: จุดแสงเดินตามเส้น + คลิกเปิดการ์ดข้อมูล
//  หลักการ aniconic: ผู้รายงานเป็นจุดดาว/วงแหวนเท่านั้น ไม่มีรูปบุคคล
//  หมายเหตุ: ย่อบางทอด (เส้นประ) เพื่อให้แผนภาพกระชับ
// ════════════════════════════════════════════════════════════════════

import { useState } from "react";

const W = 900;
const H = 560;

const GENS = [
  { key: "g0", label: "ต้นทาง", sub: "ค.ศ. 610-632", y: 70 },
  { key: "g1", label: "เศาะฮาบะฮ์", sub: "รุ่นที่ 1", y: 185 },
  { key: "g2", label: "ตาบิอีน", sub: "รุ่นที่ 2", y: 300 },
  { key: "g3", label: "อะตบาอุตตาบิอีน", sub: "รุ่นที่ 3", y: 415 },
  { key: "g4", label: "นักรวบรวม", sub: "ยุคบันทึกเป็นตำรา", y: 515 },
];

const NODES = {
  prophet: {
    x: 450, y: 70, gen: 0, star: true,
    name: "ท่านนบีมุฮัมมัด ﷺ",
    detail: "ต้นทางของทุกรายงาน — สายรายงานที่เศาะฮีห์ทุกสายต้องสืบย้อนกลับมาถึงท่านได้โดยไม่ขาดตอนแม้แต่ทอดเดียว",
  },
  ibnumar: {
    x: 170, y: 185, gen: 1,
    name: "อับดุลลอฮ์ อิบนุ อุมัร",
    detail: "เสียชีวิต ฮ.ศ. 73 — เศาะฮาบะฮ์ผู้เคร่งครัดในการรายงานตามถ้อยคำเดิม ถ่ายทอดราว 2,600 หะดีษ ทอดแรกของ \"สายรายงานทองคำ\"",
  },
  abuhurayra: {
    x: 357, y: 185, gen: 1,
    name: "อบูฮุร็อยเราะฮ์",
    detail: "เสียชีวิต ฮ.ศ. 59 — ผู้รายงานหะดีษมากที่สุด (~5,300 บท) อุทิศชีวิตติดตามท่านนบีอย่างใกล้ชิดในช่วงบั้นปลาย",
  },
  aisha: {
    x: 543, y: 185, gen: 1,
    name: "ท่านหญิงอาอิชะฮ์",
    detail: "เสียชีวิต ฮ.ศ. 58 — มารดาแห่งศรัทธาชน ถ่ายทอดราว 2,200 หะดีษ โดยเฉพาะเรื่องชีวิตภายในบ้านของท่านนบี",
  },
  anas: {
    x: 730, y: 185, gen: 1,
    name: "อะนัส อิบนุ มาลิก",
    detail: "เสียชีวิต ฮ.ศ. 93 — ผู้รับใช้ท่านนบีถึง 10 ปีตั้งแต่วัยเด็ก อยู่ร่วมเหตุการณ์สำคัญนับไม่ถ้วน",
  },
  nafi: {
    x: 170, y: 300, gen: 2,
    name: "นาฟิอ์",
    detail: "เสียชีวิต ฮ.ศ. 117 — เมาลา (คนสนิท) ของอิบนุ อุมัร รับความรู้โดยตรงกว่า 30 ปี ทอดกลางของสายรายงานทองคำ",
  },
  hammam: {
    x: 357, y: 300, gen: 2,
    name: "ฮัมมาม อิบนุ มุนับบิฮ์",
    detail: "เสียชีวิต ฮ.ศ. 101 — ลูกศิษย์อบูฮุร็อยเราะฮ์ เจ้าของเศาะฮีฟะฮ์ 138 หะดีษที่ต้นฉบับตกทอดถึงปัจจุบัน และตรงกับบุคอรีแทบคำต่อคำ",
  },
  urwa: {
    x: 543, y: 300, gen: 2,
    name: "อุรวะฮ์ อิบนุ อัซซุบัยร์",
    detail: "เสียชีวิต ฮ.ศ. 94 — หลานของท่านหญิงอาอิชะฮ์ หนึ่งในเจ็ดฟุเกาะฮาอ์แห่งมะดีนะฮ์ ซักถามความรู้จากน้าสาวโดยตรง",
  },
  qatada: {
    x: 730, y: 300, gen: 2,
    name: "กอตาดะฮ์ อิบนุ ดิอามะฮ์",
    detail: "เสียชีวิต ฮ.ศ. 117 — นักจำตาบอดแต่กำเนิดผู้มีความจำแม่นยำระดับตำนาน ลูกศิษย์คนสำคัญของอะนัส",
  },
  malik: {
    x: 170, y: 415, gen: 3,
    name: "อิหม่ามมาลิก",
    detail: "เสียชีวิต ฮ.ศ. 179 — เจ้าของอัลมุวัฏเฏาะอ์ ตำราหะดีษ-ฟิกฮ์ยุคแรกสุดเล่มหนึ่ง ทอดปลายของสายทองคำ \"มาลิก ← นาฟิอ์ ← อิบนุ อุมัร\"",
  },
  mamar: {
    x: 357, y: 415, gen: 3,
    name: "มะอ์มัร อิบนุ รอชิด",
    detail: "เสียชีวิต ฮ.ศ. 153 — ผู้รักษาและถ่ายทอดเศาะฮีฟะฮ์ของฮัมมามต่อจนถึงมือนักรวบรวมรุ่นหลัง",
  },
  hisham: {
    x: 543, y: 415, gen: 3,
    name: "ฮิชาม อิบนุ อุรวะฮ์",
    detail: "เสียชีวิต ฮ.ศ. 146 — บุตรของอุรวะฮ์ สืบทอดคลังรายงานของท่านหญิงอาอิชะฮ์ผ่านบิดาโดยตรง",
  },
  shuba: {
    x: 730, y: 415, gen: 3,
    name: "ชุอ์บะฮ์ อิบนุ อัลฮัจญาจ",
    detail: "เสียชีวิต ฮ.ศ. 160 — \"อะมีรุลมุอ์มินีนด้านหะดีษ\" ผู้บุกเบิกศาสตร์วิจารณ์ผู้รายงาน (อัลญัรห์ วัตตะอ์ดีล) อย่างเป็นระบบ",
  },
  bukhari: {
    x: 265, y: 515, gen: 4,
    name: "อิหม่ามอัลบุคอรี",
    detail: "เสียชีวิต ฮ.ศ. 256 — รวบรวมกว่า 600,000 รายงาน คัดกรองด้วยเกณฑ์เข้มงวดที่สุดเหลือราว 7,563 บทในเศาะฮีห์อัลบุคอรี",
  },
  muslim: {
    x: 450, y: 515, gen: 4,
    name: "อิหม่ามมุสลิม",
    detail: "เสียชีวิต ฮ.ศ. 261 — เจ้าของเศาะฮีห์มุสลิม ผู้เขียนมุก็อดดิมะฮ์ว่าด้วยระเบียบวิธีตรวจสอบรายงานไว้เป็นตำราคลาสสิก",
  },
  ahmad: {
    x: 635, y: 515, gen: 4,
    name: "อิหม่ามอะห์มัด อิบนุ ฮัมบัล",
    detail: "เสียชีวิต ฮ.ศ. 241 — เจ้าของมุสนัดอะห์มัดราว 27,000 บท ซึ่งบรรจุเศาะฮีฟะฮ์ของฮัมมามไว้เกือบทั้งชุด",
  },
};

// เส้นทึบ = การรับส่งโดยตรง | เส้นประ = ย่อทอด (ผ่านลูกศิษย์อีก 1-2 ทอด)
const EDGES = [
  { from: "prophet", to: "ibnumar" },
  { from: "prophet", to: "abuhurayra" },
  { from: "prophet", to: "aisha" },
  { from: "prophet", to: "anas" },
  { from: "ibnumar", to: "nafi" },
  { from: "abuhurayra", to: "hammam" },
  { from: "aisha", to: "urwa" },
  { from: "anas", to: "qatada" },
  { from: "nafi", to: "malik" },
  { from: "hammam", to: "mamar" },
  { from: "urwa", to: "hisham" },
  { from: "qatada", to: "shuba" },
  { from: "malik", to: "bukhari", dashed: true },
  { from: "malik", to: "muslim", dashed: true },
  { from: "mamar", to: "ahmad", dashed: true },
  { from: "hisham", to: "muslim", dashed: true },
  { from: "shuba", to: "bukhari", dashed: true },
  { from: "shuba", to: "ahmad", dashed: true },
];

// สายรายงานทองคำ (silsilat al-dhahab): มาลิก ← นาฟิอ์ ← อิบนุ อุมัร ← ท่านนบี
const GOLDEN = new Set(["prophet-ibnumar", "ibnumar-nafi", "nafi-malik"]);
const GOLDEN_NODES = new Set(["prophet", "ibnumar", "nafi", "malik"]);

const edgeKey = (e) => `${e.from}-${e.to}`;

export default function IsnadChainMap() {
  const [selected, setSelected] = useState(null);
  const [golden, setGolden] = useState(false);

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

      {/* หัวแผนภาพ + ปุ่มสายทองคำ */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-5 md:px-7 pt-5 md:pt-6">
        <div>
          <p className="font-cinzel text-[10px] tracking-[0.35em] uppercase text-gold/60 mb-1">
            Isnad Network
          </p>
          <h3 className="font-pridi text-lg md:text-xl text-paper-white font-semibold">
            เส้นทางของหนึ่งรายงาน — จากท่านนบีถึงตำราหะดีษ
          </h3>
        </div>
        <button
          type="button"
          onClick={() => setGolden((v) => !v)}
          className={`self-start sm:self-auto font-pridi text-xs md:text-sm px-4 py-2 rounded-btn border transition-all duration-300 ${
            golden
              ? "bg-gradient-to-r from-gold-dark via-gold to-gold-light text-ink border-gold shadow-glow-sm"
              : "text-gold border-gold/40 hover:bg-gold/10"
          }`}
        >
          ✦ สายรายงานทองคำ
        </button>
      </div>

      {/* ตัวแผนภาพ — เลื่อนแนวนอนได้บนจอเล็ก */}
      <div className="overflow-x-auto">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="w-full min-w-[720px] h-auto block"
          role="img"
          aria-label="แผนภาพโครงข่ายสายรายงานอิสนาดจากท่านนบีถึงนักรวบรวมหะดีษ"
        >
          <defs>
            <radialGradient id="isnad-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(63,174,90,0.5)" />
              <stop offset="100%" stopColor="rgba(63,174,90,0)" />
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

          {/* เส้นสายรายงาน + จุดแสงวิ่งตามสาย */}
          {EDGES.map((e) => {
            const a = NODES[e.from];
            const b = NODES[e.to];
            const key = edgeKey(e);
            const isGold = golden && GOLDEN.has(key);
            const dimmed = golden && !isGold;
            const d = `M ${a.x} ${a.y} L ${b.x} ${b.y}`;
            return (
              <g key={key} style={{ transition: "opacity 0.4s" }} opacity={dimmed ? 0.18 : 1}>
                <path
                  d={d}
                  fill="none"
                  stroke={isGold ? "#D4AF37" : "rgba(212,175,55,0.35)"}
                  strokeWidth={isGold ? 3 : 1.5}
                  strokeDasharray={e.dashed ? "5 5" : "none"}
                  style={isGold ? { filter: "drop-shadow(0 0 5px rgba(212,175,55,0.7))" } : undefined}
                />
                {/* จุดแสงของรายงานที่กำลังเดินทาง — ซ่อนเมื่อ reduced motion */}
                {!e.dashed && (
                  <circle r={isGold ? 4 : 2.5} fill={isGold ? "#F5E6D3" : "#D4AF37"} className="isnad-pulse">
                    <animateMotion
                      dur={`${2.6 + (a.x % 5) * 0.35}s`}
                      begin={`${(a.x + b.y) % 20 * 0.12}s`}
                      repeatCount="indefinite"
                      path={d}
                    />
                  </circle>
                )}
              </g>
            );
          })}

          {/* โหนดผู้รายงาน */}
          {Object.entries(NODES).map(([id, n]) => {
            const active = selected === id;
            const isGoldNode = golden && GOLDEN_NODES.has(id);
            const dimmed = golden && !isGoldNode;
            return (
              <g
                key={id}
                transform={`translate(${n.x} ${n.y})`}
                onClick={() => setSelected(active ? null : id)}
                style={{ cursor: "pointer", transition: "opacity 0.4s" }}
                opacity={dimmed ? 0.25 : 1}
              >
                {/* พื้นที่กดกว้างขึ้น */}
                <circle r="26" fill="transparent" />
                {n.star ? (
                  <>
                    <circle r="30" fill="url(#isnad-glow)" />
                    {/* ดาว 8 แฉก — สัญลักษณ์แทนต้นทาง ไม่ใช้รูปบุคคล */}
                    <g fill="#D4AF37" style={{ filter: "drop-shadow(0 0 6px rgba(212,175,55,0.8))" }}>
                      <path d="M0,-13 L2.8,-3.9 L12.3,-3.9 L4.6,1.6 L7.6,10.5 L0,5 L-7.6,10.5 L-4.6,1.6 L-12.3,-3.9 L-2.8,-3.9 Z" />
                      <path
                        d="M0,-13 L2.8,-3.9 L12.3,-3.9 L4.6,1.6 L7.6,10.5 L0,5 L-7.6,10.5 L-4.6,1.6 L-12.3,-3.9 L-2.8,-3.9 Z"
                        transform="rotate(45)"
                        opacity="0.55"
                      />
                    </g>
                  </>
                ) : (
                  <>
                    <circle
                      r="11"
                      fill={active ? "rgba(212,175,55,0.28)" : "rgba(36,21,18,0.9)"}
                      stroke={active || isGoldNode ? "#D4AF37" : "rgba(212,175,55,0.55)"}
                      strokeWidth={active || isGoldNode ? 2.5 : 1.5}
                      style={active || isGoldNode ? { filter: "drop-shadow(0 0 6px rgba(212,175,55,0.6))" } : undefined}
                    />
                    <circle r="3.5" fill={active || isGoldNode ? "#F5E6D3" : "#D4AF37"} />
                  </>
                )}
                <text
                  y={n.star ? -22 : -20}
                  textAnchor="middle"
                  className="font-pridi"
                  fontSize={n.star ? 15 : 12.5}
                  fontWeight={n.star || active ? 700 : 400}
                  fill={active || isGoldNode || n.star ? "#F0D98C" : "rgba(245,230,211,0.85)"}
                >
                  {n.name}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* การ์ดข้อมูลผู้รายงาน / คำอธิบายเริ่มต้น */}
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
                <span className="text-gold">✦ คลิกที่จุดผู้รายงาน</span> เพื่อดูตัวตนและปีเสียชีวิตของแต่ละทอด —
                ทุกคู่ที่เส้นเชื่อมถึงกันต้องพิสูจน์ได้ว่า &quot;พบกันจริง&quot; และทุกคนต้องผ่านการตรวจสอบความเที่ยงธรรมกับความแม่นยำ
              </p>
              <p className="font-pridi text-xs text-paper/45 leading-relaxed">
                เส้นทึบ = การรับส่งโดยตรง · เส้นประ = ย่อทอด (ผ่านลูกศิษย์อีก 1-2 ทอด) · จุดแสง = รายงานที่กำลังเดินทาง —
                แผนภาพอย่างง่ายเพื่อการศึกษา แสดงเพียงบางสายจากหลายพันสายที่บันทึกจริง
              </p>
            </>
          )}
        </div>
      </div>

      {/* ปิดแอนิเมชันตาม prefers-reduced-motion */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .isnad-pulse { display: none; }
        }
      `}</style>
    </div>
  );
}
