import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'

const CountUp = ({ value, suffix = '', duration = 2 }) => {
  const ref = useRef(null)
  const count = useMotionValue(0)
  const rounded = useTransform(count, Math.round)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (isInView) {
      const animation = animate(count, value, { duration })
      return animation.stop
    }
  }, [isInView, value, duration, count])

  return (
    <motion.span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </motion.span>
  )
}

export default CountUp
