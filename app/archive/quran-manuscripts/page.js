"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

const manuscripts = [
  // === หมวด: ต้นฉบับอุษมาน (ขนาดใหญ่) ===
  {
    id: "hussein",
    title: "Al-Hussein Mosque Quran",
    titleTh: "ต้นฉบับอัลกุรอานมัสยิดอัลฮุสเซน",
    arabic: "مصحف الحسين",
    category: "uthman",
    categoryLabel: "ยุคอุษมาน",
    date: "ปลายศตวรรษที่ 1 — ต้นศตวรรษที่ 2 ฮ.ศ.",
    script: "Kufic Script",
    location: "Centre Library for Islamic Manuscripts, Masjid al-Sayyida Zaynab, Cairo",
    locationTh: "ศูนย์ห้องสมุดต้นฉบับอิสลาม มัสยิดอัลซัยยิดะฮ์ ซัยนับ ไคโร อียิปต์",
    description:
      "ต้นฉบับอัลกุรอานขนาดมหึมา 1,087 หน้า ขนาด 57×68 ซม. หนัก 80 กก. ครอบคลุมมากกว่า 99% ของข้อความอัลกุรอาน เขียนด้วยอักษรคูฟิกบนหนังสัตว์ เป็นหนึ่งในสำเนาอัลกุรอานที่เก่าแก่ที่สุดในอียิปต์",
    sourceUrl: "https://www.islamic-awareness.org/quran/text/mss/hussein",
    image: "/manuscripts/quran/HusseinMos.jpg",
    tags: ["Kufic", "Monumental", "Cairo", "1087 Folios", "Uthman"],
  },

  // === หมวด: ต้นฉบับฮิญาซี (ศตวรรษที่ 1 ฮ.ศ.) ===
  {
    id: 1,
    title: "Ṣanʿāʾ Quran Manuscript (DAM 01-27.1)",
    titleTh: "ต้นฉบับอัลกุรอานซานาอา",
    arabic: "مخطوطة صنعاء",
    category: "hijazi",
    categoryLabel: "ศตวรรษที่ 1 ฮ.ศ.",
    date: "ต้นศตวรรษที่ 1 ฮ.ศ.",
    script: "Hijazi Script",
    location: "Dār al-Makhṭūṭāt, Sana'a, Yemen",
    locationTh: "ดาร์ อัล-มัคตูฏอต ซานาอา เยเมน",
    description:
      "ค้นพบในปี ค.ศ. 1972 ระหว่างการบูรณะมัสยิดใหญ่ซานาอา เขียนด้วยอักษรฮิญาซีบนหนังสัตว์ UNESCO ได้จัดทำ CD รวบรวมต้นฉบับเหล่านี้ในโครงการ Memory of the World ถือเป็นหนึ่งในต้นฉบับที่เก่าแก่ที่สุดที่ยังหลงเหลืออยู่",
    sourceUrl: "https://www.islamic-awareness.org/quran/text/mss/alisanaa",
    image: "/manuscripts/quran/sanaa-quran.jpg",
    tags: ["Hijazi", "1st Century", "Yemen", "UNESCO"],
  },
  {
    id: 2,
    title: "Birmingham Quran Manuscript (Mingana 1572a)",
    titleTh: "ต้นฉบับอัลกุรอานเบอร์มิงแฮม",
    arabic: "مخطوطة برمنغهام",
    category: "hijazi",
    categoryLabel: "ศตวรรษที่ 1 ฮ.ศ.",
    date: "ค.ศ. 568–645 (Carbon-14)",
    script: "Hijazi Script",
    location: "University of Birmingham, UK",
    locationTh: "มหาวิทยาลัยเบอร์มิงแฮม สหราชอาณาจักร",
    description:
      "ผ่านการทดสอบ Carbon-14 ที่มหาวิทยาลัยอ็อกซ์ฟอร์ด พบว่ามีอายุย้อนไปถึงยุคนบีมุฮัมมัด ﷺ เขียนด้วยอักษรฮิญาซีบนหนังสัตว์ เป็นหนึ่งในต้นฉบับที่เก่าแก่ที่สุดที่รู้จักในโลก",
    sourceUrl: "https://www.islamic-awareness.org/quran/text/mss/m1572",
    image: "/manuscripts/quran/birmingham-quran.jpg",
    tags: ["Hijazi", "Carbon-14 Dated", "1st Century", "Parchment"],
  },
  {
    id: 3,
    title: "Khalili Collection Quran (KFQ 60) — Codex Parisino-Petropolitanus",
    titleTh: "ต้นฉบับอัลกุรอานคอลีลี (Codex Parisino-Petropolitanus)",
    arabic: "مجموعة خليلي",
    category: "hijazi",
    categoryLabel: "ศตวรรษที่ 1 ฮ.ศ.",
    date: "ปลายศตวรรษที่ 1 ฮ.ศ.",
    script: "Hijazi Script",
    location: "Nasser David Khalili Collection, London",
    locationTh: "คอลเลกชันนาศิร ดาวูด คอลีลี ลอนดอน",
    description:
      "ส่วนหนึ่งของคอลเลกชันศิลปะอิสลามที่ใหญ่ที่สุดในโลก เขียนด้วยอักษรฮิญาซีบนหนังสัตว์ ได้รับการศึกษาวิเคราะห์โดยนักวิชาการชั้นนำหลายท่าน",
    sourceUrl: "https://www.islamic-awareness.org/quran/text/mss/arabe328a",
    image: "/manuscripts/quran/khalili-quran.jpg",
    tags: ["Hijazi", "1st Century", "London", "Private Collection"],
  },

  // === หมวด: ต้นฉบับอุษมาน ===
  {
    id: 4,
    title: "Samarqand (Uthman) Quran",
    titleTh: "ต้นฉบับอัลกุรอานซามาร์คันด์",
    arabic: "مصحف سمرقند",
    category: "uthman",
    categoryLabel: "ยุคอุษมาน",
    date: "ศตวรรษที่ 2 ฮ.ศ. (Carbon-14)",
    script: "Kufic Script",
    location: "Khast Imam Library, Tashkent, Uzbekistan",
    locationTh: "ห้องสมุดคัสต์ อิหม่าม ทาชเคนต์ อุซเบกิสถาน",
    description:
      "รู้จักในนาม Mushaf Uthmān เชื่อกันว่าเป็นสำเนาที่เคาะลีฟะฮ์อุษมานสั่งจัดทำ ผ่านการทดสอบ Carbon-14 ที่มหาวิทยาลัยอ็อกซ์ฟอร์ด ได้ผลเป็นศตวรรษที่ 2 ฮ.ศ. เขียนด้วยอักษรคูฟิกบนหนังสัตว์",
    sourceUrl: "https://www.islamic-awareness.org/quran/text/mss/samarqand",
    image: "/manuscripts/quran/samarqand-quran.jpg",
    tags: ["Kufic", "Uthman", "Carbon-14 Dated", "Uzbekistan"],
  },
  {
    id: 5,
    title: "Topkapi Quran Manuscript",
    titleTh: "ต้นฉบับอัลกุรอานท็อปกาปึ",
    arabic: "مصحف طوپقپو",
    category: "uthman",
    categoryLabel: "ยุคอุษมาน",
    date: "ศตวรรษที่ 1–2 ฮ.ศ.",
    script: "Kufic Script",
    location: "Topkapi Palace Museum, Istanbul, Turkey",
    locationTh: "พิพิธภัณฑ์พระราชวังท็อปกาปึ อิสตันบูล ตุรกี",
    description:
      "มี 408 หน้า ครอบคลุมมากกว่า 99% ของข้อความอัลกุรอาน ขาดไปเพียง 2 หน้า แสดงรูปแบบการเขียนและตกแต่งตัวอักษรในยุคอุมัยยะห์ปลายศตวรรษที่ 1 ถือเป็นต้นฉบับที่สมบูรณ์ที่สุดชิ้นหนึ่ง",
    sourceUrl: "https://www.islamic-awareness.org/quran/text/mss/",
    image: "/manuscripts/quran/topkapi-quran.jpg",
    tags: ["Kufic", "Uthman", "408 Folios", "Istanbul"],
  },
  {
    id: 6,
    title: "Turkish & Islamic Arts Museum Quran",
    titleTh: "ต้นฉบับอัลกุรอานพิพิธภัณฑ์ศิลปะตุรกีและอิสลาม",
    arabic: "مصحف إسطنبول",
    category: "uthman",
    categoryLabel: "ยุคอุษมาน",
    date: "ศตวรรษที่ 1–2 ฮ.ศ.",
    script: "Kufic Script",
    location: "Türk ve İslam Eserleri Müzesi, Istanbul",
    locationTh: "พิพิธภัณฑ์ศิลปะตุรกีและอิสลาม อิสตันบูล",
    description:
      "เขียนด้วยอักษรคูฟิกบนหนังกวาง มี 439 หน้า ที่น่าสังเกตคือในหน้าสุดท้ายมีข้อความคูฟิกเขียนว่า 'Katabahu Uthmān bin Affān fi sanat thalathyn' (อุษมานบินอัฟฟานเขียนในปีที่ 30) แม้นักวิชาการบางส่วนจะโต้แย้งเรื่องนี้",
    sourceUrl: "https://www.islamic-awareness.org/quran/text/mss/",
    image: "/manuscripts/quran/turkish-islamic-quran.jpg",
    tags: ["Kufic", "Uthman", "Gazelle Skin", "439 Folios"],
  },
  {
    id: 7,
    title: "St. Petersburg Quran Manuscript",
    titleTh: "ต้นฉบับอัลกุรอานเซนต์ปีเตอร์สเบิร์ก",
    arabic: "مصحف بطرسبورغ",
    category: "uthman",
    categoryLabel: "ยุคอุษมาน",
    date: "ศตวรรษที่ 2 ฮ.ศ.",
    script: "Hijazi Script",
    location: "Institute of Oriental Studies, St. Petersburg, Russia",
    locationTh: "สถาบันการศึกษาตะวันออก เซนต์ปีเตอร์สเบิร์ก รัสเซีย",
    description:
      "เขียนด้วยอักษรฮิญาซี ครอบคลุมประมาณ 40% ของข้อความอัลกุรอาน มีซูเราะฮ์ครบ 22 บท และชิ้นส่วนของซูเราะฮ์อื่น ถือเป็นตัวแทนสำคัญของต้นฉบับที่เชื่อว่าเป็นอุษมานิก",
    sourceUrl: "https://www.islamic-awareness.org/quran/text/mss/",
    image: "/manuscripts/quran/stpetersburg-quran.jpg",
    tags: ["Hijazi", "Uthman", "Russia", "22 Surahs"],
  },

  // === หมวด: ยุคอับบาซิด (อักษรคูฟิก) ===
  {
    id: 8,
    title: "Blue Quran",
    titleTh: "อัลกุรอานสีน้ำเงิน",
    arabic: "المصحف الأزرق",
    category: "abbasid",
    categoryLabel: "ยุคอับบาซิด",
    date: "ศตวรรษที่ 9–10 ค.ศ.",
    script: "Kufic Script (Gold on Blue Vellum)",
    location: "National Museum of Bardo, Tunisia",
    locationTh: "พิพิธภัณฑ์แห่งชาติบาร์โด ตูนิเซีย",
    description:
      "หนึ่งในต้นฉบับที่สวยงามที่สุดในประวัติศาสตร์อิสลาม เขียนด้วยหมึกทองคำและเงินบนหนังย้อมสีน้ำเงินเข้มด้วยครามอินดิโก เชื่อว่าสร้างในตูนิเซียยุคราชวงศ์ฟาฏิมียะห์ ชิ้นส่วนกระจายอยู่ในพิพิธภัณฑ์หลายแห่งทั่วโลก",
    sourceUrl: "https://www.islamic-awareness.org/quran/text/mss/",
    image: "/manuscripts/quran/blue-quran.jpg",
    tags: ["Kufic", "Gold Ink", "Blue Vellum", "Fatimid"],
  },
  {
    id: 9,
    title: "Chester Beatty Library Quran (CBL Is 1615)",
    titleTh: "ต้นฉบับอัลกุรอานเชสเตอร์ บีตตี้",
    arabic: "مصحف دبلن",
    category: "abbasid",
    categoryLabel: "ยุคอับบาซิด",
    date: "ศตวรรษที่ 9 ค.ศ.",
    script: "Kufic Script",
    location: "Chester Beatty Library, Dublin, Ireland",
    locationTh: "ห้องสมุดเชสเตอร์ บีตตี้ ดับลิน ไอร์แลนด์",
    description:
      "เก็บรักษาอยู่ที่ห้องสมุดเชสเตอร์ บีตตี้ซึ่งมีคอลเลกชันต้นฉบับอิสลามที่สำคัญที่สุดแห่งหนึ่งในโลกตะวันตก เขียนด้วยอักษรคูฟิกสไตล์ยุคอับบาซิด มีการตกแต่งหัวบทอย่างประณีต",
    sourceUrl: "https://www.islamic-awareness.org/quran/text/mss/",
    image: "/manuscripts/quran/chester-beatty-quran.jpg",
    tags: ["Kufic", "Abbasid", "Dublin", "9th Century"],
  },
  {
    id: 10,
    title: "Timurid Quran Manuscript",
    titleTh: "ต้นฉบับอัลกุรอานยุคติมูริด",
    arabic: "مصحف تيموري",
    category: "timurid",
    categoryLabel: "ยุคติมูริด",
    date: "ศตวรรษที่ 15 ค.ศ.",
    script: "Naskh & Thuluth Script",
    location: "Metropolitan Museum of Art, New York",
    locationTh: "พิพิธภัณฑ์ศิลปะเมโทรโพลิทัน นิวยอร์ก",
    description:
      "ต้นฉบับหนา 534 หน้า เขียนบนกระดาษจีนที่ผสมทองคำ มีสีสันหลากหลายทั้งชมพู ม่วง ครีม ส้ม ฟ้า และเขียว ถือเป็นผลงานชิ้นเอกของศิลปะอิสลามยุคติมูริด",
    sourceUrl: "https://www.islamic-awareness.org/quran/text/mss/",
    image: "/manuscripts/quran/timurid-quran.jpg",
    tags: ["Naskh", "Timurid", "Illuminated", "Gold"],
  },
];

