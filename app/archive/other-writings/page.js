"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import ArchiveNav from "../../../components/ArchiveNav";

const manuscripts = [
  {
    id: 13,
    title: "Coptic Apocalypse of Peter (NHC VII,3)",
    titleTh: "วิวรณ์ของเปโตร ฉบับคอปติก (Nag Hammadi Codex VII เรื่องที่ 3)",
    mark: "ΓΝΩΣΙΣ",
    category: "internal",
    categoryLabel: "ความขัดแย้งภายในคริสตจักร",
    date: "แต่งราว ค.ศ. 200-250 (ต้นฉบับ Coptic ราว ค.ศ. 340-350)",
    script: "Coptic (Sahidic) — แปลจากต้นฉบับกรีกที่สูญหายไปแล้ว",
    location: "Coptic Museum, Cairo (Nag Hammadi Codex VII, pp. 70-84)",
    locationTh: "พิพิธภัณฑ์คอปติก ไคโร อียิปต์ (Nag Hammadi Codex VII หน้า 70-84)",
    contents:
      "นิมิตที่พระผู้ช่วยให้รอดเปิดเผยแก่เปโตรในพระวิหาร + ฉากตรึงกางเขนที่ \"พระเยซูผู้ทรงพระชนม์\" หัวเราะอยู่เหนือไม้กางเขน",
    status:
      "ไม่ปรากฏในสารบบของคริสตจักรใดเลย รวมถึงสารบบกว้างของ Tewahedo เอธิโอเปียซึ่งกว้างที่สุดในโลกคริสต์ — ไม่มีบิดาคริสตจักรคนใดอ้างถึง และเหลือต้นฉบับเพียงฉบับเดียว | แต่ \"ความเชื่อ\" ที่ข้อความนี้สอน คือมีผู้ถูกตรึงแทนพระคริสต์ตัวจริงนั้น แพร่หลายกว้างขวางจริงในศตวรรษที่ 2-3",
    description:
      "เอกสารสาย Gnostic ที่ Ehrman จัดไว้ในหมวดความขัดแย้งภายในคริสตจักรของ After the New Testament (น. 260) — ไม่ใช่การโต้กับคนนอกศาสนา แต่เป็นคริสเตียนโจมตีคริสเตียนด้วยกัน ผู้เขียนเรียกฝ่าย Proto-orthodox ว่า \"คนที่เรียกตนเองว่าบิชอปและมัคนายก ราวกับว่าพวกเขาได้รับอำนาจมาจากพระเจ้า ... คนพวกนั้นคือลำรางที่เหือดแห้ง\" (Apoc. Pet. 79) และกล่าวหาว่าพวกเขา \"ยึดติดอยู่กับนามของคนตาย\" เพราะเข้าใจการตรึงกางเขนผิด แก่นของความขัดแย้งคือคริสตวิทยาแบบ Docetic: ตัวจริงของพระคริสต์ไม่อาจถูกทำร้ายได้ ผู้ที่ถูกตรึงเป็นเพียงส่วนที่เป็นเนื้อหนัง — ต้องไม่สับสนกับ Apocalypse of Peter สาย Greek/Ethiopic (ทัวร์สวรรค์-นรก) ในคลังเดียวกันนี้ ซึ่งเป็นคนละงานที่ชื่อพ้องกันเท่านั้น | ตอนที่พระเยซูตรัสกับเปโตรว่าพระองค์ไม่ใช่ผู้ถูกตรึงที่แท้จริง (Apoc. Pet. 81): เมื่อพระองค์ตรัสสิ่งเหล่านั้นแล้ว ข้าพเจ้าเห็นเหมือนว่าพระองค์กำลังถูกพวกเขาจับกุม ข้าพเจ้าจึงทูลว่า \"ข้าพเจ้าเห็นอะไรอยู่ ข้าแต่องค์พระผู้เป็นเจ้า? ผู้ที่พวกเขาจับไปนั้นคือพระองค์เองหรือ? แล้วเหตุใดพระองค์จึงยังทรงจับข้าพเจ้าไว้? หรือผู้ที่ยินดีและหัวเราะอยู่เหนือไม้กางเขนนั้นคือใคร? และผู้ที่ถูกตอกตะปูที่เท้าและที่มือเป็นอีกผู้หนึ่งหรือ?\" พระผู้ช่วยให้รอดตรัสแก่ข้าพเจ้าว่า \"ผู้ที่ท่านเห็นยินดีและหัวเราะอยู่เหนือไม้กางเขนนั้น คือพระเยซูผู้ทรงพระชนม์ ส่วนผู้ที่พวกเขาตอกตะปูลงบนมือและบนเท้านั้น คือส่วนที่เป็นเนื้อหนังของพระองค์ ซึ่งเป็นร่างแทนที่ถูกทำให้อับอาย ผู้ซึ่งบังเกิดขึ้นตามลักษณะของพระองค์ แต่จงมองดูเขา แล้วมองดูเราเถิด\" — คำแปลไทยถอดจากสำนวนอังกฤษของ Brashler และ Bullard",
    note:
      "นักวิชาการจัดอายุการแต่งไว้ราวต้นศตวรรษที่ 3 — ห่างจากเหตุการณ์ตรึงกางเขนเกือบสองศตวรรษ ข้อความนี้จึงเป็นงานเทววิทยาเชิงโต้แย้งของฝ่าย Gnostic ไม่ใช่บันทึกของผู้อยู่ในเหตุการณ์ ทั้งต้นฉบับที่เหลืออยู่ก็เป็นคำแปลคอปติกที่นักวิชาการเห็นว่าสำนวนไม่ประณีต หลายช่วงจึงตีความได้หลายทาง",
    sourceUrl: "https://www.earlychristianwritings.com/nhlapocalypsepeter.html",
    // ภาพจริง: หน้า 70 ของ Nag Hammadi Codex VII (Wikimedia Commons, สาธารณสมบัติ) — ท้ายเรื่อง Second Treatise of the Great Seth ตามด้วยหัวเรื่อง ⲁⲡⲟⲕⲁⲗⲩⲯⲓⲥ ⲡⲉⲧⲣⲟⲩ และบรรทัดเปิดของ Apocalypse of Peter
    // cap-card.png = ภาพครอบตัดจาก cap1.png (หน้าเต็ม) ให้ได้สัดส่วนเท่ากรอบการ์ด ไม่งั้น object-cover จะตัดหัวเรื่องทิ้ง
    image: "/manuscripts/other/coptic-apocalypse-peter/cap-card.png",
    tags: ["Gnostic", "Nag Hammadi", "Docetic", "Anti-Orthodox"],
    scholar: "Bart D. Ehrman",
    detailPath: "/archive/other-writings/coptic-apocalypse-peter",
  },
  {
    id: 11,
    title: "The Letter of Peter to James and Its Reception",
    titleTh: "จดหมายเปโตรถึงยากอบ และบันทึกการรับจดหมาย",
    mark: "ΙΑΚΩΒΩ",
    category: "jewish",
    categoryLabel: "Jewish-Christian Texts",
    date: "แต่งราวศตวรรษที่ 2-3 (ต้นฉบับ Paris gr. 930 ศตวรรษที่ 11-12)",
    script: "Greek (คำนำของ Pseudo-Clementine Homilies)",
    location: "Bibliothèque nationale de France, Paris (Codex Parisinus gr. 930)",
    locationTh:
      "หอสมุดแห่งชาติฝรั่งเศส ปารีส (Parisinus gr. 930) | อีกฉบับที่วาติกัน (Ottobonianus gr. 443)",
    contents:
      "จดหมายเปโตรถึงยากอบ + Contestatio (คำปฏิญาณการรับหนังสือ) — คำนำของ Clementine Homilies",
    status:
      "ไม่เคยเข้าสารบบ — เป็นเอกสารสาย Jewish-Christian ที่รอดมาในกรอบวรรณกรรม Pseudo-Clementine",
    description:
      "เปโตร (ในนามผู้แต่ง) เขียนถึงยากอบผู้ชอบธรรมแห่งเยรูซาเล็ม ขอให้ส่งมอบหนังสือคำเทศนาของตนเฉพาะแก่ผู้เข้าสุหนัตที่ผ่านการทดสอบแล้วเท่านั้น พร้อมโจมตี \"ศัตรูของข้าพเจ้า\" ที่สอนให้เลิกธรรมบัญญัติ — ซึ่งนักวิชาการส่วนใหญ่เห็นว่าหมายถึงเปาโล ตามด้วย Contestatio ที่เล่าว่ายากอบเรียกประชุมผู้ปกครองและวางพิธีปฏิญาณก่อนรับหนังสือ Ehrman ใช้เอกสารนี้เป็นหลักฐานแกนของกลุ่ม Jewish-Christian (Ebionite) ที่ยังถือธรรมบัญญัติและต่อต้านเปาโล ใน After the New Testament",
    sourceUrl: "https://www.earlychristianwritings.com/homilies.html",
    // ภาพจริง: folio 5r ของ Codex Parisinus gr. 930 (Gallica, BnF) — เห็นหัวเรื่อง ΕΠΙΣΤΟΛΗ ΠΕΤΡΟΥ ΠΡΟΣ ΙΑΚΩΒΟΝ พร้อมลายประดับ
    image: "/manuscripts/other/peter-james/pj1.jpg",
    tags: ["Jewish-Christian", "Ebionite", "Pseudo-Clementine", "Anti-Pauline"],
    scholar: "Bart D. Ehrman",
    detailPath: "/archive/other-writings/peter-james",
  },
  {
    id: 12,
    title: "The Secret Book of John (Apocryphon of John)",
    titleTh: "หนังสือลับของยอห์น",
    mark: "ΑΠΟΚΡΥΦΟΝ",
    category: "sethian",
    categoryLabel: "Sethian Gnostics",
    date: "แต่งก่อน ค.ศ. 180 (ต้นฉบับ Coptic ราว ค.ศ. 340-350)",
    script: "Coptic (Sahidic) — ฉบับสั้น 2 | ฉบับยาว 2",
    location: "Coptic Museum, Cairo (NHC II, III, IV) | Berlin (P.Berol. 8502)",
    locationTh:
      "พิพิธภัณฑ์คอปติก ไคโร (Nag Hammadi Codices II, III, IV) | พิพิธภัณฑ์อียิปต์ เบอร์ลิน (BG 8502)",
    contents:
      "นิมิตที่พระคริสต์เปิดเผยแก่ยอห์นบุตรเศเบดี — กำเนิดจักรวาล Barbelo, Sophia และ Yaldabaoth ผู้สร้างจอมปลอม",
    status:
      "Irenaeus โจมตีเนื้อหาแบบเดียวกันนี้ใน Against Heresies (ราว ค.ศ. 180) — ยืนยันว่าแพร่หลายก่อนหน้านั้น",
    description:
      "ตำราแม่บทของสาย Sethian Gnosticism — มีสำเนาเหลือรอดมาถึง 4 ฉบับ (มากที่สุดในบรรดางาน Gnostic) สะท้อนว่าเคยถูกอ่านอย่างกว้างขวาง เล่าการเปิดเผยลับหลังการเสด็จขึ้นสวรรค์: พระเจ้าสูงสุดผู้ไม่อาจหยั่งรู้ได้ ทรงแผ่ออกมาเป็น Barbelo และหมู่ Aeon ก่อนความพลาดพลั้งของ Sophia จะให้กำเนิด Yaldabaoth ผู้สร้างโลกวัตถุที่หลงตนว่าเป็นพระเจ้าองค์เดียว — การอ่านปฐมกาลแบบพลิกกลับด้านที่ Ehrman จัดให้เป็นตัวแทนเทววิทยา Sethian ใน After the New Testament",
    sourceUrl: "https://www.earlychristianwritings.com/apocryphonjohn.html",
    // ภาพจริง: หน้าเปิด Apocryphon of John ใน Nag Hammadi Codex (Wikimedia Commons) — เห็น colophon ΑΠΟΚΡΥΦΟΝ ΚΑΤΑ ΙΩΑΝΝΗΝ
    image: "/manuscripts/other/apocryphon-john/apj1.jpg",
    tags: ["Sethian", "Nag Hammadi", "Barbelo", "Yaldabaoth"],
    scholar: "Bart D. Ehrman",
    detailPath: "/archive/other-writings/apocryphon-john",
  },
  {
    id: 1,
    title: "Gospel of Thomas (Coptic)",
    titleTh: "พระกิตติคุณโทมัส",
    mark: "ΘΩΜΑΣ",
    category: "gospel",
    categoryLabel: "Gospels นอกสารบบ",
    date: "แต่งราวต้นศตวรรษที่ 2 (ต้นฉบับ Coptic ราว ค.ศ. 340-350)",
    script: "Coptic (Sahidic) | ชิ้นส่วนกรีก P.Oxy. 1, 654, 655",
    location: "Coptic Museum, Cairo (Nag Hammadi Codex II)",
    locationTh: "พิพิธภัณฑ์คอปติก ไคโร อียิปต์ (Nag Hammadi Codex II)",
    contents: "คำกล่าวของพระเยซู 114 logia — ไม่มีเรื่องเล่า ไม่มีการตรึงกางเขนหรือการฟื้นคืนชีพ",
    status:
      "ไม่ปรากฏในรายชื่อสารบบใด — แต่ Hippolytus และ Origen รู้จักและอ้างถึงเพื่อประณาม | กว่าครึ่งของ logia ขนานกับ Synoptic Gospels",
    description:
      "ค้นพบที่ Nag Hammadi อียิปต์ ปี ค.ศ. 1945 เป็น \"Sayings Gospel\" ที่สมบูรณ์เพียงฉบับเดียวที่รู้จัก Ehrman ระบุใน After the New Testament ว่าน่าจะแต่งราวต้นศตวรรษที่ 2 และเป็นพระกิตติคุณนอกสารบบที่สำคัญที่สุดต่อการศึกษาพระเยซูในประวัติศาสตร์ นักวิชาการบางกลุ่ม (เช่น Jesus Seminar) เชื่อว่าบาง logia อาจเก่าแก่กว่า Synoptics แม้ Ehrman จะเห็นว่าส่วนใหญ่พึ่งพา Synoptics ก็ตาม",
    sourceUrl: "https://www.earlychristianwritings.com/thomas.html",
    image: "/manuscripts/other/gospel-thomas.jpg",
    tags: ["Gnostic", "Nag Hammadi", "Coptic", "Sayings Gospel"],
    scholar: "Bart D. Ehrman",
    detailPath: "/archive/other-writings/thomas",
  },
  {
    id: 2,
    title: "Gospel of Mary Magdalene",
    titleTh: "พระกิตติคุณมารีย์ มักดาเลนา",
    mark: "ΜΑΡΙΑΜ",
    category: "gospel",
    categoryLabel: "Gospels นอกสารบบ",
    date: "แต่งศตวรรษที่ 2 (ต้นฉบับ Coptic ศตวรรษที่ 5)",
    script: "Coptic (P.Berol. 8502) | ชิ้นส่วนกรีก P.Ryl. 463, P.Oxy. 3525",
    location: "Egyptian Museum of Berlin (Papyrus Berolinensis 8502)",
    locationTh: "พิพิธภัณฑ์อียิปต์ เบอร์ลิน (P.Berol. 8502) | ชิ้นส่วนที่แมนเชสเตอร์และอ็อกซ์ฟอร์ด",
    contents: "เหลือ 8 จาก 18-19 หน้า — หน้า 1-6 และ 11-14 สูญหาย (มากกว่าครึ่งของหนังสือ)",
    status: "ไม่ปรากฏในรายชื่อสารบบใดเลย — รู้จักจากต้นฉบับที่ค้นพบยุคใหม่เท่านั้น",
    description:
      "งานเขียนที่แสดงบทบาทผู้นำของสตรีในคริสต์ศาสนายุคแรก มารีย์รับการสอนลับจากพระผู้ช่วยให้รอดซึ่งสาวกชายไม่ได้รับ และถูกเปโตรโต้แย้งว่า \"พระองค์จะตรัสกับผู้หญิงลับหลังพวกเราจริงหรือ\" ต้นฉบับ Coptic ถูกซื้อที่ไคโรโดย Carl Reinhardt ปี ค.ศ. 1896 แต่กว่าจะตีพิมพ์ได้คือปี ค.ศ. 1955 Ehrman ใช้ข้อความนี้ประกอบบทว่าด้วยสตรีในคริสตจักรยุคแรกใน After the New Testament",
    sourceUrl: "https://www.earlychristianwritings.com/gospelmary.html",
    image: "/manuscripts/other/gospel-mary.jpg",
    tags: ["Gnostic", "2nd Century", "Women", "Berlin"],
    scholar: "Bart D. Ehrman",
    detailPath: "/archive/other-writings/mary",
  },
  {
    id: 3,
    title: "Gospel of Peter",
    titleTh: "พระกิตติคุณเปโตร",
    mark: "ΠΕΤΡΟΣ",
    category: "gospel",
    categoryLabel: "Gospels นอกสารบบ",
    date: "แต่งกลางศตวรรษที่ 2 (ต้นฉบับ Akhmim ศตวรรษที่ 8-9)",
    script: "Greek",
    location: "Egyptian Museum, Cairo (P.Cair. 10759)",
    locationTh: "พิพิธภัณฑ์อียิปต์ ไคโร (P.Cair. 10759 — โคเด็กซ์จากหลุมศพพระที่ Akhmim)",
    contents: "เฉพาะตอน Passion-Resurrection — เริ่มและจบกลางประโยค",
    status: "บิชอป Serapion แห่งอันทิโอกสั่งห้ามใช้ราว ค.ศ. 190 เพราะถูกกลุ่ม Docetic นำไปอ้าง",
    description:
      "ค้นพบในหลุมศพพระที่ Akhmim อียิปต์ ฤดูหนาว ค.ศ. 1886-87 เล่าเรื่องการตรึงกางเขนที่ต่างจากฉบับมาตรฐาน — ไม้กางเขนเดินออกจากอุโมงค์และพูดตอบเสียงจากฟ้า พระวรกายของพระเยซูสูงพ้นฟ้าขึ้นไป และผู้ตัดสินประหารคือกษัตริย์เฮโรดไม่ใช่ปีลาต Ehrman ชี้ว่าน้ำเสียงกล่าวโทษชาวยิวรุนแรงกว่าพระกิตติคุณมาตรฐาน สะท้อนบริบท Anti-Judaism ของศตวรรษที่ 2 ตามที่วิเคราะห์ใน After the New Testament",
    sourceUrl: "https://www.earlychristianwritings.com/gospelpeter.html",
    image: "/manuscripts/other/peter/pet1.jpg",
    tags: ["Docetic", "2nd Century", "Passion", "Akhmim"],
    scholar: "Bart D. Ehrman",
    detailPath: "/archive/other-writings/peter",
  },
  {
    id: 4,
    title: "Gospel of Philip (Nag Hammadi)",
    titleTh: "พระกิตติคุณฟิลิป",
    mark: "ΦΙΛΙΠΠΟΣ",
    category: "gnostic",
    categoryLabel: "Gnostic Texts",
    date: "แต่งศตวรรษที่ 3 (ต้นฉบับ Coptic ราว ค.ศ. 340-350)",
    script: "Coptic (Sahidic)",
    location: "Coptic Museum, Cairo (Nag Hammadi Codex II)",
    locationTh: "พิพิธภัณฑ์คอปติก ไคโร อียิปต์ (Nag Hammadi Codex II)",
    contents: "รวมบทคัดเทววิทยาแบบ Valentinian — ศีลศักดิ์สิทธิ์ 5 ประการ และสัญลักษณ์ห้องเจ้าสาว",
    status: "งานเขียนสาย Valentinian — ฝ่าย Proto-orthodox จัดเป็นนอกรีต",
    description:
      "ไม่ใช่พระกิตติคุณเชิงเรื่องเล่า แต่เป็นชุดบทคัดคำสอนสาย Valentinian ข้อความที่โด่งดังที่สุดคือประโยคที่ว่าพระผู้ช่วยให้รอดทรงจุมพิตมารีย์ มักดาเลนาบ่อยครั้ง — ทว่าตำแหน่งคำว่า \"ที่ปาก\" เป็นช่องชำรุดในต้นฉบับจริง คำที่เติมลงไปทั้งหมดเป็นการคาดคะเนของนักวิชาการ ประเด็นที่นิยายอย่าง The Da Vinci Code นำไปขยายเกินหลักฐาน Ehrman อธิบายบริบท Valentinian ของข้อความนี้ไว้ใน After the New Testament",
    sourceUrl: "https://www.earlychristianwritings.com/gospelphilip.html",
    image: "/manuscripts/other/philip/phi1.jpg",
    tags: ["Gnostic", "Nag Hammadi", "Valentinian", "3rd Century"],
    scholar: "Bart D. Ehrman",
    detailPath: "/archive/other-writings/philip",
  },
  {
    id: 8,
    title: "Gospel of Judas (Codex Tchacos)",
    titleTh: "พระกิตติคุณยูดาส",
    mark: "ΙΟΥΔΑΣ",
    category: "gnostic",
    categoryLabel: "Gnostic Texts",
    date: "แต่งก่อน ค.ศ. 180 (ต้นฉบับ Coptic ราว ค.ศ. 280)",
    script: "Coptic",
    location: "Coptic Museum, Cairo (เดิม Codex Tchacos)",
    locationTh: "พิพิธภัณฑ์คอปติก ไคโร อียิปต์",
    contents: "บทสนทนาลับระหว่างพระเยซูกับยูดาส อิสคาริโอท ก่อนปัสกา",
    status: "Irenaeus ประณามไว้ใน Against Heresies (ราว ค.ศ. 180) — ยืนยันว่าแต่งก่อนหน้านั้น",
    note:
      "Codex Tchacos เป็นหนึ่งในต้นฉบับคริสเตียนยุคแรกไม่กี่ชิ้นที่ผ่านการตรวจ Carbon-14 จริง (ราว ค.ศ. 280 ± 60 โดยห้องปฏิบัติการ University of Arizona ปี ค.ศ. 2005) — ทำได้เพราะโคเด็กซ์แตกเป็นชิ้นเล็กจำนวนมากอยู่แล้วจากการเก็บรักษาที่เลวร้าย ต่างจาก P66/P75 ของมูลนิธิ Bodmer ที่สภาพสมบูรณ์จนไม่มีเหตุให้สละชิ้นตัวอย่าง",
    description:
      "เอกสารสาย Sethian Gnostic ที่พลิกภาพยูดาสจากผู้ทรยศเป็นสาวกที่รับคำสั่งลับ ค้นพบราวทศวรรษ 1970 ใกล้ El Minya อียิปต์ ผ่านตลาดมืดจนเสื่อมสภาพหนัก ก่อนถูกกู้คืนและตีพิมพ์โดย National Geographic ปี ค.ศ. 2006 Ehrman ร่วมอยู่ในทีมวิชาการที่เปิดตัวข้อความนี้ และเพิ่มบทวิเคราะห์ไว้ใน After the New Testament ฉบับพิมพ์ครั้งที่ 2 (2015)",
    sourceUrl: "https://www.earlychristianwritings.com/gospeljudas.html",
    image: "/manuscripts/other/judas/jud1.jpg",
    tags: ["Sethian", "Codex Tchacos", "Carbon-14", "2006"],
    scholar: "Bart D. Ehrman",
    detailPath: "/archive/other-writings/judas",
  },
  {
    id: 7,
    title: "Didache (The Teaching of the Twelve Apostles)",
    titleTh: "ดีดาเค — คำสอนของอัครทูตสิบสอง",
    mark: "ΔΙΔΑΧΗ",
    category: "fathers",
    categoryLabel: "Apostolic Fathers",
    date: "ราว ค.ศ. 50-120 (ต้นฉบับ ค.ศ. 1056)",
    script: "Greek (Codex Hierosolymitanus)",
    location: "Greek Orthodox Patriarchate Library, Jerusalem",
    locationTh: "ห้องสมุดสังฆมณฑลกรีกออร์โธดอกซ์ เยรูซาเล็ม",
    contents: "ทางสองสาย (ชีวิต-ความตาย) + คู่มือพิธีบัพติศมา ศีลมหาสนิท และการรับผู้เผยพระวจนะ",
    status:
      "Eusebius จัดไว้ในกลุ่ม \"หนังสือปลอม\" (νόθα) — ส่วน Athanasius ปี ค.ศ. 367 ไม่รับเข้าสารบบ แต่ระบุให้ผู้เรียนคำสอนใหม่อ่านได้",
    description:
      "คู่มือชีวิตคริสตจักรที่เก่าแก่ที่สุดเท่าที่รู้จัก — บางส่วนอาจร่วมสมัยกับจดหมายของเปาโล สูญหายไปกว่าพันปี จนบิชอป Philotheos Bryennios ค้นพบใน Codex Hierosolymitanus (ค.ศ. 1056) ที่คอนสแตนติโนเปิลปี ค.ศ. 1873 ให้ภาพพิธีบัพติศมา การถืออดอาหารวันพุธ-ศุกร์ และบทอธิษฐานศีลมหาสนิทยุคแรกสุด Ehrman บรรจุฉบับเต็มไว้ใน After the New Testament หมวดชีวิตพิธีกรรมของคริสตจักรยุคแรก",
    sourceUrl: "https://www.earlychristianwritings.com/didache.html",
    image: "/manuscripts/other/didache/did1.jpg",
    tags: ["Apostolic Fathers", "Liturgy", "1873", "Bryennios"],
    scholar: "Bart D. Ehrman",
    detailPath: "/archive/other-writings/didache",
  },
  {
    id: 10,
    title: "1 Clement (Epistle to the Corinthians)",
    titleTh: "จดหมายเคลเมนต์ฉบับที่ 1",
    mark: "ΚΛΗΜΗΣ",
    category: "fathers",
    categoryLabel: "Apostolic Fathers",
    date: "ราว ค.ศ. 95-96",
    script: "Greek",
    location: "British Library (ใน Codex Alexandrinus) | Jerusalem (Codex Hierosolymitanus)",
    locationTh: "หอสมุดบริติช ลอนดอน (ผนวกใน Codex Alexandrinus) | เยรูซาเล็ม",
    contents: "จดหมายจากคริสตจักรโรมถึงโครินธ์ กรณีปลดผู้ปกครอง (presbyters)",
    status: "เคยถูกอ่านเป็นพระคัมภีร์ในโครินธ์ และถูกเย็บรวมใน Codex Alexandrinus ต่อจากวิวรณ์",
    description:
      "งานเขียนคริสเตียนนอกพันธสัญญาใหม่ที่เก่าแก่ที่สุดที่ระบุวันเวลาได้ค่อนข้างแน่ — ร่วมสมัยกับหนังสือเล่มท้าย ๆ ของ NT เอง จดหมายอ้างอำนาจของคริสตจักรโรมเข้าไประงับข้อพิพาทในโครินธ์ จึงเป็นหลักฐานสำคัญของพัฒนาการโครงสร้างคริสตจักรยุคแรก Ehrman ใช้เป็นเอกสารหลักของหมวดโครงสร้างและอำนาจคริสตจักรใน After the New Testament และแปลไว้ใน Loeb Apostolic Fathers ของเขาเอง",
    sourceUrl: "https://www.earlychristianwritings.com/1clement.html",
    // cle2 = หน้าเปิด 1 Clement จริง (folio 159a ของ Codex Alexandrinus, facsimile ของ MET) — cle1 เดิมเป็นหน้าพระกิตติคุณมาระโก ไม่ตรงเนื้อหา
    image: "/manuscripts/other/clement/cle2.jpg",
    tags: ["Apostolic Fathers", "Rome", "Church Order", "1st Century"],
    scholar: "Bart D. Ehrman",
    detailPath: "/archive/other-writings/clement",
  },
  {
    id: 5,
    title: "Shepherd of Hermas",
    titleTh: "คนเลี้ยงแกะของเฮอร์มาส",
    mark: "ΠΟΙΜΗΝ",
    category: "fathers",
    categoryLabel: "Apostolic Fathers",
    date: "ราว ค.ศ. 100-160",
    script: "Greek",
    location: "British Library (ใน Codex Sinaiticus) | Mount Athos | Michigan",
    locationTh: "หอสมุดบริติช (ใน Codex Sinaiticus) | อาราม Grigoriou เขาอาทอส | มิชิแกน",
    contents: "นิมิต 5 | บัญญัติ 12 | อุปมา 10 — ว่าด้วยการกลับใจครั้งที่สองหลังบัพติศมา",
    status: "Muratorian Fragment อนุญาตให้อ่านแต่ห้ามนับเป็นพระคัมภีร์ — อ้างว่าเขียน \"เมื่อไม่นานนี้\" สมัยบิชอป Pius",
    description:
      "งานเขียนนอกสารบบที่ถูกคัดลอกมากที่สุดในคริสต์ศาสนายุคแรก — จำนวนชิ้นส่วนปาปิรัสก่อนศตวรรษที่ 4 มีมากกว่าหนังสือ NT หลายเล่ม และถูกเย็บรวมท้าย Codex Sinaiticus คู่กับ Epistle of Barnabas Ehrman ชี้ใน After the New Testament ว่า Hermas สะท้อนปัญหาเร่งด่วนของคริสตชนศตวรรษที่ 2: บาปหลังบัพติศมาได้รับการอภัยได้หรือไม่",
    sourceUrl: "https://www.earlychristianwritings.com/shepherd.html",
    image: "/manuscripts/other/hermas/her1.jpg",
    tags: ["Apostolic Fathers", "Apocalypse", "Sinaiticus", "2nd Century"],
    scholar: "Bart D. Ehrman",
    detailPath: "/archive/other-writings/hermas",
  },
  {
    id: 6,
    title: "Apocalypse of Peter (Greek/Ethiopic)",
    titleTh: "วิวรณ์ของเปโตร ฉบับกรีก/เอธิโอปิก",
    mark: "ΑΠΟΚΑΛΥΨΙΣ",
    category: "apocalypse",
    categoryLabel: "Apocalypses",
    date: "ราว ค.ศ. 100-150",
    script: "Greek (Akhmim, Rainer, Bodleian) | ฉบับเต็ม: Ethiopic",
    location: "Cairo (Akhmim codex) | Vienna | Oxford | ฉบับ Ethiopic ในเอธิโอเปีย",
    locationTh: "ไคโร | เวียนนา (Rainer) | อ็อกซ์ฟอร์ด (Bodleian) | ฉบับเต็มภาษาเอธิโอปิก",
    contents: "ทัวร์สวรรค์-นรก: รายการบาป 21 ประเภทพร้อมโทษจำเพาะ — ต้นแบบวรรณกรรมนรกก่อน Dante",
    status: "Clement of Alexandria อ้างเป็นพระคัมภีร์ | Muratorian Fragment รับอย่างมีเงื่อนไข | Eusebius ปฏิเสธ",
    description:
      "วรรณกรรม \"ทัวร์นรก\" ฉบับแรกของคริสต์ศาสนา บรรยายโทษที่จำเพาะกับบาปแต่ละประเภทอย่างละเอียด เกือบได้เข้าสารบบจริง — Muratorian Fragment ยอมรับแต่บันทึกว่า \"บางคนไม่ยอมให้อ่านในคริสตจักร\" ชิ้นส่วนกรีกพบในโคเด็กซ์เดียวกับ Gospel of Peter ที่ Akhmim ส่วนฉบับสมบูรณ์อยู่ในภาษาเอธิโอปิก Ehrman ศึกษาสายวรรณกรรมนี้ต่อเนื่องถึงหนังสือ Journeys to Heaven and Hell (2022) — คนละงานกับ Coptic Apocalypse of Peter จาก Nag Hammadi ในคลังเดียวกันนี้ ซึ่งเป็นบทสนทนาเปิดเผยแบบ Gnostic ที่ชื่อพ้องกันเท่านั้น",
    sourceUrl: "https://www.earlychristianwritings.com/apocalypsepeter.html",
    image: "/manuscripts/other/apocalypse-peter/apo1.png",
    tags: ["Apocalypse", "Heaven & Hell", "Akhmim", "2nd Century"],
    scholar: "Bart D. Ehrman",
    detailPath: "/archive/other-writings/apocalypse-peter",
  },
  {
    id: 9,
    title: "Muratorian Fragment",
    titleTh: "ชิ้นส่วนมูราโทรี — รายชื่อสารบบที่เก่าแก่ที่สุด",
    mark: "CANON",
    category: "canon",
    categoryLabel: "Canon Lists",
    date: "รายชื่อแต่งราว ค.ศ. 170-200 (ต้นฉบับศตวรรษที่ 7-8)",
    script: "Latin (แปลจากกรีก — คัดลอกอย่างหละหลวม)",
    location: "Biblioteca Ambrosiana, Milan (Cod. J 101 sup.)",
    locationTh: "ห้องสมุดอัมโบรเซียนา มิลาน อิตาลี",
    contents: "รายชื่อหนังสือที่รับ-ปฏิเสธ 85 บรรทัด — ขาดต้นและอาจขาดท้าย",
    status: "รับ 22 จาก 27 เล่มของ NT ปัจจุบัน + Wisdom of Solomon + Apocalypse of Peter (มีเงื่อนไข)",
    description:
      "หลักฐานเก่าแก่ที่สุดของการ \"ขีดเส้น\" สารบบพันธสัญญาใหม่ ค้นพบโดย L.A. Muratori ในโคเด็กซ์จากอาราม Bobbio ตีพิมพ์ปี ค.ศ. 1740 รายชื่อไม่มีฮีบรู ยากอบ 1-2 เปโตร และจดหมายยอห์นอีกฉบับหนึ่ง (เอกสารระบุเพียง \"จดหมายของยอห์นสองฉบับ\" ซึ่งยังถกกันว่าหมายถึงฉบับใด) แต่กลับรวม Wisdom of Solomon และปฏิเสธ Shepherd of Hermas อย่างสุภาพ Ehrman ใช้เอกสารนี้เป็นหลักฐานแกนในบทว่าด้วยการก่อตัวของสารบบใน After the New Testament — ภาพของสารบบที่ยังไม่ลงตัวปลายศตวรรษที่ 2",
    sourceUrl: "https://www.earlychristianwritings.com/muratorian.html",
    image: "/manuscripts/other/muratorian/mur1.jpg",
    tags: ["Canon", "Latin", "Ambrosiana", "Muratori"],
    scholar: "Bart D. Ehrman",
    detailPath: "/archive/other-writings/muratorian",
  },
];

const filters = [
  { id: "all", label: "ทั้งหมด" },
  { id: "jewish", label: "Jewish-Christian Texts" },
  { id: "sethian", label: "Sethian Gnostics" },
  { id: "gospel", label: "Gospels นอกสารบบ" },
  { id: "gnostic", label: "Gnostic Texts" },
  { id: "internal", label: "ความขัดแย้งภายในคริสตจักร" },
  { id: "fathers", label: "Apostolic Fathers" },
  { id: "apocalypse", label: "Apocalypses" },
  { id: "canon", label: "Canon Lists" },
];

const scholars = [
  {
    name: "Bart D. Ehrman",
    years: "ปัจจุบัน",
    institution: "University of North Carolina Chapel Hill",
    work: '"After the New Testament: A Reader in Early Christianity, 100-300 CE" (2nd ed., Oxford, 2015), "Lost Scriptures" (2003), "The Apostolic Fathers" (Loeb, 2003)',
  },
  {
    name: "Elaine Pagels",
    years: "ปัจจุบัน",
    institution: "Princeton University",
    work: '"The Gnostic Gospels" (1979) — National Book Award Winner\n"Beyond Belief: The Secret Gospel of Thomas" (2003)',
  },
  {
    name: "James M. Robinson",
    years: "1924–2016",
    institution: "Claremont Graduate University",
    work: 'บรรณาธิการ "The Nag Hammadi Library" (1977) — ผู้นำโครงการแปล Nag Hammadi Codices',
  },
];

