"use client";

import Link from "next/link";
import { useState } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

const manuscripts = [
  // === หมวด: ต้นฉบับฮิญาซี (ศตวรรษที่ 1 ฮ.ศ.) ===
  {
    id: 1,
    title: "Ṣanʿāʾ Quran Manuscript (DAM 01-27.1)",
    titleTh: "ต้นฉบับอัลกุรอานซานาอา",
    category: "hijazi",
    categoryLabel: "ศตวรรษที่ 1 ฮ.ศ.",
    date: "ต้นศตวรรษที่ 1 ฮ.ศ.",
    script: "Hijazi Script",
    location: "Dār al-Makhṭūṭāt, Sana'a, Yemen",
    locationTh: "ดาร์ อัล-มัคตูฏอต ซานาอา เยเมน",
    description:
      "ค้นพบในปี ค.ศ. 1972 ระหว่างการบูรณะมัสยิดใหญ่ซานาอา เขียนด้วยอักษรฮิญาซีบนหนังสัตว์ UNESCO ได้จัดทำ CD รวบรวมต้นฉบับเหล่านี้ในโครงการ Memory of the World ถือเป็นหนึ่งในต้นฉบับที่เก่าแก่ที่สุดที่ยังหลงเหลืออยู่",
    sourceUrl: "https://www.islamic-awareness.org/quran/text/mss/alisanaa",
    image: "/manuscripts/quran/sanaa-quran.jpg",
    tags: ["Hijazi", "1st Century", "Yemen", "UNESCO"],
  },
  {
    id: 2,
    title: "Birmingham Quran Manuscript (Mingana 1572a)",
    titleTh: "ต้นฉบับอัลกุรอานเบอร์มิงแฮม",
    category: "hijazi",
    categoryLabel: "ศตวรรษที่ 1 ฮ.ศ.",
    date: "ค.ศ. 568–645 (Carbon-14)",
    script: "Hijazi Script",
    location: "University of Birmingham, UK",
    locationTh: "มหาวิทยาลัยเบอร์มิงแฮม สหราชอาณาจักร",
    description:
      "ผ่านการทดสอบ Carbon-14 ที่มหาวิทยาลัยอ็อกซ์ฟอร์ด พบว่ามีอายุย้อนไปถึงยุคนบีมุฮัมมัด ﷺ เขียนด้วยอักษรฮิญาซีบนหนังสัตว์ เป็นหนึ่งในต้นฉบับที่เก่าแก่ที่สุดที่รู้จักในโลก",
    sourceUrl: "https://www.islamic-awareness.org/quran/text/mss/m1572",
    image: "/manuscripts/quran/birmingham-quran.jpg",
    tags: ["Hijazi", "Carbon-14 Dated", "1st Century", "Parchment"],
  },
  {
    id: 3,
    title: "Khalili Collection Quran (KFQ 60)",
    titleTh: "ต้นฉบับอัลกุรอานคอลีลี",
    category: "hijazi",
    categoryLabel: "ศตวรรษที่ 1 ฮ.ศ.",
    date: "ปลายศตวรรษที่ 1 ฮ.ศ.",
    script: "Hijazi Script",
    location: "Nasser David Khalili Collection, London",
    locationTh: "คอลเลกชันนาศิร ดาวูด คอลีลี ลอนดอน",
    description:
      "ส่วนหนึ่งของคอลเลกชันศิลปะอิสลามที่ใหญ่ที่สุดในโลก เขียนด้วยอักษรฮิญาซีบนหนังสัตว์ ได้รับการศึกษาวิเคราะห์โดยนักวิชาการชั้นนำหลายท่าน",
    sourceUrl: "https://www.islamic-awareness.org/quran/text/mss/",
    image: "/manuscripts/quran/khalili-quran.jpg",
    tags: ["Hijazi", "1st Century", "London", "Private Collection"],
  },

  // === หมวด: ต้นฉบับอุษมาน ===
  {
    id: 4,
    title: "Samarqand (Uthman) Quran",
    titleTh: "ต้นฉบับอัลกุรอานซามาร์คันด์",
    category: "uthman",
    categoryLabel: "ยุคอุษมาน",
    date: "ศตวรรษที่ 2 ฮ.ศ. (Carbon-14)",
    script: "Kufic Script",
    location: "Khast Imam Library, Tashkent, Uzbekistan",
    locationTh: "ห้องสมุดคัสต์ อิหม่าม ทาชเคนต์ อุซเบกิสถาน",
    description:
      "รู้จักในนาม Mushaf Uthmān เชื่อกันว่าเป็นสำเนาที่เคาะลีฟะฮ์อุษมานสั่งจัดทำ ผ่านการทดสอบ Carbon-14 ที่มหาวิทยาลัยอ็อกซ์ฟอร์ด ได้ผลเป็นศตวรรษที่ 2 ฮ.ศ. เขียนด้วยอักษรคูฟิกบนหนังสัตว์",
    sourceUrl: "https://www.islamic-awareness.org/quran/text/mss/",
    image: "/manuscripts/quran/samarqand-quran.jpg",
    tags: ["Kufic", "Uthman", "Carbon-14 Dated", "Uzbekistan"],
  },
  {
    id: 5,
    title: "Topkapi Quran Manuscript",
    titleTh: "ต้นฉบับอัลกุรอานท็อปกาปึ",
    category: "uthman",
    categoryLabel: "ยุคอุษมาน",
    date: "ศตวรรษที่ 1–2 ฮ.ศ.",
    script: "Kufic Script",
    location: "Topkapi Palace Museum, Istanbul, Turkey",
    locationTh: "พิพิธภัณฑ์พระราชวังท็อปกาปึ อิสตันบูล ตุรกี",
    description:
      "มี 408 หน้า ครอบคลุมมากกว่า 99% ของข้อความอัลกุรอาน ขาดไปเพียง 2 หน้า แสดงรูปแบบการเขียนและตกแต่งตัวอักษรในยุคอุมัยยะห์ปลายศตวรรษที่ 1 ถือเป็นต้นฉบับที่สมบูรณ์ที่สุดชิ้นหนึ่ง",
    sourceUrl: "https://www.islamic-awareness.org/quran/text/mss/",
    image: "/manuscripts/quran/topkapi-quran.jpg",
    tags: ["Kufic", "Uthman", "408 Folios", "Istanbul"],
  },
  {
    id: 6,
    title: "Turkish & Islamic Arts Museum Quran",
    titleTh: "ต้นฉบับอัลกุรอานพิพิธภัณฑ์ศิลปะตุรกีและอิสลาม",
    category: "uthman",
    categoryLabel: "ยุคอุษมาน",
    date: "ศตวรรษที่ 1–2 ฮ.ศ.",
    script: "Kufic Script",
    location: "Türk ve İslam Eserleri Müzesi, Istanbul",
    locationTh: "พิพิธภัณฑ์ศิลปะตุรกีและอิสลาม อิสตันบูล",
    description:
      "เขียนด้วยอักษรคูฟิกบนหนังกวาง มี 439 หน้า ที่น่าสังเกตคือในหน้าสุดท้ายมีข้อความคูฟิกเขียนว่า 'Katabahu Uthmān bin Affān fi sanat thalathyn' (อุษมานบินอัฟฟานเขียนในปีที่ 30) แม้นักวิชาการบางส่วนจะโต้แย้งเรื่องนี้",
    sourceUrl: "https://www.islamic-awareness.org/quran/text/mss/",
    image: "/manuscripts/quran/turkish-islamic-quran.jpg",
    tags: ["Kufic", "Uthman", "Gazelle Skin", "439 Folios"],
  },
  {
    id: 7,
    title: "St. Petersburg Quran Manuscript",
    titleTh: "ต้นฉบับอัลกุรอานเซนต์ปีเตอร์สเบิร์ก",
    category: "uthman",
    categoryLabel: "ยุคอุษมาน",
    date: "ศตวรรษที่ 2 ฮ.ศ.",
    script: "Hijazi Script",
    location: "Institute of Oriental Studies, St. Petersburg, Russia",
    locationTh: "สถาบันการศึกษาตะวันออก เซนต์ปีเตอร์สเบิร์ก รัสเซีย",
    description:
      "เขียนด้วยอักษรฮิญาซี ครอบคลุมประมาณ 40% ของข้อความอัลกุรอาน มีซูเราะฮ์ครบ 22 บท และชิ้นส่วนของซูเราะฮ์อื่น ถือเป็นตัวแทนสำคัญของต้นฉบับที่เชื่อว่าเป็นอุษมานิก",
    sourceUrl: "https://www.islamic-awareness.org/quran/text/mss/",
    image: "/manuscripts/quran/stpetersburg-quran.jpg",
    tags: ["Hijazi", "Uthman", "Russia", "22 Surahs"],
  },

  // === หมวด: ยุคอับบาซิด (อักษรคูฟิก) ===
  {
    id: 8,
    title: "Blue Quran",
    titleTh: "อัลกุรอานสีน้ำเงิน",
    category: "abbasid",
    categoryLabel: "ยุคอับบาซิด",
    date: "ศตวรรษที่ 9–10 ค.ศ.",
    script: "Kufic Script (Gold on Blue Vellum)",
    location: "National Museum of Bardo, Tunisia",
    locationTh: "พิพิธภัณฑ์แห่งชาติบาร์โด ตูนิเซีย",
    description:
      "หนึ่งในต้นฉบับที่สวยงามที่สุดในประวัติศาสตร์อิสลาม เขียนด้วยหมึกทองคำและเงินบนหนังย้อมสีน้ำเงินเข้มด้วยครามอินดิโก เชื่อว่าสร้างในตูนิเซียยุคราชวงศ์ฟาฏิมียะห์ ชิ้นส่วนกระจายอยู่ในพิพิธภัณฑ์หลายแห่งทั่วโลก",
    sourceUrl: "https://www.islamic-awareness.org/quran/text/mss/",
    image: "/manuscripts/quran/blue-quran.jpg",
    tags: ["Kufic", "Gold Ink", "Blue Vellum", "Fatimid"],
  },
  {
    id: 9,
    title: "Chester Beatty Library Quran (CBL Is 1615)",
    titleTh: "ต้นฉบับอัลกุรอานเชสเตอร์ บีตตี้",
    category: "abbasid",
    categoryLabel: "ยุคอับบาซิด",
    date: "ศตวรรษที่ 9 ค.ศ.",
    script: "Kufic Script",
    location: "Chester Beatty Library, Dublin, Ireland",
    locationTh: "ห้องสมุดเชสเตอร์ บีตตี้ ดับลิน ไอร์แลนด์",
    description:
      "เก็บรักษาอยู่ที่ห้องสมุดเชสเตอร์ บีตตี้ซึ่งมีคอลเลกชันต้นฉบับอิสลามที่สำคัญที่สุดแห่งหนึ่งในโลกตะวันตก เขียนด้วยอักษรคูฟิกสไตล์ยุคอับบาซิด มีการตกแต่งหัวบทอย่างประณีต",
    sourceUrl: "https://www.islamic-awareness.org/quran/text/mss/",
    image: "/manuscripts/quran/chester-beatty-quran.jpg",
    tags: ["Kufic", "Abbasid", "Dublin", "9th Century"],
  },
  {
    id: 10,
    title: "Timurid Quran Manuscript",
    titleTh: "ต้นฉบับอัลกุรอานยุคติมูริด",
    category: "timurid",
    categoryLabel: "ยุคติมูริด",
    date: "ศตวรรษที่ 15 ค.ศ.",
    script: "Naskh & Thuluth Script",
    location: "Metropolitan Museum of Art, New York",
    locationTh: "พิพิธภัณฑ์ศิลปะเมโทรโพลิทัน นิวยอร์ก",
    description:
      "ต้นฉบับหนา 534 หน้า เขียนบนกระดาษจีนที่ผสมทองคำ มีสีสันหลากหลายทั้งชมพู ม่วง ครีม ส้ม ฟ้า และเขียว ถือเป็นผลงานชิ้นเอกของศิลปะอิสลามยุคติมูริด",
    sourceUrl: "https://www.islamic-awareness.org/quran/text/mss/",
    image: "/manuscripts/quran/timurid-quran.jpg",
    tags: ["Naskh", "Timurid", "Illuminated", "Gold"],
  },
];

const filters = [
  { id: "all", label: "ทั้งหมด" },
  { id: "hijazi", label: "ศตวรรษที่ 1 ฮ.ศ." },
  { id: "uthman", label: "ยุคอุษมาน" },
  { id: "abbasid", label: "ยุคอับบาซิด" },
  { id: "timurid", label: "ยุคติมูริด" },
];

export default function QuranManuscripts() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? manuscripts
      : manuscripts.filter((m) => m.category === activeFilter);

  return (
    <div className="bg-paper text-ink">
      <Navbar />

      {/* HERO */}
      <section className="relative py-24 bg-ink overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none select-none flex items-center justify-center">
          <span className="font-cinzel text-[20rem] text-gold leading-none">
            ﷽
          </span>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 font-pridi text-sm text-paper/50 mb-8">
            <Link href="/" className="hover:text-gold transition-colors">
              Home
            </Link>
            <span className="text-gold/40">›</span>
            <span className="text-paper/50">Archive</span>
            <span className="text-gold/40">›</span>
            <span className="text-gold">Qur'anic Manuscripts</span>
          </nav>

          <div className="text-center">
            <p className="font-cinzel text-xs tracking-[0.4em] uppercase text-gold-dark mb-4">
              The Archive
            </p>
            <h1 className="font-cinzel text-4xl md:text-6xl text-gold mb-4 leading-tight">
              Qur'anic Manuscripts
            </h1>
            <div className="mx-auto h-px w-24 bg-gold/50 mb-6" />
            <p className="font-pridi text-lg md:text-xl text-paper/80 max-w-2xl mx-auto leading-relaxed">
              ต้นฉบับอัลกุรอานโบราณจากแหล่งสะสมทั่วโลก
            </p>
          </div>
        </div>
      </section>

      {/* FILTER BAR */}
      <section className="py-8 bg-paper-light border-b border-gold/20 sticky top-0 z-30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`font-pridi text-sm px-4 py-2 rounded-btn border transition-colors duration-200 ${
                  activeFilter === f.id
                    ? "bg-gold text-ink border-gold font-semibold"
                    : "border-gold/30 text-ink/70 hover:border-gold/60 hover:text-ink bg-transparent"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* MANUSCRIPT GRID */}
      <section className="py-16 bg-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-pridi text-sm text-ink/50 text-center mb-10">
            แสดง {filtered.length} รายการ
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filtered.map((m) => (
              <div
                key={m.id}
                className="group bg-paper-light border border-gold/20 rounded-card overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-transform duration-300"
              >
                {/* รูปภาพ */}
                <div className="relative h-56 overflow-hidden">
                  {m.id === 1 ? (
                    <a href="/archive/quran-manuscripts/sanaa">
                      <img
                        src={m.image}
                        alt={m.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer hover:opacity-90 transition-opacity"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "/manuscripts/quran/placeholder.jpg";
                          e.target.className =
                            "w-full h-full object-contain p-8 opacity-30";
                        }}
                      />
                    </a>
                  ) : m.id === 2 ? (
                    <a href="/archive/quran-manuscripts/birmingham">
                      <img
                        src={m.image}
                        alt={m.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer hover:opacity-90 transition-opacity"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "/manuscripts/quran/placeholder.jpg";
                          e.target.className =
                            "w-full h-full object-contain p-8 opacity-30";
                        }}
                      />
                    </a>
                  ) : (
                    <img
                      src={m.image}
                      alt={m.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/manuscripts/quran/placeholder.jpg";
                        e.target.className =
                          "w-full h-full object-contain p-8 opacity-30";
                      }}
                    />
                  )}
                  <div className="absolute top-3 left-3">
                    <span className="bg-gold text-ink font-pridi text-xs px-2 py-1 rounded-full">
                      {m.categoryLabel}
                    </span>
                  </div>
                </div>

                {/* เนื้อหา */}
                <div className="p-6">
                  {m.id === 1 ? (
                    <a
                      href="/archive/quran-manuscripts/sanaa"
                      className="hover:text-gold transition-colors"
                    >
                      <h3 className="font-cinzel text-xl text-ink font-semibold mb-1">
                        {m.title}
                      </h3>
                    </a>
                  ) : m.id === 2 ? (
                    <a
                      href="/archive/quran-manuscripts/birmingham"
                      className="hover:text-gold transition-colors"
                    >
                      <h3 className="font-cinzel text-xl text-ink font-semibold mb-1">
                        {m.title}
                      </h3>
                    </a>
                  ) : (
                    <h3 className="font-cinzel text-xl text-ink font-semibold mb-1">
                      {m.title}
                    </h3>
                  )}
                  <p className="font-pridi text-ink-muted text-sm mb-3">
                    {m.titleTh}
                  </p>

                  {/* ข้อมูล */}
                  <div className="space-y-1 mb-4 text-sm">
                    <p className="font-pridi text-ink/70">📅 {m.date}</p>
                    <p className="font-pridi text-ink/70">✍️ {m.script}</p>
                    <p className="font-pridi text-ink/70">📍 {m.locationTh}</p>
                  </div>

                  <p className="font-pridi text-sm text-ink/80 leading-relaxed mb-4">
                    {m.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {m.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-gold/30 text-gold font-cinzel text-xs px-2 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* ปุ่ม */}
                  <a
                    href={m.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block btn-outline text-center text-sm py-2 font-pridi"
                  >
                    แหล่งต้นฉบับ ↗
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* แหล่งข้อมูลอ้างอิง */}
      <section className="py-16 bg-ink">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-cinzel text-2xl text-gold mb-8">
            แหล่งข้อมูลอ้างอิง
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                name: "Islamic Awareness",
                url: "https://www.islamic-awareness.org/quran/text/mss/",
                desc: "ฐานข้อมูล manuscript อิสลาม",
              },
              {
                name: "Internet Archive",
                url: "https://archive.org",
                desc: "คลังดิจิทัล Public Domain",
              },
              {
                name: "Corpus Coranicum",
                url: "https://corpuscoranicum.de",
                desc: "ฐานข้อมูลวิชาการเยอรมัน",
              },
            ].map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-glass p-4 text-center hover:border-gold/60 transition-colors"
              >
                <p className="font-cinzel text-gold font-semibold mb-1">
                  {s.name}
                </p>
                <p className="font-pridi text-paper/70 text-sm">{s.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
