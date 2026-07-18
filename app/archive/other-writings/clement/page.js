import ManuscriptDetailPage from "../../biblical-codices/_components/ManuscriptDetailPage";

const data = {
  backHref: "/archive/other-writings",
  backLabel: "Other Writings",
  title: "1 Clement",
  subtitle: "Epistle of the Romans to the Corinthians",
  heroDesc:
    "งานเขียนคริสเตียนนอกพันธสัญญาใหม่ที่เก่าแก่ที่สุดที่ระบุเวลาได้ค่อนข้างแน่ — จดหมายจากคริสตจักรโรมเข้าระงับการปลดผู้ปกครองในโครินธ์ ราว ค.ศ. 95-96",
  heroMeta:
    "ราว ค.ศ. 95-96 | Greek | British Library (ใน Codex Alexandrinus)",
  galleryNote:
    "ภาพ facsimile หน้า 1 Clement จาก Codex Alexandrinus (ห้องสมุดบริติช ลอนดอน)",
  gallery: [
    {
      src: "/manuscripts/other/clement/cle2.jpg",
      alt: "Opening page of 1 Clement in Codex Alexandrinus (folio 159)",
      caption:
        "Folio 159 ของ Codex Alexandrinus — หน้าเปิด 1 Clement (facsimile ถ่ายภาพ ศตวรรษที่ 19, MET)",
    },
    {
      src: "/manuscripts/other/clement/cle1.jpg",
      alt: "Uncial gospel page of Codex Alexandrinus",
      caption:
        "หน้าพระกิตติคุณอักษร uncial สองคอลัมน์แบบ Codex Alexandrinus — โคเด็กซ์พระคัมภีร์ที่ผนวก 1-2 Clement ต่อท้ายวิวรณ์",
    },
  ],
  info: [
    {
      label: "อายุการแต่ง",
      value:
        "ราว ค.ศ. 95-96 — อ้างอิงจากการเอ่ยถึง \"เคราะห์ร้ายฉับพลันที่เกิดแก่เราต่อเนื่อง\" ซึ่งอ่านกันว่าหมายถึงปลายรัชกาล Domitian (นักวิชาการบางคนขยายช่วงเป็น ค.ศ. 80-100)",
    },
    {
      label: "ผู้แต่ง",
      value:
        "จดหมายไม่ระบุชื่อ — เขียนในนามคริสตจักรโรมทั้งชุมชน ประเพณีตั้งแต่ศตวรรษที่ 2 ผูกกับเคลเมนต์ ซึ่งภายหลังถูกนับเป็นบิชอปโรมองค์ที่ 3",
    },
    {
      label: "ต้นฉบับ",
      value:
        "Codex Alexandrinus (ศตวรรษที่ 5 — ขาดหน้าเดียว) | Codex Hierosolymitanus (ค.ศ. 1056 — ฉบับเต็ม) | ฉบับแปล Latin, Syriac, Coptic",
    },
    {
      label: "เหตุแห่งจดหมาย",
      value:
        "ชุมชนโครินธ์ปลดคณะผู้ปกครอง (presbyters) ออกจากตำแหน่ง — โรมเขียนมาตำหนิว่าเป็น \"การกบฏอันน่ารังเกียจและไม่บริสุทธิ์\" และเรียกร้องให้คืนตำแหน่ง",
    },
    {
      label: "สถานะการใช้",
      value:
        "ถูกอ่านในพิธีที่โครินธ์สืบถึงราว ค.ศ. 170 (คำพยานของบิชอป Dionysius) | ถูกเย็บรวมใน Codex Alexandrinus ต่อจากวิวรณ์ ประหนึ่งส่วนหนึ่งของพระคัมภีร์",
    },
    {
      label: "สถานที่เก็บรักษา",
      value:
        "หอสมุดบริติช ลอนดอน (Codex Alexandrinus) | เยรูซาเล็ม (Codex Hierosolymitanus)",
    },
  ],
  sections: [
    {
      heading: "ประวัติของข้อความ",
      paragraphs: [
        "1 Clement เขียนขึ้นร่วมสมัยกับหนังสือเล่มท้าย ๆ ของพันธสัญญาใหม่เอง — อาจก่อนวิวรณ์ฉบับสุดท้ายด้วยซ้ำ จดหมายอ้างพันธสัญญาเดิม (ฉบับ Septuagint) อย่างหนาแน่น อ้างถ้อยคำของพระเยซู และรู้จักจดหมายเปาโลถึงชาวโครินธ์ — เป็นพยานยุคแรกสุดว่างานของเปาโลถูกเก็บรักษาและอ่านต่อ",
        "จุดที่ทำให้เอกสารนี้เป็นหมุดหมายประวัติศาสตร์คือบทที่ 44: อัครทูตทราบล่วงหน้าว่าจะมีการแย่งชิงตำแหน่ง จึงตั้งผู้ปกครองและวางหลักการสืบทอด — ข้อความที่ต่อมาถูกใช้เป็นรากของแนวคิด Apostolic Succession จดหมายยังเป็นหลักฐานแรกที่เล่ามรณกรรมของเปโตรและเปาโล \"เสาหลักผู้ยิ่งใหญ่ที่สุด\" ที่ถูกประหัตประหาร \"เพราะความริษยา\" (บท 5)",
        "Ehrman ใช้ 1 Clement เป็นเอกสารหลักของหมวดโครงสร้างและอำนาจคริสตจักรใน After the New Testament และแปลตัวบทไว้ใน Loeb Apostolic Fathers ของเขาเอง",
      ],
    },
    {
      heading: "สาระสำคัญ",
      columns: [
        {
          title: "ข้อความที่มีชื่อเสียง",
          items: [
            "บท 5-6: มรณสักขีของเปโตรและเปาโล — เปาโล \"ไปถึงสุดเขตตะวันตก\" ก่อนพลีชีพ",
            "บท 25: อุปมานกฟีนิกซ์ฟื้นจากเถ้า เป็นหลักฐานการฟื้นคืนชีพ — ตำนานกรีกที่ถูกใช้เชิงเทววิทยา",
            "บท 44: ผู้ปกครองที่อัครทูตหรือผู้สืบทอดแต่งตั้งและรับใช้ไร้ตำหนิ จะถูกปลดโดยไม่เป็นธรรมไม่ได้",
          ],
        },
        {
          title: "ความสำคัญทางวิชาการ",
          items: [
            "หลักฐานแรกของคริสตจักรโรมที่แสดงอำนาจเหนือชุมชนอื่น — จุดตั้งต้นของข้อถกเถียงเรื่อง primacy ของโรม",
            "ให้ภาพโครงสร้างสองชั้น (presbyters/bishops ใช้แทนกันได้ + deacons) ก่อนระบบบิชอปเดี่ยวของ Ignatius",
            "การถูกเย็บใน Codex Alexandrinus แสดงว่าเส้นแบ่งสารบบยังพร่าจนถึงศตวรรษที่ 5",
          ],
        },
      ],
    },
  ],
  note:
    "1 Clement คือภาพถ่ายของคริสตจักรวินาทีที่อำนาจเปลี่ยนมือ — จากผู้เผยพระวจนะที่รับพระวิญญาณ สู่ตำแหน่งที่สืบทอดตามระเบียบ ข้อโต้แย้งของโรมไม่ได้อ้างนิมิตหรือการดลใจ แต่อ้าง \"ระเบียบที่พระเจ้าทรงวาง\" ผ่านลำดับอัครทูต-ผู้ปกครอง แนวทางที่จะชนะขาดในศตวรรษต่อมา และเป็นเหตุผลเดียวกับที่ฝ่าย Proto-orthodox ใช้ตัดสินว่าหนังสือเล่มใดควรอยู่ในสารบบ",
  references: [
    "Bart D. Ehrman, After the New Testament: A Reader in Early Christianity, 100-300 CE, 2nd ed., Oxford University Press, 2015",
    "Bart D. Ehrman, The Apostolic Fathers, vol. 1, Loeb Classical Library, Harvard University Press, 2003",
    "Michael W. Holmes, The Apostolic Fathers: Greek Texts and English Translations, 3rd ed., Baker Academic, 2007",
    "J.B. Lightfoot, The Apostolic Fathers, Part I: S. Clement of Rome, 2 vols., Macmillan, 1890",
    "Laurence L. Welborn, \"On the Date of First Clement\", Biblical Research 29 (1984)",
  ],
  primaryUrl: "https://www.earlychristianwritings.com/1clement.html",
  primaryLabel: "แหล่งที่มา ↗",
};

export default function ClementPage() {
  return <ManuscriptDetailPage data={data} />;
}
