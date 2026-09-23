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

// Dedicated WhatNexis Feature Landing Pages
import WhatsAppAutomationPage from './pages/whatnexis/WhatsAppAutomationPage'
import InstagramAutomationPage from './pages/whatnexis/InstagramAutomationPage'
import AiChatbotPage from './pages/whatnexis/AiChatbotPage'
import CrmSharedInboxPage from './pages/whatnexis/CrmSharedInboxPage'
import GoogleReviewsPage from './pages/whatnexis/GoogleReviewsPage'
import PricingPage from './pages/whatnexis/PricingPage'

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
