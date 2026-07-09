"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
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

const quranEvents = [
  {
    year: "ค.ศ. 610-632",
    title: "ยุคการประทานและนักเขียนวะฮีย์",
    desc: "ท่านนบีมุฮัมมัด (ซ.ล.) มีนักเขียนวะฮีย์ (Kuttāb al-Waḥy) ประจำตัวกว่า 40 คน รวมถึง Zayd ibn Thābit บันทึกทุกโองการทันทีที่ประทานลงมา บนใบปาล์ม หนังสัตว์ กระดูกไหปลาร้า",
  },
  {
    year: "ค.ศ. 632",
    title: "ท่านนบีเสียชีวิต — อาบูบักรเป็นเคาะลีฟะฮ์",
    desc: "หลังท่านนบีเสียชีวิต อาบูบักรขึ้นเป็นเคาะลีฟะฮ์คนแรก อัลกุรอานยังอยู่ในรูปแบบท่องจำและชิ้นส่วนบันทึกกระจัดกระจาย ยังไม่รวมเป็นเล่มเดียว",
  },
  {
    year: "ค.ศ. 633 (ยุทธการยะมามะฮ์)",
    title: "จุดเปลี่ยนสำคัญ: การเสียชีวิตของฮาฟิซจำนวนมาก",
    desc: "ในสงครามยะมามะฮ์ ฮาฟิซเสียชีวิตราว 360-500 คน อุมัร บิน อัลค็อฏฏอบ กังวลว่าอัลกุรอานบางส่วนอาจสูญหาย จึงเสนอให้อาบูบักรสั่งรวบรวมเป็นเล่มเดียว",
  },
  {
    year: "ค.ศ. 633-634",
    title: "การรวบรวมโดย Zayd ibn Thābit",
    desc: "อาบูบักรมอบหมายให้ Zayd ibn Thābit นักเขียนวะฮีย์คนสำคัญเป็นผู้รวบรวม ใช้วิธีเข้มงวด รับข้อความที่มีพยานยืนยันอย่างน้อย 2 คน จนได้ Suḥuf ฉบับสมบูรณ์",
  },
  {
    year: "ค.ศ. 634-644",
    title: "Suḥuf เก็บรักษาโดยเคาะลีฟะฮ์",
    desc: "ต้นฉบับ Suḥuf ของอาบูบักรถูกส่งต่อให้เคาะลีฟะฮ์อุมัร และหลังท่านเสียชีวิตถูกเก็บรักษาโดยหัฟเศาะฮ์ ธิดาของอุมัรและภรรยาของท่านนบี",
  },
  {
    year: "ค.ศ. 644-656",
    title: "ยุคเคาะลีฟะฮ์อุษมาน",
    desc: "เมื่อรัฐอิสลามขยายตัว มีชาวมุสลิมใหม่จากหลากภูมิภาคอ่านอัลกุรอานด้วยสำเนียงต่างกัน อุษมานเห็นความจำเป็นต้องมีมาตรฐานเดียว",
  },
  {
    year: "ค.ศ. 650",
    title: "คณะกรรมการชำระอัลกุรอาน",
    desc: "อุษมานแต่งตั้งคณะกรรมการนำโดย Zayd ibn Thābit ยืม Suḥuf จากหัฟเศาะฮ์มาเป็นต้นแบบ จัดทำสำเนามาตรฐานหลายชุด",
  },
  {
    year: "ค.ศ. 653",
    title: "ส่งมาตรฐานไปทั่วอาณาจักร",
    desc: "อุษมานส่งสำเนามาตรฐาน (Muṣḥaf) ไปยังเมืองหลักทั่วอาณาจักรอิสลาม พร้อมสั่งทำลายฉบับที่แตกต่างออกไป เพื่อรักษาความเป็นเอกภาพ",
  },
  {
    year: "ค.ศ. 656 เป็นต้นไป",
    title: "Muṣḥaf อุษมาน กลายเป็นมาตรฐานถาวร",
    desc: "ตั้งแต่นั้นมา อัลกุรอานมีข้อความมาตรฐานเดียวที่ใช้กันทั่วโลกมุสลิม ไม่มีการถกเถียงเรื่อง 'สารบบ' เหมือนที่เกิดในประวัติศาสตร์คริสต์ศาสนา",
  },
  {
    year: "ปัจจุบัน",
    title: "อัลกุรอานฉบับเดียวทั่วโลก",
    desc: "ตลอด 1,400 กว่าปี อัลกุรอานยังคงข้อความเดิมทุกตัวอักษร ยืนยันด้วยระบบท่องจำ Mutawātir ควบคู่กับต้นฉบับลายลักษณ์อักษรที่สอดคล้องกันทั่วโลก",
  },
];

const bibleEvents = [
  {
    year: "ค.ศ. 90-150",
    title: "ยุคปิตาจารย์ (Apostolic Fathers)",
    desc: "คริสตจักรยุคแรก เช่น เคลเมนต์ อิกเนเชียส โพลีคาร์ป ยังไม่มีคัมภีร์เป็นเล่ม เน้นส่งต่อคำสอนด้วยปากเปล่า เริ่มคัดลอกจดหมายของเปาโลหมุนเวียนตามคริสตจักรต่างๆ",
  },
  {
    year: "ค.ศ. 140",
    title: "มาร์เชียน — จุดหักเหสำคัญ",
    desc: "มาร์เชียน (Marcion) ผู้นำลัทธินอกรีต ตั้งสารบบคัมภีร์ของตัวเองเป็นคนแรก ตัดคัมภีร์เดิมทิ้งทั้งหมด เลือกใช้แค่กิตติคุณลูกาและจดหมายเปาโลบางฉบับที่ถูกตัดต่อ",
  },
  {
    year: "ค.ศ. 150",
    title: "จัสติน มาร์เทอร์ ตอบโต้",
    desc: "เหตุการณ์มาร์เชียนบังคับให้คริสตจักรตื่นตัว จัสติน มาร์เทอร์ ยกย่องพระกิตติคุณว่าเป็น 'บันทึกความทรงจำของอัครทูต' ให้อ่านในโบสถ์เทียบเท่าคัมภีร์เดิม",
  },
  {
    year: "ค.ศ. 170-200",
    title: "Muratorian Canon",
    desc: "เอกสารรายชื่อคัมภีร์ฝั่งออร์โธดอกซ์ที่เก่าแก่ที่สุดที่พบ อธิบายหนังสือที่คริสตจักรยอมรับและปฏิเสธ",
  },
  {
    year: "ค.ศ. 180",
    title: "อิเรเนียส — พระกิตติคุณ 4 เล่ม",
    desc: "อิเรเนียสยืนยันแนวคิดพระกิตติคุณ 4 เล่ม (มัทธิว มาระโก ลูกา ยอห์น) เปรียบเหมือนทิศทั้ง 4 ของโลก ห้ามมากกว่าหรือน้อยกว่านี้",
  },
  {
    year: "ค.ศ. 250",
    title: "โอริเจน — จัดหมวดหมู่ 3 กลุ่ม",
    desc: "โอริเจนจัดระเบียบหนังสือเป็น 3 หมวด: ยอมรับสากล, ยังถกเถียง (เช่น ฮีบรู ยากอบ ยูดา), และของเทียมเท็จ",
  },
  {
    year: "ค.ศ. 325",
    title: "ยูเซบิอุส บันทึกยืนยัน",
    desc: "บิดาแห่งประวัติศาสตร์คริสตจักรบันทึกยืนยันสถานะหนังสือตามแนวทางโอริเจน แสดงให้เห็นว่าคริสตจักรส่วนใหญ่ยอมรับเล่มไหนแล้ว",
  },
  {
    year: "ค.ศ. 367",
    title: "อาธานาเซียส — รายชื่อ 27 เล่มครั้งแรก",
    desc: "บิชอปแห่งอเล็กซานเดรียเขียนจดหมายเวียนปาสกา (Festal Letter 39) ครั้งแรกในประวัติศาสตร์ที่ระบุรายชื่อพันธสัญญาใหม่ 27 เล่ม ตรงกับคัมภีร์ปัจจุบัน",
  },
  {
    year: "ค.ศ. 382",
    title: "เจอโรม แปล Vulgate",
    desc: "เริ่มแปลพระคัมภีร์เป็นภาษาละติน บรรจุ 27 เล่มตามอาธานาเซียส ทำให้คริสตจักรตะวันตกคล้อยตามและเลิกสงสัยหนังสือบางเล่ม",
  },
  {
    year: "ค.ศ. 393 และ 397",
    title: "สภาฮิปโปและคาร์เธจ",
    desc: "ขับเคลื่อนโดยนักบุญออกัสติน ประกาศรับรองพันธสัญญาใหม่ 27 เล่มอย่างเป็นทางการ ปิดฉากกระบวนการอันยาวนานหลายร้อยปี",
  },
];

const quranStats = [
  { label: "ระยะเวลารวบรวม", value: "23 ปี" },
  { label: "จำนวนเวอร์ชัน", value: "1" },
  { label: "ภาษาต้นฉบับ", value: "อารบิก" },
  { label: "ผู้ส่งสาร", value: "ท่านนบีมุฮัมมัด ﷺ" },
];

const bibleStats = [
  { label: "ระยะเวลาเขียน", value: "1,500+ ปี" },
  { label: "จำนวนเวอร์ชัน", value: "หลายเวอร์ชัน" },
  { label: "ภาษาต้นฉบับ", value: "ฮีบรู, อารามาอิก, กรีก" },
  { label: "หนังสือที่แตกต่างกัน", value: "7–12 เล่ม (ขึ้นกับนิกาย)" },
];

