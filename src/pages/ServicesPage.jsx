import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import PageTransition from '../components/PageTransition'
import SEO from '../components/SEO'

const getServiceIcon = (type) => {
  const icons = {
    civil: (
      <svg className="w-8 h-8 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
      </svg>
    ),
    employment: (
      <svg className="w-8 h-8 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
      </svg>
    ),
    contract: (
      <svg className="w-8 h-8 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
      </svg>
    ),
    family: (
      <svg className="w-8 h-8 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
      </svg>
    ),
    estate: (
      <svg className="w-8 h-8 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
      </svg>
    ),
    raf: (
      <svg className="w-8 h-8 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
      </svg>
    ),
    arrest: (
      <svg className="w-8 h-8 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
      </svg>
    ),
    debt: (
      <svg className="w-8 h-8 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path>
      </svg>
    ),
    criminal: (
      <svg className="w-8 h-8 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path>
      </svg>
    ),
  }
  return icons[type]
}

const ServiceCard = ({ service, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      className="bg-brand-brown/30 backdrop-blur-sm p-8 rounded-xl border border-brand-gold/20 hover:border-brand-gold/50 transition-all duration-300"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <motion.div
        className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mb-6"
        whileHover={{ rotate: 360, scale: 1.1 }}
        transition={{ duration: 0.6 }}
      >
        {service.icon}
      </motion.div>
      <h3 className="font-heading text-2xl text-brand-gold mb-3">{service.title}</h3>
      <p className="text-gray-400 mb-4">{service.description}</p>
      <p className="text-gray-300 text-sm leading-relaxed">{service.details}</p>
    </motion.div>
  )
}

const ServicesPage = () => {
  const { t } = useTranslation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const services = [
    {
      title: t('services.civil.title'),
      description: t('services.civil.description'),
      details: t('services.civil.description'),
      icon: getServiceIcon('civil'),
    },
    {
      title: t('services.employment.title'),
      description: t('services.employment.description'),
      details: t('services.employment.description'),
      icon: getServiceIcon('employment'),
    },
    {
      title: t('services.contract.title'),
      description: t('services.contract.description'),
      details: t('services.contract.description'),
      icon: getServiceIcon('contract'),
    },
    {
      title: t('services.family.title'),
      description: t('services.family.description'),
      details: t('services.family.description'),
      icon: getServiceIcon('family'),
    },
    {
      title: t('services.estate.title'),
      description: t('services.estate.description'),
      details: t('services.estate.description'),
      icon: getServiceIcon('estate'),
    },
    {
      title: t('services.raf.title'),
      description: t('services.raf.description'),
      details: t('services.raf.description'),
      icon: getServiceIcon('raf'),
    },
    {
      title: t('services.arrest.title'),
      description: t('services.arrest.description'),
      details: t('services.arrest.description'),
      icon: getServiceIcon('arrest'),
    },
    {
      title: t('services.debt.title'),
      description: t('services.debt.description'),
      details: t('services.debt.description'),
      icon: getServiceIcon('debt'),
    },
    {
      title: t('services.criminal.title'),
      description: t('services.criminal.description'),
      details: t('services.criminal.description'),
      icon: getServiceIcon('criminal'),
    },
  ]

  return (
    <PageTransition>
      <SEO
        title="Legal Services in Durban | RAF, Civil, Employment & Family Law - LS Gumede"
        description="Comprehensive legal services in Durban: Road Accident Fund claims, Civil Litigation, Employment Law, Family Law, Estate Administration, Criminal Defense, and more. Expert attorneys ready to help."
        keywords="legal services Durban, RAF claims lawyer, civil litigation attorney, employment law Durban, family law services, estate administration, criminal defense attorney, contract law"
        ogImage="/LS_Gumede_only_logo.png"
      />
      <div className="pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-heading text-5xl md:text-6xl mb-6">
            {t('servicesPage.hero.title')} <span className="gradient-text">{t('servicesPage.hero.titleHighlight')}</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('servicesPage.hero.subtitle')}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div ref={ref} className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center bg-brand-gold/10 backdrop-blur-sm p-12 rounded-xl border border-brand-gold/30"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h2 className="font-heading text-3xl text-brand-gold mb-4">{t('servicesPage.cta.title')}</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            {t('servicesPage.cta.description')}
          </p>
          <motion.a
            href="/contact"
            className="inline-block bg-brand-gold hover:bg-brand-gold/90 text-brand-brown px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('servicesPage.cta.button')}
          </motion.a>
        </motion.div>
      </div>
    </div>
    </PageTransition>
  )
}

export default ServicesPage
