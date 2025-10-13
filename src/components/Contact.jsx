import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import CustomSelect from './CustomSelect'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedService, setSelectedService] = useState('')

  const serviceOptions = [
    { value: 'civil-litigation', label: 'Civil Litigation' },
    { value: 'employment-labour', label: 'Employment & Labour Law' },
    { value: 'contract-drafting', label: 'Contract Drafting & Reviews' },
    { value: 'family-divorce', label: 'Family and Divorce Law' },
    { value: 'estate-planning', label: 'Estate Planning and Probate' },
    { value: 'personal-injury', label: 'Personal Injury (RAF)' },
    { value: 'unlawful-arrest', label: 'Unlawful Arrest' },
    { value: 'debt-collection', label: 'Debt Collection' },
    { value: 'criminal-defense', label: 'Criminal Defense' },
  ]

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-black to-brand-brown">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-4xl md:text-5xl mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Contact us today for a consultation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Phone */}
            <motion.div
              className="flex items-start space-x-4"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-heading text-lg text-brand-gold mb-1">Phone</h3>
                <a href="tel:0790134813" className="text-gray-300 hover:text-brand-gold transition-colors">079 013 4813</a>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div
              className="flex items-start space-x-4"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-heading text-lg text-brand-gold mb-1">Email</h3>
                <a href="mailto:Lsgumedeattorneys@gmail.com" className="text-gray-300 hover:text-brand-gold transition-colors break-all">Lsgumedeattorneys@gmail.com</a>
              </div>
            </motion.div>

            {/* Address */}
            <motion.div
              className="flex items-start space-x-4"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-heading text-lg text-brand-gold mb-1">Office</h3>
                <p className="text-gray-300">303 Anton Lembede Street, 5<sup>th</sup> Floor<br />Durban Club Place, Regus<br />Durban, 4001</p>
              </div>
            </motion.div>

            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/27790134813"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
              </svg>
              <span className="font-semibold">Message us on WhatsApp</span>
            </motion.a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-brand-gold/20"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="space-y-6">
              <motion.div whileFocus={{ scale: 1.02 }}>
                <label htmlFor="name" className="block text-sm font-medium text-brand-gold mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-brand-gold/30 rounded-lg focus:outline-none focus:border-brand-gold text-white placeholder-gray-400"
                  placeholder="Your name"
                />
              </motion.div>

              <motion.div whileFocus={{ scale: 1.02 }}>
                <label htmlFor="email" className="block text-sm font-medium text-brand-gold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-brand-gold/30 rounded-lg focus:outline-none focus:border-brand-gold text-white placeholder-gray-400"
                  placeholder="your@email.com"
                />
              </motion.div>

              <motion.div whileFocus={{ scale: 1.02 }}>
                <label htmlFor="phone" className="block text-sm font-medium text-brand-gold mb-2">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 bg-white/10 border border-brand-gold/30 rounded-lg focus:outline-none focus:border-brand-gold text-white placeholder-gray-400"
                  placeholder="079 xxx xxxx"
                />
              </motion.div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-brand-gold mb-2">Service Needed</label>
                <CustomSelect
                  options={serviceOptions}
                  value={selectedService}
                  onChange={setSelectedService}
                  placeholder="Select a service"
                />
              </div>

              <motion.div whileFocus={{ scale: 1.02 }}>
                <label htmlFor="message" className="block text-sm font-medium text-brand-gold mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-brand-gold/30 rounded-lg focus:outline-none focus:border-brand-gold text-white placeholder-gray-400"
                  placeholder="Tell us about your legal matter"
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                className="w-full bg-brand-gold hover:bg-brand-gold/90 text-brand-brown px-6 py-4 rounded-lg font-semibold transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
