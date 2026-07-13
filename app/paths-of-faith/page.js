"use client";

import { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FaithJourneyMap from "../../components/FaithJourneyMap";

const islamicCities = [
  { city: "MECCA", th: "มักกะฮ์", year: "ค.ศ. 610", desc: "จุดกำเนิดการประทานวะฮีย์แก่ท่านนบีมุฮัมมัด (ซ.ล.)" },
  { city: "MEDINA", th: "มะดีนะฮ์", year: "ค.ศ. 622", desc: "ฮิจเราะฮ์ การอพยพที่วางรากฐานชุมชนมุสลิมแห่งแรก" },
  { city: "JERUSALEM", th: "เยรูซาเล็ม", year: "ค.ศ. 637", desc: "การขยายตัวสู่ดินแดนเลแวนต์ในยุคเคาะลีฟะฮ์อุมัร" },
  { city: "DAMASCUS", th: "ดามัสกัส", year: "ค.ศ. 634", desc: "ศูนย์กลางการปกครองสำคัญของอาณาจักรอิสลามยุคแรก" },
  { city: "ALEXANDRIA", th: "อเล็กซานเดรีย", year: "ค.ศ. 641", desc: "การขยายตัวสู่อียิปต์ ศูนย์กลางความรู้แห่งโลกโบราณ" },
  { city: "CORDOBA", th: "กอร์โดบา", year: "ค.ศ. 711", desc: "จุดสูงสุดของการขยายตัวสู่คาบสมุทรไอบีเรีย" },
];

const christianCities = [
  { city: "JERUSALEM", th: "เยรูซาเล็ม", year: "ค.ศ. 30-33", desc: "จุดเริ่มต้นพันธกิจของพระเยซู และการก่อตั้งคริสตจักรยุคแรก" },
  { city: "ANTIOCH", th: "อันติออก", year: "ค.ศ. 47", desc: "จุดเริ่มต้นการเดินทางมิชชันนารีครั้งแรกของนักบุญเปาโล" },
  { city: "PHILIPPI", th: "ฟิลิปปี", year: "ค.ศ. 49", desc: "คริสตจักรแห่งแรกในทวีปยุโรปที่เปาโลก่อตั้ง" },
  { city: "CORINTH", th: "โครินธ์", year: "ค.ศ. 50-52", desc: "ชุมชนคริสเตียนสำคัญที่เปาโลเขียนจดหมายถึงหลายฉบับ" },
  { city: "EPHESUS", th: "เอเฟซัส", year: "ค.ศ. 52-55", desc: "ศูนย์กลางมิชชันนารีสำคัญในเอเชียไมเนอร์" },
  { city: "ROME", th: "โรม", year: "ค.ศ. 60-64", desc: "จุดหมายปลายทางสุดท้าย ใจกลางจักรวรรดิโรมัน" },
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
    return () => window.removeEventListener("scroll", handleScroll);
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
        </div>
      </section>

      {/* ISLAMIC PATH */}
      <section className="py-20 bg-paper">
        <div className="max-w-5xl mx-auto px-gutter">
          <div className="text-center mb-14">
            <p
              className="font-cinzel text-xs tracking-[0.3em] uppercase mb-3"
              style={{ color: "#8b1a1a" }}
            >
              THE ISLAMIC EXPANSION
            </p>
            <h2 className="font-cinzel text-3xl md:text-4xl text-ink">เส้นทางอิสลาม</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {islamicCities.map((item) => (
              <div
                key={item.city}
                className="tilt-card group relative rounded-card p-6 border cursor-default"
                style={{
                  background: "rgba(139,26,26,0.04)",
                  borderColor: "rgba(139,26,26,0.2)",
                }}
              >
                <span className="font-cinzel text-xs tracking-widest" style={{ color: "#8b1a1a" }}>
                  {item.year}
                </span>
                <h3 className="font-cinzel text-xl text-ink font-semibold mt-2 mb-1">
                  {item.city}
                </h3>
                <p className="font-pridi text-ink-muted text-sm mb-3">{item.th}</p>
                <p className="font-pridi text-ink/70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHRISTIAN PATH */}
      <section className="py-20 bg-ink">
        <div className="max-w-5xl mx-auto px-gutter">
          <div className="text-center mb-14">
            <p className="font-cinzel text-xs tracking-[0.3em] uppercase mb-3 text-paper-white/50">
              THE CHRISTIAN MISSION
            </p>
            <h2 className="font-cinzel text-3xl md:text-4xl text-paper-white">
              เส้นทางคริสต์ศาสนา
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {christianCities.map((item) => (
              <div
                key={item.city}
                className="tilt-card group relative rounded-card p-6 border cursor-default"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  borderColor: "rgba(255,255,255,0.15)",
                }}
              >
                <span className="font-cinzel text-xs tracking-widest text-paper-white/50">
                  {item.year}
                </span>
                <h3 className="font-cinzel text-xl text-paper-white font-semibold mt-2 mb-1">
                  {item.city}
                </h3>
                <p className="font-pridi text-paper-white/60 text-sm mb-3">{item.th}</p>
                <p className="font-pridi text-paper-white/70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
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
