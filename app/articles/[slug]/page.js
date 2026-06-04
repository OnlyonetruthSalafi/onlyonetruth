import { getAllArticles, getArticleBySlug } from '@/lib/articles'
import { notFound } from 'next/navigation'
import ArticleContent from './ArticleContent'

export async function generateStaticParams() {
  try {
    const articles = getAllArticles()
    return articles.map(a => ({ slug: a.slug }))
  } catch (e) {
    return []
  }
}

export async function generateMetadata({ params }) {
  const article = getArticleBySlug(params.slug)
  if (!article) return {}

  const url = `https://onlyonetruthislam.vercel.app/articles/${params.slug}`
  const image = article.image
    ? `https://onlyonetruthislam.vercel.app${article.image}`
    : 'https://onlyonetruthislam.vercel.app/header.png'

  return {
    title: article.title + ' | OnlyOneTruth',
    description: article.excerpt || article.title,
    openGraph: {
      title: article.title,
      description: article.excerpt || article.title,
      url: url,
      siteName: 'OnlyOneTruth',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: article.title,
        }
      ],
      locale: 'th_TH',
      type: 'article',
      publishedTime: article.date,
      authors: [article.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt || article.title,
      images: [image],
    },
  }
}

function convertMarkdownToHtml(markdown) {
  if (!markdown) return ''
  let html = markdown
  html = html.replace(/^#### (.*$)/gim, '<h4 class="font-cinzel text-lg text-ink mt-6 mb-2">$1</h4>')
  html = html.replace(/^### (.*$)/gim, '<h3 class="font-cinzel text-xl text-ink mt-8 mb-3">$1</h3>')
  html = html.replace(/^## (.*$)/gim, '<h2 class="font-cinzel text-2xl text-ink mt-10 mb-4 pb-2 border-b border-gold/20">$1</h2>')
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong class="text-ink font-semibold">$1</strong>')
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>')
  html = html.replace(/^> (.*$)/gim, '<blockquote class="border-l-4 border-gold bg-gold/5 px-6 py-3 my-4 rounded-r-lg font-pridi text-ink/80 leading-relaxed">$1</blockquote>')
  html = html.replace(/!\[(.*?)\]\((.*?)\)/g, '<img src="$2" alt="$1" class="w-full rounded-card my-6 object-contain" /><p class="text-center font-pridi text-xs text-ink/50 -mt-4 mb-6 italic">$1</p>')
  html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-gold hover:underline" target="_blank" rel="noopener noreferrer">$1</a>')
  html = html.replace(/^---$/gim, '<hr class="border-gold/20 my-10" />')

  const lines = html.split('\n')
  const result = []
  let inTable = false
  let tableHtml = ''
  let isFirstRow = true

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    if (line.includes('|') && line.trim().startsWith('|')) {
      if (!inTable) {
        inTable = true
        isFirstRow = true
        tableHtml = '<div class="overflow-x-auto my-6"><table class="w-full font-pridi text-sm border-collapse">'
      }
      if (line.replace(/\|/g, '').replace(/-/g, '').replace(/:/g, '').trim() === '') {
        continue
      }
      const cells = line.split('|').filter((_, idx, arr) => idx > 0 && idx < arr.length - 1)
      if (isFirstRow) {
        tableHtml += '<thead><tr class="bg-ink/80">' + cells.map(c => `<th class="p-3 text-left font-cinzel text-gold text-xs tracking-wide">${c.trim()}</th>`).join('') + '</tr></thead><tbody>'
        isFirstRow = false
      } else {
        tableHtml += '<tr class="border-b border-gold/10 hover:bg-gold/5">' + cells.map(c => `<td class="p-3 text-ink/80">${c.trim()}</td>`).join('') + '</tr>'
      }
    } else {
      if (inTable) {
        tableHtml += '</tbody></table></div>'
        result.push(tableHtml)
        inTable = false
        tableHtml = ''
      }
      if (line.startsWith('<') || line.trim() === '') {
        result.push(line)
      } else {
        result.push(`<p class="font-pridi text-ink/80 leading-relaxed mb-4">${line}</p>`)
      }
    }
  }
  if (inTable) {
    tableHtml += '</tbody></table></div>'
    result.push(tableHtml)
  }
  return result.join('\n')
}

export default function ArticlePage({ params }) {
  const article = getArticleBySlug(params.slug)
  if (!article) return notFound()
  const htmlContent = convertMarkdownToHtml(article.content)
  return <ArticleContent article={{ ...article, htmlContent }} />
}
