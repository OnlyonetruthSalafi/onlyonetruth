"use client";

import Link from "next/link";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";

export default function HusseinManuscript() {
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
            <span className="text-gold">Al-Hussein Mosque Quran</span>
          </nav>

          <div className="text-center">
            <h1 className="font-cinzel text-3xl md:text-5xl text-paper-white mb-3 leading-tight">
              Al-Hussein Mosque Quran
            </h1>
            <h2 className="font-cinzel text-xl md:text-2xl text-gold mb-6">
              The 'Qur'ān Of ʿUthmān' At Cairo
            </h2>
            <div className="mx-auto h-px w-24 bg-gold/50 mb-6" />
            <p className="font-pridi text-lg text-paper-white/80 max-w-2xl mx-auto leading-relaxed mb-4">
              ต้นฉบับอัลกุรอานขนาดมหึมาที่เก่าแก่ที่สุดในอียิปต์ หนัก 80 กิโลกรัม 1,087 หน้า
            </p>
            <p className="font-cinzel text-gold/70 text-sm tracking-widest">
              ปลายศตวรรษที่ 1 — ต้นศตวรรษที่ 2 ฮ.ศ. | Kufic Script | 1,087 Folios
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
            ภาพหน้าต้นฉบับจาก Al-Hussein Mosque Quran ไคโร อียิปต์
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* HusseinMos1 */}
            <div className="rounded-card overflow-hidden shadow-card border border-gold/20 w-full">
              <img
                src="/manuscripts/quran/hussein/HusseinMos1.jpg"
                alt="Al-Hussein Mosque Quran folio 23a-24a"
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
                  รอการอัปโหลดภาพ HusseinMos1.jpg
                </p>
              </div>
              <div className="p-4 bg-ink/5">
                <p className="font-cinzel text-sm text-ink">
                  หน้า 23a-24a — สูเราะฮ์อัลบะกอเราะฮ์ อายะห์ 139-143
                </p>
              </div>
            </div>

            {/* HusseinMos2 */}
            <div className="rounded-card overflow-hidden shadow-card border border-gold/20 w-full">
              <img
                src="/manuscripts/quran/hussein/HusseinMos2.jpg"
                alt="Al-Hussein Mosque Quran folio 511b-512a"
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
                  รอการอัปโหลดภาพ HusseinMos2.jpg
                </p>
              </div>
              <div className="p-4 bg-ink/5">
                <p className="font-cinzel text-sm text-ink">
                  หน้ามุศฮัฟที่ถูกบำรุงรักษา ครบทั้ง 114 ซูเราะฮ์
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INFO + HISTORY + SCHOLARS + SCRIPT */}
      <section className="py-16 bg-paper-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              { label: "อายุต้นฉบับ", value: "ปลายศตวรรษที่ 1 — ต้นศตวรรษที่ 2 ฮ.ศ. Moritz ระบุในปี ค.ศ. 1905 ว่าเป็นศตวรรษที่ 1-2 ฮ.ศ." },
              { label: "รูปแบบอักษร", value: "Kufic Script — หมึกน้ำตาลเข้ม 12 บรรทัดต่อหน้า ไม่มีการตกแต่ง" },
              { label: "จำนวนหน้า", value: "1,087 หน้า ขาดหายไปเพียง 4 หน้า ครอบคลุมมากกว่า 99% ของอัลกุรอาน" },
              { label: "ขนาดและน้ำหนัก", value: "57 × 68 เซนติเมตร พื้นที่เขียน 48 × 51 ซม. สูง 40 ซม. หนัก 80 กิโลกรัม" },
              { label: "สถานที่เก็บรักษาปัจจุบัน", value: "ศูนย์ห้องสมุดต้นฉบับอิสลาม มัสยิดอัลซัยยิดะฮ์ ซัยนับ ไคโร อียิปต์ (ย้ายมาในปี ค.ศ. 2006)" },
              { label: "ฉบับตีพิมพ์", value: "Facsimile edition โดย ดร.ตัยยาร์ อัลติกูลาช ปี ค.ศ. 2009" },
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
                ต้นฉบับนี้ถูกเก็บรักษาไว้ในคอลเลกชันพิเศษของ
                กอฎี อับดุลเราะฮีม อัลบิซานี อัลอัสกอลานี
                ที่ "มัดเราะซะฮ์ อัลฟาฎิลียะฮ์" ในสมัยราชวงศ์อัยยูบิด
                (596 ฮ.ศ. / ค.ศ. 1200) จากนั้นถูกย้ายไปยังโดมข้างมัดเราะซะฮ์
                ซึ่งสร้างโดยสุลต่านมัมลูก อัลฆูรี (922 ฮ.ศ. / ค.ศ. 1516)
                และยังคงอยู่ที่นั่นจนถึงปี 1275 ฮ.ศ. / ค.ศ. 1858-59
              </p>
              <p className="font-pridi text-ink/80 leading-relaxed">
                หลังจากนั้น ต้นฉบับถูกย้ายต่อเนื่องหลายครั้ง ได้แก่
                มัสยิดอัลซัยนะบี → ปราสาทมุฮัมมัดอาลี → ดีวานอัลเอากอฟ (ค.ศ. 1886-87)
                → กัสร์อะบีดีน (ปีถัดมา) → อัลมัชฮัด อัลฮุสเซนี (1305 ฮ.ศ. / ค.ศ. 1887-88)
                โดยอยู่ที่มัสยิดอัลฮุสเซนจนถึงปี ค.ศ. 2006
                ก่อนถูกย้ายไปยังศูนย์ห้องสมุดต้นฉบับอิสลาม มัสยิดอัลซัยยิดะฮ์ ซัยนับ ในปัจจุบัน
              </p>
            </div>
          </div>

          {/* ทัศนะของนักวิชาการ */}
          <div className="mb-10">
            <h3 className="font-cinzel text-xl text-ink mb-4">ทัศนะของนักวิชาการ</h3>
            <p className="font-pridi text-ink/80 leading-relaxed mb-6">
              นักวิชาการมีทัศนะแตกต่างกันเกี่ยวกับอายุที่แท้จริงของต้นฉบับนี้:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card-glass p-6">
                <h4 className="font-cinzel text-gold text-base mb-4">
                  ฝ่ายที่เชื่อว่าเป็นสมัยอุษมาน
                </h4>
                <ul className="font-pridi text-ink/80 leading-relaxed space-y-2 text-sm list-disc list-inside">
                  <li>มุฮัมมัด บัคฮิต — ถือว่าเป็นมุศฮัฟอุษมานิก</li>
                  <li>ละบีบ อัลซะอีด — อาจเป็นมุศฮัฟที่ส่งไปยังมาดีนะฮ์หรือซีเรีย</li>
                  <li>มุฮัมมัด อับดุลอะซีม อัลซุรกอนี — เป็นสำเนาของมุศฮัฟอุษมาน</li>
                </ul>
              </div>
              <div className="card-glass p-6">
                <h4 className="font-cinzel text-gold text-base mb-4">
                  ฝ่ายที่ระบุว่าเป็นยุคอุมัยยะฮ์
                </h4>
                <ul className="font-pridi text-ink/80 leading-relaxed space-y-2 text-sm list-disc list-inside">
                  <li>
                    ศอลาฮุดดีน อัลมุนัจญิด — ไม่ใช่สมัยอุษมาน
                    อาจสร้างโดยคำสั่งของผู้ว่าการอียิปต์
                    อับดุลอะซีซ บิน มัรวาน น้องชายของเคาะลีฟะฮ์อุมัยยะฮ์ อับดุลมาลิก
                  </li>
                  <li>ดร.ซุอาด มาเฮอร์ — ไม่ใช่อัลกุรอานที่เคาะลีฟะฮ์อุษมานส่งไปยังดินแดนต่างๆ</li>
                  <li>
                    ดร.อัลติกูลาช — สนับสนุนว่าเป็นสำเนาที่เก่าแก่ที่สุดชิ้นหนึ่งในอียิปต์
                    จากครึ่งหลังของศตวรรษที่ 1 ฮ.ศ.
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* หมายเหตุสำคัญ */}
      <section className="py-12 bg-ink">
        <div className="max-w-4xl mx-auto px-gutter">

          {/* หัวข้อ */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-gold/30"></div>
            <h3 className="font-cinzel text-xl md:text-2xl text-gold text-center tracking-wide leading-snug px-2">
              ⚠ หมายเหตุสำคัญ
            </h3>
            <div className="flex-1 h-px bg-gold/30"></div>
          </div>

          {/* Banner หลัก */}
          <div
            className="card-glass border-2 border-gold/50 rounded-card p-8 mb-8"
            style={{ background: "linear-gradient(135deg, rgba(197,160,89,0.08) 0%, rgba(62,39,35,0.3) 100%)" }}
          >
            <p className="font-cinzel text-gold text-lg font-semibold mb-4 tracking-wide">
              สามารถเรียกต้นฉบับนี้ว่า ʿUTHMĀNIC MANUSCRIPT ได้
            </p>

            <p className="font-pridi text-paper-white/90 leading-relaxed mb-6">
              แม้นักวิชาการบางท่านจะไม่เห็นด้วยกับการระบุอายุถึงสมัยเคาะลีฟะฮ์อุษมาน
              แต่มีหลักฐานสำคัญ 2 ชั้นที่สนับสนุนการเรียกต้นฉบับนี้ว่า
              <strong className="text-gold"> ʿUthmānic Manuscript</strong> ได้อย่างมีเหตุผล:
            </p>

            {/* 2 คอลัมน์หลักฐาน */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

              {/* หลักฐานที่ 1 */}
              <div className="bg-paper/5 border border-gold/20 rounded-card p-5">
                <h4 className="font-cinzel text-gold text-base font-semibold mb-3 tracking-wide">
                  1. หลักฐานด้านตัวเขียน (Palaeographic Evidence)
                </h4>
                <ul className="font-pridi text-paper-white/80 text-sm space-y-2 leading-relaxed">
                  <li>• รูปแบบอักษรคูฟิกแสดงลักษณะของยุคอุมัยยะฮ์ ปลายศตวรรษที่ 1 ฮ.ศ. ซึ่งทับซ้อนกับช่วงปลายรัชสมัยอุษมาน</li>
                  <li>• รูปแบบเครื่องหมายสิ้นอายะห์และตัวบ่งชี้ทุก 10 อายะห์ มีความคล้ายคลึงอย่างน่าทึ่งกับต้นฉบับซามาร์คันด์ที่ได้รับการระบุว่าเป็นอุษมานิก (Islamic Awareness, 2009)</li>
                  <li>• Moritz ระบุอายุเป็นศตวรรษที่ 1-2 ฮ.ศ. ตั้งแต่ปี ค.ศ. 1905 และ Altikulaç ยืนยันในฉบับ Facsimile ปี ค.ศ. 2009</li>
                </ul>
              </div>

              {/* หลักฐานที่ 2 */}
              <div className="bg-paper/5 border border-gold/20 rounded-card p-5">
                <h4 className="font-cinzel text-gold text-base font-semibold mb-3 tracking-wide">
                  2. สายรายงานทางประวัติศาสตร์ (Historical Isnād)
                </h4>
                <ul className="font-pridi text-paper-white/80 text-sm space-y-2 leading-relaxed">
                  <li>• มุฮัมมัด บัคฮิต และมุฮัมมัด อับดุลอะซีม อัลซุรกอนี (ผู้แต่ง Manāhil al-ʿIrfān) ระบุว่าเป็นมุศฮัฟอุษมาน (Altikulaç, 2009, p. 148)</li>
                  <li>• ละบีบ อัลซะอีด เห็นว่าอาจเป็นมุศฮัฟที่ส่งไปยังมาดีนะฮ์หรือซีเรีย สอดคล้องกับรายงานว่าอุษมานจัดส่งสำเนา 5-7 เล่มไปยังเมืองหลัก (Ibn Abī Dāwūd, Kitāb al-Maṣāḥif)</li>
                  <li>• ประวัติการเก็บรักษาสืบเนื่องตั้งแต่ยุคอัยยูบิด (596 ฮ.ศ.) มายังปัจจุบัน บ่งชี้ถึงความสำคัญและความเก่าแก่ที่ได้รับการยอมรับในประวัติศาสตร์อิสลาม</li>
                </ul>
              </div>
            </div>

            {/* แหล่งอ้างอิง */}
            <div className="border-t border-gold/20 pt-5">
              <p className="font-cinzel text-gold/70 text-xs mb-3 tracking-widest">แหล่งอ้างอิง</p>
              <ul className="font-pridi text-paper-white/60 text-xs space-y-1 leading-relaxed">
                <li>[1] T. Altikulaç, <em>Al-Muṣḥaf Al-Sharīf: The Copy of Cairo (Al-Hussein Mosque)</em>, 2009, IRCICA: Istanbul, pp. 146-152.</li>
                <li>[2] B. Moritz, <em>Arabic Palaeography</em>, 1905, Khedivial Library: Cairo, Plates 13-16.</li>
                <li>[3] M. A. al-Zurqānī, <em>Manāhil al-ʿIrfān fī ʿUlūm al-Qurʾān</em>, Dār Iḥyāʾ al-Turāth al-ʿArabī: Beirut.</li>
                <li>[4] Ibn Abī Dāwūd al-Sijistānī, <em>Kitāb al-Maṣāḥif</em>, ed. Muhibb al-Dīn ʿAbd al-Subḥān Wāʾil, 2002, Muʾassasat Qurṭuba: Cairo.</li>
                <li>[5] Islamic Awareness, "The Qur'ān Of ʿUthmān At The Al-Hussein Mosque", 2009, www.islamic-awareness.org/quran/text/mss/hussein</li>
                <li>[6] Yaqeen Institute, "The ʿUthmānic Codex: Understanding how the Qur'an was Preserved", 2024, yaqeeninstitute.org</li>
              </ul>
            </div>

          </div>

          {/* สรุปท้าย */}
          <p className="font-pridi text-paper-white/60 text-sm text-center leading-relaxed italic">
            "ความจริงที่ปรากฏจากทั้งการพิจารณาตัวเขียนและสายรายงานทางประวัติศาสตร์คือ
            ต้นฉบับนี้เป็นหนึ่งในสำเนาอัลกุรอานที่เก่าแก่ที่สุดในโลก
            ไม่ว่าจะระบุอายุถึงสมัยอุษมานโดยตรงหรือยุคอุมัยยะฮ์ต้น
            ข้อความที่ปรากฏในต้นฉบับนี้สอดคล้องกับอัลกุรอานที่มุสลิมทั่วโลกอ่านอยู่ในปัจจุบัน"
          </p>

        </div>
      </section>

      {/* SCRIPT + TABLE + BUTTONS */}
      <section className="py-16 bg-paper-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* รูปแบบอักษรและตกแต่ง */}
          <div className="mb-10">
            <h3 className="font-cinzel text-xl text-ink mb-4">รูปแบบอักษรและการตกแต่ง</h3>
            <div className="space-y-4">
              <p className="font-pridi text-ink/80 leading-relaxed">
                ต้นฉบับขนาดมหึมานี้เขียนบนหนังสัตว์ ด้วยอักษรคูฟิกที่สวยงาม
                ใช้หมึกสีน้ำตาลเข้ม มีเครื่องหมายแยกแยะตัวอักษรเพียงเล็กน้อย
                และไม่มีการตกแต่งเพิ่มเติม แต่ละหน้ามี 12 บรรทัด
                แต่บางหน้ามีเพียง 8-10 บรรทัด
              </p>
              <p className="font-pridi text-ink/80 leading-relaxed">
                การสิ้นสุดอายะห์บ่งบอกด้วยเส้นทแยงมุม
                ทุกอายะห์ที่ 10 ถูกระบุด้วยเหรียญสี่เหลี่ยมที่ตกแต่งด้วยสีน้ำเงิน เขียว และแดง
                พร้อมลวดลายดาว แถบสี่เหลี่ยมประดับแบ่งระหว่างซูเราะฮ์
                ที่น่าสังเกตคือรูปแบบการสิ้นอายะห์และเครื่องหมายทุก 10 อายะห์
                มีความคล้ายคลึงอย่างน่าทึ่งกับต้นฉบับซามาร์คันด์ ซึ่งบ่งชี้ว่าสองต้นฉบับนี้
                อาจเป็นร่วมสมัยกัน
              </p>
              <p className="font-pridi text-ink/80 leading-relaxed">
                ต้นฉบับมีส่วนที่ขาดหายและข้อความที่เลือนหายไปบ้าง
                บางส่วนได้รับการซ่อมแซมด้วยการเพิ่มหน้าใหม่หรือเขียนทับข้อความเดิม
                ซึ่งทำโดยมือของผู้คัดลอกยุคหลังอย่างชัดเจน
                ทำให้เกิดข้อผิดพลาดในการคัดลอก 7 ใน 22 ข้อผิดพลาด
                หนังสัตว์ได้รับการบูรณะในสมัยสุลต่านอัลฆูรี
                สุลต่านองค์สุดท้ายของราชวงศ์มัมลูก และได้รับการบูรณะต่อเนื่องมาจนถึงปัจจุบัน
              </p>
              <div
                className="mt-6 border-l-4 border-gold p-5 rounded-card"
                style={{ background: '#3E2723' }}
              >
                <p className="font-cinzel text-gold text-sm font-semibold mb-2 tracking-wide">
                  ** หมายเหตุสำคัญ
                </p>
                <p className="font-pridi text-paper-white leading-relaxed">
                  ข้อผิดพลาดในการคัดลอกที่พบในต้นฉบับนี้
                  <strong className="text-gold"> ไม่ส่งผลให้อัลกุรอานถูกบิดเบือนแต่อย่างใด</strong>
                  เนื่องจากอัลกุรอานไม่ได้พึ่งพาการบันทึกเป็นลายลักษณ์อักษรเพียงอย่างเดียว
                  แต่ถูกท่องจำ<strong className="text-gold"> ทุกอักษร ทุกคำ</strong>
                  โดยบรรดาฮาฟิซ (ผู้ท่องจำอัลกุรอาน) อย่างต่อเนื่องในทุกยุคทุกสมัย
                  นับตั้งแต่สมัยท่านนบีมุฮัมมัด ซล. จวบจนปัจจุบัน
                  การท่องจำแบบปากต่อปากในระดับ Mutawātir
                  (ถ่ายทอดโดยคนจำนวนมากจนเป็นไปไม่ได้ที่จะมีการสมคบกันเปลี่ยนแปลง)
                  คือหลักประกันสูงสุดของความถูกต้องของอัลกุรอาน
                  ตามที่อัลลอฮ์ทรงสัญญาไว้ในอัลกุรอาน สูเราะฮ์ อัลฮิจร์ 15:9
                  <span className="block mt-3 font-cinzel text-gold/80 text-xs tracking-widest">
                    "แท้จริง เราได้ประทานอัล-ซิกร์ลงมา และแท้จริง เราเป็นผู้พิทักษ์รักษามันไว้"
                  </span>
                </p>
              </div>
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
                    <th className="p-3 text-left font-cinzel">หน้า (Folio)</th>
                    <th className="p-3 text-left font-cinzel">ซูเราะฮ์</th>
                    <th className="p-3 text-left font-cinzel">หมายเหตุ</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["1b", "อัลฟาติฮะฮ์", "บางส่วนหายไปทั้งสองด้าน"],
                    ["1b–59a", "อัลบะกอเราะฮ์", "หน้า 43a-43b เขียนทดแทนโดยมือยุคหลัง"],
                    ["59a–99b", "อาลอิมรอน", "หน้า 63a-65b เขียนทดแทน"],
                    ["511b–533b", "อัลกะฮ์ฟ", "—"],
                    ["534a–542a", "มัรยัม", "—"],
                    ["542a–554a", "ฏอฮา", "—"],
                    ["1083b–1087b", "อัลมุอาววิซาตัยน์", "หน้าสุดท้าย บางหน้าเขียนทดแทน"],
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
              href="https://www.islamic-awareness.org/quran/text/mss/hussein"
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
