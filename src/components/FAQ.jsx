import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const FAQ = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "Do I have a strong case?",
      answer: "Every case is unique. During our first consultation, I'll review your situation honestly and give you a clear assessment of your chances. I only take cases where I truly believe I can make a difference. If your case has merit, I'll fight for you with everything I have."
    },
    {
      question: "How long will my case take?",
      answer: "The timeline varies depending on the complexity of your case and the legal processes involved. During our consultation, I'll provide you with a realistic timeframe based on similar cases. I'll keep you informed every step of the way, so you always know where we stand."
    },
    {
      question: "What are your fees, and can we make payment arrangements?",
      answer: "I believe legal representation should be accessible. During our first meeting, I'll be transparent about costs and discuss payment arrangements that work for your situation. My focus is on helping you, not creating financial stress. Let's talk about what's possible."
    },
    {
      question: "Will I need to go to court?",
      answer: "Not necessarily. Many cases are resolved through negotiation and settlement without ever going to court. A good lawyer helps you avoid unnecessary litigation, saving you time, money, and stress. If court is necessary, I'll be there with you, fully prepared to fight for your rights."
    },
    {
      question: "What documents must I bring or prepare?",
      answer: "Bring whatever documents you have related to your case — police reports, medical records, contracts, correspondence, photos, or any other relevant materials. Don't worry if you don't have everything. We'll work together to gather what we need. Just come with your truth and your trust."
    },
    {
      question: "How will I be updated about my case?",
      answer: "Communication is key. I use WhatsApp, email, phone calls, and in-person meetings to keep you informed. You'll never wonder what's happening with your case. I'm accessible, responsive, and committed to ensuring you feel involved in your journey to justice."
    }
  ]

  return (
    <section id="faq" className="py-20 px-4 bg-gradient-to-b from-black to-brand-brown">
      <div className="container mx-auto max-w-4xl">
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
            <span className="text-brand-gold/60 text-sm uppercase tracking-wider">Common Questions</span>
          </motion.div>
          <h2 className="font-heading text-4xl md:text-5xl mb-4">
            Questions <span className="gradient-text">You May Have</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            These are the questions I hear most often from new clients. If you have other concerns, don't hesitate to ask during our consultation.
          </p>
        </motion.div>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl border border-brand-gold/20 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ borderColor: 'rgba(201, 169, 97, 0.4)' }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-6 flex items-center justify-between group"
              >
                <span className="font-heading text-lg md:text-xl text-white group-hover:text-brand-gold transition-colors pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <svg
                    className="w-6 h-6 text-brand-gold"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </motion.div>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 text-gray-300 leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-gray-400 mb-6">
            Still have questions? I'm here to help.
          </p>
          <a
            href="#contact"
            className="inline-block bg-brand-gold hover:bg-brand-gold/90 text-brand-brown px-8 py-3 rounded-lg font-semibold transition-all duration-300"
          >
            Schedule a Free Consultation
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ
