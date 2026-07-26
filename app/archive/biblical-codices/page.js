"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import ArchiveNav from "../../../components/ArchiveNav";

const manuscripts = [
  {
    id: 4,
    title: "Papyrus P52 (John Rylands Papyrus)",
    titleTh: "ปาปิรัส P52 ยอห์น ไรแลนด์ส",
    mark: "𝔓52",
    category: "papyrus",
    categoryLabel: "Papyrus",
    date: "ราว ค.ศ. 110-150",
    script: "Greek (Koine)",
    location: "John Rylands Library, Manchester, UK",
    locationTh: "ห้องสมุดยอห์น ไรแลนด์ส แมนเชสเตอร์ สหราชอาณาจักร",
    contents: "ยอห์น 18:31-33 (ด้านหน้า) และ 18:37-38 (ด้านหลัง)",
    textType: "สอดคล้องกับสายข้อความยุคแรก",
    description:
      "ต้นฉบับพระคัมภีร์คริสเตียนที่เก่าแก่ที่สุดที่รู้จัก Philip Comfort และ David Barrett ใน The Text of the Earliest New Testament Greek Manuscripts กำหนดอายุราว ค.ศ. 110-125 โดยเทียบลายมือกับปาปิรัสลงวันที่ เช่น P.Fayum 110 และ P.Oxy. 2533 การมีอยู่ของสำเนายอห์นในอียิปต์ต้นศตวรรษที่ 2 ชี้ว่าพระกิตติคุณยอห์นแต่งขึ้นก่อนหน้านั้นในศตวรรษที่ 1",
    sourceUrl: "https://www.library.manchester.ac.uk/rylands/",
    image: "/manuscripts/bible/papyrus-p52.jpg",
    tags: ["Papyrus", "2nd Century", "John", "Manchester"],
    scholar: "Comfort & Barrett",
    detailPath: "/archive/biblical-codices/p52",
  },
  {
    id: 9,
    title: "Papyrus P66 (Bodmer II)",
    titleTh: "ปาปิรัส P66 บอดแมร์ II",
    mark: "𝔓66",
    category: "papyrus",
    categoryLabel: "Papyrus",
    date: "ราว ค.ศ. 150-200 (Comfort: กลางศตวรรษที่ 2)",
    script: "Greek (Koine)",
    location: "Fondation Martin Bodmer, Cologny, Geneva",
    locationTh: "มูลนิธิมาร์ติน บอดแมร์ โคโลญี นครเจนีวา สวิตเซอร์แลนด์",
    contents: "พระกิตติคุณยอห์นเกือบสมบูรณ์ (1:1-6:11; 6:35-14:26 และชิ้นส่วนถึงบทที่ 21)",
    textType: "Alexandrian (ปนอิสระ)",
    description:
      "สำเนาพระกิตติคุณยอห์นที่เกือบสมบูรณ์ที่เก่าแก่ที่สุดในโลก Comfort วิเคราะห์ว่าธรรมาจารย์ผู้คัดลอกเป็นมืออาชีพแต่คัดลอกอย่างอิสระ และมีการแก้ไขตัวเองกว่า 400 จุด ซึ่งส่วนใหญ่ปรับเข้าหาสายข้อความ Alexandrian แสดงให้เห็นกระบวนการคัดลอกและตรวจทานจริงในห้องคัดลอกยุคแรก",
    note:
      "อายุของ P66 อิงการเทียบลายมือ (palaeography) เท่านั้น — ไม่เคยมีการตรวจ Carbon-14 เนื่องจากต้องตัดทำลายชิ้นตัวอย่าง ซึ่งสถาบันเจ้าของอย่างมูลนิธิ Bodmer ไม่อนุญาตกับต้นฉบับชิ้นเอกตามแนวปฏิบัติการอนุรักษ์ อีกทั้งเส้นปรับเทียบ C-14 มีช่วงราบ (plateau) ราว ค.ศ. 130-220 พอดี ผลตรวจจึงชี้ขาดข้อถกเถียงเรื่องอายุไม่ได้อยู่ดี",
    sourceUrl: "https://fondationbodmer.ch/en/",
    exploreUrl: "https://manuscripts.csntm.org/manuscript/View/GA_P66",
    image: "/manuscripts/bible/papyrus-p66.jpg",
    tags: ["Papyrus", "2nd Century", "John", "Bodmer"],
    scholar: "Philip W. Comfort",
    detailPath: "/archive/biblical-codices/p66",
  },
  {
    id: 10,
    title: "Papyrus P75 (Bodmer XIV–XV)",
    titleTh: "ปาปิรัส P75 บอดแมร์ XIV-XV",
    mark: "𝔓75",
    category: "papyrus",
    categoryLabel: "Papyrus",
    date: "ราว ค.ศ. 175-225",
    script: "Greek (Koine)",
    location: "Biblioteca Apostolica Vaticana (Hanna Papyrus 1), Vatican City",
    locationTh: "ห้องสมุดวาติกัน (Hanna Papyrus 1) นครรัฐวาติกัน",
    contents: "ลูกา 3-24 และยอห์น 1-15 (ลูกาสมบูรณ์ที่สุดในบรรดาปาปิรัสยุคแรก)",
    textType: "Alexandrian (เคร่งครัดมาก)",
    description:
      "พยานหลักฐานสำคัญที่สุดชิ้นหนึ่งในสายตาของ Comfort — ข้อความของ P75 แทบจะเหมือนกับ Codex Vaticanus ที่คัดลอกหลังจากนั้นราว 150 ปี พิสูจน์ว่าข้อความสาย Alexandrian ไม่ใช่ผลงานตรวจชำระของศตวรรษที่ 4 แต่สืบทอดมาจากศตวรรษที่ 2 อย่างระมัดระวัง ปัจจุบันเก็บรักษาที่ห้องสมุดวาติกันและเปิดให้ชมออนไลน์",
    note:
      "อายุของ P75 อิงการเทียบลายมือเท่านั้น — ไม่เคยมีการตรวจ Carbon-14 เพราะการทดสอบต้องทำลายชิ้นตัวอย่าง ซึ่งผู้ครอบครอง (มูลนิธิ Bodmer เดิม และห้องสมุดวาติกันปัจจุบัน) ไม่อนุญาตกับต้นฉบับระดับนี้ และช่วงราบของเส้นปรับเทียบ C-14 (ราว ค.ศ. 130-220) ทำให้ผลตรวจไม่สามารถชี้ขาดอายุได้แม่นกว่าการเทียบลายมือ",
    sourceUrl: "https://www.vaticanlibrary.va",
    exploreUrl: "https://digi.vatlib.it/view/MSS_Pap.Hanna.1(Mater.Verbi)",
    image: "/manuscripts/bible/papyrus-p75.jpg",
    tags: ["Papyrus", "Luke", "John", "Vatican"],
    scholar: "Philip W. Comfort",
    detailPath: "/archive/biblical-codices/p75",
  },
  {
    id: 12,
    title: "Papyrus P46 (Chester Beatty II)",
    titleTh: "ปาปิรัส P46 เชสเตอร์ บีตตี II",
    mark: "𝔓46",
    category: "papyrus",
    categoryLabel: "Papyrus",
    date: "ราว ค.ศ. 175-225 (Comfort: กลางศตวรรษที่ 2)",
    script: "Greek (Koine)",
    location: "Chester Beatty Library, Dublin | University of Michigan",
    locationTh: "ห้องสมุดเชสเตอร์ บีตตี ดับลิน | มหาวิทยาลัยมิชิแกน",
    contents: "จดหมายของเปาโล 9 ฉบับ + ฮีบรู (86 จาก 104 แผ่น) — ไม่มีจดหมายศิษยาภิบาล",
    textType: "Proto-Alexandrian",
    description:
      "ชุดจดหมายของเปาโลที่เก่าแก่ที่สุดในโลก น่าสังเกตว่าเรียงฮีบรูไว้ต่อจากโรมทันที แสดงว่าผู้รวบรวมยุคแรกถือว่าฮีบรูเป็นงานของเปาโล และไม่มีจดหมายศิษยาภิบาล (1-2 ทิโมธี, ทิตัส) Comfort กำหนดอายุกลางศตวรรษที่ 2 ทำให้เป็นพยานว่าจดหมายของเปาโลถูกรวบรวมเป็นชุด (corpus) เร็วกว่าที่เคยคิด",
    sourceUrl: "https://chesterbeatty.ie/collections/",
    exploreUrl: "https://manuscripts.csntm.org/manuscript/View/GA_P46",
    image: "/manuscripts/bible/papyrus-p46.jpg",
    tags: ["Papyrus", "Pauline Epistles", "Chester Beatty", "2nd Century"],
    scholar: "Philip W. Comfort",
    detailPath: "/archive/biblical-codices/p46",
  },
  {
    id: 11,
    title: "Papyrus P45 (Chester Beatty I)",
    titleTh: "ปาปิรัส P45 เชสเตอร์ บีตตี I",
    mark: "𝔓45",
    category: "papyrus",
    categoryLabel: "Papyrus",
    date: "ต้นศตวรรษที่ 3 (ราว ค.ศ. 200-250)",
    script: "Greek (Koine)",
    location: "Chester Beatty Library, Dublin | Austrian National Library, Vienna",
    locationTh: "ห้องสมุดเชสเตอร์ บีตตี ดับลิน | หอสมุดแห่งชาติออสเตรีย เวียนนา",
    contents: "พระกิตติคุณทั้ง 4 + กิจการ (เหลือ 30 จากราว 220 แผ่น)",
    textType: "อิสระ (ใกล้ Caesarean ในมาระโก)",
    description:
      "โคเด็กซ์เล่มแรกสุดเท่าที่รู้จักที่รวมพระกิตติคุณทั้งสี่และกิจการไว้ในเล่มเดียว เป็นหลักฐานว่าคริสตชนต้นศตวรรษที่ 3 ถือพระกิตติคุณ 4 เล่มเป็นชุดเดียวกันแล้ว Comfort วิเคราะห์ว่าธรรมาจารย์คัดลอกแบบถ่ายความหมายมากกว่าถ่ายคำต่อคำ ทำให้ข้อความมีลักษณะอิสระกว่าปาปิรัสร่วมสมัย",
    sourceUrl: "https://chesterbeatty.ie/collections/",
    exploreUrl: "https://manuscripts.csntm.org/manuscript/View/GA_P45",
    image: "/manuscripts/bible/papyrus-p45.jpg",
    tags: ["Papyrus", "Four Gospels", "Acts", "3rd Century"],
    scholar: "Philip W. Comfort",
    detailPath: "/archive/biblical-codices/p45",
  },
  {
    id: 1,
    title: "Codex Sinaiticus",
    titleTh: "โคเด็กซ์ ซีไนติกัส",
    mark: "ℵ 01",
    category: "uncial",
    categoryLabel: "Uncial Codex",
    date: "ราว ค.ศ. 330-360",
    script: "Greek Uncial (Koine Greek)",
    location: "British Library, London | Leipzig | St. Catherine's Monastery | Vatican",
    locationTh: "หอสมุดบริติช ลอนดอน | ไลพ์ซิก | อาราม St. Catherine | วาติกัน",
    contents: "OT (Septuagint) ส่วนใหญ่ + NT ครบ 27 เล่ม + Epistle of Barnabas + Shepherd of Hermas",
    textType: "Alexandrian",
    description:
      "ต้นฉบับพันธสัญญาใหม่ฉบับสมบูรณ์ที่เก่าแก่ที่สุดในโลก ค้นพบโดย Constantin von Tischendorf ที่อาราม St. Catherine ไซนาย ในปี ค.ศ. 1844 คัดลอกโดยธรรมาจารย์อย่างน้อย 3 คน (Scribe A, B, D) และถูกแก้ไขโดยผู้ตรวจทานหลายชั่วอายุคน — Tischendorf นับการแก้ไขได้ราว 23,000 จุดทั่วทั้งเล่ม Bruce Metzger ระบุว่าเป็นหนึ่งในพยานหลักฐานสำคัญที่สุดของข้อความพันธสัญญาใหม่",
    sourceUrl: "https://www.codexsinaiticus.org",
    image: "/manuscripts/bible/codex-sinaiticus.jpg",
    tags: ["Uncial", "Complete NT", "4th Century", "Greek"],
    scholar: "Bruce M. Metzger",
    detailPath: "/archive/biblical-codices/sinaiticus",
  },
  {
    id: 2,
    title: "Codex Vaticanus (B/03)",
    titleTh: "โคเด็กซ์ วาติกานัส",
    mark: "B 03",
    category: "uncial",
    categoryLabel: "Uncial Codex",
    date: "ต้นศตวรรษที่ 4 ค.ศ.",
    script: "Greek Uncial",
    location: "Biblioteca Apostolica Vaticana, Vatican City",
    locationTh: "ห้องสมุดอัครสาวก วาติกัน นครรัฐวาติกัน",
    contents: "OT + NT เกือบสมบูรณ์ — ขาดฮีบรู 9:14 เป็นต้นไป, 1-2 ทิโมธี, ทิตัส, ฟีเลโมน และวิวรณ์",
    textType: "Alexandrian",
    description:
      "ต้นฉบับที่ครอบคลุมทั้งพันธสัญญาเก่าและใหม่เกือบสมบูรณ์ Bruce Metzger ระบุว่าเป็นหนึ่งในพยานหลักฐานสำคัญที่สุด Comfort ชี้ว่าข้อความของ Vaticanus แทบเหมือนกับ P75 จากศตวรรษที่ 2 แสดงว่าสืบทอดจากสายที่คัดลอกอย่างเคร่งครัดมาแต่ยุคแรก ขณะเดียวกัน Herman Hoskier พบว่า Sinaiticus และ Vaticanus แตกต่างกันถึง 3,036 จุดในพระกิตติคุณ",
    sourceUrl: "https://www.vatican.va/various/manuscripts/index_en.html",
    exploreUrl: "https://digi.vatlib.it/view/MSS_Vat.gr.1209",
    image: "/manuscripts/bible/codex-vaticanus.jpg",
    tags: ["Uncial", "4th Century", "Vatican", "Greek"],
    scholar: "Bruce M. Metzger",
    detailPath: "/archive/biblical-codices/vaticanus",
  },
  {
    id: 3,
    title: "Codex Alexandrinus (A/02)",
    titleTh: "โคเด็กซ์ อะเล็กซานดรินัส",
    mark: "A 02",
    category: "uncial",
    categoryLabel: "Uncial Codex",
    date: "ต้นศตวรรษที่ 5 ค.ศ.",
    script: "Greek Uncial",
    location: "British Library, London",
    locationTh: "หอสมุดบริติช ลอนดอน สหราชอาณาจักร",
    contents: "OT + NT (ขาดมัทธิวส่วนใหญ่, ยอห์น 2 แผ่น, 2 โครินธ์บางส่วน) + 1-2 Clement",
    textType: "Byzantine (พระกิตติคุณ) / Alexandrian (ส่วนอื่น)",
    description:
      "หนึ่งใน Great Uncial Codices ทั้งสี่ ครอบคลุมพระคัมภีร์ทั้งเล่มเกือบสมบูรณ์ รวมถึงหนังสือบางเล่มที่ไม่อยู่ในคัมภีร์มาตรฐานปัจจุบัน เช่น 1 Clement และ 2 Clement มีลักษณะพิเศษคือข้อความพระกิตติคุณเป็นแบบ Byzantine ยุคแรกสุดเท่าที่รู้จัก ขณะที่ส่วนอื่นของ NT เป็นสาย Alexandrian — พยานว่าสายข้อความต่างกันถูกใช้ควบคู่กันในศตวรรษที่ 5",
    sourceUrl: "https://www.bl.uk/collection-items/codex-alexandrinus",
    image: "/manuscripts/bible/codex-alexandrinus.jpg",
    tags: ["Uncial", "5th Century", "British Library", "Greek"],
    scholar: "F.F. Bruce",
    detailPath: "/archive/biblical-codices/alexandrinus",
  },
  {
    id: 13,
    title: "Codex Ephraemi Rescriptus (C/04)",
    titleTh: "โคเด็กซ์ เอฟราเอมี เรสคริปตัส",
    mark: "C 04",
    category: "uncial",
    categoryLabel: "Uncial Codex",
    date: "ศตวรรษที่ 5 ค.ศ.",
    script: "Greek Uncial (Palimpsest)",
    location: "Bibliothèque nationale de France, Paris",
    locationTh: "หอสมุดแห่งชาติฝรั่งเศส กรุงปารีส",
    contents: "ชิ้นส่วน OT + NT เกือบทุกเล่ม (145 จาก ~238 แผ่น NT)",
    textType: "ผสม (Alexandrian + Byzantine)",
    description:
      "หนึ่งใน Great Uncial Codices ทั้งสี่ และเป็น Palimpsest ที่มีชื่อเสียงที่สุดของพระคัมภีร์ — ในศตวรรษที่ 12 ข้อความพระคัมภีร์ถูกขูดลบออกเพื่อนำหนังกลับมาเขียนบทเทศนาของนักบุญเอฟราเอมทับ Constantin von Tischendorf ใช้สารเคมีช่วยอ่านและถอดข้อความชั้นล่างสำเร็จในปี ค.ศ. 1840-1845 ก่อนที่เขาจะค้นพบ Codex Sinaiticus",
    sourceUrl: "https://www.bnf.fr/en",
    exploreUrl: "https://gallica.bnf.fr/ark:/12148/btv1b8470433r",
    image: "/manuscripts/bible/codex-ephraemi.jpg",
    tags: ["Uncial", "Palimpsest", "5th Century", "Paris"],
    scholar: "Bruce M. Metzger",
    detailPath: "/archive/biblical-codices/ephraemi",
  },
  {
    id: 5,
    title: "Codex Bezae (D/05)",
    titleTh: "โคเด็กซ์ เบซา",
    mark: "D 05",
    category: "uncial",
    categoryLabel: "Uncial Codex",
    date: "ราว ค.ศ. 400 (ศตวรรษที่ 4-5)",
    script: "Greek & Latin (Bilingual)",
    location: "Cambridge University Library, UK",
    locationTh: "ห้องสมุดมหาวิทยาลัยเคมบริดจ์ สหราชอาณาจักร",
    contents: "พระกิตติคุณทั้ง 4 (เรียงแบบตะวันตก: มธ-ยน-ลก-มก) + กิจการ + 3 ยอห์นบางส่วน",
    textType: "Western",
    description:
      "ต้นฉบับ 2 ภาษา (Greek-Latin) ตัวแทนสำคัญที่สุดของสายข้อความ Western — ข้อความกิจการยาวกว่าสาย Alexandrian ราว 8-10% และมีข้อความที่แตกต่างจากฉบับมาตรฐานหลายจุด รวมถึงเรื่องราวของหญิงที่ถูกจับได้ว่าล่วงประเวณี (John 7:53-8:11) ซึ่ง Bruce Metzger ถือว่าเป็นส่วนเพิ่มเติมในภายหลัง",
    sourceUrl:
      "https://www.lib.cam.ac.uk/collections/departments/manuscripts-university-archives/significant-items/codex-bezae",
    image: "/manuscripts/bible/codex-bezae.jpg",
    tags: ["Uncial", "Bilingual", "Cambridge", "Textual Variants"],
    scholar: "Bruce M. Metzger",
    detailPath: "/archive/biblical-codices/bezae",
  },
  {
    id: 14,
    title: "Codex Washingtonianus (W/032)",
    titleTh: "โคเด็กซ์ วอชิงตัน (Freer Gospels)",
    mark: "W 032",
    category: "uncial",
    categoryLabel: "Uncial Codex",
    date: "ปลายศตวรรษที่ 4 — ต้นศตวรรษที่ 5",
    script: "Greek Uncial",
    location: "Smithsonian (Freer Gallery of Art), Washington, D.C.",
    locationTh: "พิพิธภัณฑ์ Freer สถาบันสมิธโซเนียน กรุงวอชิงตัน ดี.ซี.",
    contents: "พระกิตติคุณทั้ง 4 (เรียงแบบตะวันตก: มธ-ยน-ลก-มก)",
    textType: "ผสมเป็นช่วง ๆ (block mixture)",
    description:
      "ต้นฉบับพระกิตติคุณกรีกสำคัญที่สุดที่อยู่ในสหรัฐฯ ซื้อโดย Charles Freer ที่อียิปต์ปี ค.ศ. 1906 มีลักษณะพิเศษคือข้อความเปลี่ยนตระกูลเป็นช่วง ๆ (บางตอน Alexandrian บางตอน Western/Byzantine) สะท้อนว่าคัดลอกจากต้นแบบหลายฉบับ และมีข้อความ Freer Logion ต่อท้ายมาระโก 16:14 ซึ่งไม่พบในต้นฉบับอื่นใด",
    sourceUrl: "https://asia.si.edu",
    exploreUrl: "https://manuscripts.csntm.org/manuscript/View/GA_032",
    image: "/manuscripts/bible/codex-washingtonianus.jpg",
    tags: ["Uncial", "Freer Gospels", "Washington", "5th Century"],
    scholar: "Bruce M. Metzger",
    detailPath: "/archive/biblical-codices/washingtonianus",
  },
  {
    id: 6,
    title: "Aleppo Codex (Keter Aram Tzova)",
    titleTh: "โคเด็กซ์ อะเลปโป",
    mark: "כֶּתֶר",
    category: "masoretic",
    categoryLabel: "Masoretic Text",
    date: "ราว ค.ศ. 920",
    script: "Hebrew (Masoretic)",
    location: "Shrine of the Book, Israel Museum, Jerusalem",
    locationTh: "Shrine of the Book พิพิธภัณฑ์อิสราเอล กรุงเยรูซาเล็ม",
    contents: "เหลือ 294 จากเดิม 487 แผ่น — โทราห์สูญหายเกือบทั้งหมด",
    textType: "Masoretic (สำนัก Ben Asher)",
    description:
      "ต้นฉบับ Masoretic Text ที่เก่าแก่ที่สุดและแม่นยำที่สุดของพระคัมภีร์ฮีบรู ใส่สระและเครื่องหมาย Masorah โดย Aaron ben Moses ben Asher ปรมาจารย์คนสุดท้ายของตระกูล Ben Asher แห่งทิเบเรียส ครั้งหนึ่งเชื่อว่าสมบูรณ์ แต่สูญหายราว 40% ในจลาจลที่อะเลปโปปี ค.ศ. 1947 Emanuel Tov ระบุว่าเป็นต้นฉบับ Hebrew Bible ที่สำคัญที่สุด และเป็นฐานของ Hebrew University Bible Project",
    sourceUrl: "https://www.aleppocodex.org",
    image: "/manuscripts/bible/aleppo-codex.jpg",
    tags: ["Masoretic", "Hebrew", "Jerusalem", "10th Century"],
    scholar: "Emanuel Tov",
    detailPath: "/archive/biblical-codices/aleppo",
  },
  {
    id: 15,
    title: "Leningrad Codex (B19a)",
    titleTh: "โคเด็กซ์ เลนินกราด",
    mark: "B19a",
    category: "masoretic",
    categoryLabel: "Masoretic Text",
    date: "ค.ศ. 1008",
    script: "Hebrew (Masoretic)",
    location: "National Library of Russia, St. Petersburg",
    locationTh: "หอสมุดแห่งชาติรัสเซีย นครเซนต์ปีเตอร์สเบิร์ก",
    contents: "พระคัมภีร์ฮีบรูครบทุกเล่ม (สมบูรณ์ที่สุดที่เก่าแก่ที่สุด)",
    textType: "Masoretic (สาย Ben Asher)",
    description:
      "ต้นฉบับพระคัมภีร์ฮีบรูฉบับสมบูรณ์ที่เก่าแก่ที่สุดในโลกที่ยังอยู่ครบ คัดลอกที่ไคโรปี ค.ศ. 1008 โดย Samuel ben Jacob ตามสายข้อความ Ben Asher หลังจาก Aleppo Codex เสียหาย ต้นฉบับนี้จึงกลายเป็นฐานของพระคัมภีร์ฮีบรูวิชาการทุกฉบับในปัจจุบัน ทั้ง Biblia Hebraica Stuttgartensia (BHS) และ Biblia Hebraica Quinta ซึ่งเป็นฐานการแปลพันธสัญญาเดิมแทบทุกภาษาทั่วโลก",
    sourceUrl: "https://nlr.ru/eng/",
    exploreUrl: "https://archive.org/details/Leningrad_Codex",
    image: "/manuscripts/bible/leningrad-codex.jpg",
    tags: ["Masoretic", "Hebrew", "Complete", "St. Petersburg"],
    scholar: "Emanuel Tov",
    detailPath: "/archive/biblical-codices/leningrad",
  },
  {
    id: 7,
    title: "Septuagint (LXX)",
    titleTh: "ฉบับเซปตัวจินต์ — พระคัมภีร์เก่ากรีก",
    mark: "LXX",
    category: "septuagint",
    categoryLabel: "Septuagint",
    date: "ศตวรรษที่ 3-2 ก่อนค.ศ. (แปลจากฮีบรู)",
    script: "Greek (Koine)",
    location: "พบใน Codex Vaticanus, Sinaiticus, Alexandrinus",
    locationTh: "ต้นฉบับหลัก: วาติกัน, ลอนดอน, อารามไซนาย",
    contents: "พันธสัญญาเดิมภาษากรีกทั้งหมด รวมหนังสือ Deuterocanonical",
    textType: "Greek Old Testament",
    description:
      "ฉบับแปลพระคัมภีร์ฮีบรูเป็นภาษากรีก เก่าแก่ที่สุดในโลก ตามตำนานแปลโดยนักวิชาการ 72 คนที่เมืองอเล็กซานเดรีย อียิปต์ เป็นพระคัมภีร์ที่ผู้เขียนพันธสัญญาใหม่ใช้อ้างอิงมากที่สุด — คำอ้างอิง OT ใน NT ส่วนใหญ่ตรงกับ LXX มากกว่าข้อความฮีบรู ต้นฉบับสมบูรณ์ที่เก่าแก่ที่สุดคือ Codex Vaticanus (ศตวรรษที่ 4) ฉบับวิชาการมาตรฐานปัจจุบันคือ Rahlfs-Hanhart และ Göttingen Septuagint",
    sourceUrl: "https://en.wikipedia.org/wiki/Septuagint",
    image: "/manuscripts/bible/septuagint.jpg",
    tags: ["Septuagint", "LXX", "Greek OT", "Alexandria"],
    scholar: "Emanuel Tov",
    detailPath: "/archive/biblical-codices/septuagint",
  },
  {
    id: 8,
    title: "Dead Sea Scrolls (Qumran)",
    titleTh: "ม้วนหนังสือทะเลเดดซี",
    mark: "מגילות",
    category: "scrolls",
    categoryLabel: "Qumran Scrolls",
    date: "ศตวรรษที่ 3 ก่อนค.ศ. — ศตวรรษที่ 1 ค.ศ.",
    script: "Hebrew, Aramaic, Greek",
    location: "Shrine of the Book, Israel Museum, Jerusalem",
    locationTh: "Shrine of the Book พิพิธภัณฑ์อิสราเอล เยรูซาเล็ม",
    contents: "ม้วนหนังสือ ~900+ ม้วน เป็นพระคัมภีร์ราว 230 ม้วน — Great Isaiah Scroll (1QIsaᵃ) สมบูรณ์ทั้งเล่ม",
    textType: "หลากหลาย (Proto-Masoretic, Pre-Samaritan, สาย LXX)",
    description:
      "ค้นพบปี ค.ศ. 1947 ในถ้ำริมทะเลเดดซี มีชิ้นส่วนพระคัมภีร์ฮีบรูเกือบทุกเล่ม (ยกเว้นเอสเธอร์) เก่ากว่าต้นฉบับ Masoretic ราว 1,000 ปี ชิ้นเด่นที่สุดคือ Great Isaiah Scroll ที่มีอิสยาห์ครบทั้ง 66 บท บางม้วนสอดคล้องกับฉบับ Septuagint มากกว่า Masoretic Text แสดงให้เห็นความหลากหลายของข้อความในยุคพระวิหารที่ 2",
    sourceUrl: "https://www.deadseascrolls.org.il",
    image: "/manuscripts/bible/dead-sea-scrolls.jpg",
    tags: ["Dead Sea Scrolls", "Qumran", "Hebrew", "1947"],
    scholar: "Emanuel Tov",
    detailPath: "/archive/biblical-codices/dead-sea-scrolls",
  },
];

