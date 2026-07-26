'use client'

import Image from "next/image";

export default function ArticlesClient({ articles }) {
  return (
    <div className="max-w-7xl mx-auto px-gutter py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map(article => (
          <a
            key={article.slug}
            href={`/articles/${article.slug}`}
            className="group block bg-paper-light border border-gold/20 rounded-card overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
          >
            {article.image && (
              <div className="relative h-48 overflow-hidden bg-paper-light flex items-center justify-center">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain p-4"
                  onError={(e) => { e.target.style.display = 'none' }}
                />
              </div>
            )}
            <div className="p-6">
              {article.category && (
                <span className="font-cinzel text-xs text-gold tracking-widest uppercase mb-2 block">
                  {article.category}
                </span>
              )}
              <h3 className="font-cinzel text-lg text-ink font-semibold mb-2 group-hover:text-gold transition-colors leading-snug">
                {article.title}
              </h3>
              {article.excerpt && (
                <p className="font-pridi text-ink/60 text-sm leading-relaxed line-clamp-3 mb-4">
                  {article.excerpt}
                </p>
              )}
              <div className="flex items-center justify-between">
                <span className="font-pridi text-xs text-ink/40">{article.date}</span>
                <span className="font-cinzel text-xs text-gold group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
