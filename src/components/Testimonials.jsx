import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Testimonials = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const testimonials = [
    {
      case: "Unlawful Arrest",
      story: "A client who had been wrongfully arrested and detained for days without any evidence. When he came to us, he had lost faith in the justice system — he felt powerless and humiliated.",
      outcome: "We investigated thoroughly and fought relentlessly until we secured his release and obtained compensation for the violation of his rights. Watching him regain his dignity reminded us why we do this work.",
      emotion: "From hopeless to vindicated",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      )
    },
    {
      case: "Road Accident Fund (RAF)",
      story: "After a devastating accident, the client was overwhelmed by medical bills, unable to work, and didn't know where to turn. The compensation process seemed impossible to navigate alone.",
      outcome: "We handled every detail of the RAF claim, securing compensation that allowed them to focus on recovery and rebuild their life. They went from feeling abandoned by the system to feeling supported and hopeful.",
      emotion: "From overwhelmed to rebuilding",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      case: "Civil Litigation",
      story: "A small business owner facing a complex contractual dispute that threatened to bankrupt their company. They felt intimidated by the opposing party's resources and legal team.",
      outcome: "Through strategic negotiation and unwavering commitment, we achieved a fair settlement that protected their business and their livelihood. Justice isn't about who has more money — it's about what's right.",
      emotion: "From intimidated to empowered",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    }
  ]

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
          <motion.div
            className="inline-block mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-brand-gold/60 text-sm uppercase tracking-wider">Real Cases, Real Impact</span>
          </motion.div>
          <h2 className="font-heading text-4xl md:text-5xl mb-4">
            Stories of <span className="gradient-text">Justice Restored</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Each case is a human story that deserves to be told and fought for with integrity and passion. Here are a few examples of clients we've helped.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <motion.div
                className="h-full bg-gradient-to-br from-brand-brown/40 to-brand-brown/20 backdrop-blur-sm p-8 rounded-2xl border border-brand-gold/20"
                whileHover={{ y: -8, borderColor: 'rgba(201, 169, 97, 0.4)' }}
                transition={{ duration: 0.3 }}
              >
                {/* Icon */}
                <motion.div
                  className="w-16 h-16 bg-brand-gold/10 rounded-2xl flex items-center justify-center mb-6 text-brand-gold"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  {testimonial.icon}
                </motion.div>

                {/* Case Type */}
                <h3 className="font-heading text-xl text-brand-gold mb-4">{testimonial.case}</h3>

                {/* Story */}
                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-sm text-brand-gold/60 mb-2 uppercase tracking-wider">The Situation</p>
                    <p className="text-gray-300 text-sm leading-relaxed">{testimonial.story}</p>
                  </div>

                  <div>
                    <p className="text-sm text-brand-gold/60 mb-2 uppercase tracking-wider">The Outcome</p>
                    <p className="text-gray-300 text-sm leading-relaxed">{testimonial.outcome}</p>
                  </div>
                </div>

                {/* Emotion Journey */}
                <div className="pt-4 border-t border-brand-gold/20">
                  <p className="text-brand-gold/80 italic text-sm">{testimonial.emotion}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Message */}
        <motion.div
          className="text-center mt-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-brand-gold/20">
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              "Winning a case is not about ego or victory — it's about relief and restoration. Seeing the look on a client's face when justice is finally served — that moment when tears turn into gratitude — that's the real reward."
            </p>
            <p className="text-brand-gold font-heading">— Lindokuhle Gumede</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
