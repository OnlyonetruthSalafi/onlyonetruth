"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";

export default function BlueQuranManuscript() {
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
            <span className="text-gold">The Blue Quran</span>
          </nav>

          <div className="text-center">
            <h1 className="font-cinzel text-3xl md:text-5xl text-paper-white mb-3 leading-tight">
              The Blue Quran
            </h1>
            <h2 className="font-cinzel text-xl md:text-2xl text-gold mb-6">
              อัลกุรอานสีน้ำเงิน — ผลงานชิ้นเอกแห่งศิลปะอิสลาม
            </h2>
            <div className="mx-auto h-px w-24 bg-gold/50 mb-6" />
            <p className="font-pridi text-lg text-paper-white/80 max-w-2xl mx-auto leading-relaxed mb-4">
              เขียนด้วยหมึกทองคำบนหนังย้อมสีน้ำเงินเข้ม หนึ่งในต้นฉบับที่งดงามที่สุดในประวัติศาสตร์อิสลาม
            </p>
            <p className="font-cinzel text-gold/70 text-sm tracking-widest">
              ศตวรรษที่ 9-10 ค.ศ. | Kufic Gold on Blue Vellum | Fatimid
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
            ภาพหน้าต้นฉบับอัลกุรอานสีน้ำเงิน
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-card overflow-hidden shadow-card border border-gold/20 w-full">
              <Image
                src="/manuscripts/quran/blue-quran/blq1.jpg"
                alt="หน้าต้นฉบับอัลกุรอานสีน้ำเงิน — หมึกทองบนหนังสีน้ำเงิน"
                width={1920}
                height={1307}
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
                  รอการอัปโหลดภาพ blq1.jpg
                </p>
              </div>
              <div className="p-4 bg-ink/5">
                <p className="font-cinzel text-sm text-ink">
                  หน้าต้นฉบับอัลกุรอานสีน้ำเงิน — หมึกทองบนหนังสีน้ำเงิน
                </p>
              </div>
            </div>

            <div className="rounded-card overflow-hidden shadow-card border border-gold/20 w-full">
              <Image
                src="/manuscripts/quran/blue-quran/blq2.jpg"
                alt="รายละเอียดอักษรคูฟิกสีทองบนพื้นน้ำเงินเข้ม"
                width={1920}
                height={1457}
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
                  รอการอัปโหลดภาพ blq2.jpg
                </p>
              </div>
              <div className="p-4 bg-ink/5">
                <p className="font-cinzel text-sm text-ink">
                  รายละเอียดอักษรคูฟิกสีทองบนพื้นน้ำเงินเข้ม
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
              { label: "อายุ", value: "ศตวรรษที่ 9-10 ค.ศ. (ศตวรรษที่ 3-4 ฮ.ศ.)" },
              { label: "อักษร", value: "Kufic Script ด้วยหมึกทองและเงิน" },
              { label: "หน้า", value: "ชิ้นส่วนกระจายในหลายพิพิธภัณฑ์" },
              { label: "วัสดุ", value: "หนังสัตว์ย้อมสีน้ำเงินด้วยครามอินดิโก" },
              { label: "สถานที่", value: "National Museum of Bardo, Tunisia และอื่นๆ" },
              { label: "ราชวงศ์", value: "ฟาฏิมียะฮ์ หรืออับบาซิด (ยังถกเถียง)" },
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
            <p className="font-pridi text-ink/80 leading-relaxed">
              หนึ่งในต้นฉบับที่สวยงามที่สุดในประวัติศาสตร์อิสลาม เขียนด้วยหมึกทองคำและเงิน
              บนหนังย้อมสีน้ำเงินเข้มด้วยครามอินดิโก เชื่อว่าสร้างในตูนิเซียยุคราชวงศ์ฟาฏิมียะฮ์หรืออับบาซิด
              ชิ้นส่วนกระจายอยู่ในพิพิธภัณฑ์หลายแห่งทั่วโลก รวมถึง National Museum of Bardo ตูนิเซีย,
              Brooklyn Museum, Metropolitan Museum of Art นิวยอร์ก และ Chester Beatty Library ดับลิน
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
              href="https://www.islamic-awareness.org/quran/text/mss/"
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