function ManuscriptImage({ m }) {
  return (
    <Image
      src={m.image}
      alt={m.title}
      fill
      sizes="(max-width: 768px) 100vw, 50vw"
      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = "/manuscripts/quran/placeholder.jpg";
        e.target.className = "object-contain p-8 opacity-30";
      }}
    />
  );
}

export default function OtherWritings() {
  const [activeFilter, setActiveFilter] = useState("all");
  const gridRef = useRef(null);

  const filtered =
    activeFilter === "all"
      ? manuscripts
      : manuscripts.filter((m) => m.category === activeFilter);

  // เผยการ์ดทีละใบเมื่อ scroll ถึง (ใช้ .ic-reveal / .ic-in จาก globals.css)
  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll(".ic-reveal");
    if (!cards?.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("ic-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    cards.forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, [activeFilter]);

  return (
    <div className="bg-paper text-ink">
      <Navbar />

      {/* HERO */}
      <section className="relative py-28 bg-ink overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none select-none flex items-center justify-center">
          <span className="font-cinzel text-[16rem] text-gold leading-none">
            ⚜
          </span>
        </div>
        {/* แสงทองรัศมีกลางจอ */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 45%, rgba(212,175,55,0.14) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 font-pridi text-sm text-paper/50 mb-10">
            <Link href="/" className="hover:text-gold transition-colors">
              Home
            </Link>
            <span className="text-gold/40">›</span>
            <span className="text-paper/50">Archive</span>
            <span className="text-gold/40">›</span>
            <span className="text-gold">Other Writings Outside Canon</span>
          </nav>

          <div className="text-center">
            <p className="font-cinzel text-2xl text-gold/60 tracking-[0.25em] mb-3">
              ΑΠΟΚΡΥΦΑ
            </p>
            <p className="font-cinzel text-xs tracking-[0.4em] uppercase text-gold-dark mb-4">
              The Archive
            </p>
            <h1 className="font-cinzel text-4xl md:text-6xl mb-5 leading-tight text-shimmer">
              Other Writings Outside Canon
            </h1>
            {/* เส้นแบ่งประดับดาว 8 แฉก */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-24 bg-gradient-to-r from-transparent to-gold/60" />
              <div className="tl-node8">
                <span className="tl-node8-core" />
              </div>
              <div className="h-px w-24 bg-gradient-to-l from-transparent to-gold/60" />
            </div>
            <h2 className="font-cinzel text-xl md:text-2xl text-gold mb-4">
              Early Christian Texts Outside the New Testament
            </h2>
            <p className="font-pridi text-lg md:text-xl text-paper/80 max-w-2xl mx-auto leading-relaxed mb-3">
              งานเขียนคริสเตียนยุคแรกนอกพันธสัญญาใหม่ — ทั้งที่ถูกปฏิเสธ ถูกลืม
              และเกือบได้เข้าสารบบ อ้างอิงงานรวบรวมของ Bart D. Ehrman
            </p>
            <p className="font-cinzel text-sm text-gold/70">
              1st–4th Century CE | Greek, Coptic, Latin, Ethiopic | 50+ Known
              Texts
            </p>
          </div>
        </div>

        {/* ขอบล่างไล่เฉดเข้าเนื้อหา */}
        <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-b from-transparent to-[#2a1a17] pointer-events-none" />
      </section>

      {/* FILTER BAR */}
      <section className="py-5 sticky top-0 z-30 border-b border-gold/25 bg-[#2a1a17]/90 backdrop-blur-md shadow-[0_6px_24px_rgba(0,0,0,0.35)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {filters.map((f) => {
              const count =
                f.id === "all"
                  ? manuscripts.length
                  : manuscripts.filter((m) => m.category === f.id).length;
              const active = activeFilter === f.id;
              return (
                <button
                  key={f.id}
                  onClick={() => setActiveFilter(f.id)}
                  className={`font-pridi text-sm px-5 py-2 rounded-full border transition-all duration-300 ${
                    active
                      ? "bg-gradient-to-r from-gold-dark via-gold to-gold-light text-ink border-gold font-semibold shadow-glow-sm"
                      : "border-gold/30 text-paper/70 hover:border-gold/70 hover:text-gold bg-transparent"
                  }`}
                >
                  {f.label}
                  <span
                    className={`ml-2 font-cinzel text-xs ${
                      active ? "text-ink/70" : "text-gold/50"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* MANUSCRIPT GRID — พื้นเข้มแบบห้องจดหมายเหตุ */}
      <section
        className="relative py-20 overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, #2a1a17 0%, #3E2723 45%, #2a1a17 100%)",
        }}
      >
        {/* แสงทองจางกลางห้อง */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 40% at 50% 0%, rgba(212,175,55,0.08) 0%, transparent 60%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-pridi text-sm text-paper/40 text-center mb-12 tracking-widest">
            ✦ &nbsp;แสดง {filtered.length} รายการ&nbsp; ✦
          </p>

          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {filtered.map((m, idx) => {
              const num = String(idx + 1).padStart(2, "0");

              return (
                <article
                  key={m.id}
                  className="ic-panel ic-reveal group rounded-card"
                  style={{ transitionDelay: `${(idx % 2) * 120}ms` }}
                >
                  {/* มุมทอง 4 มุม แบบกรอบต้นฉบับโบราณ */}
                  <span className="ic-corner ic-corner-tl" />
                  <span className="ic-corner ic-corner-tr" />
                  <span className="ic-corner ic-corner-bl" />
                  <span className="ic-corner ic-corner-br" />

                  {/* รูปภาพ */}
                  <div className="relative h-64 overflow-hidden">
                    {m.detailPath ? (
                      <Link href={m.detailPath} className="block h-full">
                        <ManuscriptImage m={m} />
                      </Link>
                    ) : (
                      <ManuscriptImage m={m} />
                    )}
                    {/* เงาไล่เฉดจากล่างขึ้นบน ให้รูปกลืนกับแผ่นการ์ด */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2a1a17] via-transparent to-transparent pointer-events-none" />
                    {/* ป้ายหมวด */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-gold-dark via-gold to-gold-light text-ink font-pridi text-xs font-semibold px-3 py-1 rounded-full shadow-glow-sm">
                        {m.categoryLabel}
                      </span>
                    </div>
                    {/* หมายเลขลำดับ */}
                    <div className="absolute bottom-3 right-4 font-cinzel text-4xl text-gold/30 leading-none select-none pointer-events-none">
                      {num}
                    </div>
                  </div>

                  {/* เนื้อหา */}
                  <div className="relative p-6 md:p-7">
                    {/* ลายน้ำชื่อกรีก */}
                    <div className="absolute top-1 right-3 font-cinzel text-5xl text-gold/[0.07] leading-none whitespace-nowrap select-none pointer-events-none">
                      {m.mark}
                    </div>

                    {m.detailPath ? (
                      <Link href={m.detailPath} className="group/title">
                        <h3 className="font-cinzel text-xl text-gold font-semibold mb-1 leading-snug group-hover/title:text-gold-light transition-colors">
                          {m.title}
                        </h3>
                      </Link>
                    ) : (
                      <h3 className="font-cinzel text-xl text-gold font-semibold mb-1 leading-snug">
                        {m.title}
                      </h3>
                    )}
                    <p className="font-pridi text-paper/60 text-sm mb-1">
                      {m.titleTh}
                    </p>
                    <span className="text-xs font-cinzel text-gold/50 block mb-4">
                      Ref: {m.scholar}
                    </span>

                    {/* เส้นทองคั่น */}
                    <div className="h-px w-full bg-gradient-to-r from-gold/50 via-gold/15 to-transparent mb-4" />

                    {/* ข้อมูล */}
                    <dl className="space-y-1.5 mb-4 text-sm font-pridi">
                      <div className="flex gap-2">
                        <dt className="text-gold/70 shrink-0 w-16">ยุคสมัย</dt>
                        <dd className="text-paper/80">{m.date}</dd>
                      </div>
                      <div className="flex gap-2">
                        <dt className="text-gold/70 shrink-0 w-16">อักษร</dt>
                        <dd className="text-paper/80">{m.script}</dd>
                      </div>
                      <div className="flex gap-2">
                        <dt className="text-gold/70 shrink-0 w-16">สถานที่</dt>
                        <dd className="text-paper/80">{m.locationTh}</dd>
                      </div>
                      {m.contents && (
                        <div className="flex gap-2">
                          <dt className="text-gold/70 shrink-0 w-16">บรรจุ</dt>
                          <dd className="text-paper/80">{m.contents}</dd>
                        </div>
                      )}
                      {m.status && (
                        <div className="flex gap-2">
                          <dt className="text-gold/70 shrink-0 w-16">สถานะ</dt>
                          <dd className="text-paper/80">{m.status}</dd>
                        </div>
                      )}
                    </dl>

                    <p className="font-pridi text-sm text-paper/70 leading-relaxed mb-5">
                      {m.description}
                    </p>

                    {/* หมายเหตุ */}
                    {m.note && (
                      <div className="border-l-2 border-gold/50 bg-gold/[0.05] rounded-r-lg px-4 py-3 mb-5">
                        <p className="font-cinzel text-gold/80 text-[0.65rem] tracking-widest uppercase mb-1">
                          หมายเหตุ
                        </p>
                        <p className="font-pridi text-xs text-paper/60 leading-relaxed italic">
                          {m.note}
                        </p>
                      </div>
                    )}

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {m.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border border-gold/30 bg-gold/[0.06] text-gold/90 font-cinzel text-[0.68rem] tracking-wide px-2.5 py-0.5 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* ปุ่ม */}
                    <div className="flex flex-col sm:flex-row gap-2.5">
                      {m.detailPath && (
                        <Link
                          href={m.detailPath}
                          className="flex-1 bg-gradient-to-r from-gold-dark via-gold to-gold-light hover:from-gold hover:to-gold-light text-ink font-pridi font-semibold text-sm text-center py-2.5 px-4 rounded-btn shadow-glow-sm hover:shadow-glow transition-all duration-300 flex items-center justify-center gap-2"
                        >
                          <span>สำรวจงานเขียน</span>
                          <span className="transition-transform duration-300 group-hover:translate-x-1">
                            →
                          </span>
                        </Link>
                      )}
                      <a
                        href={m.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 border border-gold/40 text-gold hover:bg-gold/10 hover:border-gold/70 font-pridi text-sm text-center py-2.5 px-4 rounded-btn transition-all duration-300"
                      >
                        แหล่งที่มา ↗
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <ArchiveNav
            links={[
              {
                href: "/archive/quran-manuscripts",
                label: "ศึกษาต้นฉบับอัลกุรอาน",
              },
              {
                href: "/archive/biblical-codices",
                label: "ศึกษาต้นฉบับไบเบิล",
              },
            ]}
          />
        </div>
      </section>

      {/* นักวิชาการหลัก */}
      <section className="py-16 bg-ink border-t border-gold/15">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-cinzel text-xs tracking-[0.35em] uppercase text-gold-dark mb-3">
              Scholars
            </p>
            <h2 className="font-cinzel text-2xl md:text-3xl text-gold mb-3">
              นักวิชาการด้านงานเขียนนอกสารบบ
            </h2>
            <div className="mx-auto h-px w-20 bg-gold/40" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {scholars.map((s) => (
              <div
                key={s.name}
                className="card-glass p-6 text-center hover:border-gold/60 transition-colors"
              >
                <p className="font-cinzel text-gold font-semibold text-lg mb-1">
                  {s.name}
                </p>
                <p className="font-pridi text-paper/50 text-xs mb-2">
                  {s.years}
                </p>
                <p className="font-cinzel text-paper/70 text-sm mb-3">
                  {s.institution}
                </p>
                <p className="font-pridi text-paper/60 text-xs leading-relaxed whitespace-pre-line">
                  {s.work}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* หมายเหตุทางวิชาการ */}
      <section className="py-16 bg-ink">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-10">
            <div className="flex-1 h-px bg-gold/30"></div>
            <h3 className="font-cinzel text-xl md:text-2xl text-gold text-center tracking-wide leading-snug px-2">
              หมายเหตุทางวิชาการ: ความหลากหลายของคริสต์ศาสนายุคแรก
            </h3>
            <div className="flex-1 h-px bg-gold/30"></div>
          </div>

          <div className="card-glass p-8 mb-8 border-l-4 border-gold">
            <div className="space-y-4 font-pridi text-paper-white/90 leading-relaxed">
              <p>
                Bart Ehrman เปิดหนังสือ{" "}
                <em>After the New Testament: A Reader in Early Christianity</em>{" "}
                ด้วยข้อสังเกตว่าคริสต์ศาสนาช่วง ค.ศ. 100-300
                ไม่ใช่ขบวนการเดียวที่เป็นเอกภาพ แต่เป็น
                <strong className="text-gold">
                  {" "}
                  &quot;ความหลากหลายของกลุ่มที่ต่างอ้างว่าตนคือคริสต์ศาสนาแท้&quot;
                </strong>{" "}
                — Proto-orthodox, Gnostic (Sethian/Valentinian), Marcionite,
                Jewish-Christian (Ebionite) ต่างมีพระกิตติคุณ จดหมาย
                และวิวรณ์ของตนเอง งานเขียนในคลังนี้คือหลักฐานชั้นต้นของการแข่งขันนั้น
              </p>
              <p>
                สารบบพันธสัญญาใหม่ 27 เล่มไม่ได้ถูกกำหนดในครั้งเดียว —
                รายชื่อแรกที่ตรงกับปัจจุบันทุกเล่มคือจดหมายอีสเตอร์ของ Athanasius
                ปี ค.ศ. 367 กว่าสามศตวรรษหลังยุคพระเยซู
                ระหว่างนั้นหนังสืออย่าง Shepherd of Hermas และ Apocalypse of Peter
                เคยถูกบางคริสตจักรอ่านเป็นพระคัมภีร์
                ขณะที่วิวรณ์ของยอห์นและฮีบรูก็เคยถูกโต้แย้ง
                ดังที่เห็นได้จาก Muratorian Fragment และบันทึกของ Eusebius
              </p>
            </div>
          </div>

          <div className="border-t border-gold/20 pt-6">
            <p className="font-cinzel text-gold/60 text-xs mb-3 tracking-widest">
              แหล่งอ้างอิง
            </p>
            <ul className="font-pridi text-paper-white/50 text-xs space-y-1 leading-relaxed">
              <li>
                [1] B.D. Ehrman,{" "}
                <em>
                  After the New Testament: A Reader in Early Christianity,
                  100-300 CE
                </em>
                , 2nd ed., Oxford University Press, 2015
              </li>
              <li>
                [2] B.D. Ehrman, <em>Lost Scriptures: Books that Did Not Make It
                into the New Testament</em>, Oxford University Press, 2003
              </li>
              <li>
                [3] B.D. Ehrman, <em>The Apostolic Fathers</em>, 2 vols., Loeb
                Classical Library, Harvard University Press, 2003
              </li>
              <li>
                [4] J.M. Robinson (ed.), <em>The Nag Hammadi Library in
                English</em>, 3rd ed., HarperSanFrancisco, 1988
              </li>
              <li>
                [5] B.M. Metzger, <em>The Canon of the New Testament: Its
                Origin, Development, and Significance</em>, Oxford University
                Press, 1987
              </li>
              <li>
                [6] E. Pagels, <em>The Gnostic Gospels</em>, Random House, 1979
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