const slugMap = {
  hussein: "hussein",
  1: "sanaa",
  2: "birmingham",
  3: "khalili",
  4: "samarqand",
  5: "topkapi",
  6: "turkish-islamic",
  7: "stpetersburg",
  8: "blue-quran",
  9: "chester-beatty",
  10: "timurid",
};

const filters = [
  { id: "all", label: "ทั้งหมด" },
  { id: "hijazi", label: "ศตวรรษที่ 1 ฮ.ศ." },
  { id: "uthman", label: "ยุคอุษมาน" },
  { id: "abbasid", label: "ยุคอับบาซิด" },
  { id: "timurid", label: "ยุคติมูริด" },
];

function ManuscriptImage({ m }) {
  return (
    <img
      src={m.image}
      alt={m.title}
      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = "/manuscripts/quran/placeholder.jpg";
        e.target.className = "w-full h-full object-contain p-8 opacity-30";
      }}
    />
  );
}

export default function QuranManuscripts() {
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
            <span className="text-gold">Qur'anic Manuscripts</span>
          </nav>

          <div className="text-center">
            <p className="font-amiri text-3xl text-gold/60 mb-3">
              المخطوطات القرآنية
            </p>
            <p className="font-cinzel text-xs tracking-[0.4em] uppercase text-gold-dark mb-4">
              The Archive
            </p>
            <h1 className="font-cinzel text-4xl md:text-6xl mb-5 leading-tight text-shimmer">
              Qur'anic Manuscripts
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
              ต้นฉบับอัลกุรอานโบราณจากแหล่งสะสมทั่วโลก
              <span className="block mt-2 text-sm text-paper/50">
                หลักฐานทางกายภาพแห่งการรักษาไว้ซึ่งพระวจนะ — จากหนังสัตว์ยุคแรกสู่ทองคำบนครามอินดิโก
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
              const slug = slugMap[m.id];
              const detailHref = slug
                ? `/archive/quran-manuscripts/${slug}`
                : null;
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
                    {detailHref ? (
                      <Link href={detailHref} className="block h-full">
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
                    {/* ลายน้ำชื่ออาหรับ */}
                    <div className="absolute top-1 right-3 font-amiri text-6xl text-gold/[0.07] leading-none whitespace-nowrap select-none pointer-events-none">
                      {m.arabic}
                    </div>

                    {detailHref ? (
                      <Link href={detailHref} className="group/title">
                        <h3 className="font-cinzel text-xl text-gold font-semibold mb-1 leading-snug group-hover/title:text-gold-light transition-colors">
                          {m.title}
                        </h3>
                      </Link>
                    ) : (
                      <h3 className="font-cinzel text-xl text-gold font-semibold mb-1 leading-snug">
                        {m.title}
                      </h3>
                    )}
                    <p className="font-pridi text-paper/60 text-sm mb-4">
                      {m.titleTh}
                    </p>

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
                    </dl>

                    <p className="font-pridi text-sm text-paper/70 leading-relaxed mb-5">
                      {m.description}
                    </p>

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
                    {detailHref ? (
                      <div className="flex flex-col sm:flex-row gap-2.5">
                        <Link
                          href={detailHref}
                          className="flex-1 bg-gradient-to-r from-gold-dark via-gold to-gold-light hover:from-gold hover:to-gold-light text-ink font-pridi font-semibold text-sm text-center py-2.5 px-4 rounded-btn shadow-glow-sm hover:shadow-glow transition-all duration-300 flex items-center justify-center gap-2"
                        >
                          <span>สำรวจต้นฉบับ</span>
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
                          แหล่งต้นฉบับ ↗
                        </a>
                      </div>
                    ) : (
                      <a
                        href={m.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block border border-gold/40 text-gold hover:bg-gold/10 hover:border-gold/70 font-pridi text-sm text-center py-2.5 rounded-btn transition-all duration-300"
                      >
                        แหล่งต้นฉบับ ↗
                      </a>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
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
                name: "Islamic Awareness",
                url: "https://www.islamic-awareness.org/quran/text/mss/",
                desc: "ฐานข้อมูล manuscript อิสลาม",
              },
              {
                name: "Internet Archive",
                url: "https://archive.org",
                desc: "คลังดิจิทัล Public Domain",
              },
              {
                name: "Corpus Coranicum",
                url: "https://corpuscoranicum.de",
                desc: "ฐานข้อมูลวิชาการเยอรมัน",
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
