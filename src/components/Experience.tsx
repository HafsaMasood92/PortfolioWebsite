import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaArrowLeft, FaCalendarAlt, FaMapMarkerAlt, FaBriefcase, FaGlobe, FaRocket, FaArrowRight, FaExternalLinkAlt, FaInstagram } from 'react-icons/fa'

type CategoryType = 'internships' | 'fellowship' | 'startups' | null

interface MainCategory {
  id: CategoryType
  title: string
  subtitle: string
  description: string
  color: 'purple' | 'blue' | 'pink'
  icon: React.ReactNode
}

interface SubExperience {
  id: string
  company: string
  period: string
  location?: string
  description: string
  color: 'purple' | 'blue' | 'pink' | 'lavender' | 'mint' | 'peach'
  links?: { text: string; url: string; icon: React.ReactNode }[] // Added links property
}

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>(null)

  const mainCategories: MainCategory[] = [
    {
      id: 'internships',
      title: 'Internships',
      subtitle: 'Professional Experience',
      description: 'Hands-on technical roles working with satellite imagery, RFID systems, and business modeling.',
      color: 'purple',
      icon: <FaBriefcase />
    },
    {
      id: 'fellowship',
      title: 'Fellowship',
      subtitle: 'Global Impact',
      description: 'Collaborating with global fellows under UN Academic Impact to promote sustainable development goals.',
      color: 'blue',
      icon: <FaGlobe />
    },
    {
      id: 'startups',
      title: 'Startups',
      subtitle: 'Growth & Innovation',
      description: 'Leading digital strategies and technical growth for emerging tech e-commerce and student organizations.',
      color: 'pink',
      icon: <FaRocket />
    }
  ]

  const internships: SubExperience[] = [
    {
      id: 'suparco',
      company: 'SUPARCO',
      period: '2025',
      location: 'Pakistan',
      description: 'Worked on satellite imagery, QGIS, Python, and interactive web maps using OGC services.',
      color: 'purple'
    },
    {
      id: 'archroma',
      company: 'Archroma Pakistan',
      period: '2024',
      location: 'Pakistan',
      description: 'Developed an RFID-based employee attendance system and performed system testing.',
      color: 'blue'
    },
    {
      id: 'lumhs',
      company: 'LUMHS',
      period: '2024',
      location: 'Pakistan',
      description: 'Worked on startup planning, business models, and investor presentations.',
      color: 'lavender'
    }
  ]

  const fellowship: SubExperience[] = [
    {
      id: 'millennium',
      company: 'Millennium Fellowship – United Nations Academic Impact',
      period: '2025–Present',
      location: 'Global',
      description: 'Worked under SDG 4, delivered awareness sessions, organized educational activities, and collaborated with global fellows.',
      color: 'mint'
    }
  ]

  const startups: SubExperience[] = [
    {
      id: 'gadgetry',
      company: 'Gadgetry – Digital Marketing Lead',
      period: '2025–Present',
      location: 'Remote',
      description: 'Managed SEO, content strategy, social media planning, and digital growth for a tech e-commerce startup.',
      color: 'blue',
      // Added Links Here
      links: [
        { text: 'Website', url: 'https://thegadgetryofficial.com/', icon: <FaGlobe /> },
        { text: 'Instagram', url: 'https://www.instagram.com/_gadgetryofficial/', icon: <FaInstagram /> }
      ]
    },
    {
      id: 'ieee',
      company: 'IEEE Computer Society – Web Director',
      period: '2025',
      location: 'Pakistan',
      description: 'Provided web support, helped with event visibility, and improved online communication.',
      color: 'peach'
    }
  ]

  const getSubExperiences = (category: CategoryType): SubExperience[] => {
    switch (category) {
      case 'internships':
        return internships
      case 'fellowship':
        return fellowship
      case 'startups':
        return startups
      default:
        return []
    }
  }

  // --- STYLING LOGIC (Professional) ---
  
  const getFrontCardStyle = (color: string) => {
    const map: Record<string, string> = {
      purple: 'pastel-purple',
      blue: 'pastel-blue',
      pink: 'pastel-pink'
    };
    const targetColor = map[color] || 'pastel-purple';

    return {
      // Bigger Enhanced Cards
      container: `bg-white dark:bg-dark-surface 
                  border border-gray-100 dark:border-white/5
                  hover:border-${targetColor} dark:hover:border-${targetColor}
                  hover:bg-${targetColor}/5 dark:hover:bg-${targetColor}/10
                  hover:shadow-2xl hover:shadow-${targetColor}/20
                  relative overflow-hidden`,
      iconBg: `bg-${targetColor}/10 text-${targetColor}-dark dark:text-${targetColor}`,
      title: `text-gray-900 dark:text-white group-hover:text-${targetColor}`,
      subtitle: `text-gray-500 dark:text-dark-muted`
    }
  }

  const getDetailCardStyle = (color: string) => {
    const map: Record<string, string> = {
      purple: 'pastel-purple',
      blue: 'pastel-blue',
      pink: 'pastel-pink',
      lavender: 'pastel-lavender',
      mint: 'pastel-mint',
      peach: 'pastel-peach'
    };
    const targetColor = map[color] || 'pastel-purple';

    return {
        container: `bg-white dark:bg-dark-surface shadow-sm hover:shadow-lg hover:shadow-${targetColor}/10
                    border border-gray-100 dark:border-white/5
                    border-l-4 border-l-${targetColor}
                    hover:border-${targetColor} dark:hover:border-${targetColor}
                    hover:bg-${targetColor}/5 dark:hover:bg-${targetColor}/10
                    transition-all duration-300`,
        title: `text-${targetColor} dark:text-${targetColor}`,
        icon: `text-${targetColor}`,
        text: `text-gray-900 dark:text-white`
    }
  }

  const handleCategoryClick = (categoryId: CategoryType) => {
    setSelectedCategory(categoryId)
  }

  const handleBack = () => {
    setSelectedCategory(null)
  }

  return (
    <section
      id="experience"
      // Hero Section Gradient Background
      className="py-20 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-br from-pastel-purple-light via-pastel-lavender-light to-pastel-blue-light dark:from-dark-bg dark:via-dark-surface dark:to-dark-surface-light transition-all duration-300"
      ref={ref}
    >
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-5xl font-display font-bold text-center mb-6 text-gradient dark:text-gradient-dark">
            Experience
          </h2>
          {/* Purple Divider Line */}
          <div className="section-divider bg-pastel-purple mx-auto w-24 h-1.5 rounded-full mb-12"></div>

          {/* Back Button */}
          <AnimatePresence>
            {selectedCategory && (
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onClick={handleBack}
                className="mb-6 flex items-center gap-2 px-6 py-2.5 rounded-full bg-white dark:bg-dark-surface border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-200 font-medium hover:border-pastel-purple hover:text-pastel-purple transition-all shadow-sm hover:shadow-md"
                whileHover={{ scale: 1.05, x: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaArrowLeft className="text-sm" />
                <span>Back to Categories</span>
              </motion.button>
            )}
          </AnimatePresence>

          {/* Main Categories View (Enhanced & Bigger) */}
          <AnimatePresence mode="wait">
            {!selectedCategory && (
              <motion.div
                key="main-categories"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                {mainCategories.map((category, index) => {
                  const style = getFrontCardStyle(category.color)
                  
                  return (
                    <motion.div
                      key={category.id}
                      initial={{ opacity: 0, y: 50 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, y: -5 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleCategoryClick(category.id)}
                      className={`
                        group cursor-pointer rounded-3xl p-10 
                        ${style.container}
                        transition-all duration-300 ease-out
                      `}
                    >
                      <div className="flex flex-col h-full justify-between gap-6 relative z-10">
                        {/* Top: Icon & Arrow */}
                        <div className="flex items-start justify-between">
                          <div className={`p-4 rounded-2xl ${style.iconBg} text-3xl mb-2 transition-transform duration-300 group-hover:scale-110`}>
                            {category.icon}
                          </div>
                          <div className="bg-gray-100 dark:bg-white/5 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <FaArrowRight className="text-gray-500 dark:text-gray-300" />
                          </div>
                        </div>

                        {/* Bottom: Text Content */}
                        <div>
                          <h3 className={`text-2xl font-display font-bold mb-3 transition-colors duration-300 ${style.title}`}>
                            {category.title}
                          </h3>
                          <p className={`text-sm font-bold uppercase tracking-wider mb-2 ${style.subtitle}`}>
                            {category.subtitle}
                          </p>
                          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                            {category.description}
                          </p>
                        </div>
                      </div>

                      {/* Decorative Blob */}
                      <div className={`absolute -bottom-10 -right-10 w-32 h-32 rounded-full opacity-5 blur-2xl transition-all duration-500 group-hover:scale-150 bg-${category.color}-500`}></div>
                    </motion.div>
                  )
                })}
              </motion.div>
            )}

            {/* Sub-Experiences View */}
            {selectedCategory && (
              <motion.div
                key={`sub-${selectedCategory}`}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -50, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {getSubExperiences(selectedCategory).map((exp, index) => {
                  const style = getDetailCardStyle(exp.color)
                  
                  return (
                    <motion.div
                      key={exp.id}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, y: -5 }}
                      className={`
                        rounded-2xl p-6 
                        ${style.container}
                      `}
                    >
                      <div className="mb-4">
                        <h3 className={`text-xl font-display font-bold mb-2 ${style.title}`}>
                          {exp.company}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-dark-muted">
                          <div className="flex items-center gap-1.5">
                            <FaCalendarAlt className={style.icon} />
                            <span>{exp.period}</span>
                          </div>
                          {exp.location && (
                            <div className="flex items-center gap-1.5">
                              <FaMapMarkerAlt className={style.icon} />
                              <span>{exp.location}</span>
                            </div>
                          )}
                        </div>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                        {exp.description}
                      </p>

                      {/* Display Links if available */}
                      {exp.links && (
                        <div className="mt-4 pt-3 border-t border-black/5 dark:border-white/10 flex flex-wrap gap-4">
                          {exp.links.map((link, idx) => (
                            <a 
                              key={idx}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`inline-flex items-center gap-2 text-sm font-semibold hover:underline ${style.title}`}
                            >
                              {link.text} <span className="text-xs">{link.icon}</span>
                            </a>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  )
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience