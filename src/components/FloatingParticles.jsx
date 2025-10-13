import { motion } from 'framer-motion'
import { usePerformance } from '../hooks/usePerformance'

const FloatingParticles = () => {
  const { shouldReduceEffects } = usePerformance()

  // Reduce particles on mobile: 6 instead of 20
  const particleCount = shouldReduceEffects ? 6 : 20
  const particles = Array.from({ length: particleCount })

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-brand-gold/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            willChange: 'transform, opacity',
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  )
}

export default FloatingParticles
