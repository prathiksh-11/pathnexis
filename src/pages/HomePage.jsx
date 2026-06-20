import Hero from '../components/Hero'
import AntigravityBackground from '../components/AntigravityBackground'
import About from '../components/About'
import TrustedClients from '../components/TrustedClients'
import Capabilities from '../components/Capabilities'
import Industries from '../components/Industries'
import Innovation from '../components/Innovation'
import Insights from '../components/Insights'
import Impact from '../components/Impact'
import Careers from '../components/Careers'
import Contact from '../components/Contact'
import CtaBanner from '../components/CtaBanner'

export default function HomePage() {
  return (
    <div className="relative">
      <AntigravityBackground />
      <div className="relative z-[1]">
        <Hero />
        <About />
        <TrustedClients />
        <Capabilities />
        <Industries />
        <Innovation />
        <Insights />
        <Impact />
        <Careers />
        <Contact />
        <CtaBanner />
      </div>
    </div>
  )
}
