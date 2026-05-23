"use client";

import Link from "next/link";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";

export default function KhaliliManuscript() {
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
              href="/archive/quran-manuscripts"
              className="hover:text-gold transition-colors"
            >
              Qur'anic Manuscripts
            </Link>
            <span className="text-gold/40">›</span>
            <span className="text-gold">Khalili Collection</span>
          </nav>

          <div className="text-center">
            <h1 className="font-cinzel text-3xl md:text-5xl text-paper-white mb-3 leading-tight">
              Codex Parisino-Petropolitanus
            </h1>
            <h2 className="font-cinzel text-xl md:text-2xl text-gold mb-6">
              Khalili Collection (KFQ60) & Arabe 328a
            </h2>
            <div className="mx-auto h-px w-24 bg-gold/50 mb-6" />
            <p className="font-pridi text-lg text-paper-white/80 max-w-2xl mx-auto leading-relaxed mb-4">
              ต้นฉบับอัลกุรอานยุคแรกที่กระจายอยู่ใน 5 สถาบันทั่วโลก
              รวมถึงคอลเลกชัน Khalili ที่ลอนดอน
            </p>
            <p className="font-cinzel text-gold/70 text-sm tracking-widest">
              ครึ่งหลังของศตวรรษที่ 1 ฮ.ศ. | Hijazi Script | 98 Folios
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
            ภาพหน้าต้นฉบับจาก Codex Parisino-Petropolitanus
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* kha1 */}
            <div className="rounded-card overflow-hidden shadow-card border border-gold/20">
              <img
                src="/manuscripts/quran/khalili-quran/kha1.jpg"
                alt="Khalili Collection KFQ60 recto"
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
                  รอการอัปโหลดภาพ kha1.jpg
                </p>
              </div>
              <div className="p-4 bg-ink/5">
                <p className="font-cinzel text-sm text-ink">
                  KFQ60 (recto) — Khalili Collection, London
                </p>
              </div>
            </div>

            {/* kha2 */}
            <div className="rounded-card overflow-hidden shadow-card border border-gold/20">
              <img
                src="/manuscripts/quran/khalili-quran/kha2.jpg"
                alt="Arabe 328a folio 10r Paris"
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
                  รอการอัปโหลดภาพ kha2.jpg
                </p>
              </div>
              <div className="p-4 bg-ink/5">
                <p className="font-cinzel text-sm text-ink">
                  Arabe 328a, f. 10r — Bibliothèque Nationale, Paris
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INFO + HISTORY + SCRIPT */}
      <section className="py-16 bg-paper-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              { label: "อายุต้นฉบับ", value: "ครึ่งหลังของศตวรรษที่ 1 ฮ.ศ. / ศตวรรษที่ 7 ค.ศ. ตามการศึกษาของ Déroche" },
              { label: "รูปแบบอักษร", value: "Hijazi Script — หมึกน้ำตาลดำ เส้นบางเรียวเน้นแนวตั้ง เขียนโดยผู้คัดลอก 5 คน" },
              { label: "จำนวนหน้า", value: "98 หน้าที่หลงเหลือ จากต้นฉบับเดิมราว 210-220 หน้า ครอบคลุม ~46% ของอัลกุรอาน" },
              { label: "ขนาด", value: "33 × 24 เซนติเมตร บรรทัด 22-26 บรรทัดต่อหน้า มีรอยบรรทัดนำให้เห็น" },
              { label: "สถานที่เก็บรักษา 5 แห่ง", value: "Bibliothèque Nationale ปารีส | National Library of Russia เซนต์ปีเตอร์สเบิร์ก | Khalili Collection ลอนดอน | Biblioteca Apostolica Vaticana วาติกัน" },
              { label: "หมายเลขทะเบียน", value: "Arabe 328a+b (ปารีส) · Marcel 18/1 (รัสเซีย) · KFQ60 (ลอนดอน) · Vaticani Arabi 1605 (วาติกัน)" },
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
                ต้นฉบับนี้เดิมเก็บรักษาอยู่ที่มัสยิด อัมร์ บิน อัลอาศ ที่เมืองฟุสตาฏ ประเทศอียิปต์
                จนกระทั่งปลายศตวรรษที่ 18 ฌอง-โฌเซฟ มาร์แซล สมาชิกคณะสำรวจฝรั่งเศสในอียิปต์
                ได้นำหน้าบางส่วนออกมา ซึ่งต่อมาในปี ค.ศ. 1864 กลายเป็นส่วนหนึ่ง
                ของ National Library of Russia ที่เซนต์ปีเตอร์สเบิร์ก
              </p>
              <p className="font-pridi text-ink/80 leading-relaxed">
                ไม่กี่ปีต่อมา ฌอง-หลุยส์ อัสเซลิน เดอ แชร์วิลล์ กงสุลฝรั่งเศสในไคโร
                (ค.ศ. 1806–1822) ได้ซื้อหน้าจำนวนมากกว่า
                ซึ่งถูกโอนให้แก่ Bibliothèque Nationale ปารีส ในปี ค.ศ. 1833
                กลายเป็นส่วนหนึ่งของคอลเลกชัน Arabe 328
              </p>
              <p className="font-pridi text-ink/80 leading-relaxed">
                นักวิชาการ Yasin Dutton ได้ศึกษาข้อความพยัญชนะของ Arabe 328a
                และเสนอว่าต้นฉบับนี้เขียนตาม qira'at (การอ่าน) ของ อิบน์ อามิร ชาวซีเรีย
                จึงเป็นไปได้ว่าต้นฉบับนี้ถูกเขียนขึ้นในซีเรีย ก่อนที่จะถูกนำมาเก็บที่อียิปต์
              </p>
            </div>
          </div>

          {/* รูปแบบอักษรและตกแต่ง */}
          <div className="mb-10">
            <h3 className="font-cinzel text-xl text-ink mb-4">รูปแบบอักษรและการตกแต่ง</h3>
            <div className="space-y-4">
              <p className="font-pridi text-ink/80 leading-relaxed">
                ต้นฉบับมีรูปแบบแนวตั้ง อักษรมีลักษณะบางเรียวและเน้นแนวตั้งเป็นพิเศษ
                แม้จะมีการเอียงไปทางขวาเล็กน้อย ข้อความเขียนด้วยหมึกสีน้ำตาลดำ
                มีเครื่องหมายแยกแยะตัวอักษรเป็นบางครั้ง และไม่มีเครื่องหมายสระ
              </p>
              <p className="font-pridi text-ink/80 leading-relaxed">
                การสิ้นสุดอายะห์บ่งบอกด้วยจุดรูปไข่ 6 จุดเรียงเป็น 3 คู่
                ทุกอายะห์ที่ 5 ถูกระบุด้วยอักษร alif สีแดงล้อมรอบด้วยจุด
                ซูเราะฮ์แต่ละบทแบ่งด้วยการเว้นระยะว่าง
                ที่น่าสังเกตคือต้นฉบับนี้เขียนโดยผู้คัดลอก 5 คน
                ซึ่งแต่ละคนมีลักษณะลายมือเป็นเอกลักษณ์ของตนเอง
              </p>
            </div>
          </div>

          {/* ตาราง Contents */}
          <div className="mb-10">
            <h3 className="font-cinzel text-xl text-ink mb-4">
              เนื้อหาต้นฉบับ (ตัวอย่างบางหน้า)
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full font-pridi text-sm border-collapse">
                <thead>
                  <tr className="bg-ink text-paper">
                    <th className="p-3 text-left font-cinzel">Folio</th>
                    <th className="p-3 text-left font-cinzel">ซูเราะฮ์</th>
                    <th className="p-3 text-left font-cinzel">แหล่งที่เก็บ</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["1r", "อัลบะกอเราะฮ์: 275-281", "Arabe 328a, ปารีส"],
                    ["10r", "อันนิสาอ์: 3-9", "Arabe 328a, ปารีส"],
                    ["25r", "อัลอันอาม: 68-76", "Arabe 328a, ปารีส"],
                    ["29r", "อัลอันอาม: 148-154", "Arabe 328a, ปารีส"],
                    ["KFQ60 recto", "(ซูเราะฮ์ในอัลกุรอาน)", "Khalili Collection, ลอนดอน"],
                    ["Vaticani 1605, 1v", "(ซูเราะฮ์ในอัลกุรอาน)", "Vatican City"],
                  ].map(([folio, surah, location]) => (
                    <tr
                      key={folio}
                      className="border-b border-gold/10 hover:bg-gold/5"
                    >
                      <td className="p-3 font-cinzel text-gold">{folio}</td>
                      <td className="p-3">{surah}</td>
                      <td className="p-3 text-ink-muted">{location}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="font-pridi text-xs text-ink-muted mt-2">
              * แสดงเฉพาะบางส่วน ดูตารางฉบับเต็มได้ที่แหล่งต้นฉบับ
            </p>
          </div>

          {/* หมายเหตุพิเศษ */}
          <div className="card-glass p-6 border-l-4 border-gold/40 mb-8">
            <p className="font-cinzel text-gold text-sm mb-3 tracking-widest">⚠ หมายเหตุสำคัญ</p>
            <p className="font-pridi text-ink/80 leading-relaxed">
              <strong>ปล.</strong> หน้าในเว็บไซต์นี้อ้างอิงภายใต้ชื่อ "Khalili Collection"
              เพื่อให้ตรงกับการจัดหมวดหมู่ในคลัง Manuscripts ของเรา
              แต่ในทางวิชาการ ต้นฉบับที่ถูกต้องคือ{" "}
              <strong className="text-gold"> Codex Parisino-Petropolitanus</strong>
              {" "}ซึ่งเป็นต้นฉบับขนาดใหญ่ที่กระจายอยู่ใน 5 สถาบันทั่วโลก
              โดย KFQ60 ของ Khalili Collection ในลอนดอน
              เป็นเพียง <strong className="text-gold">1 ใน 98 หน้า</strong>
              {" "}ของ Codex เดียวกันนี้
              ผู้สนใจศึกษาเพิ่มเติมสามารถอ่านบทความต้นฉบับได้จากลิงก์ด้านล่าง
            </p>
          </div>

          {/* หมายเหตุสำคัญ */}
          <div
            className="mt-6 card-glass border-l-4 border-gold p-5"
            style={{ background: "linear-gradient(135deg, rgba(197,160,89,0.08) 0%, rgba(62,39,35,0.3) 100%)" }}
          >
            <p className="font-cinzel text-gold text-sm font-semibold mb-2 tracking-wide">
              ** หมายเหตุสำคัญ
            </p>
            <p className="font-pridi text-paper-white/90 leading-relaxed">
              ความแตกต่างหรือข้อสังเกตใดๆ ที่พบในต้นฉบับนี้
              <strong className="text-gold"> ไม่ส่งผลให้อัลกุรอานถูกบิดเบือนแต่อย่างใด</strong>
              เนื่องจากอัลกุรอานไม่ได้พึ่งพาการบันทึกเป็นลายลักษณ์อักษรเพียงอย่างเดียว
              แต่ถูกท่องจำ<strong className="text-gold"> ทุกอักษร ทุกคำ</strong>
              โดยบรรดาฮาฟิซ (ผู้ท่องจำอัลกุรอาน) อย่างต่อเนื่องในทุกยุคทุกสมัย
              นับตั้งแต่สมัยท่านนบีมุฮัมมัด (ซ.ล.) จวบจนปัจจุบัน
              การท่องจำแบบปากต่อปากในระดับ Mutawātir
              (ถ่ายทอดโดยคนจำนวนมากจนเป็นไปไม่ได้ที่จะมีการสมคบกันเปลี่ยนแปลง)
              คือหลักประกันสูงสุดของความถูกต้องของอัลกุรอาน
              ตามที่อัลลอฮ์ทรงสัญญาไว้ในอัลกุรอาน สูเราะฮ์ อัลฮิจร์ 15:9
              <span className="block mt-3 font-cinzel text-gold/70 text-xs tracking-widest">
                "แท้จริง เราได้ประทานอัล-ซิกร์ลงมา และแท้จริง เราเป็นผู้พิทักษ์รักษามันไว้"
              </span>
            </p>
          </div>

          {/* ปุ่ม */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.islamic-awareness.org/quran/text/mss/arabe328a"
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
