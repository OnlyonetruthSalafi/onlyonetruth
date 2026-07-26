"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import ArchiveNav from "../../../components/ArchiveNav";

// ════════════════════════════════════════════════════════════════════
//  คลังจดหมายทางการทูตของท่านนบีมุฮัมมัด ﷺ (The Prophetic Letters)
//  จำแนกตามระดับหลักฐานของ "ตัวเอกสาร" อย่างซื่อตรง:
//   • museum   — มีเอกสารต้นฉบับเก็บรักษาในพิพิธภัณฑ์
//   • surviving — มีต้นฉบับที่ "อ้างว่า" หลงเหลือ (เผยแพร่โดยนักวิชาการ)
//   • records  — ตัวจดหมายรู้จักผ่านบันทึกประวัติศาสตร์/หะดีษ (ต้นฉบับไม่หลงเหลือ)
// ════════════════════════════════════════════════════════════════════
const letters = [
  {
    id: "muqawqis",
    title: "Letter to al-Muqawqis",
    titleTh: "จดหมายถึงมุก็อวกิส ผู้ครองอียิปต์",
    arabic: "رسالة إلى المقوقس",
    category: "museum",
    categoryLabel: "เก็บในพิพิธภัณฑ์",
    date: "ราว ค.ศ. 628 (6–7 ฮ.ศ.)",
    envoy: "ฮาฏิบ อิบนุ อบีบัลตะอะฮ์",
    recipient: "มุก็อวกิส อุปราชไบแซนไทน์แห่งอียิปต์ (มักระบุเป็นไซรัสแห่งอเล็กซานเดรีย)",
    location: "Topkapı Palace Museum (Chamber of Sacred Relics), Istanbul",
    locationTh: "พิพิธภัณฑ์พระราชวังท็อปกาปึ (ห้องเก็บวัตถุศักดิ์สิทธิ์) อิสตันบูล ตุรกี",
    description:
      "จดหมายเชิญสู่อิสลามที่ทรงส่งถึงมุก็อวกิส ผู้ครองอียิปต์ เป็นจดหมายฉบับเดียวในกลุ่มนี้ที่มี 'ตัวเอกสาร' หลงเหลือและจัดแสดงในพิพิธภัณฑ์ เอกสารแผ่นหนังถูกค้นพบเมื่อ ค.ศ. 1858 โดยเอเตียน บาร์เตเลมี สมาชิกคณะสำรวจชาวฝรั่งเศส ในอารามคริสต์แห่งหนึ่งที่เมืองอัคมีม ประเทศอียิปต์ ต่อมาสุลต่านอับดุลเมจิดที่ 1 ทรงนำมาเก็บที่อิสตันบูล ตอนล่างของเอกสารปรากฏรอยตราประทับวงกลม 'มุฮัมมัด รสูลุลลอฮ์'",
    note:
      "ตัวเอกสารที่ท็อปกาปึเป็นที่ถกเถียงในวงวิชาการ — เนิลเดเคอ (Nöldeke) และเออร์นแบร์ก (Öhrnberg) เห็นว่าเป็นของปลอมด้วยเหตุผลทางอักขรวิทยา ขณะที่นักประวัติศาสตร์มุสลิมส่วนใหญ่ยืนยันความเป็นจริงทางประวัติศาสตร์ของเหตุการณ์ส่งจดหมาย ทั้งนี้ 'การส่งจดหมาย' มีบันทึกในสายรายงานอิสลามชัดเจน แยกจากประเด็นความแท้ของ 'แผ่นเอกสาร' ที่หลงเหลือ",
    sourceUrl: "https://en.wikipedia.org/wiki/Diplomatic_career_of_Muhammad",
    image: "/manuscripts/letters/muqawqis.jpg",
    tags: ["Topkapı", "ค้นพบ 1858", "ตราประทับ", "อียิปต์", "แผ่นหนัง"],
  },
  {
    id: "heraclius",
    title: "Letter to Heraclius",
    titleTh: "จดหมายถึงจักรพรรดิเฮราคลิอุสแห่งไบแซนไทน์",
    arabic: "رسالة إلى هرقل",
    category: "surviving",
    categoryLabel: "ต้นฉบับที่อ้างว่าหลงเหลือ",
    date: "ราว ค.ศ. 628 (หลังสนธิสัญญาฮุดัยบียะฮ์)",
    envoy: "ดิห์ยะฮ์ อัลกัลบี",
    recipient: "เฮราคลิอุส จักรพรรดิแห่งจักรวรรดิไบแซนไทน์ (โรมันตะวันออก)",
    location: "Claimed original reproduced by Dr. Muhammad Hamidullah",
    locationTh: "เอกสารที่อ้างว่าเป็นต้นฉบับถูกตีพิมพ์เผยแพร่โดย ดร.มุฮัมมัด ฮะมีดุลลอฮ์",
    description:
      "จดหมายเชิญสู่อิสลามถึงจักรพรรดิเฮราคลิอุส เนื้อความเปิดว่า 'ในพระนามของอัลลอฮ์ ผู้ทรงกรุณาปรานี ผู้ทรงเมตตาเสมอ จากมุฮัมมัด บ่าวของอัลลอฮ์และศาสนทูตของพระองค์ ถึงเฮราคลิอุส ประมุขแห่งชาวโรมัน...' เหตุการณ์นี้เชื่อมโยงกับรายงานอันโด่งดังของอบูซุฟยานต่อหน้าเฮราคลิอุสที่บันทึกไว้ใน เศาะฮีฮ์ อัลบุคอรี ในคริสต์ศตวรรษที่ 20 มีการนำเสนอเอกสารแผ่นหนึ่งที่อ้างว่าเป็นจดหมายฉบับนี้ และ ดร.มุฮัมมัด ฮะมีดุลลอฮ์ ได้ตีพิมพ์ภาพจำลองไว้ในงานรวบรวมจดหมายทางการทูตของท่านนบี",
    note:
      "ความแท้ของ 'แผ่นเอกสาร' ที่อ้างว่าเป็นต้นฉบับยังไม่มีข้อยุติในวงวิชาการ ฮะมีดุลลอฮ์และอิรฟาน ชะฮีด (Irfan Shahîd) โต้แย้งสนับสนุนความเป็นของแท้ ขณะที่นักวิชาการตะวันตกบางส่วนตั้งข้อสงสัย ส่วนตัว 'เหตุการณ์ส่งจดหมาย' มีฐานรายงานในหะดีษที่แข็งแรงกว่าเรื่องตัวเอกสาร",
    sourceUrl: "https://en.wikipedia.org/wiki/Diplomatic_career_of_Muhammad",
    image: "/manuscripts/letters/heraclius.jpg",
    tags: ["ไบแซนไทน์", "เศาะฮีฮ์ บุคอรี", "ฮะมีดุลลอฮ์", "ดิห์ยะฮ์ อัลกัลบี"],
  },
  {
    id: "negus",
    title: "Letter to the Negus (Najāshī)",
    titleTh: "จดหมายถึงนะญาชี ผู้ครองอบิสซิเนีย",
    arabic: "رسالة إلى النجاشي",
    category: "surviving",
    categoryLabel: "ต้นฉบับที่อ้างว่าหลงเหลือ",
    date: "ยุคมะดีนะฮ์ (ราว ค.ศ. 628)",
    envoy: "อัมร์ อิบนุ อุมัยยะฮ์ อัฎฎัมรี",
    recipient: "นะญาชี (อัศฮะมะฮ์) กษัตริย์แห่งอาณาจักรอักซุม/อบิสซิเนีย (เอธิโอเปีย)",
    location: "Claimed original reproduced by Dr. Muhammad Hamidullah",
    locationTh: "ภาพต้นฉบับที่อ้างว่าหลงเหลือ ปรากฏในงานรวบรวมของ ดร.มุฮัมมัด ฮะมีดุลลอฮ์",
    description:
      "จดหมายถึงนะญาชี กษัตริย์แห่งอบิสซิเนีย ผู้เคยให้ที่พักพิงแก่มุสลิมที่อพยพในยุคมักกะฮ์ เนื้อความเชิญสู่อิสลามและกล่าวถึงนบีอีซา (เยซู) บุตรของมัรยัม เหตุการณ์นี้ถูกอ้างอิงในบันทึกของ เศาะฮีฮ์ มุสลิม เป็นหนึ่งในจดหมายที่ ดร.ฮะมีดุลลอฮ์ รวมไว้ในผลงาน 'Six Originaux des lettres diplomatiques du Prophète de l'Islam' (หกต้นฉบับจดหมายทางการทูตของศาสดาแห่งอิสลาม)",
    note:
      "นักวิชาการยังถกเถียงเรื่องความแท้ของแผ่นเอกสารและรายละเอียดปลีกย่อย (เช่น การเข้ารับอิสลามของนะญาชี) แต่กรอบเหตุการณ์การติดต่อทางการทูตกับอบิสซิเนียมีฐานในสายรายงานอิสลาม",
    sourceUrl: "https://en.wikipedia.org/wiki/Diplomatic_career_of_Muhammad",
    image: "/manuscripts/letters/negus.jpg",
    tags: ["อักซุม", "เอธิโอเปีย", "เศาะฮีฮ์ มุสลิม", "ฮะมีดุลลอฮ์"],
  },
  {
    id: "mundhir",
    title: "Letter to Mundhir ibn Sāwā",
    titleTh: "จดหมายถึงมุนซิร อิบนุ ซาวา ผู้ครองบาห์เรน",
    arabic: "رسالة إلى المنذر بن ساوى",
    category: "surviving",
    categoryLabel: "ต้นฉบับที่อ้างว่าหลงเหลือ",
    date: "ยุคมะดีนะฮ์ (ราว ค.ศ. 628–629)",
    envoy: "อัลอะลาอ์ อิบนุลฮัฎเราะมี",
    recipient: "มุนซิร อิบนุ ซาวา อัตตะมีมี ผู้ปกครองบาห์เรนในสังกัดราชวงศ์ซาสซานิด",
    location: "Manuscript copy reproduced by Dr. Muhammad Hamidullah",
    locationTh: "ภาพสำเนาต้นฉบับ ปรากฏในงานรวบรวมของ ดร.มุฮัมมัด ฮะมีดุลลอฮ์",
    description:
      "จดหมายเชิญสู่อิสลามถึงมุนซิร อิบนุ ซาวา ผู้ครองแคว้นบาห์เรน ตามรายงานเขาและประชาชนส่วนหนึ่งได้เข้ารับอิสลาม จดหมายฉบับนี้เป็นหนึ่งใน 'หกต้นฉบับ' ที่ ดร.ฮะมีดุลลอฮ์ รวบรวมภาพไว้ และถูกอ้างอิงเป็นตัวอย่างของการติดต่อกับหัวเมืองรอบคาบสมุทรอาหรับ",
    note:
      "ในกลุ่มจดหมายที่อ้างว่าหลงเหลือ ฉบับนี้ถูกอภิปรายในวงวิชาการน้อยกว่าฉบับมุก็อวกิสหรือเฮราคลิอุส ควรถือเป็น 'สำเนา/ต้นฉบับที่อ้างถึง' มากกว่าเอกสารที่ผ่านการตรวจพิสูจน์อย่างกว้างขวาง",
    sourceUrl: "https://en.wikipedia.org/wiki/Diplomatic_career_of_Muhammad",
    image: "/manuscripts/letters/mundhir.png",
    tags: ["บาห์เรน", "ซาสซานิด", "ฮะมีดุลลอฮ์", "หกต้นฉบับ"],
  },
  {
    id: "khosrow",
    title: "Letter to Khosrow II (Kisrā)",
    titleTh: "จดหมายถึงจักรพรรดิคิสรอ (โคสเราที่ 2) แห่งเปอร์เซีย",
    arabic: "رسالة إلى كسرى",
    category: "records",
    categoryLabel: "ปรากฏในบันทึก",
    date: "ยุคมะดีนะฮ์ (ราว ค.ศ. 628)",
    envoy: "อับดุลลอฮ์ อิบนุ ฮุซาฟะฮ์ อัสสะฮ์มี",
    recipient: "โคสเราที่ 2 (คิสรอ) จักรพรรดิแห่งจักรวรรดิซาสซานิด (เปอร์เซีย)",
    location: "Known through historical records (no surviving original)",
    locationTh: "รู้จักผ่านบันทึกประวัติศาสตร์ — ไม่มีตัวเอกสารหลงเหลือ",
    description:
      "จดหมายเชิญสู่อิสลามถึงจักรพรรดิเปอร์เซีย ตามบันทึกในสายรายงานอิสลาม (เศาะฮีฮ์ มุสลิม) เมื่อคิสรอได้อ่านก็ฉีกจดหมายทิ้งด้วยความโกรธ ท่านนบี ﷺ จึงกล่าวทำนองว่าอาณาจักรของเขาจะถูกฉีกขาดเช่นกัน ด้วยเหตุนี้ 'ตัวเอกสาร' ต้นฉบับจึงไม่หลงเหลือ แต่เนื้อความและเหตุการณ์ยังคงถูกบันทึกไว้ในตำราประวัติศาสตร์และหะดีษ",
    note:
      "จดหมายฉบับนี้จัดอยู่คนละประเภทกับฉบับอื่นในหน้านี้ — ไม่มีการอ้างว่ามี 'แผ่นเอกสาร' หลงเหลือ เพราะจารีตอิสลามเองระบุว่าถูกทำลาย จึงนำเสนอในฐานะเหตุการณ์ที่รู้จักผ่านบันทึก มิใช่วัตถุในพิพิธภัณฑ์",
    sourceUrl: "https://en.wikipedia.org/wiki/Diplomatic_career_of_Muhammad",
    image: "/manuscripts/letters/khosrow.jpg",
    tags: ["ซาสซานิด", "เปอร์เซีย", "เศาะฮีฮ์ มุสลิม", "ต้นฉบับถูกทำลาย"],
  },
];

