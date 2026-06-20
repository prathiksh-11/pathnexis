import { SITE } from '../config/site'

export default function HomeSeoContent() {
  return (
    <section
      aria-label="About Pathnexis Solutions"
      className="py-16 bg-surface border-t border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
            Technology, Talent &amp; Transformation — {SITE.name}
          </h2>
          <p className="text-slate leading-relaxed mb-4">
            {SITE.legalName} is a Bengaluru-based company helping organizations build intelligent
            futures through <strong>digital intelligence</strong>,{' '}
            <strong>human capital development</strong>, and{' '}
            <strong>business transformation</strong>. We combine AI, cloud engineering, enterprise
            software, professional training, career development, and strategic advisory to create
            lasting impact for businesses, institutions, and professionals across India.
          </p>
          <p className="text-slate leading-relaxed mb-4">
            Our three core capabilities — Digital Intelligence, Human Capital Development, and
            Business Transformation — span artificial intelligence, software engineering, cloud
            solutions, corporate learning, internship programs, talent acquisition, brand strategy,
            digital marketing, and operational excellence. Through our Innovation Lab and Insights
            Center, we explore emerging technologies, future-of-work trends, and leadership
            strategies that help clients adapt, grow, and compete in a rapidly changing world.
          </p>
          <p className="text-slate text-sm leading-relaxed">
            Headquartered in {SITE.address.city}, {SITE.address.region}, we partner with organizations
            in technology, education, healthcare, finance, retail, manufacturing, and professional
            services. Contact us at{' '}
            <a href={`mailto:${SITE.email}`} className="text-teal hover:underline">
              {SITE.email}
            </a>{' '}
            or {SITE.phoneDisplay} to discuss your transformation journey.
          </p>
        </div>
      </div>
    </section>
  )
}
