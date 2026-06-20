import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Clock, User, Share2 } from 'lucide-react'
import { GridOverlay } from '../components/ui/Effects'
import {
  getArticle,
  getArticleBody,
  getArticleImage,
  getArticlesByCategory,
  getCategoryBySlug,
} from '../data/insights'

export default function InsightArticlePage() {
  const { categorySlug, articleSlug } = useParams()
  const category = getCategoryBySlug(categorySlug)
  const article = getArticle(categorySlug, articleSlug)
  const body = getArticleBody(categorySlug, articleSlug)
  const related = getArticlesByCategory(categorySlug)
    .filter((a) => a.slug !== articleSlug)
    .slice(0, 3)

  if (!category || !article) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-navy mb-4">Article not found</h1>
          <Link to="/#insights" className="text-teal font-medium hover:underline">
            Back to Insights
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <section className="relative pt-36 pb-16 md:pt-40 md:pb-20 overflow-hidden mesh-bg">
        <img
          src={getArticleImage(articleSlug)}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/95 via-navy/90 to-navy-dark" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(0,201,183,0.15),transparent_50%)]" />
        <GridOverlay />

        <div className="relative max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to={`/insights/${categorySlug}`}
              className="inline-flex items-center gap-2 text-white/50 hover:text-teal-light text-sm font-medium mb-8 transition-colors group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              {category.title}
            </Link>

            <div className="flex flex-wrap gap-2 mb-5">
              <span className="px-3 py-1 rounded-full bg-teal/20 text-teal-light text-xs font-semibold">
                {article.type}
              </span>
              {article.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full bg-white/10 text-white/70 text-xs font-medium">
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="hero-title-glow text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-white leading-tight mb-6">
              {article.title}
            </h1>

            <p className="text-white/60 text-lg leading-relaxed mb-8">{article.excerpt}</p>

            <div className="flex flex-wrap items-center gap-5 text-sm text-white/50 pb-8 border-b border-white/10">
              <span className="inline-flex items-center gap-2">
                <User size={15} className="text-teal-light" />
                {article.author}
              </span>
              <span>{article.date}</span>
              <span className="inline-flex items-center gap-2">
                <Clock size={15} className="text-teal-light" />
                {article.readTime}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <article className="py-14 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="-mt-24 mb-10 rounded-2xl overflow-hidden border border-gray-100 shadow-xl"
          >
            <img
              src={getArticleImage(articleSlug)}
              alt={article.title}
              className="w-full h-56 md:h-72 object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="max-w-none"
          >
            {body.map((block, i) => {
              if (block.type === 'heading') {
                return (
                  <h2
                    key={i}
                    className="text-xl md:text-2xl font-bold text-navy mt-10 mb-4 first:mt-0"
                  >
                    {block.text}
                  </h2>
                )
              }
              if (block.type === 'list') {
                return (
                  <ul key={i} className="list-disc pl-6 mb-6 space-y-2 text-slate text-base md:text-lg leading-relaxed">
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )
              }
              return (
                <p key={i} className="text-slate text-base md:text-lg leading-relaxed mb-6">
                  {block.text}
                </p>
              )
            })}
          </motion.div>

          <div className="mt-12 pt-8 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-slate">
              Published by <span className="font-semibold text-navy">{article.author}</span>
            </p>
            <button
              type="button"
              onClick={() => navigator.share?.({ title: article.title, url: window.location.href })}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-sm font-medium text-navy hover:border-teal hover:text-teal transition-colors"
            >
              <Share2 size={15} />
              Share
            </button>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="py-16 bg-surface section-pattern border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-navy mb-8">Related in {category.title}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  to={`/insights/${categorySlug}/${item.slug}`}
                  className="group flex flex-col rounded-2xl bg-white border border-gray-100 overflow-hidden hover:border-teal/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="h-36 relative overflow-hidden">
                    <img
                      src={getArticleImage(item.slug)}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-[10px] font-semibold uppercase tracking-wide text-teal">
                      {item.type}
                    </span>
                    <h3 className="text-base font-bold text-navy mt-2 mb-2 group-hover:text-teal-dark transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-slate text-sm line-clamp-2">{item.excerpt}</p>
                    <p className="text-xs text-slate mt-3">{item.readTime}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
