import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ArticleImage from "../../components/ArticleImage";
import { getAllArticles } from "../../lib/articles";

const categoryLabel = {
  quran: { label: "อัลกุรอาน", color: "bg-gold text-ink" },
  bible: { label: "ไบเบิล", color: "bg-blue-900 text-paper-white" },
  comparative: { label: "เปรียบเทียบ", color: "bg-emerald-900 text-paper-white" },
};

export default async function ArticlesPage() {
  let articles = []
  try {
    articles = getAllArticles()
  } catch (e) {
    console.error(e)
  }

  return (
    <div className="bg-paper text-ink">
      <Navbar />

      {/* HERO */}
      <section className="relative py-24 bg-ink overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 font-pridi text-sm text-paper/50 mb-8">
            <Link href="/" className="hover:text-gold transition-colors">
              Home
            </Link>
            <span className="text-gold/40">›</span>
            <span className="text-gold">บทความ</span>
          </nav>
          <div className="text-center">
            <p className="font-cinzel text-xs tracking-[0.4em] uppercase text-gold-dark mb-4">
              Articles
            </p>
            <h1 className="font-cinzel text-4xl md:text-6xl text-gold mb-4 leading-tight">
              บทความวิชาการ
            </h1>
            <div className="mx-auto h-px w-24 bg-gold/50 mb-6" />
            <p className="font-pridi text-lg md:text-xl text-paper/80 max-w-2xl mx-auto leading-relaxed">
              การศึกษาเปรียบเทียบคัมภีร์โบราณ อ้างอิงจากนักวิชาการชั้นนำ
            </p>
          </div>
        </div>
      </section>

      {/* ARTICLES GRID */}
      <section className="py-16 bg-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-pridi text-sm text-ink/50 text-center mb-10">
            {articles.length} บทความ
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => {
              const cat = categoryLabel[article.category] ?? {
                label: article.category,
                color: "bg-gold/20 text-ink",
              };
              return (
                <article
                  key={article.slug}
                  className="group bg-paper-light border border-gold/20 rounded-card overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                  {/* รูป */}
                  <div className="relative h-56 overflow-hidden bg-paper-light p-4">
                    <ArticleImage src={article.image} alt={article.title} />
                    <div className="absolute top-3 left-3">
                      <span className={`font-pridi text-xs px-2 py-1 rounded-full ${cat.color}`}>
                        {cat.label}
                      </span>
                    </div>
                  </div>

                  {/* เนื้อหา */}
                  <div className="p-6 flex flex-col flex-1">
                    <h2 className="font-cinzel text-lg text-ink font-semibold mb-1 leading-snug">
                      {article.title}
                    </h2>
                    <p className="font-pridi text-ink/50 text-xs mb-3">
                      {article.titleEn}
                    </p>

                    <p className="font-pridi text-sm text-ink/70 leading-relaxed mb-4 flex-1">
                      {article.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {article.tags?.map((tag) => (
                        <span
                          key={tag}
                          className="border border-gold/30 text-gold font-cinzel text-xs px-2 py-0.5 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Meta */}
                    <div className="flex items-center justify-between text-xs font-pridi text-ink/40 mb-4">
                      <span>{article.author}</span>
                      <span>
                        {new Date(article.date).toLocaleDateString("th-TH", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>

                    <Link
                      href={`/articles/${article.slug}`}
                      className="block btn-primary text-center text-sm py-2.5 font-pridi"
                    >
                      อ่านบทความ →
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
