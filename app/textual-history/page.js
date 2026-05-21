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
    year: "610–632 ค.ศ.",
    title: "การประทานพระวจนะ",
    desc: "พระเจ้าประทานอัลกุรอานแก่ท่านนบีมุฮัมมัด ﷺ มีผู้จดจำและจดบันทึกทันที ไม่มีการเปลี่ยนแปลงตั้งแต่เริ่มต้น",
  },
  {
    year: "632–634 ค.ศ.",
    title: "รัชสมัยอาบูบักร",
    desc: "รวบรวมเป็นหนังสือเล่มเดียวครั้งแรก เก็บรักษาโดยหัฟซะฮ์ เพื่อป้องกันการสูญหาย",
  },
  {
    year: "644–656 ค.ศ.",
    title: "รัชสมัยอุษมาน",
    desc: "ทำสำเนาต้นฉบับมาตรฐาน ส่งไปยังเมืองสำคัญทั่วอาณาจักรอิสลาม รักษาความเป็นเอกภาพ",
  },
  {
    year: "ปัจจุบัน",
    title: "อัลกุรอานในปัจจุบัน",
    desc: "อัลกุรอานเดียวกันทั่วโลก ไม่มีความแตกต่าง มีผู้ศรัทธามากกว่า 1.8 พันล้านคน",
  },
];

const bibleEvents = [
  {
    year: "1400 ปีก่อน ค.ศ. – 400 ค.ศ.",
    title: "ยุคการเขียน",
    desc: "เขียนโดยผู้คนหลายคน ในช่วงหลายศตวรรษ ใช้ภาษาฮีบรู อารามาอิก และกรีก",
  },
  {
    year: "170 ค.ศ.",
    title: "Muratorian Canon",
    desc: "รายชื่อหนังสือพันธสัญญาใหม่ที่เก่าแก่ที่สุดที่รู้จัก จัดทำโดยคริสตจักรโรมัน ระบุหนังสือที่ควรรับเข้าคัมภีร์",
  },
  {
    year: "325 ค.ศ.",
    title: "สภานิเคีย",
    desc: "จักรพรรดิคอนสแตนตินเรียกประชุม เริ่มกระบวนการคัดเลือกหนังสือที่เป็นทางการ",
  },
  {
    year: "367 ค.ศ.",
    title: "จดหมายอธานาเซียส",
    desc: "ระบุรายชื่อหนังสือ 27 เล่มของพันธสัญญาใหม่ ยังมีการโต้แย้งเกี่ยวกับหนังสือบางเล่มต่อเนื่อง",
  },
  {
    year: "393–397 ค.ศ.",
    title: "สภาฮิปโปและคาร์เธจ",
    desc: "กำหนดหนังสือที่เป็นทางการสำหรับคริสต์ศาสนิกชนโรมันคาทอลิก",
  },
  {
    year: "1546 ค.ศ.",
    title: "สภาเทรนต์",
    desc: "คาทอลิกยืนยันหนังสือ 73 เล่ม รวมหนังสืออพอคริฟา เพื่อตอบโต้ปฏิรูปโปรเตสแตนต์",
  },
  {
    year: "ปัจจุบัน",
    title: "ไบเบิลในปัจจุบัน",
    desc: "มีเวอร์ชันต่างกัน: คาทอลิก 73 เล่ม | โปรเตสแตนต์ 66 เล่ม | ออร์โธดอกซ์ 78 เล่ม",
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
    <article className="bg-ink/5 border border-gold/20 rounded-card p-5 md:p-6 backdrop-blur-sm hover:-translate-y-1 hover:shadow-card-hover hover:border-gold/40 transition-all duration-300">
      <div className="text-gold font-bold text-xs mb-1 select-none">◆</div>
      <div className="font-cinzel text-gold font-bold text-2xl md:text-3xl mb-2 leading-tight">
        {event.year}
      </div>
      <h3 className="font-pridi text-ink font-bold text-base md:text-lg mb-2">
        {event.title}
      </h3>
      <p className="font-pridi text-ink/80 text-sm leading-relaxed">{event.desc}</p>
    </article>
  );
}

export default function TextualHistory() {
  const rootRef = useReveal();

  const maxLen = Math.max(quranEvents.length, bibleEvents.length);
  const mobileItems = [];
  for (let i = 0; i < maxLen; i++) {
    if (i < quranEvents.length)
      mobileItems.push({ ...quranEvents[i], side: "left" });
    if (i < bibleEvents.length)
      mobileItems.push({ ...bibleEvents[i], side: "right" });
  }

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

          {/* Desktop column headers */}
          <div className="hidden md:grid grid-cols-2 mb-12">
            <div data-reveal className="text-center pr-10 lg:pr-16">
              <h2 className="font-pridi text-2xl md:text-3xl text-gold font-bold mb-3">
                อัลกุรอาน
              </h2>
              <div className="mx-auto h-px w-16 bg-gold/50" />
            </div>
            <div data-reveal className="text-center pl-10 lg:pl-16">
              <h2 className="font-pridi text-2xl md:text-3xl text-ink/60 font-bold mb-3">
                ไบเบิล
              </h2>
              <div className="mx-auto h-px w-16 bg-ink/20" />
            </div>
          </div>

          {/* Mobile headers */}
          <div className="md:hidden text-center mb-8">
            <h2 className="font-pridi text-2xl text-ink font-bold mb-1">
              เปรียบเทียบคัมภีร์
            </h2>
            <div className="mx-auto h-px w-16 bg-gold/50 mt-3" />
          </div>

          <div className="relative">
            {/* Center line — desktop only */}
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 inset-y-0 w-0.5 bg-gradient-to-b from-transparent via-gold/50 to-transparent" />

            {/* Mobile: interleaved single column */}
            <div className="md:hidden space-y-3">
              {mobileItems.map((item, i) => (
                <div key={i} className="flex gap-3">
                  <div className="flex flex-col items-center pt-5 flex-shrink-0">
                    <div className="w-3 h-3 rounded-full bg-gold border-2 border-paper" />
                    <div className="w-px flex-1 bg-gold/20 mt-1" />
                  </div>
                  <div className="flex-1 pb-2">
                    <div className="text-[10px] font-pridi uppercase tracking-widest text-gold/60 mb-1">
                      {item.side === "left" ? "อัลกุรอาน" : "ไบเบิล"}
                    </div>
                    <EventCard event={item} />
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop: two-column */}
            <div className="hidden md:grid grid-cols-2 gap-0">
              {/* Left — Quran */}
              <div className="space-y-8">
                {quranEvents.map((event) => (
                  <div key={event.year} data-reveal className="relative pr-10 lg:pr-16">
                    <EventCard event={event} />
                    {/* Node centered on the timeline line */}
                    <div className="absolute right-0 translate-x-1/2 top-8 w-4 h-4 rounded-full bg-gold border-2 border-paper z-10" />
                  </div>
                ))}
              </div>

              {/* Right — Bible */}
              <div className="space-y-8">
                {bibleEvents.map((event) => (
                  <div key={event.year} data-reveal className="relative pl-10 lg:pl-16">
                    {/* Node centered on the timeline line */}
                    <div className="absolute left-0 -translate-x-1/2 top-8 w-4 h-4 rounded-full bg-gold border-2 border-paper z-10" />
                    <EventCard event={event} />
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
