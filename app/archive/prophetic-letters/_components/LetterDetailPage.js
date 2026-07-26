"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";

/**
 * เทมเพลตหน้ารายละเอียดจดหมายทางการทูตของท่านนบีมุฮัมมัด ﷺ
 * โครงสร้าง: Hero → Gallery (พร้อมเครดิตภาพ) → Info Grid → เนื้อความจดหมาย (แปล)
 *            → Sections → กล่องหมายเหตุความแท้ → อ้างอิง → ปุ่ม
 */

function GalleryImage({ g, title }) {
  const [failed, setFailed] = useState(false);
  return (
    <figure className="rounded-card overflow-hidden shadow-card border border-gold/20 w-full bg-[#241512]">
      <div className="relative">
        {failed ? (
          <div className="h-64 grid place-items-center bg-[#241512]">
            <p className="font-pridi text-paper/50 text-sm">รอการอัปโหลดภาพ</p>
          </div>
        ) : (
          <Image
            src={g.src}
            alt={g.alt || `${title} — จดหมาย`}
            width={g.width || 1000}
            height={g.height || 700}
            sizes="(max-width: 640px) 100vw, 50vw"
            className="w-full h-auto object-cover block"
            onError={() => setFailed(true)}
          />
        )}
      </div>
      <figcaption className="p-4 bg-ink/5">
        <p className="font-cinzel text-sm text-ink">{g.caption}</p>
        {g.credit && (
          <p className="font-pridi text-[0.7rem] text-ink-muted mt-1 leading-snug">
            เครดิตภาพ: {g.credit}
          </p>
        )}
      </figcaption>
    </figure>
  );
}

export default function LetterDetailPage({ data }) {
  const {
    title,
    titleTh,
    arabic,
    subtitle,
    heroDesc,
    heroMeta,
    gallery = [],
    galleryNote,
    info = [],
    letterText,
    sections = [],
    note,
    references = [],
    primaryUrl,
    primaryLabel,
  } = data;

  return (
    <div className="bg-paper text-ink">
      <Navbar />

      {/* HERO */}
      <section className="relative py-20 bg-ink overflow-hidden">
        {/* ลายน้ำอาหรับจาง */}
        {arabic && (
          <div className="absolute inset-0 opacity-[0.06] pointer-events-none select-none flex items-center justify-center">
            <span className="font-amiri text-[9rem] md:text-[13rem] text-gold leading-none whitespace-nowrap">
              {arabic}
            </span>
          </div>
        )}

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 font-pridi text-sm text-paper/50 mb-8 flex-wrap">
            <Link href="/" className="hover:text-gold transition-colors">
              Home
            </Link>
            <span className="text-gold/40">›</span>
            <span className="text-paper/50">Archive</span>
            <span className="text-gold/40">›</span>
            <Link
              href="/archive/prophetic-letters"
              className="hover:text-gold transition-colors"
            >
              Prophetic Letters
            </Link>
            <span className="text-gold/40">›</span>
            <span className="text-gold">{title}</span>
          </nav>

          <div className="text-center">
            <h1 className="font-cinzel text-3xl md:text-5xl text-paper-white mb-3 leading-tight">
              {title}
            </h1>
            <h2 className="font-cinzel text-lg md:text-2xl text-gold mb-2">
              {titleTh}
            </h2>
            {subtitle && (
              <p className="font-pridi text-paper/60 text-sm md:text-base mb-6">
                {subtitle}
              </p>
            )}
            <div className="mx-auto h-px w-24 bg-gold/50 mb-6" />
            <p className="font-pridi text-lg text-paper-white/80 max-w-2xl mx-auto leading-relaxed mb-4">
              {heroDesc}
            </p>
            <p className="font-cinzel text-gold/70 text-sm tracking-widest">
              {heroMeta}
            </p>
          </div>
        </div>
      </section>

      {/* IMAGE GALLERY */}
      {gallery.length > 0 && (
        <section className="py-16 bg-paper overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-cinzel text-2xl text-ink text-center mb-4">
              ภาพเอกสาร
            </h2>
            {galleryNote && (
              <p className="font-pridi text-center text-ink-muted mb-10">
                {galleryNote}
              </p>
            )}
            <div
              className={`grid grid-cols-1 gap-6 ${
                gallery.length > 1 ? "sm:grid-cols-2" : "max-w-2xl mx-auto"
              }`}
            >
              {gallery.map((g) => (
                <GalleryImage key={g.src} g={g} title={title} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* INFO + CONTENT */}
      <section className="py-16 bg-paper-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Info Grid */}
          {info.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {info.map((item) => (
                <div key={item.label} className="card-glass p-5">
                  <p className="font-cinzel text-gold text-sm mb-1">
                    {item.label}
                  </p>
                  <p className="font-pridi text-ink">{item.value}</p>
                </div>
              ))}
            </div>
          )}

          {/* เนื้อความจดหมาย (คำแปล) */}
          {letterText && (
            <div className="mb-12">
              <h3 className="font-cinzel text-xl text-ink mb-4">
                เนื้อความจดหมาย (คำแปล)
              </h3>
              <blockquote className="relative border-l-4 border-gold bg-paper rounded-r-card p-6 md:p-7 shadow-card">
                <span className="absolute -top-3 left-5 font-amiri text-4xl text-gold/30 select-none">
                  ❝
                </span>
                {letterText.arabic && (
                  <p className="font-amiri text-2xl md:text-3xl text-ink text-right leading-loose mb-5">
                    {letterText.arabic}
                  </p>
                )}
                <p className="font-pridi text-ink/85 leading-[2] whitespace-pre-line">
                  {letterText.thai}
                </p>
                {letterText.ref && (
                  <p className="font-cinzel text-gold/70 text-xs tracking-widest mt-4">
                    — {letterText.ref}
                  </p>
                )}
              </blockquote>
            </div>
          )}

          {/* Sections */}
          {sections.map((s) => (
            <div key={s.heading} className="mb-10">
              <h3 className="font-cinzel text-xl text-ink mb-4">{s.heading}</h3>
              <div className="space-y-4">
                {s.paragraphs.map((p, i) => (
                  <p key={i} className="font-pridi text-ink/80 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          ))}

          {/* หมายเหตุความแท้ของเอกสาร */}
          {note && (
            <div className="mb-10">
              <h3 className="font-cinzel text-xl text-ink mb-4">
                หมายเหตุ — ความแท้ของเอกสาร
              </h3>
              <div
                className="border-l-4 border-gold p-5 rounded-card"
                style={{ background: "#3E2723" }}
              >
                <p className="font-cinzel text-gold text-sm font-semibold mb-2 tracking-wide">
                  ** ข้อสังเกตเชิงระเบียบวิธี
                </p>
                <p className="font-pridi text-paper-white leading-relaxed">
                  {note}
                </p>
              </div>
            </div>
          )}

          {/* แหล่งอ้างอิง */}
          {references.length > 0 && (
            <div className="border-t border-gold/20 pt-6 mb-10">
              <p className="font-cinzel text-gold/60 text-xs mb-3 tracking-widest">
                แหล่งอ้างอิงและเครดิตภาพ
              </p>
              <ul className="font-pridi text-ink/60 text-xs space-y-1 leading-relaxed">
                {references.map((r, i) => (
                  <li key={i}>
                    [{i + 1}] {r}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* ปุ่ม */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {primaryUrl && (
              <a
                href={primaryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary font-pridi text-center"
              >
                {primaryLabel || "อ่านแหล่งอ้างอิง ↗"}
              </a>
            )}
            <Link
              href="/archive/prophetic-letters"
              className="btn-outline font-pridi text-center"
            >
              ← กลับสู่คลังจดหมาย
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
