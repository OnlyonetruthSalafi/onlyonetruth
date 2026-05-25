"use client";

import Link from "next/link";
import { useState } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

const manuscripts = [
  {
    id: 1,
    title: "Gospel of Thomas (Coptic)",
    titleTh: "พระกิตติคุณโทมัส",
    category: "gospel",
    categoryLabel: "Gospels นอกสารบบ",
    date: "ราว ค.ศ. 50-140 (ต้นฉบับ Coptic ค.ศ. 350)",
    script: "Coptic (Sahidic dialect)",
    location: "Coptic Museum, Cairo, Egypt",
    locationTh: "พิพิธภัณฑ์คอปติก ไคโร อียิปต์",
    description:
      "ค้นพบที่ Nag Hammadi อียิปต์ ปี ค.ศ. 1945 มี 114 logion (คำกล่าว) ของพระเยซู ไม่มีเรื่องการตรึงกางเขนหรือการฟื้นคืนชีพ Bart Ehrman ระบุว่าเป็นแหล่งข้อมูลสำคัญที่สุดนอกพระคัมภีร์ อาจมีคำกล่าวบางส่วนที่เก่าแก่กว่า Synoptic Gospels",
    sourceUrl: "https://www.earlychristianwritings.com/thomas.html",
    image: "/manuscripts/other/gospel-thomas.jpg",
    tags: ["Gnostic", "Nag Hammadi", "Coptic", "Sayings Gospel"],
    scholar: "Bart D. Ehrman",
  },
  {
    id: 2,
    title: "Gospel of Mary Magdalene",
    titleTh: "พระกิตติคุณมารีย์ มักดาเลนา",
    category: "gospel",
    categoryLabel: "Gospels นอกสารบบ",
    date: "ศตวรรษที่ 2 ค.ศ.",
    script: "Coptic & Greek (fragments)",
    location: "Berolinensis Gnosticus 8052, Berlin | Rylands Papyrus P.Ryl. 463",
    locationTh: "พิพิธภัณฑ์ศิลปะอียิปต์ เบอร์ลิน | ห้องสมุดไรแลนด์ส แมนเชสเตอร์",
    description:
      "หนึ่งในข้อความที่แสดงบทบาทของสตรีในคริสต์ศาสนายุคแรก มารีย์รับการสอนลับจากพระเยซูซึ่งสาวกชายไม่ได้รับ สูญหายกว่า 1,600 ปี ค้นพบในปลายศตวรรษที่ 19 Ehrman ระบุในหนังสือ Lost Scriptures (Oxford University Press, 2003)",
    sourceUrl: "https://www.earlychristianwritings.com/gospelmary.html",
    image: "/manuscripts/other/gospel-mary.jpg",
    tags: ["Gnostic", "2nd Century", "Women", "Berlin"],
    scholar: "Bart D. Ehrman",
  },
  {
    id: 3,
    title: "Gospel of Peter",
    titleTh: "พระกิตติคุณเปโตร",
    category: "gospel",
    categoryLabel: "Gospels นอกสารบบ",
    date: "ศตวรรษที่ 2 ค.ศ.",
    script: "Greek",
    location: "Egyptian Museum, Cairo (P.Cair. 10759)",
    locationTh: "พิพิธภัณฑ์อียิปต์ ไคโร อียิปต์",
    description:
      "ค้นพบที่ Akhmim อียิปต์ ปี ค.ศ. 1886 มีเรื่องราวการตรึงกางเขนและการฟื้นคืนชีพที่แตกต่างจากฉบับมาตรฐาน เช่น ไม้กางเขนพูดได้และพระเยซูมีขนาดใหญ่ผิดปกติ Origen (185-254) และ Eusebius กล่าวถึงและปฏิเสธข้อความนี้",
    sourceUrl: "https://www.earlychristianwritings.com/gospelpeter.html",
    image: "/manuscripts/other/gospel-peter.jpg",
    tags: ["Docetic", "2nd Century", "Passion", "Cairo"],
    scholar: "Bart D. Ehrman",
  },
  {
    id: 4,
    title: "Gospel of Philip (Nag Hammadi)",
    titleTh: "พระกิตติคุณฟิลิป",
    category: "gnostic",
    categoryLabel: "Gnostic Texts",
    date: "ศตวรรษที่ 3 ค.ศ. (ต้นฉบับ Coptic ค.ศ. 350)",
    script: "Coptic (Sahidic)",
    location: "Coptic Museum, Cairo (Nag Hammadi Codex II)",
    locationTh: "พิพิธภัณฑ์คอปติก ไคโร อียิปต์ (Nag Hammadi Codex II)",
    description:
      "ค้นพบที่ Nag Hammadi ปี 1945 ไม่ใช่พระกิตติคุณในความหมายทั่วไป แต่เป็นบทความเทววิทยา Gnostic มีข้อความที่กล่าวถึงความสัมพันธ์ระหว่างพระเยซูกับมารีย์ มักดาเลนา ซึ่งเป็นที่ถกเถียงในวงวิชาการ",
    sourceUrl: "https://www.earlychristianwritings.com/gospelphilip.html",
    image: "/manuscripts/other/gospel-philip.jpg",
    tags: ["Gnostic", "Nag Hammadi", "Sacraments", "3rd Century"],
    scholar: "Elaine Pagels",
  },
  {
    id: 5,
    title: "Shepherd of Hermas",
    titleTh: "คนเลี้ยงแกะของเฮอร์มาส",
    category: "epistle",
    categoryLabel: "Epistles นอกสารบบ",
    date: "ราว ค.ศ. 100-160",
    script: "Greek",
    location: "Vatican Library (Codex Sinaiticus includes part of it)",
    locationTh: "ห้องสมุดวาติกัน (บางส่วนใน Codex Sinaiticus)",
    description:
      "หนึ่งในงานเขียนยุคแรกที่ได้รับความนิยมสูงมากในคริสตจักรยุคแรก ถึงขนาดรวมอยู่ใน Codex Sinaiticus บางส่วน Muratorian Canon (ราว ค.ศ. 170) ระบุว่าให้อ่านได้แต่ไม่นับเป็นพระคัมภีร์ Metzger อธิบายในหนังสือ Canon of the New Testament (1987)",
    sourceUrl: "https://www.earlychristianwritings.com/shepherd.html",
    image: "/manuscripts/other/shepherd-hermas.jpg",
    tags: ["Apostolic Fathers", "Apocalypse", "Popular", "2nd Century"],
    scholar: "Bruce M. Metzger",
  },
  {
    id: 6,
    title: "Apocalypse of Peter",
    titleTh: "วิวรณ์ของเปโตร",
    category: "apocalypse",
    categoryLabel: "Apocalypses",
    date: "ราว ค.ศ. 100-150",
    script: "Greek & Ethiopic",
    location: "Various (fragments at Akhmim, Bodleian Library)",
    locationTh: "หลายแห่ง รวมถึงห้องสมุดบอดเลียน อ็อกซ์ฟอร์ด",
    description:
      "Apocalypse นอกสารบบที่ได้รับความนิยมในคริสต์ศาสนายุคแรก บรรยายสวรรค์และนรกอย่างละเอียด Clement of Alexandria ถือว่าเป็นพระคัมภีร์ แต่ Eusebius ปฏิเสธ Bart Ehrman รวมไว้ใน Lost Scriptures (2003) พร้อมบทนำโดยละเอียด",
    sourceUrl: "https://www.earlychristianwritings.com/apocalypsepeter.html",
    image: "/manuscripts/other/apocalypse-peter.jpg",
    tags: ["Apocalypse", "Heaven & Hell", "2nd Century", "Akhmim"],
    scholar: "Bart D. Ehrman",
  },
];

