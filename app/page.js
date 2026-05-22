"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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

const condensedItems = [
  { side: "left", year: "610–632 ค.ศ.", title: "การประทานพระวจนะ" },
  { side: "right", year: "170 ค.ศ.", title: "Muratorian Canon" },
  { side: "left", year: "632–634 ค.ศ.", title: "รัชสมัยอาบูบักร" },
  { side: "right", year: "325 ค.ศ.", title: "สภานิเคีย" },
  { side: "left", year: "644–656 ค.ศ.", title: "รัชสมัยอุษมาน" },
  { side: "right", year: "1546 ค.ศ.", title: "สภาเทรนต์" },
];

const collections = [
  {
    glyph: "📜",
    title: "Qur'anic Manuscripts",
    blurb:
      "Early codices and folios — from Hijazi script to illuminated Mamluk volumes — examined for orthography, variant readings, and provenance.",
  },
  {
    glyph: "🕮",
    title: "Biblical Codices",
    blurb:
      "Septuagint, Masoretic, and patristic witnesses placed side by side, mapping the transmission of sacred text across two millennia.",
  },
  {
    glyph: "⚜",
    title: "Patristic & Sirah",
    blurb:
      "Commentaries, chronicles, and biographical traditions that shaped scholarly memory across Late Antiquity and the Medieval world.",
  },
];

