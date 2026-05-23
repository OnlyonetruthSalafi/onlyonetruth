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
                src="/manuscripts/quran/Sana/Sana1.jpg"
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
                src="/manuscripts/quran/Sana/sana2.jpg"
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

      {/* ประเด็น Palimpsest */}
      <section className="py-16 bg-ink">
        <div className="max-w-4xl mx-auto px-gutter">

          {/* หัวข้อหลัก */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-gold/30"></div>
            <h3 className="font-cinzel text-2xl text-gold text-center tracking-wide whitespace-nowrap">
              ประเด็น Palimpsest — การโต้แย้งและการตอบโต้
            </h3>
            <div className="flex-1 h-px bg-gold/30"></div>
          </div>

          {/* คำอธิบาย Palimpsest */}
          <div className="card-glass p-6 mb-8 border-l-4 border-gold/40">
            <h4 className="font-cinzel text-gold text-base font-semibold mb-3 tracking-wide">
              Palimpsest คืออะไร?
            </h4>
            <p className="font-pridi text-paper-white/80 leading-relaxed">
              Palimpsest คือต้นฉบับที่นำหนังสัตว์เก่ามาล้างหรือขูดข้อความเดิมออก
              แล้วเขียนข้อความใหม่ทับลงไป เนื่องจากวัสดุมีราคาแพง
              ต้นฉบับซานาอา (DAM 01-27.1) มีลักษณะเช่นนี้
              โดยมีข้อความ 2 ชั้น คือ
              <strong className="text-gold"> Lower Text (ข้อความชั้นล่าง)</strong> ที่ถูกลบออก
              และ <strong className="text-gold">Upper Text (ข้อความชั้นบน)</strong>
              ที่เขียนทับในภายหลัง
            </p>
          </div>

          {/* รูป sana3 */}
          <div className="mb-10">
            <h4 className="font-cinzel text-gold text-base font-semibold mb-4 tracking-wide text-center">
              ภาพเปรียบเทียบ Upper Text และ Lower Text
            </h4>
            <div className="rounded-card overflow-hidden shadow-card border border-gold/20 max-w-2xl mx-auto bg-paper-light">
              <img
                src="/manuscripts/quran/Sana/sana3.jpg"
                alt="Sanaa Palimpsest upper and lower text comparison"
                className="w-full object-cover"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              <div
                style={{ display: "none" }}
                className="h-48 items-center justify-center bg-paper/5 border border-gold/20 rounded-card"
              >
                <p className="font-pridi text-paper-white/50 text-sm">รอการอัปโหลดภาพ sana3.jpg</p>
              </div>
              <div className="p-4 bg-paper/5 border-t border-gold/10">
                <p className="font-cinzel text-xs text-gold text-center">
                  ภาพ X-Ray Fluorescence แสดง Lower Text (สีอ่อน) และ Upper Text (สีเข้ม)
                </p>
                <p className="font-pridi text-xs text-paper-white/50 text-center mt-1">
                  Stanford University X-Ray Fluorescence Imaging, 2007
                </p>
              </div>
            </div>
          </div>

          {/* ข้อโจมตี */}
          <div className="mb-8">
            <h4 className="font-cinzel text-lg text-paper-white font-semibold mb-6 tracking-wide">
              ข้อโจมตีที่พบบ่อย
            </h4>
            <div className="space-y-4">

              <div className="bg-red-950/30 border border-red-800/30 rounded-card p-5">
                <p className="font-cinzel text-red-400 text-sm font-semibold mb-2">
                  ข้อโจมตีที่ 1 — Lower Text แตกต่างจากอัลกุรอานปัจจุบัน
                </p>
                <p className="font-pridi text-paper-white/70 text-sm leading-relaxed">
                  เช่น Gerd R. Puin (1940–) นักวิชาการชาวเยอรมัน สรุปว่าอัลกุรอาน
                  คือ "cocktail of texts" และข้อความ Lower Text บ่งชี้ว่าอัลกุรอาน
                  มีการเปลี่ยนแปลงในประวัติศาสตร์
                  (Toby Lester, "What is the Koran?", The Atlantic, 1999)
                </p>
              </div>

              <div className="bg-red-950/30 border border-red-800/30 rounded-card p-5">
                <p className="font-cinzel text-red-400 text-sm font-semibold mb-2">
                  ข้อโจมตีที่ 2 — ลำดับซูเราะฮ์ใน Lower Text ไม่ตรงกับฉบับมาตรฐาน
                </p>
                <p className="font-pridi text-paper-white/70 text-sm leading-relaxed">
                  Behnam Sadeghi & Mohsen Goudarzi ระบุว่า Lower Text
                  มีลำดับซูเราะฮ์ที่ไม่ตรงกับฉบับอุษมานิกใดๆ ที่รู้จัก
                  บ่งชี้ว่าเป็นสำเนาก่อนยุคอุษมาน (pre-Uthmanic tradition)
                  (Der Islam, 2012, Vol. 87)
                </p>
              </div>

              <div className="bg-red-950/30 border border-red-800/30 rounded-card p-5">
                <p className="font-cinzel text-red-400 text-sm font-semibold mb-2">
                  ข้อโจมตีที่ 3 — การมีอยู่ของ Lower Text พิสูจน์ว่ามีการแก้ไขอัลกุรอาน
                </p>
                <p className="font-pridi text-paper-white/70 text-sm leading-relaxed">
                  นักวิจารณ์บางกลุ่มโต้แย้งว่าการลบข้อความชั้นล่างและเขียนทับ
                  บ่งชี้ถึงความพยายามปกปิดหรือแก้ไขข้อความอัลกุรอาน
                </p>
              </div>

            </div>
          </div>

          {/* การโต้แย้ง */}
          <div className="mb-8">
            <h4 className="font-cinzel text-lg text-gold font-semibold mb-6 tracking-wide">
              การโต้แย้งโดยนักวิชาการ
            </h4>
            <div className="space-y-4">

              <div className="bg-emerald-950/30 border border-emerald-700/30 rounded-card p-5">
                <p className="font-cinzel text-emerald-400 text-sm font-semibold mb-2">
                  การโต้แย้งที่ 1 — Upper Text ตรงกับอัลกุรอานปัจจุบัน 100%
                </p>
                <p className="font-pridi text-paper-white/80 text-sm leading-relaxed">
                  สิ่งสำคัญที่สุดที่นักวิจารณ์มักมองข้ามคือ
                  <strong className="text-gold"> Upper Text ของซานาอาสอดคล้องกับอัลกุรอานมาตรฐานทั้งหมด</strong>
                  ทั้งในด้านข้อความและลำดับซูเราะฮ์อย่างสมบูรณ์
                  นักวิชาการ Behnam Sadeghi เองยืนยันข้อนี้ในงานของเขา
                  ซึ่งหมายความว่าต้นฉบับนี้ยืนยันความถูกต้องของอัลกุรอานปัจจุบัน
                  ไม่ใช่โต้แย้ง
                  (Sadeghi & Goudarzi, Der Islam, 2012)
                </p>
              </div>

              <div className="bg-emerald-950/30 border border-emerald-700/30 rounded-card p-5">
                <p className="font-cinzel text-emerald-400 text-sm font-semibold mb-2">
                  การโต้แย้งที่ 2 — Lower Text คือสำเนาฝึกหัด ไม่ใช่ต้นฉบับทางการ
                </p>
                <p className="font-pridi text-paper-white/80 text-sm leading-relaxed">
                  Dr. Asma Hilali นักวิชาการจาก Institute of Ismaili Studies
                  เสนอจากการศึกษาฉบับเต็มในหนังสือ
                  <em> The Sanaa Palimpsest: The Transmission of the Qur'an in the First Centuries AH</em>
                  (Oxford University Press, 2017) ว่า Lower Text น่าจะเป็น
                  <strong className="text-gold"> บันทึกส่วนตัวของซอฮาบะฮ์ (Personal Codex of a Companion)</strong>
                  ไม่ใช่ต้นฉบับทางการ
                  ซึ่งซอฮาบะฮ์บางท่านมีบันทึกส่วนตัวก่อนที่เคาะลีฟะฮ์อุษมานจะรวบรวมฉบับมาตรฐาน
                  บันทึกเหล่านี้อาจมีลำดับซูเราะฮ์หรือสำเนียงที่แตกต่างกันตามที่แต่ละท่านได้รับการสอนมา
                  และ Upper Text กับ Lower Text จึงไม่มีความเชื่อมโยงทางเนื้อหาโดยตรง
                </p>
              </div>

              <div className="bg-emerald-950/30 border border-emerald-700/30 rounded-card p-5">
                <p className="font-cinzel text-emerald-400 text-sm font-semibold mb-2">
                  การโต้แย้งที่ 3 — ความแตกต่างของ Lower Text อธิบายได้ด้วยระบบ Qirāʾāt
                </p>
                <p className="font-pridi text-paper-white/80 text-sm leading-relaxed">
                  ความแตกต่างที่พบใน Lower Text ไม่ใช่สิ่งแปลกใหม่สำหรับนักวิชาการอิสลาม
                  ระบบ <strong className="text-gold">Qirāʾāt al-Sab'ah (การอ่านทั้งเจ็ด)</strong>
                  ที่ท่านนบีอนุญาตให้อ่านอัลกุรอานได้หลายสำเนียง
                  ถูกรวบรวมและรับรองโดย อิบน์ มุญาฮิด (Ibn Mujāhid, เสียชีวิต 324 ฮ.ศ.)
                  ในหนังสือ <em>Kitāb al-Sabʿah fī al-Qirāʾāt</em>
                  ความแตกต่างเล็กน้อยในตัวสะกดหรือสำเนียงจึงไม่ถือว่าเป็นการเปลี่ยนแปลงอัลกุรอาน
                </p>
              </div>

              <div className="bg-emerald-950/30 border border-emerald-700/30 rounded-card p-5">
                <p className="font-cinzel text-emerald-400 text-sm font-semibold mb-2">
                  การโต้แย้งที่ 4 — การนำหนังสัตว์กลับมาใช้ใหม่เป็นเรื่องปกติในสมัยโบราณ
                </p>
                <p className="font-pridi text-paper-white/80 text-sm leading-relaxed">
                  ดร.ซะอูด อัลซัรฮาน ผู้อำนวยการศูนย์วิจัยและการศึกษาอิสลามในริยาด
                  ชี้แจงว่าการนำหนังสัตว์กลับมาใช้ใหม่
                  <strong className="text-gold"> เป็นเรื่องปกติและพบเห็นทั่วไปในยุคโบราณ</strong>
                  ทั้งในคัมภีร์คริสเตียนและยิวด้วย (มีพบที่อาราม St. Catherine, Sinai)
                  ไม่ใช่สัญญาณของการปกปิดหรือแก้ไข
                  (iqna.ir, "Cairo Mosque Copy Not Oldest Quran Manuscript", 2015)
                </p>
              </div>

              <div className="bg-emerald-950/30 border border-emerald-700/30 rounded-card p-5">
                <p className="font-cinzel text-emerald-400 text-sm font-semibold mb-2">
                  การโต้แย้งที่ 5 — Gerd Puin เองไม่เคยอ้างว่าอัลกุรอานถูกเปลี่ยนแปลง
                </p>
                <p className="font-pridi text-paper-white/80 text-sm leading-relaxed">
                  สิ่งที่ Puin กล่าวในบทสัมภาษณ์ The Atlantic (1999) คือ
                  ต้นฉบับเหล่านี้ "ชวนให้ตั้งคำถาม" ไม่ใช่ข้อสรุปทางวิชาการ
                  นักวิชาการมุสลิม Yasin Dutton และ Behnam Sadeghi
                  ซึ่งศึกษาต้นฉบับเดียวกันสรุปตรงกันข้ามว่า
                  ต้นฉบับซานาอายืนยันความมั่นคงของข้อความอัลกุรอาน
                  ไม่ใช่โต้แย้ง
                  (Answering Christianity, www.answering-christianity.com/karim/mosque_of_sanaa.htm)
                </p>
              </div>

            </div>
          </div>

          {/* สรุปจากอุลามะ */}
          <div className="card-glass p-8 border-l-4 border-gold mb-8">
            <h4 className="font-cinzel text-gold text-lg font-semibold mb-4 tracking-wide">
              หลักการสำคัญของผู้รู้อิสลามในการนับว่าเป็นอัลกุรอาน
            </h4>
            <ul className="font-pridi text-paper-white/80 text-sm space-y-3 leading-relaxed">
              <li>
                <strong className="text-gold">1. อัลอิตกอน (الإتقان)</strong> —
                อิหม่าม อัลซุยูฏี (849-911 ฮ.ศ.) อธิบายในหนังสือ
                <em> al-Itqān fī ʿUlūm al-Qurʾān</em> ว่าอัลกุรอานได้รับการรักษา
                ผ่านการท่องจำ (ḥifẓ) ควบคู่กับการบันทึกเป็นลายลักษณ์อักษร
                ความแตกต่างเล็กน้อยในต้นฉบับเก่าจึงไม่ส่งผลต่อข้อความที่ถ่ายทอดผ่านการท่องจำ
              </li>
              <li>
                <strong className="text-gold">2. มุตะวาติร (متواتر)</strong> —
                อิหม่าม อันนะวะวี (631-676 ฮ.ศ.) อธิบายในหนังสือ
                <em> al-Tibyān fī Ādāb Ḥamalat al-Qurʾān</em> ว่า
                อัลกุรอานถูกส่งต่อในระดับ Mutawātir คือมีผู้ส่งต่อจำนวนมาก
                จนเป็นไปไม่ได้ที่จะมีการสมคบกันเพื่อเปลี่ยนแปลงข้อความ
              </li>
              <li>
                <strong className="text-gold">3. ฮิฟซุลกุรอาน (حفظ القرآن)</strong> —
                ชัยคฺ มุฮัมมัด อิบน์ ศอลิฮ์ อัลอุษัยมีน (1929-2001)
                ในหนังสือ <em>al-Uṣūl min ʿIlm al-Uṣūl</em> ย้ำว่า
                อัลลอฮ์ทรงสัญญาในอัลกุรอาน (15:9) ว่าจะปกป้องอัลกุรอาน
                ต้นฉบับที่มีความแตกต่างเล็กน้อยจึงไม่ขัดแย้งกับคำสัญญานี้
                เพราะข้อความหลักได้รับการรักษาผ่านการท่องจำของเหล่าฮาฟิซ
                ไม่ใช่จากการคัดลอกเพียงอย่างเดียว
              </li>
            </ul>
          </div>

          {/* แหล่งอ้างอิง */}
          <div className="border-t border-gold/20 pt-6">
            <p className="font-cinzel text-gold/60 text-xs mb-3 tracking-widest">แหล่งอ้างอิง</p>
            <ul className="font-pridi text-paper-white/50 text-xs space-y-1 leading-relaxed">
              <li>[1] B. Sadeghi & M. Goudarzi, "Ṣanʿāʾ 1 and the Origins of the Qurʾān", Der Islam, 2012, Vol. 87, No. 1-2.</li>
              <li>[2] A. Hilali, <em>The Sanaa Palimpsest: The Transmission of the Qurʾan in the First Centuries AH</em>, Oxford University Press, 2017.</li>
              <li>[3] T. Lester, "What is the Koran?", The Atlantic, January 1999.</li>
              <li>[4] ดร.ซะอูด อัลซัรฮาน, iqna.ir, "Cairo Mosque Copy Not Oldest Quran Manuscript", 2015.</li>
              <li>[5] Islamic Awareness, "Codex Sana'a I — A Qur'anic Manuscript From Mid-1st Century Of Hijra", www.islamic-awareness.org/quran/text/mss/soth</li>
              <li>[6] อิหม่าม อัลซุยูฏี, <em>al-Itqān fī ʿUlūm al-Qurʾān</em>, ศตวรรษที่ 15 ค.ศ.</li>
              <li>[7] อิหม่าม อันนะวะวี, <em>al-Tibyān fī Ādāb Ḥamalat al-Qurʾān</em>, ศตวรรษที่ 13 ค.ศ.</li>
              <li>[8] ชัยคฺ อิบน์ อุษัยมีน, <em>al-Uṣūl min ʿIlm al-Uṣūl</em>, ค.ศ. 2001.</li>
              <li>[9] Answering Christianity, "Was there something wrong with early Qur'anic fragments found in Sanaa?", www.answering-christianity.com/karim/mosque_of_sanaa.htm</li>
            </ul>
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
