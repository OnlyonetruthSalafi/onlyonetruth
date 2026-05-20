"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#archive", label: "Archive" },
  { href: "#textual-history", label: "Textual History" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
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
          ? "bg-dark-sepia/95 border-antique-gold/30 shadow-lg shadow-black/20"
          : "bg-dark-sepia/80 border-antique-gold/20"
      }`}
    >
      <nav
        aria-label="Primary"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between"
      >
        <a
          href="#home"
          className="font-cinzel text-xl md:text-2xl tracking-[0.18em] text-antique-gold hover:text-warm-gold transition-colors"
        >
          OnlyOneTruth
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-lato text-sm uppercase tracking-[0.15em] text-parchment/85 hover:text-antique-gold transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-antique-gold hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#archive"
          className="hidden lg:inline-flex items-center bg-antique-gold hover:bg-warm-gold text-dark-sepia font-semibold px-5 py-2.5 rounded-md text-sm tracking-wide transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5"
        >
          Explore Archive
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex items-center justify-center w-10 h-10 text-antique-gold focus:outline-none focus:ring-2 focus:ring-antique-gold/60 rounded-md"
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

      <div
        className={`lg:hidden overflow-hidden border-t border-antique-gold/20 bg-dark-sepia/95 backdrop-blur-md transition-[max-height,opacity] duration-500 ease-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="px-4 py-4 space-y-2">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-3 font-lato text-base tracking-wide text-parchment hover:text-antique-gold hover:bg-antique-gold/10 rounded-md transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#archive"
              onClick={() => setOpen(false)}
              className="block text-center bg-antique-gold hover:bg-warm-gold text-dark-sepia font-semibold px-5 py-3 rounded-md transition-colors"
            >
              Explore Archive
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
