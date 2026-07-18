import ManuscriptDetailPage from "../../biblical-codices/_components/ManuscriptDetailPage";

const data = {
  backHref: "/archive/other-writings",
  backLabel: "Other Writings",
  title: "The Secret Book of John",
  subtitle: "Apocryphon of John — The Sethian Masterwork",
  heroDesc:
    "ตำราแม่บทของ Sethian Gnosticism — นิมิตที่พระคริสต์เปิดเผยความจริงของจักรวาลแก่ยอห์น ตั้งแต่พระเจ้าสูงสุดที่ไม่อาจหยั่งรู้ จนถึง Yaldabaoth ผู้สร้างจอมปลอม",
  heroMeta:
    "แต่งก่อน ค.ศ. 180 | Coptic (4 ฉบับ) | Coptic Museum, Cairo + Berlin",
  galleryNote:
    "ภาพต้นฉบับ Nag Hammadi Codex II พิพิธภัณฑ์คอปติก ไคโร",
  gallery: [
    {
      src: "/manuscripts/other/apocryphon-john/apj1.jpg",
      alt: "Apocryphon of John colophon spread in Nag Hammadi Codex II",
      caption:
        "หน้าคู่ Nag Hammadi Codex II — colophon «ΑΠΟΚΡΥΦΟΝ ΚΑΤΑ ΙΩΑΝΝΗΝ» ปิดท้าย Secret Book of John",
    },
    {
      src: "/manuscripts/other/thomas/tho1.jpg",
      alt: "Nag Hammadi Codex II page 32 with Apocryphon of John colophon",
      caption:
        "Codex II หน้า 32 — บรรทัดจบของ Apocryphon of John (พร้อมชื่อเรื่อง) ต่อด้วยบรรทัดแรกของ Gospel of Thomas ในหน้าเดียวกัน",
    },
  ],
  info: [
    {
      label: "อายุการแต่ง",
      value:
        "ก่อน ค.ศ. 180 — Irenaeus สรุปเทวตำนานแบบเดียวกันนี้ใน Against Heresies 1.29 แสดงว่าฉบับต้นแพร่หลายแล้วกลางศตวรรษที่ 2",
    },
    {
      label: "ต้นฉบับ",
      value:
        "4 ฉบับ Coptic: ฉบับยาวใน Nag Hammadi Codex II และ IV | ฉบับสั้นใน Codex III และ Berlin Codex (BG 8502,2) — มากที่สุดในบรรดางาน Gnostic ทั้งหมด",
    },
    {
      label: "โครงเรื่อง",
      value:
        "หลังการเสด็จขึ้นสวรรค์ ยอห์นบุตรเศเบดีถูกฟาริสีเยาะเย้ย พระคริสต์จึงปรากฏในนิมิตและเปิดเผย \"สิ่งที่เป็นอยู่ สิ่งที่เคยเป็น และสิ่งที่จะเป็น\"",
    },
    {
      label: "เทวตำนาน",
      value:
        "พระเจ้าสูงสุด (Invisible Spirit) แผ่กำเนิด Barbelo และหมู่ Aeon | Sophia ให้กำเนิด Yaldabaoth โดยพลการ | Yaldabaoth ขโมยพลังมารดาแล้วสร้างโลกวัตถุ และประกาศตนว่า \"เราเป็นพระเจ้า ไม่มีพระเจ้าอื่นนอกจากเรา\"",
    },
    {
      label: "มานุษยวิทยา",
      value:
        "มนุษย์ถูกเหล่า Archon ปั้นตามพระฉายที่สะท้อนจากเบื้องบน — ประกายศักดิ์สิทธิ์ (แสงของ Sophia) ติดค้างในกายวัตถุ รอการปลุกด้วยความรู้ (gnosis)",
    },
    {
      label: "สถานที่เก็บรักษา",
      value:
        "Coptic Museum ไคโร (NHC II, III, IV) | Egyptian Museum เบอร์ลิน (Papyrus Berolinensis 8502)",
    },
  ],
  sections: [
    {
      heading: "ประวัติของข้อความ",
      paragraphs: [
        "ก่อนศตวรรษที่ 20 โลกรู้จักเนื้อหาของ Apocryphon of John เพียงผ่านบทสรุปเชิงประณามของ Irenaeus การค้นพบ Berlin Codex (ซื้อที่ไคโร ค.ศ. 1896 — โคเด็กซ์เดียวกับ Gospel of Mary) และ Nag Hammadi Codices (ค.ศ. 1945) คืนตัวบทเต็มให้วงวิชาการถึง 4 ฉบับ การที่ข้อความเดียวถูกคัดลอกไว้ใน 3 จาก 13 โคเด็กซ์ของ Nag Hammadi บ่งชี้ว่านี่คือตำราที่ชุมชนผู้อ่านให้ความสำคัญสูงสุด",
        "ฉบับยาว (Codex II, IV) ต่างจากฉบับสั้น (Codex III, BG) ตรงที่แทรกบทพรรณนากายวิภาคของอาดัมที่เหล่า Archon 365 ตนร่วมกันปั้น และบทเพลงพระผู้ช่วย (Pronoia Hymn) ปิดท้าย — หลักฐานว่าข้อความมีชีวิต ถูกขยายและแก้ไขตามการใช้งานของชุมชน",
        "Ehrman จัด Apocryphon of John เป็นตัวแทนเทววิทยา Sethian ใน After the New Testament — สายที่นับถือเสท บุตรคนที่สามของอาดัม เป็นต้นตระกูลของ \"พงศ์พันธุ์ที่ไม่หวั่นไหว\" และอ่านปฐมกาลแบบกลับหัว: พระเจ้าผู้สร้างในปฐมกาลไม่ใช่พระเจ้าสูงสุด แต่คือ Yaldabaoth ผู้หลงตน",
      ],
    },
    {
      heading: "สาระสำคัญ",
      columns: [
        {
          title: "แนวคิดหลัก",
          items: [
            "ปัญหาความชั่วร้าย: โลกวัตถุที่บกพร่องไม่ใช่ฝีมือพระเจ้าสูงสุด แต่เป็นผลงานของผู้สร้างชั้นรอง",
            "การอ่านปฐมกาลกลับหัว — งูและต้นไม้แห่งความรู้กลายเป็นเครื่องมือปลดปล่อย ขณะผู้สร้างเป็นผู้กักขัง",
            "ความรอด = การระลึกรู้ (gnosis) ถึงต้นกำเนิดศักดิ์สิทธิ์ของตน ไม่ใช่การไถ่บาปด้วยเลือด",
          ],
        },
        {
          title: "ความสำคัญทางวิชาการ",
          items: [
            "เอกสารที่ใช้นิยามหมวด \"Sethian Gnosticism\" ในงานของ Hans-Martin Schenke และ John D. Turner",
            "ยืนยันความแม่นของ Irenaeus: บทสรุปใน Adv. Haer. 1.29 ตรงกับตัวบทจริงที่พบภายหลังกว่า 1,700 ปี",
            "แหล่งหลักศึกษาการตีความปฐมกาลของกลุ่มที่ถือว่าพระเจ้ายิวไม่ใช่พระเจ้าสูงสุด — ขั้วเทววิทยาที่สารบบคัดออก",
          ],
        },
      ],
    },
  ],
  note:
    "Apocryphon of John ตอบปัญหาเดียวกับที่หนังสือโยบเผชิญ — ทำไมโลกของพระเจ้าจึงเต็มด้วยความทุกข์ — ด้วยคำตอบสุดขั้ว: โลกนี้ไม่ใช่ของพระเจ้าแท้ตั้งแต่ต้น การที่คริสตชนกระแสหลักเลือกยืนยันว่า \"พระเจ้าผู้สร้างคือพระบิดาของพระเยซู\" (ต่างจากทั้ง Sethian และ Marcion) คือหมุดหมายเทววิทยาสำคัญที่สุดข้อหนึ่งของการก่อตัวสารบบ ดังที่ Ehrman วิเคราะห์ใน After the New Testament",
  references: [
    "Bart D. Ehrman, After the New Testament: A Reader in Early Christianity, 100-300 CE, 2nd ed., Oxford University Press, 2015",
    "Bart D. Ehrman, Lost Scriptures, Oxford University Press, 2003",
    "Michael Waldstein & Frederik Wisse (eds.), The Apocryphon of John: Synopsis of Nag Hammadi Codices II,1; III,1; and IV,1 with BG 8502,2, Brill, 1995",
    "Karen L. King, The Secret Revelation of John, Harvard University Press, 2006",
    "John D. Turner, Sethian Gnosticism and the Platonic Tradition, Peeters, 2001",
  ],
  primaryUrl: "https://www.earlychristianwritings.com/apocryphonjohn.html",
  primaryLabel: "แหล่งที่มา ↗",
};

export default function ApocryphonJohnPage() {
  return <ManuscriptDetailPage data={data} />;
}
