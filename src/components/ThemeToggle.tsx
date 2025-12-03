import { motion } from 'framer-motion'
import { FaMoon, FaSun } from 'react-icons/fa'

interface ThemeToggleProps {
  darkMode: boolean
  toggleTheme: () => void
}

const ThemeToggle = ({ darkMode, toggleTheme }: ThemeToggleProps) => {
  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full glass-effect shadow-lg flex items-center justify-center text-gray-700 dark:text-dark-text hover:scale-110 transition-transform"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle dark mode"
    >
      <motion.div
        initial={false}
        animate={{ rotate: darkMode ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {darkMode ? (
          <FaSun className="text-xl text-pastel-peach-dark" />
        ) : (
          <FaMoon className="text-xl text-pastel-lavender-dark" />
        )}
      </motion.div>
    </motion.button>
  )
}

export default ThemeToggle



