"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const els = root.querySelectorAll("[data-reveal]");
    els.forEach((el) => el.classList.add("reveal"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return ref;
}

const methodologies = {
  islam: {
    id: "islam",
    tabLabel: "ระบบอิสนาด",
    tabSub: "الإسناد",
    tabEn: "THE ISNAD SYSTEM",
    markFont: "font-amiri",
    accent: {
      glow: "rgba(63,174,90,0.14)",
      label: "#8fd4a4",
    },
    intro:
      "โลกอิสลามพัฒนาระบบตรวจสอบรายงานประวัติศาสตร์ที่เรียกว่า \"อิสนาด\" — สายรายงานที่ระบุชื่อผู้ส่งต่อข้อมูลทุกคนย้อนกลับไปถึงต้นทาง พร้อมศาสตร์วิจารณ์ผู้รายงานรายบุคคลที่ละเอียดที่สุดเท่าที่อารยธรรมโบราณเคยสร้างมา",
    sections: [
      {
        no: "I",
        mark: "سند",
        title: "อิสนาดคืออะไร",
        paragraphs: [
          "อิสนาด (Isnad — سند แปลว่า \"สิ่งค้ำยัน/สายรายงาน\") คือการที่ผู้ถ่ายทอดข้อมูลต้องประกาศแหล่งที่มาของตนเป็นลูกโซ่ระบุชื่อครบทุกทอด เช่น \"ก. เล่าให้ฉันฟัง โดยรับมาจาก ข. ซึ่งได้ยินจาก ค. ว่าท่านนบีกล่าวว่า...\" ข้อมูลใดไม่มีสายรายงานกำกับ ย่อมไม่มีน้ำหนักทางวิชาการในสายตานักวิชาการมุสลิม",
          "หลักคิดเบื้องหลังถูกสรุปไว้ในคำพูดอมตะของอับดุลลอฮ์ อิบนุ อัลมุบาร็อก (เสียชีวิต ฮ.ศ. 181 / ค.ศ. 797):",
        ],
        quote: {
          text: "อิสนาดเป็นส่วนหนึ่งของศาสนา หากปราศจากอิสนาดแล้ว ใครอยากจะพูดอะไรก็คงพูดได้ตามใจชอบ",
          source: "บันทึกใน มุก็อดดิมะฮ์ (บทนำ) ของเศาะฮีห์มุสลิม; อ้างใน Al-Azami, The History of the Qur'anic Text, pp. 203-214",
        },
      },
      {
        no: "II",
        mark: "فتنة",
        title: "จุดกำเนิด: เมื่อวิกฤตสอนให้ตรวจสอบ",
        paragraphs: [
          "มุฮัมมัด อิบนุ สีรีน (เสียชีวิต ฮ.ศ. 110 / ค.ศ. 728) บันทึกไว้ว่า ในยุคแรกผู้คนไม่ได้ซักถามถึงสายรายงานกันเข้มงวดนัก แต่เมื่อเกิดฟิตนะฮ์ (วิกฤตความแตกแยกทางการเมืองและการปรากฏของกลุ่มอุตริ) นักวิชาการก็ประกาศว่า \"จงบอกชื่อบุรุษของพวกท่านมา\" — รายงานจากผู้ยึดมั่นแนวทางที่ถูกต้องจึงถูกรับ ส่วนรายงานจากผู้อุตริถูกปัด",
          "นี่คือจุดที่การอ้างอิงเปลี่ยนจากธรรมเนียมสู่ \"ระเบียบวิธีบังคับ\" — ทุกข้อความเกี่ยวกับท่านนบีต้องผ่านการพิสูจน์ตัวตนของผู้ส่งต่อทุกคนในสาย",
        ],
        quote: {
          text: "แท้จริงความรู้นี้คือศาสนา ดังนั้นจงพิจารณาเถิดว่าพวกท่านรับศาสนาของพวกท่านมาจากผู้ใด",
          source: "มุฮัมมัด อิบนุ สีรีน, บันทึกใน มุก็อดดิมะฮ์ของเศาะฮีห์มุสลิม",
        },
      },
      {
        no: "III",
        mark: "شروط",
        title: "ห้าเงื่อนไขของรายงานที่เศาะฮีห์",
        paragraphs: [
          "นักวิชาการหะดีษสังเคราะห์เกณฑ์รับรายงานเป็น 5 ข้อที่ต้องครบทุกข้อ รายงานจึงจะได้สถานะ \"เศาะฮีห์\" (ถูกต้องเชื่อถือได้):",
        ],
        points: [
          "อิตติศอล — สายรายงานต่อเนื่องไม่ขาดตอน ผู้รายงานทุกคู่ต้องพิสูจน์ได้ว่าพบกันจริงหรืออยู่ร่วมยุคที่รับส่งกันได้จริง",
          "อะดาละฮ์ — ผู้รายงานทุกคนต้องมีความเที่ยงธรรม ซื่อสัตย์ ไม่เคยถูกจับได้ว่าโกหก",
          "เฎาะบฏ์ — ผู้รายงานต้องมีความแม่นยำ ทั้งความจำ (เฎาะบฏ์อัศศ็อดร์) หรือบันทึกลายลักษณ์ (เฎาะบฏ์อัลกิตาบ)",
          "ปราศจากชุซูซ — เนื้อความไม่ขัดแย้งกับรายงานของผู้ที่น่าเชื่อถือกว่า",
          "ปราศจากอิลละฮ์ — ไม่มีตำหนิแอบแฝงที่ตรวจพบได้เมื่อเทียบสายรายงานทั้งหมดเข้าด้วยกัน",
        ],
      },
      {
        no: "IV",
        mark: "رجال",
        title: "ศาสตร์วิจารณ์ผู้รายงาน: อัลญัรห์ วัตตะอ์ดีล",
        paragraphs: [
          "เพื่อให้เกณฑ์ข้างต้นใช้งานได้จริง นักวิชาการมุสลิมสร้างศาสตร์ \"อัลญัรห์ วัตตะอ์ดีล\" (การวิจารณ์และรับรองผู้รายงาน) และ \"อิลมุรริญาล\" (ชีวประวัติผู้รายงาน) — ฐานข้อมูลบุคคลขนาดมหึมาที่บันทึกวันเกิด วันตาย ครูอาจารย์ ลูกศิษย์ ความจำ ความประพฤติ และคำตัดสินของนักวิจารณ์ร่วมยุคต่อผู้รายงานนับหมื่นคน",
          "ตำราอย่าง ตะฮ์ซีบุลกะมาล ของอัลมิซซี รวบรวมชีวประวัติผู้รายงานหะดีษหลายพันคน นักวิชาการเดินทางข้ามทวีป (ริห์ละฮ์) เพียงเพื่อตรวจสอบว่าผู้รายงานคนหนึ่งได้ยินจากครูของเขาจริงหรือไม่ Al-Azami ชี้ว่าไม่มีอารยธรรมโบราณใดสร้างระบบตรวจสอบแหล่งข่าวรายบุคคลที่เทียบเคียงได้",
        ],
      },
      {
        no: "V",
        mark: "تواتر",
        title: "มุตะวาติร: มาตรฐานสูงสุด และการประยุกต์กับอัลกุรอาน",
        paragraphs: [
          "รายงานแบ่งตามจำนวนสายเป็น \"อาฮาด\" (สายรายงานจำกัด) กับ \"มุตะวาติร\" — รายงานที่ถ่ายทอดโดยคนจำนวนมากในทุกชั่วรุ่น มากเสียจนเป็นไปไม่ได้ที่ทั้งหมดจะสมคบกันโกหก มุตะวาติรให้ความแน่นอนระดับสูงสุดทางญาณวิทยา",
          "อัลกุรอานทั้งเล่มถูกถ่ายทอดแบบมุตะวาติร — ท่องจำและอ่านออกเสียงต่อหน้าครูรุ่นต่อรุ่นโดยคนนับพันในทุกยุค ควบคู่กับต้นฉบับลายลักษณ์ นักอ่าน (กอรี) ทุกคนที่ได้รับอิญาซะฮ์ (ประกาศนียบัตรการสืบทอด) จะได้รับสายรายงานระบุชื่อครูต่อครูย้อนขึ้นไปถึงท่านนบีมุฮัมมัด (ซ.ล.) โดยตรง — สายรายงานเหล่านี้ยังมีชีวิตและใช้งานจริงจนถึงทุกวันนี้",
        ],
      },
    ],
    refs: [
      "M.M. Al-Azami, The History of the Qur'anic Text: From Revelation to Compilation, UK Islamic Academy, 2003, pp. 203-214.",
      "มุสลิม อิบนุ อัลฮัจญาจ, เศาะฮีห์มุสลิม, มุก็อดดิมะฮ์ (บทนำว่าด้วยการตรวจสอบรายงาน).",
      "อิบนุ อัศเศาะลาห์, มุก็อดดิมะฮ์ อิบนิ อัศเศาะลาห์ (อุลูมุลหะดีษ) — เกณฑ์ 5 ข้อของหะดีษเศาะฮีห์.",
    ],
  },
  christian: {
    id: "christian",
    tabLabel: "การคัดเลือกสารบบ",
    tabSub: "ΚΑΝΩΝ",
    tabEn: "CANON CRITERIA",
    markFont: "font-cinzel",
    accent: {
      glow: "rgba(139,26,26,0.16)",
      label: "#d4a0a0",
    },
    intro:
      "ฝั่งคริสเตียนไม่ได้พัฒนาระบบสายรายงานรายบุคคล แต่ใช้กระบวนการคัดเลือก \"หนังสือทั้งเล่ม\" เข้าสารบบ (Canon) ผ่านเกณฑ์กว้าง 3 ข้อ ซึ่งใช้เวลาราว 4 ศตวรรษกว่ารายชื่อหนังสือ 27 เล่มจะลงตัว",
    sections: [
      {
        no: "I",
        mark: "Φωνή",
        title: "จุดตั้งต้น: ประเพณีปากเปล่าและหนังสือนิรนาม",
        paragraphs: [
          "คำสอนของพระเยซูถูกส่งต่อแบบปากเปล่าหลายทศวรรษก่อนถูกบันทึก และพระกิตติคุณทั้งสี่เล่มถูกเขียนแบบ \"นิรนาม\" — ตัวบทไม่ได้ระบุชื่อผู้เขียนไว้ภายใน ชื่อมัทธิว มาระโก ลูกา ยอห์น เป็นการระบุโดยธรรมเนียมคริสตจักรในภายหลัง",
          "ปาเปียส บิชอปแห่งฮีเอราโพลิส (ราว ค.ศ. 60-130) สะท้อนบรรยากาศยุคนั้นว่าเขาให้คุณค่ากับคำบอกเล่าที่ยังมีชีวิตมากกว่าหนังสือ:",
        ],
        quote: {
          text: "ข้าพเจ้าไม่คิดว่าสิ่งที่ได้จากหนังสือจะเป็นประโยชน์แก่ข้าพเจ้าเท่ากับสิ่งที่ได้จากเสียงที่ยังมีชีวิตและคงอยู่ (living and abiding voice)",
          source: "Papias, อ้างใน Eusebius, Historia Ecclesiastica 3.39.4; ดู Metzger, The Canon of the New Testament, pp. 52-56",
        },
      },
      {
        no: "II",
        mark: "†",
        title: "แรงกดดันที่บังคับให้ต้องมีสารบบ",
        paragraphs: [
          "การขีดเส้นว่าหนังสือใด \"ได้รับการดลใจ\" ไม่ได้เริ่มจากภายใน แต่ถูกบีบโดยวิกฤตภายนอก — ราว ค.ศ. 140 มาร์ซิออน (Marcion) ประกาศสารบบของตัวเองที่ตัดพันธสัญญาเดิมทิ้งทั้งหมดและเหลือเพียงลูกาฉบับตัดต่อกับจดหมายเปาโล 10 ฉบับ ขณะเดียวกันกลุ่มนอสติกก็ผลิตพระกิตติคุณของตนเอง (เช่น พระกิตติคุณโธมัส) และขบวนการมอนทานิสต์อ้างการเผยพระวจนะใหม่",
          "Metzger อธิบายว่าคริสตจักรกระแสหลักจึงจำเป็นต้องนิยามให้ชัดว่าหนังสือเล่มใดบ้างที่อ่านในพิธีนมัสการได้ — สารบบพันธสัญญาใหม่จึงเป็นผลของการโต้ตอบวิกฤต มากกว่าแผนที่วางไว้แต่แรก",
        ],
      },
      {
        no: "III",
        mark: "Γ",
        title: "เกณฑ์คัดเลือก 3 ข้อ",
        paragraphs: [
          "Metzger สรุปว่าคริสตจักรยุคแรกใช้เกณฑ์หลัก 3 ข้อในการรับหนังสือเข้าสารบบ:",
        ],
        points: [
          "สอดคล้องกับหลักความเชื่อ (Rule of Faith / Orthodoxy) — เนื้อหาต้องไม่ขัดกับคำสอนที่คริสตจักรยึดถือสืบมา",
          "ความเป็นอัครทูต (Apostolicity) — เชื่อว่าเขียนโดยอัครทูตหรือผู้ใกล้ชิดอัครทูต (เช่น มาระโกผูกกับเปโตร ลูกาผูกกับเปาโล)",
          "การใช้อย่างต่อเนื่องและแพร่หลาย (Continuous & Widespread Usage) — คริสตจักรหลักทั่วจักรวรรดิใช้อ่านในพิธีสืบเนื่องกันมา",
        ],
        paragraphsAfter: [
          "ข้อสังเกตเชิงระเบียบวิธี: เกณฑ์ทั้งสามประเมิน \"ตัวหนังสือทั้งเล่มและชื่อเสียงของมัน\" ไม่ใช่การไล่ตรวจตัวบุคคลผู้ส่งต่อเป็นทอดๆ — ไม่มีข้อกำหนดให้ระบุสายผู้ถ่ายทอดจากผู้เขียนถึงคริสตจักรผู้ใช้ และไม่มีศาสตร์ชีวประวัติผู้คัดลอกอย่างเป็นระบบ",
        ],
      },
      {
        no: "IV",
        mark: "397",
        title: "เส้นทางราว 4 ศตวรรษกว่าจะลงตัว",
        paragraphs: [
          "รายชื่อหนังสือค่อยๆ ตกผลึกผ่านหมุดหมายสำคัญ:",
        ],
        points: [
          "ราว ค.ศ. 170-200 — ชิ้นส่วนมูราโทรี (Muratorian Fragment) รายชื่อสารบบเก่าแก่ที่สุดที่พบ มีราว 22 เล่ม ยังไม่มีฮีบรู ยากอบ 1-2 เปโตร",
          "ราว ค.ศ. 325 — ยูเซบิอุสแบ่งหนังสือเป็น 3 กลุ่ม: ที่ยอมรับทั่วกัน (homologoumena) ที่ยังโต้แย้งกัน (antilegomena) และของปลอม (notha) — Hist. Eccl. 3.25",
          "ค.ศ. 367 — จดหมายเทศกาลฉบับที่ 39 ของอาธานาซิอุสแห่งอเล็กซานเดรีย เป็นเอกสารฉบับแรกที่ระบุหนังสือ 27 เล่มตรงกับพันธสัญญาใหม่ปัจจุบันพอดี",
          "ค.ศ. 393 และ 397 — สภาฮิปโปและสภาคาร์เธจรับรองรายชื่อ 27 เล่มอย่างเป็นทางการในคริสตจักรตะวันตก",
        ],
      },
      {
        no: "V",
        mark: ";",
        title: "หนังสือที่ถูกโต้แย้ง และคำถามเรื่องผู้เขียน",
        paragraphs: [
          "แม้หลังสารบบลงตัว หนังสือ 7 เล่ม (ฮีบรู ยากอบ 2 เปโตร 2-3 ยอห์น ยูดา วิวรณ์) เคยอยู่ในสถานะ \"antilegomena\" — ถูกโต้แย้งอยู่นานหลายศตวรรษ ขณะที่หนังสืออย่าง The Shepherd of Hermas และจดหมายบารนาบัส เคยถูกบางคริสตจักรใช้ราวกับพระคัมภีร์ (ถึงขั้นถูกเย็บรวมใน Codex Sinaiticus) ก่อนถูกคัดออกภายหลัง",
          "คำถามเรื่องผู้เขียนก็ไม่เคยปิดสนิท — กรณีจดหมายถึงชาวฮีบรูซึ่งไม่ระบุผู้เขียน ออริเกน นักวิชาการคริสเตียนยุคแรกผู้ยิ่งใหญ่ที่สุดคนหนึ่ง ยอมรับตรงๆ ว่า:",
        ],
        quote: {
          text: "ส่วนที่ว่าใครเป็นผู้เขียนจดหมายฉบับนี้ พระเจ้าเท่านั้นที่ทรงทราบความจริง",
          source: "Origen, อ้างใน Eusebius, Historia Ecclesiastica 6.25.14; ดู Metzger, The Canon of the New Testament, ch. V",
        },
      },
    ],
    refs: [
      "Bruce M. Metzger, The Canon of the New Testament: Its Origin, Development, and Significance, Oxford: Clarendon Press, 1987 (เกณฑ์คัดเลือก: pp. 251-254).",
      "Eusebius, Historia Ecclesiastica 3.25 (การแบ่งกลุ่มหนังสือ), 3.39.4 (Papias), 6.25.14 (Origen ว่าด้วยผู้เขียนฮีบรู).",
      "Athanasius, Epistula Festalis XXXIX (จดหมายเทศกาลฉบับที่ 39), ค.ศ. 367.",
      "F.F. Bruce, The Canon of Scripture, InterVarsity Press, 1988 (ประกอบเรื่องสภาฮิปโป-คาร์เธจ).",
    ],
  },
};

const comparisonRows = [
  {
    topic: "หน่วยที่ถูกตรวจสอบ",
    islam: "ตัวบุคคลผู้ส่งต่อทุกคนในสายรายงาน — ตรวจเป็นรายคน",
    christian: "ตัวหนังสือทั้งเล่มและชื่อเสียงการใช้งานของมัน",
  },
  {
    topic: "การระบุตัวผู้ถ่ายทอด",
    islam: "บังคับระบุชื่อครบทุกทอดจนถึงต้นทาง (อิสนาด)",
    christian: "ไม่มีข้อกำหนด — พระกิตติคุณเป็นงานนิรนาม ระบุชื่อโดยธรรมเนียมภายหลัง",
  },
  {
    topic: "ฐานข้อมูลผู้ส่งต่อ",
    islam: "อิลมุรริญาล — ชีวประวัติผู้รายงานนับหมื่นคน พร้อมคำวิจารณ์ความน่าเชื่อถือ",
    christian: "ไม่มีศาสตร์เทียบเคียง — ผู้คัดลอกส่วนใหญ่ไม่ทราบตัวตน",
  },
  {
    topic: "เกณฑ์ตัดสิน",
    islam: "5 เงื่อนไข: สายต่อเนื่อง เที่ยงธรรม แม่นยำ ไร้ชุซูซ ไร้อิลละฮ์",
    christian: "3 เกณฑ์กว้าง: ตรงหลักความเชื่อ ความเป็นอัครทูต การใช้แพร่หลาย",
  },
  {
    topic: "กรอบเวลาจนระบบ/สารบบลงตัว",
    islam: "เกณฑ์อิสนาดบังคับใช้ภายในราวหนึ่งศตวรรษแรกหลังฮิจเราะฮ์",
    christian: "ราว 4 ศตวรรษ — รายชื่อ 27 เล่มชุดแรกปรากฏ ค.ศ. 367 รับรอง ค.ศ. 397",
  },
  {
    topic: "มาตรฐานสูงสุด",
    islam: "มุตะวาติร — มวลชนถ่ายทอดทุกชั่วรุ่นจนสมคบโกหกไม่ได้ (อัลกุรอานทั้งเล่ม)",
    christian: "มติคริสตจักรและการใช้สืบเนื่อง — หนังสือ 7 เล่มยังเคยถูกโต้แย้งนานหลายศตวรรษ",
  },
];

function SectionCard({ section, accent }) {
  return (
    <article
      data-reveal
      className="relative rounded-card border border-gold/25 p-6 md:p-8"
      style={{ background: "rgba(245,230,211,0.035)" }}
    >
      <span className="ic-corner ic-corner-tl" />
      <span className="ic-corner ic-corner-tr" />
      <span className="ic-corner ic-corner-bl" />
      <span className="ic-corner ic-corner-br" />

      <div className="flex items-start gap-4 mb-5">
        <div
          className="shrink-0 w-12 h-12 rounded-full border border-gold/40 flex items-center justify-center"
          style={{ background: "rgba(212,175,55,0.08)" }}
        >
          <span className="font-amiri text-gold text-lg leading-none">{section.mark}</span>
        </div>
        <div>
          <span
            className="block font-cinzel text-[10px] tracking-[0.35em] uppercase mb-1"
            style={{ color: accent.label }}
          >
            Chapter {section.no}
          </span>
          <h3 className="font-pridi text-xl md:text-2xl text-paper-white font-semibold leading-snug">
            {section.title}
          </h3>
        </div>
      </div>

      {section.paragraphs.map((p, i) => (
        <p
          key={i}
          className="font-pridi text-sm md:text-base text-paper/80 leading-relaxed mb-4"
        >
          {p}
        </p>
      ))}

      {section.points && (
        <ul className="space-y-2.5 mb-4">
          {section.points.map((point, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-gold/70 text-xs mt-1.5 shrink-0">✦</span>
              <span className="font-pridi text-sm md:text-base text-paper/85 leading-relaxed">
                {point}
              </span>
            </li>
          ))}
        </ul>
      )}

      {section.paragraphsAfter &&
        section.paragraphsAfter.map((p, i) => (
          <p
            key={i}
            className="font-pridi text-sm md:text-base text-paper/80 leading-relaxed mb-4"
          >
            {p}
          </p>
        ))}

      {section.quote && (
        <blockquote
          className="relative border-l-2 border-gold/60 pl-5 py-3 mt-2 rounded-r-card"
          style={{ background: "rgba(212,175,55,0.06)" }}
        >
          <p className="font-pridi text-base md:text-lg text-gold/90 leading-relaxed italic mb-2">
            “{section.quote.text}”
          </p>
          <cite className="font-pridi text-xs text-paper/55 not-italic">
            — {section.quote.source}
          </cite>
        </blockquote>
      )}
    </article>
  );
}

export default function Methodology() {
  const rootRef = useReveal();
  const [tab, setTab] = useState("islam");
  const method = methodologies[tab];

  // ผูก reveal ใหม่ทุกครั้งที่สลับ Tab
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    els.forEach((el) => el.classList.add("reveal"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [tab]);

  return (
    <div ref={rootRef} className="bg-paper text-ink">
      <Navbar />

      {/* PAGE HERO */}
      <section className="relative py-24 md:py-36 bg-ink text-paper-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/header.png"
            alt=""
            fill
            priority
            sizes="100vw"
            aria-hidden="true"
            className="object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/68 to-ink/92" />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, transparent 45%, rgba(0,0,0,0.5) 100%)",
            }}
          />
        </div>
        <div className="absolute inset-0 pointer-events-none opacity-[0.07]">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-gold blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-gold-light blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p
            data-reveal
            className="font-pridi text-xs tracking-[0.4em] uppercase text-gold mb-4"
          >
            Methodology
          </p>
          <h1
            data-reveal
            className="font-pridi text-3xl md:text-5xl lg:text-6xl mb-6 leading-tight"
          >
            ระเบียบวิธีทางประวัติศาสตร์
          </h1>
          <div data-reveal className="mx-auto h-px w-24 bg-gold/70 mb-8" />
          <p
            data-reveal
            className="font-pridi text-base md:text-lg text-paper/85 max-w-2xl mx-auto leading-relaxed"
          >
            สองอารยธรรมตรวจสอบและรับรองรายงานทางประวัติศาสตร์ของตนอย่างไร —
            เปรียบเทียบระบบอิสนาดของโลกอิสลาม กับกระบวนการคัดเลือกสารบบของโลกคริสเตียน
          </p>
        </div>
      </section>

      {/* METHODOLOGY SECTION */}
      <section
        className="relative py-20 md:py-24 overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, #3E2723 0%, #291713 45%, #221310 70%, #3E2723 100%)",
        }}
      >
        {/* แสงพื้นหลัง — เปลี่ยนโทนตาม Tab */}
        <div
          className="absolute inset-0 pointer-events-none transition-all duration-700"
          style={{
            backgroundImage: `radial-gradient(ellipse at 20% 15%, ${method.accent.glow}, transparent 55%), radial-gradient(ellipse at 80% 45%, rgba(212,175,55,0.08), transparent 50%), radial-gradient(ellipse at 30% 85%, ${method.accent.glow}, transparent 55%)`,
          }}
        />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* TAB SWITCHER */}
          <div className="flex justify-center gap-3 md:gap-5 mb-10">
            {Object.values(methodologies).map((m) => {
              const active = tab === m.id;
              return (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setTab(m.id)}
                  className={`relative px-6 md:px-10 py-3 md:py-4 rounded-card border transition-all duration-300 cursor-pointer ${
                    active ? "scale-[1.03]" : "opacity-60 hover:opacity-90"
                  }`}
                  style={{
                    background: active
                      ? "linear-gradient(160deg, rgba(212,175,55,0.16), rgba(139,26,26,0.10))"
                      : "rgba(245,230,211,0.04)",
                    borderColor: active
                      ? "rgba(212,175,55,0.75)"
                      : "rgba(197,160,89,0.25)",
                    boxShadow: active
                      ? "0 0 24px rgba(212,175,55,0.25), inset 0 1px 0 rgba(245,230,211,0.1)"
                      : "none",
                  }}
                >
                  {active && (
                    <>
                      <span className="ic-corner ic-corner-tl" />
                      <span className="ic-corner ic-corner-tr" />
                      <span className="ic-corner ic-corner-bl" />
                      <span className="ic-corner ic-corner-br" />
                    </>
                  )}
                  <span
                    className={`block ${m.markFont} text-lg md:text-xl leading-tight mb-1 ${
                      active ? "text-gold" : "text-paper-white/50"
                    }`}
                  >
                    {m.tabSub}
                  </span>
                  <span
                    className={`block font-pridi text-base md:text-lg font-semibold ${
                      active ? "text-paper-white" : "text-paper-white/60"
                    }`}
                  >
                    {m.tabLabel}
                  </span>
                  <span
                    className="block font-cinzel text-[9px] tracking-[0.3em] uppercase mt-1"
                    style={{ color: active ? method.accent.label : "rgba(255,255,240,0.35)" }}
                  >
                    {m.tabEn}
                  </span>
                </button>
              );
            })}
          </div>

          {/* INTRO */}
          <div key={`intro-${tab}`} className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="block h-px w-16 bg-gradient-to-r from-transparent to-gold/60" />
              <span className="text-gold text-sm">✦</span>
              <span className="block h-px w-16 bg-gradient-to-l from-transparent to-gold/60" />
            </div>
            <p className="font-pridi text-paper-white/60 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              {method.intro}
            </p>
          </div>

          {/* CONTENT SECTIONS */}
          <div key={`sections-${tab}`} className="space-y-8 md:space-y-10">
            {method.sections.map((section) => (
              <SectionCard key={section.no} section={section} accent={method.accent} />
            ))}
          </div>

          {/* REFERENCES */}
          <div key={`refs-${tab}`} data-reveal className="mt-14">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-gold text-sm">✦</span>
              <h4 className="font-cinzel text-xs tracking-[0.3em] uppercase text-gold">
                แหล่งอ้างอิง
              </h4>
              <span className="block h-px flex-1 bg-gradient-to-r from-gold/40 to-transparent" />
            </div>
            <ol className="space-y-2 list-decimal list-inside">
              {method.refs.map((ref, i) => (
                <li key={i} className="font-pridi text-xs md:text-sm text-paper/55 leading-relaxed">
                  {ref}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="py-12 md:py-20 bg-ink text-paper-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-reveal className="text-center mb-10">
            <p className="font-pridi text-xs tracking-[0.4em] uppercase text-gold mb-3">
              ข้อมูลเปรียบเทียบ
            </p>
            <h2 className="font-pridi text-2xl md:text-3xl text-paper-white mb-4">
              สรุปเปรียบเทียบระเบียบวิธี
            </h2>
            <div className="mx-auto h-px w-16 bg-gold/50" />
          </div>

          <div
            data-reveal
            className="relative rounded-card border border-gold/30 overflow-hidden"
            style={{ background: "rgba(255,255,240,0.03)" }}
          >
            <span className="ic-corner ic-corner-tl" />
            <span className="ic-corner ic-corner-tr" />
            <span className="ic-corner ic-corner-bl" />
            <span className="ic-corner ic-corner-br" />

            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse">
                <thead>
                  <tr className="border-b border-gold/30" style={{ background: "rgba(212,175,55,0.08)" }}>
                    <th className="font-pridi text-sm text-paper/60 font-semibold text-left px-4 md:px-6 py-4 w-[28%]">
                      หัวข้อเปรียบเทียบ
                    </th>
                    <th className="font-pridi text-base text-gold font-bold text-left px-4 md:px-6 py-4 w-[36%]">
                      โลกอิสลาม (อิสนาด)
                    </th>
                    <th className="font-pridi text-base text-paper/80 font-bold text-left px-4 md:px-6 py-4 w-[36%]">
                      โลกคริสเตียน (สารบบ)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr
                      key={row.topic}
                      className="border-b border-gold/10 last:border-0"
                      style={{ background: i % 2 === 1 ? "rgba(212,175,55,0.03)" : "transparent" }}
                    >
                      <td className="font-pridi text-xs md:text-sm text-paper/60 px-4 md:px-6 py-4 leading-relaxed align-top">
                        {row.topic}
                      </td>
                      <td className="font-pridi text-xs md:text-sm text-gold px-4 md:px-6 py-4 leading-relaxed align-top">
                        {row.islam}
                      </td>
                      <td className="font-pridi text-xs md:text-sm text-paper/85 px-4 md:px-6 py-4 leading-relaxed align-top">
                        {row.christian}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
