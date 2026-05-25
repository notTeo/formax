import { useRef, useLayoutEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './Hero.css'

export default function Hero() {
  const clipperRef = useRef(null)
  const wordRef    = useRef(null)
  const [done, setDone] = useState(false)

  useLayoutEffect(() => {
    const clipper = clipperRef.current
    const word    = wordRef.current
    if (!clipper || !word) return

    const full  = word.scrollWidth
    const start = Math.round(full / 14)

    // 1. Pin to 1-char width with NO transition — prevents flash
    clipper.style.transition = 'none'
    clipper.style.width      = `${start}px`

    // 2. Force reflow so the browser registers the starting value
    void clipper.getBoundingClientRect()

    // 3. Enable transition and set target — browser animates it
    clipper.style.transition = 'width 1.8s cubic-bezier(0.16, 1, 0.3, 1) 0.5s'
    clipper.style.width      = `${full}px`

    // 4. Once done — hand off to CSS (max-content is always correct on resize too)
    //    We set this BEFORE setDone so React's re-render never sees a missing width
    const onEnd = () => {
      clipper.style.transition = ''
      clipper.style.width      = 'max-content'
      setDone(true)
    }
    clipper.addEventListener('transitionend', onEnd, { once: true })

    return () => {
      clipper.removeEventListener('transitionend', onEnd)
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
