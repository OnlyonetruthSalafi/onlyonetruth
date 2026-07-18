"use client";

import Link from "next/link";

/**
 * แถบนำทางท้ายกริดการ์ดของหน้าคลังจดหมายเหตุ —
 * ปุ่มกลับขึ้นด้านบน + ทางลัดข้ามไปคลังต้นฉบับอื่นโดยไม่ต้องเลื่อนกลับ
 * links: [{ href, label }]
 */
export default function ArchiveNav({ links = [] }) {
  return (
    <div className="mt-16 pt-10 border-t border-gold/20">
      <p className="font-cinzel text-xs tracking-[0.35em] uppercase text-gold/50 text-center mb-6">
        Explore More Archives
      </p>
      <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center gap-3">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="border border-gold/40 text-gold hover:bg-gold/10 hover:border-gold/70 font-pridi text-sm text-center py-2.5 px-6 rounded-btn transition-all duration-300 flex items-center justify-center gap-2"
        >
          <span>↑</span>
          <span>กลับขึ้นด้านบน</span>
        </button>
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="bg-gradient-to-r from-gold-dark via-gold to-gold-light hover:from-gold hover:to-gold-light text-ink font-pridi font-semibold text-sm text-center py-2.5 px-6 rounded-btn shadow-glow-sm hover:shadow-glow transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>{l.label}</span>
            <span>→</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
