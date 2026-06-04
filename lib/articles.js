import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const articlesDir = path.join(process.cwd(), 'content/articles')

export function getAllArticles() {
  try {
    if (!fs.existsSync(articlesDir)) {
      console.warn('Articles directory not found:', articlesDir)
      return []
    }
    const files = fs.readdirSync(articlesDir).filter(f => f.endsWith('.md'))
    return files
      .map(filename => {
        try {
          const slug = filename.replace('.md', '')
          const fileContent = fs.readFileSync(path.join(articlesDir, filename), 'utf8')
          const { data, content } = matter(fileContent)
          return { slug, ...data, content }
        } catch (e) {
          console.error('Error reading article:', filename, e)
          return null
        }
      })
      .filter(Boolean)
      .sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0))
  } catch (e) {
    console.error('Error in getAllArticles:', e)
    return []
  }
}

export function getArticleBySlug(slug) {
  try {
    const filePath = path.join(articlesDir, `${slug}.md`)
    if (!fs.existsSync(filePath)) return null
    const fileContent = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContent)
    return { slug, ...data, content }
  } catch (e) {
    console.error('Error in getArticleBySlug:', e)
    return null
  }
}
