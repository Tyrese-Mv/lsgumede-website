import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import MagneticButton from './MagneticButton'
import LanguageSwitcher from './LanguageSwitcher'

const Header = () => {
  const { t } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location])

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.services'), path: '/services' },
    { name: t('nav.contact'), path: '/contact' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className={`fixed top-0 w-full z-50 border-b border-brand-gold/20 transition-all duration-300 ${
        scrolled ? 'bg-brand-brown/98 backdrop-blur-md shadow-lg' : 'bg-brand-brown/95 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/">
            <motion.div
              className="flex items-center space-x-4 cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <motion.img
                src="/LS_Gumede_only_logo.png"
                alt="LS Gumede Attorneys logo - Professional legal services in Durban"
                className="h-16 md:h-24 w-auto object-contain"
                style={{ filter: 'drop-shadow(0 0 10px rgba(201, 169, 97, 0.3))' }}
                whileHover={{ rotate: 5 }}
                transition={{ duration: 0.3 }}
              />
              <div>
                <div className="font-heading text-lg md:text-2xl text-brand-gold">LS GUMEDE</div>
                <p className="text-xs md:text-sm text-brand-gold/70">ATTORNEYS</p>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                <motion.span
                  className={`relative font-semibold transition-colors duration-300 ${
                    isActive(link.path) ? 'text-brand-gold' : 'text-white hover:text-brand-gold'
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-gold"
                      layoutId="activeNav"
                    />
                  )}
                </motion.span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <a href="tel:0790134813" className="hidden md:inline-block">
              <MagneticButton className="bg-brand-gold hover:bg-brand-gold/90 text-brand-brown px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                CALL NOW
              </MagneticButton>
            </a>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-brand-gold"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.nav
          initial={false}
          animate={{ height: mobileMenuOpen ? 'auto' : 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="pt-4 pb-2 space-y-4">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                <motion.div
                  className={`block py-2 font-semibold transition-colors duration-300 ${
                    isActive(link.path) ? 'text-brand-gold' : 'text-white'
                  }`}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.name}
                </motion.div>
              </Link>
            ))}
            <div className="py-2">
              <LanguageSwitcher />
            </div>
            <a href="tel:0790134813" className="block">
              <motion.div
                className="bg-brand-gold text-brand-brown px-6 py-3 rounded-lg font-semibold text-center"
                whileTap={{ scale: 0.95 }}
              >
                CALL NOW
              </motion.div>
            </a>
          </div>
        </motion.nav>
      </div>
    </motion.header>
  )
}

export default Header
