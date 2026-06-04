import { getAllArticles } from '@/lib/articles'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ArticlesClient from './ArticlesClient'

export default function ArticlesPage() {
  const articles = getAllArticles()

  return (
    <div>
      <Navbar />

      <section className="py-16 bg-ink">
        <div className="max-w-7xl mx-auto px-gutter text-center">
          <p className="font-cinzel text-xs text-gold/60 tracking-[0.3em] uppercase mb-4">
            SCHOLARLY RESEARCH
          </p>
          <h1 className="font-cinzel text-4xl md:text-5xl text-paper-white mb-4">
            บทความวิชาการ
          </h1>
          <p className="font-pridi text-paper-white/70 text-lg max-w-2xl mx-auto">
            ศึกษาและเปรียบเทียบคัมภีร์โบราณจากมุมมองวิชาการ
          </p>
        </div>
      </section>

      <section className="bg-paper">
        <ArticlesClient articles={articles} />
      </section>

      <Footer />
    </div>
  )
}
