"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FaithJourneyMap from "../../components/FaithJourneyMap";

const islamicChronicle = [
  {
    chapter: "I",
    era: "วะฮีย์และการสถาปนาประชาคม",
    year: "ค.ศ. 610–632",
    city: "MAKKAH · MADINAH",
    th: "มักกะฮ์ · มะดีนะฮ์",
    arabic: "مكة",
    narrative:
      "ณ ถ้ำฮิรออ์เหนือนครมักกะฮ์ ท่านนบีมุฮัมมัด (ซ.ล.) ได้รับการประทานวะฮีย์ครั้งแรกในปี ค.ศ. 610 อันเป็นจุดกำเนิดของอิสลาม หลังการเผยแผ่ท่ามกลางการต่อต้านของชาวกุเรชกว่าสิบปี ท่านและเหล่าเศาะฮาบะฮ์อพยพ (ฮิจเราะฮ์) สู่มะดีนะฮ์ในปี 622 — ปีที่ต่อมากลายเป็นจุดเริ่มต้นของปฏิทินฮิจเราะฮ์ ที่มะดีนะฮ์ท่านวางรากฐานประชาคมรัฐอิสลามแห่งแรก ผ่านสมรภูมิบะดัร อุฮุด และค็อนดัก สนธิสัญญาฮุดัยบียะฮ์เปิดทางการเผยแผ่โดยสันติ จนถึงการพิชิตมักกะฮ์โดยไม่มีการนองเลือดในปี 630 และหัจญ์อำลาในปี 632 ก่อนท่านจะเสียชีวิตที่มะดีนะฮ์ สิ้นสุดยุคแห่งวะฮีย์",
    events: [
      "ค.ศ. 610 — วะฮีย์ครั้งแรก ณ ถ้ำฮิรออ์ (ซีเราะฮ์ อิบนุ ฮิชาม)",
      "ค.ศ. 622 — ฮิจเราะฮ์สู่มะดีนะฮ์ จุดเริ่มต้นปฏิทินฮิจเราะฮ์",
      "ค.ศ. 624 — ยุทธการบะดัร ชัยชนะครั้งแรกของมุสลิม",
      "ค.ศ. 628 — สนธิสัญญาฮุดัยบียะฮ์ เปิดทางเผยแผ่โดยสันติ",
      "ค.ศ. 630 — พิชิตมักกะฮ์โดยสันติ (ฟัตฮุมักกะฮ์)",
      "ค.ศ. 632 — หัจญ์อำลา และการเสียชีวิตที่มะดีนะฮ์",
    ],
  },
  {
    chapter: "II",
    era: "เคาะลีฟะฮ์คนแรกและการรวบรวมอัลกุรอาน",
    year: "ค.ศ. 632–634",
    city: "MADINAH",
    th: "มะดีนะฮ์",
    arabic: "الصِّدِّيق",
    narrative:
      "หลังการเสียชีวิตของท่านนบี (ซ.ล.) อบูบักร อัศ-ศิดดีก ได้รับเลือกเป็นเคาะลีฟะฮ์คนแรก ณ สะกีฟะฮ์ ท่านเผชิญสงครามริดดะฮ์ทันที เมื่อหลายเผ่าละทิ้งศาสนาหรือปฏิเสธจ่ายซะกาต ยุทธการบุซาคะฮ์และยะมามะฮ์ยุติการก่อกบฏ แต่การสูญเสียฮาฟิซผู้ท่องจำอัลกุรอานจำนวนมากที่ยะมามะฮ์ นำไปสู่จุดเปลี่ยนสำคัญ: การสั่งรวบรวมอัลกุรอานเป็นเล่มเดียว (ศุหุฟ) โดยเซด อิบนุ ษาบิต จากนั้นคอลิด อิบนุลวะลีดเปิดแนวรบอิรักที่ฮีเราะฮ์ และชัยชนะที่อัจนาดัยน์เปิดทางกองทัพมุสลิมสู่แผ่นดินชาม ก่อนอบูบักรเสียชีวิตในปี 634 มอบหมายให้อุมัรสืบทอดตำแหน่ง",
    events: [
      "ค.ศ. 632 — ได้รับเลือกเป็นเคาะลีฟะฮ์คนแรก ณ สะกีฟะฮ์",
      "ค.ศ. 632–633 — สงครามริดดะฮ์: ยุทธการบุซาคะฮ์และยะมามะฮ์",
      "ค.ศ. 633 — สั่งรวบรวมอัลกุรอานเป็นเล่มเดียว (ศุหุฟ)",
      "ค.ศ. 633 — คอลิด อิบนุลวะลีดยึดฮีเราะฮ์ เปิดแนวรบอิรัก",
      "ค.ศ. 634 — ชัยชนะที่อัจนาดัยน์ เปิดทางสู่แผ่นดินชาม",
    ],
  },
  {
    chapter: "III",
    era: "การพิชิตเลแวนต์และเปอร์เซีย",
    year: "ค.ศ. 634–642",
    city: "JERUSALEM",
    th: "เยรูซาเล็ม",
    arabic: "القُدس",
    narrative:
      "อุมัร อิบนุลค็อฏฏอบ เคาะลีฟะฮ์คนที่สอง นำการขยายอาณาจักรครั้งใหญ่ที่สุดของยุครอชิดีน ทางตะวันตก ชัยชนะที่ยุทธการยัรมูกเปิดดามัสกัสในปี 636 และในปี 637 อุมัรเดินทางมารับมอบเยรูซาเล็มด้วยสันติด้วยตนเอง ทางตะวันออก ชัยชนะที่ยุทธการก็อดิซียะฮ์นำสู่การพิชิตซีเทซิฟอน เมืองหลวงของจักรวรรดิซาสานิดในปี 637 กองทัพก่อตั้งเมืองกูฟะฮ์เป็นฐานปกครองอิรัก และหลังยุทธการนะฮาวันด์ในปี 642 ที่ราบสูงเปอร์เซียก็เปิดกว้างสู่การพิชิตถึงร็อยและอิศฟะฮาน",
    events: [
      "ค.ศ. 634 — อุมัรขึ้นเป็นเคาะลีฟะฮ์คนที่สอง",
      "ค.ศ. 636 — ยุทธการยัรมูก พิชิตดามัสกัส",
      "ค.ศ. 637 — อุมัรรับมอบเยรูซาเล็มด้วยสันติด้วยตนเอง",
      "ค.ศ. 637 — พิชิตซีเทซิฟอน เมืองหลวงซาสานิด",
      "ค.ศ. 642 — ยุทธการนะฮาวันด์ เปอร์เซียเปิดสู่การพิชิต",
    ],
  },
  {
    chapter: "IV",
    era: "มุศฮัฟมาตรฐานและเอกภาพของอัลกุรอาน",
    year: "ค.ศ. 644–656",
    city: "MADINAH",
    th: "มะดีนะฮ์",
    arabic: "المُصْحَف",
    narrative:
      "อุษมาน อิบนุ อัฟฟาน เคาะลีฟะฮ์คนที่สาม สานต่อการขยายอาณาจักรและจัดระเบียบการปกครอง เมื่อความแตกต่างของการอ่านอัลกุรอานเริ่มปรากฏในแคว้นต่าง ๆ ท่านแต่งตั้งคณะของเซด อิบนุ ษาบิต ชำระและคัดลอกอัลกุรอานเป็นมุศฮัฟมาตรฐาน แล้วส่งสำเนาไปยังกูฟะฮ์ บัศเราะฮ์ ดามัสกัส และมักกะฮ์ สร้างเอกภาพของข้อความอัลกุรอานทั่วอาณาจักร — มรดกที่ยังคงอยู่ถึงปัจจุบัน ปลายสมัยเกิดความไม่พอใจในหลายหัวเมืองจนท่านถูกสังหารในบ้านพักขณะอ่านอัลกุรอานในปี 656 อันเป็นจุดเริ่มต้นของฟิตนะฮ์ครั้งแรก",
    events: [
      "ค.ศ. 644 — ขึ้นเป็นเคาะลีฟะฮ์คนที่สามต่อจากอุมัร",
      "ค.ศ. 646 — ยึดอเล็กซานเดรียคืนจากไบแซนไทน์",
      "ค.ศ. 650 — ชำระและคัดลอกอัลกุรอานเป็นมุศฮัฟมาตรฐาน",
      "ค.ศ. 653 — ส่งมุศฮัฟมาตรฐานไปยังแคว้นสำคัญ",
      "ค.ศ. 656 — ถูกสังหาร จุดเริ่มต้นฟิตนะฮ์ครั้งแรก",
    ],
  },
  {
    chapter: "V",
    era: "ยุคสุดท้ายของเคาะลีฟะฮ์รอชิดีน",
    year: "ค.ศ. 656–661",
    city: "KUFA",
    th: "กูฟะฮ์",
    arabic: "الكوفة",
    narrative:
      "อาลี อิบนุ อบีฏอลิบ เคาะลีฟะฮ์คนที่สี่ ขึ้นสู่ตำแหน่งท่ามกลางวิกฤตหลังการสังหารอุษมาน ท่านเผชิญความขัดแย้งภายในประชาคมเป็นครั้งแรก — ยุทธการญะมัล (ยุทธการอูฐ) ใกล้บัศเราะฮ์ และยุทธการศิฟฟีนริมแม่น้ำยูเฟรทีสกับกองทัพของมุอาวิยะฮ์ที่จบลงด้วยการเจรจาอนุญาโตตุลาการ ท่านย้ายศูนย์กลางการปกครองจากมะดีนะฮ์มายังกูฟะฮ์ และปราบกลุ่มเคาะวาริจที่แยกตัวออกไปที่นะฮ์เราะวาน ก่อนถูกสังหารขณะนำละหมาดที่มัสยิดกูฟะฮ์ในปี 661 ปิดฉากยุคเคาะลีฟะฮ์รอชิดีนทั้งสี่",
    events: [
      "ค.ศ. 656 — ขึ้นเป็นเคาะลีฟะฮ์คนที่สี่ท่ามกลางวิกฤต",
      "ค.ศ. 656 — ยุทธการญะมัล (ยุทธการอูฐ) ใกล้บัศเราะฮ์",
      "ค.ศ. 657 — ยุทธการศิฟฟีนกับกองทัพมุอาวิยะฮ์",
      "ค.ศ. 658 — ยุทธการนะฮ์เราะวาน ปราบกลุ่มเคาะวาริจ",
      "ค.ศ. 661 — ถูกสังหารที่กูฟะฮ์ สิ้นสุดยุครอชิดีน",
    ],
  },
  {
    chapter: "VI",
    era: "จากอียิปต์สู่คาบสมุทรไอบีเรีย",
    year: "ค.ศ. 641–712",
    city: "CÓRDOBA",
    th: "กอร์โดบา",
    arabic: "الأندلس",
    narrative:
      "หลังยุครอชิดีน ราชวงศ์อุมัยยะฮ์นำการขยายไปทางตะวันตกไกลออกไป กองทัพพิชิตอียิปต์และก่อตั้งฟุสฏอฏ ต้นกำเนิดของกรุงไคโร ในปี 670 อุกบะฮ์ อิบนุ นาฟิอ์ ก่อตั้งก็อยรอวานเป็นฐานในแอฟริกาเหนือ การพิชิตรุดหน้าถึงชายฝั่งแอตแลนติกที่แทนเจียร์ และในปี 711 ตอริก อิบนุ ซิยาด ข้ามช่องแคบเริ่มพิชิตอัลอันดะลุส ยึดกอร์โดบาและโทเลโด เมืองหลวงเดิมของอาณาจักรวิซิกอธ ภายในหนึ่งศตวรรษ อิสลามแผ่จากคาบสมุทรอาหรับถึงขอบมหาสมุทรแอตแลนติก",
    events: [
      "ค.ศ. 641 — พิชิตอียิปต์ ก่อตั้งฟุสฏอฏ (ต้นกำเนิดไคโร)",
      "ค.ศ. 670 — อุกบะฮ์ อิบนุ นาฟิอ์ ก่อตั้งก็อยรอวาน",
      "ค.ศ. 709 — พิชิตชายฝั่งแอตแลนติกที่แทนเจียร์",
      "ค.ศ. 711 — ตอริก อิบนุ ซิยาด ข้ามช่องแคบสู่อัลอันดะลุส",
      "ค.ศ. 712 — ยึดโทเลโด เมืองหลวงเดิมของวิซิกอธ",
    ],
  },
  {
    chapter: "VII",
    era: "ทรานส็อกเซียนาและลุ่มแม่น้ำสินธุ",
    year: "ค.ศ. 705–715",
    city: "SAMARKAND",
    th: "ซะมัรก็อนด์",
    arabic: "سمرقند",
    narrative:
      "ในเวลาเดียวกันทางตะวันออกสุด กุตัยบะฮ์ อิบนุ มุสลิม ใช้มัรวุเป็นฐานบุกทรานส็อกเซียนา พิชิตบุคอรอและซะมัรก็อนด์ ศูนย์กลางการค้าและวิชาการบนเส้นทางสายไหม ก่อนขยายถึงหุบเขาฟัรฆอนะฮ์ สุดเขตแดนด้านตะวันออก พร้อมกันนั้นในปี 711 มุฮัมมัด อิบนุ กอซิม ยกพลขึ้นบกยึดเมืองท่าดัยบุลและพิชิตมุลตาน สถาปนาการปกครองในลุ่มแม่น้ำสินธุ — จุดที่อิสลามหยั่งรากในอนุทวีปอินเดียเป็นครั้งแรก หนึ่งศตวรรษหลังฮิจเราะฮ์ อาณาจักรทอดยาวจากคาบสมุทรไอบีเรียถึงลุ่มแม่น้ำสินธุ",
    events: [
      "ค.ศ. 705 — กุตัยบะฮ์ใช้มัรวุเป็นฐานบุกทรานส็อกเซียนา",
      "ค.ศ. 709–712 — พิชิตบุคอรอและซะมัรก็อนด์บนเส้นทางสายไหม",
      "ค.ศ. 711 — มุฮัมมัด อิบนุ กอซิม ยึดดัยบุลและมุลตาน",
      "ค.ศ. 715 — ขยายถึงหุบเขาฟัรฆอนะฮ์ สุดเขตแดนตะวันออก",
    ],
  },
];

