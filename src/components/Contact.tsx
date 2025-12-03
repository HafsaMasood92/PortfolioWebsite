import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa'

interface ContactItem {
  icon: React.ReactNode
  label: string
  value: string
  href: string
  color: string
}

const getContactColor = (color: string) => {
  const colorMap: Record<string, { icon: string; border: string }> = {
    purple: {
      icon: 'text-pastel-purple-dark dark:text-pastel-purple',
      border: 'hover:border-pastel-purple-dark dark:hover:border-pastel-purple'
    },
    blue: {
      icon: 'text-pastel-blue-dark dark:text-pastel-blue',
      border: 'hover:border-pastel-blue-dark dark:hover:border-pastel-blue'
    },
    lavender: {
      icon: 'text-pastel-lavender-dark dark:text-pastel-lavender',
      border: 'hover:border-pastel-lavender-dark dark:hover:border-pastel-lavender'
    },
    mint: {
      icon: 'text-pastel-mint-dark dark:text-pastel-mint',
      border: 'hover:border-pastel-mint-dark dark:hover:border-pastel-mint'
    }
  }
  return colorMap[color] || colorMap.purple
}

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const contactItems: ContactItem[] = [
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'hafsamasood226@gmail.com',
      href: 'mailto:hafsamasood226@gmail.com',
      color: 'lavender'
    },
    {
      icon: <FaPhone />,
      label: 'Phone',
      value: '+92 3053735768',
      href: 'tel:+923053735768',
      color: 'mint'
    },
    {
      icon: <FaGithub />,
      label: 'GitHub',
      value: 'github.com/HafsaMasood92',
      href: 'https://github.com/HafsaMasood92',
      color: 'black'
    },
    {
      icon: <FaLinkedin />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/-hafsamasood',
      href: 'https://www.linkedin.com/in/-hafsamasood/',
      color: 'blue'
    }
  ]

  return (
    <section
      id="contact"
      // UPDATED: Added Hero Section Gradient Background
      className="py-20 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-br from-pastel-purple-light via-pastel-lavender-light to-pastel-blue-light dark:from-dark-bg dark:via-dark-surface dark:to-dark-surface-light transition-all duration-300"
      ref={ref}
    >
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-center mb-6 text-gradient dark:text-gradient-dark">
            Get In Touch
          </h2>
          <div className="section-divider bg-gray-300 dark:bg-white/10 mx-auto w-24 h-1 rounded-full mb-12"></div>

          <motion.div
            className="bg-white/60 dark:bg-dark-surface/60 backdrop-blur-md rounded-3xl p-8 sm:p-10 md:p-12 shadow-xl border border-white/50 dark:border-white/5"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg sm:text-xl text-center text-gray-700 dark:text-dark-text mb-12 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {contactItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  // UPDATED: Always open in new tab (fixes mailto issues in previews)
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-white dark:bg-dark-surface rounded-2xl p-6 text-center group border-2 border-transparent shadow-sm hover:shadow-md transition-all ${getContactColor(item.color).border}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className={`text-4xl mb-4 ${getContactColor(item.color).icon} inline-block`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="text-lg font-display font-semibold text-gray-800 dark:text-dark-text mb-2">
                    {item.label}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-dark-muted break-all">
                    {item.value}
                  </p>
                </motion.a>
              ))}
            </div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <motion.a
                // UPDATED: Fixed placeholder email to correct one
                href="mailto:hafsamasood226@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-pastel-purple-dark to-pastel-lavender-dark dark:from-pastel-purple dark:to-pastel-lavender text-white font-semibold shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPaperPlane />
                Send Message
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="text-center mt-16 pt-8 border-t border-gray-200 dark:border-dark-surface-light"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <p className="text-gray-600 dark:text-dark-muted">
            © {new Date().getFullYear()} Hafsa Masood. Built with React, TypeScript & Tailwind CSS.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact