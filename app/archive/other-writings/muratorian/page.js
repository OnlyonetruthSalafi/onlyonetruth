import ManuscriptDetailPage from "../../biblical-codices/_components/ManuscriptDetailPage";

const data = {
  backHref: "/archive/other-writings",
  backLabel: "Other Writings",
  title: "Muratorian Fragment",
  subtitle: "The Oldest List of New Testament Books",
  heroDesc:
    "หลักฐานเก่าแก่ที่สุดของการ \"ขีดเส้น\" สารบบพันธสัญญาใหม่ — รายชื่อหนังสือที่รับและปฏิเสธ 85 บรรทัด ในภาษาละตินที่คัดลอกอย่างหละหลวม จากรายชื่อกรีกราวปลายศตวรรษที่ 2",
  heroMeta:
    "รายชื่อราว ค.ศ. 170-200 | Latin | Biblioteca Ambrosiana, Milan",
  galleryNote:
    "ภาพต้นฉบับ Codex Muratorianus (Cod. J 101 sup.) ห้องสมุดอัมโบรเซียนา มิลาน",
  gallery: [
    {
      src: "/manuscripts/other/muratorian/mur1.jpg",
      width: 770,
      height: 581,
      alt: "Codex Muratorianus double page with the canon list",
      caption:
        "หน้าคู่ Codex Muratorianus (ศตวรรษที่ 7-8) — ช่วงข้อความรายชื่อสารบบ",
    },
    {
      src: "/manuscripts/other/muratorian/mur2.png",
      width: 539,
      height: 612,
      alt: "Facsimile transcription of the Muratorian Fragment",
      caption:
        "Facsimile หน้าเดียวของชิ้นส่วน — เห็นบรรทัดว่าด้วยวิวรณ์สองเล่มและการปฏิเสธ Shepherd of Hermas",
    },
  ],
  info: [
    {
      label: "อายุ",
      value:
        "ตัวรายชื่อ: ราว ค.ศ. 170-200 (อ้างว่า Hermas เขียน \"เมื่อไม่นานนี้\" สมัยบิชอป Pius ราว ค.ศ. 140-154) — นักวิชาการส่วนน้อย (Sundberg, Hahneman) เสนอเลื่อนเป็นศตวรรษที่ 4 | ตัวต้นฉบับ: ศตวรรษที่ 7-8",
    },
    {
      label: "ต้นฉบับ",
      value:
        "Codex Muratorianus (Cod. J 101 sup.) — โคเด็กซ์รวมเบ็ดเตล็ดจากอาราม Bobbio | ข้อความ 85 บรรทัด ขาดตอนต้น (เริ่มกลางประโยค) และอาจขาดตอนท้าย | บางท่อนซ้ำในต้นฉบับงาน Ambrose ที่ Monte Cassino",
    },
    {
      label: "ภาษา",
      value:
        "Latin ที่ผิดไวยากรณ์หนาแน่น — เข้าใจกันว่าแปลจากกรีกโดยผู้คัดที่ไม่ชำนาญ ทำให้หลายบรรทัดต้องอาศัยการคาดคะเนเชิงวิชาการ",
    },
    {
      label: "หนังสือที่รับ",
      value:
        "พระกิตติคุณ 4 (บรรทัดแรกที่เหลือพาดพิงลูกาเป็น \"เล่มที่สาม\" และยอห์นเป็น \"เล่มที่สี่\") | กิจการ | จดหมายเปาโล 13 | ยูดา | ยอห์น 2 ฉบับ | วิวรณ์ของยอห์น | + Wisdom of Solomon และ Apocalypse of Peter (มีผู้คัดค้าน)",
    },
    {
      label: "หนังสือที่ไม่ปรากฏ/ปฏิเสธ",
      value:
        "ไม่เอ่ยถึงฮีบรู ยากอบ 1-2 เปโตร | ปฏิเสธจดหมายปลอมถึง Laodicea และ Alexandria \"ที่ปลอมในนามเปาโลฝ่าย Marcion\" | ปฏิเสธ Hermas สำหรับพิธี | ปฏิเสธงานของ Arsinous, Valentinus, Miltiades และหนังสือเพลงสดุดีฉบับใหม่ของ Marcion",
    },
    {
      label: "สถานที่เก็บรักษา",
      value: "Biblioteca Ambrosiana มิลาน อิตาลี",
    },
  ],
  sections: [
    {
      heading: "ประวัติของข้อความ",
      paragraphs: [
        "Ludovico Antonio Muratori บรรณารักษ์แห่งอัมโบรเซียนา พบข้อความนี้ในโคเด็กซ์จากอาราม Bobbio และตีพิมพ์ปี ค.ศ. 1740 เพื่อเป็นตัวอย่างความหละหลวมของอาลักษณ์ยุคกลาง — โดยไม่ทันรู้ว่าสิ่งที่ตนตีพิมพ์จะกลายเป็นเอกสารแกนของการศึกษาประวัติสารบบพันธสัญญาใหม่",
        "คุณค่าของชิ้นส่วนอยู่ที่เหตุผลประกอบ: ผู้เขียนไม่เพียงแจกแจงรายชื่อ แต่อธิบายว่ารับเพราะอะไร ปฏิเสธเพราะอะไร — ยอห์นเขียนโดยมีอัครทูตร่วมรับรอง | ลูกาเขียนแม้ไม่เคยเห็นพระเยซูแต่ติดตามเปาโล | Hermas อ่านได้แต่ประกาศในคริสตจักรไม่ได้เพราะเพิ่งแต่ง | จดหมายฝ่าย Marcion ปลอมทั้งดุ้น \"เพราะน้ำดีผสมน้ำผึ้งไม่ได้\" — นี่คือหลักเกณฑ์ apostolicity, catholicity และ orthodoxy ในรูปดิบที่สุด",
        "Ehrman ใช้เอกสารนี้เป็นหลักฐานแกนในบทว่าด้วยการก่อตัวของสารบบใน After the New Testament — ภาพของสารบบปลายศตวรรษที่ 2 ที่แกนกลาง (พระกิตติคุณ 4 + เปาโล) ลงตัวแล้ว แต่ชายขอบยังเปิด: Apocalypse of Peter ยังเข้าได้ ฮีบรูกับยากอบยังไม่เข้า",
      ],
    },
    {
      heading: "สาระสำคัญ",
      columns: [
        {
          title: "ข้อความเด่นในชิ้นส่วน",
          items: [
            "\"วิวรณ์เรารับเพียงของยอห์นและของเปโตร ซึ่งบางคนในพวกเราไม่ยอมให้อ่านในคริสตจักร\" (บรรทัด 71-73)",
            "\"Hermas เขียน Shepherd เมื่อไม่นานนี้เอง ในยุคของเรา ที่กรุงโรม ขณะ Pius พี่น้องของเขานั่งบัลลังก์บิชอป\" (บรรทัด 73-77)",
            "แม้พระกิตติคุณทั้งสี่ต่างกันในรายละเอียด \"ก็ไม่ต่างอะไรต่อศรัทธาของผู้เชื่อ เพราะพระวิญญาณเดียวประกาศทุกสิ่งในทั้งสี่\" (บรรทัด 16-26)",
          ],
        },
        {
          title: "ความสำคัญทางวิชาการ",
          items: [
            "เกณฑ์คู่ขนานกับ Irenaeus ร่วมสมัย: แกนสารบบลงตัวก่อน ค.ศ. 200 — โต้แย้งภาพ \"สารบบถูกกำหนดที่ไนเซีย\" ที่แพร่หลายในวัฒนธรรมสมัยนิยม",
            "หลักฐานการต่อสู้กับ Marcion: รายชื่อนี้บางส่วนคือปฏิกิริยาต่อสารบบตัดทอนของ Marcion",
            "ข้อถกเถียง Sundberg-Hahneman เรื่องเลื่อนอายุเป็นศตวรรษที่ 4 ทำให้ชิ้นส่วนนี้ยังเป็นสมรภูมิวิชาการถึงปัจจุบัน",
          ],
        },
      ],
    },
  ],
  note:
    "Muratorian Fragment หักล้างมายาคติสองขั้วพร้อมกัน — ขั้วที่ว่าสารบบ 27 เล่มมีมาแต่ต้น (ชิ้นส่วนขาดฮีบรู ยากอบ 1-2 เปโตร และรับ Apocalypse of Peter) และขั้วที่ว่าสารบบถูกยัดเยียดในศตวรรษที่ 4 (แกนหลักลงตัวแล้วก่อน ค.ศ. 200) ภาพจริงคือกระบวนการคัดกรองยาวนานที่เพิ่งปิดสนิทในจดหมายอีสเตอร์ของ Athanasius ค.ศ. 367 — กว่าสามศตวรรษหลังยุคพระเยซู",
  references: [
    "Bart D. Ehrman, After the New Testament: A Reader in Early Christianity, 100-300 CE, 2nd ed., Oxford University Press, 2015",
    "Bruce M. Metzger, The Canon of the New Testament: Its Origin, Development, and Significance, Oxford University Press, 1987",
    "Geoffrey M. Hahneman, The Muratorian Fragment and the Development of the Canon, Oxford University Press, 1992",
    "Joseph Verheyden, \"The Canon Muratori: A Matter of Dispute\", in The Biblical Canons, Leuven University Press, 2003",
    "Ludovico Antonio Muratori, Antiquitates Italicae Medii Aevi, vol. 3, Milan, 1740 (editio princeps)",
  ],
  primaryUrl: "https://www.earlychristianwritings.com/muratorian.html",
  primaryLabel: "แหล่งที่มา ↗",
};

export default function MuratorianPage() {
  return <ManuscriptDetailPage data={data} />;
}
