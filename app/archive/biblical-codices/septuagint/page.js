"use client";

import Link from "next/link";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";

export default function SeptuagintManuscript() {
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
            <span className="text-gold">Septuagint</span>
          </nav>

          <div className="text-center">
            <h1 className="font-cinzel text-3xl md:text-5xl text-paper-white mb-3 leading-tight">
              The Septuagint (LXX)
            </h1>
            <h2 className="font-cinzel text-xl md:text-2xl text-gold mb-6">
              พระคัมภีร์เก่ากรีก — ฉบับแปลที่เก่าแก่ที่สุดในโลก
            </h2>
            <div className="mx-auto h-px w-24 bg-gold/50 mb-6" />
            <p className="font-pridi text-lg text-paper-white/80 max-w-2xl mx-auto leading-relaxed mb-4">
              ฉบับแปลพระคัมภีร์ฮีบรูเป็นภาษากรีกที่เมืองอเล็กซานเดรีย อียิปต์
              เป็นพื้นฐานของพันธสัญญาเก่าในคริสต์ศาสนา
            </p>
            <p className="font-cinzel text-gold/70 text-sm tracking-widest">
              ศตวรรษที่ 3-2 ก่อนค.ศ. | Koine Greek | Alexandria, Egypt
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
            ภาพต้นฉบับ Septuagint จากแหล่งต่างๆ
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* lxx1 */}
            <div className="rounded-card overflow-hidden shadow-card border border-gold/20 w-full">
              <img
                src="/manuscripts/bible/septuagint/lxx1.jpg"
                alt="Codex Vaticanus Septuagint Greek Page"
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
                  รอการอัปโหลดภาพ lxx1.jpg
                </p>
              </div>
              <div className="p-4 bg-ink/5">
                <p className="font-cinzel text-sm text-ink">
                  หน้าจาก Codex Vaticanus — Septuagint ภาษากรีก
                </p>
              </div>
            </div>

            {/* lxx2 */}
            <div className="rounded-card overflow-hidden shadow-card border border-gold/20 w-full">
              <img
                src="/manuscripts/bible/septuagint/lxx2.jpg"
                alt="Septuagint Fragment from Qumran"
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
                  รอการอัปโหลดภาพ lxx2.jpg
                </p>
              </div>
              <div className="p-4 bg-ink/5">
                <p className="font-cinzel text-sm text-ink">
                  ชิ้นส่วน Septuagint จาก Qumran (Dead Sea Scrolls)
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
              {
                label: "ต้นกำเนิด",
                value:
                  "แปลที่เมืองอเล็กซานเดรีย อียิปต์ ศตวรรษที่ 3-2 ก่อนค.ศ. ตามตำนานในจดหมาย Letter of Aristeas แปลโดยนักวิชาการ 72 คน (จึงเรียก LXX = 70)",
              },
              {
                label: "ภาษา",
                value:
                  "Koine Greek — ภาษาสามัญของโลกเฮลเลนิสติก เพื่อให้ชาวยิวที่ไม่เข้าใจภาษาฮีบรูสามารถอ่านได้",
              },
              {
                label: "ต้นฉบับที่เก่าแก่ที่สุด",
                value:
                  "ชิ้นส่วนปาปิรัส: ศตวรรษที่ 2 ก่อนค.ศ. (Rahlfs nos. 801, 819, 957) | ฉบับสมบูรณ์: Codex Vaticanus ศตวรรษที่ 4 ค.ศ.",
              },
              {
                label: "เนื้อหา",
                value:
                  "พระคัมภีร์ฮีบรูครบ + หนังสือ Deuterocanonical อีก 7-15 เล่ม (เช่น Tobit, Judith, Wisdom of Solomon, Sirach, Baruch, 1-2 Maccabees)",
              },
              {
                label: "ความสำคัญ",
                value:
                  "เป็นพระคัมภีร์ที่พระเยซูและสาวกใช้อ้างอิง พันธสัญญาใหม่อ้างข้อความจาก LXX มากกว่า 300 ครั้ง ตาม Karen Jobes & Moisés Silva (2000)",
              },
              {
                label: "นักวิชาการสำคัญ",
                value:
                  "Emanuel Tov (Hebrew University), Alfred Rahlfs (Göttingen), Karen Jobes (Wheaton College)",
              },
            ].map((item) => (
              <div key={item.label} className="card-glass p-5">
                <p className="font-cinzel text-gold text-sm mb-1">{item.label}</p>
                <p className="font-pridi text-ink">{item.value}</p>
              </div>
            ))}
          </div>

          {/* ประวัติความเป็นมา */}
          <div className="mb-10">
            <h3 className="font-cinzel text-xl text-ink mb-4">ประวัติความเป็นมา</h3>
            <div className="space-y-4">
              <p className="font-pridi text-ink/80 leading-relaxed">
                Septuagint เป็นฉบับแปลพระคัมภีร์ฮีบรูเป็นภาษากรีกที่เก่าแก่ที่สุดในโลก
                ตามตำนานที่บันทึกใน Letter of Aristeas (ศตวรรษที่ 2 ก่อนค.ศ.)
                พระเจ้าทอเลมีที่ 2 แห่งอียิปต์ได้เชิญนักวิชาการชาวยิว 72 คน
                มาแปลโตราห์ (หนังสือ 5 เล่มแรก) เป็นภาษากรีก
                การแปลเสร็จสิ้นภายใน 72 วัน จึงเรียกชื่อย่อว่า LXX (70)
                ในยุคต่อมาหนังสือส่วนที่เหลือของพระคัมภีร์ฮีบรูก็ถูกแปลเพิ่มเติม
              </p>
            </div>
          </div>

          {/* ความสำคัญในศาสนาคริสต์ */}
          <div className="mb-10">
            <h3 className="font-cinzel text-xl text-ink mb-4">
              ความสำคัญในศาสนาคริสต์
            </h3>
            <div className="space-y-4">
              <p className="font-pridi text-ink/80 leading-relaxed">
                Septuagint มีความสำคัญอย่างยิ่งเพราะเป็นพระคัมภีร์ที่คริสตจักรยุคแรกใช้
                พันธสัญญาใหม่มีการอ้างข้อความจาก LXX โดยตรงมากกว่า 300 ครั้ง
                ตามการศึกษาของ Karen Jobes และ Moisés Silva
                (Invitation to the Septuagint, Baker Academic, 2000)
                ตัวอย่างเช่น มัทธิว 1:23 อ้าง อิสยาห์ 7:14 จากฉบับ LXX
                ที่ใช้คำว่า &quot;παρθένος&quot; (parthenos — สาวพรหมจารี)
                ซึ่งต้นฉบับฮีบรู Masoretic Text ใช้คำว่า &quot;עַלְמָה&quot; (almah — หญิงสาว)
                ความแตกต่างนี้เป็นหัวข้อถกเถียงทางเทววิทยาที่สำคัญ
              </p>
            </div>
          </div>

          {/* ความแตกต่างระหว่าง LXX กับ MT */}
          <div className="mb-10">
            <h3 className="font-cinzel text-xl text-ink mb-4">
              ความแตกต่างระหว่าง Septuagint กับ Masoretic Text
            </h3>
            <p className="font-pridi text-ink/80 leading-relaxed mb-6">
              นักวิชาการพบความแตกต่างหลายประการ:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card-glass p-6">
                <h4 className="font-cinzel text-gold text-sm font-semibold mb-3 tracking-wide">
                  ข้อความที่แตกต่าง
                </h4>
                <ul className="font-pridi text-ink/80 text-sm space-y-2 leading-relaxed">
                  <li>• เยเรมีย์ใน LXX สั้นกว่า Masoretic ~1/8</li>
                  <li>• สดุดีหลายบทมีลำดับและเนื้อหาต่างกัน</li>
                  <li>
                    • ดาเนียลใน LXX มีเรื่องราวเพิ่มเติม (Susanna, Bel and the
                    Dragon)
                  </li>
                  <li>
                    • Dead Sea Scrolls ยืนยันว่าบางส่วน LXX
                    ตรงกับต้นฉบับฮีบรูเก่ากว่า MT
                  </li>
                </ul>
              </div>

              <div className="card-glass p-6">
                <h4 className="font-cinzel text-gold text-sm font-semibold mb-3 tracking-wide">
                  หนังสือที่ต่างกัน
                </h4>
                <ul className="font-pridi text-ink/80 text-sm space-y-2 leading-relaxed">
                  <li>
                    • Septuagint มีหนังสือเพิ่มเติม 7-15 เล่มที่ไม่อยู่ใน
                    Masoretic
                  </li>
                  <li>• คาทอลิกยอมรับ 7 เล่ม (Deuterocanonical)</li>
                  <li>• โปรเตสแตนต์ไม่ยอมรับ (เรียกว่า Apocrypha)</li>
                  <li>• ออร์โธดอกซ์ยอมรับมากกว่าคาทอลิก</li>
                </ul>
              </div>
            </div>
          </div>

          {/* ข้อคิดเปรียบเทียบ */}
          <div className="mb-10">
            <h3 className="font-cinzel text-xl text-ink mb-4">ข้อคิดเปรียบเทียบ</h3>
            <div className="border-l-4 border-gold bg-[#3E2723] p-5 rounded-card">
              <p className="font-cinzel text-gold text-sm font-semibold mb-2">
                ** ข้อสังเกตเชิงเปรียบเทียบ
              </p>
              <p className="font-pridi text-paper-white leading-relaxed">
                การมีอยู่ของ Septuagint ในฐานะฉบับแปลที่แตกต่างจาก Masoretic Text
                แสดงให้เห็นว่าพระคัมภีร์ฮีบรูมีข้อความหลายสายตั้งแต่ก่อนยุคพระเยซู
                Dead Sea Scrolls ยืนยันว่าบางข้อความใน LXX
                อาจสะท้อนต้นฉบับฮีบรูที่เก่าแก่กว่า MT
                (Emanuel Tov, Textual Criticism of the Hebrew Bible, 3rd ed.,
                Fortress Press, 2012)
                ซึ่งตัดกันกับอัลกุรอานที่มีข้อความเดียวทั่วโลกตั้งแต่ศตวรรษที่ 1 ฮ.ศ.
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
                [1] Emanuel Tov, <em>Textual Criticism of the Hebrew Bible</em>,
                3rd ed., Fortress Press, 2012
              </li>
              <li>
                [2] Karen Jobes &amp; Moisés Silva,{" "}
                <em>Invitation to the Septuagint</em>, Baker Academic, 2000
              </li>
              <li>
                [3] Alfred Rahlfs, <em>Septuaginta</em>, Deutsche
                Bibelgesellschaft, 1935 (revised 2006)
              </li>
              <li>
                [4] Wikipedia, &quot;Septuagint&quot;,
                en.wikipedia.org/wiki/Septuagint
              </li>
            </ul>
          </div>

          {/* ปุ่ม */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://en.wikipedia.org/wiki/Septuagint"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary font-pridi text-center"
            >
              แหล่งข้อมูลเพิ่มเติม ↗
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
