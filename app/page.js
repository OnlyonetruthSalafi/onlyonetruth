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
      "ต้นฉบับอัลกุรอานยุคแรก ตั้งแต่ฉบับอักษรฮิญาซีในศตวรรษที่ 1 ฮ.ศ. จนถึงฉบับมาตรฐานสมัยอุษมาน บันทึกความต่อเนื่องของพระวจนะที่ไม่เปลี่ยนแปลง",
    href: "/archive/quran-manuscripts",
  },
  {
    glyph: "🕮",
    title: "Biblical Codices",
    blurb:
      "ต้นฉบับไบเบิลสำคัญอย่าง Codex Sinaiticus และ Codex Vaticanus เปรียบเทียบฉบับ Septuagint, Masoretic และ Patristic เพื่อศึกษาความแตกต่างของข้อความ",
    href: "/archive/biblical-codices",
  },
  {
    glyph: "⚜",
    title: "Other Writings Outside Canon",
    blurb:
      "งานเขียนคริสเตียนยุคแรกที่ไม่ได้รับการยอมรับเข้าในคัมภีร์ อาทิ พระวรสารนอกสารบบ จดหมายของบรรดา Church Fathers และข้อเขียน Gnostic ที่โบสถ์ปฏิเสธในภายหลัง",
    href: "/archive/other-writings",
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
        className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
      >

        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/header.png"
            alt="Ancient Library"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/40 to-ink/70" />
        </div>

        {/* แสงลอดหน้าต่างซ้าย - Beam 1 (หลัก) */}
        <div
          className="absolute z-10 pointer-events-none"
          style={{
            top: '-10%',
            left: '-5%',
            width: '45%',
            height: '130%',
            background: 'linear-gradient(105deg, transparent 0%, rgba(197,160,89,0.12) 30%, rgba(212,175,55,0.25) 50%, rgba(197,160,89,0.12) 70%, transparent 100%)',
            animation: 'lightBeam 4s ease-in-out infinite',
            transformOrigin: 'top left',
          }}
        />

        {/* แสงลอดหน้าต่างซ้าย - Beam 2 */}
        <div
          className="absolute z-10 pointer-events-none"
          style={{
            top: '-10%',
            left: '2%',
            width: '35%',
            height: '120%',
            background: 'linear-gradient(110deg, transparent 0%, rgba(197,160,89,0.08) 40%, rgba(212,175,55,0.18) 55%, rgba(197,160,89,0.08) 70%, transparent 100%)',
            animation: 'lightBeam2 5s ease-in-out infinite',
            animationDelay: '1s',
            transformOrigin: 'top left',
          }}
        />

        {/* แสงลอดหน้าต่างซ้าย - Beam 3 (บาง) */}
        <div
          className="absolute z-10 pointer-events-none"
          style={{
            top: '-5%',
            left: '-2%',
            width: '25%',
            height: '110%',
            background: 'linear-gradient(100deg, transparent 0%, rgba(212,175,55,0.06) 45%, rgba(250,240,230,0.15) 55%, rgba(212,175,55,0.06) 65%, transparent 100%)',
            animation: 'lightBeam3 3.5s ease-in-out infinite',
            animationDelay: '0.5s',
            transformOrigin: 'top left',
          }}
        />

        {/* ฝุ่นล่องลอย - Particle 1 */}
        <div className="absolute z-10 pointer-events-none" style={{ top: '40%', left: '15%' }}>
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                width: i % 3 === 0 ? '3px' : '2px',
                height: i % 3 === 0 ? '3px' : '2px',
                borderRadius: '50%',
                backgroundColor: `rgba(212, 175, 55, ${0.4 + (i % 4) * 0.15})`,
                top: `${(i * 37) % 100}px`,
                left: `${(i * 53) % 200}px`,
                animation: `dustFloat${(i % 3) + 1} ${3 + (i % 4)}s ease-in-out infinite`,
                animationDelay: `${i * 0.4}s`,
              }}
            />
          ))}
        </div>

        {/* ฝุ่นล่องลอย - Particle 2 (กลาง) */}
        <div className="absolute z-10 pointer-events-none" style={{ top: '30%', left: '30%' }}>
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                width: '2px',
                height: '2px',
                borderRadius: '50%',
                backgroundColor: `rgba(250, 240, 230, ${0.3 + (i % 3) * 0.2})`,
                top: `${(i * 29) % 80}px`,
                left: `${(i * 43) % 150}px`,
                animation: `dustFloat${(i % 3) + 1} ${4 + (i % 3)}s ease-in-out infinite`,
                animationDelay: `${i * 0.6}s`,
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-gutter max-w-5xl mx-auto">

          <h1 className="mb-6 leading-tight">
            <span className="block font-cinzel font-normal tracking-wide mb-3 text-5xl md:text-7xl lg:text-8xl text-shimmer">
              A Comparative Study
            </span>
            <span
              className="block font-cinzel font-medium tracking-wider italic text-4xl md:text-6xl lg:text-7xl text-gold text-glow-pulse"
              style={{ textShadow: '0 0 30px rgba(197,160,89,0.6)' }}
            >
              of Ancient Texts
            </span>
          </h1>

          <p
            className="font-pridi text-xl md:text-2xl text-paper-white/90 mb-10 max-w-3xl mx-auto leading-relaxed font-light"
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
          >
            การศึกษาเปรียบเทียบ สำเนาคัมภีร์โบราณ<br />
            การส่งต่อ การเก็บรักษา การถูกเปลี่ยนแปลง<br />
            อันนำไปสู่ความจริงเพียงหนึ่งเดียว
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.getElementById('collections-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary font-pridi text-lg"
            >
              เริ่มต้นค้นคว้า
            </button>
            <button
              className="btn-outline font-pridi text-lg"
              onClick={() => document.getElementById('timeline-section')?.scrollIntoView({ behavior: 'smooth' })}
            >
              เรียนรู้ประวัติศาสตร์ ↓
            </button>
          </div>

        </div>

      </section>

      {/* INTRO / FEATURED LECTURE */}
      <section id="intro-section" className="relative py-20 bg-ink overflow-hidden">
        <div className="max-w-6xl mx-auto px-gutter">

          {/* === SPLIT LAYOUT: ซ้าย-ขวา === */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">

            {/* ฝั่งซ้าย: Content */}
            <div className="flex flex-col justify-center">

              {/* EST. label แบบ Hero */}
              <p className="font-cinzel text-xs md:text-sm text-paper-white/60 tracking-[0.3em] uppercase mb-6">
                A QUEST FOR THE PRESERVATION OF SACRED TEXTS
              </p>

              {/* หัวข้อใหญ่ 2 บรรทัด แบบ Hero */}
              <h2 className="mb-6 leading-tight">
                <span className="block font-cinzel text-4xl md:text-5xl lg:text-6xl text-paper-white font-normal tracking-wide mb-3">
                  การศึกษาและพิสูจน์
                </span>
                <span
                  className="block font-cinzel text-4xl md:text-5xl lg:text-6xl text-[#cfa45d] font-medium tracking-wider"
                  style={{textShadow: '2px 2px 4px rgba(0,0,0,0.3), 0 0 20px rgba(207,164,93,0.4)'}}
                >
                  คัมภีร์โบราณ
                </span>
              </h2>

              {/* เส้นแบ่ง */}
              <div className="w-16 h-0.5 bg-gold/40 mb-8"></div>

              {/* เนื้อหา */}
              <p className="font-pridi text-paper-white/80 leading-relaxed text-base md:text-lg mb-10 max-w-lg">
                ร่วมค้นหาความจริงผ่านการศึกษาเชิงวิพากษ์และประวัติศาสตร์ของตัวบทคัมภีร์
                เพื่อสืบค้นร่องรอยการส่งต่อ การเก็บรักษา และการเปลี่ยนแปลงของบันทึกโบราณ
                อันนำไปสู่ความจริงเพียงหนึ่งเดียว
              </p>

              {/* ปุ่ม CTA */}
              <div>
                <button
                  onClick={() => document.getElementById('video-section')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group inline-flex items-center gap-3 border-2 border-gold/50 text-gold font-pridi font-medium px-8 py-3 rounded-md transition-all duration-300 hover:border-gold hover:bg-gold/10 hover:shadow-glow"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  รับชมวิดีโอการศึกษา
                </button>
              </div>

            </div>

            {/* ฝั่งขวา: YouTube Embed */}
            <div id="video-section" className="relative">

              {/* Decorative glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-gold/20 to-gold/5 rounded-xl blur-sm"></div>

              {/* Video container */}
              <div className="relative rounded-xl overflow-hidden"
                style={{boxShadow: '0 20px 25px -5px rgba(0,0,0,0.5), 0 0 30px rgba(197,160,89,0.15)'}}>

                <div className="relative pb-[56.25%] h-0">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/8aMU3Se2XdY?si=r4kKRsVnQhy--PxZ"
                    title="การศึกษาคัมภีร์โบราณ"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </div>

              {/* Caption */}
              <p className="font-cinzel text-xs text-gold/50 text-center mt-4 tracking-widest">
                FEATURED LECTURE — TEXTUAL HISTORY
              </p>

            </div>
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
      <section id="collections-section" className="py-section md:py-28 bg-paper">
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
              คัดสรรคอลเลกชันจากสามสายธารแห่งการถ่ายทอดพระวจนะ — แต่ละเล่มถูกบันทึก เปรียบเทียบ และอธิบายบริบทอย่างเป็นระบบ
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
                  {c.href ? (
                    <Link
                      href={c.href}
                      className="btn-primary font-pridi text-sm mt-4 inline-block"
                    >
                      Browse Collection →
                    </Link>
                  ) : (
                    <div className="mt-6 inline-flex items-center gap-2 text-gold-dark font-cinzel text-xs tracking-[0.25em] uppercase opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-500">
                      Browse Collection
                      <span aria-hidden>→</span>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ARCHIVE CTA */}
      <section
        id="archive-cta"
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
                  Explore Textual Criticism
                </h3>
                <p className="font-pridi text-paper/80 max-w-xl leading-relaxed">
                  ศึกษาความแตกต่างของต้นฉบับ เปรียบเทียบ Variant Readings และติดตามสายการส่งต่อของคัมภีร์โบราณ ด้วยข้อมูลที่อ้างอิงจากนักวิชาการชั้นนำ
                </p>
              </div>
              <a
                href="/textual-history"
                className="btn-primary text-base md:text-lg hover:scale-105 whitespace-nowrap"
              >
                เริ่มศึกษา Textual Criticism →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLES & RESEARCH */}
      <section id="about-project" className="py-20 bg-paper">
        <div className="max-w-7xl mx-auto px-gutter">

          <p className="font-cinzel text-xs text-gold tracking-[0.3em] uppercase mb-4">
            ARTICLES & RESEARCH
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* ฝั่งซ้าย */}
            <div>
              <h2 className="font-cinzel text-4xl md:text-5xl text-ink font-normal leading-tight mb-6">
                Scholarly Articles on Ancient Texts
              </h2>

              <div className="w-12 h-0.5 bg-gold/50 mb-8"></div>

              <p className="font-pridi text-ink/70 leading-relaxed mb-4">
                บทความวิชาการที่ศึกษาและเปรียบเทียบต้นฉบับคัมภีร์โบราณ
                โดยอ้างอิงจากงานของนักวิชาการชั้นนำทั้งฝ่ายมุสลิม คริสต์ และนักวิชาการอิสระ
              </p>

              <p className="font-pridi text-ink/70 leading-relaxed mb-10">
                เราเชื่อว่าความจริง เมื่อได้รับการพิสูจน์อย่างรอบคอบ
                จะสามารถผ่านพ้นทุกยุคสมัยได้
              </p>

              <a href="/articles" className="btn-outline font-pridi inline-flex items-center gap-2">
                ดูบทความทั้งหมด
                <span>→</span>
              </a>
            </div>

            {/* ฝั่งขวา: 3 การ์ดบทความ */}
            <div className="space-y-4">

              <a href="/articles/uthmanic-mushafs-azami"
                className="group block bg-paper-light border border-gold/20 rounded-card p-6 hover:border-gold/50 hover:shadow-card-hover transition-all duration-300">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <span className="font-cinzel text-xs text-gold tracking-widest uppercase mb-2 block">
                      เปรียบเทียบ · Al-Azami &amp; Metzger
                    </span>
                    <h3 className="font-cinzel text-lg text-ink font-semibold mb-2 group-hover:text-gold transition-colors leading-snug">
                      ปฐมบทแห่งการวิจารณ์ตัวบท
                    </h3>
                    <p className="font-pridi text-ink/60 text-sm leading-relaxed line-clamp-2">
                      ทำความรู้จักศาสตร์การวิจารณ์ตัวบท วัสดุโบราณที่ใช้บันทึกคัมภีร์ และเปรียบเทียบสองเส้นทางการพิทักษ์พระวจนะระหว่างโลกอิสลามและคริสเตียน
                    </p>
                  </div>
                  <span className="text-gold/40 group-hover:text-gold transition-colors text-xl mt-1 shrink-0">→</span>
                </div>
              </a>

              <a href="/articles/intentional-changes-metzger"
                className="group block bg-paper-light border border-gold/20 rounded-card p-6 hover:border-gold/50 hover:shadow-card-hover transition-all duration-300">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <span className="font-cinzel text-xs text-gold tracking-widest uppercase mb-2 block">
                      ไบเบิล · Metzger
                    </span>
                    <h3 className="font-cinzel text-lg text-ink font-semibold mb-2 group-hover:text-gold transition-colors leading-snug">
                      การเปลี่ยนแปลงคัมภีร์โดยเจตนา
                    </h3>
                    <p className="font-pridi text-ink/60 text-sm leading-relaxed line-clamp-2">
                      Bruce Metzger จำแนกการเปลี่ยนแปลงข้อความพันธสัญญาใหม่โดยเจตนา รวมถึงการแก้ไขเพื่อให้สอดคล้องกับหลักเทววิทยา
                    </p>
                  </div>
                  <span className="text-gold/40 group-hover:text-gold transition-colors text-xl mt-1 shrink-0">→</span>
                </div>
              </a>

              <a href="/articles/prophet-in-song-of-solomon"
                className="group block bg-paper-light border border-gold/20 rounded-card p-6 hover:border-gold/50 hover:shadow-card-hover transition-all duration-300">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <span className="font-cinzel text-xs text-gold tracking-widest uppercase mb-2 block">
                      เปรียบเทียบ · Song of Solomon
                    </span>
                    <h3 className="font-cinzel text-lg text-ink font-semibold mb-2 group-hover:text-gold transition-colors leading-snug">
                      ศาสดามุฮัมมัดใน Song of Solomon
                    </h3>
                    <p className="font-pridi text-ink/60 text-sm leading-relaxed line-clamp-2">
                      การตีความ Song of Solomon 5:16 และคำว่า Navi ในภาษาฮีบรู-อาราเมอิก ตามมุมมองของนักวิชาการมุสลิม
                    </p>
                  </div>
                  <span className="text-gold/40 group-hover:text-gold transition-colors text-xl mt-1 shrink-0">→</span>
                </div>
              </a>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
