import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import './MetricsSection.css'

const metrics = [
  { value: 147, suffix: '+', label: 'Projects Completed' },
  { value: 16,  suffix: '',  label: 'Years of Experience' },
  { value: 98,  suffix: '%', label: 'Client Satisfaction' },
  { value: 23,  suffix: '',  label: 'Team Members' },
]

function CountUp({ target, suffix, active }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    let start = 0
    const duration = 1800
    const step = 16
    const increment = target / (duration / step)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, step)
    return () => clearInterval(timer)
  }, [active, target])

  return <>{count}{suffix}</>
}

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
        By the Numbers
      </motion.p>
      <motion.h2
        className="metrics__heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        A Track Record That Speaks
      </motion.h2>

      <div className="metrics__grid">
        {metrics.map((m, i) => (
          <motion.div
            key={m.label}
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
            <div className="metrics__name">{m.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
