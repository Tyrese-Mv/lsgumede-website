import Contact from '../components/Contact'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'

const ContactPage = () => {
  return (
    <PageTransition>
      <div className="pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-heading text-5xl md:text-6xl mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Schedule a free consultation to discuss your legal needs with our experienced team.
          </p>
        </motion.div>

        <Contact />
      </div>
    </div>
    </PageTransition>
  )
}

export default ContactPage