const christianChronicle = [
  {
    chapter: "I",
    era: "การบังเกิดตามคำพยากรณ์",
    year: "~4 ปีก่อน ค.ศ.",
    city: "BETHLEHEM",
    th: "เบธเลเฮม",
    greek: "Βηθλεέμ",
    narrative:
      "ณ เบธเลเฮม เมืองเล็ก ๆ ของกษัตริย์ดาวิดในแคว้นยูเดีย พระเยซูประสูติในรัชสมัยจักรพรรดิเอากุสตุสและกษัตริย์เฮโรดมหาราช ตามที่ผู้เผยพระวจนะมีคาห์กล่าวไว้ล่วงหน้าหลายศตวรรษว่าผู้ปกครองอิสราเอลจะออกมาจากเมืองนี้ (มีคาห์ 5:2) พระวรสารมัทธิวบันทึกการมาเยือนของโหราจารย์จากตะวันออก ส่วนลูกาบันทึกรางหญ้าและคนเลี้ยงแกะ หลังลี้ภัยไปอียิปต์ช่วงสั้น ๆ ครอบครัวกลับมาตั้งรกรากที่นาซาเร็ธในแคว้นกาลิลี ที่ซึ่งพระเยซูเติบโตขึ้นอย่างเงียบ ๆ ในครอบครัวช่างไม้",
    events: [
      "~4 ปีก่อน ค.ศ. — ประสูติที่เบธเลเฮมตามคำพยากรณ์ (มีคาห์ 5:2; มัทธิว 2:1; ลูกา 2:4–7)",
      "การลี้ภัยสู่อียิปต์หนีเฮโรด (มัทธิว 2:13–15)",
      "เติบโตที่นาซาเร็ธ แคว้นกาลิลี (มัทธิว 2:23; ลูกา 2:39–40)",
      "ค.ศ. ~8 — เยาว์วัยสนทนาธรรมในพระวิหาร (ลูกา 2:41–52)",
    ],
  },
  {
    chapter: "II",
    era: "พันธกิจแห่งกาลิลี",
    year: "ค.ศ. 27–30",
    city: "CAPERNAUM",
    th: "คาเปอรนาอุม",
    greek: "Καφαρναούμ",
    narrative:
      "หลังรับบัพติศมาจากยอห์นที่แม่น้ำจอร์แดนและการทดลองในถิ่นทุรกันดาร พระเยซูทรงตั้งคาเปอรนาอุม เมืองประมงริมทะเลสาบกาลิลี เป็นฐานพันธกิจ จนพระวรสารเรียกที่นี่ว่า 'เมืองของพระองค์' (มัทธิว 9:1) ณ ริมฝั่งทะเลสาบแห่งนี้ ทรงเรียกชาวประมงอย่างเปโตร อันดรูว์ ยากอบ และยอห์นให้เป็น 'ผู้หาคน' ทรงสั่งสอนด้วยคำอุปมา รักษาคนป่วย และประกาศแผ่นดินของพระเจ้าไปทั่วกาลิลี สามปีแห่งพันธกิจนี้คือรากฐานคำสอนทั้งหมดของคริสต์ศาสนา",
    events: [
      "ค.ศ. ~27 — รับบัพติศมาจากยอห์นที่แม่น้ำจอร์แดน (มาระโก 1:9–11)",
      "ตั้งคาเปอรนาอุมเป็นฐานพันธกิจ (มัทธิว 4:13; 9:1)",
      "ทรงเรียกและแต่งตั้งอัครสาวกสิบสองคน (มาระโก 3:13–19)",
      "คำเทศนาบนภูเขา — หัวใจคำสอนของพระเยซู (มัทธิว 5–7)",
    ],
  },
  {
    chapter: "III",
    era: "กางเขน การฟื้นคืนพระชนม์ และเพนเทคอสต์",
    year: "ค.ศ. 30–33",
    city: "JERUSALEM",
    th: "เยรูซาเล็ม",
    greek: "Ἱερουσαλήμ",
    narrative:
      "สัปดาห์สุดท้ายในเยรูซาเล็มคือจุดศูนย์กลางของพระวรสารทั้งสี่ — การเสด็จเข้ากรุง อาหารมื้อสุดท้าย การถูกจับกุม และการตรึงกางเขนภายใต้ผู้ว่าราชการปอนทิอัส ปีลาต แต่เรื่องราวไม่จบที่อุโมงค์ฝังศพ ผู้เชื่อยืนยันว่าพระองค์ทรงฟื้นคืนพระชนม์ในวันที่สามและทรงปรากฏแก่พยานจำนวนมาก ห้าสิบวันต่อมาในวันเพนเทคอสต์ พระวิญญาณบริสุทธิ์เสด็จลงเหนือเหล่าสาวก คริสตจักรแห่งแรกถือกำเนิดขึ้นที่เยรูซาเล็มพร้อมผู้เชื่อราวสามพันคนในวันเดียว",
    events: [
      "ค.ศ. 30/33 — ถูกตรึงกางเขนสมัยปอนทิอัส ปีลาต (มาระโก 15; ลูกา 23)",
      "วันที่สาม — การฟื้นคืนพระชนม์และการปรากฏแก่พยาน (ลูกา 24; 1 โครินธ์ 15:3–8)",
      "เพนเทคอสต์ — กำเนิดคริสตจักร ผู้เชื่อ ~3,000 คน (กิจการ 2:1–41)",
      "ค.ศ. ~34 — สเทเฟนพลีชีพคนแรก ผู้เชื่อกระจัดกระจายนำข่าวประเสริฐออกไป (กิจการ 7–8)",
    ],
  },
  {
    chapter: "IV",
    era: "แสงสว่างบนถนนสู่ดามัสกัส",
    year: "ค.ศ. ~34",
    city: "DAMASCUS",
    th: "ดามัสกัส",
    greek: "Δαμασκός",
    narrative:
      "เซาโลแห่งทาร์ซัส ฟาริสีหนุ่มผู้ข่มเหงคริสตจักรอย่างแข็งขัน เดินทางสู่ดามัสกัสพร้อมหมายจับผู้เชื่อ แต่ระหว่างทาง แสงจากฟ้าล้อมรอบเขาและเสียงหนึ่งถามว่า 'เซาโล เซาโล เจ้าข่มเหงเราทำไม' (กิจการ 9:4) การกลับใจครั้งนี้เปลี่ยนผู้ข่มเหงให้กลายเป็นเปาโล อัครทูตแห่งชนต่างชาติ ผู้จะเขียนจดหมายถึงสิบสามฉบับในพันธสัญญาใหม่ และเดินทางเผยแผ่ข่าวประเสริฐหลายพันกิโลเมตรทั่วจักรวรรดิโรมัน — นักประวัติศาสตร์นับว่านี่คือจุดเปลี่ยนสำคัญที่สุดครั้งหนึ่งของคริสต์ศาสนา",
    events: [
      "ค.ศ. ~34 — แสงจากฟ้าบนถนนสู่ดามัสกัส (กิจการ 9:3–9)",
      "อานาเนียวางมือและให้บัพติศมาแก่เซาโล (กิจการ 9:17–19)",
      "หนีออกจากเมืองโดยถูกหย่อนลงทางกำแพงในเข่ง (กิจการ 9:23–25; 2 โครินธ์ 11:32–33)",
      "ช่วงเงียบที่ทาร์ซัสบ้านเกิด ก่อนบารนาบัสมาตามตัว (กิจการ 9:30; 11:25)",
    ],
  },
  {
    chapter: "V",
    era: "เมืองแรกที่เรียกว่า 'คริสเตียน'",
    year: "ค.ศ. 42–49",
    city: "ANTIOCH",
    th: "อันติออก",
    greek: "Ἀντιόχεια",
    narrative:
      "อันติออกแห่งซีเรีย มหานครอันดับสามของจักรวรรดิโรมัน กลายเป็นศูนย์กลางแห่งใหม่ของขบวนการที่กำลังก้าวข้ามพรมแดนชาติพันธุ์ — ที่นี่เองที่ผู้เชื่อถูกเรียกว่า 'คริสเตียน' เป็นครั้งแรกในประวัติศาสตร์ (กิจการ 11:26) แต่อันติออกยังเป็นเวทีของความขัดแย้งครั้งสำคัญระหว่างอัครสาวกกับเปาโลด้วย — เปาโลคัดค้านเปโตรซึ่ง ๆ หน้า เมื่อเปโตรถอยไปแยกโต๊ะอาหารจากผู้เชื่อต่างชาติเพราะเกรงใจกลุ่มถือธรรมเนียมยิว (กาลาเทีย 2:11–14) และเปาโลกับบารนาบัสก็ 'โต้เถียงกันอย่างรุนแรง' เรื่องยอห์นมาระโกผู้เคยละทิ้งการเดินทางครั้งแรกกลางทาง จนสองมิชชันนารีคู่บุกเบิกต้องแยกทางกัน (กิจการ 15:36–41) พระคัมภีร์บันทึกความขัดแย้งเหล่านี้อย่างตรงไปตรงมา — และบันทึกการคืนดีด้วย: ในจดหมายบั้นปลายชีวิต เปาโลเขียนว่า 'จงพามาระโกมาด้วย เพราะเขามีประโยชน์แก่ข้าพเจ้า' (2 ทิโมธี 4:11) และเปโตรเรียกเปาโลว่า 'น้องที่รักของเรา' (2 เปโตร 3:15)",
    events: [
      "ค.ศ. ~42 — ผู้เชื่อถูกเรียกว่า 'คริสเตียน' เป็นครั้งแรก (กิจการ 11:26)",
      "ค.ศ. 46 — ส่งเปาโลกับบารนาบัสออกเดินทางครั้งแรก — ยอห์นมาระโกละทิ้งคณะที่เปอร์กา (กิจการ 13:1–4, 13)",
      "ค.ศ. ~49 — สภาเยรูซาเล็ม: คนต่างชาติไม่ต้องถือธรรมบัญญัติยิว (กิจการ 15:1–29)",
      "ค.ศ. ~49 — เปาโลคัดค้านเปโตรซึ่ง ๆ หน้าเรื่องแยกโต๊ะจากผู้เชื่อต่างชาติ (กาลาเทีย 2:11–14)",
      "ค.ศ. ~50 — เปาโลกับบารนาบัสแยกทางกันเพราะขัดแย้งเรื่องมาระโก — บารนาบัสพามาระโกไปไซปรัส (กิจการ 15:36–41)",
      "ภายหลังคืนดี — 'จงพามาระโกมาด้วย เพราะเขามีประโยชน์แก่ข้าพเจ้า' (โคโลสี 4:10; 2 ทิโมธี 4:11)",
    ],
  },
  {
    chapter: "VI",
    era: "ข่าวประเสริฐข้ามสู่ยุโรป",
    year: "ค.ศ. 49–52",
    city: "CORINTH",
    th: "โครินธ์",
    greek: "Κόρινθος",
    narrative:
      "ในการเดินทางครั้งที่สอง นิมิตชายชาวมาซิโดเนียที่เมืองโตรอัสเรียกเปาโลข้ามทะเลอีเจียน — ข่าวประเสริฐเหยียบแผ่นดินยุโรปเป็นครั้งแรก คริสตจักรฟีลิปปีถือกำเนิด ตามด้วยเธสะโลนิกา จากนั้นเปาโลเทศนาต่อนักปรัชญา ณ อาเรโอปากัสกลางเอเธนส์ ก่อนพำนักที่โครินธ์ เมืองท่าการค้าอันคึกคัก ถึง 18 เดือน ที่นี่ท่านเขียนจดหมายฉบับแรกสุดของพันธสัญญาใหม่ (1 เธสะโลนิกา) และศิลาจารึกกัลลิโอที่เดลฟีช่วยให้นักประวัติศาสตร์กำหนดปีของช่วงนี้ได้แม่นยำที่สุดในชีวิตของเปาโล",
    events: [
      "ค.ศ. 49 — นิมิตชายชาวมาซิโดเนีย ข่าวประเสริฐข้ามสู่ยุโรป (กิจการ 16:9–10)",
      "ฟีลิปปี — คริสตจักรแห่งแรกบนแผ่นดินยุโรป (กิจการ 16:11–15)",
      "เอเธนส์ — เทศนา ณ อาเรโอปากัสต่อนักปรัชญา (กิจการ 17:22–34)",
      "ค.ศ. 50–52 — พำนักโครินธ์ 18 เดือน เขียน 1–2 เธสะโลนิกา (กิจการ 18:11–12)",
    ],
  },
  {
    chapter: "VII",
    era: "สามปีแห่งเอเชียไมเนอร์",
    year: "ค.ศ. 52–55",
    city: "EPHESUS",
    th: "เอเฟซัส",
    greek: "Ἔφεσος",
    narrative:
      "เอเฟซัส เมืองหลวงแห่งแคว้นเอเชียและที่ตั้งวิหารอารเทมิสหนึ่งในเจ็ดสิ่งมหัศจรรย์ของโลกโบราณ คือฐานพันธกิจใหญ่ที่สุดของเปาโล — ท่านสอนที่นี่ราวสามปี 'จนคนทั้งแคว้นเอเชียได้ยินพระวจนะ' (กิจการ 19:10) อิทธิพลของข่าวประเสริฐสั่นคลอนธุรกิจรูปเคารพจนช่างเงินก่อจลาจลทั้งเมือง ต่อมาทิโมธีลูกศิษย์คนสนิทรับหน้าที่ดูแลคริสตจักรแห่งนี้ และปลายศตวรรษ ยอห์นอัครสาวกย้ายมาพำนักที่นี่ตามธรรมเนียมคริสตจักรยุคแรก",
    events: [
      "ค.ศ. 52–55 — เปาโลสอนราวสามปีที่เอเฟซัส (กิจการ 19:8–10; 20:31)",
      "จลาจลช่างเงินแห่งวิหารอารเทมิส (กิจการ 19:23–41)",
      "ทิโมธีรับหน้าที่ดูแลคริสตจักรเอเฟซัส (1 ทิโมธี 1:3)",
      "ปลายศตวรรษที่ 1 — ยอห์นอัครสาวกพำนักที่เอเฟซัส (ยูเซบิอุส, Eccl. Hist. 3.1)",
    ],
  },
  {
    chapter: "VIII",
    era: "สู่ใจกลางจักรวรรดิ",
    year: "ค.ศ. 60–64",
    city: "ROME",
    th: "โรม",
    greek: "Ῥώμη",
    narrative:
      "หลังถูกจับกุมในพระวิหารเยรูซาเล็มและคุมขังที่ซีซารียาสองปี เปาโลใช้สิทธิพลเมืองโรมันอุทธรณ์ต่อซีซาร์ การเดินทางสู่โรมผ่านพายุและเรืออับปางที่เกาะมอลตา จบลงด้วยสองปีที่ท่านประกาศข่าวประเสริฐ 'โดยเปิดเผย ไม่มีผู้ใดขัดขวาง' ใจกลางจักรวรรดิ (กิจการ 28:31) — ประโยคสุดท้ายของหนังสือกิจการ แต่ปี 64 เพลิงไหม้ใหญ่เผากรุงโรม เนโรกล่าวโทษคริสเตียน การข่มเหงครั้งใหญ่ครั้งแรกเริ่มต้น และธรรมเนียมคริสตจักรบันทึกว่าทั้งเปโตรและเปาโลพลีชีพที่โรมในยุคนี้",
    events: [
      "ค.ศ. 57–59 — ถูกจับที่เยรูซาเล็ม คุมขังที่ซีซารียา (กิจการ 21–26)",
      "ค.ศ. 59–60 — เรืออับปางที่มอลตา เดินทางถึงโรม (กิจการ 27–28)",
      "ค.ศ. 60–62 — ประกาศข่าวประเสริฐอย่างเสรีสองปี (กิจการ 28:30–31)",
      "ค.ศ. 64 — เนโรข่มเหงคริสเตียน เปโตรและเปาโลพลีชีพ (ยูเซบิอุส, Eccl. Hist. 2.25)",
    ],
  },
  {
    chapter: "IX",
    era: "วิวรณ์และยุคหลังอัครทูต",
    year: "ค.ศ. 95–130",
    city: "PATMOS",
    th: "ปัทมอส",
    greek: "Πάτμος",
    narrative:
      "บนเกาะปัทมอสกลางทะเลอีเจียน ยอห์นผู้ถูกเนรเทศ 'เพราะพระวจนะของพระเจ้าและคำพยานของพระเยซู' (วิวรณ์ 1:9) ได้รับนิมิตที่กลายเป็นหนังสือเล่มสุดท้ายของพระคัมภีร์ — จดหมายถึงคริสตจักรทั้งเจ็ดแห่งเอเชียและภาพชัยชนะสุดท้ายของพระเจ้า เมื่อยุคอัครสาวกปิดฉาก คบเพลิงส่งต่อสู่รุ่นลูกศิษย์: เคลเมนต์แห่งโรม อิกเนเชียสแห่งอันติออก และโพลีคาร์ปศิษย์ของยอห์น — ภายในหนึ่งศตวรรษ ขบวนการที่เริ่มจากคนสิบสองคนในกาลิลีได้หยั่งรากทั่วเมดิเตอร์เรเนียน",
    events: [
      "ค.ศ. ~95 — ยอห์นถูกเนรเทศสู่ปัทมอส เขียนหนังสือวิวรณ์ (วิวรณ์ 1:9)",
      "จดหมายถึงคริสตจักรทั้งเจ็ดแห่งเอเชีย (วิวรณ์ 2–3)",
      "ค.ศ. ~96 — เคลเมนต์แห่งโรมเขียนจดหมายถึงชาวโครินธ์ (1 Clement)",
      "ค.ศ. ~110 — อิกเนเชียสแห่งอันติออกเขียนจดหมายเจ็ดฉบับระหว่างถูกนำตัวไปโรม",
      "ค.ศ. ~110–130 — โพลีคาร์ปแห่งสเมอร์นาเชื่อมยุคอัครสาวกสู่คริสตจักรรุ่นหลัง",
    ],
  },
];

