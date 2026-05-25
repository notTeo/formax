import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import './ServicesSection.css'

const icons = ['◈', '◉', '◫']

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.14, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function ServicesSection() {
  const { t } = useLanguage()
  const services = t.services.items.map((s, i) => ({ ...s, icon: icons[i] }))

  return (
    <section className="services" id="services">
      <motion.p
        className="services__label"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {t.services.label}
      </motion.p>
      <motion.h2
        className="services__heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        {t.services.heading}
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
