import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import CountUp from './CountUp'

const Stats = () => {
  const { t } = useTranslation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const stats = [
    { value: 100, suffix: '+', label: t('stats.cases') },
    { value: 98, suffix: '%', label: t('stats.success') },
    { value: 5, suffix: '+', label: t('stats.experience') },
    { value: 100, suffix: '+', label: t('stats.clients') },
  ]

  return (
    <section className="py-16 px-4 bg-brand-brown/50 backdrop-blur-sm">
      <div className="container mx-auto max-w-6xl">
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <motion.div
                className="text-4xl md:text-5xl font-heading text-brand-gold mb-2"
                whileHover={{ scale: 1.1 }}
              >
                <CountUp value={stat.value} suffix={stat.suffix} duration={2.5} />
              </motion.div>
              <p className="text-gray-400 text-sm md:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