const filters = [
  { id: "all", label: "ทั้งหมด" },
  { id: "uncial", label: "Uncial Codices" },
  { id: "papyrus", label: "Papyrus" },
  { id: "septuagint", label: "Septuagint" },
  { id: "masoretic", label: "Masoretic" },
  { id: "scrolls", label: "Dead Sea Scrolls" },
];

const scholars = [
  {
    name: "Philip W. Comfort",
    years: "1950–ปัจจุบัน",
    institution: "Coastal Carolina University",
    work: '"The Text of the Earliest New Testament Greek Manuscripts" (ร่วมกับ D.P. Barrett, Tyndale House, 2001)',
  },
  {
    name: "Bruce M. Metzger",
    years: "1914–2007",
    institution: "Princeton Theological Seminary",
    work: '"The Text of the New Testament" (1964, Oxford University Press)',
  },
  {
    name: "Bart D. Ehrman",
    years: "ปัจจุบัน",
    institution: "University of North Carolina",
    work: '"Misquoting Jesus" (2005) — ศึกษาการเปลี่ยนแปลงข้อความ',
  },
  {
    name: "Daniel B. Wallace",
    years: "ปัจจุบัน",
    institution: "Dallas Theological Seminary",
    work: "ค้นพบต้นฉบับใหม่ กว่า 5,800 ฉบับ",
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

export default function BiblicalCodices() {
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
        {/* Α Ω พื้นหลัง */}
        <div className="absolute inset-0 opacity-10 pointer-events-none select-none flex items-center justify-center gap-16">
          <span className="font-cinzel text-[16rem] text-gold leading-none">
            Α&nbsp;Ω
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
            <span className="text-gold">Biblical Codices</span>
          </nav>

          <div className="text-center">
            <p className="font-cinzel text-2xl text-gold/60 tracking-[0.25em] mb-3">
              ΒΙΒΛΙΑ
            </p>
            <p className="font-cinzel text-xs tracking-[0.4em] uppercase text-gold-dark mb-4">
              The Archive
            </p>
            <h1 className="font-cinzel text-4xl md:text-6xl mb-5 leading-tight text-shimmer">
              Biblical Codices
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
              Ancient Manuscripts of the Bible
            </h2>
            <p className="font-pridi text-lg md:text-xl text-paper/80 max-w-2xl mx-auto leading-relaxed mb-3">
              ต้นฉบับคัมภีร์ไบเบิลโบราณที่สำคัญ ศึกษาเปรียบเทียบโดยนักวิชาการชั้นนำ
            </p>
            <p className="font-cinzel text-sm text-gold/70">
              2nd Century CE onwards | Greek &amp; Hebrew | 5,800+ Manuscripts
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
                      <a
                        href={m.exploreUrl || m.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block h-full"
                      >
                        <ManuscriptImage m={m} />
                      </a>
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
                    {/* ลายน้ำ siglum ของต้นฉบับ */}
                    <div className="absolute top-1 right-3 font-cinzel text-6xl text-gold/[0.07] leading-none whitespace-nowrap select-none pointer-events-none">
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
                      {m.textType && (
                        <div className="flex gap-2">
                          <dt className="text-gold/70 shrink-0 w-16">ตระกูล</dt>
                          <dd className="text-paper/80">{m.textType}</dd>
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
                      {m.detailPath ? (
                        <Link
                          href={m.detailPath}
                          className="flex-1 bg-gradient-to-r from-gold-dark via-gold to-gold-light hover:from-gold hover:to-gold-light text-ink font-pridi font-semibold text-sm text-center py-2.5 px-4 rounded-btn shadow-glow-sm hover:shadow-glow transition-all duration-300 flex items-center justify-center gap-2"
                        >
                          <span>สำรวจต้นฉบับ</span>
                          <span className="transition-transform duration-300 group-hover:translate-x-1">
                            →
                          </span>
                        </Link>
                      ) : (
                        <a
                          href={m.exploreUrl || m.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-gradient-to-r from-gold-dark via-gold to-gold-light hover:from-gold hover:to-gold-light text-ink font-pridi font-semibold text-sm text-center py-2.5 px-4 rounded-btn shadow-glow-sm hover:shadow-glow transition-all duration-300 flex items-center justify-center gap-2"
                        >
                          <span>สำรวจต้นฉบับดิจิทัล</span>
                          <span className="transition-transform duration-300 group-hover:translate-x-1">
                            ↗
                          </span>
                        </a>
                      )}
                      <a
                        href={m.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 border border-gold/40 text-gold hover:bg-gold/10 hover:border-gold/70 font-pridi text-sm text-center py-2.5 px-4 rounded-btn transition-all duration-300"
                      >
                        แหล่งต้นฉบับ ↗
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
                href: "/archive/other-writings",
                label: "ศึกษา Other Writings",
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
              นักวิชาการด้านต้นฉบับพระคัมภีร์
            </h2>
            <div className="mx-auto h-px w-20 bg-gold/40" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                <p className="font-pridi text-paper/60 text-xs leading-relaxed">
                  {s.work}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* หมายเหตุทางวิชาการ */}
      <section className="py-16 bg-ink">
        <div className="max-w-4xl mx-auto px-gutter">

          <div className="flex items-center gap-4 mb-10">
            <div className="flex-1 h-px bg-gold/30"></div>
            <h3 className="font-cinzel text-xl md:text-2xl text-gold text-center tracking-wide leading-snug px-2">
              หมายเหตุทางวิชาการ: Textual Variants ในต้นฉบับพันธสัญญาใหม่
            </h3>
            <div className="flex-1 h-px bg-gold/30"></div>
          </div>

          <div className="card-glass p-8 mb-8 border-l-4 border-gold">
            <h4 className="font-cinzel text-gold text-lg font-semibold mb-4 tracking-wide">
              400,000 Textual Variants — ข้อเท็จจริงที่นักวิชาการยืนยัน
            </h4>
            <div className="space-y-4 font-pridi text-paper-white/90 leading-relaxed">
              <p>
                Dr. Daniel B. Wallace ผู้อำนวยการ Center for the Study of New Testament Manuscripts (CSNTM)
                และศาสตราจารย์ด้าน Greek New Testament ที่ Dallas Theological Seminary
                ระบุในการบรรยายวิชาการว่า
                <strong className="text-gold"> "ประมาณการที่ดีที่สุดในปัจจุบันคือมี Textual Variants
                ราว 400,000 จุด ในต้นฉบับพันธสัญญาใหม่"</strong>
                ซึ่งมากกว่าจำนวนคำในพันธสัญญาใหม่ทั้งเล่มที่มีเพียง 140,000 คำ
              </p>
              <p>
                ตัวเลขดังกล่าวได้รับการยืนยันโดย Peter J. Gurry ซึ่งประมาณการไว้สูงกว่านั้นที่
                ราว 500,000 จุด แม้เขาจะยอมรับว่าตัวเลขของตนสูงกว่าการประมาณการก่อนหน้าทั้งหมด
              </p>
              <div className="overflow-x-auto mt-6">
                <table className="w-full font-pridi text-sm border-collapse">
                  <thead>
                    <tr className="bg-gold/20">
                      <th className="p-3 text-left font-cinzel text-gold">ประเภทของ Variant</th>
                      <th className="p-3 text-left font-cinzel text-gold">สัดส่วน (โดยประมาณ)</th>
                      <th className="p-3 text-left font-cinzel text-gold">ผลกระทบ</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["การสะกดคำ / Orthographic", "~75%", "ไม่กระทบความหมาย"],
                      ["ลำดับคำ / Word Order", "~15%", "แทบไม่กระทบความหมาย"],
                      ["การเพิ่ม/ลดคำ / Addition-Omission", "~9%", "กระทบบางส่วน"],
                      ["Meaningful & Viable Variants", "<1%", "นักวิชาการยังถกเถียง"],
                    ].map(([type, pct, impact]) => (
                      <tr key={type} className="border-b border-gold/10 hover:bg-gold/5">
                        <td className="p-3 text-paper-white/80">{type}</td>
                        <td className="p-3 text-gold font-semibold">{pct}</td>
                        <td className="p-3 text-paper-white/60">{impact}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="card-glass p-6 border-l-4 border-gold">
              <h4 className="font-cinzel text-gold text-sm font-semibold mb-3 tracking-wide">
                ข้อจำกัดของ Textual Criticism — มุมมองของนักวิชาการ
              </h4>

              <div className="space-y-4 font-pridi text-paper-white/80 text-sm leading-relaxed">

                <div className="bg-paper/5 border border-gold/10 rounded-lg p-4">
                  <p className="font-cinzel text-gold/80 text-xs font-semibold mb-2 tracking-wide">
                    Daniel B. Wallace — CSNTM
                  </p>
                  <p className="leading-relaxed">
                    Wallace อธิบายว่าจำนวน Variants ที่มากเกิดจากจำนวนต้นฉบับที่มีมาก
                    ไม่ใช่สัญญาณของความไม่น่าเชื่อถือ
                    <strong className="text-gold"> "หากมีต้นฉบับเพียงฉบับเดียว ก็จะไม่มี Variants เลย"</strong>
                    (อ้างจาก Richard Bentley) และชี้ว่า Variants ที่
                    มีนัยสำคัญและเป็นไปได้จริงมีน้อยกว่า 1% เท่านั้น
                  </p>
                  <p className="font-cinzel text-gold/50 text-xs mt-2">
                    D.B. Wallace, NT605-03, Biblical Training Institute
                  </p>
                </div>

                <div className="bg-paper/5 border border-gold/10 rounded-lg p-4">
                  <p className="font-cinzel text-gold/80 text-xs font-semibold mb-2 tracking-wide">
                    Bruce M. Metzger — ข้อจำกัดในการเข้าถึงช่วงการส่งต่อด้วยปากเปล่า
                  </p>
                  <p className="leading-relaxed">
                    Metzger ยอมรับในหนังสือ
                    <em> The Text of the New Testament</em> (บทที่ 8)
                    ว่านักวิชาการ Textual Criticism เผชิญกับ
                    <strong className="text-gold"> "ความซับซ้อนในการสืบหาข้อความต้นฉบับ (Complications in Establishing the Original Text)"</strong>
                    เนื่องจากในช่วงแรกก่อนที่ข้อความจะถูกบันทึกเป็นลายลักษณ์อักษร
                    มีการส่งต่อด้วยปากเปล่า (oral transmission) ซึ่งไม่มีหลักฐานทางกายภาพหลงเหลืออยู่
                    ทำให้นักวิชาการไม่สามารถตรวจสอบหรือตัดสินได้ว่า
                    ข้อความที่บันทึกในต้นฉบับที่เก่าแก่ที่สุดนั้นสอดคล้องกับสิ่งที่ถูกส่งต่อในช่วงปากเปล่า
                    หรือมีการเปลี่ยนแปลงไปก่อนที่จะมีการบันทึกหรือไม่
                  </p>
                  <p className="font-cinzel text-gold/50 text-xs mt-2">
                    B.M. Metzger & B.D. Ehrman, <em>The Text of the New Testament</em>, 4th ed.,
                    Oxford University Press, 2005, Chapter 8, Section I:
                    "Complications in Establishing the Original Text", p. 272
                  </p>
                </div>

                <div className="bg-paper/5 border border-gold/10 rounded-lg p-4">
                  <p className="font-cinzel text-gold/80 text-xs font-semibold mb-2 tracking-wide">
                    F.F. Bruce — การส่งต่อในยุคแรก
                  </p>
                  <p className="leading-relaxed">
                    F.F. Bruce ใน <em>The New Testament Documents: Are They Reliable?</em>
                    (InterVarsity Press, 1943) ยอมรับว่า
                    ต้นฉบับพันธสัญญาใหม่ฉบับแรกสุดที่ค้นพบ (Papyrus P52)
                    มีอายุห่างจากเหตุการณ์จริงอย่างน้อย 50-100 ปี
                    ซึ่งเป็นช่วงเวลาที่ไม่มีบันทึกทางกายภาพใดๆ
                    <strong className="text-gold"> ทำให้ไม่สามารถยืนยันได้ว่าข้อความในช่วงนั้นเป็นอย่างไร</strong>
                    แม้ว่าเขาจะเชื่อในความน่าเชื่อถือของพันธสัญญาใหม่โดยรวมก็ตาม
                  </p>
                  <p className="font-cinzel text-gold/50 text-xs mt-2">
                    F.F. Bruce, <em>The New Testament Documents: Are They Reliable?</em>,
                    6th ed., InterVarsity Press, 1981, pp. 16-18
                  </p>
                </div>

                <div className="bg-paper/5 border border-gold/10 rounded-lg p-4">
                  <p className="font-cinzel text-gold/80 text-xs font-semibold mb-2 tracking-wide">
                    Kurt & Barbara Aland — ปัญหาของต้นฉบับยุคแรก
                  </p>
                  <p className="leading-relaxed">
                    Kurt Aland ผู้จัดทำ Nestle-Aland Greek New Testament
                    ซึ่งเป็นฉบับมาตรฐานที่นักวิชาการทั่วโลกใช้อยู่
                    ระบุใน <em>The Text of the New Testament</em> (Eerdmans, 1987) ว่า
                    <strong className="text-gold"> ต้นฉบับจากศตวรรษที่ 2 มีน้อยมาก</strong>
                    ทำให้ช่วงเวลาระหว่าง autograph (ต้นฉบับดั้งเดิม) และต้นฉบับที่เก่าแก่ที่สุดที่มีอยู่
                    ยังคงเป็น "dark period" ที่นักวิชาการไม่สามารถสืบสาวได้อย่างสมบูรณ์
                  </p>
                  <p className="font-cinzel text-gold/50 text-xs mt-2">
                    K. Aland & B. Aland, <em>The Text of the New Testament</em>,
                    2nd ed., Eerdmans, 1989, pp. 59-61
                  </p>
                </div>

              </div>
            </div>

            <div className="card-glass p-6 border-l-4 border-gold/40">
              <h4 className="font-cinzel text-gold text-sm font-semibold mb-3 tracking-wide">
                มุมมองของ Metzger — Intentional Changes ในกระบวนการคัดลอก
              </h4>
              <p className="font-pridi text-paper-white/80 text-sm leading-relaxed mb-4">
                Bruce M. Metzger ใน
                <em> The Text of the New Testament: Its Transmission, Corruption, and Restoration</em>
                บทที่ 7 "The Causes of Error in the Transmission of the Text of the New Testament"
                แบ่งการเปลี่ยนแปลงออกเป็น 2 ประเภทหลัก:
              </p>

              <div className="space-y-3 mb-4">
                <div className="bg-paper/5 border border-gold/10 rounded-lg p-4">
                  <p className="font-cinzel text-gold/80 text-xs font-semibold mb-2 tracking-wide">
                    I. Unintentional Changes (หน้า 251-258)
                  </p>
                  <ul className="font-pridi text-paper-white/70 text-xs space-y-1 leading-relaxed">
                    <li>• Errors from Faulty Eyesight — ผู้คัดลอกอ่านผิด</li>
                    <li>• Errors from Faulty Hearing — ผู้คัดลอกฟังผิดขณะถูกอ่านออกเสียง</li>
                    <li>• Errors of the Mind — ความจำผิดพลาด</li>
                    <li>• Errors of Judgment — การตัดสินใจผิดพลาด</li>
                  </ul>
                </div>

                <div className="bg-red-950/30 border border-red-800/30 rounded-lg p-4">
                  <p className="font-cinzel text-red-400 text-xs font-semibold mb-2 tracking-wide">
                    II. Intentional Changes (หน้า 259-268) — การแก้ไขคัมภีร์โดยเจตนา
                  </p>
                  <ul className="font-pridi text-paper-white/70 text-xs space-y-1 leading-relaxed">
                    <li>• Changes Involving Spelling and Grammar (หน้า 261)</li>
                    <li>• Harmonistic Corruptions (หน้า 262) — ปรับให้สอดคล้องกับข้อความอื่น</li>
                    <li>• Addition of Natural Complements and Similar Adjuncts (หน้า 263)</li>
                    <li>• Clearing Up Historical and Geographical Difficulties (หน้า 264)</li>
                    <li>• Conflation of Readings (หน้า 265)</li>
                    <li className="text-red-300 font-semibold">
                      • <strong>Alterations Made Because of Doctrinal Considerations (หน้า 265)</strong>
                      — การแก้ไขเพื่อให้สอดคล้องกับคำสอนเทววิทยา
                    </li>
                    <li>• Addition of Miscellaneous Details (หน้า 268)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-paper/5 border border-gold/20 rounded-lg p-4 mb-3">
                <p className="font-cinzel text-gold text-xs font-semibold mb-2 tracking-wide">
                  Alterations for Doctrinal Considerations (หน้า 265) — ประเด็นสำคัญ
                </p>
                <p className="font-pridi text-paper-white/80 text-xs leading-relaxed">
                  Metzger อธิบายว่าผู้คัดลอกบางคน
                  <strong className="text-gold"> แก้ไขข้อความโดยเจตนาเพื่อให้สอดคล้องกับหลักเทววิทยา</strong>
                  ที่ตนยึดถือหรือเพื่อโต้แย้งคำสอนที่ถือว่าเป็นนอกรีต (heresy)
                  เช่น การเพิ่มหรือเปลี่ยนคำที่เกี่ยวกับธรรมชาติของพระเยซู
                  เพื่อสนับสนุนหรือต่อต้านมุมมอง Christological ของแต่ละฝ่าย
                  ซึ่งเป็นหัวข้อที่ Bart Ehrman ขยายความต่อในหนังสือ
                  <em> The Orthodox Corruption of Scripture</em> (Oxford University Press, 1993)
                  โดยระบุว่า Scribes บางคน "corrupted" ข้อความเพื่อปกป้องความเชื่อออร์โธด็อกซ์
                </p>
              </div>

              <p className="font-cinzel text-gold/50 text-xs mt-2">
                B.M. Metzger, <em>The Text of the New Testament</em>, 4th ed. (with B.D. Ehrman),
                Oxford University Press, 2005, Chapter 7, pp. 250-271
              </p>
            </div>
          </div>

          <div
            className="border-2 border-gold/30 rounded-card p-6 mb-8"
            style={{ background: "#3E2723" }}
          >
            <p className="font-cinzel text-gold text-sm font-semibold mb-3 tracking-wide">
              ** บริบทเปรียบเทียบ
            </p>
            <p className="font-pridi text-paper-white leading-relaxed">
              เมื่อเปรียบเทียบกับอัลกุรอาน ซึ่งมีต้นฉบับที่สอดคล้องกันทั่วโลกโดยไม่มี
              Textual Variants ที่มีนัยสำคัญ เนื่องจากได้รับการรักษาผ่านการท่องจำในระดับ Mutawātir
              ควบคู่กับการบันทึกเป็นลายลักษณ์อักษรตั้งแต่ยุคแรก
              การมีอยู่ของ 400,000 Variants ในพันธสัญญาใหม่จึงเป็นประเด็นสำคัญทางวิชาการ
              ที่นักวิชาการทั้งสองฝ่ายยังคงศึกษาและถกเถียงกันต่อไป
              ตามที่ Wallace กล่าวไว้ว่า
              <strong className="text-gold"> "ไม่มีต้นฉบับสองฉบับใดที่เหมือนกันทุกประการ"</strong>
              (NT605-03, Biblical Training Institute)
            </p>
          </div>

          <div className="border-t border-gold/20 pt-6">
            <p className="font-cinzel text-gold/60 text-xs mb-3 tracking-widest">แหล่งอ้างอิง</p>
            <ul className="font-pridi text-paper-white/50 text-xs space-y-1 leading-relaxed">
              <li>[1] D.B. Wallace, "The Number of Variants", NT605-03, Biblical Training Institute, www.biblicaltraining.org/learn/institute/nt605-textual-criticism/nt605-03-the-number-of-variants</li>
              <li>[2] D.B. Wallace, "The Number of Textual Variants: An Evangelical Miscalculation", danielbwallace.com, September 9, 2013</li>
              <li>[3] B.M. Metzger &amp; B.D. Ehrman, <em>The Text of the New Testament</em>, 4th ed., Oxford University Press, 2005, Chapter 7: "The Causes of Error in the Transmission of the Text of the New Testament", pp. 250-271.</li>
              <li>[4] B.D. Ehrman, <em>The Orthodox Corruption of Scripture</em>, Oxford University Press, 1993.</li>
              <li>[5] P.J. Gurry &amp; T.J. Wasserman, <em>A New Approach to Textual Criticism</em>, Society of Biblical Literature, 2017.</li>
              <li>[6] Wikipedia, "Textual variants in the New Testament", en.wikipedia.org/wiki/Textual_variants_in_the_New_Testament</li>
            </ul>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
