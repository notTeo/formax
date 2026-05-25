import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import './WorkSection.css'

const categories = [
  {
    id: 'properties',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
    count: 68,
  },
  {
    id: 'islands',
    img: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&q=80',
    count: 41,
  },
  {
    id: 'hotels',
    img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
    count: 38,
  },
]

export default function WorkSection() {
  const navigate = useNavigate()
  const { t } = useLanguage()

  return (
    <section className="work" id="projects">
      <div className="work__header">
        <motion.p
          className="work__label"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t.work.label}
        </motion.p>
        <motion.h2
          className="work__heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {t.work.heading}
        </motion.h2>
      </div>

      <div className="work__cats">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.id}
            className="work__cat"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => navigate(`/projects/${cat.id}`)}
            role="button"
            tabIndex={0}
            onKeyDown={e => e.key === 'Enter' && navigate(`/projects/${cat.id}`)}
          >
            <div className="work__cat-img-wrap">
              <img src={cat.img} alt={t.work[cat.id]} className="work__cat-img" loading="lazy" />
              <div className="work__cat-overlay" />
            </div>
            <div className="work__cat-body">
              <h3 className="work__cat-title">{t.work[cat.id]}</h3>
              <span className="work__cat-count">{cat.count}+ {t.work.projects_suffix}</span>
            </div>
            <div className="work__cat-arrow">→</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
