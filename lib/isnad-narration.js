// ════════════════════════════════════════════════════════════════════
//  isnad-narration.js — ข้อความบรรยาย (เสียง/จอ) ของแผนภาพอิสนาด
//  ใช้ร่วมกันสองที่: components/IsnadNetworkMap.tsx (แสดง/อ่านออกเสียง)
//  และ scripts/generate-isnad-audio.mjs (สร้างไฟล์ mp3 ล่วงหน้า)
//  — เป็น CommonJS เพื่อให้ทั้ง Next และ Node script ใช้ได้ตรงกัน
// ════════════════════════════════════════════════════════════════════

const GEN_LABELS = [
  "ท่านนบีมุฮัมมัด ﷺ",
  "เศาะฮาบะฮ์",
  "ผู้รับโดยตรงจากเศาะฮาบะฮ์",
  "ผู้รายงานรุ่นที่ 3",
  "ผู้รายงานรุ่นที่ 4",
  "ผู้รายงานรุ่นที่ 5",
];

function genLabel(layer, bookLayer) {
  if (layer === bookLayer) return "ตำราหะดีษที่บันทึก";
  return GEN_LABELS[layer] ?? `ผู้รายงานรุ่นที่ ${layer}`;
}

function maxGenerationOf(data) {
  return data.narrators.reduce((m, n) => Math.max(m, n.generation), 0);
}

function statsLite(data) {
  return {
    narratorCount: data.narrators.filter((n) => n.generation > 0).length,
    companionCount: data.narrators.filter((n) => n.generation === 1).length,
    bookCount: data.books.length,
  };
}

// คำบรรยายโหมดเล่าเรื่อง ต่อชั้น
function storyText(layer, bookLayer, stats) {
  if (layer === 0)
    return "ทุกสายรายงานเริ่มจากจุดเดียว — ถ้อยคำของท่านนบีมุฮัมมัด ﷺ เรื่องการละหมาดตามอิมาม";
  if (layer === 1)
    return `เศาะฮาบะฮ์อย่างน้อย ${stats.companionCount} ท่านได้ยินหะดีษบทนี้โดยตรง และแยกย้ายกันถ่ายทอดต่อจากคนละเมือง`;
  if (layer === 2)
    return "ศิษย์ผู้รับโดยตรงจากเศาะฮาบะฮ์นำหะดีษกระจายออกไปตามเมืองที่ตนอาศัย — สายรายงานเริ่มแตกแขนงเป็นอิสระต่อกัน";
  if (layer === bookLayer)
    return `ทุกสายบรรจบเข้าสู่ตำรา ${stats.bookCount} เล่ม ต่างสำนัก ต่างเมือง ต่างยุค — นี่คือหลักฐานที่ al-Azami ใช้โต้ทฤษฎี common link ของ Schacht`;
  if (layer === bookLayer - 1)
    return "ผู้รายงานรุ่นสุดท้ายก่อนถึงมือผู้บันทึก — หลายคนคือชัยค์ของเจ้าของตำราโดยตรง";
  return "ผู้รายงานรุ่นถัดไป — สายเริ่มไขว้ทวนสอบกันเอง บางคนรับหะดีษบทเดียวกันจากหลายทางพร้อมกัน";
}

// ข้อความอ่านออกเสียงเมื่อคลิกโหนดบุคคล
function personNarration(narrator, bookLayer) {
  const parts = [narrator.name_th, genLabel(narrator.generation, bookLayer)];
  if (narrator.died_ah != null)
    parts.push(`เสียชีวิตปีฮิจเราะฮ์ศักราช ${narrator.died_ah}`);
  if (narrator.city) parts.push(`อยู่ที่เมือง${narrator.city}`);
  if (narrator.note_th) parts.push(narrator.note_th);
  if (narrator.verify) parts.push("ข้อมูลนี้รอตรวจสอบกับต้นฉบับ");
  return parts.join(" ");
}

// ข้อความอ่านออกเสียงเมื่อคลิกโหนดตำรา
function bookNarration(book) {
  const parts = [book.name_th];
  if (book.author_died_ah != null)
    parts.push(`ผู้รวบรวมเสียชีวิตปีฮิจเราะฮ์ศักราช ${book.author_died_ah}`);
  if (book.verify) parts.push("ข้อมูลนี้รอตรวจสอบกับต้นฉบับ");
  return parts.join(" ");
}

// ปรับข้อความให้เอนจินเสียงอ่านได้ครบ (ﷺ อ่านเป็นคำเต็ม, ลูกศร/อักขระ XML
// อย่าง < > & ทำให้ SSML ของเอนจินเสียงพัง — แปลงเป็นคำอ่านก่อน)
function forSpeech(text) {
  return text
    .replace(/ﷺ/g, "ศ็อลลัลลอฮุอะลัยฮิวะซัลลัม")
    .replace(/<-/g, " รับจาก ")
    .replace(/->/g, " ไปยัง ")
    .replace(/[<>&]/g, " ")
    .replace(/—/g, " ");
}

// ชื่อไฟล์เสียงที่สร้างล่วงหน้า (public/audio/isnad/)
const storyAudioFile = (layer) => `story-${layer}.mp3`;
const nodeAudioFile = (id) => `node-${id}.mp3`;

module.exports = {
  GEN_LABELS,
  genLabel,
  maxGenerationOf,
  statsLite,
  storyText,
  personNarration,
  bookNarration,
  forSpeech,
  storyAudioFile,
  nodeAudioFile,
};
