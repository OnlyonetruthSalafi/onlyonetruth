"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";

/**
 * เทมเพลตหน้ารายละเอียดต้นฉบับ Biblical Codices
 * โครงสร้างเดียวกับหน้า septuagint/dead-sea-scrolls:
 * Hero → Gallery → Info Grid → Sections (ย่อหน้า/สองคอลัมน์) → กล่องข้อคิดเปรียบเทียบ → อ้างอิง → ปุ่ม
 */
export default function ManuscriptDetailPage({ data }) {
  const {
    title,
    subtitle,
    heroDesc,
    heroMeta,
    gallery,
    galleryNote,
    info,
    sections,
    note,
    references,
    primaryUrl,
    primaryLabel,
    backHref = "/archive/biblical-codices",
    backLabel = "Biblical Codices",
  } = data;

  return (
    <div className="bg-paper text-ink">
      <Navbar />

      {/* HERO */}
      <section className="relative py-20 bg-ink overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 font-pridi text-sm text-paper/50 mb-8 flex-wrap">
            <Link href="/" className="hover:text-gold transition-colors">
              Home
            </Link>
            <span className="text-gold/40">›</span>
            <Link href="/archive" className="hover:text-gold transition-colors">
              Archive
            </Link>
            <span className="text-gold/40">›</span>
            <Link href={backHref} className="hover:text-gold transition-colors">
              {backLabel}
            </Link>
            <span className="text-gold/40">›</span>
            <span className="text-gold">{title}</span>
          </nav>

          <div className="text-center">
            <h1 className="font-cinzel text-3xl md:text-5xl text-paper-white mb-3 leading-tight">
              {title}
            </h1>
            <h2 className="font-cinzel text-xl md:text-2xl text-gold mb-6">
              {subtitle}
            </h2>
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
      <section className="py-16 bg-paper overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-cinzel text-2xl text-ink text-center mb-4">
            ภาพต้นฉบับ
          </h2>
          <p className="font-pridi text-center text-ink-muted mb-10">
            {galleryNote}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {gallery.map((g) => (
              <div
                key={g.src}
                className="rounded-card overflow-hidden shadow-card border border-gold/20 w-full"
              >
                <Image
                  src={g.src}
                  alt={g.alt || `${title} Manuscript Page`}
                  width={g.width}
                  height={g.height}
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="w-full h-auto object-cover block"
                  style={{
                    mixBlendMode: "multiply",
                    backgroundColor: "transparent",
                    maxWidth: "100%",
                  }}
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                <div
                  style={{ display: "none" }}
                  className="h-48 items-center justify-center bg-paper-light"
                >
                  <p className="font-pridi text-ink-muted text-sm">
                    รอการอัปโหลดภาพ
                  </p>
                </div>
                <div className="p-4 bg-ink/5">
                  <p className="font-cinzel text-sm text-ink">{g.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INFO + CONTENT */}
      <section className="py-16 bg-paper-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Info Grid */}
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

          {/* Sections */}
          {sections.map((s) => (
            <div key={s.heading} className="mb-10">
              <h3 className="font-cinzel text-xl text-ink mb-4">{s.heading}</h3>

              {s.paragraphs && (
                <div className="space-y-4 mb-6">
                  {s.paragraphs.map((p, i) => (
                    <p
                      key={i}
                      className="font-pridi text-ink/80 leading-relaxed"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              )}

              {s.columns && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {s.columns.map((c) => (
                    <div key={c.title} className="card-glass p-6">
                      <h4 className="font-cinzel text-gold text-sm font-semibold mb-3 tracking-wide">
                        {c.title}
                      </h4>
                      <ul className="font-pridi text-ink/80 text-sm space-y-2 leading-relaxed">
                        {c.items.map((it, i) => (
                          <li key={i}>• {it}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* ข้อคิดเปรียบเทียบ */}
          {note && (
            <div className="mb-10">
              <h3 className="font-cinzel text-xl text-ink mb-4">
                ข้อคิดเปรียบเทียบ
              </h3>
              <div className="border-l-4 border-gold bg-[#3E2723] p-5 rounded-card">
                <p className="font-cinzel text-gold text-sm font-semibold mb-2">
                  ** ข้อสังเกตเชิงเปรียบเทียบ
                </p>
                <p className="font-pridi text-paper-white leading-relaxed">
                  {note}
                </p>
              </div>
            </div>
          )}

          {/* แหล่งอ้างอิง */}
          <div className="border-t border-gold/20 pt-6 mb-10">
            <p className="font-cinzel text-gold/60 text-xs mb-3 tracking-widest">
              แหล่งอ้างอิง
            </p>
            <ul className="font-pridi text-ink/60 text-xs space-y-1 leading-relaxed">
              {references.map((r, i) => (
                <li key={i}>
                  [{i + 1}] {r}
                </li>
              ))}
            </ul>
          </div>

          {/* ปุ่ม */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={primaryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary font-pridi text-center"
            >
              {primaryLabel || "สำรวจต้นฉบับดิจิทัล ↗"}
            </a>
            <Link href={backHref} className="btn-outline font-pridi text-center">
              ← กลับสู่คลัง {backLabel}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