function EventCard({ event }) {
  return (
    <article className="timeline-card">
      <div className="text-gold font-bold text-xs mb-0.5 md:mb-1 select-none">◆</div>
      <div
        className="font-cinzel text-gold font-bold text-sm md:text-3xl mb-1 md:mb-2 leading-tight"
        style={{ textShadow: "0 1px 2px rgba(0,0,0,0.1)" }}
      >
        {event.year}
      </div>
      <h3 className="font-pridi text-ink font-bold text-xs md:text-lg leading-snug md:mb-2">
        {event.title}
      </h3>
      <p className="hidden md:block font-pridi text-ink/80 text-sm leading-relaxed">{event.desc}</p>
    </article>
  );
}

export default function TextualHistory() {
  const rootRef = useReveal();

  return (
    <div ref={rootRef} className="bg-paper text-ink">
      <Navbar />

      {/* PAGE HERO */}
      <section className="relative py-20 md:py-28 bg-ink text-paper-white overflow-hidden">
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

      {/* TIMELINE SECTION */}
      <section className="py-12 md:py-20 bg-paper">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Column headers */}
          <div className="grid grid-cols-2 mb-6 md:mb-12">
            <div data-reveal className="text-center pr-2 md:pr-10 lg:pr-16">
              <h2 className="font-pridi text-base md:text-3xl text-gold font-bold mb-1 md:mb-3">
                อัลกุรอาน
              </h2>
              <div className="mx-auto h-px w-12 md:w-16 bg-gold/50" />
            </div>
            <div data-reveal className="text-center pl-2 md:pl-10 lg:pl-16">
              <h2 className="font-pridi text-base md:text-3xl text-ink/60 font-bold mb-1 md:mb-3">
                ไบเบิล
              </h2>
              <div className="mx-auto h-px w-12 md:w-16 bg-ink/20" />
            </div>
          </div>

          <div className="relative">
            {/* Center axis */}
            <div className="timeline-axis" />

            <div className="grid grid-cols-2 gap-3 md:gap-8">
              {/* Left — Quran */}
              <div className="space-y-3 md:space-y-8">
                {quranEvents.map((event) => (
                  <div key={event.year} data-reveal className="relative md:pr-10 lg:pr-16">
                    <div className="relative">
                      <EventCard event={event} />
                      <div className="timeline-connector-left hidden md:block" />
                    </div>
                    {/* Node centered on the timeline axis — desktop only */}
                    <div className="hidden md:block absolute right-0 translate-x-1/2 top-8">
                      <div className="timeline-node" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Right — Bible */}
              <div className="space-y-3 md:space-y-8">
                {bibleEvents.map((event) => (
                  <div key={event.year} data-reveal className="relative md:pl-10 lg:pl-16">
                    {/* Node centered on the timeline axis — desktop only */}
                    <div className="hidden md:block absolute left-0 -translate-x-1/2 top-8">
                      <div className="timeline-node" />
                    </div>
                    <div className="relative">
                      <EventCard event={event} />
                      <div className="timeline-connector-right hidden md:block" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
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

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Quran stats */}
            <div
              data-reveal
              className="bg-paper-white/5 border border-gold/30 rounded-card p-6 md:p-8"
            >
              <h3 className="font-pridi text-xl text-gold font-bold mb-6 text-center pb-4 border-b border-gold/20">
                อัลกุรอาน
              </h3>
              <dl className="space-y-4">
                {quranStats.map((s) => (
                  <div
                    key={s.label}
                    className="flex justify-between items-start gap-4 pb-4 border-b border-gold/10 last:border-0 last:pb-0"
                  >
                    <dt className="font-pridi text-sm text-paper/65 leading-snug">
                      {s.label}
                    </dt>
                    <dd className="font-pridi text-sm text-gold font-bold text-right leading-snug">
                      {s.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Bible stats */}
            <div
              data-reveal
              className="bg-paper-white/5 border border-paper/10 rounded-card p-6 md:p-8"
            >
              <h3 className="font-pridi text-xl text-paper/75 font-bold mb-6 text-center pb-4 border-b border-paper/10">
                ไบเบิล
              </h3>
              <dl className="space-y-4">
                {bibleStats.map((s) => (
                  <div
                    key={s.label}
                    className="flex justify-between items-start gap-4 pb-4 border-b border-paper/10 last:border-0 last:pb-0"
                  >
                    <dt className="font-pridi text-sm text-paper/65 leading-snug">
                      {s.label}
                    </dt>
                    <dd className="font-pridi text-sm text-paper/85 font-bold text-right leading-snug">
                      {s.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
