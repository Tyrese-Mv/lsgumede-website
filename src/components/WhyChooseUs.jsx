import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const features = [
  {
    title: 'Personal Attention',
    description: 'Every client works directly with me — not passed around from desk to desk. You get my personal involvement from consultation to resolution. We don\'t treat clients as files; we treat them as people.',
    details: [
      'Direct access to the principal attorney',
      'No delegation to juniors',
      'Hands-on approach throughout your case',
      'You\'re never just a case number'
    ],
    icon: (
      <svg className="w-8 h-8 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
      </svg>
    ),
  },
  {
    title: 'Proven Commitment',
    description: 'I take every case personally and fight as if it were my own matter. My focus isn\'t on volume, but on impact — getting real results and building lifelong trust.',
    details: [
      '500+ cases successfully handled',
      '98% success rate',
      'Every case treated with equal dedication',
      'Long-term relationships with clients'
    ],
    icon: (
      <svg className="w-8 h-8 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
      </svg>
    ),
  },
  {
    title: 'Integrity & Results',
    description: 'I\'m honest about your chances, transparent about costs, and relentless about achieving fair outcomes. My focus is not just on winning — it\'s on doing right by you.',
    details: [
      'Honest case assessments',
      'Transparent fee structure',
      'Payment arrangements available',
      'Commitment to truth and justice'
    ],
    icon: (
      <svg className="w-8 h-8 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path>
      </svg>
    ),
  },
]

const FeatureCard = ({ feature, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      className="relative group"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
    >
      <motion.div
        className="h-full bg-gradient-to-br from-brand-brown/40 to-brand-brown/20 backdrop-blur-sm p-8 rounded-2xl border border-brand-gold/20"
        whileHover={{ y: -8, borderColor: 'rgba(201, 169, 97, 0.4)' }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="w-16 h-16 bg-brand-gold/10 rounded-2xl flex items-center justify-center mb-6"
          whileHover={{ scale: 1.1, rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          {feature.icon}
        </motion.div>
        <h3 className="font-heading text-2xl text-brand-gold mb-4">{feature.title}</h3>
        <p className="text-gray-300 leading-relaxed mb-6">{feature.description}</p>

        <ul className="space-y-2">
          {feature.details.map((detail, idx) => (
            <li key={idx} className="flex items-start gap-3 text-gray-400 text-sm">
              <div className="w-1.5 h-1.5 bg-brand-gold rounded-full mt-2 flex-shrink-0"></div>
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  )
}

const WhyChooseUs = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-20 px-4 bg-black">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-4xl md:text-5xl mb-4">
            Why Choose <span className="gradient-text">LS Gumede Attorneys</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
