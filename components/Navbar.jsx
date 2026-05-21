"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const menuItems = [
  { en: "HOME", th: "หน้าแรก", href: "/" },
  { en: "ARCHIVE", th: "คลังเอกสาร", href: "/archive" },
  { en: "TEXTUAL HISTORY", th: "ประวัติศาสตร์", href: "/textual-history" },
  { en: "ABOUT", th: "เกี่ยวกับ", href: "/about" },
  { en: "CONTACT", th: "ติดต่อ", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-md border-b transition-colors duration-300 ${
        scrolled
          ? "bg-ink/95 border-gold/30 shadow-lg shadow-black/20"
          : "bg-ink/80 border-gold/20"
      }`}
    >
      <nav
        aria-label="Primary"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 md:h-24 flex items-center justify-between"
      >
        {/* Logo */}
        <a href="/" className="flex flex-col gap-0.5">
          <span className="font-cinzel text-xl text-gold font-semibold tracking-widest">
            ONLYONETRUTH
          </span>
          <span className="font-pridi text-xs text-gold/70 font-light tracking-wide">
            เพราะสัจธรรมมีแค่หนึ่งเดียว
          </span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="group flex flex-col items-center gap-0.5 hover:opacity-80 transition-all duration-300"
              >
                <span className="font-cinzel text-sm text-paper-white tracking-wider group-hover:text-gold transition-colors">
                  {item.en}
                </span>
                <span className="font-pridi text-xs text-paper-white/50 group-hover:text-gold/70 transition-colors">
                  {item.th}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Link
          href="/archive"
          className="hidden lg:inline-flex flex-col items-center bg-gold hover:bg-gold-light text-ink px-6 py-2 rounded-btn transition-all duration-300 shadow-card hover:shadow-card-hover hover:-translate-y-0.5"
        >
          <span className="font-cinzel text-sm tracking-wider font-semibold">EXPLORE</span>
          <span className="font-pridi text-xs opacity-70">ค้นคว้า</span>
        </Link>

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

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden border-t border-gold/20 bg-ink/95 backdrop-blur-md transition-[max-height,opacity] duration-500 ease-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="px-4 py-3">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 py-3 border-b border-gold/10 hover:bg-gold/5 px-2 rounded-btn transition-colors group"
              >
                <div className="flex flex-col">
                  <span className="font-cinzel text-sm text-paper-white tracking-wider group-hover:text-gold transition-colors">
                    {item.en}
                  </span>
                  <span className="font-pridi text-xs text-paper-white/50 group-hover:text-gold/70 transition-colors">
                    {item.th}
                  </span>
                </div>
              </Link>
            </li>
          ))}
          <li className="pt-3">
            <Link
              href="/archive"
              onClick={() => setOpen(false)}
              className="flex flex-col items-center bg-gold hover:bg-gold-light text-ink py-2.5 rounded-btn transition-all duration-300"
            >
              <span className="font-cinzel text-sm tracking-wider font-semibold">EXPLORE</span>
              <span className="font-pridi text-xs opacity-70">ค้นคว้า</span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
