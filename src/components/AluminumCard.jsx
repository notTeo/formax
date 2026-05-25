import { useState } from 'react'
import { motion } from 'framer-motion'
import fullLogo from '../assets/formax-logo-transparent.png'
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
                <img src={fullLogo} alt="FORMAX" className="alcard-front__logo" />
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

      {/* Tap indicator — lives outside the rotated scene */}
      <motion.div
        className="alcard-hint"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 1.1, ease: 'easeOut' }}
        onClick={() => setFlipped(f => !f)}
      >
        <motion.span
          className="alcard-hint__icon"
          animate={{ rotate: [0, 180, 180] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          ↺
        </motion.span>
        <span className="alcard-hint__label">Tap to flip</span>
      </motion.div>
    </div>
  )
}
