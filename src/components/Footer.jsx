import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

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
          <p className="mb-2">{t('footer.copyright', { year: currentYear })}</p>
          <p className="text-sm">{t('footer.tagline')}</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
