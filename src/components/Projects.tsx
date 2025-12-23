import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaArrowLeft, FaGithub, FaExternalLinkAlt, FaMicrochip, FaLaptopCode } from 'react-icons/fa'

type CategoryType = 'hardware' | 'software' | null

interface MainCategory {
  id: CategoryType
  title: string
  subtitle: string
  description: string
  color: 'purple' | 'blue'
  icon: React.ReactNode
}

interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  features: string[]
  color: 'purple' | 'blue' | 'pink' | 'lavender' | 'mint' | 'peach'
  github?: string
  demo?: string
}

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>(null)

  const mainCategories: MainCategory[] = [
    {
      id: 'hardware',
      title: 'Hardware',
      subtitle: 'IoT & Embedded Systems',
      description: 'Explore my work with microcontrollers, sensors, and smart automated systems designed for real-world utility.',
      color: 'purple',
      icon: <FaMicrochip />
    },
    {
      id: 'software',
      title: 'Software',
      subtitle: 'Web & Applications',
      description: 'Discover my full-stack applications, API integrations, and digital solutions built with modern web technologies.',
      color: 'blue',
      icon: <FaLaptopCode />
    }
  ]

  const hardwareProjects: Project[] = [
    {
      id: 'iot-incubator',
      title: 'IoT Smart Egg Incubator',
      description: 'Final Year Project designed to automate and monitor the incubation process with high precision. This system integrates multiple sensors to maintain optimal conditions for hatching, significantly reducing manual intervention and increasing success rates compared to traditional methods.',
      technologies: ['ESP32 Microcontroller', 'Blynk IoT Platform', 'DHT11 Sensor', 'Servo Motors', 'Relay Modules', 'C++'],
      features: [
        'Automated PID temperature control loop',
        'Real-time humidity monitoring & adjustment',
        'Automatic egg rotation mechanism every 4 hours',
        'Mobile app alerts via Blynk for critical status updates'
      ],
      color: 'purple'
    }
  ]

  const softwareProjects: Project[] = [
    {
      id: 'academia',
      title: 'Academia - Learning Platform',
      description: 'A dynamic frontend educational website built with React and Tailwind CSS. It offers a wide array of professional courses including Web Development, Data Science, and Digital Marketing, allowing users to browse curricula and enroll in their desired fields.',
      technologies: ['React', 'Tailwind CSS', 'JavaScript', 'Vercel'],
      features: [
        'Diverse course catalog (Web, Data Science, Marketing)',
        'Seamless user enrollment interface',
        'Modern, fully responsive UI design',
        'Interactive course details and previews'
      ],
      color: 'mint',
      github: '#',
      demo: 'https://academia-omega-one.vercel.app/'
    }
  ]

  const getProjects = (category: CategoryType): Project[] => {
    switch (category) {
      case 'hardware':
        return hardwareProjects
      case 'software':
        return softwareProjects
      default:
        return []
    }
  }

  // --- STYLING LOGIC ---

  const getFrontCardStyle = (color: string) => {
    const map: Record<string, string> = {
      purple: 'pastel-purple',
      blue: 'pastel-blue',
      pink: 'pastel-pink'
    };
    const targetColor = map[color] || 'pastel-purple';

    return {
      container: `bg-white dark:bg-dark-surface 
                  border border-gray-100 dark:border-white/5
                  hover:border-${targetColor} dark:hover:border-${targetColor}
                  hover:bg-${targetColor}/5 dark:hover:bg-${targetColor}/10
                  hover:shadow-2xl hover:shadow-${targetColor}/20`,
      iconBg: `bg-${targetColor}/10 text-${targetColor}-dark dark:text-${targetColor}`,
      title: `text-gray-900 dark:text-white group-hover:text-${targetColor}`,
      subtitle: `text-gray-500 dark:text-dark-muted`
    }
  }

  const getDetailCardStyle = (color: string) => {
    const targetColor = `pastel-${color}`;

    return {
      container: `bg-white dark:bg-dark-surface shadow-sm hover:shadow-xl hover:shadow-${targetColor}/10
                  border border-gray-100 dark:border-white/5
                  border-t-4 border-t-${targetColor}
                  hover:border-${targetColor} dark:hover:border-${targetColor}
                  hover:bg-${targetColor}/5 dark:hover:bg-${targetColor}/10
                  transition-all duration-300`,
      title: `text-${targetColor} dark:text-${targetColor}`,
      chip: `bg-${targetColor}/10 dark:bg-${targetColor}/20 text-${targetColor}-dark dark:text-${targetColor}-light border border-${targetColor}/20`,
      check: `text-${targetColor} dark:text-${targetColor}`,
      linkHover: `hover:text-${targetColor} dark:hover:text-${targetColor}`
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
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-br from-pastel-purple-light via-pastel-lavender-light to-pastel-blue-light dark:from-dark-bg dark:via-dark-surface dark:to-dark-surface-light transition-all duration-300"
      ref={ref}
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-5xl font-display font-bold text-center mb-12 text-gradient dark:text-gradient-dark">
            Projects
          </h2>
          
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

          <AnimatePresence mode="wait">
            {!selectedCategory && (
              <motion.div
                key="main-categories"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
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
                        relative overflow-hidden
                      `}
                    >
                      <div className="flex flex-col h-full justify-between gap-6 relative z-10">
                        <div className="flex items-start justify-between">
                          <div className={`p-4 rounded-2xl ${style.iconBg} text-4xl mb-4 transition-transform duration-300 group-hover:scale-110`}>
                            {category.icon}
                          </div>
                          {/* Replaced arrow right with simple div or just remove if not needed. Removing to be safe from import errors */}
                        </div>

                        <div>
                          <h3 className={`text-3xl font-display font-bold mb-3 transition-colors duration-300 ${style.title}`}>
                            {category.title}
                          </h3>
                          <p className={`text-lg font-medium ${style.subtitle} mb-2`}>
                            {category.subtitle}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-dark-muted leading-relaxed">
                            {category.description}
                          </p>
                        </div>
                      </div>
                      
                      <div className={`absolute -bottom-10 -right-10 w-40 h-40 rounded-full opacity-10 blur-2xl transition-all duration-500 group-hover:scale-150 bg-${category.color}-500`}></div>
                    </motion.div>
                  )
                })}
              </motion.div>
            )}

            {selectedCategory && (
              <motion.div
                key={`projects-${selectedCategory}`}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -50, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {getProjects(selectedCategory).map((project, index) => {
                  const style = getDetailCardStyle(project.color)
                  
                  return (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, y: -5 }}
                      className={`
                        rounded-3xl p-6 sm:p-8 
                        ${style.container}
                      `}
                    >
                      <div className="mb-4">
                        <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-3">
                          {project.title}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 text-sm">
                          {project.description}
                        </p>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-xs font-bold text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wider">
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className={`px-3 py-1 rounded-lg text-xs font-semibold ${style.chip}`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-xs font-bold text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wider">
                          Features
                        </h4>
                        <ul className="space-y-2">
                          {project.features.map((feature, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
                            >
                              <span className={`${style.check} mt-0.5 font-bold`}>
                                ✓
                              </span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center gap-4 pt-4 border-t border-gray-100 dark:border-white/5">
                        {project.github && (
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center gap-2 text-gray-600 dark:text-gray-400 ${style.linkHover} transition-colors`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <FaGithub />
                            <span className="text-sm font-medium">Code</span>
                          </motion.a>
                        )}
                        {project.demo && (
                          <motion.a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center gap-2 text-gray-600 dark:text-gray-400 ${style.linkHover} transition-colors`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <FaExternalLinkAlt />
                            <span className="text-sm font-medium">Demo</span>
                          </motion.a>
                        )}
                      </div>
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

export default Projects