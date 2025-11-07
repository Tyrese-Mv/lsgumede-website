import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import CustomSelect from './CustomSelect'

const Contact = () => {
  const { t } = useTranslation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedService, setSelectedService] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', or null

  const serviceOptions = [
    { value: 'personal-injury', label: t('services.raf.title') },
    { value: 'medical-negligence', label: t('services.medical.title') },
    { value: 'unlawful-arrest', label: t('services.arrest.title') },
    { value: 'civil-litigation', label: t('services.civil.title') },
    { value: 'employment-labour', label: t('services.employment.title') },
    { value: 'family-divorce', label: t('services.family.title') },
    { value: 'estate-planning', label: t('services.estate.title') },
    { value: 'contract-drafting', label: t('services.contract.title') },
    { value: 'debt-collection', label: t('services.debt.title') },
    { value: 'criminal-defense', label: t('services.criminal.title') },
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('Form submit triggered')
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const formData = new FormData(e.target)

      // Log form data for debugging
      console.log('Form data entries:')
      for (let pair of formData.entries()) {
        console.log(pair[0] + ': ' + pair[1])
      }

      // Add the selected service to form data
      if (selectedService) {
        const serviceLabel = serviceOptions.find(s => s.value === selectedService)?.label || selectedService
        formData.set('Service Needed', serviceLabel)
        console.log('Selected service:', serviceLabel)
      }

      console.log('Submitting to FormSubmit...')

      // Using FormSubmit
      const response = await fetch('https://formsubmit.co/ajax/Lsgumedeattorneys@gmail.com', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

      console.log('Response status:', response.status)
      const data = await response.json()
      console.log('Response data:', data)

      if (response.ok && data.success !== "false") {
        setSubmitStatus('success')
        e.target.reset()
        setSelectedService('')
      } else {
        console.error('Form submission failed:', data)
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

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
            {t('contact.title')} <span className="gradient-text">{t('contact.titleHighlight')}</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t('contact.subtitle')}
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
                <h3 className="font-heading text-lg text-brand-gold mb-1">{t('contact.phone')}</h3>
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
                <h3 className="font-heading text-lg text-brand-gold mb-1">{t('contact.email')}</h3>
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
                <h3 className="font-heading text-lg text-brand-gold mb-1">{t('contact.office')}</h3>
                <p className="text-gray-300">
                  <span className="font-semibold">{t('contact.regus')}</span><br />
                  <span dangerouslySetInnerHTML={{ __html: t('contact.address') }} />
                </p>
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
              <span className="font-semibold">{t('contact.whatsapp')}</span>
            </motion.a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-brand-gold/20"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {submitStatus === 'success' && (
              <motion.div
                className="bg-green-500/20 border border-green-500/50 text-green-300 p-4 rounded-lg mb-6"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <p className="font-semibold">{t('contact.form.success')}</p>
                <p className="text-sm mt-1">{t('contact.form.successDesc')}</p>
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                className="bg-red-500/20 border border-red-500/50 text-red-300 p-4 rounded-lg mb-6"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <p className="font-semibold">{t('contact.form.error')}</p>
                <p className="text-sm mt-1">{t('contact.form.errorDesc')}</p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* FormSubmit Configuration - Hidden Fields */}
              <input type="hidden" name="_subject" value="New Contact Form Submission - LS Gumede Attorneys" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <motion.div whileFocus={{ scale: 1.02 }}>
                <label htmlFor="name" className="block text-sm font-medium text-brand-gold mb-2">{t('contact.form.name')}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-brand-gold/30 rounded-lg focus:outline-none focus:border-brand-gold text-white placeholder-gray-400"
                  placeholder={t('contact.form.namePlaceholder')}
                />
              </motion.div>

              <motion.div whileFocus={{ scale: 1.02 }}>
                <label htmlFor="email" className="block text-sm font-medium text-brand-gold mb-2">{t('contact.form.email')}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-brand-gold/30 rounded-lg focus:outline-none focus:border-brand-gold text-white placeholder-gray-400"
                  placeholder={t('contact.form.emailPlaceholder')}
                />
              </motion.div>

              <motion.div whileFocus={{ scale: 1.02 }}>
                <label htmlFor="phone" className="block text-sm font-medium text-brand-gold mb-2">{t('contact.form.phone')}</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 bg-white/10 border border-brand-gold/30 rounded-lg focus:outline-none focus:border-brand-gold text-white placeholder-gray-400"
                  placeholder={t('contact.form.phonePlaceholder')}
                />
              </motion.div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-brand-gold mb-2">{t('contact.form.service')}</label>
                <CustomSelect
                  options={serviceOptions}
                  value={selectedService}
                  onChange={setSelectedService}
                  placeholder={t('contact.form.servicePlaceholder')}
                />
              </div>

              <motion.div whileFocus={{ scale: 1.02 }}>
                <label htmlFor="message" className="block text-sm font-medium text-brand-gold mb-2">{t('contact.form.message')}</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-brand-gold/30 rounded-lg focus:outline-none focus:border-brand-gold text-white placeholder-gray-400"
                  placeholder={t('contact.form.messagePlaceholder')}
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-gold hover:bg-brand-gold/90 text-brand-brown px-6 py-4 rounded-lg font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                whileHover={!isSubmitting ? { scale: 1.05, y: -2 } : {}}
                whileTap={!isSubmitting ? { scale: 0.95 } : {}}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {t('contact.form.sending')}
                  </>
                ) : (
                  t('contact.form.submit')
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Google Maps Section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="text-center mb-8">
            <h3 className="font-heading text-3xl md:text-4xl text-brand-gold mb-2">
              {t('contact.map.title')}
            </h3>
            <p className="text-gray-400 text-lg">
              <span className="font-semibold text-brand-gold">{t('contact.regus')}</span>
            </p>
            <p className="text-gray-400 mt-2">
              <span dangerouslySetInnerHTML={{ __html: t('contact.address') }} />
            </p>
          </div>

          <motion.div
            className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden border-2 border-brand-gold/20 shadow-2xl"
            whileHover={{ borderColor: 'rgba(201, 169, 97, 0.4)' }}
            transition={{ duration: 0.3 }}
          >
            {/* Google Maps Embed - Regus Durban Club Place */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3460.1447308512065!2d31.021653874464633!3d-29.86009962275048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef7a9cd2d14dfcb%3A0x5d1f3aaee9fd7985!2sRegus!5e0!3m2!1sen!2sza!4v1762434041142!5m2!1sen!2sza"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="LS Gumede Attorneys - Regus Office Location"
              className="grayscale-[30%] hover:grayscale-0 transition-all duration-500"
            ></iframe>

            {/* Overlay with directions button */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
              <motion.a
                href="https://www.google.com/maps/dir/?api=1&destination=Regus+Durban+Club+Place,+303+Anton+Lembede+Street,+Durban,+4001"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-gold hover:bg-brand-gold/90 text-brand-brown px-6 py-3 rounded-lg font-semibold shadow-lg flex items-center gap-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                {t('contact.map.directions')}
              </motion.a>
            </div>
          </motion.div>

          {/* Office Hours */}
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="inline-block bg-white/5 backdrop-blur-sm px-8 py-4 rounded-xl border border-brand-gold/20">
              <h4 className="font-heading text-brand-gold mb-2">{t('contact.hours.title')}</h4>
              <div className="text-gray-300 space-y-1">
                <p>{t('contact.hours.weekdays')}</p>
                <p>{t('contact.hours.saturday')}</p>
                <p>{t('contact.hours.sunday')}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
