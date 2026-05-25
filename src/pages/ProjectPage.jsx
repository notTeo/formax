import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import CountUp from '../components/CountUp'
import CTABand from '../components/CTABand'
import Footer from '../components/Footer'
import { useLanguage } from '../context/LanguageContext'
import './ProjectPage.css'

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function ProjectPage() {
  const { category } = useParams()
  const navigate = useNavigate()
  const { t, lang } = useLanguage()
  const [countActive, setCountActive] = useState(false)

  const data = t.project[category]

  // Start count-up after a short delay on mount (no scroll needed)
  useEffect(() => {
    window.scrollTo(0, 0)
    const timer = setTimeout(() => setCountActive(true), 400)
    return () => clearTimeout(timer)
  }, [category])

  if (!data) {
    return (
      <div className="proj-404">
        <Navbar />
        <div className="proj-404__inner">
          <p>Category not found.</p>
          <button onClick={() => navigate('/')}>Go Home</button>
        </div>
      </div>
    )
  }

  return (
    <div className="proj">
      <Navbar />

      {/* ── Hero ── */}
      <section className="proj__hero" style={{ backgroundImage: `url(${data.detailsImg})` }}>
        <div className="proj__hero-overlay" />
        <div className="proj__hero-inner">
          <motion.button
            className="proj__back"
            onClick={() => navigate('/')}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            {t.project.backBtn}
          </motion.button>
          <motion.p
            className="proj__hero-label"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {data.heroLabel}
          </motion.p>
          <motion.h1
            className="proj__hero-title"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {data.title}
          </motion.h1>
          <motion.p
            className="proj__hero-sub"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            {data.subtitle}
          </motion.p>
        </div>
      </section>

      {/* ── Metrics ── */}
      <section className="proj__metrics">
        <div className="proj__metrics-grid">
          {data.metrics.map((m, i) => (
            <motion.div
              key={m.label}
              className="proj__metric-card"
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="proj__metric-number">
                <CountUp target={m.value} suffix={m.suffix} active={countActive} />
              </div>
              <div className="proj__metric-label">{m.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Details ── */}
      <section className="proj__details">
        <div className="proj__details-inner">
          <div className="proj__details-img-wrap">
            <img src={data.detailsImg} alt={data.title} className="proj__details-img" />
          </div>
          <div className="proj__details-text">
            <p className="proj__details-label">{t.project.detailsLabel}</p>
            <h2 className="proj__details-heading">{data.detailsHeading}</h2>
            {data.detailsBody.split('\n\n').map((para, i) => (
              <p key={i} className="proj__details-body">{para}</p>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
      <Footer />
    </div>
  )
}
