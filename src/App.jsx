import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Events from './components/Events'
import Mission from './components/Mission'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Events />
        <Mission />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
