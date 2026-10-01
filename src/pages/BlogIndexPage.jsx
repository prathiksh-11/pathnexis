import { ArrowRight, BookOpen, Clock3 } from 'lucide-react'
import { Link } from 'react-router-dom'
import BreadcrumbBar from '../components/BreadcrumbBar'
import { blogArticles, blogIndexSeo } from '../seo/pages/blog-index'

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-navy">
      <header className="relative overflow-hidden bg-navy-dark px-6 pb-16 pt-32 text-white md:pb-20 md:pt-40">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-dark" />
        <div className="relative mx-auto max-w-6xl">
          <BreadcrumbBar items={blogIndexSeo.breadcrumb} className="mb-6 text-white/70" />
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal/40 bg-teal/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-teal-light">
            <BookOpen size={15} /> WhatNexis Guides
          </div>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">
            WhatsApp Business Guides &amp; Insights
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
            Straightforward guidance for businesses using WhatsApp: understand the platform, prepare better message templates, and learn how Meta business verification works.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-navy">Latest guides</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">
            Explore practical articles from the WhatNexis team. Each guide links to official resources where platform rules or eligibility can change.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {blogArticles.map((article) => (
            <article key={article.path} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <p className="text-xs font-bold uppercase tracking-wider text-teal">{article.category}</p>
              <h3 className="mt-3 text-xl font-bold leading-snug text-navy">{article.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{article.description}</p>
              <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                <span className="inline-flex items-center gap-1.5 text-xs text-slate-500">
                  <Clock3 size={14} /> {article.readingTime}
                </span>
                <Link to={article.path} className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal hover:underline">
                  Read guide <ArrowRight size={15} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <section className="mt-14 rounded-2xl bg-navy p-7 text-white md:flex md:items-center md:justify-between md:gap-8 md:p-9">
          <div>
            <h2 className="text-xl font-bold">Looking for a WhatsApp automation platform?</h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/70">
              See how WhatNexis brings WhatsApp Business API messaging, shared inbox tools, and customer automation together.
            </p>
          </div>
          <Link to="/products/whatnexis" className="mt-5 inline-flex shrink-0 items-center gap-2 rounded-xl bg-teal px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-dark md:mt-0">
            Explore WhatNexis <ArrowRight size={16} />
          </Link>
        </section>
      </main>
    </div>
  )
}
