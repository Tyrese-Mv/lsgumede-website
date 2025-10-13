import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useRef } from 'react'
import { usePerformance } from '../hooks/usePerformance'

const MagneticButton = ({ children, className = "", onClick, ...props }) => {
  const { isMobile } = usePerformance()
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springConfig = { damping: 15, stiffness: 150 }
  const dx = useSpring(x, springConfig)
  const dy = useSpring(y, springConfig)

  const handleMouseMove = (e) => {
    // Disable magnetic effect on mobile
    if (isMobile || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set((e.clientX - centerX) * 0.3)
    y.set((e.clientY - centerY) * 0.3)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{ x: dx, y: dy, willChange: 'transform' }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={className}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export default MagneticButton
