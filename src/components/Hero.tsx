import { motion } from 'framer-motion'
import { FaArrowDown } from 'react-icons/fa'

const Hero = () => {
  const jobTitle = "Computer Systems Engineer".split(" ");
  const description = "Building robust full-stack applications and optimizing performance through automation.".split(" ");

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pastel-purple-light via-pastel-lavender-light to-pastel-blue-light dark:from-dark-bg dark:via-dark-surface dark:to-dark-surface-light"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-pastel-purple/30 dark:bg-pastel-purple/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-pastel-blue/30 dark:bg-pastel-blue/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-56 h-56 sm:w-80 sm:h-80 bg-pastel-lavender/30 dark:bg-pastel-lavender/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* 1. Name: Whitespace nowrap ensures it stays on one line */}
          <motion.h1
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold mb-4 text-gradient dark:text-gradient-dark whitespace-nowrap"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hafsa Masood
          </motion.h1>
          
          {/* 2. Job Title: Flex container with no wrap to force single line */}
          <div className="flex justify-center flex-nowrap whitespace-nowrap text-lg sm:text-3xl md:text-4xl font-display font-semibold text-gray-700 dark:text-dark-text mb-8 overflow-hidden">
            {jobTitle.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.5 + (index * 0.2), 
                  ease: "easeOut"
                }}
                className="inline-block mr-1.5 sm:mr-2"
              >
                {word}
              </motion.span>
            ))}
          </div>
          
          {/* Description */}
          <div className="text-base sm:text-xl md:text-2xl text-gray-600 dark:text-dark-muted max-w-3xl mx-auto mb-12 leading-relaxed px-2">
            {description.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: 1.2 + (index * 0.05),
                  ease: "easeOut"
                }}
                className="inline-block mr-1"
              >
                {word}
              </motion.span>
            ))}
          </div>

          <motion.a
            href="#about"
            className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 rounded-full glass-effect text-gray-700 dark:text-dark-text font-semibold text-sm sm:text-base hover:scale-105 transition-all shadow-lg hover:shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore My Work
            
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <FaArrowDown className="text-gray-600 dark:text-dark-muted text-xl" />
      </motion.div>
    </section>
  )
}

export default Hero