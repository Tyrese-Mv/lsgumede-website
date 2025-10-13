import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="bg-black border-t border-brand-gold/20 py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-2">&copy; 2025 LS Gumede Attorneys. All rights reserved.</p>
          <p className="text-sm">Professional Legal Services | Durban, South Africa</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
