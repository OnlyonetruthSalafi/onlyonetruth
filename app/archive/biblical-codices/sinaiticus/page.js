"use client";

import Link from "next/link";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";

export default function SinaiticusManuscript() {
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
            <span className="text-gold">Codex Sinaiticus</span>
          </nav>

          <div className="text-center">
            <h1 className="font-cinzel text-3xl md:text-5xl text-paper-white mb-3 leading-tight">
              Codex Sinaiticus
            </h1>
            <h2 className="font-cinzel text-xl md:text-2xl text-gold mb-6">
              The Oldest Complete New Testament Manuscript
            </h2>
            <div className="mx-auto h-px w-24 bg-gold/50 mb-6" />
            <p className="font-pridi text-lg text-paper-white/80 max-w-2xl mx-auto leading-relaxed mb-4">
              ต้นฉบับพันธสัญญาใหม่ฉบับสมบูรณ์ที่เก่าแก่ที่สุดในโลก ค้นพบที่อาราม St. Catherine ไซนาย
            </p>
            <p className="font-cinzel text-gold/70 text-sm tracking-widest">
              ราว ค.ศ. 330-360 | Greek Uncial | British Library, London
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
            ภาพหน้าต้นฉบับจาก Codex Sinaiticus หอสมุดบริติช ลอนดอน
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* sin1 */}
            <div className="rounded-card overflow-hidden shadow-card border border-gold/20 w-full">
              <img
                src="/manuscripts/bible/sinaiticus/sin1.jpg"
                alt="Codex Sinaiticus Manuscript Page"
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
                  รอการอัปโหลดภาพ sin1.jpg
                </p>
              </div>
              <div className="p-4 bg-ink/5">
                <p className="font-cinzel text-sm text-ink">
                  หน้าต้นฉบับ Codex Sinaiticus — อักษร Greek Uncial
                </p>
              </div>
            </div>

            {/* sin2 */}
            <div className="rounded-card overflow-hidden shadow-card border border-gold/20 w-full">
              <img
                src="/manuscripts/bible/sinaiticus/sin2.jpg"
                alt="Codex Sinaiticus New Testament Page"
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
                  รอการอัปโหลดภาพ sin2.jpg
                </p>
              </div>
              <div className="p-4 bg-ink/5">
                <p className="font-cinzel text-sm text-ink">
                  หน้าพันธสัญญาใหม่จาก Codex Sinaiticus
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
              { label: "อายุต้นฉบับ", value: "ราว ค.ศ. 330-360 (สมัยจักรพรรดิคอนสแตนติน)" },
              { label: "รูปแบบอักษร", value: "Greek Uncial (Koine Greek) 4 คอลัมน์ต่อหน้า" },
              { label: "จำนวนหน้า", value: "346 หน้าที่หลงเหลือ (ครบพันธสัญญาใหม่ + พันธสัญญาเก่าบางส่วน)" },
              { label: "ขนาด", value: "38 × 34 เซนติเมตร" },
              { label: "สถานที่เก็บรักษา", value: "British Library London (347 หน้า) | Leipzig (43 หน้า) | St. Catherine's Monastery | Vatican" },
              { label: "การค้นพบ", value: "Constantin von Tischendorf ปี ค.ศ. 1844-1859" },
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
                Codex Sinaiticus เป็นต้นฉบับพันธสัญญาใหม่ฉบับสมบูรณ์ที่เก่าแก่ที่สุดในโลก
                ค้นพบโดย Constantin von Tischendorf ที่อาราม St. Catherine ไซนาย อียิปต์
                ในปี ค.ศ. 1844 และ 1859 ปัจจุบันแบ่งเก็บใน 4 สถาบัน
                Bruce Metzger ระบุในหนังสือ The Text of the New Testament (1964) ว่า
                Sinaiticus เป็นหนึ่งในพยานหลักฐานสำคัญที่สุดของข้อความพันธสัญญาใหม่
              </p>
              <p className="font-pridi text-ink/80 leading-relaxed">
                ต้นฉบับนี้รวมหนังสือ Shepherd of Hermas และ Epistle of Barnabas ไว้ด้วย
                ซึ่งทั้งสองเล่มไม่อยู่ในพระคัมภีร์มาตรฐานในปัจจุบัน
              </p>
              <p className="font-pridi text-ink/80 leading-relaxed">
                นักวิชาการพบว่า Sinaiticus มีความแตกต่างจาก Codex Vaticanus มากกว่า 3,000 จุด
                ในพันธสัญญาใหม่เพียงอย่างเดียว ซึ่งเป็นตัวอย่างชัดเจนของ Textual Variants
                ที่ Daniel Wallace ประมาณการรวมกันทั้งหมดกว่า 400,000 จุด
              </p>
            </div>
          </div>

          {/* ปุ่ม */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.codexsinaiticus.org"
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
