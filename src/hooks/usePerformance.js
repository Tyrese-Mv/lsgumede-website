import { useState, useEffect } from 'react'

export const usePerformance = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    checkMobile()
    window.addEventListener('resize', checkMobile)

    const handleMotionChange = (e) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handleMotionChange)

    return () => {
      window.removeEventListener('resize', checkMobile)
      mediaQuery.removeEventListener('change', handleMotionChange)
    }
  }, [])

  return {
    isMobile,
    prefersReducedMotion,
    shouldReduceEffects: isMobile || prefersReducedMotion
  }
}
