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
import Footer from './components/Footer'

function App() {
  return (
    <>
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
      <Footer />
    </>
  )
}

export default App
