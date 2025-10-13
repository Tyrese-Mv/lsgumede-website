import { motion } from 'framer-motion'
import { usePerformance } from '../hooks/usePerformance'

const MorphingBlobs = () => {
  const { shouldReduceEffects } = usePerformance()

  // Don't render on mobile to improve performance
  if (shouldReduceEffects) return null

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(201,169,97,0.4) 0%, transparent 70%)',
          willChange: 'transform',
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, 100, 0],
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 -left-40 w-80 h-80 rounded-full opacity-20 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(201,169,97,0.3) 0%, transparent 70%)',
          willChange: 'transform',
        }}
        animate={{
          x: [0, -50, 0],
          y: [0, -80, 0],
          scale: [1, 1.3, 1],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(201,169,97,0.5) 0%, transparent 70%)',
          x: '-50%',
          y: '-50%',
          willChange: 'transform',
        }}
        animate={{
          scale: [1, 1.5, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  )
}

export default MorphingBlobs
