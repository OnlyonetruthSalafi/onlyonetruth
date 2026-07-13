"use client";

import { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FaithJourneyMap from "../../components/FaithJourneyMap";

const islamicChronicle = [
  {
    chapter: "I",
    era: "จุดกำเนิดแห่งวะฮีย์",
    year: "ค.ศ. 610",
    city: "MECCA",
    th: "มักกะฮ์",
    arabic: "مكة",
    narrative:
      "ณ ถ้ำฮิรออ์บนภูเขาอันนูร ชานเมืองมักกะฮ์ ท่านนบีมุฮัมมัด (ซ.ล.) ในวัย 40 ปี ได้รับวะฮีย์แรกผ่านทูตสวรรค์ญิบรีล นับเป็นจุดเริ่มต้นของการประทานอัลกุรอานที่ดำเนินต่อเนื่องยาวนานถึง 23 ปี ตลอด 13 ปีแรกในมักกะฮ์ การเผยแผ่เป็นไปอย่างยากลำบาก — ชาวมุสลิมยุคแรกถูกกดขี่จากชนชั้นนำเผ่ากุเรชผู้ปกป้องระบบบูชาเทวรูปรอบกะอ์บะฮ์ จนบางส่วนต้องลี้ภัยไปยังอาณาจักรอักซุม (เอธิโอเปีย) กระนั้นจำนวนผู้ศรัทธาก็เพิ่มขึ้นอย่างช้า ๆ และมั่นคง",
    events: [
      "ค.ศ. 610 — วะฮีย์แรก ณ ถ้ำฮิรออ์ ในเดือนเราะมะฎอน",
      "ค.ศ. ~613 — เริ่มการเผยแผ่อย่างเปิดเผยต่อสาธารณะ",
      "ค.ศ. 615 — มุสลิมกลุ่มแรกลี้ภัยสู่อาณาจักรอักซุม",
      "ค.ศ. 619 — 'ปีแห่งความโศกเศร้า' สูญเสียท่านหญิงเคาะดีญะฮ์และอบูฏอลิบ",
    ],
  },
  {
    chapter: "II",
    era: "ฮิจเราะฮ์ — กำเนิดประชาชาติ",
    year: "ค.ศ. 622",
    city: "MEDINA",
    th: "มะดีนะฮ์",
    arabic: "المدينة",
    narrative:
      "การอพยพ (ฮิจเราะฮ์) จากมักกะฮ์สู่เมืองยัษริบ ซึ่งต่อมาได้นามว่า 'อัลมะดีนะฮ์' คือจุดเปลี่ยนครั้งสำคัญที่สุด — สำคัญถึงขั้นถูกกำหนดให้เป็นปีที่หนึ่งของปฏิทินอิสลาม ที่นี่ประชาชาติมุสลิม (อุมมะฮ์) แห่งแรกถือกำเนิดขึ้นภายใต้ 'ธรรมนูญมะดีนะฮ์' ที่วางกรอบการอยู่ร่วมกันของมุสลิม ยิว และเผ่าต่าง ๆ จากเมืองเล็ก ๆ แห่งนี้ อิสลามยืนหยัดผ่านสมรภูมิบะดัร อุฮุด และค็อนดัก จนกลับเข้าพิชิตมักกะฮ์ได้โดยแทบไม่เสียเลือดเนื้อ และเมื่อท่านนบีเสียชีวิตในปี 632 คาบสมุทรอาหรับเกือบทั้งหมดก็รวมเป็นหนึ่งภายใต้อิสลามแล้ว",
    events: [
      "ค.ศ. 622 — ฮิจเราะฮ์ จุดเริ่มต้นปฏิทินอิสลาม (ฮ.ศ. 1)",
      "ค.ศ. 624 — ชัยชนะ ณ สมรภูมิบะดัร",
      "ค.ศ. 628 — สนธิสัญญาสงบศึกฮุดัยบียะฮ์",
      "ค.ศ. 630 — พิชิตมักกะฮ์โดยสันติ ทำลายเทวรูปรอบกะอ์บะฮ์",
      "ค.ศ. 632 — ท่านนบีเสียชีวิต อบูบักรฺขึ้นเป็นเคาะลีฟะฮ์คนแรก",
    ],
  },
  {
    chapter: "III",
    era: "สู่แผ่นดินชาม",
    year: "ค.ศ. 634–635",
    city: "DAMASCUS",
    th: "ดามัสกัส",
    arabic: "دمشق",
    narrative:
      "ภายใต้เคาะลีฟะฮ์อบูบักรฺและอุมัร กองทัพมุสลิมนำโดยขุนพลคอลิด อิบนุ อัลวะลีด เคลื่อนเข้าสู่ดินแดนชาม (ซีเรีย) ของจักรวรรดิไบแซนไทน์ ดามัสกัสยอมจำนนในปี 635 และชัยชนะเด็ดขาด ณ สมรภูมิยัรมูกในปีถัดมา ก็ปิดฉากอำนาจไบแซนไทน์ในเลแวนต์อย่างถาวร ต่อมาในปี 661 ดามัสกัสได้รับเกียรติสูงสุด — เป็นเมืองหลวงของราชวงศ์อุมัยยะฮ์ จักรวรรดิที่จะแผ่ขยายจากสเปนจรดลุ่มแม่น้ำสินธุ และเป็นที่ตั้งของมัสยิดอุมัยยะฮ์อันวิจิตรงดงาม",
    events: [
      "ค.ศ. 634 — เริ่มการทัพสู่ซีเรียของไบแซนไทน์",
      "ค.ศ. 635 — ดามัสกัสยอมจำนนต่อกองทัพมุสลิม",
      "ค.ศ. 636 — ชัยชนะเด็ดขาด ณ สมรภูมิยัรมูก",
      "ค.ศ. 661 — เป็นเมืองหลวงราชวงศ์อุมัยยะฮ์",
    ],
  },
  {
    chapter: "IV",
    era: "กุญแจแห่งนครศักดิ์สิทธิ์",
    year: "ค.ศ. 637",
    city: "JERUSALEM",
    th: "เยรูซาเล็ม",
    arabic: "القدس",
    narrative:
      "หลังการปิดล้อมโดยไม่นองเลือด สังฆราชโซโฟรนีอุสยืนยันจะมอบกุญแจเมืองแก่เคาะลีฟะฮ์ด้วยตนเองเท่านั้น อุมัร อิบนุ อัลค็อฏฏอบจึงเดินทางจากมะดีนะฮ์มารับมอบเมืองอย่างสมถะ 'สนธิสัญญาอุมัร' รับประกันความปลอดภัยในชีวิต ทรัพย์สิน และศาสนสถานของชาวคริสต์ เล่ากันว่าเมื่อได้รับเชิญให้ละหมาดภายในโบสถ์พระคูหาศักดิ์สิทธิ์ อุมัรปฏิเสธ เพราะเกรงว่ามุสลิมรุ่นหลังจะอ้างสิทธิ์เปลี่ยนโบสถ์เป็นมัสยิด ต่อมาบริเวณเนินพระวิหารได้กลายเป็นที่ตั้งของโดมแห่งศิลาและมัสยิดอัลอักศอ",
    events: [
      "ค.ศ. 637 — เคาะลีฟะฮ์อุมัรรับมอบเมืองด้วยตนเอง",
      "สนธิสัญญาอุมัร — รับประกันเสรีภาพทางศาสนาของชาวคริสต์",
      "ค.ศ. 691 — โดมแห่งศิลาสร้างเสร็จบนเนินพระวิหาร",
    ],
  },
  {
    chapter: "V",
    era: "ประตูสู่แอฟริกา",
    year: "ค.ศ. 641",
    city: "ALEXANDRIA",
    th: "อเล็กซานเดรีย",
    arabic: "الإسكندرية",
    narrative:
      "ขุนพลอัมร์ อิบนุ อัลอาศ นำทัพเข้าสู่อียิปต์ในปี 639 และเมื่ออเล็กซานเดรีย — มหานครท่าเรือและศูนย์กลางความรู้แห่งโลกเฮลเลนิสติก — ยอมจำนนในปี 641 อียิปต์ทั้งหมดก็หลุดจากมือไบแซนไทน์ ชาวคริสต์คอปติกจำนวนไม่น้อยซึ่งถูกคอนสแตนติโนเปิลกดขี่ทางนิกาย มองผู้ปกครองใหม่ว่าผ่อนปรนกว่า อัมร์ก่อตั้งเมืองฟุสฏอฏ (ต้นกำเนิดของกรุงไคโร) เป็นฐานทัพและศูนย์ปกครองใหม่ อียิปต์กลายเป็นอู่ข้าวอู่น้ำและฐานสำคัญของการขยายตัวต่อไปทั่วแอฟริกาเหนือ",
    events: [
      "ค.ศ. 639 — อัมร์ อิบนุ อัลอาศ นำทัพเข้าสู่อียิปต์",
      "ค.ศ. 640 — ชัยชนะ ณ สมรภูมิเฮลิโอโปลิส",
      "ค.ศ. 641 — อเล็กซานเดรียยอมจำนน",
      "ค.ศ. 642 — ก่อตั้งเมืองฟุสฏอฏ ต้นกำเนิดกรุงไคโร",
    ],
  },
  {
    chapter: "VI",
    era: "เคาะประตูไบแซนไทน์",
    year: "ค.ศ. 674–678",
    city: "CONSTANTINOPLE",
    th: "คอนสแตนติโนเปิล",
    arabic: "القسطنطينية",
    narrative:
      "กองเรือราชวงศ์อุมัยยะฮ์ภายใต้เคาะลีฟะฮ์มุอาวิยะฮ์ เข้าปิดล้อมคอนสแตนติโนเปิล เมืองหลวงของจักรวรรดิไบแซนไทน์ ระหว่างปี 674–678 นับเป็นครั้งแรกที่กองทัพมุสลิมรุกถึงหัวใจของจักรวรรดิโรมันตะวันออก แม้กำแพงเธโอโดเซียนอันเลื่องชื่อและอาวุธลับ 'ไฟกรีก' จะทำให้การปิดล้อมล้มเหลว แต่ปฏิบัติการนี้สะท้อนแสนยานุภาพทางทะเลที่มุสลิมสร้างขึ้นได้ภายในเวลาเพียงไม่กี่ทศวรรษ — คอนสแตนติโนเปิลจะยืนหยัดต่อไปอีกเกือบแปดศตวรรษ ก่อนเสียแก่จักรวรรดิออตโตมันในปี 1453",
    events: [
      "ค.ศ. 670s — กองเรือมุสลิมยึดฐานทัพในทะเลมาร์มะรา",
      "ค.ศ. 674–678 — การปิดล้อมคอนสแตนติโนเปิลครั้งแรก",
      "ค.ศ. 717–718 — การปิดล้อมครั้งที่สองในยุคเคาะลีฟะฮ์สุลัยมาน",
    ],
  },
  {
    chapter: "VII",
    era: "อัลอันดะลุส — สุดขอบตะวันตก",
    year: "ค.ศ. 711",
    city: "CORDOBA",
    th: "กอร์โดบา",
    arabic: "قرطبة",
    narrative:
      "ปี 711 ขุนพลฏอริก อิบนุ ซิยาด ข้ามช่องแคบที่ต่อมาได้ชื่อตามเขา — ญะบัลฏอริก (ยิบรอลตาร์) — และพิชิตอาณาจักรวิซิกอทในสมรภูมิกัวดาเลเต ภายในไม่กี่ปีคาบสมุทรไอบีเรียเกือบทั้งหมดกลายเป็น 'อัลอันดะลุส' เพียงหนึ่งศตวรรษหลังฮิจเราะฮ์ อาณาเขตอิสลามแผ่จากมหาสมุทรแอตแลนติกจรดเอเชียกลาง กอร์โดบาเจริญถึงขีดสุดในศตวรรษที่ 10 ในฐานะเมืองหลวงรัฐเคาะลีฟะฮ์อุมัยยะฮ์แห่งตะวันตก — มหานครที่เพียบพร้อมด้วยห้องสมุด โรงอาบน้ำ และถนนที่มีแสงไฟส่องสว่าง จนได้รับสมญาว่า 'อัญมณีแห่งโลก'",
    events: [
      "ค.ศ. 711 — ฏอริกข้ามช่องแคบ ชนะ ณ สมรภูมิกัวดาเลเต",
      "ค.ศ. 756 — อับดุรเราะห์มานที่ 1 สถาปนาเอมิเรตแห่งกอร์โดบา",
      "ค.ศ. 784 — เริ่มก่อสร้างมัสยิดใหญ่แห่งกอร์โดบา",
      "ค.ศ. 929 — ประกาศรัฐเคาะลีฟะฮ์แห่งกอร์โดบา",
    ],
  },
];

export default function PathsOfFaith() {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const bg = document.getElementById("parallax-bg");
      const mid = document.getElementById("parallax-mid");
      const front = document.getElementById("parallax-front");
      if (bg) bg.style.transform = `translateY(${scrolled * 0.15}px)`;
      if (mid) mid.style.transform = `translateY(${scrolled * 0.35}px)`;
      if (front) front.style.transform = `translateY(${scrolled * 0.55}px)`;
    };
    window.addEventListener("scroll", handleScroll);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("ic-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll(".ic-reveal").forEach((el) => io.observe(el));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      io.disconnect();
    };
  }, []);

  return (
    <div className="bg-paper text-ink">
      <Navbar />

      {/* HERO */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-ink">
        <div
          id="parallax-bg"
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 20%, rgba(197,160,89,0.15), transparent 50%), radial-gradient(circle at 70% 60%, rgba(197,160,89,0.1), transparent 50%)",
          }}
        />

        <div
          id="parallax-mid"
          className="absolute inset-0 flex items-center justify-center opacity-10"
        >
          <svg width="800" height="500" viewBox="0 0 800 500">
            <path
              d="M100,250 Q300,180 400,250 T700,250"
              stroke="#c5a059"
              strokeWidth="1"
              fill="none"
              strokeDasharray="4 6"
            />
          </svg>
        </div>

        <div id="parallax-front" className="relative z-10 text-center px-gutter">
          <p className="font-cinzel text-xs text-gold/60 tracking-[0.3em] uppercase mb-4">
            TWO JOURNEYS, TWO FAITHS
          </p>
          <h1 className="font-cinzel text-4xl md:text-6xl text-paper-white mb-4">
            Paths of Faith
          </h1>
          <h2 className="font-pridi text-xl text-gold">
            เส้นทางแห่งศรัทธา — การเดินทางของสองศาสนา
          </h2>
        </div>
      </section>

      {/* INTERACTIVE MAP */}
      <section className="py-16 bg-ink">
        <div className="max-w-6xl mx-auto px-gutter">
          <div className="text-center mb-10">
            <p className="font-cinzel text-xs text-gold/60 tracking-[0.3em] uppercase mb-3">
              INTERACTIVE JOURNEY MAP
            </p>
            <h2 className="font-cinzel text-3xl md:text-4xl text-paper-white mb-3">
              แผนที่การเดินทาง
            </h2>
            <p className="font-pridi text-paper-white/60 text-sm max-w-2xl mx-auto">
              ติดตามหมุดแสงเดินทางไปตามเส้นทางประวัติศาสตร์ — เลือกเส้นทาง เปิด/ปิดการแสดงผล
              และคลิกหมุดเมืองเพื่ออ่านประวัติย่อของแต่ละเมือง
            </p>
          </div>
          <FaithJourneyMap />
          <p className="font-pridi text-paper-white/40 text-xs text-center mt-4">
            แผนที่จำลองอาจมีความคาดเคลื่อนตามตำแหน่งจริงทางประวัติศาสตร์เล็กน้อย
          </p>
        </div>
      </section>

      {/* ISLAMIC PATH — CHRONICLE */}
      <section
        className="relative py-24 overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, #3E2723 0%, #2b1512 45%, #241010 70%, #3E2723 100%)",
        }}
      >
        {/* แสงทอง-แดงพื้นหลัง */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 20% 15%, rgba(139,26,26,0.25), transparent 55%), radial-gradient(ellipse at 80% 45%, rgba(212,175,55,0.08), transparent 50%), radial-gradient(ellipse at 30% 85%, rgba(139,26,26,0.18), transparent 55%)",
          }}
        />

        <div className="relative max-w-5xl mx-auto px-gutter">
          {/* HEADER */}
          <div className="text-center mb-20">
            <p className="font-amiri text-3xl text-gold/50 mb-4">الفتوحات الإسلامية</p>
            <p
              className="font-cinzel text-xs tracking-[0.3em] uppercase mb-3"
              style={{ color: "#d98a6e" }}
            >
              THE ISLAMIC EXPANSION
            </p>
            <h2 className="font-cinzel text-3xl md:text-5xl text-paper-white mb-4">
              เส้นทางอิสลาม
            </h2>
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="block h-px w-16 bg-gradient-to-r from-transparent to-gold/60" />
              <span className="text-gold text-sm">✦</span>
              <span className="block h-px w-16 bg-gradient-to-l from-transparent to-gold/60" />
            </div>
            <p className="font-pridi text-paper-white/60 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              จดหมายเหตุแห่งการเผยแผ่ — จากถ้ำฮิรออ์สู่คาบสมุทรไอบีเรียภายในหนึ่งศตวรรษ
              เจ็ดบทบันทึกต่อไปนี้ขยายรายละเอียดของหมุดเมืองบนแผนที่ด้านบน
              เรียงตามลำดับเวลาแห่งประวัติศาสตร์
            </p>
          </div>

          {/* TIMELINE */}
          <div className="relative">
            <div className="ic-axis left-[14px] md:left-1/2 md:-translate-x-1/2" />

            <div className="space-y-14 md:space-y-20">
              {islamicChronicle.map((item, i) => {
                const onLeft = i % 2 === 0;
                return (
                  <div
                    key={item.city}
                    className="relative md:grid md:grid-cols-2 md:gap-x-16 items-center"
                  >
                    {/* ดาว 8 แฉกบนแกน */}
                    <div className="absolute left-[14px] md:left-1/2 top-9 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 z-10">
                      <div className="ic-node">
                        <span className="ic-node-core" />
                      </div>
                    </div>

                    {/* ปีฝั่งตรงข้าม (desktop เท่านั้น) */}
                    <div
                      className={`hidden md:flex items-center ${
                        onLeft
                          ? "md:col-start-2 md:row-start-1 justify-start pl-2"
                          : "md:col-start-1 md:row-start-1 justify-end pr-2"
                      }`}
                    >
                      <div className={`ic-reveal ${onLeft ? "text-left" : "text-right"}`}>
                        <p className="font-cinzel text-4xl lg:text-5xl text-gold/90 tracking-wide">
                          {item.year}
                        </p>
                        <p
                          className="font-cinzel text-xs tracking-[0.35em] uppercase mt-2"
                          style={{ color: "#d98a6e" }}
                        >
                          Chapter {item.chapter}
                        </p>
                      </div>
                    </div>

                    {/* แผ่นจดหมายเหตุ */}
                    <div
                      className={`pl-12 md:pl-0 ${
                        onLeft
                          ? "md:col-start-1 md:row-start-1 md:pr-2"
                          : "md:col-start-2 md:row-start-1 md:pl-2"
                      }`}
                    >
                      <article className="ic-panel ic-reveal rounded-card p-6 md:p-8">
                        <span className="ic-corner ic-corner-tl" />
                        <span className="ic-corner ic-corner-tr" />
                        <span className="ic-corner ic-corner-bl" />
                        <span className="ic-corner ic-corner-br" />
                        <span className="ic-watermark font-amiri">{item.arabic}</span>

                        {/* ปี + บท (mobile เท่านั้น) */}
                        <div className="md:hidden mb-3">
                          <span
                            className="font-cinzel text-[10px] tracking-[0.3em] uppercase"
                            style={{ color: "#d98a6e" }}
                          >
                            Chapter {item.chapter}
                          </span>
                          <p className="font-cinzel text-2xl text-gold mt-1">{item.year}</p>
                        </div>

                        <p
                          className="inline-block font-pridi text-xs px-3 py-1 rounded-full mb-4 border"
                          style={{
                            color: "#f0c9a8",
                            background: "rgba(139,26,26,0.35)",
                            borderColor: "rgba(217,138,110,0.35)",
                          }}
                        >
                          {item.era}
                        </p>

                        <div className="flex items-baseline gap-3 flex-wrap mb-1">
                          <h3 className="font-cinzel text-2xl md:text-3xl text-paper-white font-semibold">
                            {item.city}
                          </h3>
                          <span className="font-amiri text-2xl text-gold/80">{item.arabic}</span>
                        </div>
                        <p className="font-pridi text-gold/70 text-sm mb-4">{item.th}</p>

                        <div className="flex items-center gap-2 mb-4">
                          <span className="block h-px flex-1 bg-gradient-to-r from-gold/40 to-transparent" />
                          <span className="text-gold/50 text-[10px]">◆</span>
                        </div>

                        <p className="font-pridi text-paper-white/80 text-sm md:text-[0.95rem] leading-[1.9] mb-5">
                          {item.narrative}
                        </p>

                        <div
                          className="rounded-lg px-4 py-3 border"
                          style={{
                            background: "rgba(0,0,0,0.22)",
                            borderColor: "rgba(197,160,89,0.2)",
                          }}
                        >
                          <p className="font-cinzel text-[10px] tracking-[0.25em] uppercase text-gold/70 mb-2">
                            เหตุการณ์สำคัญ
                          </p>
                          <ul className="space-y-1.5">
                            {item.events.map((ev) => (
                              <li
                                key={ev}
                                className="font-pridi text-paper-white/65 text-xs md:text-sm leading-relaxed flex gap-2"
                              >
                                <span className="text-gold/60 shrink-0">✦</span>
                                <span>{ev}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </article>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ปิดท้าย */}
          <div className="text-center mt-20 ic-reveal">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="block h-px w-24 bg-gradient-to-r from-transparent to-gold/50" />
              <span className="text-gold text-lg">✦</span>
              <span className="block h-px w-24 bg-gradient-to-l from-transparent to-gold/50" />
            </div>
            <p className="font-pridi text-paper-white/50 text-sm max-w-xl mx-auto leading-relaxed">
              หนึ่งศตวรรษหลังฮิจเราะฮ์ อาณาเขตอิสลามแผ่กว้างจากมหาสมุทรแอตแลนติกจรดเอเชียกลาง
              — เลื่อนกลับขึ้นไปชมเส้นทางทั้งหมดบนแผนที่แบบอินเทอร์แอกทีฟด้านบน
            </p>
          </div>
        </div>
      </section>

      {/* BACK BUTTON */}
      <section className="py-12 bg-paper text-center">
        <a href="/" className="btn-outline font-pridi text-sm">
          ← กลับสู่หน้าแรก
        </a>
      </section>

      <Footer />
    </div>
  );
}
