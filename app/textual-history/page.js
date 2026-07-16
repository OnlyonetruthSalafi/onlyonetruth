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

const chronicles = {
  quran: {
    id: "quran",
    tabLabel: "อัลกุรอาน",
    tabSub: "القرآن الكريم",
    tabEn: "THE QUR'AN",
    markFont: "font-amiri",
    accent: {
      glow: "rgba(63,174,90,0.14)",
      label: "#8fd4a4",
      chipText: "#c3e8cd",
      chipBg: "rgba(35,110,60,0.35)",
      chipBorder: "rgba(63,174,90,0.4)",
    },
    intro:
      "จากวะฮีย์แรก ณ ถ้ำฮิรออ์ สู่มุศฮัฟมาตรฐานที่ใช้กันทั่วโลกภายในเวลาเพียง 40 กว่าปี — กระบวนการรวบรวมที่อาศัยทั้งการท่องจำระดับมุตะวาติรและบันทึกลายลักษณ์อักษรควบคู่กัน",
    events: [
      {
        chapter: "I",
        era: "ยุคแห่งการประทาน",
        year: "ค.ศ. 610–632",
        title: "นักเขียนวะฮีย์ประจำตัวท่านนบี",
        mark: "الوحي",
        narrative:
          "ตลอด 23 ปีของการประทานอัลกุรอาน ท่านนบีมุฮัมมัด (ซ.ล.) มีนักเขียนวะฮีย์ (กุตตาบ อัลวะฮีย์) ประจำตัว 23 ท่านตามบันทึกของอิบนุกะซีร รวมถึงเซด อิบนุ ษาบิต ผู้บันทึกทุกโองการทันทีที่ประทานลงมา — บนใบปาล์ม หนังสัตว์ แผ่นหิน และกระดูกไหปลาร้าอูฐ ควบคู่กันนั้นเหล่าเศาะฮาบะฮ์จำนวนมากท่องจำอัลกุรอานทั้งเล่มขึ้นใจ และทุกเดือนเราะมะฎอนท่านนบีจะทบทวนอัลกุรอานทั้งหมดกับญิบรีล (อัลอัรเฎาะฮ์) — ในปีสุดท้ายแห่งชีวิต ท่านทบทวนถึงสองรอบ",
        points: [
          "ค.ศ. 610 — วะฮีย์แรก ณ ถ้ำฮิรออ์",
          "นักเขียนวะฮีย์ประจำตัว 23 ท่าน (ตามอิบนุกะซีร) บันทึกทันทีที่ประทาน",
          "ระบบท่องจำทั้งเล่มควบคู่บันทึกลายลักษณ์อักษร",
          "อัลอัรเฎาะฮ์ — ทบทวนกับญิบรีลทุกเราะมะฎอน",
        ],
      },
      {
        chapter: "II",
        era: "สิ้นสุดวะฮีย์",
        year: "ค.ศ. 632",
        title: "ท่านนบีเสียชีวิต — อบูบักรเป็นเคาะลีฟะฮ์",
        mark: "الخلافة",
        narrative:
          "เมื่อท่านนบีเสียชีวิต วะฮีย์ก็สิ้นสุดลงโดยสมบูรณ์ อบูบักรขึ้นเป็นเคาะลีฟะฮ์คนแรกท่ามกลางวิกฤตการก่อกบฏทั่วคาบสมุทร ขณะนั้นอัลกุรอานทั้งเล่มดำรงอยู่อย่างครบถ้วนในความทรงจำของบรรดาฮาฟิซ และในชิ้นส่วนบันทึกที่กระจัดกระจายตามผู้บันทึกแต่ละคน — แต่ยังไม่ถูกรวมเป็นเล่มเดียว",
        points: [
          "วะฮีย์สิ้นสุดโดยสมบูรณ์ — ข้อความถูกกำหนดตายตัวแล้ว",
          "อัลกุรอานครบถ้วนในความทรงจำฮาฟิซและบันทึกกระจัดกระจาย",
        ],
      },
      {
        chapter: "III",
        era: "จุดเปลี่ยน — ยุทธการยะมามะฮ์",
        year: "ค.ศ. 633",
        title: "การเสียชีวิตของฮาฟิซจำนวนมาก",
        mark: "اليمامة",
        narrative:
          "ในสงครามปราบกบฏมุซัยลิมะฮ์ที่ยะมามะฮ์ ฮาฟิซผู้ท่องจำอัลกุรอานเสียชีวิตราว 360–500 คน(เป็นชาวอันศอร 70คน) อุมัร บิน อัลค็อฏฏอบ ตระหนักถึงความเสี่ยงว่าหากฮาฟิซล้มตายไปเรื่อย ๆ ในสมรภูมิ อัลกุรอานบางส่วนอาจสูญหาย จึงเข้าพบอบูบักรและยืนกรานให้สั่งรวบรวมอัลกุรอานเป็นเล่มเดียวอย่างเป็นทางการ แม้อบูบักรจะลังเลในตอนแรกเพราะเป็นสิ่งที่ท่านนบีไม่เคยทำ แต่ในที่สุดก็เห็นพ้อง",
        points: [
          "ฮาฟิซเสียชีวิตราว360คนในสมรภูมิเดียว(รวมทั้งที่ท่องจำทั้งหมดและบางส่วน)",
          "อุมัรเสนอให้รวบรวมเป็นเล่มเพื่อป้องกันการสูญหาย",
          "การตัดสินใจครั้งประวัติศาสตร์ของอบูบักร",
        ],
      },
      {
        chapter: "IV",
        era: "การรวบรวมครั้งแรก",
        year: "ค.ศ. 633–634",
        title: "ภารกิจของเซด อิบนุ ษาบิต",
        mark: "الجمع",
        narrative:
          "อบูบักรมอบหมายให้เซด อิบนุ ษาบิต — นักเขียนวะฮีย์คนสำคัญที่สุดและผู้ร่วมทบทวนอัลอัรเฎาะฮ์ครั้งสุดท้าย — เป็นหัวหน้าการรวบรวม เซดใช้มาตรฐานเข้มงวดเป็นสองชั้น: ทุกโองการต้องมีบันทึกลายลักษณ์อักษรที่เขียนต่อหน้าท่านนบี และมีพยานยืนยันอย่างน้อยสองคน แล้วนำมาสอบทานกับการท่องจำของเหล่าฮาฟิซ จนได้ 'ศุฮุฟ' ฉบับสมบูรณ์เล่มแรก",
        points: [
          "หลักฐานสองชั้น — ลายลักษณ์อักษร + พยานสองคน",
          "สอบทานกับการท่องจำของฮาฟิซทั้งชุมชน",
          "ได้ศุฮุฟ (แผ่นบันทึก) ฉบับสมบูรณ์เล่มแรก",
        ],
      },
      {
        chapter: "V",
        era: "การเก็บรักษา",
        year: "ค.ศ. 634–644",
        title: "ศุฮุฟในความดูแลของเคาะลีฟะฮ์",
        mark: "الصحف",
        narrative:
          "ต้นฉบับศุฮุฟถูกเก็บรักษาโดยอบูบักรจนสิ้นชีวิต แล้วส่งต่อให้เคาะลีฟะฮ์อุมัร และเมื่ออุมัรเสียชีวิตในปี 644 ศุฮุฟถูกมอบให้อยู่ในความดูแลของหัฟเศาะฮ์ ธิดาของอุมัรและภรรยาของท่านนบี — สายการส่งต่อที่บันทึกไว้ชัดเจนทุกทอด ต่างจากประวัติต้นฉบับคัมภีร์อื่นใดในยุคโบราณ",
        points: [
          "สายส่งต่อชัดเจน: อบูบักร → อุมัร → หัฟเศาะฮ์",
          "เก็บรักษาโดยบุคคลที่ใกล้ชิดท่านนบีที่สุด",
        ],
      },
      {
        chapter: "VI",
        era: "ความท้าทายจากการขยายตัว",
        year: "ค.ศ. 644–656",
        title: "ยุคเคาะลีฟะฮ์อุษมาน",
        mark: "القراءات",
        narrative:
          "เมื่อรัฐอิสลามแผ่จากแอฟริกาเหนือจรดเปอร์เซีย ชาวมุสลิมใหม่จากหลากภูมิภาคเริ่มอ่านอัลกุรอานด้วยสำเนียงที่ต่างกัน ขุนพลหุซัยฟะฮ์ อิบนุ อัลยะมาน ซึ่งร่วมทัพในอาร์เมเนียและอาเซอร์ไบจาน เห็นทหารจากอิรักและซีเรียโต้เถียงกันเรื่องวิธีอ่าน จึงรีบกลับมารายงานอุษมานว่า 'จงช่วยประชาชาตินี้ก่อนที่พวกเขาจะขัดแย้งกันเรื่องคัมภีร์ เหมือนที่ยิวและคริสต์เคยเป็น'",
        points: [
          "อาณาจักรขยาย — สำเนียงการอ่านเริ่มแตกต่าง",
          "รายงานของหุซัยฟะฮ์จากแนวรบอาร์เมเนีย",
          "อุษมานตัดสินใจสร้างมาตรฐานเดียว",
        ],
      },
      {
        chapter: "VII",
        era: "การชำระมาตรฐาน",
        year: "ค.ศ. 650",
        title: "คณะกรรมการชำระอัลกุรอาน",
        mark: "اللجنة",
        narrative:
          "อุษมานแต่งตั้งคณะกรรมการสี่คน นำโดยเซด อิบนุ ษาบิต ผู้รวบรวมคนเดิม ร่วมด้วยอับดุลลอฮ์ อิบนุ อัซซุบัยร์, สะอีด อิบนุ อัลอาศ และอับดุรเราะห์มาน อิบนุ อัลฮาริษ ชาวกุเรชสามคน คณะกรรมการยืมศุฮุฟต้นฉบับจากหัฟเศาะฮ์มาเป็นแม่แบบ คัดลอกเป็นสำเนามาตรฐานหลายชุดด้วยสำเนียงกุเรชอันเป็นสำเนียงที่อัลกุรอานถูกประทานลงมา",
        points: [
          "คณะกรรมการ 4 คน นำโดยเซด อิบนุ ษาบิต",
          "ใช้ศุฮุฟของหัฟเศาะฮ์เป็นแม่แบบ — ไม่ได้เริ่มจากศูนย์",
          "ยึดสำเนียงกุเรชเป็นมาตรฐาน",
        ],
      },
      {
        chapter: "VIII",
        era: "เอกภาพแห่งประชาชาติ",
        year: "ค.ศ. 653",
        title: "ส่งมุศฮัฟมาตรฐานไปทั่วอาณาจักร",
        mark: "المصحف",
        narrative:
          "อุษมานส่งสำเนามุศฮัฟมาตรฐานไปยังเมืองหลักทั่วอาณาจักร — มักกะฮ์ กูฟะฮ์ บัศเราะฮ์ ดามัสกัส และเก็บไว้ที่มะดีนะฮ์ พร้อมผู้อ่าน (กอรี) ประจำแต่ละฉบับ และมีคำสั่งให้ทำลายบันทึกส่วนบุคคลที่แตกต่างออกไปทั้งหมดเพื่อรักษาเอกภาพ ศุฮุฟต้นฉบับถูกส่งคืนหัฟเศาะฮ์ตามสัญญา การตัดสินใจอันเด็ดขาดนี้ได้รับความเห็นพ้องจากเหล่าเศาะฮาบะฮ์ที่ยังมีชีวิตอยู่",
        points: [
          "สำเนามาตรฐานส่งไป มักกะฮ์ กูฟะฮ์ บัศเราะฮ์ ดามัสกัส",
          "แต่ละฉบับมีกอรีประจำ สอนการอ่านที่ถูกต้อง",
          "เศาะฮาบะฮ์เห็นพ้อง — ไม่มีการคัดค้านข้อความ",
        ],
      },
      {
        chapter: "IX",
        era: "มาตรฐานถาวร",
        year: "ค.ศ. 656 เป็นต้นไป",
        title: "มุศฮัฟอุษมานยืนยงถึงปัจจุบัน",
        mark: "الحفظ",
        narrative:
          "นับแต่นั้นโลกมุสลิมมีข้อความมาตรฐานเดียว ไม่เคยเกิดการถกเถียงเรื่อง 'สารบบ' ว่าบทใดควรอยู่หรือไม่ควรอยู่ในคัมภีร์ ต้นฉบับโบราณที่ค้นพบ — ต้นฉบับเบอร์มิงแฮม (คาร์บอนเดต ค.ศ. 568–645), ต้นฉบับศ็อนอาอ์, มุศฮัฟตอปกาปึ และซามาร์กันด์ — ล้วนสอดคล้องกับข้อความที่ใช้กันทุกวันนี้",
        points: [
          "ไม่เคยมีปัญหา 'สารบบ' ตลอดประวัติศาสตร์",
          "ต้นฉบับเบอร์มิงแฮม เก่าแก่ร่วมสมัยท่านนบี",
          "ต้นฉบับโบราณทุกฉบับสอดคล้องกับฉบับปัจจุบัน",
        ],
      },
      {
        chapter: "X",
        era: "มรดกที่มีชีวิต",
        year: "ปัจจุบัน",
        title: "อัลกุรอานฉบับเดียวทั่วโลก",
        mark: "التواتر",
        narrative:
          "ตลอดกว่า 1,400 ปี อัลกุรอานคงข้อความเดิมทุกตัวอักษร ยืนยันด้วยระบบการส่งต่อแบบมุตะวาติร — ฮาฟิซหลายล้านคนทั่วโลกท่องจำทั้งเล่มขึ้นใจในทุกยุคทุกสมัย ควบคู่กับต้นฉบับลายลักษณ์อักษรที่สอดคล้องกันจากตะวันตกจรดตะวันออก มุสลิมที่มักกะฮ์ จาการ์ตา ลอนดอน หรือกรุงเทพฯ อ่านอัลกุรอานฉบับเดียวกันทุกตัวอักษร",
        points: [
          "ฮาฟิซหลายล้านคนท่องจำทั้งเล่มในทุกยุค",
          "กิรออาตทั้งสิบสายย้อนกลับสู่มุศฮัฟเดียวกัน",
          "ข้อความเดียวกันทั่วโลก ทุกนิกาย ทุกทวีป",
        ],
      },
    ],
  },
  bible: {
    id: "bible",
    tabLabel: "ไบเบิล",
    tabSub: "Η ΒΙΒΛΟΣ",
    tabEn: "THE BIBLE",
    markFont: "font-cinzel",
    accent: {
      glow: "rgba(59,125,216,0.14)",
      label: "#8fb4e8",
      chipText: "#c9daf5",
      chipBg: "rgba(43,84,140,0.35)",
      chipBorder: "rgba(120,160,220,0.4)",
    },
    intro:
      "จากพันธกิจของพระเยซูและงานเขียนชุดแรกของเปาโล สู่การคัดเลือก 'สารบบ' พันธสัญญาใหม่ 27 เล่ม ใช้เวลารวมกว่า 360 ปี — ผ่านยุคคำสอนปากเปล่า การถกเถียง การตอบโต้ลัทธินอกรีต และมติสภาคริสตจักรหลายครั้ง",
    events: [
      {
        chapter: "I",
        era: "พันธกิจโลก",
        year: "ราว ค.ศ. 27–30",
        title: "พันธกิจสาธารณะของพระเยซูแห่งนาซาเร็ธ",
        mark: "ΙΗΣΟΥΣ",
        narrative:
          "ตามพระวรสารทั้งสี่ พระเยซูทรงเริ่มพันธกิจสาธารณะหลังรับบัพติศมาจากยอห์นผู้ให้บัพติศมาที่แม่น้ำจอร์แดน ราว ค.ศ. 27–29 พันธกิจกินเวลาประมาณ 1–3 ปี (พระวรสารยอห์นกล่าวถึงเทศกาลปัสกาสามครั้ง จึงมักตีความว่ายาวราวสามปี) จนกระทั่งถูกตรึงกางเขนที่กรุงเยรูซาเล็มสมัยผู้สำเร็จราชการโรมัน ปอนติอัส ปีลาต (ดำรงตำแหน่ง ค.ศ. 26–36) นักวิชาการส่วนใหญ่กำหนดปีตรึงกางเขนไว้ราว ค.ศ. 30 หรือ ค.ศ. 33 — ตลอดช่วงเวลานี้ยังไม่มีการบันทึกคำสอนของพระองค์เป็นลายลักษณ์อักษรแต่อย่างใด คำสอนและเหตุการณ์ต่าง ๆ ถูกส่งต่อด้วยปากเปล่าในหมู่สาวกและผู้ติดตามเป็นเวลาหลายทศวรรษก่อนจะถูกเรียบเรียงเป็นพระวรสาร",
        points: [
          "รับบัพติศมาจากยอห์นผู้ให้บัพติศมา ราว ค.ศ. 27–29",
          "พันธกิจสาธารณะยาวราว 1–3 ปี ตามพระวรสารทั้งสี่",
          "ถูกตรึงกางเขนสมัยปอนติอัส ปีลาต ราว ค.ศ. 30 หรือ 33",
          "ยังไม่มีเอกสารพันธสัญญาใหม่เขียนขึ้นในช่วงนี้ — คำสอนส่งต่อด้วยปากเปล่า",
        ],
      },
      {
        chapter: "II",
        era: "งานเขียนคริสเตียนชุดแรก",
        year: "ค.ศ. 33–65",
        title: "เปาโลกลับใจและเขียนจดหมายฉบับแรกสุดของพันธสัญญาใหม่",
        mark: "ΠΑΥΛΟΣ",
        narrative:
          "เซาโลแห่งทาร์ซัส เดิมเป็นผู้ไล่ล่าข่มเหงชุมชนคริสเตียนยุคแรก ประสบเหตุการณ์กลับใจระหว่างเดินทางไปดามัสกัส ราว ค.ศ. 33–36 หลังจากนั้นเขาใช้ชื่อเปาโลและออกเดินทางทำพันธกิจมิชชันนารีหลายครั้งทั่วเอเชียไมเนอร์และกรีซตลอดสามทศวรรษถัดมา ระหว่างการเดินทางเปาโลเขียนจดหมายถึงคริสตจักรต่าง ๆ ที่ตนก่อตั้งหรือดูแล — จดหมายฉบับ 1 เธสะโลนิกา ซึ่งเขียนขึ้นราว ค.ศ. 50 ได้รับการยอมรับอย่างกว้างขวางจากนักวิชาการว่าเป็นเอกสารพันธสัญญาใหม่ที่เก่าแก่ที่สุดเท่าที่หลงเหลืออยู่ เก่ากว่าพระวรสารทั้งสี่เล่มทั้งหมด เปาโลยังคงเขียนจดหมายต่อเนื่องจนกระทั่งถูกประหารชีวิตที่กรุงโรมสมัยจักรพรรดิเนโร ราว ค.ศ. 64–67",
        points: [
          "กลับใจบนถนนสู่ดามัสกัส ราว ค.ศ. 33–36",
          "1 เธสะโลนิกา (ราว ค.ศ. 50) — เอกสารพันธสัญญาใหม่ฉบับเก่าแก่ที่สุดเท่าที่หลงเหลือ เก่ากว่าพระวรสารทุกเล่ม",
          "จดหมาย 7 ฉบับที่นักวิชาการส่วนใหญ่ยอมรับว่าเปาโลเขียนเอง ได้แก่ โรม 1–2โครินธ์ กาลาเทีย ฟีลิปปี 1เธสะโลนิกา และฟีเลโมน",
          "ถูกประหารชีวิต (มรณสักขี) ที่กรุงโรมสมัยจักรพรรดิเนโร ราว ค.ศ. 64–67",
        ],
      },
      {
        chapter: "III",
        era: "ยุคปิตาจารย์",
        year: "ค.ศ. 90–150",
        title: "คำสอนปากเปล่าและจดหมายเวียน",
        mark: "ΛΟΓΟΣ",
        narrative:
          "คริสตจักรยุคแรกหลังอัครทูต — เคลเมนต์แห่งโรม อิกเนเชียส โพลีคาร์ป — ยังไม่มีแนวคิดเรื่อง 'พันธสัญญาใหม่' เป็นเล่มคัมภีร์ พวกเขาเน้นส่งต่อคำสอนด้วยปากเปล่าและถือคัมภีร์ฮีบรู (ฉบับแปลกรีกเซปตัวจินต์) เป็นพระคัมภีร์หลัก จดหมายของเปาโลเริ่มถูกคัดลอกหมุนเวียนไปตามคริสตจักรต่าง ๆ แต่สถานะของเอกสารแต่ละชิ้นยังไม่ชัดเจนและแตกต่างกันไปในแต่ละท้องถิ่น",
        points: [
          "ยังไม่มีแนวคิด 'สารบบพันธสัญญาใหม่'",
          "เน้นคำสอนปากเปล่า — เอกสารหมุนเวียนตามท้องถิ่น",
          "แต่ละภูมิภาคใช้ชุดเอกสารต่างกัน",
        ],
      },
      {
        chapter: "IV",
        era: "จุดหักเหครั้งใหญ่",
        year: "ค.ศ. 140",
        title: "มาร์เชียน — สารบบฉบับแรกจากฝ่ายนอกรีต",
        mark: "CANON",
        narrative:
          "มาร์เชียนแห่งซิโนเป ผู้ถูกประกาศเป็นพวกนอกรีตในเวลาต่อมา กลับเป็นบุคคลแรกในประวัติศาสตร์ที่จัดทำ 'สารบบ' คัมภีร์คริสต์อย่างเป็นระบบ — เขาปฏิเสธพระเจ้าแห่งพันธสัญญาเดิมทั้งหมด ตัดคัมภีร์ฮีบรูทิ้ง และเลือกใช้เพียงกิตติคุณลูกาฉบับตัดต่อกับจดหมายเปาโล 10 ฉบับ การท้าทายนี้บังคับให้คริสตจักรกระแสหลักต้องเริ่มตอบคำถามว่า หนังสือเล่มใดกันแน่ที่มีสิทธิอำนาจ",
        points: [
          "สารบบฉบับแรกมาจากผู้ถูกตราว่านอกรีต",
          "ตัดพันธสัญญาเดิมทิ้งทั้งหมด — ลูกาฉบับตัดต่อ + เปาโล 10 ฉบับ",
          "บีบให้คริสตจักรต้องนิยาม 'สารบบ' ของตนเอง",
        ],
      },
      {
        chapter: "V",
        era: "การตอบโต้",
        year: "ค.ศ. 150",
        title: "จัสติน มาร์เทอร์ ยกสถานะพระกิตติคุณ",
        mark: "ΓΡΑΦΗ",
        narrative:
          "เหตุการณ์มาร์เชียนปลุกให้คริสตจักรตื่นตัว จัสติน มาร์เทอร์ นักปกป้องศาสนาคนสำคัญแห่งโรม เรียกพระกิตติคุณว่า 'บันทึกความทรงจำของอัครทูต' (Memoirs of the Apostles) และบันทึกว่ามีการอ่านในพิธีนมัสการวันอาทิตย์เคียงคู่กับผู้เผยพระวจนะแห่งพันธสัญญาเดิม — ก้าวแรกของการยกเอกสารคริสต์ขึ้นเทียบเท่าพระคัมภีร์",
        points: [
          "พระกิตติคุณถูกอ่านในโบสถ์เทียบเท่าคัมภีร์เดิม",
          "ยังไม่ระบุชื่อและจำนวนพระกิตติคุณที่แน่ชัด",
        ],
      },
      {
        chapter: "VI",
        era: "รายชื่อแรกของฝ่ายออร์โธดอกซ์",
        year: "ค.ศ. 170–200",
        title: "Muratorian Canon",
        mark: "FRAGMENTUM",
        narrative:
          "ชิ้นส่วนเอกสารมูราโทเรียน — รายชื่อคัมภีร์ฝั่งกระแสหลักที่เก่าแก่ที่สุดเท่าที่ค้นพบ — ระบุหนังสือราว 22 เล่มที่คริสตจักร (น่าจะที่โรม) ยอมรับ แต่ยังไม่มีฮีบรู ยากอบ และ 1–2 เปโตร ขณะเดียวกันกลับรวมวิวรณ์ของเปโตร (Apocalypse of Peter) ซึ่งภายหลังถูกคัดออก — สะท้อนว่าขอบเขตสารบบยังคลุมเครืออีกนาน",
        points: [
          "รายชื่อราว 22 เล่ม — ยังไม่ครบ 27",
          "ไม่มีฮีบรู ยากอบ 1–2 เปโตร",
          "รวมวิวรณ์ของเปโตรซึ่งภายหลังถูกตัดออก",
        ],
      },
      {
        chapter: "VII",
        era: "หลักสี่พระกิตติคุณ",
        year: "ค.ศ. 180",
        title: "อิเรเนียส — ต้องมี 4 เท่านั้น",
        mark: "ΕΥΑΓΓΕΛΙΟΝ",
        narrative:
          "อิเรเนียส บิชอปแห่งลียง ยืนยันว่าพระกิตติคุณต้องมีสี่เล่ม — มัทธิว มาระโก ลูกา ยอห์น — ไม่มากไม่น้อยไปกว่านี้ โดยให้เหตุผลเชิงสัญลักษณ์ว่าโลกมีสี่ทิศและมีลมสี่สาย ข้อโต้แย้งนี้มีเป้าหมายตอบโต้ทั้งมาร์เชียน (ที่ใช้เล่มเดียว) และพวกนอสติกที่แต่งพระกิตติคุณเพิ่มขึ้นใหม่จำนวนมาก",
        points: [
          "ประกาศหลัก 4 พระกิตติคุณด้วยเหตุผลเชิงสัญลักษณ์",
          "ตอบโต้ทั้งมาร์เชียนและกิตติคุณนอสติก",
        ],
      },
      {
        chapter: "VIII",
        era: "การจัดหมวดหมู่",
        year: "ค.ศ. 250",
        title: "โอริเจน — สามหมวดหนังสือ",
        mark: "ΤΑΞΙΣ",
        narrative:
          "โอริเจนแห่งอเล็กซานเดรีย นักวิชาการคนสำคัญที่สุดของยุค จัดหนังสือเป็นสามหมวด: หมวดยอมรับสากล (Homologoumena) เช่น พระกิตติคุณทั้งสี่และจดหมายเปาโล, หมวดยังถกเถียง (Antilegomena) เช่น ฮีบรู ยากอบ ยูดา 2 เปโตร 2–3 ยอห์น, และหมวดเทียมเท็จ (Notha) — การจัดหมวดนี้ยอมรับอย่างตรงไปตรงมาว่า ผ่านมาสองศตวรรษ คริสตจักรยังไม่เห็นพ้องกันทั้งหมด",
        points: [
          "หมวดยอมรับสากล / ยังถกเถียง / เทียมเท็จ",
          "ฮีบรู ยากอบ ยูดา 2 เปโตร ยังเป็นที่ถกเถียง",
        ],
      },
      {
        chapter: "IX",
        era: "บันทึกสถานะ",
        year: "ค.ศ. 325",
        title: "ยูเซบิอุสสำรวจความเห็นคริสตจักร",
        mark: "ΙΣΤΟΡΙΑ",
        narrative:
          "ยูเซบิอุสแห่งซีซารียา บิดาแห่งประวัติศาสตร์คริสตจักร บันทึกสถานะหนังสือแต่ละเล่มตามแนวทางของโอริเจนไว้ในงาน Ecclesiastical History ของเขา — เป็นภาพถ่ายสถานการณ์ที่ชัดที่สุดว่า ณ ต้นศตวรรษที่ 4 คริสตจักรส่วนใหญ่ยอมรับเล่มใดแล้ว และเล่มใดยังลังเล เช่น วิวรณ์ที่บางฝ่ายยอมรับ บางฝ่ายปฏิเสธ",
        points: [
          "บันทึกสถานะหนังสือทุกเล่มอย่างเป็นระบบ",
          "วิวรณ์ยังมีสถานะก้ำกึ่ง — รับก็ได้ ปฏิเสธก็มี",
        ],
      },
      {
        chapter: "X",
        era: "รายชื่อ 27 เล่มครั้งแรก",
        year: "ค.ศ. 367",
        title: "จดหมายปัสกาของอาธานาเซียส",
        mark: "ΚΑΝΩΝ",
        narrative:
          "อาธานาเซียส บิชอปแห่งอเล็กซานเดรีย เขียนจดหมายเวียนเทศกาลปัสกาฉบับที่ 39 (Festal Letter 39) — เอกสารฉบับแรกในประวัติศาสตร์ที่ระบุรายชื่อพันธสัญญาใหม่ครบ 27 เล่มตรงกับที่ใช้ในปัจจุบันทุกเล่ม ห่างจากยุคอัครทูตราวสามศตวรรษ ทั้งนี้จดหมายฉบับเดียวไม่ได้ยุติข้อถกเถียงทันที คริสตจักรซีเรียตะวันออกยังใช้สารบบ 22 เล่มต่อไปอีกนาน",
        points: [
          "ครั้งแรกที่รายชื่อ 27 เล่มปรากฏครบ — ค.ศ. 367",
          "ห่างจากยุคอัครทูตราว 300 ปี",
          "คริสตจักรซีเรียยังใช้สารบบต่างออกไปอีกหลายศตวรรษ",
        ],
      },
      {
        chapter: "XI",
        era: "ฉบับแปลมาตรฐานตะวันตก",
        year: "ค.ศ. 382",
        title: "เจอโรมเริ่มแปลวัลเกต",
        mark: "VULGATA",
        narrative:
          "เจอโรมได้รับมอบหมายจากสันตะปาปาดามาซุสให้แปลพระคัมภีร์เป็นภาษาละติน — ฉบับวัลเกต (Vulgate) บรรจุพันธสัญญาใหม่ 27 เล่มตามแนวอาธานาเซียส ทำให้คริสตจักรตะวันตกคล้อยตามและเลิกกังขาหนังสืออย่างฮีบรูและวิวรณ์ ทว่าเจอโรมเองกลับตั้งข้อสงสัยต่อหนังสืออธิกธรรม (Apocrypha) ของพันธสัญญาเดิม — ประเด็นที่จะปะทุอีกครั้งในยุคปฏิรูปศาสนาอีกพันปีถัดมา",
        points: [
          "วัลเกตกลายเป็นมาตรฐานตะวันตกนับพันปี",
          "เจอโรมเองสงสัยหนังสืออธิกธรรมของพันธสัญญาเดิม",
        ],
      },
      {
        chapter: "XII",
        era: "มติสภา — ปิดกระบวนการ",
        year: "ค.ศ. 393 และ 397",
        title: "สภาฮิปโปและคาร์เธจ",
        mark: "CONCILIUM",
        narrative:
          "สภาคริสตจักรแอฟริกาเหนือที่ฮิปโป (393) และคาร์เธจ (397) — ขับเคลื่อนโดยนักบุญออกัสติน — ประกาศรับรองพันธสัญญาใหม่ 27 เล่มอย่างเป็นทางการ ปิดฉากกระบวนการที่ยาวนานกว่าสามศตวรรษ กระนั้นสารบบพันธสัญญาเดิมยังต่างกันจนถึงทุกวันนี้: คาทอลิก 73 เล่ม โปรเตสแตนต์ 66 เล่ม ออร์โธดอกซ์ 76 เล่มขึ้นไป — ความแตกต่าง 7–12 เล่มขึ้นอยู่กับนิกาย",
        points: [
          "มติสภารับรอง 27 เล่ม — ราว 360 ปีหลังยุคอัครทูต",
          "สารบบพันธสัญญาเดิมยังต่างกันระหว่างนิกายถึงปัจจุบัน",
          "คาทอลิก 73 / โปรเตสแตนต์ 66 / ออร์โธดอกซ์ 76+ เล่ม",
        ],
      },
    ],
  },
};

