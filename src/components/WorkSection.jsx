import { motion } from 'framer-motion'
import './WorkSection.css'

const projects = [
  {
    num: '01',
    title: 'Harborview Tower',
    desc: '32-floor commercial high-rise delivered four weeks ahead of schedule. Structural steel frame, full curtain-wall glazing, LEED Gold certification, and a 98,000 sq ft floorplate built for long-term commercial tenants.',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&q=80',
    align: 'left',
  },
  {
    num: '02',
    title: 'Meridian Residences',
    desc: '148-unit luxury residential complex spanning two basement parking levels, a rooftop amenity deck, and a private landscaped courtyard. Delivered on budget with zero structural deficiencies reported post-handover.',
    img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=700&q=80',
    align: 'right',
  },
  {
    num: '03',
    title: 'Eastbridge Industrial',
    desc: '92,000 sq ft logistics and light-manufacturing facility built on a compressed 14-month timeline. Tilt-up concrete construction, heavy-load floor slabs rated at 10,000 lbs/sq ft, and full M&E fit-out.',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80',
    align: 'left',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function WorkSection() {
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
          Selected Work
        </motion.p>
        <motion.h2
          className="work__heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Projects That Define Us
        </motion.h2>
      </div>

      <div className="work__cards">
        {projects.map((p, i) => (
          <motion.div
            key={p.num}
            className={`work__card work__card--${p.align}`}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="work__card-content">
              <span className="work__num">{p.num}</span>
              <h3 className="work__card-title">{p.title}</h3>
              <p className="work__card-desc">{p.desc}</p>
              <a href="#projects" className="work__link">View Project →</a>
            </div>
            <div className="work__photo-wrap">
              <img src={p.img} alt={p.title} className="work__photo" loading="lazy" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
