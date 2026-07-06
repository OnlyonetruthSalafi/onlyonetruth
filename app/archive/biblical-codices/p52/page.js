"use client";

import Link from "next/link";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";

export default function P52Manuscript() {
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
            <span className="text-gold">Papyrus P52</span>
          </nav>

          <div className="text-center">
            <h1 className="font-cinzel text-3xl md:text-5xl text-paper-white mb-3 leading-tight">
              Papyrus P52 (John Rylands Papyrus)
            </h1>
            <h2 className="font-cinzel text-xl md:text-2xl text-gold mb-6">
              The Oldest Known New Testament Fragment
            </h2>
            <div className="mx-auto h-px w-24 bg-gold/50 mb-6" />
            <p className="font-pridi text-lg text-paper-white/80 max-w-2xl mx-auto leading-relaxed mb-4">
              ชิ้นส่วนพระคัมภีร์คริสเตียนที่เก่าแก่ที่สุดที่รู้จัก เป็นส่วนหนึ่งของพระกิตติคุณยอห์น
            </p>
            <p className="font-cinzel text-gold/70 text-sm tracking-widest">
              ราว ค.ศ. 117-150 | Greek Papyrus | John Rylands Library, Manchester
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
            ภาพชิ้นส่วนปาปิรัส P52 ห้องสมุดยอห์น ไรแลนด์ส แมนเชสเตอร์
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* p52-1 */}
            <div className="rounded-card overflow-hidden shadow-card border border-gold/20 w-full">
              <img
                src="/manuscripts/bible/p52/p52-1.jpg"
                alt="Papyrus P52 Recto - John 18:31-33"
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
                  รอการอัปโหลดภาพ p52-1.jpg
                </p>
              </div>
              <div className="p-4 bg-ink/5">
                <p className="font-cinzel text-sm text-ink">
                  ด้านหน้า P52 — ยอห์น 18:31-33
                </p>
              </div>
            </div>

            {/* p52-2 */}
            <div className="rounded-card overflow-hidden shadow-card border border-gold/20 w-full">
              <img
                src="/manuscripts/bible/p52/p52-2.jpg"
                alt="Papyrus P52 Verso - John 18:37-38"
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
                  รอการอัปโหลดภาพ p52-2.jpg
                </p>
              </div>
              <div className="p-4 bg-ink/5">
                <p className="font-cinzel text-sm text-ink">
                  ด้านหลัง P52 — ยอห์น 18:37-38
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
              { label: "อายุต้นฉบับ", value: "ราว ค.ศ. 117-150 (Carbon-14 และ Palaeography)" },
              { label: "รูปแบบอักษร", value: "Greek (Koine) บนปาปิรัส" },
              { label: "ขนาด", value: "8.9 × 6 เซนติเมตร (ชิ้นส่วนเล็กมาก)" },
              { label: "เนื้อหา", value: "ยอห์น 18:31-33 (ด้านหน้า) และ 18:37-38 (ด้านหลัง)" },
              { label: "สถานที่เก็บรักษา", value: "John Rylands Library, Manchester, UK" },
              { label: "การค้นพบ", value: "Bernard Grenfell ปี ค.ศ. 1920 ในอียิปต์" },
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
                P52 เป็นชิ้นส่วนพระคัมภีร์คริสเตียนที่เก่าแก่ที่สุดที่รู้จัก
                แม้จะมีขนาดเล็กเพียง 8.9 × 6 เซนติเมตร แต่มีความสำคัญอย่างยิ่ง
                เพราะพิสูจน์ว่าพระกิตติคุณยอห์นมีอยู่แล้วในช่วงต้นศตวรรษที่ 2
              </p>
              <p className="font-pridi text-ink/80 leading-relaxed">
                Daniel Wallace ระบุว่า P52 เป็นหลักฐานสำคัญที่โต้แย้งทฤษฎีที่ว่า
                พระกิตติคุณยอห์นแต่งขึ้นในศตวรรษที่ 2 ตอนปลาย
              </p>
              <p className="font-pridi text-ink/80 leading-relaxed">
                อย่างไรก็ตาม ช่องว่างระหว่างเหตุการณ์จริง (ราว ค.ศ. 30)
                กับต้นฉบับที่เก่าแก่ที่สุด (ราว ค.ศ. 117-150) ยังคงมีนัยสำคัญ
              </p>
            </div>
          </div>

          {/* ปุ่ม */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.library.manchester.ac.uk/rylands/"
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
