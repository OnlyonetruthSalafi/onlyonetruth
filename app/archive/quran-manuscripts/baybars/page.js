"use client";

import Link from "next/link";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";

export default function BaybarsManuscript() {
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
            <span className="text-gold">Sultan Baybars Quran</span>
          </nav>

          <div className="text-center">
            <h1 className="font-cinzel text-3xl md:text-5xl text-paper-white mb-3 leading-tight">
              Sultan Baybars Quran
            </h1>
            <h2 className="font-cinzel text-xl md:text-2xl text-gold mb-6">
              BL Add MS 22406–22412 — อัลกุรอานอักษรทองทั้งเล่มหนึ่งเดียวของโลก
            </h2>
            <div className="mx-auto h-px w-24 bg-gold/50 mb-6" />
            <p className="font-pridi text-lg text-paper-white/80 max-w-2xl mx-auto leading-relaxed mb-4">
              อัลกุรอานชุด 7 เล่มกว่า 2,000 หน้า เขียนด้วยอักษร Thuluth สีทองทั้งเล่ม
              อัลกุรอานระบุปีที่เก่าแก่ที่สุดของยุคมัมลูก
            </p>
            <p className="font-cinzel text-gold/70 text-sm tracking-widest">
              ค.ศ. 1304–1306 (704–705 ฮ.ศ.) | Gold Thuluth | British Library, London
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
            ภาพหน้าต้นฉบับสุลต่านไบบัรส์ หอสมุดแห่งชาติอังกฤษ ลอนดอน (ภาพ: Wikimedia Commons)
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-card overflow-hidden shadow-card border border-gold/20 w-full">
              <img
                src="/manuscripts/quran/baybars/bay1.jpg"
                alt="หน้าคู่ซูเราะฮ์อัลฟาติหะฮ์ อักษร Thuluth สีทอง (BL Add Ms 22406, ff.2v-3r)"
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
                  รอการอัปโหลดภาพ bay1.jpg
                </p>
              </div>
              <div className="p-4 bg-ink/5">
                <p className="font-cinzel text-sm text-ink">
                  หน้าคู่ซูเราะฮ์อัลฟาติหะฮ์ — อักษร Thuluth สีทองตัดขอบดำ (ff.2v-3r)
                </p>
              </div>
            </div>

            <div className="rounded-card overflow-hidden shadow-card border border-gold/20 w-full">
              <img
                src="/manuscripts/quran/baybars/bay2.jpg"
                alt="หน้าปกประดับทอง-น้ำเงินของเล่มที่หนึ่ง (BL Add Ms 22406, ff.1v-2r)"
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
                  รอการอัปโหลดภาพ bay2.jpg
                </p>
              </div>
              <div className="p-4 bg-ink/5">
                <p className="font-cinzel text-sm text-ink">
                  หน้าปกคู่ประดับทอง-น้ำเงิน ลายดาวแปดแฉก ของเล่มที่หนึ่ง (ff.1v-2r)
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
              { label: "อายุ", value: "ค.ศ. 1304–1306 (704–705 ฮ.ศ.) — จัดทำที่ไคโร อียิปต์" },
              { label: "อักษร", value: "Thuluth สีทองตัดขอบดำทั้งเล่ม หัวซูเราะฮ์หมึกแดง" },
              { label: "จำนวน", value: "7 เล่ม รวมกว่า 2,000 หน้า" },
              { label: "ผู้คัดลอก", value: "มุฮัมมัด อิบนุลวาฮีด (Muhammad ibn al-Wahid)" },
              { label: "ช่างประดับ", value: "ทีม 3 คน: มุฮัมมัด อิบนุ มุบาดิร, อบูบักร์ ซันดัล (หัวหน้าทีม) และอัยดุฆดี อิบนุ อับดิลลาฮ์" },
              { label: "ผู้อุปถัมภ์", value: "อามีร์รุกนุดดีน ไบบัรส์ อัลญาชนากีร (ต่อมาคือสุลต่านไบบัรส์ที่ 2)" },
              { label: "สถานที่", value: "British Library, London" },
              { label: "ทะเบียน", value: "Add MS 22406–22412 (ซื้อเข้า British Museum ปี 1858)" },
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
              อัลกุรอานสุลต่านไบบัรส์เป็นอัลกุรอานระบุปีที่เก่าแก่ที่สุดของยุคมัมลูก
              จัดทำที่กรุงไคโรระหว่างปี 704–705 ฮ.ศ. (ค.ศ. 1304–1306)
              ตามบัญชาของอามีร์รุกนุดดีน ไบบัรส์ อัลญาชนากีร
              ผู้ต่อมาขึ้นครองราชย์เป็นสุลต่านไบบัรส์ที่ 2 แห่งราชวงศ์มัมลูก
              แบ่งเป็น 7 เล่ม รวมกว่า 2,000 หน้า
            </p>
            <p className="font-pridi text-ink/80 leading-relaxed mb-4">
              ความพิเศษที่ไม่มีใครเหมือนคือ ข้อความทั้งหมดเขียนด้วยอักษร Thuluth
              สีทองตัดขอบด้วยหมึกดำตลอดทั้งชุด — เป็นอัลกุรอานเล่มเดียวที่รู้จักกันว่าเขียนด้วยทองทั้งเล่มในลักษณะนี้
              หัวซูเราะฮ์เขียนทับด้วยหมึกแดง งานคัดลอกเป็นของมุฮัมมัด อิบนุลวาฮีด นักอักษรวิจิตรชั้นครูแห่งไคโร
              ส่วนการประดับตกแต่งหน้าปกลายดาวแปดแฉกทอง-น้ำเงินและกรอบลวดลายเถาไม้
              เป็นผลงานของทีมช่างสามคนนำโดยอบูบักร์ ซันดัล ช่างประดับเอกแห่งยุค
              โดยลายมือชื่อของช่างปรากฏใน colophon ของเล่มที่หนึ่ง (อิบนุ มุบาดิร) และเล่มที่สาม (ซันดัล)
            </p>
            <p className="font-pridi text-ink/80 leading-relaxed">
              แหล่งประวัติศาสตร์อาหรับกล่าวถึงอัลกุรอานชุดนี้ไว้ แต่ไม่ชัดเจนว่าจัดทำขึ้นเพื่อถวายมัสยิดอัลฮากิม
              ที่ไบบัรส์รับผิดชอบการบูรณะ หรือเพื่อมอบให้สถาบันศาสนาที่ท่านก่อตั้ง
              British Museum ซื้อต้นฉบับชุดนี้จากร้านหนังสือโบราณ T & W Boone เมื่อวันที่ 12 มิถุนายน 1858
              ปัจจุบันเก็บรักษาที่ British Library และได้รับการแปลงเป็นดิจิทัลครบทั้ง 7 เล่มในปี 2018
              ให้สาธารณชนเข้าชมได้ทางออนไลน์
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
              href="https://facsimile-editions.com/bq/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary font-pridi text-center"
            >
              อ่านข้อมูลต้นฉบับ (Facsimile Editions) ↗
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
