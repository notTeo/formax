import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import fMark from '../assets/formax-f-mark.png'
import { useLanguage } from '../context/LanguageContext'
import './Navbar.css'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { lang, setLang, t } = useLanguage()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // Smart hash-scroll: if already on /, scroll directly; otherwise navigate then scroll
  const handleHash = (hash, close = false) => {
    if (close) setMenuOpen(false)
    if (location.pathname === '/') {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/')
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' })
      }, 120)
    }
  }

  const navLinks = [
    { label: t.nav.projects, hash: 'projects' },
    { label: t.nav.services, hash: 'services' },
    { label: t.nav.about,    route: '/about' },
    { label: t.nav.contact,  route: '/contact' },
  ]

  const toggleLang = () => setLang(l => l === 'en' ? 'el' : 'en')

  const renderLink = (l, mobile = false) => {
    const close = mobile
    if (l.route) {
      return (
        <Link to={l.route} onClick={() => close && setMenuOpen(false)}>
          {l.label}
        </Link>
      )
    }
    return (
      <button className="navbar__hash-btn" onClick={() => handleHash(l.hash, close)}>
        {l.label}
      </button>
    )
  }

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : 'navbar--top'}`}>
        <div className="navbar__inner">

          {/* Logo */}
          <a href="/" className="navbar__logo" onClick={e => { e.preventDefault(); navigate('/') }}>
            {scrolled && (
              <img src={fMark} alt="FORMAX" className="navbar__logo-img navbar__logo-img--dark" />
            )}
          </a>

          {/* Desktop links — centered */}
          <ul className="navbar__links">
            {navLinks.map(l => (
              <li key={l.label}>{renderLink(l)}</li>
            ))}
          </ul>

          {/* Right side: lang toggle + CTA */}
          <div className="navbar__right">
            <button className="navbar__lang" onClick={toggleLang} aria-label="Switch language">
              {lang === 'en' ? 'ΕΛ' : 'EN'}
            </button>
            <Link to="/contact" className="navbar__btn">{t.nav.cta}</Link>
          </div>

          {/* Hamburger */}
          <button
            className={`navbar__burger ${menuOpen ? 'navbar__burger--open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="navbar__mobile"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
          >
            <ul className="navbar__mobile-links">
              {navLinks.map((l, i) => (
                <motion.li
                  key={l.label}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.07, duration: 0.3 }}
                >
                  {renderLink(l, true)}
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 + navLinks.length * 0.07, duration: 0.3 }}
              >
                <Link to="/contact" className="navbar__mobile-btn" onClick={() => setMenuOpen(false)}>
                  {t.nav.cta}
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 + (navLinks.length + 1) * 0.07, duration: 0.3 }}
              >
                <button className="navbar__mobile-lang" onClick={toggleLang}>
                  {lang === 'en' ? '🇬🇷 Ελληνικά' : '🇬🇧 English'}
                </button>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
