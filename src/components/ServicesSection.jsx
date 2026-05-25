import { motion } from 'framer-motion'
import './ServicesSection.css'

const services = [
  {
    icon: '◈',
    title: 'Design & Planning',
    desc: 'From initial concept to construction documents, our in-house team integrates architectural design, structural engineering, and MEP coordination — delivering buildable, code-compliant packages on every project.',
  },
  {
    icon: '◉',
    title: 'Construction Management',
    desc: 'We manage the full construction lifecycle: procurement, scheduling, subcontractor oversight, quality control, and client reporting. Every project is delivered on time, within budget, and to our exacting standards.',
  },
  {
    icon: '◫',
    title: 'Renovation & Retrofit',
    desc: 'Breathing new life into existing structures while maintaining operational continuity. We specialise in seismic upgrades, full-floor refits, façade replacement, and tenant improvement works at scale.',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.14, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function ServicesSection() {
  return (
    <section className="services" id="services">
      <motion.p
        className="services__label"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        What We Do
      </motion.p>
      <motion.h2
        className="services__heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        Our Services
      </motion.h2>

      <div className="services__grid">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            className="services__card"
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="services__icon">{s.icon}</div>
            <h3 className="services__card-title">{s.title}</h3>
            <p className="services__card-desc">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
