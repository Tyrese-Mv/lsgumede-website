import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { usePerformance } from '../hooks/usePerformance'

const CustomCursor = () => {
  const { isMobile } = usePerformance()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    // Don't add listeners on mobile
    if (isMobile) return

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseOver = (e) => {
      if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A' || e.target.closest('button') || e.target.closest('a')) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseover', handleMouseOver)
    }
  }, [isMobile])

  // Don't render on mobile devices
  if (isMobile) return null

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed w-4 h-4 bg-brand-gold rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          willChange: 'transform',
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />

      {/* Cursor ring */}
      <motion.div
        className="fixed w-10 h-10 border-2 border-brand-gold/50 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: mousePosition.x - 20,
          top: mousePosition.y - 20,
          willChange: 'transform',
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      />
    </>
  )
}

export default CustomCursor
