"use client";

import Link from "next/link";
import { useState } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

const manuscripts = [
  {
    id: 1,
    title: "Codex Sinaiticus",
    titleTh: "โคเด็กซ์ ซีไนติกัส",
    category: "uncial",
    categoryLabel: "Uncial Codex",
    date: "ราว ค.ศ. 330-360",
    script: "Greek Uncial (Koine Greek)",
    location: "British Library, London | Leipzig | St. Catherine's Monastery | Vatican",
    locationTh: "หอสมุดบริติช ลอนดอน | ไลพ์ซิก | อาราม St. Catherine | วาติกัน",
    description:
      "ต้นฉบับพันธสัญญาใหม่ฉบับสมบูรณ์ที่เก่าแก่ที่สุดในโลก ค้นพบโดย Constantin von Tischendorf ที่อาราม St. Catherine ไซนาย ในปี ค.ศ. 1844 Bruce Metzger ระบุว่าเป็นหนึ่งในพยานหลักฐานสำคัญที่สุดของข้อความพันธสัญญาใหม่",
    sourceUrl: "https://www.codexsinaiticus.org",
    image: "/manuscripts/bible/codex-sinaiticus.jpg",
    tags: ["Uncial", "Complete NT", "4th Century", "Greek"],
    scholar: "Bruce M. Metzger",
  },
  {
    id: 2,
    title: "Codex Vaticanus (B/03)",
    titleTh: "โคเด็กซ์ วาติกานัส",
    category: "uncial",
    categoryLabel: "Uncial Codex",
    date: "ต้นศตวรรษที่ 4 ค.ศ.",
    script: "Greek Uncial",
    location: "Biblioteca Apostolica Vaticana, Vatican City",
    locationTh: "ห้องสมุดอัครสาวก วาติกัน นครรัฐวาติกัน",
    description:
      "ต้นฉบับที่ครอบคลุมทั้งพันธสัญญาเก่าและใหม่เกือบสมบูรณ์ Bruce Metzger ระบุว่าเป็นหนึ่งในพยานหลักฐานสำคัญที่สุด นักวิชาการพบว่า Sinaiticus และ Vaticanus มีความแตกต่างกัน 3,036 จุด ตามการศึกษาของ Herman Hoskier",
    sourceUrl: "https://www.vatican.va/various/manuscripts/index_en.html",
    image: "/manuscripts/bible/codex-vaticanus.jpg",
    tags: ["Uncial", "4th Century", "Vatican", "Greek"],
    scholar: "Bruce M. Metzger",
  },
  {
    id: 3,
    title: "Codex Alexandrinus (A/02)",
    titleTh: "โคเด็กซ์ อะเล็กซานดรินัส",
    category: "uncial",
    categoryLabel: "Uncial Codex",
    date: "ต้นศตวรรษที่ 5 ค.ศ.",
    script: "Greek Uncial",
    location: "British Library, London",
    locationTh: "หอสมุดบริติช ลอนดอน สหราชอาณาจักร",
    description:
      "หนึ่งใน Great Uncial Codices ทั้งสี่ ครอบคลุมพระคัมภีร์ทั้งเล่มเกือบสมบูรณ์ รวมถึงหนังสือบางเล่มที่ไม่อยู่ในคัมภีร์มาตรฐานปัจจุบัน เช่น 1 Clement และ 2 Clement",
    sourceUrl: "https://www.bl.uk/collection-items/codex-alexandrinus",
    image: "/manuscripts/bible/codex-alexandrinus.jpg",
    tags: ["Uncial", "5th Century", "British Library", "Greek"],
    scholar: "F.F. Bruce",
  },
  {
    id: 4,
    title: "Papyrus P52 (John Rylands Papyrus)",
    titleTh: "ปาปิรัส P52 ยอห์น ไรแลนด์ส",
    category: "papyrus",
    categoryLabel: "Papyrus",
    date: "ราว ค.ศ. 117-150",
    script: "Greek (Koine)",
    location: "John Rylands Library, Manchester, UK",
    locationTh: "ห้องสมุดยอห์น ไรแลนด์ส แมนเชสเตอร์ สหราชอาณาจักร",
    description:
      "ต้นฉบับพระคัมภีร์คริสเตียนที่เก่าแก่ที่สุดที่รู้จัก เป็นชิ้นส่วนของยอห์น 18:31-33 และ 18:37-38 Daniel Wallace ระบุว่า P52 พิสูจน์ว่าพระกิตติคุณยอห์นแต่งขึ้นในศตวรรษที่ 1 แม้ว่านักวิจารณ์บางคนจะโต้แย้งก็ตาม",
    sourceUrl: "https://www.library.manchester.ac.uk/rylands/",
    image: "/manuscripts/bible/papyrus-p52.jpg",
    tags: ["Papyrus", "2nd Century", "John", "Manchester"],
    scholar: "Daniel B. Wallace",
  },
  {
    id: 5,
    title: "Codex Bezae (D/05)",
    titleTh: "โคเด็กซ์ เบซา",
    category: "uncial",
    categoryLabel: "Uncial Codex",
    date: "ศตวรรษที่ 4-5 ค.ศ.",
    script: "Greek & Latin (Bilingual)",
    location: "Cambridge University Library, UK",
    locationTh: "ห้องสมุดมหาวิทยาลัยเคมบริดจ์ สหราชอาณาจักร",
    description:
      "ต้นฉบับ 2 ภาษา (Greek-Latin) ที่มีลักษณะพิเศษ มีข้อความที่แตกต่างจากฉบับมาตรฐานหลายจุด รวมถึงเรื่องราวของหญิงที่ถูกจับได้ว่าล่วงประเวณี (John 7:53-8:11) ซึ่ง Bruce Metzger ถือว่าเป็นส่วนเพิ่มเติมในภายหลัง",
    sourceUrl:
      "https://www.lib.cam.ac.uk/collections/departments/manuscripts-university-archives/significant-items/codex-bezae",
    image: "/manuscripts/bible/codex-bezae.jpg",
    tags: ["Uncial", "Bilingual", "Cambridge", "Textual Variants"],
    scholar: "Bruce M. Metzger",
  },
  {
    id: 6,
    title: "Aleppo Codex (Keter Aram Tzova)",
    titleTh: "โคเด็กซ์ อะเลปโป",
    category: "masoretic",
    categoryLabel: "Masoretic Text",
    date: "ราว ค.ศ. 920",
    script: "Hebrew (Masoretic)",
    location: "Shrine of the Book, Israel Museum, Jerusalem",
    locationTh: "Shrine of the Book พิพิธภัณฑ์อิสราเอล กรุงเยรูซาเล็ม",
    description:
      "ต้นฉบับ Masoretic Text ที่เก่าแก่ที่สุดและสมบูรณ์ที่สุดของพระคัมภีร์ฮีบรู ครั้งหนึ่งเชื่อว่าสมบูรณ์ แต่สูญหายราว 40% ในจลาจลปี ค.ศ. 1947 Emanuel Tov ระบุว่าเป็นต้นฉบับ Hebrew Bible ที่สำคัญที่สุด",
    sourceUrl: "https://www.aleppocodex.org",
    image: "/manuscripts/bible/aleppo-codex.jpg",
    tags: ["Masoretic", "Hebrew", "Jerusalem", "10th Century"],
    scholar: "Emanuel Tov",
  },
];

