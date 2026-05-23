"use client";

import Link from "next/link";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";

export default function BirminghamManuscript() {
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
            <span className="text-gold">Birmingham Manuscript</span>
          </nav>

          <div className="text-center">
            <h1 className="font-cinzel text-3xl md:text-5xl text-paper-white mb-3 leading-tight">
              Birmingham Quran Manuscript
            </h1>
            <h2 className="font-cinzel text-xl md:text-2xl text-gold mb-6">
              Mingana Islamic Arabic 1572a
            </h2>
            <div className="mx-auto h-px w-24 bg-gold/50 mb-6" />
            <p className="font-pridi text-lg text-paper-white/80 max-w-2xl mx-auto leading-relaxed mb-4">
              ต้นฉบับอัลกุรอานที่เก่าแก่ที่สุดชิ้นหนึ่งในโลก — มหาวิทยาลัยเบอร์มิงแฮม สหราชอาณาจักร
            </p>
            <p className="font-cinzel text-gold/70 text-sm tracking-widest">
              ค.ศ. 568–645 (Carbon-14) | Hijazi Script | 18 Folios (รวม Arabe 328c)
            </p>
          </div>
        </div>
      </section>

      {/* IMAGE GALLERY */}
      <section className="py-16 bg-paper">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-cinzel text-2xl text-ink text-center mb-4">
            ภาพต้นฉบับ
          </h2>
          <p className="font-pridi text-center text-ink-muted mb-10">
            ภาพหน้าต้นฉบับจาก Mingana Islamic Arabic 1572a มหาวิทยาลัยเบอร์มิงแฮม
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* ber1 */}
            <div className="rounded-card overflow-hidden shadow-card border border-gold/20">
              <img
                src="/manuscripts/quran/Birmingham/ber1.jpg"
                alt="Birmingham Quran Manuscript Folio 1r"
                className="w-full object-cover"
                style={{ mixBlendMode: "multiply", backgroundColor: "transparent" }}
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
                  รอการอัปโหลดภาพ ber1.jpg
                </p>
              </div>
              <div className="p-4 bg-ink/5">
                <p className="font-cinzel text-sm text-ink">
                  Folio 1r — อักษรฮิญาซี สูเราะฮ์มัรยัม–ฏอฮา
                </p>
              </div>
            </div>

            {/* ber2 */}
            <div className="rounded-card overflow-hidden shadow-card border border-gold/20">
              <img
                src="/manuscripts/quran/Birmingham/ber2.jpg"
                alt="Birmingham Quran Manuscript Folio 1v"
                className="w-full object-cover"
                style={{ mixBlendMode: "multiply", backgroundColor: "transparent" }}
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
                  รอการอัปโหลดภาพ ber2.jpg
                </p>
              </div>
              <div className="p-4 bg-ink/5">
                <p className="font-cinzel text-sm text-ink">
                  Folio 1v — สูเราะฮ์ฏอฮา อายะห์ 13-40
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INFO + HISTORY + SCRIPT */}
      <section className="py-16 bg-paper-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              { label: "อายุต้นฉบับ", value: "ค.ศ. 568–645 ความน่าจะเป็น 95.4% (Carbon-14, มหาวิทยาลัยอ็อกซ์ฟอร์ด)" },
              { label: "รูปแบบอักษร", value: "Hijazi Script — หมึกสีน้ำตาล ไม่มีเครื่องหมายสระ" },
              { label: "จำนวนหน้า", value: "18 หน้า (16 ที่ปารีส + 2 ที่เบอร์มิงแฮม) ครอบคลุม ~8.3% ของอัลกุรอาน" },
              { label: "ขนาด", value: "33.3 × 24.5 เซนติเมตร บรรทัด 23-25 บรรทัดต่อหน้า" },
              { label: "สถานที่เก็บรักษา", value: "มหาวิทยาลัยเบอร์มิงแฮม (2 หน้า) และ Bibliothèque Nationale ปารีส (16 หน้า)" },
              { label: "หมายเลขทะเบียน", value: "Arabe 328c (ปารีส) และ Mingana Islamic Arabic 1572a (เบอร์มิงแฮม)" },
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
                ต้นฉบับส่วนที่อยู่ที่เบอร์มิงแฮมเป็นส่วนหนึ่งของ "Mingana Collection" อันโด่งดัง
                ซึ่งรวบรวมขึ้นระหว่างปี ค.ศ. 1924–1929 โดยความร่วมมือของ
                ดร. เอ็ดเวิร์ด แคดเบอรี เจ้าของโรงงานช็อกโกแลต Cadbury ที่ Bournville
                และ อัลฟองส์ มิงกานา นักวิชาการด้านต้นฉบับ
                แคดเบอรีสนับสนุนมิงกานาในการเดินทาง 3 ครั้งสู่ตะวันออกกลาง
                เพื่อรวบรวมต้นฉบับโบราณ
              </p>
              <p className="font-pridi text-ink/80 leading-relaxed">
                ส่วน Arabe 328c ที่ปารีสนั้น มีประวัติที่ตามได้ชัดเจนกว่า
                ต้นฉบับนี้ถูกรวบรวมโดย Jean-Louis Asselin de Cherville
                ตัวแทนกงสุลฝรั่งเศสในอียิปต์ (เสียชีวิต ค.ศ. 1822)
                และในปี ค.ศ. 1833 คอลเลกชันทั้งหมดถูกขายให้แก่ Bibliothèque Nationale ปารีส
                แหล่งที่มาของต้นฉบับทุกหน้าคือมัสยิด อัมร์ บิน อัลอาศ ที่เมืองฟุสตาฏ ประเทศอียิปต์
              </p>
              <p className="font-pridi text-ink/80 leading-relaxed">
                Islamic Awareness ได้เสนอในปี ค.ศ. 2009 ว่า M.1572 และ Arabe 328c
                เป็นส่วนหนึ่งของต้นฉบับเดียวกัน
                และในปี ค.ศ. 2011 Alba Fedeli ได้ยืนยันด้วยการศึกษาอย่างละเอียด
                ว่าหน้าที่ 1 และ 7 (Mingana Islamic Arabic 1572a)
                เป็นส่วนเดียวกับ Arabe 328c ในขณะที่หน้าที่เหลือ (1572b)
                เป็นส่วนของต้นฉบับอีกชิ้นหนึ่ง
              </p>
            </div>
          </div>

          {/* รูปแบบอักษรและตกแต่ง */}
          <div className="mb-10">
            <h3 className="font-cinzel text-xl text-ink mb-4">รูปแบบอักษรและการตกแต่ง</h3>
            <div className="space-y-4">
              <p className="font-pridi text-ink/80 leading-relaxed">
                ต้นฉบับเขียนด้วยอักษรฮิญาซีบนหนังสัตว์ ใช้หมึกสีน้ำตาล
                ตัวอักษรบางตัวมีการแยกแยะด้วยเส้นเฉียง ไม่มีเครื่องหมายสระ
                การสิ้นสุดของอายะห์บ่งบอกด้วยกลุ่มขีด 4–6 ขีด
                ไม่มีการระบุทุก 5 หรือ 10 อายะห์
              </p>
              <p className="font-pridi text-ink/80 leading-relaxed">
                เส้นแบ่งระหว่างซูเราะฮ์มีลักษณะต่างกันในแต่ละหน้า
                ใน Folio 3v มีเส้นโค้งสีส้มแดง 3 เส้นพร้อมจุดตลอดความกว้าง
                ขอบด้านนอกมีลายใบปาล์มสไตล์ประณีต
                ส่วน Folio 12v มีเส้นสีส้มแดง 2 เส้นพร้อมลวดลายหยาบที่ขอบ
                และ Folio 9r มีลายตาข่ายสีส้มแดงพร้อมเถาวัลย์ที่งอกออกมาจากขอบ
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* PROF DAVID THOMAS */}
      <section className="py-12 bg-ink">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <h3 className="font-cinzel text-2xl text-gold text-center mb-8">
            ความเห็นของ Prof. David Thomas
          </h3>
          <p className="font-cinzel text-gold/60 text-sm text-center mb-8 tracking-widest">
            Professor of Christianity and Islam, University of Birmingham
          </p>

          {/* Quote ภาษาอังกฤษ */}
          <div className="card-glass p-8 mb-8 border-l-4 border-gold">
            <p className="font-cinzel text-paper-white/90 leading-relaxed text-lg italic mb-0">
              "According to Muslim tradition, the Prophet Muhammad received the revelations
              that form the Qur'an, the scripture of Islam, between the years AD 610 and 632,
              the year of his death..."
            </p>
            <p className="font-cinzel text-paper-white/90 leading-relaxed text-lg italic mt-4">
              "The tests carried out on the parchment of the Birmingham folios yield the strong
              probability that the animal from which it was taken was alive during the lifetime
              of the Prophet Muhammad or shortly afterwards. This means that the parts of the
              Qur'an that are written on this parchment can, with a degree of confidence,
              be dated to less than two decades after Muhammad's death. These portions must
              have been in a form that is very close to the form of the Qur'an read today,
              supporting the view that the text has undergone little or no alteration and
              that it can be dated to a point very close to the time it was believed to be revealed."
            </p>
          </div>

          {/* แปลไทย */}
          <div className="card-glass p-8 border-l-4 border-gold/40">
            <p className="font-pridi text-sm text-gold/60 mb-4 tracking-wide">
              — คำแปลภาษาไทย —
            </p>
            <p className="font-pridi text-paper-white/80 leading-relaxed">
              "ตามประเพณีของมุสลิม ท่านนบีมุฮัมมัดได้รับวะฮีย์อัลกุรอาน
              ซึ่งเป็นคัมภีร์ของศาสนาอิสลาม ระหว่างปี ค.ศ. 610 ถึง 632
              อันเป็นปีที่ท่านเสียชีวิต ในขณะนั้นพระวจนะยังไม่ได้ถูกรวบรวมเป็นหนังสือ
              แต่ถูกรักษาไว้ใน 'ความทรงจำของมนุษย์' บางส่วนถูกบันทึกลงบนหนังสัตว์
              หิน ใบปาล์ม และกระดูกไหปลาร้าของอูฐ
              เคาะลีฟะฮ์อาบูบักรซึ่งเป็นผู้นำชุมชนมุสลิมคนแรกหลังนบีมุฮัมมัด
              ได้สั่งให้รวบรวมเนื้อหาอัลกุรอานทั้งหมดเป็นรูปเล่มหนังสือ
              และรูปแบบที่เป็นลายลักษณ์อักษรฉบับสมบูรณ์และเป็นทางการ
              เสร็จสิ้นภายใต้การนำของเคาะลีฟะฮ์อุษมาน ผู้นำคนที่ 3 ราวปี ค.ศ. 650"
            </p>
            <p className="font-pridi text-paper-white/80 leading-relaxed mt-4">
              "การทดสอบที่ดำเนินการกับหนังสัตว์ของหน้าต้นฉบับเบอร์มิงแฮม
              แสดงความน่าจะเป็นสูงว่าสัตว์ที่ถูกนำหนังมาใช้นั้นยังมีชีวิตอยู่
              ในช่วงที่ท่านนบีมุฮัมมัดมีชีวิตหรือไม่นานหลังจากนั้น
              ซึ่งหมายความว่าส่วนของอัลกุรอานที่เขียนบนหนังสัตว์นี้
              สามารถระบุอายุได้ด้วยความมั่นใจว่าเขียนขึ้นไม่ถึงสองทศวรรษหลังการสิ้นชีพของท่านนบี
              เนื้อหาเหล่านี้ต้องอยู่ในรูปแบบที่ใกล้เคียงกับอัลกุรอานที่อ่านกันในปัจจุบันมาก
              ซึ่งสนับสนุนมุมมองที่ว่าข้อความนั้นแทบไม่มีการเปลี่ยนแปลงใดๆ
              และสามารถระบุอายุได้ใกล้เคียงกับช่วงเวลาที่เชื่อว่ามีการประทานลงมา"
            </p>
            <p className="font-cinzel text-gold/60 text-xs mt-4">
              — Prof. David Thomas, University of Birmingham, 2015
            </p>
          </div>

          <div className="flex justify-center mt-8">
            <a
              href="https://www.birmingham.ac.uk/news-archive/2015/birmingham-quran-manuscript-dated-among-the-oldest-in-the-world"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline font-pridi text-sm"
            >
              อ่านข่าวต้นฉบับจาก University of Birmingham ↗
            </a>
          </div>

        </div>
      </section>

      {/* TABLE + BUTTONS */}
      <section className="py-16 bg-paper-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ตาราง Contents */}
          <div className="mb-10">
            <h3 className="font-cinzel text-xl text-ink mb-4">
              เนื้อหาต้นฉบับ (บางส่วน)
            </h3>
            <p className="font-pridi text-sm text-ink-muted mb-4">
              แสดงเฉพาะส่วน Mingana Islamic Arabic 1572a
            </p>
            <div className="overflow-x-auto">
              <table className="w-full font-pridi text-sm border-collapse">
                <thead>
                  <tr className="bg-ink text-paper">
                    <th className="p-3 text-left font-cinzel">Folio</th>
                    <th className="p-3 text-left font-cinzel">ซูเราะฮ์</th>
                    <th className="p-3 text-left font-cinzel">หมายเหตุ</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["1r", "มัรยัม: 91-98; ฏอฮา: 1-13", "Mingana 1572a"],
                    ["1v", "ฏอฮา: 13-40", "Mingana 1572a"],
                    ["(7r)", "อัลกะฮ์ฟ: 17-23", "Mingana 1572a"],
                    ["(7v)", "อัลกะฮ์ฟ: 23-31", "Mingana 1572a"],
                  ].map(([folio, surah, note]) => (
                    <tr
                      key={folio}
                      className="border-b border-gold/10 hover:bg-gold/5"
                    >
                      <td className="p-3 font-cinzel text-gold">{folio}</td>
                      <td className="p-3">{surah}</td>
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
            className="mt-6 card-glass border-l-4 border-gold p-5"
            style={{ background: "linear-gradient(135deg, rgba(197,160,89,0.08) 0%, rgba(62,39,35,0.3) 100%)" }}
          >
            <p className="font-cinzel text-gold text-sm font-semibold mb-2 tracking-wide">
              ** หมายเหตุสำคัญ
            </p>
            <p className="font-pridi text-paper-white/90 leading-relaxed">
              ความแตกต่างหรือข้อสังเกตใดๆ ที่พบในต้นฉบับนี้
              <strong className="text-gold"> ไม่ส่งผลให้อัลกุรอานถูกบิดเบือนแต่อย่างใด</strong>
              เนื่องจากอัลกุรอานไม่ได้พึ่งพาการบันทึกเป็นลายลักษณ์อักษรเพียงอย่างเดียว
              แต่ถูกท่องจำ<strong className="text-gold"> ทุกอักษร ทุกคำ</strong>
              โดยบรรดาฮาฟิซ (ผู้ท่องจำอัลกุรอาน) อย่างต่อเนื่องในทุกยุคทุกสมัย
              นับตั้งแต่สมัยท่านนบีมุฮัมมัด (ซ.ล.) จวบจนปัจจุบัน
              การท่องจำแบบปากต่อปากในระดับ Mutawātir
              (ถ่ายทอดโดยคนจำนวนมากจนเป็นไปไม่ได้ที่จะมีการสมคบกันเปลี่ยนแปลง)
              คือหลักประกันสูงสุดของความถูกต้องของอัลกุรอาน
              ตามที่อัลลอฮ์ทรงสัญญาไว้ในอัลกุรอาน สูเราะฮ์ อัลฮิจร์ 15:9
              <span className="block mt-3 font-cinzel text-gold/70 text-xs tracking-widest">
                "แท้จริง เราได้ประทานอัล-ซิกร์ลงมา และแท้จริง เราเป็นผู้พิทักษ์รักษามันไว้"
              </span>
            </p>
          </div>

          {/* ปุ่ม */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.islamic-awareness.org/quran/text/mss/m1572"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary font-pridi text-center"
            >
              อ่านบทความต้นฉบับ (Islamic Awareness) ↗
            </a>
            <a
              href="https://www.birmingham.ac.uk/news-archive/2015/birmingham-quran-manuscript-dated-among-the-oldest-in-the-world"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline font-pridi text-center"
            >
              University of Birmingham ↗
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
