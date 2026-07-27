"use client";

// ════════════════════════════════════════════════════════════════════
//  IsnadChainMap — แผนภาพโครงข่ายสายรายงานอิสนาด (หน้า Methodology)
//  แนวเดียวกับ FaithJourneyMap: จุดแสงเดินตามเส้น + คลิกเปิดการ์ดข้อมูล
//  หลักการ aniconic: ผู้รายงานเป็นจุดดาว/วงแหวนเท่านั้น ไม่มีรูปบุคคล
//  หมายเหตุ: ย่อบางทอด (เส้นประ) เพื่อให้แผนภาพกระชับ
// ════════════════════════════════════════════════════════════════════

import { useState } from "react";

const W = 900;
const H = 640;

const GENS = [
  { key: "g0", label: "ต้นทาง", sub: "ค.ศ. 610-632", y: 70 },
  { key: "g1", label: "เศาะฮาบะฮ์", sub: "รุ่นที่ 1", y: 185 },
  { key: "g2", label: "ตาบิอีน", sub: "รุ่นที่ 2", y: 300 },
  { key: "g3", label: "อะตบาอุตตาบิอีน", sub: "รุ่นที่ 3", y: 415 },
  { key: "g4", label: "ชั้นครู", sub: "ชุยูคของนักรวบรวม", y: 505 },
  { key: "g5", label: "นักรวบรวม", sub: "ยุคบันทึกเป็นตำรา", y: 595 },
];

