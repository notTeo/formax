import { motion } from 'framer-motion'
import './CTABand.css'

export default function CTABand() {
  return (
    <section className="cta" id="contact">
      <div className="cta__inner">
        <motion.h2
          className="cta__heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Ready to Build{' '}
          <span className="cta__heading--gold">Something Great?</span>
        </motion.h2>

        <motion.a
          href="mailto:hello@formax.com"
          className="cta__btn"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
        >
          Start Your Project
        </motion.a>
      </div>
    </section>
  )
}
