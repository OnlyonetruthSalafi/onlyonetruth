"use client";

import Link from "next/link";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

const islamEvents = [
  {
    year: "ค.ศ. 610-632",
    place: "มักกะฮ์ และ มะดีนะฮ์",
    desc: "ท่านนบีมุฮัมมัด (ซ.ล.) เริ่มเผยแพร่อิสลามที่มักกะฮ์ ก่อนอพยพ (ฮิจเราะฮ์) สู่มะดีนะฮ์ในปี ค.ศ. 622 วางรากฐานชุมชนมุสลิมแห่งแรก",
  },
  {
    year: "ค.ศ. 632-661",
    place: "ดามัสกัส และ เยรูซาเล็ม",
    desc: "ยุคเคาะลีฟะฮ์ผู้ทรงธรรม (Rashidun) อิสลามขยายตัวสู่เลแวนต์ พิชิตเยรูซาเล็มปี ค.ศ. 637 และดามัสกัสกลายเป็นศูนย์กลางการปกครองสำคัญ",
  },
  {
    year: "ค.ศ. 641",
    place: "อเล็กซานเดรีย",
    desc: "อิสลามขยายสู่อียิปต์ อเล็กซานเดรียซึ่งเคยเป็นศูนย์กลางความรู้ของโลกกรีก-โรมัน กลายเป็นส่วนหนึ่งของอาณาจักรอิสลาม",
  },
  {
    year: "ค.ศ. 711",
    place: "กอร์โดบา (อันดะลุส)",
    desc: "กองทัพมุสลิมข้ามช่องแคบยิบรอลตาร์ พิชิตคาบสมุทรไอบีเรีย กอร์โดบากลายเป็นศูนย์กลางวิทยาการและวัฒนธรรมอิสลามในยุโรป นานกว่า 700 ปี",
  },
];

const christianEvents = [
  {
    year: "ค.ศ. 30-33",
    place: "เยรูซาเล็ม",
    desc: "จุดเริ่มต้นพันธกิจของพระเยซู การตรึงกางเขน และการเริ่มต้นของคริสตจักรยุคแรกในเยรูซาเล็มหลังเหตุการณ์เพนเทคอสต์",
  },
  {
    year: "ค.ศ. 45-58",
    place: "โครินธ์ (Corinth)",
    desc: "นักบุญเปาโลเดินทางเผยแพร่ศาสนาผ่านการเดินทางมิชชันนารีสามครั้ง ก่อตั้งคริสตจักรที่โครินธ์และเขียนจดหมายสำคัญถึงชุมชนที่นั่น",
  },
  {
    year: "ค.ศ. 60-64",
    place: "โรม",
    desc: "นักบุญเปาโลเดินทางถึงกรุงโรม เผยแพร่ศาสนาในใจกลางจักรวรรดิโรมัน ก่อนถูกจองจำและเชื่อว่าถูกประหารชีวิตที่นั่น",
  },
];

export default function DetailedPathsOfFaith() {
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
            <Link href="/textual-history" className="hover:text-gold transition-colors">
              Textual History
            </Link>
            <span className="text-gold/40">›</span>
            <span className="text-gold">เส้นทางประวัติศาสตร์แบบละเอียด</span>
          </nav>

          <div className="text-center">
            <h1 className="font-cinzel text-3xl md:text-5xl text-paper-white mb-3 leading-tight">
              Paths of Propagation
            </h1>
            <h2 className="font-cinzel text-xl md:text-2xl text-gold mb-6">
              เส้นทางประวัติศาสตร์แบบละเอียด
            </h2>
            <div className="mx-auto h-px w-24 bg-gold/50 mb-6" />
            <p className="font-pridi text-lg text-paper-white/80 max-w-2xl mx-auto leading-relaxed">
              การเผยแพร่ศาสนาอิสลามและคริสต์ศาสนา จากจุดกำเนิดสู่การขยายตัวทั่วโลกยุคโบราณ
            </p>
          </div>
        </div>
      </section>

      {/* ISLAM PATH */}
      <section className="py-16 bg-paper">
        <div className="max-w-4xl mx-auto px-gutter">
          <h2 className="font-cinzel text-3xl text-gold mb-2">เส้นทางอิสลาม</h2>
          <p className="font-pridi text-ink-muted mb-10">The Islamic Expansion</p>

          <div className="space-y-6">
            {islamEvents.map((item, i) => (
              <div key={i} className="card-glass p-6 flex gap-4">
                <span className="font-cinzel text-gold font-bold text-lg shrink-0 w-32">
                  {item.year}
                </span>
                <div>
                  <h3 className="font-cinzel text-ink font-semibold mb-1">{item.place}</h3>
                  <p className="font-pridi text-ink/70 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHRISTIAN PATH */}
      <section className="py-16 bg-ink">
        <div className="max-w-4xl mx-auto px-gutter">
          <h2 className="font-cinzel text-3xl text-[#e8935f] mb-2">เส้นทางคริสต์ศาสนา</h2>
          <p className="font-pridi text-paper-white/60 mb-10">The Christian Mission</p>

          <div className="space-y-6">
            {christianEvents.map((item, i) => (
              <div key={i} className="card-glass p-6 flex gap-4">
                <span className="font-cinzel text-[#e8935f] font-bold text-lg shrink-0 w-32">
                  {item.year}
                </span>
                <div>
                  <h3 className="font-cinzel text-paper-white font-semibold mb-1">{item.place}</h3>
                  <p className="font-pridi text-paper-white/70 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BACK BUTTON */}
      <section className="py-12 bg-paper text-center">
        <a href="/textual-history" className="btn-outline font-pridi text-sm">
          ← กลับสู่ประวัติศาสตร์การรวบรวมคัมภีร์
        </a>
      </section>

      <Footer />
    </div>
  );
}
