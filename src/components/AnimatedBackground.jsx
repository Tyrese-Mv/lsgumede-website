import { motion } from 'framer-motion'
import { usePerformance } from '../hooks/usePerformance'

const AnimatedBackground = () => {
  const { shouldReduceEffects } = usePerformance()

  // Use lighter blur on mobile for better performance
  const blurClass = shouldReduceEffects ? 'blur-xl' : 'blur-3xl'

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Animated gradient orbs */}
      <motion.div
        className={`absolute top-0 -left-40 w-96 h-96 bg-brand-gold/20 rounded-full ${blurClass}`}
        style={{ willChange: 'transform' }}
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className={`absolute top-1/3 -right-40 w-96 h-96 bg-brand-gold/10 rounded-full ${blurClass}`}
        style={{ willChange: 'transform' }}
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className={`absolute bottom-20 left-1/3 w-96 h-96 bg-brand-gold/15 rounded-full ${blurClass}`}
        style={{ willChange: 'transform' }}
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  )
}

export default AnimatedBackground