const filters = [
  { id: "all", label: "ทั้งหมด" },
  { id: "museum", label: "เก็บในพิพิธภัณฑ์" },
  { id: "surviving", label: "ต้นฉบับที่อ้างว่าหลงเหลือ" },
  { id: "records", label: "ปรากฏในบันทึก" },
];

function LetterImage({ m }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    // พื้นหลังสำรองเมื่อยังไม่มีไฟล์ภาพ — ลายกระดาษ/ตราประทับ ให้กลืนกับธีมคลัง
    return (
      <div className="absolute inset-0 grid place-items-center bg-[#241512]">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(212,175,55,0.14) 0%, transparent 70%)",
          }}
        />
        <div className="relative flex flex-col items-center gap-2 text-center px-4">
          <span className="font-amiri text-5xl text-gold/40 leading-none select-none">
            {m.arabic}
          </span>
          <span className="font-cinzel text-[0.6rem] tracking-[0.3em] uppercase text-gold/40">
            รอการอัปโหลดภาพ
          </span>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={m.image}
      alt={m.title}
      fill
      sizes="(max-width: 768px) 100vw, 50vw"
      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      onError={() => setFailed(true)}
    />
  );
}

export default function PropheticLetters() {
  const [activeFilter, setActiveFilter] = useState("all");
  const gridRef = useRef(null);

  const filtered =
    activeFilter === "all"
      ? letters
      : letters.filter((m) => m.category === activeFilter);

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
        {/* ﷽ พื้นหลัง */}
        <div className="absolute inset-0 opacity-10 pointer-events-none select-none flex items-center justify-center">
          <span className="font-cinzel text-[20rem] text-gold leading-none">
            ﷽
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
            <span className="text-gold">Prophetic Letters</span>
          </nav>

          <div className="text-center">
            <p className="font-amiri text-3xl text-gold/60 mb-3">
              رسائل النبي الدبلوماسية
            </p>
            <p className="font-cinzel text-xs tracking-[0.4em] uppercase text-gold-dark mb-4">
              The Archive
            </p>
            <h1 className="font-cinzel text-4xl md:text-6xl mb-5 leading-tight text-shimmer">
              Prophetic Letters
            </h1>
            {/* เส้นแบ่งประดับดาว 8 แฉก */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-24 bg-gradient-to-r from-transparent to-gold/60" />
              <div className="tl-node8">
                <span className="tl-node8-core" />
              </div>
              <div className="h-px w-24 bg-gradient-to-l from-transparent to-gold/60" />
            </div>
            <p className="font-pridi text-lg md:text-xl text-paper/80 max-w-2xl mx-auto leading-relaxed">
              จดหมายทางการทูตของท่านนบีมุฮัมมัด ﷺ ถึงบรรดาประมุขและกษัตริย์ต่างแดน
              <span className="block mt-2 text-sm text-paper/50">
                จำแนกอย่างซื่อตรงตามระดับหลักฐานของ &ldquo;ตัวเอกสาร&rdquo; — จากแผ่นหนังในพิพิธภัณฑ์ท็อปกาปึ สู่เหตุการณ์ที่รู้จักผ่านบันทึก
              </span>
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
                  ? letters.length
                  : letters.filter((m) => m.category === f.id).length;
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

      {/* LETTER GRID — พื้นเข้มแบบห้องจดหมายเหตุ */}
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
              const detailHref = `/archive/prophetic-letters/${m.id}`;

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
                    <Link href={detailHref} className="block h-full">
                      <LetterImage m={m} />
                    </Link>
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
                    {/* ลายน้ำชื่ออาหรับ */}
                    <div className="absolute top-1 right-3 font-amiri text-5xl text-gold/[0.07] leading-none whitespace-nowrap select-none pointer-events-none">
                      {m.arabic}
                    </div>

                    <Link href={detailHref} className="group/title">
                      <h3 className="font-cinzel text-xl text-gold font-semibold mb-1 leading-snug group-hover/title:text-gold-light transition-colors">
                        {m.title}
                      </h3>
                    </Link>
                    <p className="font-pridi text-paper/60 text-sm mb-4">
                      {m.titleTh}
                    </p>

                    {/* เส้นทองคั่น */}
                    <div className="h-px w-full bg-gradient-to-r from-gold/50 via-gold/15 to-transparent mb-4" />

                    {/* ข้อมูล */}
                    <dl className="space-y-1.5 mb-4 text-sm font-pridi">
                      <div className="flex gap-2">
                        <dt className="text-gold/70 shrink-0 w-20">ช่วงเวลา</dt>
                        <dd className="text-paper/80">{m.date}</dd>
                      </div>
                      <div className="flex gap-2">
                        <dt className="text-gold/70 shrink-0 w-20">ผู้รับ</dt>
                        <dd className="text-paper/80">{m.recipient}</dd>
                      </div>
                      <div className="flex gap-2">
                        <dt className="text-gold/70 shrink-0 w-20">ผู้ถือสาส์น</dt>
                        <dd className="text-paper/80">{m.envoy}</dd>
                      </div>
                      <div className="flex gap-2">
                        <dt className="text-gold/70 shrink-0 w-20">ที่เก็บ</dt>
                        <dd className="text-paper/80">{m.locationTh}</dd>
                      </div>
                    </dl>

                    <p className="font-pridi text-sm text-paper/70 leading-relaxed mb-4">
                      {m.description}
                    </p>

                    {/* หมายเหตุความแท้เชิงวิชาการ */}
                    {m.note && (
                      <div className="border-l-2 border-gold/50 bg-gold/[0.05] rounded-r-card px-4 py-3 mb-5">
                        <p className="font-cinzel text-[0.62rem] tracking-[0.2em] uppercase text-gold/70 mb-1.5">
                          หมายเหตุ — ความแท้ของเอกสาร
                        </p>
                        <p className="font-pridi text-xs text-paper/65 leading-relaxed">
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
                      <Link
                        href={detailHref}
                        className="flex-1 bg-gradient-to-r from-gold-dark via-gold to-gold-light hover:from-gold hover:to-gold-light text-ink font-pridi font-semibold text-sm text-center py-2.5 px-4 rounded-btn shadow-glow-sm hover:shadow-glow transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <span>สำรวจจดหมาย</span>
                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </Link>
                      <a
                        href={m.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 border border-gold/40 text-gold hover:bg-gold/10 hover:border-gold/70 font-pridi text-sm text-center py-2.5 px-4 rounded-btn transition-all duration-300"
                      >
                        แหล่งอ้างอิง ↗
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* กล่องหมายเหตุภาพรวม — ความซื่อตรงเชิงระเบียบวิธี */}
          <div className="mt-16 max-w-3xl mx-auto">
            <div className="border border-gold/25 rounded-card bg-[#241512]/70 p-6 md:p-8">
              <p className="font-cinzel text-xs tracking-[0.3em] uppercase text-gold/70 mb-3 text-center">
                ข้อสังเกตเชิงระเบียบวิธี
              </p>
              <p className="font-pridi text-paper/75 text-sm leading-relaxed">
                หน้านี้แยกสองคำถามออกจากกันอย่างชัดเจน — (1) &ldquo;ท่านนบี ﷺ
                ทรงส่งจดหมายถึงประมุขเหล่านี้หรือไม่&rdquo; ซึ่งมีฐานรายงานในสายหะดีษและตำราสีเราะฮ์ที่หนักแน่น
                กับ (2) &ldquo;แผ่นเอกสารที่หลงเหลือคือต้นฉบับจริงหรือไม่&rdquo; ซึ่งเป็นเรื่องที่นักวิชาการยังถกเถียง
                โดยเฉพาะฉบับมุก็อวกิสและเฮราคลิอุส การนำเสนอเช่นนี้สอดคล้องกับหลักการทางประวัติศาสตร์ที่ยึดถือทั้งเว็บไซต์
                — เชื่อในสิ่งที่หลักฐานรองรับ และระบุระดับความมั่นใจตามที่หลักฐานเอื้อ
              </p>
            </div>
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

      {/* แหล่งข้อมูลอ้างอิง */}
      <section className="relative py-16 bg-ink border-t border-gold/15">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-cinzel text-xs tracking-[0.35em] uppercase text-gold-dark mb-3">
            References
          </p>
          <h2 className="font-cinzel text-2xl text-gold mb-10">
            แหล่งข้อมูลอ้างอิง
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                name: "Diplomatic Career of Muhammad",
                url: "https://en.wikipedia.org/wiki/Diplomatic_career_of_Muhammad",
                desc: "ภาพรวมจดหมายถึงประมุขต่างๆ",
              },
              {
                name: "M. Hamidullah — Six Originaux",
                url: "https://en.wikipedia.org/wiki/Muhammad_Hamidullah",
                desc: "งานรวบรวมภาพต้นฉบับจดหมาย",
              },
              {
                name: "Topkapı — Sacred Relics",
                url: "https://istanbultarihi.ist/546-sacred-relics-in-istanbul",
                desc: "วัตถุศักดิ์สิทธิ์ในพิพิธภัณฑ์ท็อปกาปึ",
              },
            ].map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-glass p-4 text-center hover:border-gold/60 transition-colors"
              >
                <p className="font-cinzel text-gold font-semibold mb-1">
                  {s.name}
                </p>
                <p className="font-pridi text-paper/70 text-sm">{s.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
