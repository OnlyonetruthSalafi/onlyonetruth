"use client";

import Link from "next/link";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";

export default function SanaaManuscript() {
  return (
    <div className="bg-paper text-ink">
      <Navbar />

      {/* HERO */}
      <section className="relative py-20 bg-ink overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 font-pridi text-sm text-paper/50 mb-8 flex-wrap">
            <Link href="/" className="hover:text-gold transition-colors">
              Home
            </Link>
            <span className="text-gold/40">›</span>
            <Link
              href="/archive/quran-manuscripts"
              className="hover:text-gold transition-colors"
            >
              Qur'anic Manuscripts
            </Link>
            <span className="text-gold/40">›</span>
            <span className="text-gold">Ṣanʿāʾ Manuscript</span>
          </nav>

          <div className="text-center">
            <h1 className="font-cinzel text-3xl md:text-5xl text-paper mb-3 leading-tight">
              The "Qur'ān Of ʿAlī b. Abī Ṭālib"
            </h1>
            <h2 className="font-cinzel text-xl md:text-2xl text-gold mb-6">
              (The Ṣanʿāʾ Muṣḥaf)
            </h2>
            <div className="mx-auto h-px w-24 bg-gold/50 mb-6" />
            <p className="font-pridi text-lg text-paper/80 max-w-2xl mx-auto leading-relaxed mb-4">
              ต้นฉบับที่นิยมเรียกว่า "กุรอานของอาลี บิน อาบีฏอลิบ" — ซานาอา เยเมน
            </p>
            <p className="font-cinzel text-gold/70 text-sm tracking-widest">
              ศตวรรษที่ 1–2 ฮ.ศ. | Kufic Script | 275 Folios
            </p>
          </div>
        </div>
      </section>

      {/* IMAGE GALLERY */}
      <section className="py-16 bg-paper">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-cinzel text-2xl text-ink text-center mb-4">
            ภาพต้นฉบับ
          </h2>
          <p className="font-pridi text-center text-ink-muted mb-10">
            ภาพหน้าต้นฉบับจากมัสยิดญามิอัลกะบีร ซานาอา เยเมน
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* รูป sana1 */}
            <div className="rounded-card overflow-hidden shadow-card border border-gold/20">
              <img
                src="/manuscripts/quran/sana/sana1.jpg"
                alt="Sanaa Quran Manuscript folio 1"
                className="w-full object-cover"
                style={{ mixBlendMode: "multiply", backgroundColor: "transparent" }}
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
                  รอการอัปโหลดภาพ sana1.jpg
                </p>
              </div>
              <div className="p-4 bg-ink/5">
                <p className="font-cinzel text-sm text-ink">Folio 91b</p>
                <p className="font-pridi text-xs text-ink-muted">
                  อักษรคูฟิก บนหนังสัตว์
                </p>
              </div>
            </div>

            {/* รูป sana2 */}
            <div className="rounded-card overflow-hidden shadow-card border border-gold/20">
              <img
                src="/manuscripts/quran/sana/sana2.jpg"
                alt="Sanaa Quran Manuscript folio 2"
                className="w-full object-cover"
                style={{ mixBlendMode: "multiply", backgroundColor: "transparent" }}
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
                  รอการอัปโหลดภาพ sana2.jpg
                </p>
              </div>
              <div className="p-4 bg-ink/5">
                <p className="font-cinzel text-sm text-ink">Folio 153a</p>
                <p className="font-pridi text-xs text-ink-muted">
                  วงกลมดอกไม้ระบุทุก 10 อายะห์
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ข้อมูลหลัก */}
      <section className="py-16 bg-paper-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              { label: "อายุต้นฉบับ", value: "ปลายศตวรรษที่ 1 — ต้นศตวรรษที่ 2 ฮ.ศ." },
              { label: "รูปแบบอักษร", value: "Kufic Script (แนวเอียงไปด้านหลัง สไตล์อุมัยยะห์)" },
              { label: "จำนวนหน้า", value: "275 หน้า ครอบคลุม 86% ของอัลกุรอาน" },
              { label: "ขนาด", value: "34 × 36 เซนติเมตร" },
              { label: "สถานที่เก็บรักษา", value: "ญามิอัลกะบีร ซานาอา เยเมน" },
              { label: "แหล่งตีพิมพ์", value: "Altikulaç, 2011 (Facsimile Edition)" },
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
            <div className="space-y-4 font-pridi text-ink/80 leading-relaxed">
              <p>
                ต้นฉบับนี้เป็นมุศฮัฟ 2 เล่มที่มีการกล่าวอ้างว่าเขียนโดยเคาะลีฟะฮ์คนที่ 4
                คือ อาลี บิน อาบีฏอลิบ แต่แท้จริงแล้ว ไม่ใช่ผลงานของท่าน
                เนื่องจากหลักฐานที่อ้างอิงมาจากข้อความที่ขอบปกของเล่มแรก
                ซึ่งระบุว่า "ครึ่งแรกของมุศฮัฟที่ถูกคัดลอกโดยบิดาของหลานทั้งสอง
                และเป็นของผู้พลีชีพทั้งสอง เดือนรอญับ 1395"
              </p>
              <p>
                นอกจากนี้ยังมีบันทึกของ อะหมัด บิน อะหมัด บิน มุฮัมมัด อัลญะรอฟี
                ซึ่งระบุว่าพบต้นฉบับนี้ครั้งแรกในปี 1317 ฮ.ศ. (ค.ศ. 1900)
                ที่มัสยิดอัลชะฮีดัยน์ขณะอายุ 10 ปี
                และเมื่อพบอีกครั้งหลัง 1322 ฮ.ศ. (ค.ศ. 1904) พบว่ามีบางหน้าสูญหายไป
              </p>
            </div>
          </div>

          {/* รูปแบบอักษรและตกแต่ง */}
          <div className="mb-10">
            <h3 className="font-cinzel text-xl text-ink mb-4">รูปแบบอักษรและการตกแต่ง</h3>
            <div className="space-y-4 font-pridi text-ink/80 leading-relaxed">
              <p>
                อักษรคูฟิกที่ใช้มีลักษณะเอียงไปด้านหลังเล็กน้อย
                คล้ายกับอักษรคูฟิกที่ประณีตในยุคอุมัยยะห์
                บางหน้าที่ถูกทำลายหรือสูญหายได้รับการเขียนทดแทนในภายหลัง
                ซึ่งสังเกตได้ชัดว่าเป็นลายมืออีกชุดหนึ่ง
              </p>
              <p>
                มีการใส่จุดสระในรูปจุดสีแดงตามวิธีของ อบูอัลอัสวัด อัดดุอะลี
                (เสียชีวิต 69 ฮ.ศ./688 ค.ศ.) โดยจุดเดียวด้านบน ข้าง หรือล่างตัวอักษร
                และสองจุดแสดง tanwīn (ตันวีน)
              </p>
              <p>
                การแบ่งระหว่างซูเราะฮ์ใช้แถบแนวนอนกว้างรูปสี่เหลี่ยม
                ตกแต่งด้วยลวดลายที่แตกต่างกันในแต่ละซูเราะฮ์
                มีวงกลมประดับขนาดใหญ่บ่งบอกทุก 10 อายะห์
                และสัญลักษณ์สี่เหลี่ยมประดับบ่งบอกทุก 100 อายะห์
                ลำดับของซูเราะฮ์ตรงกับอัลกุรอานที่ใช้อยู่ในปัจจุบัน
              </p>
            </div>
          </div>

          {/* ตาราง Contents */}
          <div className="mb-10">
            <h3 className="font-cinzel text-xl text-ink mb-4">
              เนื้อหาต้นฉบับ (บางส่วน)
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full font-pridi text-sm border-collapse">
                <thead>
                  <tr className="bg-ink text-paper">
                    <th className="p-3 text-left font-cinzel">หน้า (Folio)</th>
                    <th className="p-3 text-left font-cinzel">ซูเราะฮ์</th>
                    <th className="p-3 text-left font-cinzel">หมายเหตุ</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["1b", "อัลบะกอเราะฮ์: 144-146", "บางส่วนหายไป"],
                    ["4a–15a", "อัลบะกอเราะฮ์: 189-286", "-"],
                    ["15b–29b", "อาลอิมรอน", "บางส่วนของอายะห์ 60-64 หายไป"],
                    ["29b–44b", "อันนิสาอ์: 1-175", "บางส่วนหายไป"],
                    ["45a–55a", "อัลมาอิดะฮ์: 5-120", "-"],
                    ["255a–257b", "อัลฟัตหฺ", "-"],
                    ["274a–275a", "อัลหัชร์: 1-18", "หน้าสุดท้าย"],
                  ].map(([folio, surah, note]) => (
                    <tr
                      key={folio}
                      className="border-b border-gold/10 hover:bg-gold/5"
                    >
                      <td className="p-3 font-cinzel text-gold">{folio}</td>
                      <td className="p-3">{surah}</td>
                      <td className="p-3 text-ink-muted">{note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="font-pridi text-xs text-ink-muted mt-2">
              * แสดงเฉพาะบางส่วน ดูตารางฉบับเต็มได้ที่แหล่งต้นฉบับ
            </p>
          </div>

          {/* ปุ่ม */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.islamic-awareness.org/quran/text/mss/alisanaa"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary font-pridi text-center"
            >
              อ่านบทความต้นฉบับ (Islamic Awareness) ↗
            </a>
            <Link
              href="/archive/quran-manuscripts"
              className="btn-outline font-pridi text-center"
            >
              ← กลับสู่คลัง Manuscripts
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