const comparisonRows = [
  {
    topic: "ระยะเวลาการประทาน / การเขียน",
    quran: "23 ปี (ค.ศ. 610–632)",
    bible: "ราว 1,500 ปี หลายยุคสมัย",
  },
  {
    topic: "ผู้บันทึก",
    quran: "นักเขียนวะฮีย์ 23 ท่าน (ตามอิบนุกะซีร) บันทึกต่อหน้าท่านนบี ﷺ",
    bible: "ผู้เขียนราว 40 คน ต่างยุค ต่างภูมิหลัง",
  },
  {
    topic: "ภาษาต้นฉบับ",
    quran: "อารบิก",
    bible: "ฮีบรู อารามาอิก กรีก",
  },
  {
    topic: "บันทึกในยุคของผู้ส่งสาร",
    quran: "ใช่ — ทันทีที่ประทาน",
    bible: "พระกิตติคุณเขียนหลังยุคพระเยซูราว 30–60 ปี",
  },
  {
    topic: "เวลาจนได้ฉบับมาตรฐาน",
    quran: "ราว 20 ปีหลังท่านนบีเสียชีวิต (มุศฮัฟอุษมาน ค.ศ. 650)",
    bible: "ราว 360 ปีหลังยุคอัครทูต (สภาคาร์เธจ ค.ศ. 397)",
  },
  {
    topic: "สารบบ (รายชื่อหนังสือ)",
    quran: "114 ซูเราะฮ์ เหมือนกันทุกนิกาย",
    bible: "ต่างกันตามนิกาย — 66 / 73 / 76+ เล่ม",
  },
  {
    topic: "วิธีการส่งต่อ",
    quran: "ท่องจำแบบมุตะวาติรควบคู่ลายลักษณ์อักษร",
    bible: "คัดลอกต้นฉบับด้วยมือหลายสายสำเนา",
  },
  {
    topic: "หลักฐานเก่าแก่ที่สุด",
    quran: "ต้นฉบับเบอร์มิงแฮม (คาร์บอนเดต ค.ศ. 568–645)",
    bible: "ชิ้นส่วนปาปิรุส P52 (ราว ค.ศ. 125–175)",
  },
];

