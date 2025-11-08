import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useState, useRef, useEffect } from 'react'

const LanguageSwitcher = () => {
  const { i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'zu', name: 'isiZulu', flag: '🇿🇦' }
  ]

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0]

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
    setIsOpen(false)
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-brand-gold/20 hover:border-brand-gold/40 transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="text-xl">{currentLanguage.flag}</span>
        <span className="text-sm font-medium text-gray-300 hidden sm:inline">{currentLanguage.name}</span>
        <motion.svg
          className="w-4 h-4 text-brand-gold"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </motion.svg>
      </motion.button>

      {/* Dropdown Menu */}
      {isOpen && (
        <motion.div
          className="absolute left-0 sm:right-0 sm:left-auto mt-2 w-48 bg-brand-brown/98 backdrop-blur-md rounded-lg shadow-2xl border border-brand-gold/30 overflow-hidden z-[100]"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {languages.map((language) => (
            <motion.button
              key={language.code}
              onClick={() => changeLanguage(language.code)}
              className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-brand-gold/10 transition-colors duration-200 ${
                i18n.language === language.code ? 'bg-brand-gold/20' : ''
              }`}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-2xl">{language.flag}</span>
              <div className="flex flex-col items-start">
                <span className="text-sm font-medium text-white">{language.name}</span>
                {i18n.language === language.code && (
                  <span className="text-xs text-brand-gold">Current</span>
                )}
              </div>
              {i18n.language === language.code && (
                <svg className="w-4 h-4 text-brand-gold ml-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </motion.button>
          ))}
        </motion.div>
      )}
    </div>
  )
}

export default LanguageSwitcher
