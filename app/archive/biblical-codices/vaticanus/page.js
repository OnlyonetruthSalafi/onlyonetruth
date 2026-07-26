"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";

export default function VaticanusManuscript() {
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
              href="/archive/biblical-codices"
              className="hover:text-gold transition-colors"
            >
              Biblical Codices
            </Link>
            <span className="text-gold/40">›</span>
            <span className="text-gold">Codex Vaticanus</span>
          </nav>

          <div className="text-center">
            <h1 className="font-cinzel text-3xl md:text-5xl text-paper-white mb-3 leading-tight">
              Codex Vaticanus (B/03)
            </h1>
            <h2 className="font-cinzel text-xl md:text-2xl text-gold mb-6">
              The Most Complete Early Biblical Manuscript
            </h2>
            <div className="mx-auto h-px w-24 bg-gold/50 mb-6" />
            <p className="font-pridi text-lg text-paper-white/80 max-w-2xl mx-auto leading-relaxed mb-4">
              ต้นฉบับที่ครอบคลุมทั้งพันธสัญญาเก่าและใหม่เกือบสมบูรณ์ เก็บรักษาที่นครรัฐวาติกัน
            </p>
            <p className="font-cinzel text-gold/70 text-sm tracking-widest">
              ต้นศตวรรษที่ 4 ค.ศ. | Greek Uncial | Vatican Library
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
            ภาพหน้าต้นฉบับจาก Codex Vaticanus ห้องสมุดวาติกัน
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* vat1 */}
            <div className="rounded-card overflow-hidden shadow-card border border-gold/20 w-full">
              <Image
                src="/manuscripts/bible/vaticanus/vat1.jpg"
                alt="Codex Vaticanus Manuscript Page"
                width={600}
                height={620}
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
                  รอการอัปโหลดภาพ vat1.jpg
                </p>
              </div>
              <div className="p-4 bg-ink/5">
                <p className="font-cinzel text-sm text-ink">
                  หน้าต้นฉบับ — 2 เธสะโลนิกา 3:11-18 ถึง ฮีบรู 1:1-2:2
                </p>
              </div>
            </div>

            {/* vat2 */}
            <div className="rounded-card overflow-hidden shadow-card border border-gold/20 w-full">
              <Image
                src="/manuscripts/bible/vaticanus/vat2.jpg"
                alt="Codex Vaticanus Greek Uncial Detail"
                width={765}
                height={700}
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
                  รอการอัปโหลดภาพ vat2.jpg
                </p>
              </div>
              <div className="p-4 bg-ink/5">
                <p className="font-cinzel text-sm text-ink">
                  ท้ายพระกิตติคุณลูกา — อักษร Greek Uncial
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
              { label: "อายุต้นฉบับ", value: "ต้นศตวรรษที่ 4 ค.ศ. (ก่อนหรือร่วมสมัย Sinaiticus)" },
              { label: "รูปแบบอักษร", value: "Greek Uncial 3 คอลัมน์ต่อหน้า" },
              { label: "จำนวนหน้า", value: "759 หน้า (ขาดบางส่วนของพันธสัญญาเก่าและฮีบรู, ฟีลิปปี-วิวรณ์)" },
              { label: "ขนาด", value: "27 × 27 เซนติเมตร" },
              { label: "สถานที่เก็บรักษา", value: "Biblioteca Apostolica Vaticana, Vatican City" },
              { label: "หมายเลขทะเบียน", value: "Codex Vaticanus Graecus 1209" },
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
                Codex Vaticanus ถือเป็นหนึ่งในพยานหลักฐานสำคัญที่สุดของพระคัมภีร์คริสเตียน
                เก็บรักษาที่ห้องสมุดวาติกันมาตั้งแต่ปี ค.ศ. 1481 อย่างน้อย
              </p>
              <p className="font-pridi text-ink/80 leading-relaxed">
                Metzger และ Ehrman ระบุในหนังสือ The Text of the New Testament (2005) ว่า
                Vaticanus ร่วมกับ Sinaiticus เป็น &quot;the two most important manuscripts
                of the Greek Bible&quot;
              </p>
              <p className="font-pridi text-ink/80 leading-relaxed">
                Herman Hoskier ศึกษาพบว่ามีความแตกต่างระหว่าง Sinaiticus และ Vaticanus
                ถึง 3,036 จุดในพันธสัญญาใหม่ ซึ่งแสดงให้เห็นถึงความซับซ้อนของการส่งต่อข้อความ
              </p>
            </div>
          </div>

          {/* ความเชื่อมโยงกับ P75 */}
          <div className="mb-10">
            <h3 className="font-cinzel text-xl text-ink mb-4">
              ความเชื่อมโยงกับ P75 — สายข้อความที่ย้อนถึงศตวรรษที่ 2
            </h3>
            <div className="space-y-4">
              <p className="font-pridi text-ink/80 leading-relaxed">
                การค้นพบ Papyrus P75 (ราว ค.ศ. 175-225) เปลี่ยนสถานะของ Vaticanus
                อย่างสิ้นเชิง — การเทียบของ Carlo Martini และ Gordon Fee
                พบว่าข้อความสองฉบับตรงกันราว 87-92% ทั้งที่ห่างกันราว 150 ปี
                Philip Comfort สรุปใน The Text of the Earliest New Testament
                Greek Manuscripts ว่า Vaticanus ไม่ใช่ผลงานตรวจชำระของศตวรรษที่ 4
                ตามที่เคยเชื่อ แต่เป็นทายาทของสายการคัดลอกที่เคร่งครัด
                ซึ่งมีอยู่แล้วตั้งแต่ศตวรรษที่ 2 เป็นอย่างช้า
              </p>
              <p className="font-pridi text-ink/80 leading-relaxed">
                จุดที่นักวิชาการสนใจเป็นพิเศษคือเครื่องหมายจุดคู่ (distigmai)
                ที่ขอบหน้ากว่า 700 แห่ง ซึ่ง Philip Payne เสนอว่าเป็นเครื่องหมาย
                ที่ผู้ตรวจทานใช้ระบุตำแหน่งที่รู้ว่ามีข้อความแตกต่างระหว่างต้นแบบ
                — หากถูกต้อง นี่คือหลักฐานว่าผู้คัดลอกยุคโบราณเองก็ตระหนักถึง
                Textual Variants และบันทึกไว้อย่างเป็นระบบ
              </p>
            </div>
          </div>

          {/* ข้อความที่น่าสังเกต */}
          <div className="mb-10">
            <h3 className="font-cinzel text-xl text-ink mb-4">ข้อความที่น่าสังเกต</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card-glass p-6">
                <h4 className="font-cinzel text-gold text-sm font-semibold mb-3 tracking-wide">
                  ลักษณะทางข้อความ
                </h4>
                <ul className="font-pridi text-ink/80 text-sm space-y-2 leading-relaxed">
                  <li>
                    • มาระโกจบที่ 16:8 — และผู้คัดลอกเว้นคอลัมน์ว่างไว้หนึ่งคอลัมน์
                    ราวกับรู้ว่ามีตอนจบยาวอยู่แต่เลือกไม่คัดลอก
                  </li>
                  <li>• ไม่มีเรื่องหญิงล่วงประเวณี (ยอห์น 7:53-8:11)</li>
                  <li>• พันธสัญญาเดิมเป็นพยาน Septuagint ชั้นดีที่สุดฉบับหนึ่ง</li>
                </ul>
              </div>
              <div className="card-glass p-6">
                <h4 className="font-cinzel text-gold text-sm font-semibold mb-3 tracking-wide">
                  จากหวงห้ามสู่สาธารณะ
                </h4>
                <ul className="font-pridi text-ink/80 text-sm space-y-2 leading-relaxed">
                  <li>
                    • ศตวรรษที่ 19 วาติกันจำกัดการเข้าถึงอย่างเข้มงวด —
                    Tregelles ถูกค้นกระเป๋าก่อนเข้าชม และ Tischendorf ถูกจำกัดชั่วโมงอ่าน
                  </li>
                  <li>• ฉบับ facsimile ตีพิมพ์ ค.ศ. 1868-1881 และ 1889-1890</li>
                  <li>
                    • ปัจจุบันสแกนความละเอียดสูงทั้งเล่มเปิดให้ชมฟรีที่ DigiVatLib
                    (digi.vatlib.it)
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* แหล่งอ้างอิง */}
          <div className="border-t border-gold/20 pt-6 mb-10">
            <p className="font-cinzel text-gold/60 text-xs mb-3 tracking-widest">
              แหล่งอ้างอิง
            </p>
            <ul className="font-pridi text-ink/60 text-xs space-y-1 leading-relaxed">
              <li>
                [1] P.W. Comfort &amp; D.P. Barrett, <em>The Text of the Earliest New Testament Greek Manuscripts</em>, Tyndale House, 2001
              </li>
              <li>
                [2] G.D. Fee, &quot;P75, P66, and Origen: The Myth of Early Textual Recension in Alexandria&quot;, ใน <em>Studies in the Theory and Method of NT Textual Criticism</em>, Eerdmans, 1993
              </li>
              <li>
                [3] B.M. Metzger &amp; B.D. Ehrman, <em>The Text of the New Testament</em>, 4th ed., Oxford University Press, 2005, pp. 67-69
              </li>
              <li>
                [4] P.B. Payne &amp; P. Canart, &quot;The Originality of Text-Critical Symbols in Codex Vaticanus&quot;, <em>Novum Testamentum</em> 42 (2000)
              </li>
              <li>[5] DigiVatLib, Vat.gr.1209, digi.vatlib.it/view/MSS_Vat.gr.1209</li>
            </ul>
          </div>

          {/* ปุ่ม */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://digi.vatlib.it/view/MSS_Vat.gr.1209"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary font-pridi text-center"
            >
              อ่านบทความต้นฉบับ ↗
            </a>
            <Link
              href="/archive/biblical-codices"
              className="btn-outline font-pridi text-center"
            >
              ← กลับสู่คลัง Biblical Codices
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
