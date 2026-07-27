"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import IsnadChainMap from "../../components/IsnadChainMap";
import QuranTawaturMap from "../../components/QuranTawaturMap";
import CanonPathMap from "../../components/CanonPathMap";

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
      {
        no: "VI",
        mark: "طبقة",
        title: "ตำราอัฏฏอบาก็อต: แผนที่ชั้นรุ่นที่ทำให้อิสนาดถูกพิสูจน์ว่าผิดได้",
        paragraphs: [
          "เงื่อนไขข้อแรกของหะดีษเศาะฮีห์ในบทที่ III คือ \"อิตติศอล\" — สายรายงานต้องต่อเนื่องไม่ขาดตอน แต่เงื่อนไขนี้จะเป็นเพียงคำประกาศลอยๆ ทันที หากไม่มีเครื่องมือตรวจว่าผู้รายงาน ก. มีชีวิตทันและอยู่ในที่ที่จะได้ยินจาก ข. ได้จริงหรือไม่ ศาสตร์อัลญัรห์ วัตตะอ์ดีลในบทที่ IV ตอบคำถามว่า \"ผู้รายงานคนนี้น่าเชื่อถือเพียงใด\" ส่วนตำราอัฏฏอบาก็อตตอบอีกคำถามหนึ่งที่ต่างออกไปโดยสิ้นเชิง — \"ผู้รายงานคนนี้มีชีวิตอยู่ช่วงใด พำนักที่เมืองใด และเป็นไปได้หรือไม่ที่เขาจะพบครูที่เขาอ้างถึง\"",
          "ฏอบาก็อต (طبقات พหูพจน์ของ ฏอบาเกาะฮ์ แปลว่า \"ชั้น\" หรือ \"รุ่น\") คือวรรณกรรมชีวประวัติที่จัดผู้คนเป็นชั้นรุ่นเรียงตามลำดับเวลา แต่ละชั้นคือกลุ่มคนร่วมสมัยที่มีอายุไล่เลี่ยกันและรับความรู้จากครูชุดเดียวกัน วรรณกรรมประเภทนี้ก่อตัวขึ้นในช่วงปลายคริสต์ศตวรรษที่ 8 ถึงศตวรรษที่ 9 และเกิดขึ้นโดยตรงเพื่อเป็นเครื่องมือให้นักหะดีษใช้จำแนกผู้รายงานและตัดสินคุณภาพของสายรายงานแต่ละสาย",
          "ตำราที่เก่าแก่ที่สุดที่ตกทอดมาถึงปัจจุบันคือ กิตาบ อัฏฏอบาก็อต อัลกะบีร ของ อิบนุ สะอด์ (เสียชีวิต ฮ.ศ. 230 / ค.ศ. 845) ผู้เป็นเลขานุการของอัลวากิดี นับเป็นพจนานุกรมชีวประวัติเล่มแรกสุดของโลกอิสลามที่ยังหลงเหลืออยู่ บรรจุชีวประวัติคนหลายพันคน เริ่มจากชีวประวัติท่านนบี ต่อด้วยเศาะฮาบะฮ์เรียงตามชั้นรุ่น แล้วจึงเรียงผู้รายงานรุ่นถัดมา \"ตามเมือง\" — มะดีนะฮ์ กูฟะฮ์ บัศเราะฮ์และแบกแดด โดยมีเล่มที่ 8 อุทิศให้ผู้รายงานสตรีทั้งเล่ม ฉบับวิชาการที่แวดวงบูรพคดีศึกษาใช้อ้างอิงคือฉบับของ Eduard Sachau ตีพิมพ์โดยสำนักพิมพ์ Brill เมืองไลเดน ระหว่าง ค.ศ. 1904-1940",
          "หลักการเบื้องหลังถูกสรุปไว้ในคำกล่าวที่ถ่ายทอดกันมาอย่างแพร่หลายจากสุฟยาน อัษเษารี (เสียชีวิต ฮ.ศ. 161) ว่า \"เมื่อบรรดาผู้รายงานหันมาใช้การโกหก เราก็ใช้วันเวลาเข้าจัดการพวกเขา\" — ปีเกิดและปีตายกลายเป็นอาวุธตรวจสอบที่ผู้แต่งรายงานปลอมหลบเลี่ยงไม่ได้",
          "ประโยชน์ใช้สอยจริงเห็นชัดที่สุดในกรณี \"อันอะนะฮ์\" — รายงานที่ผู้ถ่ายทอดใช้เพียงคำว่า \"จาก\" (عن) โดยไม่ระบุว่าได้ยินมาโดยตรง นักวิชาการหะดีษเห็นพ้องกันว่ารายงานลักษณะนี้จะถือเป็นสายต่อเนื่องได้ก็ต่อเมื่อครบ 3 เงื่อนไข ซึ่งทั้งสามข้อตอบไม่ได้เลยหากปราศจากข้อมูลฏอบาก็อต:",
        ],
        points: [
          "ผู้รายงานทั้งสองต้องมีชีวิตร่วมสมัยกันจริง (มุอาศอเราะฮ์) — ตรวจจากปีเกิดและปีตายที่ตำราฏอบาก็อตบันทึกไว้",
          "ต้องไม่มีหลักฐานว่าการพบกันเป็นไปไม่ได้ — ข้อมูลถิ่นพำนักและการเดินทาง (ริห์ละฮ์) ที่ตำราจัดเรียง \"ตามเมือง\" คือสิ่งที่ใช้ตอบข้อนี้",
          "ผู้รายงานต้องไม่ขึ้นชื่อเรื่องตัดลีส — การกลบชื่อครูที่อ่อนแอในสายรายงานด้วยถ้อยคำคลุมเครือ ซึ่งเป็นข้อมูลที่บันทึกไว้ในรายการชีวประวัติเช่นกัน",
        ],
        paragraphsAfter: [
          "ราวหกศตวรรษต่อมา อิบนุ ฮะญัร อัลอัสเกาะลานี (เสียชีวิต ฮ.ศ. 852 / ค.ศ. 1449) ทำให้ระบบนี้เป็นมาตรฐาน โดยในบทนำของ ตักรีบุตตะฮ์ซีบ เขาจัดผู้รายงานในตำราหะดีษหลักทั้งหกเล่มเข้าสู่ชั้นรุ่น 12 ชั้น ไล่จากชั้นที่ 1 คือเศาะฮาบะฮ์ ลงมาจนถึงชั้นสุดท้ายคือรุ่นร่วมสมัยกับผู้รวบรวมตำราทั้งหก (พึงระวังไม่สับสน: ในหนังสือเล่มเดียวกันนี้ อิบนุ ฮะญัรยังวาง \"ระดับความน่าเชื่อถือ 12 ขั้น\" ไว้อีกชุดหนึ่ง ซึ่งเป็นคนละระบบกัน — ชุดหนึ่งบอกว่าอยู่ยุคใด อีกชุดบอกว่าเชื่อถือได้แค่ไหน)",
          "นิยามของชั้นที่ 5 และ 6 แสดงให้เห็นชัดที่สุดว่าระบบนี้ \"เข้ารหัสการติดต่อที่พิสูจน์ได้\" ไว้ในตัวมันเอง — ชั้นที่ 5 คือตาบิอีนรุ่นเล็กที่อาจเคยเห็นเศาะฮาบะฮ์หนึ่งถึงสองท่าน แต่ยังไม่ยืนยันแน่ชัดว่าได้ยินจากท่านเหล่านั้นจริงหรือไม่ (ตัวอย่าง: อัลอะอ์มัช) ส่วนชั้นที่ 6 คือผู้ร่วมสมัยกับชั้นที่ 5 ที่ไม่ปรากฏหลักฐานว่าเคยพบเศาะฮาบะฮ์ท่านใดเลย (ตัวอย่าง: อิบนุ ญุร็อยจ์) — เพียงทราบว่าผู้รายงานอยู่ชั้นที่ 6 ก็เพียงพอให้ตั้งข้อสงสัยทันทีเมื่อเขาอ้างรายงาน \"จาก\" เศาะฮาบะฮ์โดยตรง",
          "แบบแผนการจัดชั้นรุ่นนี้ยังขยายออกไปนอกวงการหะดีษจนกลายเป็นแม่แบบของวรรณกรรมชีวประวัติทั้งอารยธรรม — ฏอบาก็อตอัลหะนาบิละฮ์ ของอิบนุ อบี ยะอ์ลา, ฏอบาก็อต อัชชาฟิอียะฮ์ อัลกุบรอ ของอัสสุบกี (เสียชีวิต ฮ.ศ. 771 / ค.ศ. 1370) ไปจนถึงฏอบาก็อตของนักอ่านอัลกุรอาน นักภาษาศาสตร์ และแพทย์",
          "ข้อสังเกตเชิงระเบียบวิธี: ตำราฏอบาก็อตเองก็ถูกรวบรวมขึ้นด้วยสายรายงาน และปีเกิด-ปีตายของผู้รายงานบางคนก็ขัดกันเองระหว่างแหล่ง นักบูรพคดีศึกษาสายวิพากษ์ตั้งแต่ Goldziher และ Schacht จึงแย้งว่าการนำข้อมูลจากภายในประเพณีมาตรวจสอบประเพณีเดียวกันเสี่ยงต่อการให้เหตุผลวนเป็นวงกลม ขณะที่ฝ่ายที่เห็นต่างอย่าง Harald Motzki และ M.M. Al-Azami ชี้ว่าคลังชีวประวัติขนาดนี้ ซึ่งรวบรวมโดยผู้เขียนต่างสำนัก ต่างเมือง และต่างยุคกัน ให้ \"จุดตรวจไขว้\" จำนวนมหาศาลจนการปลอมแปลงอย่างเป็นระบบยากจะรอดสายตา — วิธี isnad-cum-matn analysis ที่ใช้ในวงวิชาการปัจจุบันก็อาศัยจุดตรวจไขว้เหล่านี้เอง กระนั้นสิ่งที่ทั้งสองฝ่ายไม่โต้แย้งกันคือ ไม่มีประเพณีเอกสารโบราณอื่นใดสร้างคลังข้อมูล \"ใคร อยู่เมื่อไร ที่ไหน เรียนกับใคร\" ในระดับที่ทำให้ข้ออ้างเรื่องการถ่ายทอดถูกพิสูจน์ว่าผิดได้อย่างเป็นระบบเช่นนี้",
        ],
      },
    ],
    note: {
      title: "หมายเหตุ: การบันทึกหะดีษมีมาตั้งแต่ยุคท่านนบียังมีชีวิต",
      paragraphs: [
        "แม้ระบบอิสนาดเต็มรูปแบบจะถูกบังคับใช้ในภายหลัง (หลังเกิดฟิตนะฮ์) แต่การบันทึกหะดีษนั้นเริ่มตั้งแต่ท่านนบีมุฮัมมัด (ซ.ล.) ยังมีชีวิตอยู่ ในรูปของบันทึกส่วนตัว (เศาะฮีฟะฮ์) ของเหล่าเศาะฮาบะฮ์ — ที่โด่งดังที่สุดคือ อัศเศาะฮีฟะฮ์ อัศศอดิเกาะฮ์ ของอับดุลลอฮ์ อิบนุ อัมร์ อิบนิ อัลอาศ ซึ่งบันทึกหะดีษราวหนึ่งพันบท โดยได้รับอนุญาตจากท่านนบีโดยตรงว่า \"จงเขียนเถิด ขอสาบานต่อผู้ที่ชีวิตฉันอยู่ในพระหัตถ์ของพระองค์ ไม่มีสิ่งใดออกจากปาก (ของฉัน) นอกจากความจริง\" (สุนันอบีดาวูด, หะดีษที่ 3646)",
        "เหตุที่ยุคนั้นยังไม่จำเป็นต้องมีสายรายงาน ก็เพราะเศาะฮาบะฮ์สามารถตรวจสอบความถูกต้องของทุกรายงานกับท่านนบีได้ด้วยตนเองโดยตรง — ต้นทางของข้อมูลยังมีชีวิตอยู่ท่ามกลางพวกเขา อิสนาดจึงเป็น \"เครื่องมือที่ถูกสร้างขึ้นเมื่อจำเป็น\" ไม่ใช่หลักฐานว่าก่อนหน้านั้นไร้เกณฑ์ตรวจสอบ",
        "หลักฐานเชิงประจักษ์ที่หนักแน่นที่สุดคือ เศาะฮีฟะฮ์ของฮัมมาม อิบนุ มุนับบิฮ์ (ลูกศิษย์ของอบูฮุร็อยเราะฮ์ บันทึกก่อน ฮ.ศ. 101) ซึ่งต้นฉบับตกทอดมาถึงปัจจุบันและถูกตีพิมพ์แล้ว — เมื่อนำ 138 หะดีษในนั้นเทียบกับที่ปรากฏใน มุสนัดอะห์มัด และเศาะฮีห์อัลบุคอรีที่รวบรวมหลังจากนั้นกว่าศตวรรษ พบว่าเนื้อความแทบจะตรงกันคำต่อคำ Al-Azami ได้รวบรวมรายชื่อเศาะฮาบะฮ์และตาบิอีนกว่า 50 ท่านที่มีบันทึกหะดีษเป็นลายลักษณ์อักษรไว้ในงานวิจัยของเขา — คนยุคหลังจึงมีทั้ง \"แบบอย่างการบันทึก\" และ \"เกณฑ์การตรวจสอบ\" ตกทอดมาอย่างต่อเนื่องไม่ขาดสาย",
      ],
    },
    refs: [
      "M.M. Al-Azami, The History of the Qur'anic Text: From Revelation to Compilation, UK Islamic Academy, 2003, pp. 203-214.",
      "M.M. Al-Azami, Studies in Early Hadith Literature, American Trust Publications, 1978 — หลักฐานการบันทึกหะดีษยุคเศาะฮาบะฮ์และตาบิอีน.",
      "อบูดาวูด, สุนันอบีดาวูด, หะดีษที่ 3646 — การอนุญาตให้อับดุลลอฮ์ อิบนุ อัมร์บันทึกหะดีษ.",
      "Muhammad Hamidullah (บรรณาธิการ), Sahifah Hammam ibn Munabbih, ฉบับตีพิมพ์พร้อมการศึกษาเปรียบเทียบ.",
      "มุสลิม อิบนุ อัลฮัจญาจ, เศาะฮีห์มุสลิม, มุก็อดดิมะฮ์ (บทนำว่าด้วยการตรวจสอบรายงาน).",
      "อิบนุ อัศเศาะลาห์, มุก็อดดิมะฮ์ อิบนิ อัศเศาะลาห์ (อุลูมุลหะดีษ) — เกณฑ์ 5 ข้อของหะดีษเศาะฮีห์.",
      "อิบนุ สะอด์, กิตาบ อัฏฏอบาก็อต อัลกะบีร — ฉบับวิชาการ: Eduard Sachau (บรรณาธิการ), Biographien Muhammeds, seiner Gefährten und der späteren Träger des Islams, Leiden: Brill, ค.ศ. 1904-1940.",
      "อิบนุ ฮะญัร อัลอัสเกาะลานี, ตักรีบุตตะฮ์ซีบ, มุก็อดดิมะฮ์ — ระบบชั้นรุ่น 12 ชั้น และระดับความน่าเชื่อถือ 12 ขั้น.",
      "Jonathan A.C. Brown, Hadith: Muhammad's Legacy in the Medieval and Modern World, Oneworld, 2009 — บทบาทของวรรณกรรมริญาลและฏอบาก็อตในการวิจารณ์หะดีษ.",
      "Eerik Dickinson, The Development of Early Sunnite Ḥadīth Criticism, Leiden: Brill, 2001 — พัฒนาการของศาสตร์วิจารณ์ผู้รายงานยุคแรก.",
      "Harald Motzki, Analysing Muslim Traditions, Leiden: Brill, 2010 — ระเบียบวิธี isnad-cum-matn analysis.",
      "อิบนุ อัลญะซะรี, อันนัชร์ ฟิลกิรออาตอัลอัชร์ — เงื่อนไขสามข้อของการอ่านที่ถูกต้อง และรายชื่อสายการอ่านของอิมามทั้งสิบพร้อมรอวี.",
      "อิบนุ อัลญะซะรี, ฆอยะตุนนิฮายะฮ์ ฟี ฏอบาก็อตอัลกุรรออ์ — พจนานุกรมชีวประวัตินักอ่านอัลกุรอานเรียงตามชั้นรุ่น.",
      "อิบนุ มุญาฮิด, กิตาบุสสับอะฮ์ ฟิลกิรออาต — การจัดกลุ่มการอ่านเจ็ดสายในศตวรรษที่ 4 ฮ.ศ.",
      "เศาะฮีห์อัลบุคอรี, กิตาบ ฟะฎออิลุลกุรอาน — หะดีษที่ 4998 (การทวนทานครั้งสุดท้ายกับญิบรีล) และ 4999 (\"จงรับอัลกุรอานจากสี่คน\" — เศาะฮาบะฮ์ผู้เป็นครูสอนอ่านที่ท่านนบีระบุชื่อ); กิตาบ มะนากิบุลอันศอร หะดีษที่ 3809 (อุบัย อิบนุ กะอ์บ).",
      "Shady Hekmat Nasser, The Transmission of the Variant Readings of the Qurʾān: The Problem of Tawātur and the Emergence of Shawādhdh, Leiden: Brill, 2013 — ทัศนะวิพากษ์ต่อสถานะมุตะวาติรของการอ่านรายจุด.",
      "Marijn van Putten, “The Grace of God as evidence for a written Uthmanic archetype”, BSOAS 82/2 (2019), pp. 271-288 — หลักฐานจากต้นฉบับว่าสายลายลักษณ์ทั้งหมดสืบย้อนถึงต้นแบบฉบับเดียว.",
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
      {
        no: "VI",
        mark: "Χρ",
        title: "การกำหนดอายุงานเขียน: เทียบกับเอกสารที่ระบุปี",
        paragraphs: [
          "งานเขียนพันธสัญญาใหม่และต้นฉบับสำเนาแทบทั้งหมด \"ไม่ได้ระบุปีที่เขียน\" ไว้ในตัวเอกสาร นักวิชาการจึงต้องกำหนดอายุทางอ้อมด้วย 3 วิธีหลัก:",
        ],
        points: [
          "การอ้างอิงจากภายนอก (External Attestation) — หากนักเขียนที่ทราบปีแน่ชัดยกข้อความจากหนังสือเล่มใด แสดงว่าเล่มนั้นต้องเขียนก่อนหน้านั้น (terminus ante quem) เช่น จดหมาย 1 Clement (ราว ค.ศ. 95-96) ยกข้อความจาก 1 โครินธ์ จึงยืนยันว่าจดหมายเปาโลฉบับนี้มีอยู่ก่อนปลายศตวรรษที่ 1",
          "อักขรวิทยา (Palaeography) — เทียบรูปแบบลายมือของต้นฉบับกับเอกสารราชการหรือสัญญาที่ \"ลงวันที่ไว้\" เช่น กรณี P52 ชิ้นส่วนยอห์นที่เก่าแก่ที่สุด C.H. Roberts กำหนดอายุราว ค.ศ. 125 โดยเทียบลายมือกับปาปิรุสลงวันที่อย่าง P.Fayum 110 (ค.ศ. 94) — วิธีนี้ให้ได้เพียง \"ช่วงเวลา\" ที่มีความคลาดเคลื่อนราว ±25-50 ปี",
          "หลักฐานภายใน (Internal Evidence) — เนื้อหาที่พาดพิงเหตุการณ์ที่ระบุปีได้ เช่น การกล่าวถึง (หรือไม่กล่าวถึง) การทำลายพระวิหารเยรูซาเล็ม ค.ศ. 70 ถูกใช้เป็นหมุดแบ่งว่างานเขียนชิ้นนั้นเกิดก่อนหรือหลังเหตุการณ์",
        ],
        paragraphsAfter: [
          "ข้อสังเกตเชิงระเบียบวิธี: ทั้งสามวิธีให้ผลเป็น \"ช่วงประมาณการ\" ไม่ใช่ปีที่แน่นอน และไม่ได้ระบุตัวบุคคลผู้ส่งต่อเอกสาร — ต่างจากอิสนาดที่ผูกรายงานกับรายชื่อบุคคลจริงที่ตรวจสอบชีวประวัติได้ทุกทอด",
        ],
        link: {
          href: "/archive/biblical-codices/p52",
          label: "ดูตัวอย่างการกำหนดอายุจริง — หน้า Papyrus P52 ในคลังเอกสาร →",
        },
      },
    ],
    refs: [
      "Bruce M. Metzger, The Canon of the New Testament: Its Origin, Development, and Significance, Oxford: Clarendon Press, 1987 (เกณฑ์คัดเลือก: pp. 251-254).",
      "Eusebius, Historia Ecclesiastica 3.25 (การแบ่งกลุ่มหนังสือ), 3.39.4 (Papias), 6.25.14 (Origen ว่าด้วยผู้เขียนฮีบรู).",
      "Athanasius, Epistula Festalis XXXIX (จดหมายเทศกาลฉบับที่ 39), ค.ศ. 367.",
      "F.F. Bruce, The Canon of Scripture, InterVarsity Press, 1988 (ประกอบเรื่องสภาฮิปโป-คาร์เธจ).",
      "C.H. Roberts, An Unpublished Fragment of the Fourth Gospel in the John Rylands Library, Manchester University Press, 1935 — การกำหนดอายุ P52 ด้วยการเทียบลายมือ.",
      "B.M. Metzger & B.D. Ehrman, The Text of the New Testament, 4th ed., Oxford University Press, 2005 — ระเบียบวิธีอักขรวิทยาและการประเมินอายุต้นฉบับ.",
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

      {section.link && (
        <a
          href={section.link.href}
          className="inline-block font-pridi text-sm text-gold/90 hover:text-gold border-b border-gold/40 hover:border-gold transition-colors duration-300 mt-1"
        >
          {section.link.label}
        </a>
      )}

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
  const [copied, setCopied] = useState(false);
  const method = methodologies[tab];

  // คัดลอกลิงก์หน้านี้ไว้แชร์ต่อ
  const copyPageLink = async () => {
    const url = `${window.location.origin}/methodology`;
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      // เบราว์เซอร์เก่า / ไม่ได้เปิดผ่าน https — ใช้วิธีสำรอง
      const ta = document.createElement("textarea");
      ta.value = url;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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

          {/* แผนภาพประจำ Tab — อยู่เหนือการ์ดทั้งหมด */}
          <div key={`method-map-${tab}`} className="mb-10 md:mb-14">
            {tab === "islam" ? <IsnadChainMap /> : <CanonPathMap />}
          </div>

          {/* CONTENT SECTIONS */}
          <div key={`sections-${tab}`} className="space-y-8 md:space-y-10">
            {method.sections.map((section) => (
              <Fragment key={section.no}>
                <SectionCard section={section} accent={method.accent} />
                {/* แผนภาพมุตะวาติร — วางไว้ใต้การ์ดบทที่ V ของแท็บระบบอิสนาด */}
                {tab === "islam" && section.no === "V" && <QuranTawaturMap />}
              </Fragment>
            ))}
          </div>

          {/* หมายเหตุพิเศษประจำ Tab */}
          {method.note && (
            <div
              key={`note-${tab}`}
              data-reveal
              className="relative rounded-card border border-gold/50 p-6 md:p-8 mt-8 md:mt-10"
              style={{ background: "rgba(212,175,55,0.07)" }}
            >
              <span className="ic-corner ic-corner-tl" />
              <span className="ic-corner ic-corner-tr" />
              <span className="ic-corner ic-corner-bl" />
              <span className="ic-corner ic-corner-br" />
              <div className="flex items-start gap-3 mb-4">
                <span className="text-gold text-lg mt-0.5 shrink-0">✦</span>
                <h3 className="font-pridi text-lg md:text-xl text-gold font-semibold leading-snug">
                  {method.note.title}
                </h3>
              </div>
              {method.note.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="font-pridi text-sm md:text-base text-paper/85 leading-relaxed mb-4 last:mb-0"
                >
                  {p}
                </p>
              ))}
            </div>
          )}

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

          {/* แถบนำทางท้ายการ์ด — กลับขึ้นบน + คัดลอกลิงก์แชร์ */}
          <div className="mt-16 pt-10 border-t border-gold/20">
            <p className="font-cinzel text-xs tracking-[0.35em] uppercase text-gold/50 text-center mb-6">
              Share &amp; Navigate
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="border border-gold/40 text-gold hover:bg-gold/10 hover:border-gold/70 font-pridi text-sm text-center py-2.5 px-6 rounded-btn transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>↑</span>
                <span>กลับขึ้นด้านบน</span>
              </button>
              <button
                onClick={copyPageLink}
                className="bg-gradient-to-r from-gold-dark via-gold to-gold-light hover:from-gold hover:to-gold-light text-ink font-pridi font-semibold text-sm text-center py-2.5 px-6 rounded-btn shadow-glow-sm hover:shadow-glow transition-all duration-300 flex items-center justify-center gap-2"
              >
                {copied ? (
                  <>
                    <span>✓</span>
                    <span>คัดลอกลิงก์แล้ว</span>
                  </>
                ) : (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                    >
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                    </svg>
                    <span>Copy Link — แชร์หน้านี้</span>
                  </>
                )}
              </button>
            </div>
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
