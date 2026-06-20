import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Capabilities from './components/Capabilities'
import Industries from './components/Industries'
import Innovation from './components/Innovation'
import Insights from './components/Insights'
import Impact from './components/Impact'
import Careers from './components/Careers'
import Contact from './components/Contact'
import CtaBanner from './components/CtaBanner'
import Footer from './components/Footer'
import ScrollProgress from './components/ui/Effects'

function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Capabilities />
        <Industries />
        <Innovation />
        <Insights />
        <Impact />
        <Careers />
        <Contact />
      </main>
      <CtaBanner />
      <Footer />
    </>
  )
}

export default App
