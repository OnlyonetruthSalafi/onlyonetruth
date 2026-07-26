import ManuscriptDetailPage from "../_components/ManuscriptDetailPage";

const data = {
  title: "Papyrus P75 (Bodmer XIV–XV)",
  subtitle: "The Key Witness to the Alexandrian Text",
  heroDesc:
    "ปาปิรัสลูกา-ยอห์นที่พิสูจน์ว่าข้อความสาย Alexandrian สืบทอดมาจากศตวรรษที่ 2 ปัจจุบันเก็บที่ห้องสมุดวาติกัน",
  heroMeta:
    "ราว ค.ศ. 175-225 | Greek Papyrus Codex | Biblioteca Apostolica Vaticana",
  galleryNote:
    "ภาพหน้าต้นฉบับ Hanna Papyrus 1 (Mater Verbi) ห้องสมุดวาติกัน",
  gallery: [
    {
      src: "/manuscripts/bible/p75/p75-1.jpg",
      width: 1280,
      height: 2349,
      alt: "Papyrus 75 Luke 14",
      caption: "ลูกา 14:3-14 — ลายมือแบบหนังสือ (bookhand) ที่ประณีตสม่ำเสมอ",
    },
    {
      src: "/manuscripts/bible/p75/p75-2.jpg",
      width: 155,
      height: 50,
      alt: "Papyrus 75 end of Luke and title of John",
      caption:
        "จุดจบลูกาและชื่อเรื่อง ΕΥΑΓΓΕΛΙΟΝ ΚΑΤΑ ΙΩΑΝΝΗΝ — ลูกาและยอห์นอยู่ในเล่มเดียวกัน",
    },
  ],
  info: [
    {
      label: "อายุต้นฉบับ",
      value:
        "ราว ค.ศ. 175-225 — Comfort & Barrett กำหนดปลายศตวรรษที่ 2 ถึงต้นศตวรรษที่ 3",
    },
    {
      label: "เนื้อหา",
      value:
        "ลูกา 3:18-24:53 (สมบูรณ์ที่สุดในบรรดาปาปิรัสยุคแรก) และยอห์น 1:1-15:8 รวม 27 แผ่น (51 หน้า) จากเดิมราว 72 แผ่น",
    },
    {
      label: "รูปแบบ",
      value:
        "Papyrus Codex เล่มเดียวขนาด 26 × 13 เซนติเมตร เขียน 1 คอลัมน์ต่อหน้า ลายมือ bookhand ประณีต",
    },
    {
      label: "ตระกูลข้อความ",
      value:
        "Alexandrian เคร่งครัด (strict text) — ตรงกับ Codex Vaticanus ราว 87-92% ในข้อความที่เทียบได้",
    },
    {
      label: "สถานที่เก็บรักษา",
      value:
        "Biblioteca Apostolica Vaticana ในชื่อ Hanna Papyrus 1 (Mater Verbi) — เดิมอยู่ที่ Fondation Bodmer ก่อนถูกซื้อมอบให้วาติกันปี ค.ศ. 2007",
    },
    {
      label: "การค้นพบและตีพิมพ์",
      value:
        "พบในกลุ่ม Bodmer Papyri ใกล้ Dishna อียิปต์ ตีพิมพ์โดย Victor Martin และ Rodolphe Kasser ปี ค.ศ. 1961",
    },
  ],
  sections: [
    {
      heading: "ประวัติของต้นฉบับ",
      paragraphs: [
        "Papyrus 75 ถูกค้นพบในกลุ่ม Bodmer Papyri เช่นเดียวกับ P66 และตีพิมพ์ในปี ค.ศ. 1961 เป็นโคเด็กซ์เล่มเดียวที่บรรจุลูกาต่อด้วยยอห์น — พยานทางกายภาพที่เก่าแก่ที่สุดของการเรียงพระกิตติคุณติดกันตามลำดับที่ใช้ในปัจจุบัน ในปี ค.ศ. 2007 Frank Hanna III นักธุรกิจชาวอเมริกันซื้อต้นฉบับจาก Fondation Bodmer และมอบให้สมเด็จพระสันตะปาปาเบเนดิกต์ที่ 16 ปัจจุบันจึงเก็บรักษาที่ห้องสมุดวาติกันในชื่อ Hanna Papyrus 1 (Mater Verbi) และเปิดให้ชมสแกนความละเอียดสูงออนไลน์",
      ],
    },
    {
      heading: "ความสำคัญ — พลิกความเข้าใจเรื่องข้อความ Alexandrian",
      paragraphs: [
        "ก่อนการค้นพบ P75 นักวิชาการจำนวนมากเชื่อตามทฤษฎีของ Hort ว่าข้อความแบบ Vaticanus เป็นผลจากการตรวจชำระ (recension) ในศตวรรษที่ 3-4 แต่การศึกษาของ Carlo Martini และ Gordon Fee แสดงว่าข้อความ P75 กับ Vaticanus ตรงกันถึงราว 87-92% ทั้งที่ห่างกันราว 150 ปี ข้อสรุปที่ Comfort เน้นย้ำใน The Text of the Earliest New Testament Greek Manuscripts คือ ข้อความสาย Alexandrian ไม่ใช่ผลงานบรรณาธิการยุคหลัง แต่เป็นสายการคัดลอกที่เคร่งครัดซึ่งมีอยู่แล้วตั้งแต่ศตวรรษที่ 2 และ Vaticanus คือทายาทโดยตรงของสายนี้",
        "ธรรมาจารย์ของ P75 เป็นมืออาชีพที่คัดลอกทีละตัวอักษร (letter-by-letter) ต่างจากธรรมาจารย์ P66 ที่คัดลอกทีละวลี James Royse ศึกษานิสัยการคัดลอก (scribal habits) แล้วสรุปว่า P75 เป็นหนึ่งในปาปิรัสที่คัดลอกแม่นยำที่สุดในบรรดาต้นฉบับยุคแรกทั้งหมด",
      ],
    },
    {
      heading: "ข้อความที่น่าสังเกต",
      columns: [
        {
          title: "จุดเด่นทางข้อความ",
          items: [
            "ลูกา 16:19 เพิ่มชื่อเศรษฐีในอุปมาว่า \"Neues\" (Νευης) — variant ที่ไม่พบในต้นฉบับกรีกอื่น",
            "ไม่มียอห์น 7:53-8:11 (หญิงล่วงประเวณี) เช่นเดียวกับ P66",
            "ลูกา 23:34 ไม่มีคำอธิษฐาน \"พระบิดาเจ้าข้า ขอโปรดอภัยโทษเขา\" — จุดที่นักวิชาการยังถกเถียง",
            "ใช้ staurogram (อักษรควบ tau-rho) ในคำ σταυρός เช่นเดียวกับ P66",
          ],
        },
        {
          title: "ผลต่อวงการวิชาการ",
          items: [
            "ยืนยันคุณค่าของ Vaticanus ให้ฉบับวิชาการ Nestle-Aland / UBS ยึดสาย Alexandrian เป็นแกน",
            "Kurt Aland จัดเป็น \"strict text\" ประเภทที่ 1 ในระบบจำแนกต้นฉบับ",
            "เป็นหลักฐานว่ามีการคัดลอกแบบมืออาชีพควบคู่กับการคัดลอกแบบอิสระในยุคเดียวกัน",
          ],
        },
      ],
    },
    {
      heading: "หมายเหตุ — เหตุใดจึงไม่มีการตรวจ Carbon-14",
      paragraphs: [
        "เช่นเดียวกับ P66 อายุของ P75 อิงการเทียบลายมือทั้งหมด — ไม่เคยมีการตรวจ Carbon-14 เพราะการทดสอบต้องตัดเนื้อปาปิรัสไปทำลายเป็นตัวอย่าง ผู้ครอบครองทั้งสองยุค (มูลนิธิ Martin Bodmer จนถึงปี ค.ศ. 2007 และห้องสมุดวาติกันหลังจากนั้น) ต่างถือแนวปฏิบัติการอนุรักษ์ที่ไม่อนุญาตการทดสอบแบบทำลายตัวอย่างกับต้นฉบับระดับชิ้นเอกของโลก",
        "นอกจากนี้ผลตรวจก็ไม่อาจชี้ขาดได้อยู่ดี — ช่วงราบของเส้นปรับเทียบ C-14 ระหว่างราว ค.ศ. 130-220 (ที่ Larry Hurtado อธิบายไว้) ครอบคลุมช่วงอายุที่เสนอกันสำหรับ P75 พอดี และค่าที่ได้จะเป็นช่วงกว้าง ± หลายสิบปี ไม่แม่นยำไปกว่าการเทียบลายมือของผู้เชี่ยวชาญ ประเด็นนี้ควรระบุไว้อย่างตรงไปตรงมา เพื่อให้ผู้อ่านเข้าใจว่าตัวเลขอายุของปาปิรัสยุคแรกทุกฉบับเป็นการประมาณการทางลายมือศาสตร์ ไม่ใช่ผลการตรวจทางวิทยาศาสตร์เชิงกายภาพ",
      ],
    },
  ],
  note:
    "P75 พิสูจน์ว่าคริสตชนบางกลุ่มในศตวรรษที่ 2 คัดลอกพระคัมภีร์อย่างแม่นยำระดับตัวอักษร แต่การที่ต้นฉบับร่วมสมัยอย่าง P66 และ P45 มีลักษณะการคัดลอกอิสระกว่ามาก ก็แสดงว่าไม่มีระบบควบคุมข้อความแบบรวมศูนย์ในยุคแรก — ต่างจากกรณีอัลกุรอานที่มีการรวบรวมมาตรฐานฉบับอุษมานภายในราว 20 ปีหลังการเสียชีวิตของท่านนบี ประเด็นนี้ทำให้ P75 เป็นทั้งหลักฐานความเก่าแก่ของข้อความและหลักฐานความหลากหลายของกระบวนการส่งต่อ",
  references: [
    "Philip W. Comfort & David P. Barrett, The Text of the Earliest New Testament Greek Manuscripts, Tyndale House, 2001, หัวข้อ P75",
    "Victor Martin & Rodolphe Kasser, Papyrus Bodmer XIV-XV, Bibliotheca Bodmeriana, 1961",
    "Gordon D. Fee, \"P75, P66, and Origen: The Myth of Early Textual Recension in Alexandria\", ใน Epp & Fee, Studies in the Theory and Method of New Testament Textual Criticism, Eerdmans, 1993",
    "James R. Royse, Scribal Habits in Early Greek New Testament Papyri, Brill, 2008, บทที่ 9",
    "DigiVatLib, MSS Pap.Hanna.1 (Mater Verbi), digi.vatlib.it",
    "Larry W. Hurtado, \"More on Carbon-14 Dating of Manuscripts\", larryhurtado.wordpress.com, 21 November 2018 — เรื่อง calibration plateau ค.ศ. 130-220",
    "Brent Nongbri, God's Library: The Archaeology of the Earliest Christian Manuscripts, Yale University Press, 2018 — ข้อจำกัดของวิธีกำหนดอายุต้นฉบับ",
  ],
  primaryUrl: "https://digi.vatlib.it/view/MSS_Pap.Hanna.1(Mater.Verbi)",
  primaryLabel: "ชมสแกนต้นฉบับที่วาติกัน ↗",
};

export default function P75Page() {
  return <ManuscriptDetailPage data={data} />;
}
