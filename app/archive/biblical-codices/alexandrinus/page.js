"use client";

import Link from "next/link";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";

export default function AlexandrinusManuscript() {
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
            <span className="text-gold">Codex Alexandrinus</span>
          </nav>

          <div className="text-center">
            <h1 className="font-cinzel text-3xl md:text-5xl text-paper-white mb-3 leading-tight">
              Codex Alexandrinus (A/02)
            </h1>
            <h2 className="font-cinzel text-xl md:text-2xl text-gold mb-6">
              A 5th Century Greek Bible from Alexandria
            </h2>
            <div className="mx-auto h-px w-24 bg-gold/50 mb-6" />
            <p className="font-pridi text-lg text-paper-white/80 max-w-2xl mx-auto leading-relaxed mb-4">
              หนึ่งใน Great Uncial Codices สี่ฉบับ มาจากอเล็กซานเดรียอียิปต์ ปัจจุบันอยู่ที่หอสมุดบริติช
            </p>
            <p className="font-cinzel text-gold/70 text-sm tracking-widest">
              ต้นศตวรรษที่ 5 ค.ศ. | Greek Uncial | British Library, London
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
            ภาพหน้าต้นฉบับจาก Codex Alexandrinus หอสมุดบริติช ลอนดอน
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* alx1 */}
            <div className="rounded-card overflow-hidden shadow-card border border-gold/20 w-full">
              <img
                src="/manuscripts/bible/alexandrinus/alx1.jpg"
                alt="Codex Alexandrinus Manuscript Page"
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
                  รอการอัปโหลดภาพ alx1.jpg
                </p>
              </div>
              <div className="p-4 bg-ink/5">
                <p className="font-cinzel text-sm text-ink">
                  หน้าต้นฉบับ Codex Alexandrinus
                </p>
              </div>
            </div>

            {/* alx2 */}
            <div className="rounded-card overflow-hidden shadow-card border border-gold/20 w-full">
              <img
                src="/manuscripts/bible/alexandrinus/alx2.jpg"
                alt="Codex Alexandrinus Decoration Detail"
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
                  รอการอัปโหลดภาพ alx2.jpg
                </p>
              </div>
              <div className="p-4 bg-ink/5">
                <p className="font-cinzel text-sm text-ink">
                  ท้ายพระกิตติคุณลูกา (f.41v) — ลวดลายตกแต่งสไตล์ Alexandria
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
              { label: "อายุต้นฉบับ", value: "ต้นศตวรรษที่ 5 ค.ศ." },
              { label: "รูปแบบอักษร", value: "Greek Uncial 2 คอลัมน์ต่อหน้า" },
              { label: "จำนวนหน้า", value: "773 หน้า (ขาดบางส่วน)" },
              { label: "ขนาด", value: "32 × 26 เซนติเมตร" },
              { label: "สถานที่เก็บรักษา", value: "British Library, London (ได้รับเป็นของขวัญจากสังฆราชอเล็กซานเดรียปี 1627)" },
              { label: "ลักษณะพิเศษ", value: "รวม 1 Clement และ 2 Clement ซึ่งไม่อยู่ในพระคัมภีร์มาตรฐาน" },
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
                Codex Alexandrinus เป็นหนึ่งใน Great Uncial Codices สี่ฉบับ
                ครอบคลุมพระคัมภีร์ทั้งเล่มเกือบสมบูรณ์ รวมถึงหนังสือนอกสารบบบางเล่ม
              </p>
              <p className="font-pridi text-ink/80 leading-relaxed">
                ที่น่าสังเกตคือต้นฉบับนี้รวม 1 Clement และ 2 Clement ซึ่งเป็นงานเขียน
                ของบรรดา Church Fathers ยุคแรกที่ไม่ได้รับการยอมรับเข้าในพระคัมภีร์
                แต่ถูกบางชุมชนคริสเตียนยุคแรกถือว่าเป็นพระคัมภีร์
                F.F. Bruce อ้างถึงในหนังสือ The New Testament Documents (1981)
              </p>
            </div>
          </div>

          {/* การเดินทางสู่ลอนดอน */}
          <div className="mb-10">
            <h3 className="font-cinzel text-xl text-ink mb-4">
              การเดินทางสู่ลอนดอน
            </h3>
            <div className="space-y-4">
              <p className="font-pridi text-ink/80 leading-relaxed">
                ต้นฉบับเชื่อกันตามจารึกภาษาอาหรับบนหน้าแรกว่ามาจากเมืองอเล็กซานเดรีย
                (ที่มาของชื่อ) ในปี ค.ศ. 1627 Cyril Lucar สังฆราชแห่งคอนสแตนติโนเปิล
                ผู้เคยดำรงตำแหน่งสังฆราชแห่งอเล็กซานเดรียมาก่อน
                ได้ถวายต้นฉบับเป็นของขวัญแด่พระเจ้าชาร์ลส์ที่ 1 แห่งอังกฤษ
                — มาถึงช้าเกินไปสำหรับผู้แปล King James Version (1611) เพียง 16 ปี
                ต้นฉบับเข้าสู่ British Museum เมื่อก่อตั้งในปี ค.ศ. 1753
                และเป็นต้นฉบับพระคัมภีร์เล่มใหญ่เล่มแรกที่นักวิชาการยุโรปเข้าถึงได้จริง
                ก่อนที่ Sinaiticus และ Vaticanus จะถูกเปิดเผยในอีกสองศตวรรษต่อมา
              </p>
            </div>
          </div>

          {/* ลักษณะข้อความ */}
          <div className="mb-10">
            <h3 className="font-cinzel text-xl text-ink mb-4">
              ลักษณะข้อความ — ต้นฉบับสองบุคลิก
            </h3>
            <div className="space-y-4">
              <p className="font-pridi text-ink/80 leading-relaxed">
                Alexandrinus เป็นกรณีศึกษาที่นักวิชาการเรียกว่าต้นฉบับ
                &quot;สองบุคลิก&quot; — ในพระกิตติคุณ ข้อความเป็นแบบ Byzantine
                ที่เก่าแก่ที่สุดเท่าที่มี ขณะที่กิจการ จดหมาย และวิวรณ์
                เป็นสาย Alexandrian ชั้นดี โดยเฉพาะในวิวรณ์
                นักวิชาการถือว่า A เป็นพยานที่ดีที่สุดเหนือกว่า Sinaiticus เสียอีก
                ลักษณะเช่นนี้ชี้ว่าผู้คัดลอกใช้ต้นแบบต่างสายกันในแต่ละหมวด
              </p>
              <p className="font-pridi text-ink/80 leading-relaxed">
                ในพันธสัญญาเดิม Alexandrinus เป็นพยาน Septuagint สายหลักคู่กับ
                Vaticanus — ฉบับพิมพ์ LXX ยุคแรก ๆ หลายฉบับใช้ A เป็นฐาน
                และยังบรรจุ Psalms of Solomon ไว้ในสารบัญ (แม้ตัวบทสูญหายแล้ว)
                กับบทเพลง Odes รวมทั้งจดหมายของ Athanasius ประกอบหน้าต้น
                สะท้อนรูปเล่มพระคัมภีร์ฉบับสมบูรณ์แบบอียิปต์ศตวรรษที่ 5
              </p>
            </div>
          </div>

          {/* แหล่งอ้างอิง */}
          <div className="border-t border-gold/20 pt-6 mb-10">
            <p className="font-cinzel text-gold/60 text-xs mb-3 tracking-widest">
              แหล่งอ้างอิง
            </p>
            <ul className="font-pridi text-ink/60 text-xs space-y-1 leading-relaxed">
              <li>
                [1] B.M. Metzger &amp; B.D. Ehrman, <em>The Text of the New Testament</em>, 4th ed., Oxford University Press, 2005, p. 67
              </li>
              <li>
                [2] F.F. Bruce, <em>The New Testament Documents: Are They Reliable?</em>, 6th ed., InterVarsity Press, 1981
              </li>
              <li>
                [3] F.G. Kenyon, <em>The Codex Alexandrinus in Reduced Photographic Facsimile</em>, British Museum, 1909
              </li>
              <li>
                [4] British Library, Royal MS 1 D V-VIII, bl.uk
              </li>
            </ul>
          </div>

          {/* ปุ่ม */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.bl.uk/collection-items/codex-alexandrinus"
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
