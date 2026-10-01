import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import ScrollProgress from './components/ui/Effects'
import SeoManager from './components/SeoManager'
import HomePage from './pages/HomePage'
import JobOpeningsPage from './pages/JobOpeningsPage'
import InsightsCategoryPage from './pages/InsightsCategoryPage'
import InsightArticlePage from './pages/InsightArticlePage'
import InnovationLabPage from './pages/InnovationLabPage'
import CapabilityPage from './pages/CapabilityPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import TermsPage from './pages/TermsPage'
import WhatNexisProductPage from './pages/WhatNexisProductPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import CapabilitiesIndexPage from './pages/CapabilitiesIndexPage'
import BlogIndexPage from './pages/BlogIndexPage'

// Dedicated WhatNexis Feature Landing Pages
import WhatsAppAutomationPage from './pages/whatnexis/WhatsAppAutomationPage'
import InstagramAutomationPage from './pages/whatnexis/InstagramAutomationPage'
import AiChatbotPage from './pages/whatnexis/AiChatbotPage'
import CrmSharedInboxPage from './pages/whatnexis/CrmSharedInboxPage'
import GoogleReviewsPage from './pages/whatnexis/GoogleReviewsPage'
import PricingPage from './pages/whatnexis/PricingPage'
import ShopifyD2cCrmPage from './pages/seo/ShopifyD2cCrmPage'
import ComparisonWhatnexisVsWatiPage from './pages/seo/ComparisonWhatnexisVsWatiPage'
import WatiAlternativesPage from './pages/seo/WatiAlternativesPage'
import BlogWhatsAppAppVsApiPage from './pages/seo/BlogWhatsAppAppVsApiPage'
import BlogWhatsAppGreenTickPage from './pages/seo/BlogWhatsAppGreenTickPage'
import BlogWhatsAppTemplatesPage from './pages/seo/BlogWhatsAppTemplatesPage'

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

function AppLayout() {
  return (
    <>
      <SeoManager />
      <ScrollProgress />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/capabilities" element={<CapabilitiesIndexPage />} />
          <Route path="/capabilities/:capabilitySlug" element={<CapabilityPage />} />

          {/* WhatNexis Flagship Hub & Aliases */}
          <Route path="/products" element={<WhatNexisProductPage />} />
          <Route path="/products/whatnexis" element={<WhatNexisProductPage />} />
          <Route path="/whatnexis" element={<WhatNexisProductPage />} />

          {/* WhatNexis Dedicated Feature & Solution Pages */}
          <Route path="/products/whatnexis/whatsapp-automation" element={<WhatsAppAutomationPage />} />
          <Route path="/products/whatnexis/instagram-automation" element={<InstagramAutomationPage />} />
          <Route path="/products/whatnexis/ai-chatbot" element={<AiChatbotPage />} />
          <Route path="/products/whatnexis/crm" element={<CrmSharedInboxPage />} />
          <Route path="/products/whatnexis/google-reviews" element={<GoogleReviewsPage />} />
          <Route path="/products/whatnexis/pricing" element={<PricingPage />} />

          {/* High-Intent SEO & Commercial Routes */}
          <Route path="/whatsapp-business-api-india" element={<WhatsAppAutomationPage />} />
          <Route path="/whatsapp-api-pricing" element={<PricingPage />} />
          <Route path="/instagram-dm-automation" element={<InstagramAutomationPage />} />
          <Route path="/google-reviews-automation" element={<GoogleReviewsPage />} />
          <Route path="/whatsapp-crm-shopify-d2c" element={<ShopifyD2cCrmPage />} />

          {/* Competitor Comparison Pages */}
          <Route path="/whatnexis-vs-wati" element={<ComparisonWhatnexisVsWatiPage />} />
          <Route path="/wati-alternatives-india" element={<WatiAlternativesPage />} />

          {/* Pillar Blog Guides (1,200+ Words) */}
          <Route path="/blog" element={<BlogIndexPage />} />
          <Route path="/blog/whatsapp-business-app-vs-api" element={<BlogWhatsAppAppVsApiPage />} />
          <Route path="/blog/how-to-get-whatsapp-green-tick-india" element={<BlogWhatsAppGreenTickPage />} />
          <Route path="/blog/how-to-get-whatsapp-template-approved" element={<BlogWhatsAppTemplatesPage />} />

          {/* Company & Content Pages */}
          <Route path="/careers" element={<JobOpeningsPage />} />
          <Route path="/careers/opportunities" element={<JobOpeningsPage />} />
          <Route path="/innovation-lab" element={<InnovationLabPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/insights/:categorySlug" element={<InsightsCategoryPage />} />
          <Route path="/insights/:categorySlug/:articleSlug" element={<InsightArticlePage />} />
        </Routes>
      </main>
      <Footer />
      <FloatingWhatsApp />
      <Analytics />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppLayout />
    </BrowserRouter>
  )
}
