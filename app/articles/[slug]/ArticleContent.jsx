'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function ArticleContent({ article }) {
  return (
    <div>
      <Navbar />

      {/* Hero */}
      <section className="py-20 bg-ink">
        <div className="max-w-4xl mx-auto px-gutter">
          <a href="/articles" className="font-pridi text-gold/60 text-sm hover:text-gold mb-6 inline-block">
            ← กลับสู่รายการบทความ
          </a>
          {article.category && (
            <p className="font-cinzel text-xs text-gold/60 tracking-widest mb-4 uppercase">
              {article.category}
            </p>
          )}
          <h1 className="font-cinzel text-3xl md:text-4xl text-paper-white mb-3 leading-snug">
            {article.title}
          </h1>
          {article.titleEn && (
            <p className="font-cinzel text-base text-gold/60 mb-4">{article.titleEn}</p>
          )}
          <div className="flex flex-wrap gap-3 mt-4 font-pridi text-sm text-paper-white/50">
            {article.date && <span>{article.date}</span>}
            {article.author && <><span>·</span><span>{article.author}</span></>}
          </div>
          {article.source && (
            <p className="font-pridi text-xs text-gold/40 mt-2 leading-relaxed">
              อ้างอิง: {article.source}
            </p>
          )}
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-paper">
        <div className="max-w-4xl mx-auto px-gutter">
          {article.image && (
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-64 object-contain bg-paper-light rounded-card mb-10 p-4"
              onError={(e) => { e.target.style.display = 'none' }}
            />
          )}
          <div
            className="prose-article"
            dangerouslySetInnerHTML={{ __html: article.htmlContent }}
          />
        </div>
      </section>

      {/* Share Bar */}
      <section className="py-8 bg-paper border-t border-gold/20">
        <div className="max-w-4xl mx-auto px-gutter">
          <p className="font-cinzel text-xs text-gold/50 tracking-widest uppercase mb-4">
            แชร์บทความนี้
          </p>
          <div className="flex flex-wrap items-center gap-3">

            {/* Facebook */}
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${typeof window !== 'undefined' ? encodeURIComponent(window.location.href) : ''}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#1877F2] hover:bg-[#0d65d9] text-white px-4 py-2 rounded-md transition-all duration-300 text-sm"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
              </svg>
              <span className="font-pridi text-sm">Facebook</span>
            </a>

            {/* Line */}
            <a
              href={`https://social-plugins.line.me/lineit/share?url=${typeof window !== 'undefined' ? encodeURIComponent(window.location.href) : ''}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#06C755] hover:bg-[#05b34c] text-white px-4 py-2 rounded-md transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.630 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
              </svg>
              <span className="font-pridi text-sm">Line</span>
            </a>

            {/* X (Twitter) */}
            <a
              href={`https://twitter.com/intent/tweet?url=${typeof window !== 'undefined' ? encodeURIComponent(window.location.href) : ''}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-black hover:bg-zinc-800 text-white px-4 py-2 rounded-md transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              <span className="font-pridi text-sm">X</span>
            </a>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/?text=${typeof window !== 'undefined' ? encodeURIComponent(window.location.href) : ''}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white px-4 py-2 rounded-md transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span className="font-pridi text-sm">WhatsApp</span>
            </a>

            {/* Copy Link */}
            <button
              onClick={() => {
                navigator.clipboard.writeText(window.location.href).then(() => {
                  const el = document.getElementById('copy-link-btn')
                  if (el) {
                    el.innerHTML = `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg><span class="font-pridi text-sm">คัดลอกแล้ว!</span>`
                    el.classList.add('border-gold', 'text-gold')
                    setTimeout(() => {
                      el.innerHTML = `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg><span class="font-pridi text-sm">คัดลอกลิงก์</span>`
                      el.classList.remove('border-gold', 'text-gold')
                    }, 2000)
                  }
                })
              }}
              id="copy-link-btn"
              className="flex items-center gap-2 border border-gold/30 text-paper-white/70 hover:border-gold hover:text-gold bg-transparent px-4 py-2 rounded-md transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
              </svg>
              <span className="font-pridi text-sm">คัดลอกลิงก์</span>
            </button>

          </div>
        </div>
      </section>

      {/* Tags */}
      {article.tags && article.tags.length > 0 && (
        <section className="py-6 bg-paper border-t border-gold/10">
          <div className="max-w-4xl mx-auto px-gutter flex flex-wrap gap-2">
            {article.tags.map(tag => (
              <span key={tag} className="font-cinzel text-xs text-gold border border-gold/30 px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Back */}
      <section className="py-8 bg-paper border-t border-gold/10">
        <div className="max-w-4xl mx-auto px-gutter">
          <a href="/articles" className="btn-outline font-pridi text-sm inline-flex items-center gap-2">
            ← กลับสู่รายการบทความ
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
