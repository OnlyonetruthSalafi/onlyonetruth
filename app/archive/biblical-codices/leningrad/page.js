import ManuscriptDetailPage from "../_components/ManuscriptDetailPage";

const data = {
  title: "Leningrad Codex (B19a)",
  subtitle: "The Oldest Complete Hebrew Bible",
  heroDesc:
    "ต้นฉบับพระคัมภีร์ฮีบรูฉบับสมบูรณ์ที่เก่าแก่ที่สุดในโลก — ฐานของพระคัมภีร์ฮีบรูวิชาการทุกฉบับในปัจจุบัน",
  heroMeta:
    "ค.ศ. 1008 | Hebrew (Masoretic) | National Library of Russia, St. Petersburg",
  galleryNote:
    "ภาพหน้าต้นฉบับ Firkovich B19a หอสมุดแห่งชาติรัสเซีย เซนต์ปีเตอร์สเบิร์ก",
  gallery: [
    {
      src: "/manuscripts/bible/leningrad/len1.jpg",
      alt: "Leningrad Codex carpet page folio 474a",
      caption:
        "Carpet page (folio 474a) — ดาวหกแฉกประดับ Masorah ลายวิจิตร หนึ่งใน 16 หน้าประดับ",
    },
    {
      src: "/manuscripts/bible/leningrad/len2.jpg",
      alt: "Leningrad Codex carpet page detail",
      caption: "รายละเอียดหน้าประดับ — ตัวอักษรจิ๋วของ Masorah สานเป็นลวดลายเรขาคณิต",
    },
  ],
  info: [
    {
      label: "อายุต้นฉบับ",
      value:
        "ค.ศ. 1008 (หรือ 1009) ตามบันทึก colophon ของผู้คัดลอกเอง — คัดลอกที่ไคโร อียิปต์",
    },
    {
      label: "เนื้อหา",
      value:
        "พระคัมภีร์ฮีบรูครบทุกเล่ม 491 แผ่น พร้อมสระ เครื่องหมายขับร้อง (cantillation) และ Masorah ครบสมบูรณ์",
    },
    {
      label: "ผู้คัดลอก",
      value:
        "Samuel ben Jacob — คัดลอก ใส่สระ และเขียน Masorah ด้วยตนเองทั้งเล่ม ตรวจทานกับต้นฉบับสาย Ben Asher",
    },
    {
      label: "ตระกูลข้อความ",
      value:
        "Masoretic Text สายสำนัก Ben Asher แห่งทิเบเรียส — ใกล้เคียง Aleppo Codex มากที่สุด",
    },
    {
      label: "สถานที่เก็บรักษา",
      value:
        "National Library of Russia เซนต์ปีเตอร์สเบิร์ก (Firkovich B19a) ตั้งแต่ ค.ศ. 1863",
    },
    {
      label: "ความสำคัญ",
      value:
        "ฐานของ Biblia Hebraica Kittel (1937), Biblia Hebraica Stuttgartensia (1977) และ Biblia Hebraica Quinta — ฉบับที่ใช้แปลพันธสัญญาเดิมแทบทุกภาษาทั่วโลก",
    },
  ],
  sections: [
    {
      heading: "ประวัติของต้นฉบับ",
      paragraphs: [
        "ตาม colophon (บันทึกท้ายเล่ม) Samuel ben Jacob คัดลอกต้นฉบับนี้ที่ไคโรเสร็จราวปี ค.ศ. 1008 โดยระบุว่าตรวจทานกับ \"หนังสือที่ถูกต้องซึ่ง Aaron ben Moses ben Asher จัดทำ\" ต้นฉบับผ่านมือเจ้าของหลายรายก่อนตกเป็นของ Abraham Firkovich นักสะสมชาวคาราอิเตในศตวรรษที่ 19 ซึ่งขายให้หอสมุดหลวงแห่งเซนต์ปีเตอร์สเบิร์กในปี ค.ศ. 1863 ชื่อ \"Leningrad Codex\" มาจากชื่อเมืองในยุคโซเวียต และยังใช้กันในวงการแม้เมืองจะกลับมาใช้ชื่อเซนต์ปีเตอร์สเบิร์กแล้ว",
        "ต้นฉบับมีหน้าประดับ (carpet pages) 16 หน้า ที่ตัวอักษรจิ๋วของ Masorah ถูกสานเป็นลวดลายเรขาคณิตและดาวประดับทอง — ผสานศิลปะการตกแต่งแบบอิสลามยุคฟาฏิมียะห์เข้ากับประเพณีอาลักษณ์ยิวอย่างชัดเจน",
      ],
    },
    {
      heading: "จากอะเลปโปสู่เลนินกราด — ฐานของพระคัมภีร์วิชาการ",
      paragraphs: [
        "ในบรรดาต้นฉบับ Masoretic สาย Ben Asher มี Aleppo Codex (ราว ค.ศ. 930) ที่ถือว่าแม่นยำที่สุด แต่เมื่อ Aleppo เสียหายราว 40% ในเหตุจลาจลปี ค.ศ. 1947 Leningrad Codex ซึ่งอายุอ่อนกว่าราว 80 ปีแต่ยังครบทุกหน้า จึงกลายเป็นต้นฉบับสมบูรณ์ที่เก่าแก่ที่สุดโดยปริยาย Paul Kahle เลือกใช้เป็นฐานของ Biblia Hebraica ฉบับที่ 3 (BHK, 1937) และฉบับสืบทอด BHS/BHQ ก็ยึดตามมาจนปัจจุบัน",
        "Emanuel Tov ชี้ใน Textual Criticism of the Hebrew Bible ว่าความน่าทึ่งของสาย Masoretic คือความเสถียร — เมื่อเทียบ Leningrad กับชิ้นส่วน proto-Masoretic จาก Qumran และ Masada ที่เก่ากว่าราวหนึ่งพันปี ข้อความพยัญชนะแทบไม่เปลี่ยนแปลง แม้ระบบสระและ Masorah จะเป็นนวัตกรรมของยุคกลางก็ตาม",
      ],
    },
    {
      heading: "ระบบ Masorah — เทคโนโลยีรักษาข้อความของชาวยิว",
      columns: [
        {
          title: "องค์ประกอบของหน้าต้นฉบับ",
          items: [
            "ข้อความพยัญชนะ 3 คอลัมน์ พร้อมสระและเครื่องหมายขับร้องแบบทิเบเรียส",
            "Masorah parva ริมคอลัมน์ — นับจำนวนครั้งของคำหายาก ป้องกันการคัดลอกผิด",
            "Masorah magna หัว-ท้ายหน้า — รายการอ้างอิงโยงทั้งพระคัมภีร์",
          ],
        },
        {
          title: "ผลลัพธ์",
          items: [
            "สถิติทุกระดับ (จำนวนโองการ คำ อักษร อักษรกลางเล่ม) ถูกนับและบันทึก",
            "ธรรมาจารย์รุ่นหลังตรวจงานตนเองกับตัวเลขเหล่านี้ได้ทันที",
            "ทำให้ Masoretic Text เสถียรสูงมากตลอดยุคกลางจนถึงปัจจุบัน",
          ],
        },
      ],
    },
  ],
  note:
    "Leningrad Codex แสดงพลังของระบบ Masorah ที่ทำให้ข้อความฮีบรูเสถียรอย่างยิ่งตั้งแต่ราวศตวรรษที่ 2 เป็นต้นมา แต่หลักฐานจาก Dead Sea Scrolls และ Septuagint ก็แสดงว่าก่อนหน้านั้นข้อความพระคัมภีร์ฮีบรูเคยมีหลายสายที่แตกต่างกัน ระบบรักษาข้อความอันเข้มงวดจึงเป็นพัฒนาการภายหลัง ไม่ใช่สิ่งที่มีมาแต่ต้น — ต่างจากอัลกุรอานที่การท่องจำระดับ Mutawātir ควบคู่การบันทึกเริ่มตั้งแต่ชั่วอายุแรกของการประทาน",
  references: [
    "Emanuel Tov, Textual Criticism of the Hebrew Bible, 3rd ed., Fortress Press, 2012",
    "David N. Freedman et al. (eds.), The Leningrad Codex: A Facsimile Edition, Eerdmans, 1998",
    "Paul Kahle, The Cairo Geniza, 2nd ed., Blackwell, 1959",
    "Karl Elliger & Wilhelm Rudolph (eds.), Biblia Hebraica Stuttgartensia, Deutsche Bibelgesellschaft, 1977",
    "Internet Archive, The Leningrad Codex (สแกนฉบับ facsimile), archive.org/details/Leningrad_Codex",
  ],
  primaryUrl: "https://archive.org/details/Leningrad_Codex",
};

export default function LeningradPage() {
  return <ManuscriptDetailPage data={data} />;
}
