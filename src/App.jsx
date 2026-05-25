import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WobbleDivider from './components/WobbleDivider'
import WorkSection from './components/WorkSection'
import MetricsSection from './components/MetricsSection'
import AluminumCard from './components/AluminumCard'
import ServicesSection from './components/ServicesSection'
import CTABand from './components/CTABand'
import Footer from './components/Footer'

import ProjectPage from './pages/ProjectPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

import './index.css'

function MainLayout() {
  return (
    <>
      <Navbar />
      <Hero />
      <WobbleDivider fromColor="#0d0d0d" toColor="#ffffff" />
      <WorkSection />
      <ServicesSection />
      <MetricsSection />
      <AluminumCard />
      <WobbleDivider fromColor="#ffffff" toColor="#0d0d0d" />
      <CTABand />
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/projects/:category" element={<ProjectPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}
