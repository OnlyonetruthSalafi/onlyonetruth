import ManuscriptDetailPage from "../../biblical-codices/_components/ManuscriptDetailPage";

const data = {
  backHref: "/archive/other-writings",
  backLabel: "Other Writings",
  title: "Apocalypse of Peter",
  subtitle: "The First Christian Tour of Heaven and Hell",
  heroDesc:
    "วรรณกรรม \"ทัวร์นรก\" ฉบับแรกของคริสต์ศาสนา — รายการบาป 21 ประเภทพร้อมโทษจำเพาะ ต้นแบบสายวรรณกรรมที่ทอดยาวถึง Divine Comedy ของ Dante และเป็นหนังสือที่เกือบได้เข้าสารบบจริง",
  heroMeta:
    "ราว ค.ศ. 100-150 | Greek + Ethiopic | Cairo (Akhmim) | Vienna | Oxford",
  galleryNote:
    "ภาพชิ้นส่วนกรีกของ Apocalypse of Peter",
  gallery: [
    {
      src: "/manuscripts/other/apocalypse-peter/apo1.png",
      width: 1280,
      height: 1608,
      alt: "Greek page of the Apocalypse of Peter from the Akhmim codex",
      caption:
        "หน้ากรีกจากโคเด็กซ์ Akhmim (P.Cair. 10759) — ตอนเปิดเรื่องว่าด้วยผู้เผยพระวจนะเทียมและนิมิตบนภูเขา",
    },
    {
      src: "/manuscripts/other/apocalypse-peter/apo2.jpg",
      width: 1280,
      height: 979,
      alt: "Small Greek fragments of the Apocalypse of Peter",
      caption:
        "ชิ้นส่วนกรีกใบเล็ก (กลุ่ม Rainer-Bodleian) — พยานอิสระที่ใช้ตรวจสอบลำดับข้อความกับฉบับ Ethiopic",
    },
  ],
  info: [
    {
      label: "อายุการแต่ง",
      value:
        "ราว ค.ศ. 100-150 — อ้างอุปมาต้นมะเดื่อเทียบกับกบฏ Bar Kokhba (ค.ศ. 132-135) จึงมักกำหนดช่วงปลายของกรอบนี้ | เป็นที่รู้จักแล้วเมื่อ Clement of Alexandria อ้างราวปลายศตวรรษที่ 2",
    },
    {
      label: "ต้นฉบับ",
      value:
        "ชิ้นส่วนกรีก: โคเด็กซ์ Akhmim (พบ ค.ศ. 1886-87 ในหลุมศพพระ) + Rainer fragment (เวียนนา) + Bodleian fragment (อ็อกซ์ฟอร์ด) | ฉบับเต็ม: ภาษา Ethiopic (พยานหลักคือต้นฉบับจาก Lake Tana)",
    },
    {
      label: "โครงเรื่อง",
      value:
        "บนภูเขามะกอกเทศ เหล่าสาวกทูลถามเรื่องวาระสุดท้าย พระเยซูทรงแสดงนิมิตการพิพากษา สวรรค์ของผู้ชอบธรรม และนรกที่โทษจำเพาะกับบาปแต่ละประเภท",
    },
    {
      label: "ตัวอย่างโทษ",
      value:
        "ผู้หมิ่นประมาทถูกแขวนด้วยลิ้น | ผู้ทำแท้งจมในบึงอุจจาระ | ผู้ให้กู้ดอกเบี้ยจมโคลนเดือด | ผู้ประหัตประหารมรณสักขีถูกงูกัดกินไม่สิ้นสุด — หลัก lex talionis: อวัยวะที่ทำบาปรับโทษ",
    },
    {
      label: "สถานะต่อสารบบ",
      value:
        "Clement of Alexandria อ้างเป็นพระคัมภีร์ | Muratorian Fragment รับแต่บันทึกว่า \"บางคนไม่ยอมให้อ่านในคริสตจักร\" | Eusebius จัดเป็นหนังสือไม่แท้ | คริสตจักรเอธิโอเปียรักษาฉบับเต็มไว้",
    },
    {
      label: "สถานที่เก็บรักษา",
      value:
        "Egyptian Museum ไคโร (โคเด็กซ์ Akhmim) | Austrian National Library เวียนนา (Rainer) | Bodleian Library อ็อกซ์ฟอร์ด | ต้นฉบับ Ethiopic ในเอธิโอเปียและคอลเลกชันตะวันตก",
    },
  ],
  sections: [
    {
      heading: "ประวัติของข้อความ",
      paragraphs: [
        "ฤดูหนาว ค.ศ. 1886-87 คณะโบราณคดีฝรั่งเศสขุดพบโคเด็กซ์เล็กในหลุมศพพระที่ Akhmim อียิปต์ตอนบน — เล่มเดียวบรรจุทั้ง Gospel of Peter และชิ้นส่วน Apocalypse of Peter การพบครั้งนี้คืนตัวบทที่ Church Fathers อ้างถึงแต่สูญหายไปนานให้วงวิชาการ ต่อมาการศึกษาฉบับ Ethiopic (ตีพิมพ์ ค.ศ. 1910) และ Rainer fragment พิสูจน์ว่าฉบับ Ethiopic รักษาโครงเดิมได้ซื่อตรงกว่าฉบับ Akhmim ที่ถูกเรียบเรียงใหม่",
        "จุดที่นักวิชาการถกเถียงมากที่สุดคือ Rainer fragment ตอนที่พระเยซูตรัสกับเปโตรว่า ผู้ชอบธรรมอาจทูลขอความเมตตาแก่คนบาปในนรก และพระองค์จะประทาน \"บัพติศมาในทุ่ง Acherusia\" แก่พวกเขา — ร่องรอยแนวคิดความรอดถ้วนหน้า (apokatastasis) ที่ฉบับหลัง ๆ ลบออก",
        "Ehrman ศึกษาสายวรรณกรรมนี้ต่อเนื่องถึงหนังสือ Journeys to Heaven and Hell (2022) โดยชี้ว่า Apocalypse of Peter คือสะพานระหว่างวรรณกรรมวิวรณ์ยิว (เอโนค) กับจินตภาพนรก-สวรรค์ที่ครอบงำคริสต์ศาสนาตะวันตกผ่าน Apocalypse of Paul จนถึง Dante",
      ],
    },
    {
      heading: "สาระสำคัญ",
      columns: [
        {
          title: "ลักษณะเด่นของตัวบท",
          items: [
            "นรกจัดเป็นระบบ: บาป 21 ประเภท แต่ละประเภทมีสถานที่และโทษจำเพาะ พร้อมทูตสวรรค์ผู้ควบคุม",
            "ผู้ถูกลงโทษร้องว่า \"เราไม่เคยรู้ว่าจะต้องมาถึงที่นี่\" — ทูตตอบว่าพวกเขาถูกเตือนแล้ว: ฟังก์ชันเทศนาเตือนคนเป็น",
            "ฉาก Transfiguration ถูกเล่าใหม่เป็นนิมิตสวรรค์ — โมเสสและเอลียาห์ปรากฏในกายรัศมีของผู้ชอบธรรม",
          ],
        },
        {
          title: "ความสำคัญทางวิชาการ",
          items: [
            "หนังสือวิวรณ์ทางเลือก: ศตวรรษที่ 2-3 บางชุมชนถือ Apocalypse of Peter คู่กับหรือแทนวิวรณ์ของยอห์น",
            "หลักฐานว่าจินตภาพนรกของคริสต์ศาสนาไม่ได้มาจากพันธสัญญาใหม่โดยตรง แต่พัฒนาผ่านวรรณกรรมสายนี้",
            "กรณีศึกษาการส่งผ่านข้ามภาษา: กรีก → Ethiopic โดยฉบับแปลกลับรักษาต้นฉบับดีกว่าพยานกรีกที่เหลือ",
          ],
        },
      ],
    },
  ],
  note:
    "Apocalypse of Peter กับวิวรณ์ของยอห์นเคยยืนอยู่บนเส้นสารบบเดียวกัน — Muratorian Fragment รับทั้งคู่แบบมีข้อกังขา และ Eusebius ยังลังเลกับวิวรณ์ของยอห์นเช่นกัน ผลลัพธ์ที่กลับกัน (เล่มหนึ่งเข้าสารบบ อีกเล่มหายไป) เตือนว่าสารบบไม่ใช่ข้อสรุปอัตโนมัติของความนิยม แต่เป็นผลของการตัดสินสะสมหลายศตวรรษ — และจินตภาพนรกของเล่มที่ตกสารบบกลับมีอิทธิพลต่อวัฒนธรรมตะวันตกลึกกว่าผ่าน Dante",
  references: [
    "Bart D. Ehrman, After the New Testament: A Reader in Early Christianity, 100-300 CE, 2nd ed., Oxford University Press, 2015",
    "Bart D. Ehrman, Journeys to Heaven and Hell: Tours of the Afterlife in the Early Christian Tradition, Yale University Press, 2022",
    "Richard Bauckham, The Fate of the Dead: Studies on the Jewish and Christian Apocalypses, Brill, 1998",
    "Jan N. Bremmer & István Czachesz (eds.), The Apocalypse of Peter, Peeters, 2003",
    "Eric J. Beck, Justice and Mercy in the Apocalypse of Peter, Mohr Siebeck, 2019",
  ],
  primaryUrl: "https://www.earlychristianwritings.com/apocalypsepeter.html",
  primaryLabel: "แหล่งที่มา ↗",
};

export default function ApocalypsePeterPage() {
  return <ManuscriptDetailPage data={data} />;
}
