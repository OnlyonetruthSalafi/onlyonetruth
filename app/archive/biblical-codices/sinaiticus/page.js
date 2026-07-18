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
                  มัทธิว 6:4–32 — อักษร Greek Uncial 4 คอลัมน์
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
                  มัทธิว 1:1–2:5 — หน้าแรกพันธสัญญาใหม่
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

          {/* ธรรมาจารย์และผู้แก้ไข */}
          <div className="mb-10">
            <h3 className="font-cinzel text-xl text-ink mb-4">
              ธรรมาจารย์และผู้แก้ไข — ห้องคัดลอกศตวรรษที่ 4
            </h3>
            <div className="space-y-4">
              <p className="font-pridi text-ink/80 leading-relaxed">
                การศึกษาคลาสสิกของ H.J.M. Milne และ T.C. Skeat แห่ง British Museum
                (Scribes and Correctors of the Codex Sinaiticus, 1938)
                จำแนกธรรมาจารย์ผู้คัดลอกได้ 3 คน เรียกว่า Scribe A, B และ D
                — Scribe A คัดลอกพันธสัญญาใหม่เกือบทั้งหมด ส่วน Scribe D
                เป็นมือที่ประณีตที่สุดและช่วยแก้งานของคนอื่น
                การสะกดผิดจำนวนมากของ Scribe B ทำให้นักวิชาการเห็นภาพว่า
                ห้องคัดลอกแห่งหนึ่งมีช่างฝีมือหลายระดับทำงานร่วมกัน
              </p>
              <p className="font-pridi text-ink/80 leading-relaxed">
                หลังคัดลอกเสร็จ ต้นฉบับถูกแก้ไขต่อเนื่องหลายศตวรรษ
                โดยกลุ่มผู้แก้ไข (correctors) ที่สำคัญที่สุดคือกลุ่ม
                ราวศตวรรษที่ 5-7 (เรียกรวมว่า C-group)
                ซึ่งบันทึกท้ายเอสเธอร์ระบุว่าเทียบกับต้นฉบับโบราณที่
                Pamphilus แห่ง Caesarea ตรวจชำระไว้
                รวมการแก้ไขทุกยุคแล้ว Tischendorf นับได้ราว 23,000 จุด
                ทำให้ Sinaiticus เป็นต้นฉบับที่ถูกแก้ไขมากที่สุดเล่มหนึ่งที่รู้จัก
              </p>
              <p className="font-pridi text-ink/80 leading-relaxed">
                ปี ค.ศ. 2009 โครงการ Codex Sinaiticus Project
                รวมภาพถ่ายดิจิทัลของทุกหน้าจากทั้ง 4 สถาบันที่แยกเก็บต้นฉบับ
                (ลอนดอน ไลพ์ซิก ไซนาย เซนต์ปีเตอร์สเบิร์ก)
                ไว้ที่ codexsinaiticus.org พร้อมคำถอดความทุกบรรทัดและบันทึกการแก้ไขทุกจุด
                นับเป็นการรวมต้นฉบับกลับเป็นเล่มเดียวครั้งแรกในรอบ 150 ปี — ในรูปแบบดิจิทัล
              </p>
            </div>
          </div>

          {/* ข้อความที่น่าสังเกต */}
          <div className="mb-10">
            <h3 className="font-cinzel text-xl text-ink mb-4">ข้อความที่น่าสังเกต</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card-glass p-6">
                <h4 className="font-cinzel text-gold text-sm font-semibold mb-3 tracking-wide">
                  ข้อความที่ไม่มีใน Sinaiticus
                </h4>
                <ul className="font-pridi text-ink/80 text-sm space-y-2 leading-relaxed">
                  <li>• ตอนจบยาวของมาระโก (16:9-20) — มาระโกจบที่ 16:8</li>
                  <li>• เรื่องหญิงล่วงประเวณี (ยอห์น 7:53-8:11)</li>
                  <li>• คำอธิษฐาน &quot;พระบิดาเจ้าข้า ขอโปรดอภัยโทษเขา&quot; (ลูกา 23:34) — ถูกมือแรกละไว้ก่อนผู้แก้ไขเติมกลับ</li>
                  <li>• ยอห์น 5:4 (ทูตสวรรค์กวนน้ำ)</li>
                </ul>
              </div>
              <div className="card-glass p-6">
                <h4 className="font-cinzel text-gold text-sm font-semibold mb-3 tracking-wide">
                  สิ่งที่มีเกินพระคัมภีร์ปัจจุบัน
                </h4>
                <ul className="font-pridi text-ink/80 text-sm space-y-2 leading-relaxed">
                  <li>• Epistle of Barnabas — จดหมายยุค Apostolic Fathers</li>
                  <li>• Shepherd of Hermas — วรรณกรรมนิมิตยุคต้นศตวรรษที่ 2</li>
                  <li>
                    • ทั้งสองเล่มถูกเย็บรวมต่อท้ายวิวรณ์
                    แสดงว่าขอบเขตสารบบยังไม่ตายตัวในศตวรรษที่ 4
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* แหล่งอ้างอิง */}
          <div className="border-t border-gold/20 pt-6 mb-10">
            <p className="font-cinzel text-gold/60 text-xs mb-3 tracking-widest">
              แหล่งอ้างอิง
            </p>
            <ul className="font-pridi text-ink/60 text-xs space-y-1 leading-relaxed">
              <li>
                [1] H.J.M. Milne &amp; T.C. Skeat, <em>Scribes and Correctors of the Codex Sinaiticus</em>, British Museum, 1938
              </li>
              <li>
                [2] D.C. Parker, <em>Codex Sinaiticus: The Story of the World&apos;s Oldest Bible</em>, British Library, 2010
              </li>
              <li>
                [3] B.M. Metzger &amp; B.D. Ehrman, <em>The Text of the New Testament</em>, 4th ed., Oxford University Press, 2005, pp. 62-67
              </li>
              <li>[4] Codex Sinaiticus Project, codexsinaiticus.org</li>
            </ul>
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