function ChroniclePanel({ event, chronicle, onLeft }) {
  const { accent, markFont } = chronicle;
  return (
    <div className="relative md:grid md:grid-cols-2 md:gap-x-16 items-center">
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
            {event.year}
          </p>
          <p
            className="font-cinzel text-xs tracking-[0.35em] uppercase mt-2"
            style={{ color: accent.label }}
          >
            Chapter {event.chapter}
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
          <span className={`ic-watermark ${markFont}`}>{event.mark}</span>

          {/* ปี + บท (mobile เท่านั้น) */}
          <div className="md:hidden mb-3">
            <span
              className="font-cinzel text-[10px] tracking-[0.3em] uppercase"
              style={{ color: accent.label }}
            >
              Chapter {event.chapter}
            </span>
            <p className="font-cinzel text-2xl text-gold mt-1">{event.year}</p>
          </div>

          <p
            className="inline-block font-pridi text-xs px-3 py-1 rounded-full mb-4 border"
            style={{
              color: accent.chipText,
              background: accent.chipBg,
              borderColor: accent.chipBorder,
            }}
          >
            {event.era}
          </p>

          <h3 className="font-pridi text-xl md:text-2xl text-paper-white font-semibold mb-4 leading-snug">
            {event.title}
          </h3>

          <div className="flex items-center gap-2 mb-4">
            <span className="block h-px flex-1 bg-gradient-to-r from-gold/40 to-transparent" />
            <span className="text-gold/50 text-[10px]">◆</span>
          </div>

          <p className="font-pridi text-paper-white/80 text-sm md:text-[0.95rem] leading-[1.9] mb-5">
            {event.narrative}
          </p>

          <div
            className="rounded-lg px-4 py-3 border"
            style={{
              background: "rgba(0,0,0,0.22)",
              borderColor: "rgba(197,160,89,0.2)",
            }}
          >
            <p className="font-cinzel text-[10px] tracking-[0.25em] uppercase text-gold/70 mb-2">
              ประเด็นสำคัญ
            </p>
            <ul className="space-y-1.5">
              {event.points.map((p) => (
                <li
                  key={p}
                  className="font-pridi text-paper-white/65 text-xs md:text-sm leading-relaxed flex gap-2"
                >
                  <span className="text-gold/60 shrink-0">✦</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </div>
  );
}

export default function TextualHistory() {
  const rootRef = useReveal();
  const [tab, setTab] = useState("quran");
  const chronicle = chronicles[tab];

  // เผยแผ่นจดหมายเหตุเมื่อ scroll ถึง — ผูกใหม่ทุกครั้งที่สลับ Tab
  useEffect(() => {
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
    return () => io.disconnect();
  }, [tab]);

  return (
    <div ref={rootRef} className="bg-paper text-ink">
      <Navbar />

      {/* PAGE HERO */}
      <section className="relative py-24 md:py-36 bg-ink text-paper-white overflow-hidden">
        {/* ภาพห้องเก็บม้วนคัมภีร์โบราณ จาง ๆ ด้านหลัง — สื่อถึงการรวบรวมและถ่ายทอดต้นฉบับ */}
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
            การศึกษาเปรียบเทียบ
          </p>
          <h1
            data-reveal
            className="font-pridi text-3xl md:text-5xl lg:text-6xl mb-6 leading-tight"
          >
            ประวัติศาสตร์การรวบรวมคัมภีร์
          </h1>
          <div data-reveal className="mx-auto h-px w-24 bg-gold/70 mb-8" />
          <p
            data-reveal
            className="font-pridi text-base md:text-lg text-paper/85 max-w-2xl mx-auto leading-relaxed"
          >
            เปรียบเทียบกระบวนการอนุรักษ์พระวจนะศักดิ์สิทธิ์ตามลำดับเวลา
            ระหว่างอัลกุรอานและไบเบิล
          </p>
        </div>
      </section>

      {/* CHRONICLE SECTION */}
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
            backgroundImage: `radial-gradient(ellipse at 20% 15%, ${chronicle.accent.glow}, transparent 55%), radial-gradient(ellipse at 80% 45%, rgba(212,175,55,0.08), transparent 50%), radial-gradient(ellipse at 30% 85%, ${chronicle.accent.glow}, transparent 55%)`,
          }}
        />

        <div className="relative max-w-5xl mx-auto px-gutter">
          {/* TAB SWITCHER */}
          <div className="flex justify-center gap-3 md:gap-5 mb-10">
            {Object.values(chronicles).map((c) => {
              const active = tab === c.id;
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setTab(c.id)}
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
                    className={`block ${c.markFont} text-lg md:text-xl leading-tight mb-1 ${
                      active ? "text-gold" : "text-paper-white/50"
                    }`}
                  >
                    {c.tabSub}
                  </span>
                  <span
                    className={`block font-pridi text-base md:text-lg font-semibold ${
                      active ? "text-paper-white" : "text-paper-white/60"
                    }`}
                  >
                    {c.tabLabel}
                  </span>
                  <span
                    className="block font-cinzel text-[9px] tracking-[0.3em] uppercase mt-1"
                    style={{ color: active ? chronicle.accent.label : "rgba(255,255,240,0.35)" }}
                  >
                    {c.tabEn}
                  </span>
                </button>
              );
            })}
          </div>

          {/* INTRO */}
          <div key={`intro-${tab}`} className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="block h-px w-16 bg-gradient-to-r from-transparent to-gold/60" />
              <span className="text-gold text-sm">✦</span>
              <span className="block h-px w-16 bg-gradient-to-l from-transparent to-gold/60" />
            </div>
            <p className="font-pridi text-paper-white/60 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              {chronicle.intro}
            </p>
          </div>

          {/* TIMELINE */}
          <div key={`timeline-${tab}`} className="relative">
            <div className="ic-axis left-[14px] md:left-1/2 md:-translate-x-1/2" />
            <div className="space-y-14 md:space-y-20">
              {chronicle.events.map((event, i) => (
                <ChroniclePanel
                  key={event.chapter}
                  event={event}
                  chronicle={chronicle}
                  onLeft={i % 2 === 0}
                />
              ))}
            </div>
          </div>

          {/* ปิดท้าย */}
          <div key={`outro-${tab}`} className="text-center mt-20 ic-reveal">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="block h-px w-24 bg-gradient-to-r from-transparent to-gold/50" />
              <span className="text-gold text-lg">✦</span>
              <span className="block h-px w-24 bg-gradient-to-l from-transparent to-gold/50" />
            </div>
            <p className="font-pridi text-paper-white/50 text-sm max-w-xl mx-auto leading-relaxed">
              {tab === "quran"
                ? "จากวะฮีย์แรกถึงมุศฮัฟมาตรฐาน — กระบวนการทั้งหมดเสร็จสมบูรณ์ภายในราว 40 ปี โดยผู้ที่อยู่ร่วมยุคกับท่านนบีโดยตรง"
                : "จากคำสอนปากเปล่าถึงมติสภาคาร์เธจ — กระบวนการคัดเลือกสารบบใช้เวลาราว 360 ปีหลังยุคอัครทูต"}
            </p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-12 md:py-20 bg-ink text-paper-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-reveal className="text-center mb-10">
            <p className="font-pridi text-xs tracking-[0.4em] uppercase text-gold mb-3">
              ข้อมูลเปรียบเทียบ
            </p>
            <h2 className="font-pridi text-2xl md:text-3xl text-paper-white mb-4">
              สรุปเปรียบเทียบ
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
                      อัลกุรอาน
                    </th>
                    <th className="font-pridi text-base text-paper/80 font-bold text-left px-4 md:px-6 py-4 w-[36%]">
                      ไบเบิล
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
                        {row.quran}
                      </td>
                      <td className="font-pridi text-xs md:text-sm text-paper/85 px-4 md:px-6 py-4 leading-relaxed align-top">
                        {row.bible}
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
