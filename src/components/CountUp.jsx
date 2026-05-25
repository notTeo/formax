import { useEffect, useState } from 'react'

/**
 * CountUp — animates from 0 to `target` over ~1800ms.
 * `active` prop controls when the count starts.
 * Pass `active={true}` immediately if you want it to start on mount.
 */
export default function CountUp({ target, suffix = '', active }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    let current = 0
    const duration = 1800
    const step = 16
    const increment = target / (duration / step)
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, step)
    return () => clearInterval(timer)
  }, [active, target])

  return <>{count}{suffix}</>
}
