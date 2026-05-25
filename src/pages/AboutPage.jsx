import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import AluminumCard from '../components/AluminumCard'
import CTABand from '../components/CTABand'
import Footer from '../components/Footer'
import { useLanguage } from '../context/LanguageContext'
import './AboutPage.css'

export default function AboutPage() {
  const navigate = useNavigate()
  const { t } = useLanguage()
  const ab = t.about

  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="about">
      <Navbar />

      {/* ── Hero ── */}
      <section className="about__hero">
        <div className="about__hero-inner">
          <motion.button
            className="about__back"
            onClick={() => navigate('/')}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            {t.project.backBtn}
          </motion.button>
          <motion.p
            className="about__hero-label"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {ab.heroLabel}
          </motion.p>
          <motion.h1
            className="about__hero-title"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            {ab.heroHeading}
          </motion.h1>
        </div>
      </section>

      {/* ── Story ── */}
      <section className="about__story">
        <div className="about__story-inner">
          <div className="about__story-text">
            <p className="about__section-label">{ab.storyLabel}</p>
            <h2 className="about__story-heading">
              {ab.storyHeading.split('\n').map((line, i) => (
                <span key={i}>{line}{i === 0 && <br />}</span>
              ))}
            </h2>
            {ab.storyBody.split('\n\n').map((para, i) => (
              <p key={i} className="about__story-body">{para}</p>
            ))}
          </div>
          <div className="about__story-img-wrap">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
              alt="FORMAX construction"
              className="about__story-img"
            />
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="about__values">
        <div className="about__values-inner">
          <p className="about__section-label">{ab.valuesLabel}</p>
          <div className="about__values-grid">
            {ab.values.map((v, i) => (
              <motion.div
                key={v.title}
                className="about__value-card"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="about__value-icon">{v.icon}</span>
                <h3 className="about__value-title">{v.title}</h3>
                <p className="about__value-desc">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team — single member centered ── */}
      <section className="about__team">
        <div className="about__team-inner">
          <p className="about__section-label">{ab.teamLabel}</p>
          <h2 className="about__team-heading">{ab.teamHeading}</h2>
          {ab.team.map((member, i) => (
            <motion.div
              key={member.name}
              className="about__member about__member--solo"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="about__member-avatar">
                <span className="about__member-initials">{member.initials}</span>
              </div>
              <h3 className="about__member-name">{member.name}</h3>
              <p className="about__member-role">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Business Card — centered ── */}
      <section className="about__card-section">
        <AluminumCard />
      </section>

      <CTABand />
      <Footer />
    </div>
  )
}
