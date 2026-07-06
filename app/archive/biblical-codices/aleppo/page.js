"use client";

import Link from "next/link";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";

export default function AleppoManuscript() {
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
            <span className="text-gold">Aleppo Codex</span>
          </nav>

          <div className="text-center">
            <h1 className="font-cinzel text-3xl md:text-5xl text-paper-white mb-3 leading-tight">
              Aleppo Codex (Keter Aram Tzova)
            </h1>
            <h2 className="font-cinzel text-xl md:text-2xl text-gold mb-6">
              The Crown of the Hebrew Bible
            </h2>
            <div className="mx-auto h-px w-24 bg-gold/50 mb-6" />
            <p className="font-pridi text-lg text-paper-white/80 max-w-2xl mx-auto leading-relaxed mb-4">
              ต้นฉบับ Masoretic Text ที่เก่าแก่และสมบูรณ์ที่สุด มงกุฎแห่งพระคัมภีร์ฮีบรู
            </p>
            <p className="font-cinzel text-gold/70 text-sm tracking-widest">
              ราว ค.ศ. 920 | Hebrew Masoretic | Israel Museum, Jerusalem
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
            ภาพหน้าต้นฉบับจาก Aleppo Codex พิพิธภัณฑ์อิสราเอล กรุงเยรูซาเล็ม
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* alp1 */}
            <div className="rounded-card overflow-hidden shadow-card border border-gold/20 w-full">
              <img
                src="/manuscripts/bible/aleppo/alp1.jpg"
                alt="Aleppo Codex Hebrew Manuscript Page"
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
                  รอการอัปโหลดภาพ alp1.jpg
                </p>
              </div>
              <div className="p-4 bg-ink/5">
                <p className="font-cinzel text-sm text-ink">
                  หน้าต้นฉบับ Aleppo Codex — อักษรฮีบรู
                </p>
              </div>
            </div>

            {/* alp2 */}
            <div className="rounded-card overflow-hidden shadow-card border border-gold/20 w-full">
              <img
                src="/manuscripts/bible/aleppo/alp2.jpg"
                alt="Aleppo Codex Masoretic Notation Detail"
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
                  รอการอัปโหลดภาพ alp2.jpg
                </p>
              </div>
              <div className="p-4 bg-ink/5">
                <p className="font-cinzel text-sm text-ink">
                  เครื่องหมาย Masoretic และการตกแต่ง
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
              { label: "อายุต้นฉบับ", value: "ราว ค.ศ. 920 (ยุคทองของ Masoretes)" },
              { label: "รูปแบบอักษร", value: "Hebrew Square Script พร้อม Masoretic notation" },
              { label: "จำนวนหน้า", value: "ประมาณ 294 หน้าที่หลงเหลือ (สูญหายราว 40% จากจลาจลปี 1947)" },
              { label: "ขนาด", value: "ไม่ทราบแน่ชัด (ส่วนที่เหลือ)" },
              { label: "สถานที่เก็บรักษา", value: "Shrine of the Book, Israel Museum, Jerusalem" },
              { label: "ผู้เขียน", value: "Aaron ben Moses ben Asher นักวิชาการ Masorete" },
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
                Aleppo Codex หรือ &quot;Keter Aram Tzova&quot; (มงกุฎแห่งอาราม ทโซวา)
                เป็นต้นฉบับ Masoretic Text ที่เก่าแก่ที่สุดของพระคัมภีร์ฮีบรู
                เขียนโดย Aaron ben Moses ben Asher ราวปี ค.ศ. 920
                Maimonides นักปราชญ์ชาวยิวผู้ยิ่งใหญ่กล่าวถึงและรับรองความถูกต้อง
              </p>
              <p className="font-pridi text-ink/80 leading-relaxed">
                Emanuel Tov ระบุในหนังสือ Textual Criticism of the Hebrew Bible (2012)
                ว่าเป็นต้นฉบับ Hebrew Bible ที่สำคัญที่สุด
              </p>
              <p className="font-pridi text-ink/80 leading-relaxed">
                น่าเศร้าที่ราว 40% สูญหายในจลาจลที่เมืองอาเลปโปปี ค.ศ. 1947
                รวมถึงโตราห์ทั้งหมดและส่วนอื่นๆ
              </p>
            </div>
          </div>

          {/* ปุ่ม */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.aleppocodex.org"
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
