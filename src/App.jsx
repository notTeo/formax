import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WobbleDivider from './components/WobbleDivider'
import WorkSection from './components/WorkSection'
import MetricsSection from './components/MetricsSection'
import ServicesSection from './components/ServicesSection'
import CTABand from './components/CTABand'
import Footer from './components/Footer'
import './index.css'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <WobbleDivider fromColor="#0d0d0d" toColor="#ffffff" />
      <WorkSection />
      <MetricsSection />
      <ServicesSection />
      <WobbleDivider fromColor="#ffffff" toColor="#0d0d0d" />
      <CTABand />
      <Footer />
    </>
  )
}
