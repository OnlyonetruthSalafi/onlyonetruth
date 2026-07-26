import ManuscriptDetailPage from "../../biblical-codices/_components/ManuscriptDetailPage";

const data = {
  backHref: "/archive/other-writings",
  backLabel: "Other Writings",
  title: "Gospel of Thomas",
  subtitle: "The Complete Sayings Gospel from Nag Hammadi",
  heroDesc:
    "พระกิตติคุณนอกสารบบที่สำคัญที่สุด — คำกล่าวของพระเยซู 114 ข้อ โดยไม่มีเรื่องเล่า การตรึงกางเขน หรือการฟื้นคืนชีพ",
  heroMeta:
    "แต่งราวต้นศตวรรษที่ 2 | Coptic (Nag Hammadi Codex II) | Coptic Museum, Cairo",
  galleryNote: "ภาพต้นฉบับ Nag Hammadi Codex II พิพิธภัณฑ์คอปติก ไคโร",
  gallery: [
    {
      src: "/manuscripts/other/thomas/tho1.jpg",
      width: 1280,
      height: 2248,
      alt: "Nag Hammadi Codex II",
      caption: "Nag Hammadi Codex II — โคเด็กซ์หนังที่บรรจุ Gospel of Thomas เป็นเรื่องที่ 2",
    },
    {
      src: "/manuscripts/other/thomas/tho2.jpg",
      width: 611,
      height: 1053,
      alt: "Gospel of Thomas page from Nag Hammadi Codex II",
      caption: "หน้าข้อความ Coptic ของ Gospel of Thomas (Codex II หน้า 36)",
    },
  ],
  info: [
    {
      label: "อายุการแต่ง",
      value:
        "ราวต้นศตวรรษที่ 2 (Ehrman: ~ค.ศ. 110-120) — นักวิชาการส่วนน้อยเสนอว่าแกนเก่าสุดอาจถึงกลางศตวรรษที่ 1",
    },
    {
      label: "ต้นฉบับ",
      value:
        "ฉบับเต็ม: Coptic ใน Nag Hammadi Codex II (ราว ค.ศ. 340-350) | ชิ้นส่วนกรีก: P.Oxy. 1, 654, 655 (ราว ค.ศ. 200-250)",
    },
    {
      label: "เนื้อหา",
      value: "คำกล่าว (logia) 114 ข้อ นำด้วย \"นี่คือถ้อยคำลับที่พระเยซูผู้ทรงพระชนม์ตรัส และดิดิโมส ยูดาส โทมัสบันทึก\"",
    },
    {
      label: "แนวคิด",
      value:
        "ความรอดผ่านการตีความถ้อยคำลับ (saying 1) — เอียงทาง Gnostic แต่ไม่มีระบบตำนาน Gnostic เต็มรูป",
    },
    {
      label: "การค้นพบ",
      value:
        "ธันวาคม ค.ศ. 1945 ชาวนาชื่อ Muhammad Ali al-Samman พบโถบรรจุโคเด็กซ์ 13 เล่มที่เชิงหน้าผา Jabal al-Tarif ใกล้ Nag Hammadi",
    },
    {
      label: "สถานที่เก็บรักษา",
      value: "Coptic Museum ไคโร อียิปต์ (Nag Hammadi Codices ทั้งชุด)",
    },
  ],
  sections: [
    {
      heading: "ประวัติของข้อความ",
      paragraphs: [
        "ก่อนปี ค.ศ. 1945 โลกรู้จัก Gospel of Thomas เพียงจากคำประณามของ Church Fathers อย่าง Hippolytus และ Origen การค้นพบที่ Nag Hammadi คืนฉบับเต็มภาษา Coptic ให้วงวิชาการ และทำให้ชิ้นส่วนกรีก P.Oxy. 1, 654, 655 ที่ขุดพบตั้งแต่ปี ค.ศ. 1897-1904 (ซึ่งตอนนั้นเรียกกันเพียงว่า \"Sayings of Jesus\") ถูกระบุย้อนหลังว่าคือ Thomas ฉบับกรีก — หลักฐานว่าข้อความนี้หมุนเวียนในอียิปต์ตั้งแต่ราว ค.ศ. 200 เป็นอย่างช้า",
        "Ehrman จัด Thomas ไว้ในหมวดความหลากหลายของคริสต์ศาสนายุคแรกใน After the New Testament — มากกว่าครึ่งของ 114 logia มีคู่ขนานใน Synoptic Gospels (เช่น อุปมาเมล็ดมัสตาร์ด ผู้หว่านพืช) แต่ปราศจากโครงเรื่อง การอัศจรรย์ และการสิ้นพระชนม์เพื่อไถ่บาปโดยสิ้นเชิง คำถามใหญ่ของวงการคือ Thomas พึ่งพา Synoptics หรือสืบจากประเพณีถ้อยคำอิสระ — Ehrman เอนไปทางพึ่งพา ขณะที่ Koester และ Jesus Seminar เห็นว่าอิสระและอาจเก่ากว่า",
      ],
    },
    {
      heading: "สาระสำคัญ",
      columns: [
        {
          title: "ตัวอย่างคำกล่าวที่มีชื่อเสียง",
          items: [
            "Saying 1: \"ผู้ใดพบความหมายของถ้อยคำเหล่านี้จะไม่ลิ้มรสความตาย\"",
            "Saying 77: \"ผ่าท่อนไม้ เราอยู่ที่นั่น ยกก้อนหิน แล้วเจ้าจะพบเรา\"",
            "Saying 114: เปโตรขอให้มารีย์ออกไป — พระเยซูตอบว่าจะทรงนำเธอ \"ให้เป็นชาย\" (ข้อที่ถกเถียงที่สุด)",
          ],
        },
        {
          title: "ความสำคัญทางวิชาการ",
          items: [
            "เป็น \"Sayings Gospel\" สมบูรณ์ฉบับเดียว — สนับสนุนสมมติฐานว่าเอกสาร Q มีรูปแบบเช่นนี้",
            "แหล่งอิสระสำหรับศึกษาพระเยซูในประวัติศาสตร์ (ในมุมมองของนักวิชาการบางกลุ่ม)",
            "หลักฐานว่าคริสตชนบางกลุ่มเข้าใจความรอดเป็นปัญญา ไม่ใช่การไถ่บาปด้วยกางเขน",
          ],
        },
      ],
    },
  ],
  note:
    "Gospel of Thomas แสดงว่าในศตวรรษที่ 2 มีคริสตชนที่ถือพระเยซูเป็นครูแห่งปัญญาลับมากกว่าพระผู้ไถ่ที่สิ้นพระชนม์บนกางเขน — ความหลากหลายทางเทววิทยาที่ต่อมาถูกกระบวนการสร้างสารบบคัดออก ดังที่ Ehrman สรุปว่าประวัติศาสตร์คริสต์ศาสนายุคแรกคือการแข่งขันระหว่างหลาย \"คริสต์ศาสนา\" ที่จบลงด้วยชัยชนะของฝ่าย Proto-orthodox",
  references: [
    "Bart D. Ehrman, After the New Testament: A Reader in Early Christianity, 100-300 CE, 2nd ed., Oxford University Press, 2015",
    "Bart D. Ehrman, Lost Scriptures, Oxford University Press, 2003, pp. 19-28",
    "James M. Robinson (ed.), The Nag Hammadi Library in English, 3rd ed., HarperSanFrancisco, 1988",
    "Elaine Pagels, Beyond Belief: The Secret Gospel of Thomas, Random House, 2003",
    "Helmut Koester, Ancient Christian Gospels, SCM Press, 1990",
  ],
  primaryUrl: "https://www.earlychristianwritings.com/thomas.html",
  primaryLabel: "แหล่งที่มา ↗",
};

export default function ThomasPage() {
  return <ManuscriptDetailPage data={data} />;
}
