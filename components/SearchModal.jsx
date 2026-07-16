"use client";

import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { searchIndex, searchSite, searchTypes } from "../lib/searchIndex";

// ไฮไลต์คำที่ค้นเจอเป็นตัวทอง
function Highlight({ text, terms }) {
  if (!terms.length) return text;
  const lower = text.toLowerCase();
  for (const term of terms) {
    const i = lower.indexOf(term.toLowerCase());
    if (i !== -1) {
      return (
        <>
          {text.slice(0, i)}
          <span className="text-gold-light font-semibold">
            {text.slice(i, i + term.length)}
          </span>
          {text.slice(i + term.length)}
        </>
      );
    }
  }
  return text;
}

export default function SearchModal({ open, onClose }) {
  const router = useRouter();
  const inputRef = useRef(null);
  const listRef = useRef(null);
  const [query, setQuery] = useState("");
  const [cursor, setCursor] = useState(0);

  const terms = useMemo(
    () => query.trim().toLowerCase().split(/\s+/).filter(Boolean),
    [query]
  );

  // ไม่พิมพ์อะไร → แนะนำหน้าหลักทั้งหมด
  const results = useMemo(() => {
    if (!query.trim()) return searchIndex.filter((e) => e.type === "page");
    return searchSite(query);
  }, [query]);

  // จัดกลุ่มตามประเภท โดยคงลำดับคะแนน
  const grouped = useMemo(() => {
    const groups = [];
    for (const entry of results) {
      let g = groups.find((x) => x.type === entry.type);
      if (!g) {
        g = { type: entry.type, items: [] };
        groups.push(g);
      }
      g.items.push(entry);
    }
    return groups;
  }, [results]);

  // เปิดโมดัล: โฟกัส input, ล็อก scroll พื้นหลัง
  useEffect(() => {
    if (!open) return;
    setQuery("");
    setCursor(0);
    const t = setTimeout(() => inputRef.current?.focus(), 60);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      clearTimeout(t);
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => setCursor(0), [query]);

  // เลื่อนรายการที่เลือกให้อยู่ในจอเสมอ
  useEffect(() => {
    listRef.current
      ?.querySelector(`[data-idx="${cursor}"]`)
      ?.scrollIntoView({ block: "nearest" });
  }, [cursor]);

  const go = (entry) => {
    onClose();
    router.push(entry.url);
  };

  const onKeyDown = (e) => {
    if (e.key === "Escape") {
      e.preventDefault();
      onClose();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setCursor((c) => Math.min(c + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setCursor((c) => Math.max(c - 1, 0));
    } else if (e.key === "Enter" && results[cursor]) {
      e.preventDefault();
      go(results[cursor]);
    }
  };

  if (!open) return null;

  // index แบบต่อเนื่องข้ามกลุ่ม สำหรับ keyboard navigation
  let flatIdx = -1;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center px-4 pt-[10vh] pb-8"
      role="dialog"
      aria-modal="true"
      aria-label="ค้นหาทั้งเว็บ"
      onKeyDown={onKeyDown}
    >
      {/* ฉากหลังมืด */}
      <div
        className="absolute inset-0 bg-[#150b09]/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* แผ่นค้นหาแบบจดหมายเหตุ */}
      <div className="ic-panel relative w-full max-w-2xl rounded-card overflow-hidden animate-search-in">
        <span className="ic-corner ic-corner-tl" />
        <span className="ic-corner ic-corner-tr" />
        <span className="ic-corner ic-corner-bl" />
        <span className="ic-corner ic-corner-br" />

        {/* พื้นหลังทึบกว่า ic-panel ปกติ เพื่อให้อ่านง่ายบนทุกหน้า */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background: "linear-gradient(160deg, #2f1d19 0%, #241512 100%)",
          }}
        />

        {/* ช่องค้นหา */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-gold/25">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            className="w-5 h-5 text-gold shrink-0"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="ค้นหาต้นฉบับ บทความ หน้าต่างๆ… เช่น ซานาอา, sinaiticus, carbon-14"
            className="flex-1 bg-transparent font-pridi text-paper-white placeholder:text-paper/35 text-base outline-none"
          />
          <button
            onClick={onClose}
            className="font-cinzel text-[0.65rem] tracking-wider text-gold/60 border border-gold/30 rounded px-2 py-1 hover:text-gold hover:border-gold/60 transition-colors"
          >
            ESC
          </button>
        </div>

        {/* ผลการค้นหา */}
        <div ref={listRef} className="max-h-[55vh] overflow-y-auto px-3 py-3">
          {!query.trim() && (
            <p className="font-pridi text-xs text-gold/50 tracking-widest px-3 pt-1 pb-2">
              ✦ สำรวจส่วนต่างๆ ของเว็บ
            </p>
          )}

          {results.length === 0 ? (
            <div className="text-center py-12">
              <p className="font-cinzel text-3xl text-gold/25 mb-3">✦</p>
              <p className="font-pridi text-paper/70 mb-1">
                ไม่พบผลลัพธ์สำหรับ "{query}"
              </p>
              <p className="font-pridi text-xs text-paper/40">
                ลองคำอื่น เช่น ชื่อต้นฉบับ เมือง อักษร (kufic, hijazi) หรือชื่อนักวิชาการ
              </p>
            </div>
          ) : (
            grouped.map((group) => (
              <div key={group.type} className="mb-2">
                {query.trim() && (
                  <p className="flex items-center gap-2 font-cinzel text-[0.65rem] tracking-[0.25em] uppercase text-gold/60 px-3 pt-2 pb-1">
                    <span>{searchTypes[group.type].icon}</span>
                    <span>{searchTypes[group.type].label}</span>
                    <span className="flex-1 h-px bg-gradient-to-r from-gold/25 to-transparent" />
                  </p>
                )}
                {group.items.map((entry) => {
                  flatIdx += 1;
                  const idx = flatIdx;
                  const active = idx === cursor;
                  return (
                    <button
                      key={`${entry.url}-${entry.title}`}
                      data-idx={idx}
                      onClick={() => go(entry)}
                      onMouseMove={() => setCursor(idx)}
                      className={`w-full text-left px-3 py-2.5 rounded-btn border transition-colors duration-150 flex items-start gap-3 ${
                        active
                          ? "border-gold/50 bg-gold/10"
                          : "border-transparent hover:bg-gold/5"
                      }`}
                    >
                      <span
                        className={`font-cinzel text-sm mt-0.5 shrink-0 w-5 text-center ${
                          active ? "text-gold" : "text-gold/40"
                        }`}
                      >
                        {searchTypes[entry.type].icon}
                      </span>
                      <span className="min-w-0">
                        <span
                          className={`block font-cinzel text-sm leading-snug truncate ${
                            active ? "text-gold-light" : "text-gold/90"
                          }`}
                        >
                          <Highlight text={entry.title} terms={terms} />
                        </span>
                        <span className="block font-pridi text-sm text-paper/75 leading-snug truncate">
                          <Highlight text={entry.titleTh} terms={terms} />
                        </span>
                        <span className="block font-pridi text-xs text-paper/40 leading-snug truncate">
                          {entry.description}
                        </span>
                      </span>
                      {active && (
                        <span className="ml-auto self-center text-gold text-sm shrink-0">
                          →
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            ))
          )}
        </div>

        {/* แถบคำแนะนำปุ่มลัด */}
        <div className="flex items-center justify-between gap-4 px-5 py-2.5 border-t border-gold/20 bg-black/20">
          <div className="flex items-center gap-4 font-pridi text-[0.7rem] text-paper/40">
            <span>
              <kbd className="font-cinzel text-gold/60">↑↓</kbd> เลือก
            </span>
            <span>
              <kbd className="font-cinzel text-gold/60">Enter</kbd> เปิด
            </span>
            <span>
              <kbd className="font-cinzel text-gold/60">Esc</kbd> ปิด
            </span>
          </div>
          <span className="font-cinzel text-[0.6rem] tracking-[0.25em] text-gold/40 uppercase">
            OnlyOneTruth Search
          </span>
        </div>
      </div>
    </div>
  );
}
