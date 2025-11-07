import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import MagneticButton from './MagneticButton'
import TextReveal from './TextReveal'

const Hero = () => {
  const { t } = useTranslation()
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
              <span className="text-brand-gold/60 text-sm uppercase tracking-wider">{t('hero.badge')}</span>
            </motion.div>

            <motion.h2
              className="font-heading text-5xl md:text-6xl mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <TextReveal>{t('hero.title')}</TextReveal>
              <span className="block text-brand-gold">
                <TextReveal>{t('hero.titleHighlight')}</TextReveal>
              </span>
            </motion.h2>

            <motion.p
              className="text-lg text-gray-300 mb-4 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {t('hero.description')}
            </motion.p>

            <motion.p
              className="text-base text-gray-400 mb-8 leading-relaxed italic border-l-2 border-brand-gold/40 pl-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              "{t('hero.quote')}"
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
                {t('hero.cta.consultation')}
              </MagneticButton>
              <MagneticButton
                onClick={() => scrollToSection('services')}
                className="border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-brown px-8 py-4 rounded-lg font-semibold text-center transition-all duration-300"
              >
                {t('hero.cta.services')}
              </MagneticButton>
            </motion.div>
          </motion.div>

          {/* Right - 3D Gavel Illustration */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {/* Main Gavel Container */}
            <div className="relative">
              {/* Glow effect behind gavel */}
              <div className="absolute inset-0 bg-gradient-radial from-brand-gold/30 via-brand-gold/10 to-transparent blur-3xl scale-110" />

              {/* Gavel Image */}
              <div
                className="relative z-10 drop-shadow-2xl"
                style={{
                  filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.5))'
                }}
              >
                <img
                  src="/gavel.png"
                  alt="Wooden gavel representing justice and legal authority - LS Gumede Attorneys"
                  className="w-full h-auto"
                  loading="eager"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
