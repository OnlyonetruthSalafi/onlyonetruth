"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";

export default function SamarqandManuscript() {
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
            <span className="text-gold">Samarqand (Tashkent) Quran</span>
          </nav>

          <div className="text-center">
            <h1 className="font-cinzel text-3xl md:text-5xl text-paper-white mb-3 leading-tight">
              Samarqand (Tashkent) Quran Manuscript
            </h1>
            <h2 className="font-cinzel text-xl md:text-2xl text-gold mb-6">
              The 'Qur'ān Of ʿUthmān' At Tashkent, Uzbekistan
            </h2>
            <div className="mx-auto h-px w-24 bg-gold/50 mb-6" />
            <p className="font-pridi text-lg text-paper-white/80 max-w-2xl mx-auto leading-relaxed mb-4">
              ต้นฉบับอัลกุรอานขนาดมหึมา 378 หน้า บนหนังสัตว์หนา เก็บรักษาที่ทาชเคนต์ อุซเบกิสถาน
            </p>
            <p className="font-cinzel text-gold/70 text-sm tracking-widest">
              ศตวรรษที่ 2 ฮ.ศ. / ค.ศ. 640-765 (Carbon-14) | Kufic Script | 378 Folios
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
            ภาพหน้าต้นฉบับซามาร์คันด์ ทาชเคนต์ อุซเบกิสถาน
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-card overflow-hidden shadow-card border border-gold/20 w-full">
              <Image
                src="/manuscripts/quran/samarqand/sam1.jpg"
                alt="หน้าต้นฉบับซามาร์คันด์ — อักษรคูฟิกบนหนังสัตว์"
                width={544}
                height={374}
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
                  รอการอัปโหลดภาพ sam1.jpg
                </p>
              </div>
              <div className="p-4 bg-ink/5">
                <p className="font-cinzel text-sm text-ink">
                  หน้าต้นฉบับซามาร์คันด์ — อักษรคูฟิกบนหนังสัตว์
                </p>
              </div>
            </div>

            <div className="rounded-card overflow-hidden shadow-card border border-gold/20 w-full">
              <Image
                src="/manuscripts/quran/samarqand/sam2.jpg"
                alt="รายละเอียดการตกแต่งและเครื่องหมายอายะห์"
                width={421}
                height={465}
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
                  รอการอัปโหลดภาพ sam2.jpg
                </p>
              </div>
              <div className="p-4 bg-ink/5">
                <p className="font-cinzel text-sm text-ink">
                  รายละเอียดการตกแต่งและเครื่องหมายอายะห์
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INFO + HISTORY + DISCUSSION + SCRIPT */}
      <section className="py-16 bg-paper-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              { label: "อายุต้นฉบับ", value: "ศตวรรษที่ 2 ฮ.ศ. — Carbon-14 ระบุ 68% ความน่าจะเป็น ค.ศ. 640-765 และ 95% ความน่าจะเป็น ค.ศ. 595-855 (มหาวิทยาลัยอ็อกซ์ฟอร์ด)" },
              { label: "รูปแบบอักษร", value: "Kufic Script ขนาดใหญ่ เส้นตรง งดงาม สัดส่วนแน่นอน ไม่มีเครื่องหมายสระและตกแต่ง" },
              { label: "จำนวนหน้า", value: "378 หน้าที่หลงเหลือ จากต้นฉบับเดิมที่ Altikulaç ประมาณว่ามี 950 หน้า (353 ในฉบับ Pisarev + หน้าที่กระจายในคอลเลกชันต่างๆ)" },
              { label: "ขนาด", value: "53 × 68 เซนติเมตร พื้นที่เขียน 44 × 55 ซม. บนหนังสัตว์หนาแข็งแรง (Plano copy)" },
              { label: "สถานที่เก็บรักษาหลัก", value: "Khast Imam Library, Tashkent, Uzbekistan (ประมาณ 1/3 ของต้นฉบับ) ส่วนที่เหลือกระจายใน Christie's, Museum of Islamic Art Doha, Metropolitan Museum NY, Aga Khan Museum" },
              { label: "ฉบับตีพิมพ์", value: "Pisarev Facsimile Edition 1905 (50 ชุด พิมพ์จำหน่าย 25 ชุด) และ Facsimile ใหม่ปี 2004 เคยจัดแสดงที่ British Library ปี 2007" },
            ].map((item) => (
              <div key={item.label} className="card-glass p-5">
                <p className="font-cinzel text-gold text-sm mb-1">{item.label}</p>
                <p className="font-pridi text-ink">{item.value}</p>
              </div>
            ))}
          </div>

          {/* ประวัติของต้นฉบับ */}
          <div className="mb-10">
            <h3 className="font-cinzel text-xl text-ink mb-4">ประวัติของต้นฉบับ</h3>
            <div className="space-y-4">
              <p className="font-pridi text-ink/80 leading-relaxed">
                ต้นฉบับนี้เป็นหนึ่งในมุศฮัฟที่มีชื่อเสียงและถูกศึกษามากที่สุดในโลก
                ในช่วงปลายศตวรรษที่ 19 ต้นฉบับอยู่ที่เซนต์ปีเตอร์สเบิร์ก รัสเซีย
                ซึ่งนักบูรพาคดีรัสเซีย A.N. Shebunin ได้ศึกษาอย่างละเอียด
                เขาตรวจสอบลักษณะพิเศษของการสะกดและให้คำอธิบายอย่างครบถ้วน
                ต่อมาในปี ค.ศ. 1905 Pisarev (หรือ Pissareff) ได้จัดพิมพ์ฉบับ Facsimile
                โดยถ่ายภาพและพยายามลากตามเส้นอักษรในหน้าที่เลือนหายไปจากการที่ผู้คงกด
                อย่างไรก็ตาม การลากเส้นใหม่ของ Pisarev ในหน้าที่ซีดจางนำมาซึ่งข้อผิดพลาดหลายจุด
                และนักวิชาการจึงต้องใช้ต้นฉบับนี้ด้วยความระมัดระวัง
              </p>
              <p className="font-pridi text-ink/80 leading-relaxed">
                ในปี ค.ศ. 2004 นักวิชาการจากมหาวิทยาลัยอิสลาม ทาชเคนต์
                ได้จัดทำ Facsimile ฉบับใหม่โดยเขียนด้วยมือบนหนังสัตว์
                สำเนาที่งดงามและมีเอกลักษณ์นี้ถูกส่งให้หอสมุดบริติชยืมไปจัดแสดง
                ในนิทรรศการ "Sacred" ที่เปิดตั้งแต่วันที่ 27 เมษายน ถึง 23 กันยายน 2007
                ก่อนจะถูกส่งคืนมหาวิทยาลัยอิสลาม ทาชเคนต์ในปัจจุบัน
                ส่วนฉบับ Pisarev ปี 1905 ได้ถูกสแกนดิจิทัลและรวมอยู่ใน
                ฐานข้อมูล Corpus Coranicum ซึ่งสามารถเข้าชมได้ทางออนไลน์
              </p>
              <p className="font-pridi text-ink/80 leading-relaxed">
                เนื่องจากต้นฉบับไม่สมบูรณ์ จึงไม่แปลกที่หน้าจำนวนหนึ่งจะปรากฏขึ้น
                ในการประมูลหรือถูกขายในตลาดเอกชน สี่หน้าจากต้นฉบับทาชเคนต์
                ถูกขายที่ Christie's ลอนดอน ในปี ค.ศ. 1992 และ 1993
                ปัจจุบันหน้าเหล่านั้นกระจายอยู่ในพิพิธภัณฑ์ Museum of Islamic Art โดฮา
                Metropolitan Museum of Art นิวยอร์ก และ Aga Khan Museum
              </p>
            </div>
          </div>

          {/* คำถามสำคัญ */}
          <div className="mb-10">
            <h3 className="font-cinzel text-xl text-ink mb-4">
              คำถามสำคัญ: เป็นมุศฮัฟของเคาะลีฟะฮ์อุษมานจริงหรือไม่?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card-glass p-6 bg-red-950/30 border-red-800/30">
                <h4 className="font-cinzel text-red-400 text-base mb-4">
                  ข้อสรุปของ Islamic Awareness
                </h4>
                <p className="font-pridi text-ink/80 leading-relaxed text-sm">
                  Islamic Awareness สรุปชัดเจนว่า คำตอบคือ ไม่ใช่
                  เพราะรูปแบบอักษรคูฟิกในต้นฉบับนี้แสดงให้เห็นถึงอักษรขนาดใหญ่ ตรง งดงาม
                  และมีสัดส่วนที่แน่นอน ซึ่งเป็นลักษณะที่ใช้ในยุคอุมัยยะฮ์และหลังจากนั้น
                  นักวิชาการ Ṣalāḥ al-Dīn al-Munajjid ก็ไม่ถือว่าต้นฉบับนี้มาจากยุคเคาะลีฟะฮ์อุษมาน
                </p>
              </div>
              <div className="card-glass p-6 bg-emerald-950/30 border-emerald-700/30">
                <h4 className="font-cinzel text-emerald-400 text-base mb-4">
                  ความสำคัญที่ไม่เปลี่ยนแปลง
                </h4>
                <p className="font-pridi text-ink/80 leading-relaxed text-sm">
                  แม้จะไม่ใช่สำเนาของอุษมานโดยตรง ต้นฉบับนี้ยังคงเป็นพยานสำคัญของอัลกุรอานยุคแรก
                  ข้อความที่ปรากฏสอดคล้องกับอัลกุรอานที่มุสลิมทั่วโลกอ่านอยู่ในปัจจุบัน
                  ยืนยันความคงทนของข้อความแม้ในต้นฉบับที่มีอายุกว่า 1,200 ปี
                </p>
              </div>
            </div>
          </div>

          {/* รูปแบบอักษรและการตกแต่ง */}
          <div className="mb-10">
            <h3 className="font-cinzel text-xl text-ink mb-4">รูปแบบอักษรและการตกแต่ง</h3>
            <p className="font-pridi text-ink/80 leading-relaxed">
              ต้นฉบับนี้เป็นมุศฮัฟอัลกุรอานขนาดมหึมาบนหนังสัตว์
              แสดงอักษรคูฟิกที่งดงามโดยไม่มีเครื่องหมายสระและตกแต่ง
              การสิ้นสุดอายะห์บ่งบอกด้วยแผงเส้นทแยงมุมขนาดเล็ก
              อายะห์ที่ 10 ถูกระบุด้วยเหรียญสี่เหลี่ยมประดับด้วยสีน้ำเงิน เขียว แดง
              และแมงกานีสพร้อมลวดลายดาว
              หนังสัตว์เปราะบางมากจากความเก่าแก่ จึงมีการจำกัดการเข้าถึง
              และป้องกันจากแสง โดยมีสำเนา Facsimile ไว้สำหรับการค้นคว้าแทน
            </p>
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
                    <th className="p-3 text-left font-cinzel">หน้า</th>
                    <th className="p-3 text-left font-cinzel">ซูเราะฮ์</th>
                    <th className="p-3 text-left font-cinzel">แหล่งตีพิมพ์</th>
                    <th className="p-3 text-left font-cinzel">หมายเหตุ</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["1-32", "อัลบะกอเราะฮ์ 2:7-2:177", "Pisarev, 1905", "หน้ากระดาษ ff. 1-2r, 8, 13-15"],
                    ["46-57", "อาลอิมรอน 3:36-3:92", "Pisarev, 1905", "—"],
                    ["113-189", "อัลมาอิดะฮ์ 5:85 — อัลอะอ์รอฟ 7:106", "Pisarev, 1905", "มีหน้ากระดาษทดแทนหลายหน้า"],
                    ["231-236", "อัลอิสรา 17:1-17:48", "Pisarev, 1905", "—"],
                    ["237-257", "อัลอิสรา 17:56 — อัลกะฮ์ฟ 18:77", "Pisarev, 1905", "—"],
                    ["261-286", "มัรยัม 19:3 — ฏอฮา 20:135", "Pisarev, 1905", "—"],
                  ].map(([page, surah, source, note]) => (
                    <tr
                      key={page}
                      className="border-b border-gold/10 hover:bg-gold/5"
                    >
                      <td className="p-3 font-cinzel text-gold">{page}</td>
                      <td className="p-3">{surah}</td>
                      <td className="p-3 text-ink-muted">{source}</td>
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

          {/* หมายเหตุสำคัญ */}
          <div
            className="mt-6 border-l-4 border-gold p-5 rounded-card"
            style={{ background: '#3E2723' }}
          >
            <p className="font-cinzel text-gold text-sm font-semibold mb-2 tracking-wide">
              ** หมายเหตุสำคัญ
            </p>
            <p className="font-pridi text-paper-white leading-relaxed">
              ความแตกต่างหรือข้อสังเกตใดๆ ที่พบในต้นฉบับนี้
              <strong className="text-gold"> ไม่ส่งผลให้อัลกุรอานถูกบิดเบือนแต่อย่างใด</strong>
              เนื่องจากอัลกุรอานไม่ได้พึ่งพาการบันทึกเป็นลายลักษณ์อักษรเพียงอย่างเดียว
              แต่ถูกท่องจำ<strong className="text-gold"> ทุกอักษร ทุกคำ</strong>
              โดยบรรดาฮาฟิซอย่างต่อเนื่องในทุกยุคทุกสมัย
              นับตั้งแต่สมัยท่านนบีมุฮัมมัด (ซ.ล.) จวบจนปัจจุบัน
              <span className="block mt-3 font-cinzel text-gold/70 text-xs tracking-widest">
                "แท้จริง เราได้ประทานอัล-ซิกร์ลงมา และแท้จริง เราเป็นผู้พิทักษ์รักษามันไว้" — อัลกุรอาน 15:9
              </span>
            </p>
          </div>

          {/* แหล่งอ้างอิง */}
          <div className="mt-10 border-t border-gold/20 pt-6">
            <p className="font-cinzel text-gold/70 text-xs mb-3 tracking-widest">แหล่งอ้างอิง</p>
            <ul className="font-pridi text-ink-muted text-xs space-y-1 leading-relaxed">
              <li>Islamic Awareness, "The Qur'ān Of ʿUthmān At Tashkent (Samarqand)", www.islamic-awareness.org/quran/text/mss/samarqand</li>
              <li>T. Altikulaç, <em>al-Muṣḥaf al-Sharīf</em>, IRCICA, Istanbul, 2007</li>
              <li>A.N. Shebunin, "Kuficheskij Koran Imp. S.-Peterburgskoj Publichnoj Biblioteki", 1891</li>
              <li>S.I. Pisarev (Pissareff), Facsimile Edition, Tashkent, 1905</li>
              <li>Carbon-14 dating results via Oxford University</li>
            </ul>
          </div>

          {/* ปุ่ม */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a
              href="https://www.islamic-awareness.org/quran/text/mss/samarqand"
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
