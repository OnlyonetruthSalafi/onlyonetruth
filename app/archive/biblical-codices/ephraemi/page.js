import ManuscriptDetailPage from "../_components/ManuscriptDetailPage";

const data = {
  title: "Codex Ephraemi Rescriptus (C/04)",
  subtitle: "The Great Palimpsest of the Bible",
  heroDesc:
    "หนึ่งใน Great Uncial Codices ทั้งสี่ — ต้นฉบับพระคัมภีร์ที่ถูกขูดลบแล้วเขียนบทเทศนาทับ ก่อนถูกถอดความกลับมาโดย Tischendorf",
  heroMeta:
    "ศตวรรษที่ 5 | Greek Uncial Palimpsest | Bibliothèque nationale de France, Paris",
  galleryNote: "ภาพหน้าต้นฉบับจากหอสมุดแห่งชาติฝรั่งเศส กรุงปารีส (Grec 9)",
  gallery: [
    {
      src: "/manuscripts/bible/ephraemi/eph1.jpg",
      alt: "Codex Ephraemi Rescriptus folio 138r",
      caption:
        "Folio 138r — เห็นข้อความพระคัมภีร์ชั้นล่างจาง ๆ ใต้บทเทศนาของเอฟราเอม",
    },
    {
      src: "/manuscripts/bible/ephraemi/eph2.jpg",
      alt: "Codex Ephraemi Matthew 1",
      caption: "มัทธิว 1:1-18 — ข้อความชั้นล่างศตวรรษที่ 5 ที่ถูกถอดความ",
    },
  ],
  info: [
    {
      label: "อายุต้นฉบับ",
      value:
        "ศตวรรษที่ 5 (ชั้นพระคัมภีร์) | ศตวรรษที่ 12 (ชั้นบทเทศนาที่เขียนทับ)",
    },
    {
      label: "เนื้อหา",
      value:
        "เหลือ 209 แผ่น — พันธสัญญาใหม่ 145 แผ่น (มีชิ้นส่วนของแทบทุกเล่ม ยกเว้น 2 เธสะโลนิกาและ 2 ยอห์น) + พันธสัญญาเดิม 64 แผ่น",
    },
    {
      label: "รูปแบบ",
      value:
        "Parchment Codex ขนาด 33 × 27 เซนติเมตร เขียน 1 คอลัมน์ต่อหน้า (ต่างจาก Uncial ใหญ่เล่มอื่นที่ใช้ 2-4 คอลัมน์)",
    },
    {
      label: "ตระกูลข้อความ",
      value:
        "ผสม — พื้น Alexandrian ปนอ่าน Byzantine ผ่านมือผู้แก้ไข C2 (ศตวรรษที่ 6) และ C3 (ศตวรรษที่ 9)",
    },
    {
      label: "สถานที่เก็บรักษา",
      value: "Bibliothèque nationale de France กรุงปารีส (BnF Grec 9)",
    },
    {
      label: "การถอดความ",
      value:
        "Constantin von Tischendorf อ่านข้อความชั้นล่างสำเร็จและตีพิมพ์ ค.ศ. 1843 (NT) และ 1845 (OT)",
    },
  ],
  sections: [
    {
      heading: "ประวัติของต้นฉบับ",
      paragraphs: [
        "Codex Ephraemi Rescriptus คัดลอกในศตวรรษที่ 5 น่าจะในอียิปต์ ต่อมาในศตวรรษที่ 12 เมื่อหนังแพะมีราคาแพง ข้อความพระคัมภีร์ถูกขูดลบออกเพื่อนำแผ่นหนังกลับมาใช้เขียนบทเทศนากรีก 38 บทของนักบุญเอฟราเอมชาวซีเรีย (Ephrem the Syrian) — ที่มาของชื่อ \"Rescriptus\" (เขียนทับ) ต้นฉบับเดินทางจากคอนสแตนติโนเปิลมาอิตาลีหลังการล่มสลายของเมืองในปี ค.ศ. 1453 ผ่านมือพระคาร์ดินัล Niccolò Ridolfi ก่อนที่ Catherine de' Medici จะนำมายังฝรั่งเศส และตกเป็นสมบัติของหอสมุดหลวงซึ่งกลายเป็นหอสมุดแห่งชาติฝรั่งเศสในปัจจุบัน",
        "นักวิชาการหลายคนพยายามอ่านข้อความชั้นล่างที่เลือนรางมาตั้งแต่ศตวรรษที่ 17 แต่ผู้ที่ทำสำเร็จทั้งเล่มคือ Constantin von Tischendorf วัย 26 ปี ซึ่งใช้เวลาสองปี (ค.ศ. 1841-1843) อ่านด้วยตาเปล่าประกอบสารเคมี Prussian blue ที่ห้องสมุดใช้เพิ่มความคมของหมึกเดิม ความสำเร็จครั้งนี้สร้างชื่อให้เขาก่อนที่จะค้นพบ Codex Sinaiticus ในเวลาต่อมา ปัจจุบันมีโครงการอ่านซ้ำด้วย multispectral imaging เพื่อเก็บรายละเอียดที่ Tischendorf อ่านไม่ได้",
      ],
    },
    {
      heading: "คุณค่าทางวิชาการ",
      paragraphs: [
        "แม้จะเหลือไม่ถึงสองในสามของเล่มเดิม C ก็ยังถูกจัดเป็นหนึ่งใน Great Uncial Codices ทั้งสี่ร่วมกับ Sinaiticus (ℵ), Alexandrinus (A) และ Vaticanus (B) ข้อความของ C มีลักษณะผสม — Metzger อธิบายว่าพื้นเป็น Alexandrian แต่ปะปนการอ่านแบบ Byzantine มาก ทำให้มีค่าในฐานะพยานอิสระที่สะท้อนการปะทะกันของสายข้อความในศตวรรษที่ 5",
        "มือผู้แก้ไขสองรุ่น (C2 ราวศตวรรษที่ 6 ในอียิปต์หรือปาเลสไตน์ และ C3 ราวศตวรรษที่ 9 ในคอนสแตนติโนเปิล) ยังให้ภาพการปรับข้อความเข้าหามาตรฐาน Byzantine ทีละขั้น — ตัวอย่างที่มีชื่อเสียงคือ 1 ทิโมธี 3:16 ที่มือเดิมเขียน ΟΣ (ผู้ซึ่ง) แต่ผู้แก้ไขรุ่นหลังเติมขีดให้กลายเป็น ΘΣ (พระเจ้า) ซึ่งเป็น variant เชิงหลักคำสอนที่ Metzger และ Ehrman ใช้เป็นกรณีศึกษาเรื่องการแก้ไขข้อความด้วยเหตุผลทางเทววิทยา",
      ],
    },
  ],
  note:
    "ชะตากรรมของ Codex Ephraemi สะท้อนความจริงทางวัตถุของการส่งต่อพระคัมภีร์ — ต้นฉบับระดับหอหลวงยังถูกขูดลบเพื่อนำหนังกลับมาใช้ใหม่ และ variant อย่าง 1 ทิโมธี 3:16 (ΟΣ → ΘΣ) ที่เกิดจากมือผู้แก้ไขรุ่นหลัง กลายเป็นข้อความที่ผู้อ่านหลายศตวรรษเข้าใจว่าเป็นของเดิม กรณีนี้เป็นตัวอย่างที่ Metzger ยกในบท \"Alterations Made Because of Doctrinal Considerations\" ของ The Text of the New Testament",
  references: [
    "Bruce M. Metzger & Bart D. Ehrman, The Text of the New Testament, 4th ed., Oxford University Press, 2005, pp. 69-70",
    "Constantin von Tischendorf, Codex Ephraemi Syri Rescriptus, Leipzig, 1843-1845",
    "Robert W. Lyon, \"A Re-Examination of Codex Ephraemi Rescriptus\", New Testament Studies 5 (1959)",
    "Kurt Aland & Barbara Aland, The Text of the New Testament, 2nd ed., Eerdmans, 1989, p. 109",
    "Bibliothèque nationale de France, Gallica: Grec 9, gallica.bnf.fr",
  ],
  primaryUrl: "https://gallica.bnf.fr/ark:/12148/btv1b8470433r",
  primaryLabel: "ชมสแกนต้นฉบับที่ Gallica ↗",
};

export default function EphraemiPage() {
  return <ManuscriptDetailPage data={data} />;
}
