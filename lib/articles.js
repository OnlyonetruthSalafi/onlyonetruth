import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const articlesDir = path.join(process.cwd(), 'content/articles')

export function getAllArticles() {
  const files = fs.readdirSync(articlesDir)
  return files
    .filter(f => f.endsWith('.md'))
    .map(filename => {
      const slug = filename.replace('.md', '')
      const fileContent = fs.readFileSync(path.join(articlesDir, filename), 'utf8')
      const { data, content } = matter(fileContent)
      return { slug, ...data, content }
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date))
}

export function getArticleBySlug(slug) {
  const fileContent = fs.readFileSync(path.join(articlesDir, `${slug}.md`), 'utf8')
  const { data, content } = matter(fileContent)
  return { slug, ...data, content }
}
