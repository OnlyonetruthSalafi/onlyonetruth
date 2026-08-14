"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import SearchModal from "./SearchModal";

const menuItems = [
  { en: "HOME", th: "หน้าแรก", href: "/" },
  { en: "ARCHIVE", th: "คลังเอกสาร", scrollId: "collections-section" },
  { en: "TEXTUAL HISTORY", th: "ประวัติศาสตร์", href: "/textual-history" },
  { en: "METHODOLOGY", th: "ระเบียบวิธี", href: "/methodology" },
  { en: "ARTICLE", th: "บทความ", href: "/articles" },
  { en: "PATHS OF FAITH", th: "เส้นทางแห่งศรัทธา", href: "/paths-of-faith" },
];

// ป้ายเมนู EN/TH พร้อมเส้นทองรูดใต้ตอน hover / active
function MenuLabel({ item, active }) {
  return (
    <span className="relative flex flex-col items-center gap-0.5 pb-1">
      <span
        className={`font-cinzel text-sm tracking-[0.15em] whitespace-nowrap transition-colors duration-300 ${
          active ? "text-gold" : "text-paper-white group-hover:text-gold"
        }`}
      >
        {item.en}
      </span>
      <span
        className={`font-pridi text-xs transition-colors duration-300 ${
          active ? "text-gold/70" : "text-paper-white/50 group-hover:text-gold/70"
        }`}
      >
        {item.th}
      </span>
      <span
        className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-px bg-gradient-to-r from-transparent via-gold to-transparent transition-all duration-500 ${
          active ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
        }`}
      />
    </span>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // คีย์ลัดค้นหา Ctrl+K / ⌘K
  useEffect(() => {
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const goScroll = (id) => {
    if (window.location.pathname !== "/") {
      window.location.href = `/#${id}`;
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-md transition-all duration-300 ${
        scrolled
          ? "bg-gradient-to-b from-[#241512]/98 to-[#2a1a17]/95 shadow-[0_8px_30px_rgba(0,0,0,0.45)]"
          : "bg-gradient-to-b from-[#241512]/90 to-[#2a1a17]/80"
      }`}
    >
      <nav
        aria-label="Primary"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 md:h-24 flex items-center justify-between"
      >
        {/* Logo */}
        <a href="/" className="group/logo flex items-center gap-3">
          {/* ดาว 8 แฉกประจำเว็บ */}
          <span className="tl-node8 shrink-0 scale-110 transition-transform duration-500 group-hover/logo:rotate-45">
            <span className="tl-node8-core" />
          </span>
          <span className="flex flex-col gap-0.5">
            <span className="font-cinzel-deco text-lg md:text-2xl font-bold tracking-[0.12em] leading-none text-shimmer">
              ONLYONETRUTH
            </span>
            <span className="flex items-center gap-2">
              <span className="hidden sm:block h-px w-5 bg-gradient-to-r from-transparent to-gold/50" />
              <span className="font-pridi text-[0.7rem] text-gold/70 font-light tracking-[0.15em]">
                เพราะสัจธรรมมีแค่หนึ่งเดียว
              </span>
              <span className="hidden sm:block h-px w-5 bg-gradient-to-l from-transparent to-gold/50" />
            </span>
          </span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-5 xl:gap-7 mx-8 xl:mx-12">
          {menuItems.map((item) => {
            const active = item.href && pathname === item.href && item.href !== "/";
            return (
              <li key={item.en}>
                {item.scrollId ? (
                  <button onClick={() => goScroll(item.scrollId)} className="group">
                    <MenuLabel item={item} active={false} />
                  </button>
                ) : (
                  <Link href={item.href} className="group">
                    <MenuLabel item={item} active={active} />
                  </Link>
                )}
              </li>
            );
          })}
        </ul>

        {/* ปุ่มค้นหา */}
        <button
          onClick={() => setSearchOpen(true)}
          className="hidden lg:inline-flex items-center gap-2.5 bg-gradient-to-r from-gold-dark via-gold to-gold-light text-ink px-6 py-2.5 rounded-btn transition-all duration-300 shadow-glow-sm hover:shadow-glow hover:-translate-y-0.5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            className="w-4 h-4"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
          <span className="flex flex-col items-center leading-tight">
            <span className="font-cinzel text-sm tracking-[0.15em] font-semibold">SEARCH</span>
            <span className="font-pridi text-xs opacity-70">ค้นหา</span>
          </span>
        </button>

        {/* ปุ่มค้นหา (มือถือ) */}
        <button
          onClick={() => setSearchOpen(true)}
          aria-label="ค้นหา"
          className="lg:hidden inline-flex items-center justify-center w-10 h-10 text-gold focus:outline-none focus:ring-2 focus:ring-gold/60 rounded-btn"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="w-5 h-5"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
        </button>

        {/* Hamburger */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex items-center justify-center w-10 h-10 text-gold focus:outline-none focus:ring-2 focus:ring-gold/60 rounded-btn"
        >
          <span className="sr-only">Menu</span>
          <div className="relative w-6 h-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-6 bg-current transition-transform duration-300 ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-2 h-0.5 w-6 bg-current transition-opacity duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-4 h-0.5 w-6 bg-current transition-transform duration-300 ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* เส้นทองไล่เฉดใต้ header */}
      <div
        className={`h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent transition-opacity duration-300 ${
          scrolled ? "opacity-100" : "opacity-50"
        }`}
      />

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden bg-gradient-to-b from-[#2a1a17]/98 to-ink/98 backdrop-blur-md transition-[max-height,opacity] duration-500 ease-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="px-4 py-3">
          {menuItems.map((item) => (
            <li key={item.en}>
              {item.scrollId ? (
                <button
                  onClick={() => {
                    setOpen(false);
                    goScroll(item.scrollId);
                  }}
                  className="w-full flex items-center gap-3 py-3 border-b border-gold/10 hover:bg-gold/5 px-2 rounded-btn transition-colors group"
                >
                  <span className="text-gold/40 text-xs">✦</span>
                  <div className="flex flex-col items-start">
                    <span className="font-cinzel text-sm text-paper-white tracking-[0.15em] group-hover:text-gold transition-colors">
                      {item.en}
                    </span>
                    <span className="font-pridi text-xs text-paper-white/50 group-hover:text-gold/70 transition-colors">
                      {item.th}
                    </span>
                  </div>
                </button>
              ) : (
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 py-3 border-b border-gold/10 hover:bg-gold/5 px-2 rounded-btn transition-colors group"
                >
                  <span className="text-gold/40 text-xs">✦</span>
                  <div className="flex flex-col">
                    <span className="font-cinzel text-sm text-paper-white tracking-[0.15em] group-hover:text-gold transition-colors">
                      {item.en}
                    </span>
                    <span className="font-pridi text-xs text-paper-white/50 group-hover:text-gold/70 transition-colors">
                      {item.th}
                    </span>
                  </div>
                </Link>
              )}
            </li>
          ))}
          <li className="pt-3">
            <button
              onClick={() => { setOpen(false); setSearchOpen(true); }}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-gold-dark via-gold to-gold-light text-ink py-2.5 rounded-btn shadow-glow-sm transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                className="w-4 h-4"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" />
              </svg>
              <span className="flex flex-col items-start leading-tight">
                <span className="font-cinzel text-sm tracking-[0.15em] font-semibold">SEARCH</span>
                <span className="font-pridi text-xs opacity-70">ค้นหา</span>
              </span>
            </button>
          </li>
        </ul>
      </div>

      {/* โมดัลค้นหาทั้งเว็บ */}
      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}