export default function Home() {
  const rootRef = useReveal();

  return (
    <div ref={rootRef} className="bg-paper text-ink">
      <Navbar />

      {/* HERO */}
      <section
        id="home"
        className="relative h-[80vh] min-h-[600px] max-md:h-[70vh] max-sm:h-[60vh] max-sm:min-h-[500px] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/header.png"
            alt="Ancient library archive with stacks of scrolls revealing Arabic text"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/50 to-ink/85" />
          <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl">
          <h1 data-reveal>
            <span className="block text-paper-white font-cinzel font-normal tracking-wide mb-3 text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[1.05]">
              A Comparative Study
            </span>
            <span className="block text-gold font-cinzel font-medium tracking-wider italic text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-[1.1]" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.3)'}}>
              of Ancient Texts
            </span>
          </h1>
          <p
            data-reveal
            className="font-pridi text-xl md:text-2xl text-paper-white/90 mb-10 max-w-3xl mx-auto leading-relaxed font-light"
          >
            การศึกษาเปรียบเทียบ สำเนาคัมภีร์โบราณ<br />
            การส่งต่อ การเก็บรักษา การถูกเปลี่ยนแปลง<br />
            อันนำไปสู่ความจริงเพียงหนึ่งเดียว
          </p>
          <div
            data-reveal
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
          >
            <a
              href="#collections"
              className="btn-primary text-base sm:text-lg hover:scale-105"
            >
              <span className="font-pridi">เริ่มต้นค้นคว้า</span>
            </a>
            <button
              className="inline-flex items-center gap-2 text-paper border border-paper/30 hover:border-gold hover:text-gold font-cinzel px-8 py-3.5 rounded-btn text-base sm:text-lg transition-all duration-300 backdrop-blur-sm"
              onClick={() => {
                document.getElementById('timeline-section')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <span className="font-pridi">เรียนรู้ประวัติศาสตร์</span>
              <span className="ml-2">↓</span>
            </button>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:block animate-float-soft">
          <div className="flex flex-col items-center text-paper/60">
            <span className="font-cinzel text-[10px] tracking-[0.4em] uppercase">
              Scroll
            </span>
            <div className="mt-2 h-10 w-px bg-gradient-to-b from-gold to-transparent" />
          </div>
        </div>
      </section>

      {/* SCRIPTURE TIMELINE — condensed */}
      <section id="timeline-section" className="py-section md:py-24 bg-paper-light border-t border-gold/15">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <p
              data-reveal
              className="font-pridi text-xs tracking-[0.4em] uppercase text-gold-dark mb-4"
            >
              Timeline เปรียบเทียบ
            </p>
            <h2
              data-reveal
              className="font-pridi text-3xl md:text-5xl text-ink mb-5 leading-tight"
            >
              ประวัติศาสตร์การรวบรวมคัมภีร์
            </h2>
            <div data-reveal className="mx-auto h-px w-24 bg-gold mb-6" />
            <p
              data-reveal
              className="font-pridi text-base md:text-lg text-ink/75 leading-relaxed"
            >
              เปรียบเทียบกระบวนการอนุรักษ์พระวจนะศักดิ์สิทธิ์ตามลำดับเวลา
            </p>
          </div>

          {/* Desktop column headers */}
          <div className="hidden md:grid grid-cols-2 mb-8">
            <div data-reveal className="text-center pr-10 lg:pr-16">
              <span className="font-pridi text-base tracking-[0.2em] uppercase text-gold font-bold">
                อัลกุรอาน
              </span>
              <div className="mx-auto h-px w-12 bg-gold/40 mt-2" />
            </div>
            <div data-reveal className="text-center pl-10 lg:pl-16">
              <span className="font-pridi text-base tracking-[0.2em] uppercase text-ink/50 font-bold">
                ไบเบิล
              </span>
              <div className="mx-auto h-px w-12 bg-ink/15 mt-2" />
            </div>
          </div>

          <div className="relative">
            {/* Center line — desktop only */}
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 inset-y-0 w-0.5 bg-gradient-to-b from-transparent via-gold/50 to-transparent" />

            <div className="space-y-5 md:space-y-6">
              {condensedItems.map((item, i) => (
                <div key={i} data-reveal className="grid md:grid-cols-2">
                  {item.side === "left" ? (
                    <>
                      <div className="relative md:pr-10 lg:pr-16">
                        <article className="bg-ink/5 border border-gold/20 rounded-card px-5 py-4 backdrop-blur-sm hover:-translate-y-1 hover:shadow-card-hover hover:border-gold/40 transition-all duration-300">
                          <div className="text-gold font-bold text-xs mb-0.5 select-none">◆</div>
                          <div className="font-cinzel text-gold font-bold text-xl md:text-2xl mb-1 leading-tight">
                            {item.year}
                          </div>
                          <h3 className="font-pridi text-ink font-bold text-sm md:text-base">
                            {item.title}
                          </h3>
                        </article>
                        <div className="hidden md:block absolute right-0 translate-x-1/2 top-7 w-4 h-4 rounded-full bg-gold border-2 border-paper z-10" />
                      </div>
                      <div className="hidden md:block" />
                    </>
                  ) : (
                    <>
                      <div className="hidden md:block" />
                      <div className="relative md:pl-10 lg:pl-16">
                        <div className="hidden md:block absolute left-0 -translate-x-1/2 top-7 w-4 h-4 rounded-full bg-gold border-2 border-paper z-10" />
                        <article className="bg-ink/5 border border-gold/20 rounded-card px-5 py-4 backdrop-blur-sm hover:-translate-y-1 hover:shadow-card-hover hover:border-gold/40 transition-all duration-300">
                          <div className="text-gold font-bold text-xs mb-0.5 select-none">◆</div>
                          <div className="font-cinzel text-gold font-bold text-xl md:text-2xl mb-1 leading-tight">
                            {item.year}
                          </div>
                          <h3 className="font-pridi text-ink font-bold text-sm md:text-base">
                            {item.title}
                          </h3>
                        </article>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div data-reveal className="text-center mt-12">
            <Link
              href="/textual-history"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-ink font-pridi font-semibold px-8 py-3.5 rounded-btn text-base tracking-wide transition-all duration-300 shadow-card hover:shadow-card-hover hover:-translate-y-0.5"
            >
              ศึกษาเพิ่มเติม
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* COLLECTIONS */}
      <section id="collections" className="py-section md:py-28 bg-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
            <p
              data-reveal
              className="font-cinzel text-xs tracking-[0.4em] uppercase text-gold-dark mb-4"
            >
              The Archive
            </p>
            <h2
              data-reveal
              className="font-cinzel text-3xl md:text-5xl text-ink mb-5 leading-tight"
            >
              Our Collections
            </h2>
            <div
              data-reveal
              className="mx-auto h-px w-24 bg-gold mb-6"
            />
            <p
              data-reveal
              className="font-cinzel text-base md:text-lg text-ink/75 leading-relaxed"
            >
              Curated holdings spanning three traditions of textual transmission —
              each volume documented, compared, and contextualized.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {collections.map((c, i) => (
              <article
                key={c.title}
                data-reveal
                style={{ transitionDelay: `${i * 90}ms` }}
                className="group relative bg-paper-light border-2 border-gold/30 rounded-card p-7 md:p-9 hover:shadow-2xl hover:border-gold transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-gold/15 transition-colors duration-500" />
                <div className="relative">
                  <div className="text-5xl mb-5 text-gold transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
                    {c.glyph}
                  </div>
                  <h3 className="font-cinzel text-2xl md:text-[1.65rem] text-ink mb-3 leading-snug">
                    {c.title}
                  </h3>
                  <p className="font-cinzel text-[0.95rem] leading-relaxed text-ink/75">
                    {c.blurb}
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 text-gold-dark font-cinzel text-xs tracking-[0.25em] uppercase opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-500">
                    Browse Collection
                    <span aria-hidden>→</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO / FEATURED LECTURE */}
      <section id="intro-section" className="relative py-20 bg-ink">
        <div className="max-w-5xl mx-auto px-gutter text-center">

          {/* อายะห์อัลกุรอาน */}
          <div className="mb-12">
            <p className="font-amiri text-4xl md:text-5xl text-gold leading-loose mb-6 tracking-wide" dir="rtl">
              إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ
            </p>
            <p className="font-pridi text-lg md:text-xl text-paper/80 leading-relaxed">
              "แท้จริง เราได้ประทานอัล-ซิกร์ (อัลกุรอาน) ลงมา<br />
              และแท้จริง เราเป็นผู้พิทักษ์รักษามันไว้"
            </p>
            <p className="font-pridi text-sm text-gold/60 mt-2">
              — อัลกุรอาน สูเราะฮ์ อัล-ฮิจร์ 15:9
            </p>
          </div>

          {/* เส้นแบ่ง */}
          <div className="flex items-center gap-4 mb-12 max-w-xs mx-auto">
            <div className="flex-1 h-px bg-gold/30"></div>
            <span className="text-gold text-xl">◆</span>
            <div className="flex-1 h-px bg-gold/30"></div>
          </div>

          {/* วีดีโอหลัก */}
          <div className="mb-6">
            <h2 className="font-cinzel text-2xl md:text-3xl text-gold tracking-wide mb-2">
              FEATURED LECTURE
            </h2>
            <p className="font-pridi text-paper/70 mb-8">
              วีดีโอแนะนำการศึกษาเปรียบเทียบคัมภีร์โบราณ
            </p>

            <div className="relative w-full max-w-3xl mx-auto rounded-card overflow-hidden shadow-[0_0_40px_rgba(197,160,89,0.2)] border border-gold/20">
              <div className="relative pb-[56.25%] h-0">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/8aMU3Se2XdY?si=r4kKRsVnQhy--PxZ"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          {/* เส้นแบ่ง */}
          <div className="flex items-center gap-4 my-12 max-w-xs mx-auto">
            <div className="flex-1 h-px bg-gold/30"></div>
            <span className="text-gold text-xl">◆</span>
            <div className="flex-1 h-px bg-gold/30"></div>
          </div>

          {/* ปุ่มวีดีโออื่นๆ */}
          <div className="mb-4">
            <h3 className="font-cinzel text-xl text-gold/80 tracking-wide mb-6">
              RELATED LECTURES
            </h3>
            <p className="font-pridi text-paper/60 mb-8 text-sm">
              วีดีโอพื้นฐานสำหรับการศึกษาเพิ่มเติม
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              {
                title: "ประวัติอัลกุรอาน",
                subtitle: "History of the Quran",
                icon: "📜",
                url: "https://www.youtube.com/watch?v=8aMU3Se2XdY"
              },
              {
                title: "ประวัติไบเบิล",
                subtitle: "History of the Bible",
                icon: "📖",
                url: "https://www.youtube.com/watch?v=8aMU3Se2XdY"
              },
              {
                title: "การเปรียบเทียบ",
                subtitle: "Comparative Study",
                icon: "⚖️",
                url: "https://www.youtube.com/watch?v=8aMU3Se2XdY"
              },
            ].map((video, i) => (
              <a
                key={i}
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group card-glass flex flex-col items-center gap-3 text-center hover:border-gold/60 transition-all duration-300"
              >
                <span className="text-4xl">{video.icon}</span>
                <div>
                  <p className="font-pridi text-paper-white font-semibold text-base group-hover:text-gold transition-colors">
                    {video.title}
                  </p>
                  <p className="font-cinzel text-xs text-paper-white/40 tracking-wide mt-1">
                    {video.subtitle}
                  </p>
                </div>
                <span className="font-pridi text-xs text-gold/60 group-hover:text-gold transition-colors mt-1">
                  ▶ ดูวีดีโอ
                </span>
              </a>
            ))}
          </div>

        </div>
      </section>

      {/* ARCHIVE CTA */}
      <section
        id="archive"
        className="py-section md:py-24 bg-paper border-t border-gold/20"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            data-reveal
            className="relative bg-gradient-to-br from-ink to-ink/90 text-paper-white rounded-2xl p-10 md:p-16 overflow-hidden shadow-2xl border border-gold/30"
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 text-[18rem] leading-none font-cinzel text-gold/30 -translate-y-12 translate-x-8 select-none">
                ﷽
              </div>
            </div>
            <div className="relative grid md:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <h3 className="font-cinzel text-2xl md:text-4xl mb-3 leading-tight">
                  Step into the Archive
                </h3>
                <p className="font-cinzel text-paper/80 max-w-xl leading-relaxed">
                  Browse digitized folios, cross-reference variant readings, and
                  trace the textual lineage of every document in our holdings.
                </p>
              </div>
              <a
                href="#about"
                className="btn-primary text-base md:text-lg hover:scale-105 whitespace-nowrap"
              >
                Enter the Archive →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-section md:py-28 bg-paper-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div data-reveal>
            <p className="font-cinzel text-xs tracking-[0.4em] uppercase text-gold-dark mb-4">
              About the Project
            </p>
            <h2 className="font-cinzel text-3xl md:text-4xl text-ink mb-6 leading-tight">
              A Scholarly Refuge for the World's Oldest Voices
            </h2>
            <div className="h-px w-20 bg-gold mb-6" />
            <p className="font-cinzel text-base md:text-lg text-ink/80 leading-relaxed mb-4">
              OnlyOneTruth gathers, digitizes, and annotates manuscripts that
              shaped religious and intellectual history. Our editors collaborate
              with libraries, archives, and independent scholars to keep every
              reading transparent and every provenance accountable.
            </p>
            <p className="font-cinzel text-base md:text-lg text-ink/80 leading-relaxed">
              We believe truth, when carefully witnessed, can survive any
              century.
            </p>
          </div>

          <div data-reveal className="space-y-5">
            {[
              {
                t: "Provenance First",
                d: "Every folio is traced to a verifiable origin before being added to the archive.",
              },
              {
                t: "Open Scholarship",
                d: "Variant readings, marginalia, and editorial decisions are documented and citable.",
              },
              {
                t: "Preservation Standards",
                d: "Imaging, encoding, and storage follow international archival best practice.",
              },
            ].map((v) => (
              <div
                key={v.t}
                className="bg-paper/60 border border-gold/30 rounded-card p-5 hover:border-gold transition-colors"
              >
                <h4 className="font-cinzel text-xl text-ink mb-1">
                  {v.t}
                </h4>
                <p className="font-cinzel text-sm text-ink/75 leading-relaxed">
                  {v.d}
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
