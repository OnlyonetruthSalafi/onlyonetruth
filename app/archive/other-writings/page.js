"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

const manuscripts = [
  {
    id: 1,
    title: "Gospel of Thomas (Coptic)",
    titleTh: "พระกิตติคุณโทมัส",
    mark: "ΘΩΜΑΣ",
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
    mark: "ΜΑΡΙΑΜ",
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
    mark: "ΠΕΤΡΟΣ",
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
    mark: "ΦΙΛΙΠΠΟΣ",
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
    mark: "ΠΟΙΜΗΝ",
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
    mark: "ΑΠΟΚΑΛΥΨΙΣ",
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

export default function OtherWritings() {
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
        <div className="absolute inset-0 opacity-10 pointer-events-none select-none flex items-center justify-center">
          <span className="font-cinzel text-[16rem] text-gold leading-none">
            ⚜
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
            <span className="text-gold">Other Writings Outside Canon</span>
          </nav>

          <div className="text-center">
            <p className="font-cinzel text-2xl text-gold/60 tracking-[0.25em] mb-3">
              ΑΠΟΚΡΥΦΑ
            </p>
            <p className="font-cinzel text-xs tracking-[0.4em] uppercase text-gold-dark mb-4">
              The Archive
            </p>
            <h1 className="font-cinzel text-4xl md:text-6xl mb-5 leading-tight text-shimmer">
              Other Writings Outside Canon
            </h1>
            {/* เส้นแบ่งประดับดาว 8 แฉก */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-24 bg-gradient-to-r from-transparent to-gold/60" />
              <div className="tl-node8">
                <span className="tl-node8-core" />
              </div>
              <div className="h-px w-24 bg-gradient-to-l from-transparent to-gold/60" />
            </div>
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
                    <ManuscriptImage m={m} />
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
                    {/* ลายน้ำชื่อกรีก */}
                    <div className="absolute top-1 right-3 font-cinzel text-5xl text-gold/[0.07] leading-none whitespace-nowrap select-none pointer-events-none">
                      {m.mark}
                    </div>

                    <h3 className="font-cinzel text-xl text-gold font-semibold mb-1 leading-snug">
                      {m.title}
                    </h3>
                    <p className="font-pridi text-paper/60 text-sm mb-1">
                      {m.titleTh}
                    </p>
                    <span className="text-xs font-cinzel text-gold/50 block mb-4">
                      Ref: {m.scholar}
                    </span>

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
                    <a
                      href={m.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block border border-gold/40 text-gold hover:bg-gold/10 hover:border-gold/70 font-pridi text-sm text-center py-2.5 rounded-btn transition-all duration-300"
                    >
                      แหล่งต้นฉบับ ↗
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* นักวิชาการหลัก */}
      <section className="py-16 bg-ink border-t border-gold/15">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-cinzel text-xs tracking-[0.35em] uppercase text-gold-dark mb-3">
              Scholars
            </p>
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
