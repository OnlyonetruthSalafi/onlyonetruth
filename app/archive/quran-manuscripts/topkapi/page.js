"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";

export default function TopkapiManuscript() {
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
            <span className="text-gold">Topkapi Quran</span>
          </nav>

          <div className="text-center">
            <h1 className="font-cinzel text-3xl md:text-5xl text-paper-white mb-3 leading-tight">
              Topkapi Quran Manuscript
            </h1>
            <h2 className="font-cinzel text-xl md:text-2xl text-gold mb-6">
              The 'Qur'ān Of ʿUthmān' At Topkapi Palace Museum, Istanbul
            </h2>
            <div className="mx-auto h-px w-24 bg-gold/50 mb-6" />
            <p className="font-pridi text-lg text-paper-white/80 max-w-2xl mx-auto leading-relaxed mb-4">
              ต้นฉบับ 408 หน้า ครอบคลุมมากกว่า 99% ของอัลกุรอาน เก็บรักษาที่พิพิธภัณฑ์พระราชวังท็อปกาปึ
            </p>
            <p className="font-cinzel text-gold/70 text-sm tracking-widest">
              ศตวรรษที่ 1-2 ฮ.ศ. | Kufic Script | 408 Folios
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
            ภาพหน้าต้นฉบับท็อปกาปึ อิสตันบูล ตุรกี
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-card overflow-hidden shadow-card border border-gold/20 w-full">
              <Image
                src="/manuscripts/quran/topkapi/top1.jpg"
                alt="หน้าต้นฉบับท็อปกาปึ — อักษรคูฟิกยุคอุมัยยะฮ์"
                width={909}
                height={960}
                sizes="(max-width: 640px) 100vw, 50vw"
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
                  รอการอัปโหลดภาพ top1.jpg
                </p>
              </div>
              <div className="p-4 bg-ink/5">
                <p className="font-cinzel text-sm text-ink">
                  หน้าต้นฉบับท็อปกาปึ — อักษรคูฟิกยุคอุมัยยะฮ์
                </p>
              </div>
            </div>

            <div className="rounded-card overflow-hidden shadow-card border border-gold/20 w-full">
              <Image
                src="/manuscripts/quran/topkapi/top2.jpg"
                alt="การตกแต่งหัวซูเราะฮ์และเครื่องหมายอายะห์"
                width={796}
                height={835}
                sizes="(max-width: 640px) 100vw, 50vw"
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
                  รอการอัปโหลดภาพ top2.jpg
                </p>
              </div>
              <div className="p-4 bg-ink/5">
                <p className="font-cinzel text-sm text-ink">
                  การตกแต่งหัวซูเราะฮ์และเครื่องหมายอายะห์
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
              { label: "อายุ", value: "ปลายศตวรรษที่ 1 — ต้นศตวรรษที่ 2 ฮ.ศ. (ยุคอุมัยยะฮ์)" },
              { label: "อักษร", value: "Kufic Script — กำกับสระด้วยจุดสีแดงตามระบบของอบูอัลอัสวัด อัดดุอะลี" },
              { label: "จำนวนหน้า", value: "408 หน้า ขาดเพียง 2 หน้า ครอบคลุมมากกว่า 99% ของข้อความ" },
              { label: "ขนาด", value: "41 × 46 ซม. (พื้นที่ตัวบท 32 × 40 ซม.) หนา 11 ซม." },
              { label: "วัสดุ", value: "หนังสัตว์ (Vellum)" },
              { label: "ทะเบียน", value: "H.S. 194 (เดิม H.S. 22 และ H.S. 44/32)" },
              { label: "สถานที่", value: "Topkapi Palace Museum, Istanbul, Turkey" },
              { label: "ฉบับตีพิมพ์", value: "Facsimile edition โดย Tayyar Altıkulaç, 2007" },
            ].map((item) => (
              <div key={item.label} className="card-glass p-5">
                <p className="font-cinzel text-gold text-sm mb-1">{item.label}</p>
                <p className="font-pridi text-ink">{item.value}</p>
              </div>
            ))}
          </div>

          {/* เนื้อหา */}
          <div className="mb-10">
            <h3 className="font-cinzel text-xl text-ink mb-4">เนื้อหา</h3>
            <p className="font-pridi text-ink/80 leading-relaxed mb-4">
              "อัลมุศฮัฟ อัชชะรีฟ" แห่งพระราชวังท็อปกาปึ เป็นต้นฉบับอัลกุรอานที่สมบูรณ์ที่สุดเล่มหนึ่งของยุคแรก
              มี 408 หน้า ขาดไปเพียง 2 หน้า ครอบคลุมมากกว่า 99% ของข้อความอัลกุรอาน
              เขียนด้วยอักษรคูฟิกบนหนังสัตว์ขนาดใหญ่ 41 × 46 ซม.
              กำกับสระด้วยจุดสีแดงตามระบบของอบูอัลอัสวัด อัดดุอะลี
              (วางจุดไว้บน ข้าง หรือใต้ตัวอักษร) และใช้ขีดสั้นแทนจุดแยกพยัญชนะ
            </p>
            <p className="font-pridi text-ink/80 leading-relaxed">
              แม้ตามตำนานจะเชื่อกันว่าเป็นมุศฮัฟส่วนตัวของเคาะลีฟะฮ์อุษมาน
              แต่นักวิชาการทั้งมุสลิมและตะวันตก — รวมถึงศ็อลาฮุดดีน อัลมุนัจญิด และ Tayyar Altıkulaç
              ผู้จัดทำ facsimile edition ปี 2007 — ลงความเห็นว่ารูปแบบอักษร การตกแต่ง
              และระบบกำกับสระบ่งชี้ว่าคัดลอกในยุคอุมัยยะฮ์ ปลายศตวรรษที่ 1 ถึงต้นศตวรรษที่ 2 ฮ.ศ.
              กระนั้นสาระสำคัญคือ โครงตัวบท (rasm) ของต้นฉบับนี้ตรงตามมาตรฐานอุษมานีที่ใช้กันทั่วโลกทุกวันนี้
            </p>
          </div>

          {/* ข้อโจมตีจากนักบูรพาคดี + คำชี้แจงจาก Al-Azami */}
          <div className="mb-10">
            <h3 className="font-cinzel text-xl text-ink mb-4">
              ข้อโจมตีของนักบูรพาคดีตะวันตกเรื่อง "Variants"
            </h3>
            <p className="font-pridi text-ink/80 leading-relaxed mb-4">
              นักบูรพาคดี (Orientalists) หลายท่าน อาทิ อิกนาซ โกลด์ซิเฮอร์, อัลฟองส์ มิงกานา
              และอาร์เธอร์ เจฟฟรี (ผู้รวบรวม Materials for the History of the Text of the Qur'an, 1937)
              พยายามนำระเบียบวิธีวิจารณ์ตัวบทไบเบิล (Biblical Textual Criticism)
              มาใช้กับอัลกุรอาน โดยชี้ไปที่ "variants" — ความแตกต่างของการเขียนที่พบในต้นฉบับยุคแรกอย่างท็อปกาปึ
              เช่น อักขรวิธีการเขียนอะลิฟที่ต่างจากฉบับมาตรฐาน หรือรายงานเกี่ยวกับมุศฮัฟของเศาะฮาบะฮ์บางท่าน
              เพื่อสรุปว่าตัวบทอัลกุรอานยังไม่นิ่งและถูกแก้ไขภายหลัง
            </p>

            <h3 className="font-cinzel text-xl text-ink mb-4 mt-8">
              คำชี้แจงจาก M.M. Al-Azami — The History of the Qur'anic Text
            </h3>
            <p className="font-pridi text-ink/80 leading-relaxed mb-4">
              ศ.ดร.มุฮัมมัด มุศเฏาะฟา อัลอะอฺซอมี (M.M. Al-Azami) ตอบข้อกล่าวหาเหล่านี้ไว้ในหนังสือ
              The History of the Qur'anic Text: From Revelation to Compilation (2003) โดยสรุปได้ดังนี้
            </p>
            <ul className="font-pridi text-ink/80 leading-relaxed space-y-3 list-none">
              <li className="pl-5 relative">
                <span className="absolute left-0 text-gold">◆</span>
                <strong>ความต่างเกือบทั้งหมดเป็นเพียงอักขรวิธี ไม่ใช่ตัวบท</strong> —
                สิ่งที่ถูกเรียกว่า variant ในต้นฉบับอย่างท็อปกาปึ คือธรรมเนียมการสะกดของอาลักษณ์ยุคแรก
                เช่น การเขียนหรือละอะลิฟ (เขียน قل แทน قال ในโครงเดิม)
                ซึ่งผู้อ่านที่ท่องจำอัลกุรอานย่อมอ่านได้ถูกต้องเสมอ ไม่กระทบความหมายแม้แต่คำเดียว
              </li>
              <li className="pl-5 relative">
                <span className="absolute left-0 text-gold">◆</span>
                <strong>อัลกุรอานไม่ได้พึ่งพาต้นฉบับลายลักษณ์เป็นหลัก</strong> —
                ต่างจากไบเบิลที่ตัวบทต้องสืบสร้างจากการเทียบต้นฉบับ อัลกุรอานถูกรักษาด้วยการท่องจำแบบ
                Mutawātir (การถ่ายทอดมวลชนต่อมวลชนทุกรุ่น) ควบคู่กับลายลักษณ์
                ต้นฉบับโบราณจึงเป็นเพียงพยานสนับสนุน มิใช่แหล่งเดียวของตัวบท
              </li>
              <li className="pl-5 relative">
                <span className="absolute left-0 text-gold">◆</span>
                <strong>รายงาน "มุศฮัฟเศาะฮาบะฮ์" ที่เจฟฟรีรวบรวมนั้นอ่อนหลักฐาน</strong> —
                จำนวนมากเป็นสายรายงานที่เชื่อถือไม่ได้ หรือแท้จริงเป็นคำอธิบายประกอบ (exegetical gloss)
                ที่เศาะฮาบะฮ์จดไว้ข้างตัวบทเพื่อความเข้าใจส่วนตัว ไม่ใช่ตัวบทอัลกุรอานอีกฉบับ
              </li>
              <li className="pl-5 relative">
                <span className="absolute left-0 text-gold">◆</span>
                <strong>การเทียบต้นฉบับกลับยืนยันความเป็นหนึ่งเดียว</strong> —
                เมื่อเทียบมุศฮัฟยุคแรกทั้งหมด รวมถึงท็อปกาปึ ซามาร์คันด์ และฮุสเซน
                โครงตัวบท (rasm) ตรงกันและตรงกับฉบับมาตรฐานปัจจุบัน
                หากใช้มาตรฐานเดียวกันที่นักบูรพาคดีใช้ตัดสินอัลกุรอานไปตัดสินไบเบิล
                ตัวบทไบเบิลจะไม่ผ่านเกณฑ์ดังกล่าวเสียเอง
              </li>
            </ul>
          </div>

          {/* หมายเหตุสำคัญ */}
          <div
            className="mt-6 border-l-4 border-gold p-5 rounded-card"
            style={{ background: '#3E2723' }}
          >
            <p className="font-cinzel text-gold text-sm font-semibold mb-2 tracking-wide">
              ** หมายเหตุสำคัญ
            </p>
            <p className="font-pridi text-paper-white leading-relaxed">
              ความแตกต่างหรือข้อสังเกตใดๆ ที่พบในต้นฉบับนี้ ไม่ส่งผลให้อัลกุรอานถูกบิดเบือนแต่อย่างใด
              เนื่องจากอัลกุรอานได้รับการรักษาผ่านการท่องจำในระดับ Mutawātir ทุกอักษร ทุกคำ
              โดยบรรดาฮาฟิซอย่างต่อเนื่องในทุกยุคทุกสมัย นับตั้งแต่สมัยท่านนบีมุฮัมมัด (ซ.ล.) จวบจนปัจจุบัน
              <span className="block mt-3 font-cinzel text-gold/80 text-xs tracking-widest">
                — อัลกุรอาน สูเราะฮ์ อัลฮิจร์ 15:9
              </span>
            </p>
          </div>

          {/* ปุ่ม */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a
              href="https://www.islamic-awareness.org/quran/text/mss/topkapi"
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
