import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'

const CustomSelect = ({ options, value, onChange, placeholder = "Select an option" }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(value || '')
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSelect = (option) => {
    setSelectedOption(option.value)
    onChange(option.value)
    setIsOpen(false)
  }

  const selectedLabel = options.find(opt => opt.value === selectedOption)?.label || placeholder

  return (
    <div ref={dropdownRef} className="relative">
      <motion.button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 bg-white/10 border border-brand-gold/30 rounded-lg focus:outline-none focus:border-brand-gold text-white text-left flex justify-between items-center"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <span className={selectedOption ? 'text-white' : 'text-gray-400'}>{selectedLabel}</span>
        <motion.svg
          className="w-5 h-5 text-brand-gold"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </motion.svg>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 w-full mt-2 bg-brand-brown/95 backdrop-blur-lg border border-brand-gold/30 rounded-lg shadow-2xl max-h-60 overflow-y-auto custom-scrollbar"
          >
            {options.map((option, index) => (
              <motion.button
                key={option.value}
                type="button"
                onClick={() => handleSelect(option)}
                className={`w-full px-4 py-3 text-left transition-colors ${
                  selectedOption === option.value
                    ? 'bg-brand-gold/20 text-brand-gold'
                    : 'text-white hover:bg-white/10'
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ x: 5 }}
              >
                {option.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hidden input for form submission */}
      <input type="hidden" name="service" value={selectedOption} />
    </div>
  )
}

export default CustomSelect
