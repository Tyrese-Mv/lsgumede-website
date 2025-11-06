import { motion } from 'framer-motion'
import MagneticButton from './MagneticButton'
import TextReveal from './TextReveal'

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl"></div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <span className="text-brand-gold/60 text-sm uppercase tracking-wider">100% Black-Owned Law Firm</span>
            </motion.div>

            <motion.h2
              className="font-heading text-5xl md:text-6xl mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <TextReveal>Standing for</TextReveal>
              <span className="block text-brand-gold">
                <TextReveal>the Voiceless</TextReveal>
              </span>
            </motion.h2>

            <motion.p
              className="text-lg text-gray-300 mb-4 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Justice is not reserved only for those who can afford it. We give people hope where there seems to be none, and ensure fairness is accessible to all.
            </motion.p>

            <motion.p
              className="text-base text-gray-400 mb-8 leading-relaxed italic border-l-2 border-brand-gold/40 pl-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              "Stand for the truth, even if you stand alone."
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <MagneticButton
                onClick={() => scrollToSection('contact')}
                className="bg-brand-gold hover:bg-brand-gold/90 text-brand-brown px-8 py-4 rounded-lg font-semibold text-center transition-all duration-300"
              >
                Free Consultation
              </MagneticButton>
              <MagneticButton
                onClick={() => scrollToSection('services')}
                className="border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-brown px-8 py-4 rounded-lg font-semibold text-center transition-all duration-300"
              >
                Our Services
              </MagneticButton>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <motion.div
              className="relative rounded-full overflow-hidden border-4 border-brand-gold aspect-square"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=600&fit=crop"
                alt="Legal Gavel"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -left-4 w-24 h-24 bg-brand-gold/20 rounded-full blur-xl"
              style={{ willChange: 'transform, opacity' }}
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              className="absolute -top-4 -right-4 w-32 h-32 bg-brand-gold/10 rounded-full blur-xl"
              style={{ willChange: 'transform, opacity' }}
              animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
