import { insightCategories } from './categories'
import { insightArticles } from './articles'
import { insightContent } from './content'

export { insightCategories, insightArticles, insightContent }

export function getCategoryBySlug(slug) {
  return insightCategories.find((c) => c.slug === slug)
}

export function getArticlesByCategory(slug) {
  return insightArticles[slug] || []
}

export function getArticle(categorySlug, articleSlug) {
  const articles = getArticlesByCategory(categorySlug)
  return articles.find((a) => a.slug === articleSlug)
}

export function getArticleBody(_categorySlug, articleSlug) {
  return insightContent[articleSlug] || []
}

export function getArticleImage(articleSlug) {
  return `/insights/${articleSlug}.jpg`
}

export function getCategoryImage(categorySlug) {
  return `/insights/category-${categorySlug}.jpg`
}
