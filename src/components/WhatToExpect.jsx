import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'

const WhatToExpect = () => {
  const { t } = useTranslation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const steps = t('whatToExpect.steps', { returnObjects: true })

  const icons = [
    (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-brand-brown to-black relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-brand-gold/60 text-sm uppercase tracking-wider">{t('whatToExpect.badge')}</span>
          </motion.div>
          <h2 className="font-heading text-4xl md:text-5xl mb-4">
            {t('whatToExpect.title')} <span className="gradient-text">{t('whatToExpect.titleHighlight')}</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {t('whatToExpect.subtitle')}
          </p>
        </motion.div>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <div className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                {/* Content */}
                <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="flex items-start gap-4 mb-4">
                    <motion.div
                      className="w-16 h-16 bg-brand-gold/10 rounded-2xl flex items-center justify-center text-brand-gold flex-shrink-0"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      {icons[index]}
                    </motion.div>
                    <div>
                      <span className="text-brand-gold/40 font-heading text-sm">{step.number}</span>
                      <h3 className="font-heading text-2xl md:text-3xl text-brand-gold">{step.title}</h3>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-6 ml-20">
                    {step.description}
                  </p>

                  <ul className="space-y-2 ml-20">
                    {step.details.map((detail, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-center gap-3 text-gray-400"
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                        transition={{ delay: index * 0.2 + idx * 0.1, duration: 0.4 }}
                      >
                        <div className="w-1.5 h-1.5 bg-brand-gold rounded-full"></div>
                        <span>{detail}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Visual Element */}
                <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <motion.div
                    className="bg-gradient-to-br from-brand-gold/20 to-brand-gold/5 backdrop-blur-sm p-12 rounded-2xl border border-brand-gold/20 relative overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 rounded-bl-full"></div>
                    <div className="relative z-10 text-center">
                      <div className="text-6xl font-heading text-brand-gold/30 mb-2">{step.number}</div>
                      <div className="text-xl font-heading text-brand-gold">{step.title}</div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <motion.div
                  className="hidden md:block w-px h-12 bg-gradient-to-b from-brand-gold/40 to-brand-gold/10 mx-auto my-8"
                  initial={{ scaleY: 0 }}
                  animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                  transition={{ delay: index * 0.2 + 0.3, duration: 0.4 }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom message */}
        <motion.div
          className="text-center mt-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-brand-gold/20">
            <p className="text-gray-300 text-lg leading-relaxed italic">
              "{t('whatToExpect.quote')}"
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhatToExpect
