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
          <Route path="/careers/opportunities" element={<JobOpeningsPage />} />
          <Route path="/innovation-lab" element={<InnovationLabPage />} />
          <Route path="/capabilities/:capabilitySlug" element={<CapabilityPage />} />
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
