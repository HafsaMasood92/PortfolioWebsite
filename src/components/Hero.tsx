import { motion } from 'framer-motion'
import { FaArrowDown } from 'react-icons/fa'
import { useState, useEffect } from 'react'

const Hero = () => {
  const jobTitle = "Computer Systems Engineer";
  const description = "Crafting scalable web applications, engineering reliable systems, and automating workflows with precision and creativity.".split(" ");
  const [displayedText, setDisplayedText] = useState("");
  const typingSpeed = 50; // milliseconds per character

  useEffect(() => {
    if (displayedText.length < jobTitle.length) {
      const timer = setTimeout(() => {
        setDisplayedText(jobTitle.slice(0, displayedText.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timer);
    }
  }, [displayedText]);

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
          className="absolute top-20 left-10 w-72 h-72 bg-pastel-purple/30 dark:bg-pastel-purple/10 rounded-full blur-3xl"
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
          className="absolute bottom-20 right-10 w-96 h-96 bg-pastel-blue/30 dark:bg-pastel-blue/10 rounded-full blur-3xl"
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
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-pastel-lavender/30 dark:bg-pastel-lavender/10 rounded-full blur-3xl"
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
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold mb-4 text-gradient dark:text-gradient-dark"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hafsa Masood
          </motion.h1>
          
          {/* Word-by-Word Animation for Title */}
          <div className="text-2xl sm:text-3xl md:text-4xl font-display font-semibold text-gray-700 dark:text-dark-text mb-8 h-12 flex items-center justify-center">
            <span>{displayedText}</span>
            {displayedText.length < jobTitle.length && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="ml-1"
              >
                |
              </motion.span>
            )}
          </div>
          
          {/* UPDATED: Word-by-Word Animation for Description */}
          <div className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-dark-muted max-w-3xl mx-auto mb-12 leading-relaxed">
            {description.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: 1.5 + (index * 0.05), // Adjusted to start after typewriter effect
                  ease: "easeOut"
                }}
                className="inline-block mr-1.5"
              >
                {word}
              </motion.span>
            ))}
          </div>

          <motion.a
            href="#about"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass-effect text-gray-700 dark:text-dark-text font-semibold hover:scale-105 transition-all shadow-lg hover:shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.5 }} // Delayed until text finishes
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