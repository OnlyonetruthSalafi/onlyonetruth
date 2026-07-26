"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";

export default function TimuridManuscript() {
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
            <span className="text-gold">Timurid Quran Manuscript</span>
          </nav>

          <div className="text-center">
            <h1 className="font-cinzel text-3xl md:text-5xl text-paper-white mb-3 leading-tight">
              Timurid Quran Manuscript
            </h1>
            <h2 className="font-cinzel text-xl md:text-2xl text-gold mb-6">
              ต้นฉบับอัลกุรอานยุคติมูริด (อักโกยุนลู) — ผลงานชิ้นเอกของศิลปะอิสลาม
            </h2>
            <div className="mx-auto h-px w-24 bg-gold/50 mb-6" />
            <p className="font-pridi text-lg text-paper-white/80 max-w-2xl mx-auto leading-relaxed mb-4">
              ต้นฉบับสมบูรณ์ 534 หน้า บนกระดาษย้อมสีโรยผงทองจากจีนสมัยราชวงศ์หมิง
              ต้นฉบับอัลกุรอานที่มีราคาประมูลสูงที่สุดในโลกเมื่อปี ค.ศ. 2020
            </p>
            <p className="font-cinzel text-gold/70 text-sm tracking-widest">
              ศตวรรษที่ 15 ค.ศ. | Naskh & Thuluth | Private Collection (Christie's 2020)
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
            ภาพหน้าต้นฉบับติมูริดบนกระดาษโรยทองสมัยราชวงศ์หมิง (ภาพ: Wikimedia Commons / Christie's)
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-card overflow-hidden shadow-card border border-gold/20 w-full">
              <Image
                src="/manuscripts/quran/timurid/tim1.jpg"
                alt="หน้าต้นฉบับติมูริด — อักษร Naskh บนกระดาษย้อมสีโรยผงทองจากจีนสมัยราชวงศ์หมิง"
                width={1920}
                height={1273}
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
                  รอการอัปโหลดภาพ tim1.jpg
                </p>
              </div>
              <div className="p-4 bg-ink/5">
                <p className="font-cinzel text-sm text-ink">
                  หน้ากระดาษโรยแผ่นทอง — อักษร Naskh พร้อมเครื่องหมายจบอายะฮ์ดอกไม้ทอง
                </p>
              </div>
            </div>

            <div className="rounded-card overflow-hidden shadow-card border border-gold/20 w-full">
              <Image
                src="/manuscripts/quran/timurid/tim2.jpg"
                alt="หน้าเปิดประดับทองอย่างวิจิตร — ซูเราะฮ์อัลฟาติหะฮ์และอัลบะเกาะเราะฮ์ หัวซูเราะฮ์อักษร Thuluth"
                width={1920}
                height={1336}
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
                  รอการอัปโหลดภาพ tim2.jpg
                </p>
              </div>
              <div className="p-4 bg-ink/5">
                <p className="font-cinzel text-sm text-ink">
                  หน้าเปิดประดับทองอย่างวิจิตร — ซูเราะฮ์อัลฟาติหะฮ์และอัลบะเกาะเราะฮ์
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
              { label: "อายุ", value: "ศตวรรษที่ 15 ค.ศ. (ผลิตในอิหร่าน)" },
              { label: "อักษร", value: "Naskh (เนื้อหา) และ Thuluth (หัวซูเราะฮ์และญุซอ์)" },
              { label: "จำนวนหน้า", value: "534 หน้า (สมบูรณ์)" },
              { label: "ขนาด", value: "22.6 × 15.5 ซม." },
              { label: "วัสดุ", value: "กระดาษย้อมสีโรยผงทอง ผลิตในจีนสมัยราชวงศ์หมิง ผสม Lead White เนื้อนุ่มดุจแพรไหม" },
              { label: "สีของกระดาษ", value: "ชมพู ม่วง ครีม ส้ม ฟ้า และเทอร์ควอยซ์" },
              { label: "สถานที่", value: "คอลเลกชันส่วนบุคคล (ประมูลผ่าน Christie's ลอนดอน 25 มิ.ย. 2020)" },
              { label: "ราชวงศ์", value: "ติมูริด (Timurid) หรือ อักโกยุนลู (Aq Qoyunlu)" },
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
              ต้นฉบับอัลกุรอานฉบับสมบูรณ์หนา 534 หน้า ขนาด 22.6 × 15.5 ซม. คัดลอกในอิหร่านช่วงศตวรรษที่ 15
              สมัยราชวงศ์ติมูริดหรืออักโกยุนลู (จึงเรียกอีกชื่อว่า "Aqquyunlu Quran") เนื้อหาเขียนด้วยอักษร Naskh
              ส่วนหัวซูเราะฮ์และหัวญุซอ์ทั้ง 30 ส่วนเขียนด้วยอักษร Thuluth สีทอง ไม่ปรากฏชื่อผู้คัดลอก
            </p>
            <p className="font-pridi text-ink/80 leading-relaxed mb-4">
              จุดเด่นที่ทำให้ต้นฉบับนี้เป็นเอกในโลกคือกระดาษ — เป็นกระดาษย้อมสีโรยผงทองที่ผลิตในจีนสมัยราชวงศ์หมิง
              และนำเข้ามายังอิหร่านผ่านเส้นทางสายไหม เนื้อกระดาษผสม Lead White จึงนุ่มเนียนดุจแพรไหม
              แต่ละหน้าย้อมสีต่างกันทั้งชมพู ม่วง ครีม ส้ม ฟ้า และเทอร์ควอยซ์
              บางหน้ายังประดับภาพวาดทิวทัศน์ พรรณไม้ และนกด้วยสีทองตามแบบจิตรกรรมจีน
              สะท้อนการแลกเปลี่ยนศิลปวัฒนธรรมระหว่างโลกอิสลามกับจีนในยุคนั้นอย่างงดงาม
            </p>
            <p className="font-pridi text-ink/80 leading-relaxed">
              เมื่อวันที่ 25 มิถุนายน ค.ศ. 2020 ต้นฉบับนี้ถูกประมูลที่ Christie's กรุงลอนดอน
              ได้ราคาสูงถึง 7,016,250 ปอนด์ — มากกว่าราคาประเมินกว่าสิบสองเท่า
              นับเป็นต้นฉบับอัลกุรอานที่มีราคาประมูลสูงที่สุดในโลก ณ เวลานั้น
              ปัจจุบันอยู่ในคอลเลกชันส่วนบุคคล ทั้งนี้นักวิชาการจำนวนหนึ่งได้วิจารณ์การประมูลดังกล่าว
              ด้วยความกังวลว่ามรดกทางประวัติศาสตร์ชิ้นสำคัญจะหลุดพ้นจากการเข้าถึงของสาธารณชนและการศึกษาวิจัย
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
              href="https://en.wikipedia.org/wiki/Timurid_Quran_manuscript"
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
