import { useMemo, useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  Building2,
  GraduationCap,
  Search,
  Sparkles,
} from 'lucide-react'
import { GridOverlay } from '../components/ui/Effects'
import ApplyModal from '../components/ApplyModal'
import CareerPillarSections from '../components/CareerPillarSections'
import { jobDepartments, jobs } from '../data/jobs'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
}

export default function JobOpeningsPage() {
  const location = useLocation()
  const [activeDept, setActiveDept] = useState('All')
  const [query, setQuery] = useState('')
  const [applyJob, setApplyJob] = useState(null)

  useEffect(() => {
    if (!location.hash) return
    const id = location.hash.slice(1)
    const el = document.getElementById(id)
    if (el) {
      requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    }
  }, [location.hash])

  const filteredJobs = useMemo(() => {
    const q = query.trim().toLowerCase()
    return jobs.filter((job) => {
      const matchesDept = activeDept === 'All' || job.department === activeDept
      const matchesQuery =
        !q ||
        job.title.toLowerCase().includes(q) ||
        job.department.toLowerCase().includes(q) ||
        job.qualification.toLowerCase().includes(q) ||
        job.tags.some((tag) => tag.toLowerCase().includes(q))
      return matchesDept && matchesQuery
    })
  }, [activeDept, query])

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[52vh] flex items-end overflow-hidden mesh-bg">
        <motion.div className="absolute inset-0">
          <img
            src="/banner.png"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-center opacity-30"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy/85 to-navy-dark/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-transparent to-navy-dark/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(0,201,183,0.2),transparent_55%)]" />
        <GridOverlay />

        <div className="relative max-w-7xl mx-auto px-6 pt-36 pb-16 md:pt-40 md:pb-20 w-full">
          <motion.div {...fadeUp}>
            <Link
              to="/#careers"
              className="inline-flex items-center gap-2 text-white/50 hover:text-teal-light text-sm font-medium mb-8 transition-colors group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Back to Careers
            </Link>

            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-teal/40 bg-teal/10 mb-6">
              <Sparkles size={15} className="text-teal" />
              <span className="text-teal-light text-[11px] font-semibold tracking-[0.2em] uppercase">
                Open Opportunities
              </span>
            </div>

            <h1 className="hero-title-glow text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-4 max-w-3xl">
              Build What&apos;s Next{' '}
              <span className="text-teal-light">With Pathnexis</span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
              We are always interested in connecting with talented individuals who share our
              passion for innovation, growth, and meaningful impact.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-10 grid grid-cols-3 gap-4 max-w-xl"
          >
            {[
              { num: jobs.length, label: 'Open Roles' },
              { num: jobDepartments.length - 1, label: 'Departments' },
              { num: '0–2', label: 'Years Experience' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-white/10 bg-[#0a1f42]/80 px-4 py-4 text-center"
              >
                <p className="text-2xl md:text-3xl font-bold text-teal-light stat-glow">{stat.num}</p>
                <p className="text-white/70 text-xs md:text-sm font-medium mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Culture & programs */}
      <section className="py-20 md:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-14"
          >
            <p className="text-teal text-xs font-semibold tracking-[0.25em] uppercase mb-3">
              Life at Pathnexis
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              A Culture Built for Growth
            </h2>
            <p className="text-slate leading-relaxed">
              Whether you&apos;re an experienced professional, a recent graduate, or a student
              beginning your journey, Pathnexis offers opportunities to learn, contribute, and grow
              alongside a team driven by purpose and progress.
            </p>
          </motion.div>

          <CareerPillarSections />
        </div>
      </section>

      {/* Listings */}
      <section className="py-16 md:py-24 bg-surface section-pattern relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-3">Current Openings</h2>
            <p className="text-slate leading-relaxed">
              Explore our current roles and find where your skills, curiosity, and ambition can
              create meaningful impact. Each position offers hands-on experience, mentorship, and
              the opportunity to grow with a team driven by purpose and progress.
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col lg:flex-row lg:items-center gap-5 mb-10"
          >
            <div className="relative flex-1 max-w-md">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search roles, skills, qualifications..."
                className="w-full pl-11 pr-4 py-3.5 rounded-full border border-gray-200 bg-white text-navy text-sm focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {jobDepartments.map((dept) => (
                <button
                  key={dept}
                  type="button"
                  onClick={() => setActiveDept(dept)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeDept === dept
                      ? 'bg-navy text-white shadow-lg shadow-navy/20'
                      : 'bg-white text-slate border border-gray-200 hover:border-teal/40 hover:text-teal'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </motion.div>

          <p className="text-slate text-sm mb-6">
            Showing <span className="font-semibold text-navy">{filteredJobs.length}</span>{' '}
            {filteredJobs.length === 1 ? 'position' : 'positions'}
            {activeDept !== 'All' && (
              <> in <span className="font-semibold text-teal">{activeDept}</span></>
            )}
          </p>

          <AnimatePresence mode="popLayout">
            <motion.div layout className="grid gap-5">
              {filteredJobs.map((job, i) => (
                <motion.article
                  key={job.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  whileHover={{ y: -4 }}
                  className="group relative bg-white rounded-2xl border border-gray-100 p-6 md:p-8 shadow-sm hover:shadow-xl hover:shadow-navy/8 hover:border-teal/30 transition-all duration-400 overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-teal to-teal-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="px-3 py-1 rounded-full bg-teal/10 text-teal text-xs font-semibold">
                          {job.department}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-navy/5 text-navy text-xs font-medium">
                          {job.type}
                        </span>
                      </div>

                      <h2 className="text-xl md:text-2xl font-bold text-navy mb-2 group-hover:text-teal-dark transition-colors">
                        {job.title}
                      </h2>
                      <p className="text-slate text-sm md:text-base leading-relaxed mb-4 max-w-2xl">
                        {job.summary}
                      </p>

                      <div className="flex flex-wrap gap-4 text-sm text-slate mb-4">
                        <span className="inline-flex items-center gap-1.5">
                          <Briefcase size={15} className="text-teal shrink-0" />
                          Experience: {job.experience}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <GraduationCap size={15} className="text-teal shrink-0" />
                          Qualification: {job.qualification}
                        </span>
                      </div>

                      <div>
                        <p className="text-xs font-semibold tracking-wide uppercase text-navy/60 mb-2">
                          Skills
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {job.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-1 rounded-lg bg-gray-50 text-slate text-xs font-medium border border-gray-100"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="shrink-0 flex lg:flex-col gap-3">
                      <motion.button
                        type="button"
                        onClick={() => setApplyJob(job)}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="group/btn shine inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-teal text-white font-semibold rounded-full hover:bg-teal-light transition-all hover:shadow-lg hover:shadow-teal/25 text-sm whitespace-nowrap"
                      >
                        Apply Now
                        <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                      </motion.button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredJobs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <Building2 size={48} className="text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-navy mb-2">No matching roles found</h3>
              <p className="text-slate mb-6">Try a different search or department filter.</p>
              <button
                type="button"
                onClick={() => {
                  setQuery('')
                  setActiveDept('All')
                }}
                className="px-6 py-3 bg-navy text-white font-semibold rounded-full hover:bg-navy-light transition-colors text-sm"
              >
                Clear filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Join the Journey CTA */}
      <section className="py-20 bg-navy-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(0,201,183,0.15),transparent_60%)]" />
        <GridOverlay />

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-teal-light text-xs font-semibold tracking-[0.25em] uppercase mb-4">
              Join the Journey
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              The future belongs to those willing to learn, adapt, and innovate.
            </h2>
            <p className="text-white/55 mb-4 leading-relaxed">
              At Pathnexis, we are building more than a company. We are building a community of
              thinkers, creators, problem-solvers, and future leaders committed to making a
              meaningful difference.
            </p>
            <p className="text-white/70 font-medium mb-8">
              Build What&apos;s Next With Pathnexis.
            </p>
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-teal text-white font-semibold rounded-full hover:bg-teal-light transition-all hover:shadow-xl hover:shadow-teal/30"
            >
              Get in Touch
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {applyJob && (
        <ApplyModal job={applyJob} onClose={() => setApplyJob(null)} />
      )}
    </>
  )
}
