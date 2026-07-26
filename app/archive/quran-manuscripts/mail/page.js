"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";

export default function MailManuscript() {
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
            <span className="text-gold">Ma'il Qur'an</span>
          </nav>

          <div className="text-center">
            <h1 className="font-cinzel text-3xl md:text-5xl text-paper-white mb-3 leading-tight">
              Ma'il Qur'an
            </h1>
            <h2 className="font-cinzel text-xl md:text-2xl text-gold mb-6">
              BL Or. 2165 — หนึ่งในต้นฉบับอัลกุรอานที่เก่าแก่ที่สุดของโลก
            </h2>
            <div className="mx-auto h-px w-24 bg-gold/50 mb-6" />
            <p className="font-pridi text-lg text-paper-white/80 max-w-2xl mx-auto leading-relaxed mb-4">
              ต้นฉบับอักษรฮิญาซีรูปแบบ Ma'il ("เอียง") จากศตวรรษที่ 1 ฮ.ศ.
              121 หน้า ครอบคลุมซูเราะฮ์ 5–43 เก็บรักษาที่หอสมุดแห่งชาติอังกฤษ
            </p>
            <p className="font-cinzel text-gold/70 text-sm tracking-widest">
              ศตวรรษที่ 1 ฮ.ศ. | Ma'il / Hijazi Script | British Library, London
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
            ภาพหน้าต้นฉบับ Ma'il หอสมุดแห่งชาติอังกฤษ ลอนดอน (ภาพ: Wikimedia Commons)
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-card overflow-hidden shadow-card border border-gold/20 w-full">
              <Image
                src="/manuscripts/quran/mail/mail1.jpg"
                alt="หน้าต้นฉบับ Ma'il — อักษรฮิญาซีเอนขวา (BL Or 2165, f.77r)"
                width={1379}
                height={2000}
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
                  รอการอัปโหลดภาพ mail1.jpg
                </p>
              </div>
              <div className="p-4 bg-ink/5">
                <p className="font-cinzel text-sm text-ink">
                  หน้าต้นฉบับอักษร Ma'il เอนขวา ไม่มีจุดกำกับเสียง (f.77r)
                </p>
              </div>
            </div>

            <div className="rounded-card overflow-hidden shadow-card border border-gold/20 w-full">
              <Image
                src="/manuscripts/quran/mail/mail2.jpg"
                alt="หน้าต้นฉบับ Ma'il พร้อมเครื่องหมายจบอายะฮ์แบบจุด (BL Or 2165, f.76v)"
                width={1280}
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
                  รอการอัปโหลดภาพ mail2.jpg
                </p>
              </div>
              <div className="p-4 bg-ink/5">
                <p className="font-cinzel text-sm text-ink">
                  เครื่องหมายจบอายะฮ์เป็นกลุ่มขีดจุด (f.76v)
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
              { label: "อายุ", value: "ศตวรรษที่ 1 ฮ.ศ. (ราว ค.ศ. 700 หรือก่อนหน้า)" },
              { label: "อักษร", value: "Ma'il — อักษรฮิญาซียุคแรกที่ลำตัวอักษรเอนไปทางขวา" },
              { label: "จำนวนหน้า", value: "121 หน้าที่หอสมุดแห่งชาติอังกฤษ + 6 หน้าที่ปารีส (Arabe 328e) + 2 หน้าที่คูเวต (LNS 19 CAab)" },
              { label: "เนื้อหา", value: "ซูเราะฮ์ 5–43 ประมาณ 53% ของข้อความอัลกุรอาน" },
              { label: "ขนาด", value: "31.5 × 21.5 ซม. หน้าละ 21–27 บรรทัด" },
              { label: "วัสดุ", value: "หนังสัตว์ (Parchment)" },
              { label: "สถานที่", value: "British Library, London (ทะเบียน Or. 2165)" },
              { label: "แหล่งที่มา", value: "สันนิษฐานว่าคัดลอกในคาบสมุทรอาหรับ" },
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
              ต้นฉบับ Or. 2165 เป็นหนึ่งในต้นฉบับอัลกุรอานที่เก่าแก่ที่สุดในโลก
              นักวิชาการจัดให้อยู่ในศตวรรษที่ 1 ฮ.ศ. เขียนบนหนังสัตว์ด้วยอักษรที่เรียกว่า
              "Ma'il" (มาอิล — ภาษาอาหรับแปลว่า "เอียง") ซึ่งเป็นรูปแบบหนึ่งของตระกูลอักษรฮิญาซียุคแรก
              จุดเด่นคือลำตัวอักษรแนวตั้งเอนไปทางขวาอย่างชัดเจน
              ตามแบบฉบับการเขียนของแคว้นฮิญาซ (มักกะฮ์–มะดีนะฮ์) ก่อนที่อักษรคูฟิกทรงเหลี่ยมจะแพร่หลาย
            </p>
            <p className="font-pridi text-ink/80 leading-relaxed mb-4">
              ต้นฉบับเขียนแบบประหยัดเนื้อที่ หน้าละ 21–27 บรรทัด ไม่มีจุดแยกพยัญชนะ
              ไม่มีเครื่องหมายสระ และไม่มีการประดับหัวซูเราะฮ์
              คั่นแต่ละอายะฮ์ด้วยกลุ่มขีดจุดเรียบง่าย
              สะท้อนยุคที่การเขียนทำหน้าที่เพียงช่วยเตือนความจำของผู้ท่องจำ (ฮาฟิซ)
              ซึ่งเป็นผู้แบกรับตัวบทอัลกุรอานตัวจริงผ่านการสืบทอดแบบมุตะวาติร
            </p>
            <p className="font-pridi text-ink/80 leading-relaxed">
              ชิ้นส่วนของโคเด็กซ์เดียวกันนี้กระจายอยู่สามแห่ง — 121 หน้าที่หอสมุดแห่งชาติอังกฤษ
              6 หน้าที่หอสมุดแห่งชาติฝรั่งเศส (Arabe 328e) และ 2 หน้าในคอลเลกชันอัศเศาะบาห์ ประเทศคูเวต
              รวมครอบคลุมซูเราะฮ์ 5 ถึง 43 หรือประมาณ 53% ของข้อความอัลกุรอาน
              และข้อความทั้งหมดตรงตามโครงตัวบท (rasm) มาตรฐานอุษมานีที่ใช้กันทุกวันนี้
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
              href="https://www.islamic-awareness.org/quran/text/mss/hijazi"
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
