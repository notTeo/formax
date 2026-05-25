import { useState } from 'react'
import { motion } from 'framer-motion'
import './AluminumCard.css'

export default function AluminumCard() {
  const [flipped, setFlipped] = useState(false)

  return (
    <div className="alcard-wrap">
      {/* Entrance: Z-axis spin 30→45, fade + scale in */}
      <motion.div
        className="alcard-scene"
        initial={{ opacity: 0, scale: 0.75, rotate: 30 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 45 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* perspective must sit on a separate parent from the rotating element */}
        <div className="alcard-perspective">
          <motion.div
            className="alcard-flipper"
            animate={{ rotateY: flipped ? 180 : 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => setFlipped(f => !f)}
          >
            {/* ── FRONT ── */}
            <div className="alcard-face alcard-front">
              <div className="alcard-face__inner">
                <span className="alcard-front__name">FORMAX</span>
                <span className="alcard-front__hint">tap to flip</span>
              </div>
            </div>

            {/* ── BACK ── */}
            <div className="alcard-face alcard-back">
              <div className="alcard-face__inner">
                <p className="alcard-back__brand">FORMAX</p>
                <p className="alcard-back__tagline">Construction &amp; Development</p>
                <div className="alcard-back__divider" />
                <p className="alcard-back__name">Philip Karaiskos</p>
                <p className="alcard-back__role">Senior Project Manager</p>
                <div className="alcard-back__contacts">
                  <span>+1 (555) 847 2200</span>
                  <span>nick@formax.com</span>
                  <span>formax.com</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