const NODES = {
  prophet: {
    x: 450, y: 70, gen: 0, star: true,
    name: "ท่านนบีมุฮัมมัด ﷺ",
    died: "เสียชีวิต ฮ.ศ. 11 / ค.ศ. 632",
    city: "มักกะฮ์ · มะดีนะฮ์",
    detail: "ต้นทางของทุกรายงาน — สายรายงานที่เศาะฮีห์ทุกสายต้องสืบย้อนกลับมาถึงท่านได้โดยไม่ขาดตอนแม้แต่ทอดเดียว หากขาดแม้ทอดเดียว รายงานนั้นจะถูกลดชั้นทันทีไม่ว่าเนื้อความจะดีเพียงใด",
  },
  ibnumar: {
    x: 170, y: 185, gen: 1,
    name: "อับดุลลอฮ์ อิบนุ อุมัร",
    died: "เสียชีวิต ฮ.ศ. 73",
    city: "มะดีนะฮ์",
    detail: "บุตรของอุมัร อิบนุ อัลค็อฏฏอบ เข้ารับอิสลามตั้งแต่วัยเด็กและติดตามท่านนบีอย่างใกล้ชิด ขึ้นชื่อเรื่องความระมัดระวังจนไม่ยอมรายงานหากไม่มั่นใจในถ้อยคำเดิม ถ่ายทอดราว 2,600 หะดีษ — เป็นทอดแรกของ \"สายรายงานทองคำ\"",
  },
  abuhurayra: {
    x: 357, y: 185, gen: 1,
    name: "อบูฮุร็อยเราะฮ์",
    died: "เสียชีวิต ฮ.ศ. 59",
    city: "มะดีนะฮ์",
    detail: "ผู้รายงานหะดีษมากที่สุด (~5,300 บท) เข้ารับอิสลามในปีค็อยบัรและอุทิศชีวิตติดตามท่านนบีอย่างใกล้ชิดตลอดช่วงบั้นปลาย จึงรับรายงานได้หนาแน่นในเวลาอันสั้น",
  },
  aisha: {
    x: 543, y: 185, gen: 1,
    name: "ท่านหญิงอาอิชะฮ์",
    died: "เสียชีวิต ฮ.ศ. 58",
    city: "มะดีนะฮ์",
    detail: "มารดาแห่งศรัทธาชน ถ่ายทอดราว 2,200 หะดีษ โดยเฉพาะเรื่องชีวิตภายในบ้านของท่านนบีที่ไม่มีผู้ใดเข้าถึงได้ และมักแก้ไขความเข้าใจคลาดเคลื่อนของผู้รายงานท่านอื่น",
  },
  anas: {
    x: 730, y: 185, gen: 1,
    name: "อะนัส อิบนุ มาลิก",
    died: "เสียชีวิต ฮ.ศ. 93",
    city: "มะดีนะฮ์ → บัศเราะฮ์",
    detail: "ผู้รับใช้ท่านนบีถึง 10 ปีตั้งแต่วัยเด็ก อยู่ร่วมเหตุการณ์สำคัญนับไม่ถ้วน ภายหลังย้ายไปพำนักที่บัศเราะฮ์ จึงกลายเป็นต้นสายของผู้รายงานสำนักบัศเราะฮ์ทั้งสำนัก",
  },
  nafi: {
    x: 170, y: 300, gen: 2,
    name: "นาฟิอ์",
    died: "เสียชีวิต ฮ.ศ. 117",
    city: "มะดีนะฮ์",
    tabaqa: "ชั้นที่ 3 ตามตักรีบุตตะฮ์ซีบ",
    detail: "เมาลา (คนใกล้ชิด) ของอิบนุ อุมัร รับความรู้โดยตรงราว 30 ปี — ความสัมพันธ์ครู-ศิษย์ที่พิสูจน์การพบกันได้ชัดเจนที่สุดคู่หนึ่งในประวัติศาสตร์หะดีษ เป็นทอดกลางของสายรายงานทองคำ",
  },
  hammam: {
    x: 357, y: 300, gen: 2,
    name: "ฮัมมาม อิบนุ มุนับบิฮ์",
    died: "เสียชีวิต ฮ.ศ. 101",
    city: "ศ็อนอาอ์ (เยเมน)",
    detail: "ลูกศิษย์อบูฮุร็อยเราะฮ์ เจ้าของเศาะฮีฟะฮ์ 138 หะดีษที่ต้นฉบับตกทอดถึงปัจจุบันและตรงกับบุคอรีแทบคำต่อคำ — เป็นหลักฐานเชิงประจักษ์ว่าการบันทึกลายลักษณ์เกิดขึ้นตั้งแต่รุ่นตาบิอีน",
  },
  urwa: {
    x: 543, y: 300, gen: 2,
    name: "อุรวะฮ์ อิบนุ อัซซุบัยร์",
    died: "เสียชีวิต ฮ.ศ. 94",
    city: "มะดีนะฮ์",
    detail: "หลานของท่านหญิงอาอิชะฮ์ หนึ่งในเจ็ดฟุเกาะฮาอ์แห่งมะดีนะฮ์ ซักถามความรู้จากน้าสาวโดยตรงเป็นเวลาหลายสิบปี และเป็นผู้วางรากฐานงานเขียนสีเราะฮ์ยุคแรก",
  },
  qatada: {
    x: 730, y: 300, gen: 2,
    name: "กอตาดะฮ์ อิบนุ ดิอามะฮ์",
    died: "เสียชีวิต ฮ.ศ. 117",
    city: "บัศเราะฮ์",
    detail: "นักจำตาบอดแต่กำเนิดผู้มีความจำแม่นยำระดับตำนาน ลูกศิษย์คนสำคัญของอะนัส — กรณีของเขาแสดงว่าเกณฑ์ \"เฎาะบฏ์\" วัดที่ความแม่นยำจริง ไม่ใช่การมีบันทึกลายลักษณ์",
  },
  malik: {
    x: 170, y: 415, gen: 3,
    name: "อิหม่ามมาลิก",
    died: "เกิดราว ฮ.ศ. 93 · เสียชีวิต ฮ.ศ. 179",
    city: "มะดีนะฮ์",
    tabaqa: "ชั้นที่ 7 ตามตักรีบุตตะฮ์ซีบ",
    detail: "เจ้าของอัลมุวัฏเฏาะอ์ ตำราหะดีษ-ฟิกฮ์ยุคแรกสุดเล่มหนึ่ง มีรายงานผ่านสายทองคำ \"มาลิก ← นาฟิอ์ ← อิบนุ อุมัร\" อยู่ในเล่มราว 80 บท",
  },
  mamar: {
    x: 357, y: 415, gen: 3,
    name: "มะอ์มัร อิบนุ รอชิด",
    died: "เสียชีวิต ฮ.ศ. 153",
    city: "บัศเราะฮ์ → ศ็อนอาอ์",
    detail: "ผู้รักษาและถ่ายทอดเศาะฮีฟะฮ์ของฮัมมามต่อจนถึงมือนักรวบรวมรุ่นหลัง การย้ายถิ่นของเขาคือสิ่งที่อธิบายว่ารายงานสำนักเยเมนไปปรากฏในตำราแบกแดดได้อย่างไร",
  },
  hisham: {
    x: 543, y: 415, gen: 3,
    name: "ฮิชาม อิบนุ อุรวะฮ์",
    died: "เสียชีวิต ฮ.ศ. 146",
    city: "มะดีนะฮ์ → แบกแดด",
    detail: "บุตรของอุรวะฮ์ สืบทอดคลังรายงานของท่านหญิงอาอิชะฮ์ผ่านบิดาโดยตรง — ตัวอย่างของ \"สายในครอบครัว\" ที่การพบกันระหว่างทอดไม่มีข้อกังขา",
  },
  shuba: {
    x: 730, y: 415, gen: 3,
    name: "ชุอ์บะฮ์ อิบนุ อัลฮัจญาจ",
    died: "เสียชีวิต ฮ.ศ. 160",
    city: "บัศเราะฮ์",
    detail: "\"อะมีรุลมุอ์มินีนด้านหะดีษ\" ผู้บุกเบิกศาสตร์วิจารณ์ผู้รายงาน (อัลญัรห์ วัตตะอ์ดีล) อย่างเป็นระบบ ขึ้นชื่อว่าไล่สอบถามครูของตนว่าได้ยินมาจากใครและเมื่อใดอย่างไม่ลดละ",
  },
  ibnyusuf: {
    x: 230, y: 505, gen: 4,
    name: "อับดุลลอฮ์ อิบนุ ยูซุฟ",
    died: "เสียชีวิต ฮ.ศ. 218",
    city: "ดิมัชก์ → ตินนีส (อียิปต์)",
    tabaqa: "ชั้นที่ 10 (รุ่นใหญ่) ตามตักรีบุตตะฮ์ซีบ",
    detail: "ครูโดยตรงของอัลบุคอรี และเป็นทอดที่เชื่อมสายทองคำเข้าสู่ตำรา อิบนุ ฮะญัรระบุถึงเขาว่า \"เชื่อถือได้ แม่นยำ และเป็นหนึ่งในผู้ที่มั่นคงที่สุดในการถ่ายทอดอัลมุวัฏเฏาะอ์\"",
  },
  bukhari: {
    x: 265, y: 595, gen: 5,
    name: "อิหม่ามอัลบุคอรี",
    died: "เกิด ฮ.ศ. 194 · เสียชีวิต ฮ.ศ. 256",
    city: "บุคอรอ",
    detail: "รวบรวมกว่า 600,000 รายงาน คัดกรองด้วยเกณฑ์เข้มงวดที่สุดเหลือราว 7,563 บทในเศาะฮีห์อัลบุคอรี และเป็นผู้ระบุว่าสาย \"มาลิก ← นาฟิอ์ ← อิบนุ อุมัร\" คือสายที่เศาะฮีห์ที่สุด",
  },
  muslim: {
    x: 450, y: 595, gen: 5,
    name: "อิหม่ามมุสลิม",
    died: "เสียชีวิต ฮ.ศ. 261",
    city: "นัยสาบูร",
    detail: "เจ้าของเศาะฮีห์มุสลิม ผู้เขียนมุก็อดดิมะฮ์ว่าด้วยระเบียบวิธีตรวจสอบรายงานไว้เป็นตำราคลาสสิก และจัดกลุ่มรายงานทุกสายของหะดีษเดียวกันไว้ติดกันเพื่อให้เทียบสายกันได้",
  },
  ahmad: {
    x: 635, y: 595, gen: 5,
    name: "อิหม่ามอะห์มัด อิบนุ ฮัมบัล",
    died: "เสียชีวิต ฮ.ศ. 241",
    city: "แบกแดด",
    detail: "เจ้าของมุสนัดอะห์มัดราว 27,000 บท ซึ่งบรรจุเศาะฮีฟะฮ์ของฮัมมามไว้เกือบทั้งชุด จัดเรียงตามชื่อเศาะฮาบะฮ์ผู้เป็นต้นสาย ไม่ใช่ตามหัวข้อ",
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
  { from: "malik", to: "ibnyusuf" },
  { from: "ibnyusuf", to: "bukhari" },
  { from: "malik", to: "muslim", dashed: true },
  { from: "mamar", to: "ahmad", dashed: true },
  { from: "hisham", to: "muslim", dashed: true },
  { from: "shuba", to: "bukhari", dashed: true },
  { from: "shuba", to: "ahmad", dashed: true },
];

// สายรายงานทองคำ (silsilat al-dhahab) — วาดครบทุกทอดโดยไม่ย่อ
const GOLDEN = new Set([
  "prophet-ibnumar",
  "ibnumar-nafi",
  "nafi-malik",
  "malik-ibnyusuf",
  "ibnyusuf-bukhari",
]);
const GOLDEN_NODES = new Set(["prophet", "ibnumar", "nafi", "malik", "ibnyusuf", "bukhari"]);

// ตัวอย่างหะดีษจริงที่เดินทางมาตามสายทองคำ — เศาะฮีห์อัลบุคอรี หะดีษที่ 877
const GOLDEN_HADITH = {
  ref: "เศาะฮีห์อัลบุคอรี หะดีษที่ 877 — กิตาบุลญุมุอะฮ์ (บทว่าด้วยละหมาดวันศุกร์)",
  isnadAr: "حَدَّثَنَا عَبْدُ اللَّهِ بْنُ يُوسُفَ، قَالَ أَخْبَرَنَا مَالِكٌ، عَنْ نَافِعٍ، عَنْ عَبْدِ اللَّهِ بْنِ عُمَرَ",
  matnAr: "إِذَا جَاءَ أَحَدُكُمُ الْجُمُعَةَ فَلْيَغْتَسِلْ",
  matnTh: "เมื่อผู้ใดในหมู่พวกท่านจะมาละหมาดวันศุกร์ ก็จงอาบน้ำชำระร่างกายเสียก่อน",
  steps: [
    {
      name: "ท่านนบีมุฮัมมัด ﷺ",
      meta: "ต้นทาง · เสียชีวิต ฮ.ศ. 11",
      why: "ถ้อยคำต้นทางที่ทุกทอดต่อจากนี้ต้องสืบย้อนกลับมาถึงให้ได้",
    },
    {
      name: "อับดุลลอฮ์ อิบนุ อุมัร",
      meta: "เศาะฮาบะฮ์ · เสียชีวิต ฮ.ศ. 73 · มะดีนะฮ์",
      why: "ได้ยินจากท่านนบีโดยตรง — อยู่ร่วมยุคและร่วมเมืองอย่างไม่มีข้อกังขา",
    },
    {
      name: "นาฟิอ์ เมาลา อิบนิ อุมัร",
      meta: "ชั้นที่ 3 · เสียชีวิต ฮ.ศ. 117 · มะดีนะฮ์",
      why: "อยู่รับใช้อิบนุ อุมัรราว 30 ปีในเมืองเดียวกัน — การพบกันไม่ต้องอนุมาน มีบันทึกชัดเจน",
    },
    {
      name: "มาลิก อิบนุ อะนัส",
      meta: "ชั้นที่ 7 · เกิดราว ฮ.ศ. 93 เสียชีวิต ฮ.ศ. 179 · มะดีนะฮ์",
      why: "อายุราว 24 ปีตอนนาฟิอ์เสียชีวิต และเป็นชาวมะดีนะฮ์ทั้งคู่ — ช่วงเวลาและสถานที่ทับซ้อนกันเต็มที่",
    },
    {
      name: "อับดุลลอฮ์ อิบนุ ยูซุฟ อัตตินนีซี",
      meta: "ชั้นที่ 10 · เสียชีวิต ฮ.ศ. 218",
      why: "อิบนุ ฮะญัรจัดเขาเป็น \"หนึ่งในผู้ที่มั่นคงที่สุดในการถ่ายทอดอัลมุวัฏเฏาะอ์\" ของมาลิก",
    },
    {
      name: "อิหม่ามอัลบุคอรี",
      meta: "เกิด ฮ.ศ. 194 เสียชีวิต ฮ.ศ. 256 · บุคอรอ",
      why: "อายุราว 24 ปีตอนครูเสียชีวิต บันทึกรายงานนี้ลงในเศาะฮีห์พร้อมระบุชื่อครูทุกทอด",
    },
  ],
};

const edgeKey = (e) => `${e.from}-${e.to}`;

// คำอธิบายสัญลักษณ์ + ขอบเขตของแผนภาพ (สถานะเริ่มต้น)
function MapLegend() {
  return (
    <>
      <p className="font-pridi text-sm md:text-base text-paper/75 leading-relaxed mb-3">
        <span className="text-gold">✦ อ่านแผนภาพนี้อย่างไร</span> — แต่ละแถวคือหนึ่งชั่วรุ่น
        แต่ละจุดคือผู้รายงานที่มีตัวตนจริงและมีชีวประวัติบันทึกไว้ ส่วนเส้นที่ลากเชื่อมสองจุดหมายถึง
        &quot;ผู้รายงานคนล่างได้รับรายงานจากคนบน&quot; ซึ่งเป็นข้ออ้างที่ต้องพิสูจน์ได้ว่าทั้งคู่มีชีวิตร่วมสมัยและพบกันจริง
        ไม่ใช่แค่การอ้างลอยๆ
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-3">
        {[
          ["เส้นทึบ", "การรับส่งโดยตรงระหว่างสองทอดที่ระบุชื่อครบ"],
          ["เส้นประ", "ย่อทอด — ในความเป็นจริงมีครูคั่นกลางอีก 1-2 คน"],
          ["ดาวแปดแฉก", "ต้นทางของรายงาน (ใช้สัญลักษณ์แทนรูปบุคคล)"],
          ["จุดแสงวิ่ง", "รายงานที่กำลังเดินทางจากทอดหนึ่งสู่อีกทอด"],
        ].map(([k, v]) => (
          <p key={k} className="font-pridi text-xs text-paper/60 leading-relaxed">
            <span className="text-gold/80">{k}</span> — {v}
          </p>
        ))}
      </div>
      <p className="font-pridi text-xs text-paper/45 leading-relaxed">
        ขอบเขต: นี่คือภาพตัดขวางเพื่อการศึกษา แสดงเพียง 4 สายจากหลายพันสายที่บันทึกไว้จริง
        และย่อบางทอดเพื่อให้แผนภาพอ่านได้ — <span className="text-gold/70">มีเพียงสายรายงานทองคำเท่านั้นที่วาดครบทุกทอดโดยไม่ย่อ</span>{" "}
        กดปุ่มด้านบนเพื่อดูสายเต็มพร้อมตัวอย่างหะดีษจริงที่เดินทางมาตามสายนี้
      </p>
    </>
  );
}

// แผงสายรายงานทองคำ — ตัวอย่างหะดีษจริงพร้อมการตรวจสอบทีละทอด
function GoldenPanel() {
  return (
    <>
      <p className="font-pridi text-base md:text-lg text-gold font-semibold mb-1">
        สายรายงานทองคำ (ซิลซิละตุซซะฮับ)
      </p>
      <p className="font-pridi text-sm text-paper/75 leading-relaxed mb-4">
        อัลบุคอรีระบุว่าสายที่เศาะฮีห์ที่สุดคือ &quot;มาลิก ← นาฟิอ์ ← อิบนุ อุมัร&quot; ในอัลมุวัฏเฏาะอ์ของมาลิกมีรายงานผ่านสายนี้ราว 80 บท
        ด้านล่างคือหนึ่งในนั้นที่เดินทางต่อมาจนถึงเศาะฮีห์อัลบุคอรี — ทั้งสายมีคนกลางระหว่างอัลบุคอรีกับท่านนบีเพียง 4 ทอด
        ครอบคลุมช่วงเวลา 245 ปี
      </p>

      {/* ตัวบทหะดีษ */}
      <div
        className="rounded-card border border-gold/40 px-4 py-4 mb-4"
        style={{ background: "rgba(212,175,55,0.07)" }}
      >
        <p className="font-cinzel text-[10px] tracking-[0.3em] uppercase text-gold/60 mb-2">
          The Hadith
        </p>
        <p dir="rtl" lang="ar" className="font-amiri text-xl md:text-2xl text-gold leading-loose mb-2">
          {GOLDEN_HADITH.matnAr}
        </p>
        <p className="font-pridi text-sm md:text-base text-paper/85 leading-relaxed mb-3">
          “{GOLDEN_HADITH.matnTh}”
        </p>
        <p className="font-cinzel text-[10px] tracking-[0.3em] uppercase text-gold/60 mb-1.5">
          The Isnad
        </p>
        <p dir="rtl" lang="ar" className="font-amiri text-base md:text-lg text-paper/70 leading-loose mb-2">
          {GOLDEN_HADITH.isnadAr}
        </p>
        <p className="font-pridi text-xs text-paper/50">{GOLDEN_HADITH.ref}</p>
      </div>

      {/* ไล่ตรวจทีละทอด */}
      <p className="font-pridi text-sm text-gold/90 font-semibold mb-2">
        ไล่ตรวจทีละทอด — ทำไมสายนี้จึงถือว่าไม่ขาดตอน
      </p>
      <ol className="space-y-2.5 mb-4">
        {GOLDEN_HADITH.steps.map((s, i) => (
          <li key={s.name} className="flex items-start gap-3">
            <span
              className="shrink-0 w-6 h-6 mt-0.5 rounded-full border border-gold/50 flex items-center justify-center font-pridi text-[11px] text-gold"
              style={{ background: "rgba(212,175,55,0.1)" }}
            >
              {i + 1}
            </span>
            <span>
              <span className="font-pridi text-sm text-paper-white font-semibold">{s.name}</span>
              <span className="font-pridi text-xs text-paper/50 ml-2">{s.meta}</span>
              <span className="block font-pridi text-xs md:text-sm text-paper/70 leading-relaxed mt-0.5">
                {s.why}
              </span>
            </span>
          </li>
        ))}
      </ol>

      <p className="font-pridi text-xs text-paper/45 leading-relaxed">
        หมายเหตุ: ชั้นรุ่นที่ระบุอ้างตาม ตักรีบุตตะฮ์ซีบ ของอิบนุ ฮะญัร (ดูบทที่ VI) — และแม้อัลบุคอรีจะยกสายนี้เป็นสายที่เศาะฮีห์ที่สุด
        นักวิชาการท่านอื่นก็เสนอสายอื่นไว้เช่นกัน ตำราอุลูมุลหะดีษจึงรวบรวมทัศนะที่ต่างกันเหล่านี้ไว้เคียงกัน
        คำว่า &quot;ทองคำ&quot; จึงหมายถึงระดับความน่าเชื่อถือชั้นสูงสุดกลุ่มหนึ่ง ไม่ใช่คำตัดสินเด็ดขาดเพียงหนึ่งเดียว
        สายเดียวกันนี้ยังปรากฏในหะดีษบทอื่นของเศาะฮีห์อัลบุคอรี เช่น หะดีษที่ 2204 ว่าด้วยการซื้อขายต้นอินทผลัมที่ผสมเกสรแล้ว
      </p>
    </>
  );
}

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
          <p className="font-pridi text-xs text-paper/50 mt-1">
            คลิกที่จุดผู้รายงานเพื่อดูรายละเอียด · กดปุ่มสายรายงานทองคำเพื่อดูตัวอย่างหะดีษจริง
          </p>
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

      {/* แผงข้อมูล: ผู้รายงานที่เลือก → สายทองคำ → คำอธิบายเริ่มต้น */}
      <div className="px-5 md:px-7 pb-5 md:pb-6">
        <div
          className="rounded-card border border-gold/25 px-5 py-4 transition-all duration-300"
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
              <p className="font-pridi text-xs text-paper/55 mb-2">
                {sel.died}
                {sel.city && <span> · ถิ่นพำนัก: {sel.city}</span>}
                {sel.tabaqa && <span className="text-gold/70"> · {sel.tabaqa}</span>}
              </p>
              <p className="font-pridi text-sm text-paper/80 leading-relaxed">{sel.detail}</p>
            </>
          ) : golden ? (
            <GoldenPanel />
          ) : (
            <MapLegend />
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
