"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const els = root.querySelectorAll("[data-reveal]");
    els.forEach((el) => el.classList.add("reveal"));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return ref;
}

const collections = [
  {
    glyph: "📜",
    title: "Qur'anic Manuscripts",
    blurb:
      "Early codices and folios — from Hijazi script to illuminated Mamluk volumes — examined for orthography, variant readings, and provenance.",
  },
  {
    glyph: "🕮",
    title: "Biblical Codices",
    blurb:
      "Septuagint, Masoretic, and patristic witnesses placed side by side, mapping the transmission of sacred text across two millennia.",
  },
  {
    glyph: "⚜",
    title: "Patristic & Sirah",
    blurb:
      "Commentaries, chronicles, and biographical traditions that shaped scholarly memory across Late Antiquity and the Medieval world.",
  },
];

export default function Home() {
  const rootRef = useReveal();

  return (
    <div ref={rootRef} className="bg-parchment text-deep-charcoal">
      <Navbar />

      {/* HERO */}
      <section
        id="home"
        className="relative h-[80vh] min-h-[600px] max-md:h-[70vh] max-sm:h-[60vh] max-sm:min-h-[500px] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/header.png"
            alt="Ancient library archive with stacks of scrolls revealing Arabic text"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-sepia/70 via-dark-sepia/50 to-dark-sepia/85" />
          <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl">
          <p
            data-reveal
            className="font-cinzel text-xs sm:text-sm tracking-[0.4em] uppercase text-antique-gold mb-5"
          >
            Est. for the Preservation of Sacred Texts
          </p>
          <h1
            data-reveal
            className="font-playfair text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-ivory mb-6 leading-[1.05] tracking-tight"
          >
            Preserving the Integrity
            <span className="block italic text-antique-gold/95 font-normal">
              of Ancient Texts
            </span>
          </h1>
          <p
            data-reveal
            className="font-lato text-base sm:text-xl md:text-2xl text-parchment/90 mb-9 max-w-2xl mx-auto leading-relaxed"
          >
            Exploring the sacred manuscripts that shaped civilizations — examined,
            compared, and preserved with scholarly care.
          </p>
          <div
            data-reveal
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
          >
            <a
              href="#collections"
              className="bg-antique-gold hover:bg-warm-gold text-dark-sepia font-semibold px-8 sm:px-10 py-3.5 sm:py-4 rounded-md text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
            >
              Begin Your Journey
            </a>
            <a
              href="#textual-history"
              className="inline-flex items-center gap-2 text-parchment border border-parchment/30 hover:border-antique-gold hover:text-antique-gold font-lato px-8 py-3.5 rounded-md text-base sm:text-lg transition-all duration-300 backdrop-blur-sm"
            >
              Learn the History
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:block animate-float-soft">
          <div className="flex flex-col items-center text-parchment/60">
            <span className="font-cinzel text-[10px] tracking-[0.4em] uppercase">
              Scroll
            </span>
            <div className="mt-2 h-10 w-px bg-gradient-to-b from-antique-gold to-transparent" />
          </div>
        </div>
      </section>

      {/* COLLECTIONS */}
      <section id="collections" className="py-20 md:py-28 bg-parchment">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
            <p
              data-reveal
              className="font-cinzel text-xs tracking-[0.4em] uppercase text-bronze mb-4"
            >
              The Archive
            </p>
            <h2
              data-reveal
              className="font-cinzel text-3xl md:text-5xl text-dark-sepia mb-5 leading-tight"
            >
              Our Collections
            </h2>
            <div
              data-reveal
              className="mx-auto h-px w-24 bg-antique-gold mb-6"
            />
            <p
              data-reveal
              className="font-lato text-base md:text-lg text-deep-charcoal/75 leading-relaxed"
            >
              Curated holdings spanning three traditions of textual transmission —
              each volume documented, compared, and contextualized.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {collections.map((c, i) => (
              <article
                key={c.title}
                data-reveal
                style={{ transitionDelay: `${i * 90}ms` }}
                className="group relative bg-ivory border-2 border-antique-gold/30 rounded-lg p-7 md:p-9 hover:shadow-2xl hover:border-antique-gold transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-antique-gold/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-antique-gold/15 transition-colors duration-500" />
                <div className="relative">
                  <div className="text-5xl mb-5 text-antique-gold transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
                    {c.glyph}
                  </div>
                  <h3 className="font-playfair text-2xl md:text-[1.65rem] text-dark-sepia mb-3 leading-snug">
                    {c.title}
                  </h3>
                  <p className="font-lato text-[0.95rem] leading-relaxed text-deep-charcoal/75">
                    {c.blurb}
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 text-bronze font-cinzel text-xs tracking-[0.25em] uppercase opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-500">
                    Browse Collection
                    <span aria-hidden>→</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SCHOLARLY INTRODUCTION */}
      <section
        id="textual-history"
        className="relative py-20 md:py-28 bg-deep-charcoal text-ivory overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none opacity-[0.07]">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-antique-gold blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-warm-gold blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p
            data-reveal
            className="font-cinzel text-xs tracking-[0.4em] uppercase text-antique-gold mb-4"
          >
            A Testament to History
          </p>
          <h2
            data-reveal
            className="font-cinzel text-3xl md:text-5xl mb-8 leading-tight"
          >
            The Word, Carried Across Centuries
          </h2>
          <div
            data-reveal
            className="mx-auto h-px w-24 bg-antique-gold/70 mb-10"
          />

          <p
            data-reveal
            className="font-amiri text-2xl md:text-3xl text-antique-gold/95 mb-10 leading-loose"
            dir="rtl"
            lang="ar"
          >
            إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ
          </p>

          <p
            data-reveal
            className="font-lato text-base md:text-lg leading-loose text-parchment/85 max-w-3xl mx-auto"
          >
            For centuries, ancient manuscripts have carried the wisdom, beliefs,
            and stories of humanity across generations. Each folio is a witness
            — copied by trembling hands in lamplit scriptoria, guarded through
            invasion and exile, recovered from desert caves and monastery
            shelves. To study these texts is to listen to the long, patient
            voice of memory itself.
          </p>

          <div
            data-reveal
            className="mt-12 grid grid-cols-3 gap-6 md:gap-10 max-w-2xl mx-auto"
          >
            {[
              { n: "1,400+", l: "Years Spanned" },
              { n: "300+", l: "Manuscripts" },
              { n: "12", l: "Traditions" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-playfair text-3xl md:text-4xl text-antique-gold mb-1">
                  {s.n}
                </div>
                <div className="font-cinzel text-[10px] md:text-xs tracking-[0.25em] uppercase text-parchment/65">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ARCHIVE CTA */}
      <section
        id="archive"
        className="py-20 md:py-24 bg-parchment border-t border-antique-gold/20"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            data-reveal
            className="relative bg-gradient-to-br from-dark-sepia to-deep-charcoal text-ivory rounded-2xl p-10 md:p-16 overflow-hidden shadow-2xl border border-antique-gold/30"
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 text-[18rem] leading-none font-playfair text-antique-gold/30 -translate-y-12 translate-x-8 select-none">
                ﷽
              </div>
            </div>
            <div className="relative grid md:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <h3 className="font-cinzel text-2xl md:text-4xl mb-3 leading-tight">
                  Step into the Archive
                </h3>
                <p className="font-lato text-parchment/80 max-w-xl leading-relaxed">
                  Browse digitized folios, cross-reference variant readings, and
                  trace the textual lineage of every document in our holdings.
                </p>
              </div>
              <a
                href="#about"
                className="inline-flex items-center justify-center bg-antique-gold hover:bg-warm-gold text-dark-sepia font-semibold px-8 py-4 rounded-md text-base md:text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 whitespace-nowrap"
              >
                Enter the Archive →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 md:py-28 bg-ivory">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div data-reveal>
            <p className="font-cinzel text-xs tracking-[0.4em] uppercase text-bronze mb-4">
              About the Project
            </p>
            <h2 className="font-cinzel text-3xl md:text-4xl text-dark-sepia mb-6 leading-tight">
              A Scholarly Refuge for the World's Oldest Voices
            </h2>
            <div className="h-px w-20 bg-antique-gold mb-6" />
            <p className="font-lato text-base md:text-lg text-deep-charcoal/80 leading-relaxed mb-4">
              OnlyOneTruth gathers, digitizes, and annotates manuscripts that
              shaped religious and intellectual history. Our editors collaborate
              with libraries, archives, and independent scholars to keep every
              reading transparent and every provenance accountable.
            </p>
            <p className="font-lato text-base md:text-lg text-deep-charcoal/80 leading-relaxed">
              We believe truth, when carefully witnessed, can survive any
              century.
            </p>
          </div>

          <div data-reveal className="space-y-5">
            {[
              {
                t: "Provenance First",
                d: "Every folio is traced to a verifiable origin before being added to the archive.",
              },
              {
                t: "Open Scholarship",
                d: "Variant readings, marginalia, and editorial decisions are documented and citable.",
              },
              {
                t: "Preservation Standards",
                d: "Imaging, encoding, and storage follow international archival best practice.",
              },
            ].map((v) => (
              <div
                key={v.t}
                className="bg-parchment/60 border border-antique-gold/30 rounded-lg p-5 hover:border-antique-gold transition-colors"
              >
                <h4 className="font-playfair text-xl text-dark-sepia mb-1">
                  {v.t}
                </h4>
                <p className="font-lato text-sm text-deep-charcoal/75 leading-relaxed">
                  {v.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
