import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useLanguage } from '../context/LanguageContext'
import './ContactPage.css'

export default function ContactPage() {
  const navigate = useNavigate()
  const { t } = useLanguage()
  const c = t.contact
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  useEffect(() => { window.scrollTo(0, 0) }, [])

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    const subject = encodeURIComponent(`Enquiry from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`)
    window.location.href = `mailto:hello@formax.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <div className="contact-page">
      <Navbar />

      {/* ── Hero ── */}
      <section className="contact-page__hero">
        <div className="contact-page__hero-inner">
          <motion.button
            className="contact-page__back"
            onClick={() => navigate('/')}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            {c.backBtn}
          </motion.button>
          <motion.p
            className="contact-page__hero-label"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {c.heroLabel}
          </motion.p>
          <motion.h1
            className="contact-page__hero-title"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            {c.heroTitle}<br />
            <span className="contact-page__hero-gold">{c.heroAccent}</span>
          </motion.h1>
        </div>
      </section>

      {/* ── Main content ── */}
      <section className="contact-page__body">
        <div className="contact-page__body-inner">

          {/* Left — info */}
          <motion.div
            className="contact-page__info"
            initial={{ opacity: 0, x: -32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="contact-page__info-label">{c.infoLabel}</p>
            <h2 className="contact-page__info-heading">{c.infoHeading}</h2>
            <p className="contact-page__info-body">{c.infoBody}</p>

            <div className="contact-page__details">
              <div className="contact-page__detail">
                <span className="contact-page__detail-icon">✉</span>
                <div>
                  <p className="contact-page__detail-label">{c.emailLabel}</p>
                  <a href="mailto:hello@formax.com" className="contact-page__detail-value">hello@formax.com</a>
                </div>
              </div>
              <div className="contact-page__detail">
                <span className="contact-page__detail-icon">✆</span>
                <div>
                  <p className="contact-page__detail-label">{c.phoneLabel}</p>
                  <a href="tel:+15558472200" className="contact-page__detail-value">+1 (555) 847 2200</a>
                </div>
              </div>
              <div className="contact-page__detail">
                <span className="contact-page__detail-icon">◎</span>
                <div>
                  <p className="contact-page__detail-label">{c.officeLabel}</p>
                  <p className="contact-page__detail-value">{c.officeValue}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            className="contact-page__form-wrap"
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {sent ? (
              <div className="contact-page__sent">
                <span className="contact-page__sent-icon">✓</span>
                <h3>{c.sentTitle}</h3>
                <p>{c.sentBody}</p>
              </div>
            ) : (
              <form className="contact-page__form" onSubmit={handleSubmit}>
                <div className="contact-page__row">
                  <div className="contact-page__field">
                    <label htmlFor="name">{c.fieldName}</label>
                    <input
                      id="name" name="name" type="text" required
                      placeholder={c.placeholderName}
                      value={form.name} onChange={handleChange}
                    />
                  </div>
                  <div className="contact-page__field">
                    <label htmlFor="email">{c.fieldEmail}</label>
                    <input
                      id="email" name="email" type="email" required
                      placeholder={c.placeholderEmail}
                      value={form.email} onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="contact-page__field">
                  <label htmlFor="phone">
                    {c.fieldPhone} <span className="contact-page__optional">{c.fieldPhoneOpt}</span>
                  </label>
                  <input
                    id="phone" name="phone" type="tel"
                    placeholder={c.placeholderPhone}
                    value={form.phone} onChange={handleChange}
                  />
                </div>
                <div className="contact-page__field">
                  <label htmlFor="message">{c.fieldMessage}</label>
                  <textarea
                    id="message" name="message" required rows={5}
                    placeholder={c.placeholderMessage}
                    value={form.message} onChange={handleChange}
                  />
                </div>
                <button type="submit" className="contact-page__submit">
                  {c.submit}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </section>

      <Footer />
    </div>
  )
}
