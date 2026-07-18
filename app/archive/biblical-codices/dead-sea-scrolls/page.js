"use client";

import Link from "next/link";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";

export default function DeadSeaScrollsManuscript() {
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
            <span className="text-gold">Dead Sea Scrolls</span>
          </nav>

          <div className="text-center">
            <h1 className="font-cinzel text-3xl md:text-5xl text-paper-white mb-3 leading-tight">
              Dead Sea Scrolls
            </h1>
            <h2 className="font-cinzel text-xl md:text-2xl text-gold mb-6">
              ม้วนหนังสือทะเลเดดซี — การค้นพบที่เปลี่ยนโฉมวิชาการพระคัมภีร์
            </h2>
            <div className="mx-auto h-px w-24 bg-gold/50 mb-6" />
            <p className="font-pridi text-lg text-paper-white/80 max-w-2xl mx-auto leading-relaxed mb-4">
              ค้นพบปี ค.ศ. 1947 ในถ้ำริมทะเลเดดซี มีชิ้นส่วนพระคัมภีร์ฮีบรูเก่ากว่าต้นฉบับ
              Masoretic กว่า 1,000 ปี
            </p>
            <p className="font-cinzel text-gold/70 text-sm tracking-widest">
              ศตวรรษที่ 3 ก่อนค.ศ. — ศตวรรษที่ 1 ค.ศ. | Hebrew, Aramaic, Greek | Qumran, Israel
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
            ภาพม้วนหนังสือและถ้ำ Qumran ริมทะเลเดดซี
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* dss1 */}
            <div className="rounded-card overflow-hidden shadow-card border border-gold/20 w-full">
              <img
                src="/manuscripts/bible/dead-sea-scrolls/dss1.jpg"
                alt="Great Isaiah Scroll 1QIsaa Dead Sea Scroll"
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
                  รอการอัปโหลดภาพ dss1.jpg
                </p>
              </div>
              <div className="p-4 bg-ink/5">
                <p className="font-cinzel text-sm text-ink">
                  ม้วนอิสยาห์ (1QIsaᵃ) — Dead Sea Scroll ที่สมบูรณ์ที่สุด
                </p>
              </div>
            </div>

            {/* dss2 */}
            <div className="rounded-card overflow-hidden shadow-card border border-gold/20 w-full">
              <img
                src="/manuscripts/bible/dead-sea-scrolls/dss2.jpg"
                alt="Dead Sea Scrolls Psalms Fragment"
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
                  รอการอัปโหลดภาพ dss2.jpg
                </p>
              </div>
              <div className="p-4 bg-ink/5">
                <p className="font-cinzel text-sm text-ink">
                  ชิ้นส่วนม้วนหนังสือสดุดี (Psalms) จาก Qumran
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
                label: "การค้นพบ",
                value:
                  "ค.ศ. 1947 โดยเด็กเลี้ยงแกะชาวเบดูอินที่ถ้ำ Qumran ริมทะเลเดดซี ต่อมาค้นพบเพิ่มเติมใน 11 ถ้ำ ระหว่างปี 1947-1956",
              },
              {
                label: "อายุ",
                value:
                  "ศตวรรษที่ 3 ก่อนค.ศ. — ศตวรรษที่ 1 ค.ศ. เก่ากว่า Masoretic Text ที่มีอยู่ราว 1,000 ปี",
              },
              {
                label: "เนื้อหา",
                value:
                  "ชิ้นส่วนจากพระคัมภีร์ฮีบรูเกือบทุกเล่ม (ยกเว้น Esther) + งานเขียนชุมชน Qumran + เอกสารนอกสารบบ",
              },
              {
                label: "จำนวน",
                value:
                  "ราว 981 ม้วน/ชิ้นส่วน จาก 11 ถ้ำ เขียนเป็นภาษาฮีบรู อาราเมอิก และกรีก",
              },
              {
                label: "สถานที่เก็บรักษา",
                value:
                  "Shrine of the Book, Israel Museum, Jerusalem | Rockefeller Museum | Jordan Museum",
              },
              {
                label: "นักวิชาการสำคัญ",
                value:
                  "Roland de Vaux (โดมินิกัน), Emanuel Tov (Hebrew University), Frank Moore Cross (Harvard)",
              },
            ].map((item) => (
              <div key={item.label} className="card-glass p-5">
                <p className="font-cinzel text-gold text-sm mb-1">{item.label}</p>
                <p className="font-pridi text-ink">{item.value}</p>
              </div>
            ))}
          </div>

          {/* การค้นพบที่เปลี่ยนโฉม */}
          <div className="mb-10">
            <h3 className="font-cinzel text-xl text-ink mb-4">
              การค้นพบที่เปลี่ยนโฉม
            </h3>
            <div className="space-y-4">
              <p className="font-pridi text-ink/80 leading-relaxed">
                ในปี ค.ศ. 1947 เด็กเลี้ยงแกะชาวเบดูอินชื่อ Muhammad edh-Dhib
                โยนก้อนหินเข้าไปในถ้ำริมหน้าผาทะเลเดดซี
                และได้ยินเสียงกระทบสิ่งที่กลายเป็นการค้นพบทางโบราณคดีที่สำคัญที่สุดในศตวรรษที่
                20 ภายในไหดินเผา เขาพบม้วนหนังสือหนังสัตว์ที่ซ่อนไว้กว่า 2,000 ปี
              </p>
              <p className="font-pridi text-ink/80 leading-relaxed">
                ต่อมาระหว่างปี 1947-1956 มีการสำรวจถ้ำทั้ง 11 แห่งในพื้นที่ Qumran
                ค้นพบชิ้นส่วนม้วนหนังสือรวมกว่า 981 ชิ้น
                ครอบคลุมพระคัมภีร์ฮีบรูเกือบทุกเล่ม ยกเว้นหนังสือ Esther
              </p>
            </div>
          </div>

          {/* ม้วนอิสยาห์ */}
          <div className="mb-10">
            <h3 className="font-cinzel text-xl text-ink mb-4">
              ม้วนอิสยาห์ — ต้นฉบับที่สมบูรณ์ที่สุด
            </h3>
            <div className="space-y-4">
              <p className="font-pridi text-ink/80 leading-relaxed">
                ม้วนอิสยาห์ (1QIsaᵃ) เป็นม้วนหนังสือที่สมบูรณ์ที่สุดจาก Dead Sea
                Scrolls ยาว 7.3 เมตร มีข้อความครบ 66 บทของหนังสืออิสยาห์
                เมื่อเปรียบเทียบกับ Masoretic Text ที่มีอายุน้อยกว่ากว่า 1,000 ปี
                พบว่ามีความคล้ายคลึงสูง แต่ก็มีความแตกต่างหลายจุด
                โดยบางจุดสอดคล้องกับ Septuagint มากกว่า Masoretic Text
              </p>
            </div>
          </div>

          {/* ผลกระทบต่อวิชาการ */}
          <div className="mb-10">
            <h3 className="font-cinzel text-xl text-ink mb-4">
              ผลกระทบต่อวิชาการพระคัมภีร์
            </h3>
            <div className="space-y-4">
              <p className="font-pridi text-ink/80 leading-relaxed">
                Emanuel Tov ระบุในหนังสือ Textual Criticism of the Hebrew Bible
                (2012) ว่า Dead Sea Scrolls แสดงให้เห็นว่าในยุคพระวิหารที่ 2
                พระคัมภีร์ฮีบรูมีข้อความหลายสาย (textual plurality)
                บางม้วนสอดคล้องกับ Masoretic Text บางม้วนสอดคล้องกับ Septuagint
                และบางม้วนไม่ตรงกับสายใดเลย
              </p>
            </div>

            <div className="overflow-x-auto mt-6">
              <table className="w-full font-pridi text-sm border-collapse">
                <thead>
                  <tr className="bg-gold/20">
                    <th className="p-3 text-left font-cinzel text-gold-dark">
                      ประเภทข้อความ
                    </th>
                    <th className="p-3 text-left font-cinzel text-gold-dark">
                      สัดส่วน
                    </th>
                    <th className="p-3 text-left font-cinzel text-gold-dark">
                      คำอธิบาย
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Proto-Masoretic", "~60%", "สอดคล้องกับ MT"],
                    ["Proto-Septuagint", "~5%", "สอดคล้องกับ LXX"],
                    ["Non-aligned", "~25%", "ไม่ตรงกับ MT หรือ LXX"],
                    ["Pre-Samaritan", "~5%", "สอดคล้องกับ Samaritan Pentateuch"],
                    ["Other", "~5%", "จำแนกไม่ได้"],
                  ].map(([type, pct, desc]) => (
                    <tr key={type} className="border-b border-gold/10 hover:bg-gold/5">
                      <td className="p-3 text-ink/80">{type}</td>
                      <td className="p-3 text-gold-dark font-semibold">{pct}</td>
                      <td className="p-3 text-ink/60">{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* ข้อสังเกตเชิงเปรียบเทียบ */}
          <div className="mb-10">
            <div className="border-l-4 border-gold bg-[#3E2723] p-5 rounded-card">
              <p className="font-cinzel text-gold text-sm font-semibold mb-2">
                ** ข้อสังเกตเชิงเปรียบเทียบ
              </p>
              <p className="font-pridi text-paper-white leading-relaxed">
                Dead Sea Scrolls
                เปิดเผยว่าพระคัมภีร์ฮีบรูมีข้อความหลายสายมาตั้งแต่ก่อนยุคพระเยซู
                ก่อนที่ Masorete จะมาตรฐานข้อความในศตวรรษที่ 7-10 ค.ศ.
                ข้อค้นพบนี้แสดงให้เห็นว่ากระบวนการส่งต่อพระคัมภีร์ในโลกยิว-คริสต์
                มีความซับซ้อนมากกว่าที่เคยเข้าใจ
                ซึ่งตัดกันกับอัลกุรอานที่มีระบบท่องจำระดับ Mutawātir
                ควบคู่กับการบันทึกลายลักษณ์อักษรตั้งแต่ยุคแรก
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
                [2] James VanderKam &amp; Peter Flint,{" "}
                <em>The Meaning of the Dead Sea Scrolls</em>, HarperOne, 2002
              </li>
              <li>
                [3] Frank Moore Cross, <em>The Ancient Library of Qumran</em>,
                Fortress Press, 1995
              </li>
              <li>
                [4] Israel Museum, &quot;The Digital Dead Sea Scrolls&quot;,
                www.deadseascrolls.org.il
              </li>
            </ul>
          </div>

          {/* ปุ่ม */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.deadseascrolls.org.il"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary font-pridi text-center"
            >
              Digital Dead Sea Scrolls ↗
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
