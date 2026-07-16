'use client'

const resourceLinks = [
  { href: "/articles", label: "เกี่ยวกับโปรเจกต์" },
  { href: "#privacy", label: "นโยบายความเป็นส่วนตัว" },
  { href: "#faq", label: "คำถามที่พบบ่อย" },
  { href: "#contact", label: "ติดต่อ" },
];

const linkCls =
  "font-pridi text-sm text-paper/70 hover:text-gold hover:pl-1 transition-all duration-300";
const btnCls = `${linkCls} text-left cursor-pointer`;

function scrollTo(id) {
  if (window.location.pathname !== "/") {
    window.location.href = `/#${id}`;
  } else {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }
}

// หัวคอลัมน์พร้อมขีดทองสั้นใต้ชื่อ
function ColumnHeading({ children }) {
  return (
    <h4 className="font-cinzel text-sm tracking-[0.25em] text-gold mb-2 uppercase">
      {children}
      <span className="block mt-2 h-px w-10 bg-gradient-to-r from-gold/70 to-transparent" />
    </h4>
  );
}

function SocialIcon({ children, label, href }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gold/40 text-gold/80 hover:text-ink hover:bg-gradient-to-br hover:from-gold-light hover:to-gold-dark hover:border-gold hover:shadow-glow-sm transition-all duration-300 hover:-translate-y-1"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative text-paper overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #3E2723 0%, #2a1a17 55%, #1d100d 100%)",
      }}
    >
      {/* เส้นทองคู่ + ดาว 8 แฉก คั่นระหว่างเนื้อหากับ footer */}
      <div className="relative flex items-center justify-center gap-4 pt-10">
        <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-transparent to-gold/60" />
        <div className="tl-node8">
          <span className="tl-node8-core" />
        </div>
        <div className="h-px flex-1 max-w-xs bg-gradient-to-l from-transparent to-gold/60" />
      </div>

      {/* ลายน้ำอาหรับจางกลางพื้นหลัง */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 flex justify-center pointer-events-none select-none"
      >
        <span className="font-amiri text-[clamp(5rem,14vw,11rem)] leading-none text-gold/[0.05] whitespace-nowrap translate-y-1/4">
          الحق واحد لا يتعدد
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-cinzel-deco text-xl md:text-2xl font-bold tracking-[0.12em] mb-1 text-shimmer">
              ONLYONETRUTH
            </h3>
            <p className="font-pridi text-xs text-gold/60 tracking-[0.15em] mb-4">
              เพราะสัจธรรมมีแค่หนึ่งเดียว
            </p>
            <p className="font-pridi text-sm text-paper-white/70 leading-relaxed max-w-sm">
              เพราะการตามหาความจริงของชีวิต คือ แพสชั่น ของคณะผู้จัดทำมาช้านาน
              อันนำมาสู่การสร้างเว็บไซต์นี้ และหวังว่าท่านผู้เข้าชมจะได้คำตอบที่ตัวเองค้นหาเช่นกัน
            </p>
            <p
              className="font-amiri text-xl text-gold/90 mt-4 drop-shadow-[0_0_10px_rgba(212,175,55,0.25)]"
              dir="rtl"
              lang="ar"
            >
              الحق واحد لا يتعدد
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <ColumnHeading>ลิงก์ด่วน</ColumnHeading>
              <ul className="space-y-2 mt-4">
                <li>
                  <a href="/" className={linkCls}>หน้าแรก</a>
                </li>
                <li>
                  <button
                    onClick={() => scrollTo("collections-section")}
                    className={btnCls}
                  >
                    คลังเอกสาร
                  </button>
                </li>
                <li>
                  <a href="/textual-history" className={linkCls}>ประวัติศาสตร์</a>
                </li>
                <li>
                  <button
                    onClick={() => scrollTo("about-project")}
                    className={btnCls}
                  >
                    บทความ
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollTo("archive-cta")}
                    className={btnCls}
                  >
                    วิจารณ์ตัวบท
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <ColumnHeading>แหล่งข้อมูล</ColumnHeading>
              <ul className="space-y-2 mt-4">
                {resourceLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className={linkCls}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div>
            <ColumnHeading>ติดต่อเรา</ColumnHeading>
            <p className="font-pridi text-sm text-paper/70 mb-5 mt-4">
              สำหรับคำถาม ความร่วมมือด้านวิชาการ หรือการเข้าถึงคลังเอกสาร
            </p>
            <div className="flex gap-3">
              <SocialIcon href="#" label="Email">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
              </SocialIcon>
              <SocialIcon href="#" label="X / Twitter">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M18.244 2H21l-6.49 7.41L22 22h-6.828l-4.79-6.26L4.8 22H2.046l6.94-7.93L2 2h6.91l4.34 5.74L18.244 2zm-2.39 18h1.88L7.27 4H5.27l10.585 16z" />
                </svg>
              </SocialIcon>
              <SocialIcon href="#" label="GitHub">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.16c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.34.95.1-.74.4-1.24.73-1.53-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.35.78 1.04.78 2.1v3.11c0 .3.21.66.79.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
                </svg>
              </SocialIcon>
              <SocialIcon href="#" label="Scholar">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="M22 10L12 4 2 10l10 6 10-6z" />
                  <path d="M6 12v5c3 2 9 2 12 0v-5" />
                </svg>
              </SocialIcon>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="relative border-t border-gold/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-3">
          <span className="absolute -top-[5px] left-1/2 -translate-x-1/2 text-gold/50 text-[0.6rem] bg-[#241512] px-3">
            ✦
          </span>
          <p className="font-pridi text-xs md:text-sm text-paper/70 tracking-wide">
            © {new Date().getFullYear()}{" "}
            <span className="font-cinzel-deco text-gold/90">OnlyOneTruth</span>{" "}
            | เพื่อการศึกษาและเปรียบเทียบทางวิชาการ
          </p>
          <p className="font-cinzel text-xs md:text-sm text-gold/50 tracking-[0.3em] uppercase">
            Veritas · Antiquitas · Memoria
          </p>
        </div>
      </div>
    </footer>
  );
}