export default function PathsOfFaith() {
  const [activeJourney, setActiveJourney] = useState("islam");

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const bg = document.getElementById("parallax-bg");
      const mid = document.getElementById("parallax-mid");
      const front = document.getElementById("parallax-front");
      if (bg) bg.style.transform = `translateY(${scrolled * 0.15}px)`;
      if (mid) mid.style.transform = `translateY(${scrolled * 0.35}px)`;
      if (front) front.style.transform = `translateY(${scrolled * 0.55}px)`;
    };
    window.addEventListener("scroll", handleScroll);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("ic-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll(".ic-reveal").forEach((el) => io.observe(el));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      io.disconnect();
    };
    // ผูกกับ activeJourney เพื่อให้ observer จับ .ic-reveal ของแถบที่เพิ่งสลับมาแสดง
  }, [activeJourney]);

  return (
    <div className="bg-paper text-ink">
      <Navbar />

      {/* HERO */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-ink">
        {/* ภาพแผนที่ diorama จาง ๆ ด้านหลัง — สลับ (crossfade) ตาม Tab ที่เลือก */}
        <div className="absolute inset-0">
          <Image
            src="/map/islam-spread-622-722.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            aria-hidden="true"
            className="object-cover object-center transition-opacity duration-[1200ms] ease-out"
            style={{ opacity: activeJourney === "islam" ? 0.42 : 0 }}
          />
          <Image
            src="/map/Christ-spread.png"
            alt=""
            fill
            sizes="100vw"
            aria-hidden="true"
            className="object-cover object-center transition-opacity duration-[1200ms] ease-out"
            style={{ opacity: activeJourney === "christianity" ? 0.42 : 0 }}
          />
        </div>

        {/* ไล่เฉดเข้มให้ตัวอักษรอ่านชัด + ขอบมืด (vignette) */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/50 to-ink/90" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 42%, rgba(0,0,0,0.55) 100%)",
          }}
        />

        <div
          id="parallax-bg"
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 20%, rgba(197,160,89,0.15), transparent 50%), radial-gradient(circle at 70% 60%, rgba(197,160,89,0.1), transparent 50%)",
          }}
        />

        <div
          id="parallax-mid"
          className="absolute inset-0 flex items-center justify-center opacity-10"
        >
          <svg width="800" height="500" viewBox="0 0 800 500">
            <path
              d="M100,250 Q300,180 400,250 T700,250"
              stroke="#c5a059"
              strokeWidth="1"
              fill="none"
              strokeDasharray="4 6"
            />
          </svg>
        </div>

        <div id="parallax-front" className="relative z-10 text-center px-gutter">
          <p className="font-cinzel text-xs text-gold/60 tracking-[0.3em] uppercase mb-4">
            TWO JOURNEYS, TWO FAITHS
          </p>
          <h1 className="font-cinzel text-4xl md:text-6xl text-paper-white mb-4">
            Paths of Faith
          </h1>
          <h2 className="font-pridi text-xl text-gold">
            เส้นทางแห่งศรัทธา — การเดินทางของสองศาสนา
          </h2>
        </div>
      </section>

      {/* INTERACTIVE MAP */}
      <section id="journey-map" className="scroll-mt-20 py-16 bg-ink">
        <div className="max-w-6xl mx-auto px-gutter">
          <div className="text-center mb-10">
            <p className="font-cinzel text-xs text-gold/60 tracking-[0.3em] uppercase mb-3">
              INTERACTIVE JOURNEY MAP
            </p>
            <h2 className="font-cinzel text-3xl md:text-4xl text-paper-white mb-3">
              แผนที่การเดินทาง
            </h2>
            <p className="font-pridi text-paper-white/60 text-sm max-w-2xl mx-auto">
              ติดตามหมุดแสงเดินทางไปตามเส้นทางประวัติศาสตร์ — เลือกเส้นทาง เปิด/ปิดการแสดงผล
              และคลิกหมุดเมืองเพื่ออ่านประวัติย่อของแต่ละเมือง
            </p>
          </div>
          <FaithJourneyMap journeyId={activeJourney} onJourneyChange={setActiveJourney} />
          <p className="font-pridi text-paper-white/40 text-xs text-center mt-4">
            แผนที่จำลองอาจมีความคาดเคลื่อนตามตำแหน่งจริงทางประวัติศาสตร์เล็กน้อย
          </p>
        </div>
      </section>

      {/* ISLAMIC PATH — CHRONICLE (โทนน้ำตาล-ทอง · แสดงเมื่อเลือก Tab อิสลาม) */}
      {activeJourney === "islam" && (
      <section
        className="im-scope relative py-24 overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, #2e2016 0%, #241811 45%, #1b120b 70%, #2e2016 100%)",
        }}
      >
        {/* แสงน้ำตาล-ทองพื้นหลัง */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 20% 15%, rgba(120,84,44,0.34), transparent 55%), radial-gradient(ellipse at 80% 45%, rgba(212,175,55,0.1), transparent 50%), radial-gradient(ellipse at 30% 85%, rgba(120,84,44,0.26), transparent 55%)",
          }}
        />

        <div className="relative max-w-5xl mx-auto px-gutter">
          {/* HEADER */}
          <div className="text-center mb-20">
            <p
              className="text-2xl md:text-3xl text-gold/50 italic mb-4"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ
            </p>
            <p
              className="font-cinzel text-xs tracking-[0.3em] uppercase mb-3"
              style={{ color: "#d8b878" }}
            >
              THE FIRST HUNDRED YEARS OF ISLAM · 622–722
            </p>
            <h2 className="font-cinzel text-3xl md:text-5xl text-paper-white mb-4">
              เส้นทางอิสลาม
            </h2>
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="block h-px w-16 bg-gradient-to-r from-transparent to-gold/60" />
              <span className="text-gold text-sm">✦</span>
              <span className="block h-px w-16 bg-gradient-to-l from-transparent to-gold/60" />
            </div>
            <p className="font-pridi text-paper-white/60 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              จดหมายเหตุแห่งการเผยแผ่ — จากวะฮีย์ครั้งแรก ณ ถ้ำฮิรออ์
              สู่ดินแดนสามทวีปภายในหนึ่งศตวรรษ เจ็ดบทบันทึกต่อไปนี้ขยายรายละเอียดของหมุดเมืองบนแผนที่ด้านบน
              เรียงตามลำดับเวลา ตั้งแต่ยุคท่านนบี (ซ.ล.) เคาะลีฟะฮ์รอชิดีนทั้งสี่ จนถึงราชวงศ์อุมัยยะฮ์
            </p>
          </div>

          {/* TIMELINE */}
          <div className="relative">
            <div className="ic-axis left-[14px] md:left-1/2 md:-translate-x-1/2" />

            <div className="space-y-14 md:space-y-20">
              {islamicChronicle.map((item, i) => {
                const onLeft = i % 2 === 0;
                return (
                  <div
                    key={item.chapter}
                    className="relative md:grid md:grid-cols-2 md:gap-x-16 items-center"
                  >
                    {/* ดาว 8 แฉกบนแกน */}
                    <div className="absolute left-[14px] md:left-1/2 top-9 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 z-10">
                      <div className="ic-node">
                        <span className="ic-node-core" />
                      </div>
                    </div>

                    {/* ปีฝั่งตรงข้าม (desktop เท่านั้น) */}
                    <div
                      className={`hidden md:flex items-center ${
                        onLeft
                          ? "md:col-start-2 md:row-start-1 justify-start pl-2"
                          : "md:col-start-1 md:row-start-1 justify-end pr-2"
                      }`}
                    >
                      <div className={`ic-reveal ${onLeft ? "text-left" : "text-right"}`}>
                        <p className="font-cinzel text-3xl lg:text-4xl text-gold/90 tracking-wide">
                          {item.year}
                        </p>
                        <p
                          className="font-cinzel text-xs tracking-[0.35em] uppercase mt-2"
                          style={{ color: "#d8b878" }}
                        >
                          Chapter {item.chapter}
                        </p>
                      </div>
                    </div>

                    {/* แผ่นจดหมายเหตุ */}
                    <div
                      className={`pl-12 md:pl-0 ${
                        onLeft
                          ? "md:col-start-1 md:row-start-1 md:pr-2"
                          : "md:col-start-2 md:row-start-1 md:pl-2"
                      }`}
                    >
                      <article className="ic-panel ic-reveal rounded-card p-6 md:p-8">
                        <span className="ic-corner ic-corner-tl" />
                        <span className="ic-corner ic-corner-tr" />
                        <span className="ic-corner ic-corner-bl" />
                        <span className="ic-corner ic-corner-br" />
                        <span
                          className="ic-watermark"
                          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                        >
                          {item.arabic}
                        </span>

                        {/* ปี + บท (mobile เท่านั้น) */}
                        <div className="md:hidden mb-3">
                          <span
                            className="font-cinzel text-[10px] tracking-[0.3em] uppercase"
                            style={{ color: "#d8b878" }}
                          >
                            Chapter {item.chapter}
                          </span>
                          <p className="font-cinzel text-2xl text-gold mt-1">{item.year}</p>
                        </div>

                        <p
                          className="inline-block font-pridi text-xs px-3 py-1 rounded-full mb-4 border"
                          style={{
                            color: "#f0dfc0",
                            background: "rgba(107,74,40,0.4)",
                            borderColor: "rgba(197,160,89,0.4)",
                          }}
                        >
                          {item.era}
                        </p>

                        <div className="flex items-baseline gap-3 flex-wrap mb-1">
                          <h3 className="font-cinzel text-2xl md:text-3xl text-paper-white font-semibold">
                            {item.city}
                          </h3>
                          <span
                            className="text-2xl text-gold/80 italic"
                            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                          >
                            {item.arabic}
                          </span>
                        </div>
                        <p className="font-pridi text-gold/70 text-sm mb-4">{item.th}</p>

                        <div className="flex items-center gap-2 mb-4">
                          <span className="block h-px flex-1 bg-gradient-to-r from-gold/40 to-transparent" />
                          <span className="text-gold/50 text-[10px]">◆</span>
                        </div>

                        <p className="font-pridi text-paper-white/80 text-sm md:text-[0.95rem] leading-[1.9] mb-5">
                          {item.narrative}
                        </p>

                        <div
                          className="rounded-lg px-4 py-3 border"
                          style={{
                            background: "rgba(0,0,0,0.22)",
                            borderColor: "rgba(197,160,89,0.2)",
                          }}
                        >
                          <p className="font-cinzel text-[10px] tracking-[0.25em] uppercase text-gold/70 mb-2">
                            เหตุการณ์สำคัญ
                          </p>
                          <ul className="space-y-1.5">
                            {item.events.map((ev) => (
                              <li
                                key={ev}
                                className="font-pridi text-paper-white/65 text-xs md:text-sm leading-relaxed flex gap-2"
                              >
                                <span className="text-gold/60 shrink-0">◆</span>
                                <span>{ev}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </article>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ปิดท้าย */}
          <div className="text-center mt-20 ic-reveal">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="block h-px w-24 bg-gradient-to-r from-transparent to-gold/50" />
              <span className="text-gold text-lg">✦</span>
              <span className="block h-px w-24 bg-gradient-to-l from-transparent to-gold/50" />
            </div>
            <p className="font-pridi text-paper-white/50 text-sm max-w-xl mx-auto leading-relaxed">
              หนึ่งศตวรรษหลังฮิจเราะฮ์ อิสลามแผ่จากคาบสมุทรไอบีเรียจรดลุ่มแม่น้ำสินธุ ครอบคลุมสามทวีป
              — เลื่อนกลับขึ้นไปชมเส้นทางทั้งหมดบนแผนที่แบบอินเทอร์แอกทีฟด้านบน
            </p>
          </div>
        </div>
      </section>
      )}

      {/* CHRISTIAN PATH — CHRONICLE (แสดงเมื่อเลือก Tab คริสต์ศาสนา) */}
      {activeJourney === "christianity" && (
      <section
        className="cc-scope relative py-24 overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, #1B2B4B 0%, #14203a 45%, #0e1830 70%, #1B2B4B 100%)",
        }}
      >
        {/* แสงทอง-น้ำเงินพื้นหลัง */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 20% 15%, rgba(43,80,150,0.3), transparent 55%), radial-gradient(ellipse at 80% 45%, rgba(212,175,55,0.08), transparent 50%), radial-gradient(ellipse at 30% 85%, rgba(43,80,150,0.22), transparent 55%)",
          }}
        />

        <div className="relative max-w-5xl mx-auto px-gutter">
          {/* HEADER */}
          <div className="text-center mb-20">
            <p
              className="text-2xl md:text-3xl text-gold/50 italic mb-4"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Τὸ Εὐαγγέλιον εἰς πάντα τὰ ἔθνη
            </p>
            <p
              className="font-cinzel text-xs tracking-[0.3em] uppercase mb-3"
              style={{ color: "#8fb8e8" }}
            >
              THE FIRST 100 YEARS OF THE CHRISTIAN MISSION
            </p>
            <h2 className="font-cinzel text-3xl md:text-5xl text-paper-white mb-4">
              เส้นทางคริสต์ศาสนา
            </h2>
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="block h-px w-16 bg-gradient-to-r from-transparent to-gold/60" />
              <span className="text-gold text-sm">✦</span>
              <span className="block h-px w-16 bg-gradient-to-l from-transparent to-gold/60" />
            </div>
            <p className="font-pridi text-paper-white/60 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              จดหมายเหตุแห่งพันธกิจ — จากรางหญ้าที่เบธเลเฮมสู่ใจกลางจักรวรรดิโรมันภายในหนึ่งศตวรรษ
              เก้าบทบันทึกต่อไปนี้ขยายรายละเอียดของหมุดเมืองบนแผนที่ด้านบน
              เรียงตามลำดับเวลา พร้อมอ้างอิงพระคัมภีร์กำกับทุกเหตุการณ์
            </p>
          </div>

          {/* TIMELINE */}
          <div className="relative">
            <div className="ic-axis left-[14px] md:left-1/2 md:-translate-x-1/2" />

            <div className="space-y-14 md:space-y-20">
              {christianChronicle.map((item, i) => {
                const onLeft = i % 2 === 0;
                return (
                  <div
                    key={item.city}
                    className="relative md:grid md:grid-cols-2 md:gap-x-16 items-center"
                  >
                    {/* ดาว 8 แฉกบนแกน */}
                    <div className="absolute left-[14px] md:left-1/2 top-9 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 z-10">
                      <div className="ic-node">
                        <span className="ic-node-core" />
                      </div>
                    </div>

                    {/* ปีฝั่งตรงข้าม (desktop เท่านั้น) */}
                    <div
                      className={`hidden md:flex items-center ${
                        onLeft
                          ? "md:col-start-2 md:row-start-1 justify-start pl-2"
                          : "md:col-start-1 md:row-start-1 justify-end pr-2"
                      }`}
                    >
                      <div className={`ic-reveal ${onLeft ? "text-left" : "text-right"}`}>
                        <p className="font-cinzel text-4xl lg:text-5xl text-gold/90 tracking-wide">
                          {item.year}
                        </p>
                        <p
                          className="font-cinzel text-xs tracking-[0.35em] uppercase mt-2"
                          style={{ color: "#8fb8e8" }}
                        >
                          Chapter {item.chapter}
                        </p>
                      </div>
                    </div>

                    {/* แผ่นจดหมายเหตุ */}
                    <div
                      className={`pl-12 md:pl-0 ${
                        onLeft
                          ? "md:col-start-1 md:row-start-1 md:pr-2"
                          : "md:col-start-2 md:row-start-1 md:pl-2"
                      }`}
                    >
                      <article className="ic-panel ic-reveal rounded-card p-6 md:p-8">
                        <span className="ic-corner ic-corner-tl" />
                        <span className="ic-corner ic-corner-tr" />
                        <span className="ic-corner ic-corner-bl" />
                        <span className="ic-corner ic-corner-br" />
                        <span
                          className="ic-watermark"
                          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                        >
                          {item.greek}
                        </span>

                        {/* ปี + บท (mobile เท่านั้น) */}
                        <div className="md:hidden mb-3">
                          <span
                            className="font-cinzel text-[10px] tracking-[0.3em] uppercase"
                            style={{ color: "#8fb8e8" }}
                          >
                            Chapter {item.chapter}
                          </span>
                          <p className="font-cinzel text-2xl text-gold mt-1">{item.year}</p>
                        </div>

                        <p
                          className="inline-block font-pridi text-xs px-3 py-1 rounded-full mb-4 border"
                          style={{
                            color: "#cfe2f8",
                            background: "rgba(43,80,150,0.35)",
                            borderColor: "rgba(143,184,232,0.35)",
                          }}
                        >
                          {item.era}
                        </p>

                        <div className="flex items-baseline gap-3 flex-wrap mb-1">
                          <h3 className="font-cinzel text-2xl md:text-3xl text-paper-white font-semibold">
                            {item.city}
                          </h3>
                          <span
                            className="text-2xl text-gold/80 italic"
                            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                          >
                            {item.greek}
                          </span>
                        </div>
                        <p className="font-pridi text-gold/70 text-sm mb-4">{item.th}</p>

                        <div className="flex items-center gap-2 mb-4">
                          <span className="block h-px flex-1 bg-gradient-to-r from-gold/40 to-transparent" />
                          <span className="text-gold/50 text-[10px]">◆</span>
                        </div>

                        <p className="font-pridi text-paper-white/80 text-sm md:text-[0.95rem] leading-[1.9] mb-5">
                          {item.narrative}
                        </p>

                        <div
                          className="rounded-lg px-4 py-3 border"
                          style={{
                            background: "rgba(0,0,0,0.22)",
                            borderColor: "rgba(197,160,89,0.2)",
                          }}
                        >
                          <p className="font-cinzel text-[10px] tracking-[0.25em] uppercase text-gold/70 mb-2">
                            เหตุการณ์สำคัญ
                          </p>
                          <ul className="space-y-1.5">
                            {item.events.map((ev) => (
                              <li
                                key={ev}
                                className="font-pridi text-paper-white/65 text-xs md:text-sm leading-relaxed flex gap-2"
                              >
                                <span className="text-gold/60 shrink-0">◆</span>
                                <span>{ev}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </article>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ปิดท้าย */}
          <div className="text-center mt-20 ic-reveal">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="block h-px w-24 bg-gradient-to-r from-transparent to-gold/50" />
              <span className="text-gold text-lg">✦</span>
              <span className="block h-px w-24 bg-gradient-to-l from-transparent to-gold/50" />
            </div>
            <p className="font-pridi text-paper-white/50 text-sm max-w-xl mx-auto leading-relaxed">
              หนึ่งศตวรรษหลังกางเขน คริสตจักรหยั่งรากจากเยรูซาเล็มจรดโรม
              ทั่วชายฝั่งเมดิเตอร์เรเนียน (กิจการ 1:8)
              — เลื่อนกลับขึ้นไปชมเส้นทางทั้งหมดบนแผนที่แบบอินเทอร์แอกทีฟด้านบน
            </p>
          </div>
        </div>
      </section>
      )}

      {/* BACK BUTTON */}
      <section className="py-12 bg-paper text-center">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a href="/" className="btn-outline font-pridi text-sm">
            ← กลับสู่หน้าแรก
          </a>
          <a href="#journey-map" className="btn-outline font-pridi text-sm">
            ↑ กลับสู่แผนที่ด้านบน
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
