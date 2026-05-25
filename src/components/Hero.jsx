import { motion } from 'framer-motion'
import logo from '../assets/formax-logo-transparent.png'
import { useLanguage } from '../context/LanguageContext'
import './Hero.css'

export default function Hero() {
  const { t } = useLanguage()
  return (
    <section className="hero" id="hero">
      <div className="hero__inner">

        <motion.div
          className="hero__logo-wrap"
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          <img src={logo} alt="FORMAX" className="hero__logo" />
        </motion.div>

        <motion.div
          className="hero__divider"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.45, ease: 'easeOut', delay: 0.9 }}
        />
        <motion.p
          className="hero__subtitle"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: 1.05 }}
        >
          {t.hero.sub}
        </motion.p>

      </div>
    </section>
  )
}