const filters = [
  { id: "all", label: "ทั้งหมด" },
  { id: "gospel", label: "Gospels นอกสารบบ" },
  { id: "gnostic", label: "Gnostic Texts" },
  { id: "epistle", label: "Epistles นอกสารบบ" },
  { id: "apocalypse", label: "Apocalypses" },
];

const scholars = [
  {
    name: "Bart D. Ehrman",
    years: "ปัจจุบัน",
    institution: "University of North Carolina Chapel Hill",
    work: '"Lost Scriptures" (2003), "Lost Christianities" (2003), "Misquoting Jesus" (2005) — Oxford University Press / HarperOne',
  },
  {
    name: "Elaine Pagels",
    years: "ปัจจุบัน",
    institution: "Princeton University",
    work: '"The Gnostic Gospels" (1979) — National Book Award Winner\n"Beyond Belief: The Secret Gospel of Thomas" (2003)',
  },
  {
    name: "James M. Robinson",
    years: "1924–2016",
    institution: "Claremont Graduate University",
    work: 'บรรณาธิการ "The Nag Hammadi Library" (1977) — ผู้นำโครงการแปล Nag Hammadi Codices',
  },
];

export default function OtherWritings() {
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
        <div className="absolute inset-0 opacity-10 pointer-events-none select-none flex items-center justify-center">
          <span className="font-cinzel text-[16rem] text-gold leading-none">
            ⚜
          </span>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 font-pridi text-sm text-paper/50 mb-8">
            <Link href="/" className="hover:text-gold transition-colors">
              Home
            </Link>
            <span className="text-gold/40">›</span>
            <span className="text-paper/50">Archive</span>
            <span className="text-gold/40">›</span>
            <span className="text-gold">Other Writings Outside Canon</span>
          </nav>

          <div className="text-center">
            <p className="font-cinzel text-xs tracking-[0.4em] uppercase text-gold-dark mb-4">
              The Archive
            </p>
            <h1 className="font-cinzel text-4xl md:text-6xl text-gold mb-4 leading-tight">
              Other Writings Outside Canon
            </h1>
            <div className="mx-auto h-px w-24 bg-gold/50 mb-6" />
            <h2 className="font-cinzel text-xl md:text-2xl text-gold mb-4">
              Early Christian Texts Rejected by the Church
            </h2>
            <p className="font-pridi text-lg md:text-xl text-paper/80 max-w-2xl mx-auto leading-relaxed mb-3">
              งานเขียนคริสเตียนยุคแรกที่ไม่ได้รับการยอมรับเข้าในคัมภีร์ไบเบิล
              ศึกษาโดย Bart D. Ehrman และนักวิชาการร่วมสมัย
            </p>
            <p className="font-cinzel text-sm text-gold/70">
              1st–4th Century CE | Greek, Coptic, Latin | 50+ Known Texts
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
                <div className="relative h-56 overflow-hidden bg-paper-light flex items-center justify-center">
                  <img
                    src={m.image}
                    alt={m.title}
                    className="w-full h-full object-contain p-3"
                    style={{ maxHeight: '224px' }}
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
              นักวิชาการด้านงานเขียนนอกสารบบ
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
                <p className="font-pridi text-paper/60 text-xs leading-relaxed whitespace-pre-line">
                  {s.work}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
