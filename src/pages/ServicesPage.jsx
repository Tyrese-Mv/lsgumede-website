import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import PageTransition from '../components/PageTransition'

const services = [
  {
    title: 'Civil Litigation',
    description: 'Expert representation in civil disputes and litigation matters',
    details: 'We provide comprehensive representation in all types of civil litigation, including breach of contract disputes, property disputes, and general commercial litigation. Our experienced team will guide you through every step of the legal process.',
    icon: (
      <svg className="w-8 h-8 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
      </svg>
    ),
  },
  {
    title: 'Employment & Labour Law',
    description: 'Comprehensive employment and labour law solutions',
    details: 'From unfair dismissal cases to employment contract reviews, we offer expert advice and representation for both employers and employees in all labour-related matters.',
    icon: (
      <svg className="w-8 h-8 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
      </svg>
    ),
  },
  {
    title: 'Contract Drafting & Reviews',
    description: 'Professional contract drafting and review services',
    details: 'Our team specializes in drafting and reviewing contracts of all types, ensuring your interests are protected and your agreements are legally sound and enforceable.',
    icon: (
      <svg className="w-8 h-8 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
      </svg>
    ),
  },
  {
    title: 'Family and Divorce Law',
    description: 'Compassionate family law and divorce services',
    details: 'We handle sensitive family matters including divorce, custody disputes, maintenance claims, and domestic violence protection orders with care and professionalism.',
    icon: (
      <svg className="w-8 h-8 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
      </svg>
    ),
  },
  {
    title: 'Estate Planning and Probate',
    description: 'Estate planning and probate administration',
    details: 'Comprehensive estate planning services including wills, trusts, and estate administration. We help ensure your assets are distributed according to your wishes.',
    icon: (
      <svg className="w-8 h-8 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
      </svg>
    ),
  },
  {
    title: 'Personal Injury (RAF)',
    description: 'Road Accident Fund claims and personal injury cases',
    details: 'Specialized representation for Road Accident Fund claims and personal injury matters. We fight to ensure you receive the compensation you deserve.',
    icon: (
      <svg className="w-8 h-8 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
      </svg>
    ),
  },
  {
    title: 'Unlawful Arrest',
    description: 'Legal representation for unlawful arrest cases',
    details: 'Expert legal representation for cases involving unlawful arrest and detention. We protect your rights and seek appropriate remedies for violations.',
    icon: (
      <svg className="w-8 h-8 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
      </svg>
    ),
  },
  {
    title: 'Debt Collection',
    description: 'Effective debt recovery and collection services',
    details: 'Professional debt collection services for businesses and individuals. We use effective legal strategies to recover outstanding debts efficiently.',
    icon: (
      <svg className="w-8 h-8 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path>
      </svg>
    ),
  },
  {
    title: 'Criminal Defense',
    description: 'Experienced criminal defense representation',
    details: 'Comprehensive criminal defense services for a wide range of charges. We provide aggressive representation to protect your rights and freedom.',
    icon: (
      <svg className="w-8 h-8 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path>
      </svg>
    ),
  },
]

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
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <PageTransition>
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
            Our <span className="gradient-text">Legal Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive legal solutions across multiple practice areas, tailored to meet your unique needs.
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
          <h2 className="font-heading text-3xl text-brand-gold mb-4">Need Legal Assistance?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Don't see the service you need? Contact us today for a free consultation to discuss your legal matter.
          </p>
          <motion.a
            href="/contact"
            className="inline-block bg-brand-gold hover:bg-brand-gold/90 text-brand-brown px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule a Consultation
          </motion.a>
        </motion.div>
      </div>
    </div>
    </PageTransition>
  )
}

export default ServicesPage
