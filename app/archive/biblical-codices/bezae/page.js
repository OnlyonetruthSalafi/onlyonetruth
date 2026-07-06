"use client";

import Link from "next/link";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";

export default function BezaeManuscript() {
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
            <Link
              href="/archive/biblical-codices"
              className="hover:text-gold transition-colors"
            >
              Biblical Codices
            </Link>
            <span className="text-gold/40">›</span>
            <span className="text-gold">Codex Bezae</span>
          </nav>

          <div className="text-center">
            <h1 className="font-cinzel text-3xl md:text-5xl text-paper-white mb-3 leading-tight">
              Codex Bezae (D/05)
            </h1>
            <h2 className="font-cinzel text-xl md:text-2xl text-gold mb-6">
              The Bilingual Greek-Latin Manuscript with Notable Variants
            </h2>
            <div className="mx-auto h-px w-24 bg-gold/50 mb-6" />
            <p className="font-pridi text-lg text-paper-white/80 max-w-2xl mx-auto leading-relaxed mb-4">
              ต้นฉบับ 2 ภาษา กรีก-ละติน มีข้อความที่แตกต่างจากฉบับมาตรฐานหลายจุด เก็บที่เคมบริดจ์
            </p>
            <p className="font-cinzel text-gold/70 text-sm tracking-widest">
              ศตวรรษที่ 4-5 ค.ศ. | Greek &amp; Latin Bilingual | Cambridge University Library
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
            ภาพหน้าต้นฉบับจาก Codex Bezae ห้องสมุดมหาวิทยาลัยเคมบริดจ์
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* bez1 */}
            <div className="rounded-card overflow-hidden shadow-card border border-gold/20 w-full">
              <img
                src="/manuscripts/bible/bezae/bez1.jpg"
                alt="Codex Bezae Greek-Latin Bilingual Page"
                className="w-full h-auto object-cover block"
                style={{ mixBlendMode: "multiply", backgroundColor: "transparent", maxWidth: '100%' }}
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
                  รอการอัปโหลดภาพ bez1.jpg
                </p>
              </div>
              <div className="p-4 bg-ink/5">
                <p className="font-cinzel text-sm text-ink">
                  หน้าต้นฉบับ Codex Bezae — ภาษากรีก (ซ้าย) ละติน (ขวา)
                </p>
              </div>
            </div>

            {/* bez2 */}
            <div className="rounded-card overflow-hidden shadow-card border border-gold/20 w-full">
              <img
                src="/manuscripts/bible/bezae/bez2.jpg"
                alt="Codex Bezae Textual Variants Page"
                className="w-full h-auto object-cover block"
                style={{ mixBlendMode: "multiply", backgroundColor: "transparent", maxWidth: '100%' }}
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
                  รอการอัปโหลดภาพ bez2.jpg
                </p>
              </div>
              <div className="p-4 bg-ink/5">
                <p className="font-cinzel text-sm text-ink">
                  หน้าที่มี Textual Variants สำคัญ
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INFO + CONTENT */}
      <section className="py-16 bg-paper-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              { label: "อายุต้นฉบับ", value: "ศตวรรษที่ 4-5 ค.ศ." },
              { label: "รูปแบบอักษร", value: "Greek Uncial (ซ้าย) + Latin Uncial (ขวา)" },
              { label: "จำนวนหน้า", value: "415 หน้า (ครอบคลุมพระกิตติคุณและกิจการ)" },
              { label: "ขนาด", value: "26 × 21.5 เซนติเมตร" },
              { label: "สถานที่เก็บรักษา", value: "Cambridge University Library, UK" },
              { label: "ที่มาของชื่อ", value: "ตามชื่อ Theodore Beza นักเทววิทยาผู้บริจาคให้เคมบริดจ์ปี 1581" },
            ].map((item) => (
              <div key={item.label} className="card-glass p-5">
                <p className="font-cinzel text-gold text-sm mb-1">{item.label}</p>
                <p className="font-pridi text-ink">{item.value}</p>
              </div>
            ))}
          </div>

          {/* ประวัติ */}
          <div className="mb-10">
            <h3 className="font-cinzel text-xl text-ink mb-4">ประวัติของต้นฉบับ</h3>
            <div className="space-y-4">
              <p className="font-pridi text-ink/80 leading-relaxed">
                Codex Bezae มีชื่อเสียงเพราะมีข้อความที่แตกต่างจากฉบับมาตรฐานหลายจุด
                ที่สำคัญที่สุดคือเรื่องราวของหญิงที่ถูกจับได้ว่าล่วงประเวณี (John 7:53-8:11)
              </p>
              <p className="font-pridi text-ink/80 leading-relaxed">
                Bruce Metzger ระบุในหนังสือ A Textual Commentary on the Greek New Testament (1994)
                ว่าส่วนนี้เป็น &quot;addition to the text&quot; ที่เพิ่มเข้ามาในภายหลัง
              </p>
              <p className="font-pridi text-ink/80 leading-relaxed">
                Codex Bezae ยังมีข้อความเพิ่มเติมในกิจการหลายจุดที่ไม่พบในต้นฉบับอื่น
                ทำให้นักวิชาการถือว่าเป็นพยานหลักฐานของ &quot;Western Text-type&quot;
              </p>
            </div>
          </div>

          {/* ปุ่ม */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.lib.cam.ac.uk/collections/departments/manuscripts-university-archives/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary font-pridi text-center"
            >
              อ่านบทความต้นฉบับ ↗
            </a>
            <Link
              href="/archive/biblical-codices"
              className="btn-outline font-pridi text-center"
            >
              ← กลับสู่คลัง Biblical Codices
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
