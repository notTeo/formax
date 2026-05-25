import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import CountUp from './CountUp'
import { useLanguage } from '../context/LanguageContext'
import './MetricsSection.css'

const metricsData = [
  { value: 147, suffix: '+', labelKey: 'Projects Completed' },
  { value: 16,  suffix: '',  labelKey: 'Years of Experience' },
  { value: 98,  suffix: '%', labelKey: 'Client Satisfaction' },
  { value: 23,  suffix: '',  labelKey: 'Team Members' },
]

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function MetricsSection() {
  const [active, setActive] = useState(false)
  const ref = useRef(null)
  const { t } = useLanguage()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true) },
      { threshold: 0.4 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="metrics" id="about" ref={ref}>
      <motion.p
        className="metrics__label"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {t.metrics.label}
      </motion.p>
      <motion.h2
        className="metrics__heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        {t.metrics.heading}
      </motion.h2>

      <div className="metrics__grid">
        {metricsData.map((m, i) => (
          <motion.div
            key={m.labelKey}
            className="metrics__card"
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="metrics__number">
              <CountUp target={m.value} suffix={m.suffix} active={active} />
            </div>
            <div className="metrics__name">{m.labelKey}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