const filters = [
  { id: "all", label: "ทั้งหมด" },
  { id: "uncial", label: "Uncial Codices" },
  { id: "papyrus", label: "Papyrus" },
  { id: "septuagint", label: "Septuagint" },
  { id: "masoretic", label: "Masoretic" },
];

const scholars = [
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

export default function BiblicalCodices() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? manuscripts
      : manuscripts.filter((m) => m.category === activeFilter);

  return (
    <div className="bg-paper text-ink">
      <Navbar />

      {/* HERO */}
      <section className="relative py-24 bg-ink overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 font-pridi text-sm text-paper/50 mb-8">
            <Link href="/" className="hover:text-gold transition-colors">
              Home
            </Link>
            <span className="text-gold/40">›</span>
            <span className="text-paper/50">Archive</span>
            <span className="text-gold/40">›</span>
            <span className="text-gold">Biblical Codices</span>
          </nav>

          <div className="text-center">
            <p className="font-cinzel text-xs tracking-[0.4em] uppercase text-gold-dark mb-4">
              The Archive
            </p>
            <h1 className="font-cinzel text-4xl md:text-6xl text-gold mb-4 leading-tight">
              Biblical Codices
            </h1>
            <div className="mx-auto h-px w-24 bg-gold/50 mb-6" />
            <h2 className="font-cinzel text-xl md:text-2xl text-gold mb-4">
              Ancient Manuscripts of the Bible
            </h2>
            <p className="font-pridi text-lg md:text-xl text-paper/80 max-w-2xl mx-auto leading-relaxed mb-3">
              ต้นฉบับคัมภีร์ไบเบิลโบราณที่สำคัญ ศึกษาเปรียบเทียบโดยนักวิชาการชั้นนำ
            </p>
            <p className="font-cinzel text-sm text-gold/70">
              4th Century CE onwards | Greek &amp; Hebrew | 5,800+ Manuscripts
            </p>
          </div>
        </div>
      </section>

      {/* FILTER BAR */}
      <section className="py-8 bg-paper-light border-b border-gold/20 sticky top-0 z-30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`font-pridi text-sm px-4 py-2 rounded-btn border transition-colors duration-200 ${
                  activeFilter === f.id
                    ? "bg-gold text-ink border-gold font-semibold"
                    : "border-gold/30 text-ink/70 hover:border-gold/60 hover:text-ink bg-transparent"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* MANUSCRIPT GRID */}
      <section className="py-16 bg-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-pridi text-sm text-ink/50 text-center mb-10">
            แสดง {filtered.length} รายการ
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filtered.map((m) => (
              <div
                key={m.id}
                className="group bg-paper-light border border-gold/20 rounded-card overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-transform duration-300"
              >
                {/* รูปภาพ */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={m.image}
                    alt={m.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/manuscripts/quran/placeholder.jpg";
                      e.target.className =
                        "w-full h-full object-contain p-8 opacity-30";
                    }}
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-gold text-ink font-pridi text-xs px-2 py-1 rounded-full">
                      {m.categoryLabel}
                    </span>
                  </div>
                </div>

                {/* เนื้อหา */}
                <div className="p-6">
                  <h3 className="font-cinzel text-xl text-ink font-semibold mb-1">
                    {m.title}
                  </h3>
                  <p className="font-pridi text-ink-muted text-sm mb-1">
                    {m.titleTh}
                  </p>
                  <span className="text-xs font-cinzel text-gold/60 block mb-3">
                    Ref: {m.scholar}
                  </span>

                  {/* ข้อมูล */}
                  <div className="space-y-1 mb-4 text-sm">
                    <p className="font-pridi text-ink/70">📅 {m.date}</p>
                    <p className="font-pridi text-ink/70">✍️ {m.script}</p>
                    <p className="font-pridi text-ink/70">📍 {m.locationTh}</p>
                  </div>

                  <p className="font-pridi text-sm text-ink/80 leading-relaxed mb-4">
                    {m.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {m.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-gold/30 text-gold font-cinzel text-xs px-2 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* ปุ่ม */}
                  <a
                    href={m.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block btn-outline text-center text-sm py-2 font-pridi"
                  >
                    แหล่งต้นฉบับ ↗
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* นักวิชาการหลัก */}
      <section className="py-16 bg-ink">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-cinzel text-2xl md:text-3xl text-gold mb-3">
              นักวิชาการด้านต้นฉบับพระคัมภีร์
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
