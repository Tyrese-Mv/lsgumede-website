import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 3000) // Show splash for 3 seconds

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-brand-brown"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          {/* Subtle background gradient */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-1/4 -right-40 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-1/4 -left-40 w-80 h-80 bg-brand-gold/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.1, 0.15, 0.1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>

          {/* Content */}
          <div className="relative text-center space-y-8">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="flex justify-center"
            >
              <img
                src="/LS_Gumede_only_logo.png"
                alt="LS Gumede Attorneys"
                className="h-40 md:h-48 w-auto object-contain"
                style={{ filter: 'drop-shadow(0 0 20px rgba(201, 169, 97, 0.3))' }}
              />
            </motion.div>

            {/* Company Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
              className="space-y-2"
            >
              <h1 className="font-heading text-4xl md:text-5xl text-brand-gold tracking-wide">
                LS GUMEDE
              </h1>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-px bg-brand-gold/40"></div>
                <p className="text-brand-gold/70 text-sm uppercase tracking-[0.3em] font-light">
                  Attorneys
                </p>
                <div className="w-12 h-px bg-brand-gold/40"></div>
              </div>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-gray-400 text-base font-light tracking-wide"
            >
              Excellence in Legal Practice
            </motion.p>

            {/* Loading indicator - animated line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex justify-center pt-4"
            >
              <div className="w-24 h-0.5 bg-brand-gold/20 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-brand-gold rounded-full"
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{ width: '50%' }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default SplashScreen