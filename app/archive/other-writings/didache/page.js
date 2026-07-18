import ManuscriptDetailPage from "../../biblical-codices/_components/ManuscriptDetailPage";

const data = {
  backHref: "/archive/other-writings",
  backLabel: "Other Writings",
  title: "Didache",
  subtitle: "The Teaching of the Twelve Apostles",
  heroDesc:
    "คู่มือชีวิตคริสตจักรที่เก่าแก่ที่สุดเท่าที่รู้จัก — บางส่วนอาจร่วมสมัยกับจดหมายของเปาโล สูญหายกว่าพันปีก่อนถูกค้นพบใหม่ปี ค.ศ. 1873",
  heroMeta:
    "ราว ค.ศ. 50-120 | Greek | Codex Hierosolymitanus (ค.ศ. 1056) เยรูซาเล็ม",
  galleryNote:
    "ภาพจาก Codex Hierosolymitanus และ facsimile บรรทัดเปิดของ Didache",
  gallery: [
    {
      src: "/manuscripts/other/didache/did1.jpg",
      alt: "Opening line of the Didache with transcription",
      caption:
        "Facsimile บรรทัดเปิด «Διδαχὴ τῶν δώδεκα ἀποστόλων» พร้อมคำถ่ายถอดอักษรกรีก",
    },
    {
      src: "/manuscripts/other/didache/did2.jpg",
      alt: "Minuscule page of Codex Hierosolymitanus",
      caption:
        "หน้าอักษร minuscule จาก Codex Hierosolymitanus — โคเด็กซ์ที่ Bryennios ค้นพบปี ค.ศ. 1873",
    },
  ],
  info: [
    {
      label: "อายุการแต่ง",
      value:
        "ราว ค.ศ. 50-120 — นักวิชาการปัจจุบันส่วนใหญ่เอนไปทางปลายศตวรรษที่ 1 โดยส่วน \"ทางสองสาย\" อาจสืบจากคู่มือยิวที่เก่ากว่า",
    },
    {
      label: "ต้นฉบับ",
      value:
        "Codex Hierosolymitanus (ค.ศ. 1056 — ลงชื่อผู้คัด Leon พร้อมวันที่) | ชิ้นส่วนกรีก P.Oxy. 1782 (ศตวรรษที่ 4) | ฉบับแปล Coptic, Ethiopic, Georgian บางส่วน",
    },
    {
      label: "โครงสร้าง",
      value:
        "บท 1-6: ทางสองสาย (ทางชีวิต-ทางความตาย) | บท 7-10: บัพติศมา การอดอาหาร ศีลมหาสนิท | บท 11-15: การรับผู้เผยพระวจนะและการปกครอง | บท 16: วาระสุดท้าย",
    },
    {
      label: "การค้นพบ",
      value:
        "บิชอป Philotheos Bryennios พบในห้องสมุดสำนักพระคูหาศักดิ์สิทธิ์สาขาคอนสแตนติโนเปิล ปี ค.ศ. 1873 ตีพิมพ์ ค.ศ. 1883 — โคเด็กซ์เดียวกันบรรจุ 1-2 Clement และ Epistle of Barnabas ฉบับเต็ม",
    },
    {
      label: "สถานะต่อสารบบ",
      value:
        "Eusebius และ Athanasius จัดเป็นหนังสือนอกสารบบ แต่ Athanasius แนะนำให้ผู้เตรียมรับบัพติศมาอ่าน — เนื้อหาบางส่วนถูกดูดซับเข้า Apostolic Constitutions",
    },
    {
      label: "สถานที่เก็บรักษา",
      value:
        "ห้องสมุดสังฆมณฑลกรีกออร์โธดอกซ์ เยรูซาเล็ม (Codex Hierosolymitanus 54)",
    },
  ],
  sections: [
    {
      heading: "ประวัติของข้อความ",
      paragraphs: [
        "Church Fathers หลายคนอ้างถึง \"Teaching of the Apostles\" แต่ตัวบทสูญหายไปตั้งแต่ยุคกลาง จนการค้นพบของ Bryennios ปี ค.ศ. 1873 กลายเป็นหนึ่งในการค้นพบเอกสารคริสเตียนครั้งสำคัญที่สุดของศตวรรษที่ 19 — เผยให้เห็นชีวิตจริงของชุมชนคริสตชนรุ่นแรกในระดับปฏิบัติ: ทำพิธีอย่างไร รับแขกอย่างไร แยกแยะผู้เผยพระวจนะแท้-เทียมอย่างไร",
        "Didache ให้ภาพคริสตจักรในช่วงเปลี่ยนผ่าน — ผู้เผยพระวจนะเร่ร่อนยังมีบทบาทสูง แต่ชุมชนเริ่มเลือกตั้งบิชอปและมัคนายกประจำถิ่น (บท 15) คำสั่งที่ว่าผู้เผยพระวจนะที่พักเกินสองวันหรือขอเงินคือผู้เทียม สะท้อนปัญหาจริงของเครือข่ายชุมชนยุคแรก Ehrman บรรจุฉบับเต็มไว้ใน After the New Testament หมวดชีวิตพิธีกรรมของคริสตจักรยุคแรก",
      ],
    },
    {
      heading: "สาระสำคัญ",
      columns: [
        {
          title: "ข้อกำหนดที่มีชื่อเสียง",
          items: [
            "บัพติศมา: ให้ใช้ \"น้ำเป็น\" (น้ำไหล) ถ้าไม่มีให้เทน้ำบนศีรษะสามครั้งในพระนามพระบิดา พระบุตร พระวิญญาณ (บท 7)",
            "ถืออดอาหารวันพุธและศุกร์ — จงใจต่างจาก \"พวกหน้าซื่อใจคด\" ที่ถือวันจันทร์และพฤหัส (บท 8)",
            "บทอธิษฐานศีลมหาสนิทเก่าแก่ที่สุด: \"ดั่งขนมปังนี้เคยกระจายบนภูเขาแล้วถูกรวมเป็นหนึ่ง ขอคริสตจักรถูกรวมจากสุดปลายแผ่นดินสู่อาณาจักรของพระองค์\" (บท 9)",
          ],
        },
        {
          title: "ความสำคัญทางวิชาการ",
          items: [
            "แหล่งอิสระศึกษาพัฒนาการพิธีกรรมก่อนโครงสร้างคริสตจักรแบบบิชอปเดี่ยวของ Ignatius",
            "ส่วน \"ทางสองสาย\" ขนานกับ Epistle of Barnabas 18-20 — หลักฐานคู่มือจริยธรรมยิวที่คริสตชนรับมาใช้",
            "หลักฐานว่าชุมชนบางแห่งท่องพระบิดา (ฉบับใกล้มัทธิว) วันละสามครั้ง — รอยต่อระหว่างวินัยยิวกับคริสเตียน",
          ],
        },
      ],
    },
  ],
  note:
    "Didache แสดงว่าคริสต์ศาสนายุคแรกสุดเป็นเรื่องของ \"วิถีปฏิบัติ\" พอ ๆ กับความเชื่อ — เอกสารทั้งเล่มแทบไม่มีเทววิทยาเรื่องการสิ้นพระชนม์ไถ่บาปเลย แต่ลงรายละเอียดวิธีอดอาหาร อธิษฐาน และรับแขก การที่หนังสือใช้งานจริงเช่นนี้ไม่ได้เข้าสารบบ ขณะจดหมายเชิงเทววิทยาของเปาโลเข้า สะท้อนว่าสารบบถูกคัดด้วยเกณฑ์ความเป็นอัครทูตและหลักข้อเชื่อ ไม่ใช่ประโยชน์ใช้สอย",
  references: [
    "Bart D. Ehrman, After the New Testament: A Reader in Early Christianity, 100-300 CE, 2nd ed., Oxford University Press, 2015",
    "Bart D. Ehrman, The Apostolic Fathers, vol. 1, Loeb Classical Library, Harvard University Press, 2003",
    "Kurt Niederwimmer, The Didache: A Commentary (Hermeneia), Fortress Press, 1998",
    "Aaron Milavec, The Didache: Faith, Hope, and Life of the Earliest Christian Communities, 50-70 C.E., Paulist Press, 2003",
    "Philotheos Bryennios, Διδαχὴ τῶν δώδεκα ἀποστόλων, Constantinople, 1883 (editio princeps)",
  ],
  primaryUrl: "https://www.earlychristianwritings.com/didache.html",
  primaryLabel: "แหล่งที่มา ↗",
};

export default function DidachePage() {
  return <ManuscriptDetailPage data={data} />;
}
