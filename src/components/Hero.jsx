import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './Hero.css'

export default function Hero() {
  const clipperRef = useRef(null)
  const wordRef    = useRef(null)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const clipper = clipperRef.current
    const word    = wordRef.current
    if (!clipper || !word) return

    let cancelled    = false
    let fallbackTimer = null

    // Called exactly once to complete the animation (or skip it)
    const finish = () => {
      if (cancelled) return
      clearTimeout(fallbackTimer)
      clipper.style.transition = ''
      clipper.style.width      = 'max-content'
      setDone(true)
    }

    const run = () => {
      if (cancelled) return

      const full = word.scrollWidth

      // If font still hasn't given us a real width, skip animation and reveal immediately
      if (full <= 0) {
        finish()
        return
      }

      const start = Math.round(full / 14)

      // Set narrow start width — no transition so there's no visible jump
      clipper.style.transition = 'none'
      clipper.style.width      = `${start}px`

      // Force the browser to commit the starting value before we add the transition
      void clipper.getBoundingClientRect()

      // Now animate to full width
      clipper.style.transition = 'width 1.8s cubic-bezier(0.16, 1, 0.3, 1) 0.5s'
      clipper.style.width      = `${full}px`

      // Safety net: if transitionend never fires (tab hidden, browser throttling)
      // force completion after the full animation time + buffer
      fallbackTimer = setTimeout(finish, 2600)

      clipper.addEventListener('transitionend', () => {
        finish()
      }, { once: true })
    }

    // Wait for Sora to load before measuring — this is the key fix for mobile
    const fontsReady = document.fonts?.ready ?? Promise.resolve()
    fontsReady.then(run)

    return () => {
      cancelled = true
      clearTimeout(fallbackTimer)
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section className="hero" id="hero">
      <div className="hero__inner">

        <div className="hero__title-outer">
          <div ref={clipperRef} className="hero__clipper">
            <span ref={wordRef} className="hero__word">FORMAX</span>
          </div>
        </div>

        {/* Always in DOM — fade in when done so height never shifts */}
        <motion.div
          className="hero__divider"
          animate={{ scaleX: done ? 1 : 0, opacity: done ? 1 : 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        />
        <motion.p
          className="hero__subtitle"
          animate={{ opacity: done ? 1 : 0, y: done ? 0 : 12 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          Built to Last&nbsp;&nbsp;/&nbsp;&nbsp;Built with Precision
        </motion.p>

      </div>
    </section>
  )
}
