import { Link } from 'react-router-dom'
import { SITE } from '../config/site'

export default function HomeSeoContent() {
  return (
    <section
      aria-label="About Pathnexis Solutions and WhatNexis Platform"
      className="py-16 bg-surface border-t border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
            Technology, Talent &amp; Transformation — {SITE.name}
          </h2>
          <p className="text-slate leading-relaxed mb-4">
            {SITE.legalName} is a Bengaluru-based enterprise helping organizations build intelligent
            futures through <strong>digital intelligence</strong>,{' '}
            <strong>human capital development</strong>, and{' '}
            <strong>business transformation</strong>. We engineer scalable AI models, cloud infrastructure,
            and conversational commerce software that empower businesses, institutions, and professionals across India.
          </p>
          <p className="text-slate leading-relaxed mb-4">
            Our flagship SaaS product,{' '}
            <Link to="/products/whatnexis" className="text-teal font-semibold hover:underline">
              WhatNexis
            </Link>
            , is an all-in-one conversational growth engine providing official{' '}
            <Link to="/products/whatnexis/whatsapp-automation" className="text-navy font-semibold hover:text-teal underline">
              Meta WhatsApp Business API
            </Link>{' '}
            onboarding,{' '}
            <Link to="/products/whatnexis/instagram-automation" className="text-navy font-semibold hover:text-teal underline">
              Instagram DM automation
            </Link>
            ,{' '}
            <Link to="/products/whatnexis/google-reviews" className="text-navy font-semibold hover:text-teal underline">
              5-star Google Reviews management
            </Link>
            , and autonomous{' '}
            <Link to="/products/whatnexis/ai-chatbot" className="text-navy font-semibold hover:text-teal underline">
              AI customer support chatbots
            </Link>
            . With 98% message open rates, sub-30 second template approvals, and native UPI/Razorpay in-chat payments,
            WhatNexis scales customer outreach with 100% DPDP Act and Indian cloud data compliance.
          </p>
          <p className="text-slate leading-relaxed mb-4">
            Pathnexis&apos;s capabilities span artificial intelligence, software engineering, cloud
            solutions, corporate learning, internship programs, talent acquisition, brand strategy,
            digital marketing, and operational excellence. Through our{' '}
            <Link to="/innovation-lab" className="text-teal hover:underline">
              Innovation Lab
            </Link>{' '}
            and Insights Center, we research emerging generative AI, future-of-work paradigms, and leadership
            strategies that enable sustainable organizational growth.
          </p>
          <p className="text-slate text-sm leading-relaxed">
            Headquartered in {SITE.address.city}, {SITE.address.region}, we partner with organizations
            in technology, education, healthcare, finance, retail, and manufacturing across India. Contact our team at{' '}
            <a href={`mailto:${SITE.email}`} className="text-teal hover:underline">
              {SITE.email}
            </a>{' '}
            or {SITE.phoneDisplay} to discuss your digital transformation and messaging automation requirements.
          </p>
        </div>
      </div>
    </section>
  )
}
