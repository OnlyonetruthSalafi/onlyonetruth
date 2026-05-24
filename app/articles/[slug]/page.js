import Link from "next/link";
import { marked } from "marked";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import ArticleImage from "../../../components/ArticleImage";
import { getAllArticles, getArticleBySlug } from "../../../lib/articles";

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((a) => ({ slug: a.slug }));
}

const categoryLabel = {
  quran: "อัลกุรอาน",
  bible: "ไบเบิล",
  comparative: "เปรียบเทียบ",
};

marked.setOptions({ breaks: true });

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  const htmlContent = marked(article.content);

  return (
    <div className="bg-paper text-ink">
      <Navbar />

      {/* HERO */}
      <section className="relative py-20 bg-ink overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 font-pridi text-sm text-paper/50 mb-8 flex-wrap">
            <Link href="/" className="hover:text-gold transition-colors">
              Home
            </Link>
            <span className="text-gold/40">›</span>
            <Link href="/articles" className="hover:text-gold transition-colors">
              บทความ
            </Link>
            <span className="text-gold/40">›</span>
            <span className="text-gold truncate max-w-[200px]">{article.title}</span>
          </nav>

          <div className="text-center">
            {article.category && (
              <p className="font-cinzel text-xs tracking-[0.4em] uppercase text-gold-dark mb-4">
                {categoryLabel[article.category] ?? article.category}
              </p>
            )}
            <h1 className="font-cinzel text-3xl md:text-5xl text-gold mb-3 leading-tight">
              {article.title}
            </h1>
            {article.titleEn && (
              <h2 className="font-cinzel text-lg md:text-xl text-gold/70 mb-6">
                {article.titleEn}
              </h2>
            )}
            <div className="mx-auto h-px w-24 bg-gold/50 mb-6" />

            {/* Meta */}
            <div className="flex flex-wrap items-center justify-center gap-4 font-pridi text-sm text-paper/60">
              {article.author && <span>✍️ {article.author}</span>}
              {article.date && (
                <span>
                  📅{" "}
                  {new Date(article.date).toLocaleDateString("th-TH", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              )}
            </div>
            {article.source && (
              <p className="font-pridi text-xs text-gold/50 mt-3 italic">
                ที่มา: {article.source}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* ARTICLE CONTENT */}
      <section className="py-16 bg-paper">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero image */}
          {article.image && (
            <div className="mb-10 rounded-card overflow-hidden h-64">
              <ArticleImage src={article.image} alt={article.title} />
            </div>
          )}

          {/* Markdown rendered content */}
          <div
            className="article-content font-pridi text-ink/85 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />

          {/* Tags */}
          {article.tags && (
            <div className="flex flex-wrap gap-2 mt-10 pt-6 border-t border-gold/20">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-gold/30 text-gold font-cinzel text-xs px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Back button */}
          <div className="mt-10">
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 font-pridi text-sm text-ink/60 hover:text-gold transition-colors"
            >
              ← กลับไปยังบทความทั้งหมด
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
