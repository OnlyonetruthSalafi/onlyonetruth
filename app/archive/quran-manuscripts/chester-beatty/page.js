"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";

export default function ChesterBeattyManuscript() {
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
            <span className="text-gold">Ibn al-Bawwab Quran</span>
          </nav>

          <div className="text-center">
            <h1 className="font-cinzel text-3xl md:text-5xl text-paper-white mb-3 leading-tight">
              Ibn al-Bawwab Quran
            </h1>
            <h2 className="font-cinzel text-xl md:text-2xl text-gold mb-6">
              CBL Is 1431 — อัลกุรอานอักษร Naskh เล่มแรกสุดที่หลงเหลืออยู่
            </h2>
            <div className="mx-auto h-px w-24 bg-gold/50 mb-6" />
            <p className="font-pridi text-lg text-paper-white/80 max-w-2xl mx-auto leading-relaxed mb-4">
              อัลกุรอานฉบับสมบูรณ์ 286 หน้า คัดลอกโดยอิบนุลเบาวาบ นักอักษรวิจิตรผู้ยิ่งใหญ่แห่งแบกแดด
              เก็บรักษาที่ห้องสมุดเชสเตอร์ บีตตี้ ดับลิน ไอร์แลนด์
            </p>
            <p className="font-cinzel text-gold/70 text-sm tracking-widest">
              ค.ศ. 1000–1001 (391 ฮ.ศ.) | Naskh & Thuluth | Dublin, Ireland
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
            ภาพหน้าต้นฉบับอิบนุลเบาวาบ ห้องสมุดเชสเตอร์ บีตตี้ ดับลิน (ภาพ: Wikimedia Commons)
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-card overflow-hidden shadow-card border border-gold/20 w-full">
              <Image
                src="/manuscripts/quran/chester-beatty/chb1.jpg"
                alt="หน้าเปิดประดับทอง — หัวซูเราะฮ์อัลฟาติหะฮ์และอัลบะเกาะเราะฮ์ (CBL Is 1431, f.9b)"
                width={1920}
                height={2395}
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
                  รอการอัปโหลดภาพ chb1.jpg
                </p>
              </div>
              <div className="p-4 bg-ink/5">
                <p className="font-cinzel text-sm text-ink">
                  หน้าเปิดประดับทอง — หัวซูเราะฮ์อัลฟาติหะฮ์และอัลบะเกาะเราะฮ์ (f.9b)
                </p>
              </div>
            </div>

            <div className="rounded-card overflow-hidden shadow-card border border-gold/20 w-full">
              <Image
                src="/manuscripts/quran/chester-beatty/chb2.jpg"
                alt="หน้าท้ายเล่มอักษร Naskh ลายมืออิบนุลเบาวาบ (CBL Is 1431, f.286a)"
                width={1400}
                height={1826}
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
                  รอการอัปโหลดภาพ chb2.jpg
                </p>
              </div>
              <div className="p-4 bg-ink/5">
                <p className="font-cinzel text-sm text-ink">
                  หน้าท้ายเล่มอักษร Naskh ลายมืออิบนุลเบาวาบ (f.286a)
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
              { label: "อายุ", value: "ค.ศ. 1000–1001 (391 ฮ.ศ.) — คัดลอกที่แบกแดด" },
              { label: "อักษร", value: "Naskh (เนื้อหา) และ Thuluth (หน้าเปิดกับหัวซูเราะฮ์)" },
              { label: "จำนวนหน้า", value: "286 หน้า (ฉบับสมบูรณ์)" },
              { label: "ขนาด", value: "ประมาณ 14 × 19 ซม." },
              { label: "วัสดุ", value: "กระดาษ — อัลกุรอานบนกระดาษเล่มแรกสุดที่หลงเหลืออยู่" },
              { label: "ผู้คัดลอก", value: "อบุลฮะซัน อะลี อิบนุ ฮิลาล รู้จักในนาม อิบนุลเบาวาบ (เสียชีวิตราว ค.ศ. 1022)" },
              { label: "สถานที่", value: "Chester Beatty Library, Dublin, Ireland" },
              { label: "ทะเบียน", value: "CBL Is 1431" },
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
              อัลกุรอานฉบับสมบูรณ์ 286 หน้า คัดลอกที่แบกแดดในปี 391 ฮ.ศ. (ค.ศ. 1000–1001)
              โดยอบุลฮะซัน อะลี อิบนุ ฮิลาล ที่รู้จักในนาม "อิบนุลเบาวาบ" (บุตรแห่งผู้เฝ้าประตู)
              นักอักษรวิจิตรผู้ยิ่งใหญ่ที่สุดคนหนึ่งในประวัติศาสตร์อิสลาม
              ผู้พัฒนาระบบสัดส่วนตัวอักษรของอิบนุ มุกละฮ์ ให้งดงามสมบูรณ์
            </p>
            <p className="font-pridi text-ink/80 leading-relaxed mb-4">
              ความสำคัญของต้นฉบับนี้อยู่ที่การเป็นหมุดหมายของประวัติศาสตร์การคัดลอกอัลกุรอาน —
              เป็นอัลกุรอานเล่มแรกสุดที่หลงเหลืออยู่ซึ่งเขียนด้วยอักษรโค้งมน (Naskh) แทนอักษรคูฟิกเหลี่ยม
              และเขียนบนกระดาษแทนหนังสัตว์ เนื้อหาใช้อักษร Naskh
              ส่วนหน้าเปิดและหัวซูเราะฮ์ใช้อักษร Thuluth พร้อมการประดับลวดลายทองอย่างประณีต
              แนวทางนี้กลายเป็นแบบแผนของการคัดลอกอัลกุรอานสืบมาจนถึงปัจจุบัน
            </p>
            <p className="font-pridi text-ink/80 leading-relaxed">
              บันทึกทางประวัติศาสตร์ระบุว่าอิบนุลเบาวาบคัดลอกอัลกุรอานไว้ทั้งสิ้น 64 เล่ม
              แต่เหลือรอดมาถึงปัจจุบันเพียงเล่มเดียวที่ลงนามโดยท่าน คือเล่มนี้
              ปัจจุบันเก็บรักษาที่ห้องสมุดเชสเตอร์ บีตตี้ กรุงดับลิน
              ซึ่งครอบครองคอลเลกชันต้นฉบับอิสลามที่สำคัญที่สุดแห่งหนึ่งในโลกตะวันตก
              รวมถึงชิ้นส่วนอัลกุรอานอักษรฮิญาซีจากศตวรรษที่ 1 ฮ.ศ. (CBL Is 1615 I–II) อีกด้วย
            </p>
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
              href="https://en.wikipedia.org/wiki/Ibn_al-Bawwab"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary font-pridi text-center"
            >
              อ่านข้อมูลต้นฉบับ (Wikipedia) ↗
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
