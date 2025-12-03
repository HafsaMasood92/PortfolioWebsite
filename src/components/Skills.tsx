import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const getColorClasses = (color: string) => {
  const colorMap: Record<string, { title: string; chip: string }> = {
    purple: {
      title: 'text-pastel-purple-dark dark:text-pastel-purple',
      chip: 'bg-pastel-purple/50 dark:bg-pastel-purple/20 text-gray-700 dark:text-dark-text border border-pastel-purple-dark/30 dark:border-pastel-purple/30'
    },
    blue: {
      title: 'text-pastel-blue-dark dark:text-pastel-blue',
      chip: 'bg-pastel-blue/50 dark:bg-pastel-blue/20 text-gray-700 dark:text-dark-text border border-pastel-blue-dark/30 dark:border-pastel-blue/30'
    },
    lavender: {
      title: 'text-pastel-lavender-dark dark:text-pastel-lavender',
      chip: 'bg-pastel-lavender/50 dark:bg-pastel-lavender/20 text-gray-700 dark:text-dark-text border border-pastel-lavender-dark/30 dark:border-pastel-lavender/30'
    }
  }
  return colorMap[color] || colorMap.purple
}

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCategories = [
    {
      title: 'Full Stack Development',
      skills: ['HTML', 'CSS', 'Tailwind', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node.js', 'REST APIs', 'JWT'],
      color: 'purple'
    },
    {
      title: 'Digital Marketing',
      skills: ['SEO', 'Content Creation', 'Email Marketing', 'Analytics', 'Social Media'],
      color: 'blue'
    },
    {
      title: 'AI & Automation',
      skills: ['n8n Workflows', 'API Integrations', 'No-code Chatbots', 'WhatsApp Automation', 'Website Automation'],
      color: 'lavender'
    },
  ]

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-br from-pastel-purple-light via-pastel-lavender-light to-pastel-blue-light dark:from-dark-bg dark:via-dark-surface dark:to-dark-surface-light transition-all duration-300"
      ref={ref}
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-center mb-6 text-gradient dark:text-gradient-dark">
            Skills
          </h2>
          <div className="section-divider"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                className="glass-effect rounded-3xl p-8 shadow-xl"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <h3 className={`text-2xl font-display font-semibold mb-6 ${getColorClasses(category.color).title}`}>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      className={`px-4 py-2 rounded-full text-sm font-medium ${getColorClasses(category.color).chip} cursor-default`}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ duration: 0.3, delay: categoryIndex * 0.2 + skillIndex * 0.05 }}
                      whileHover={{ 
                        scale: 1.1, 
                        y: -3,
                        boxShadow: `0 10px 20px rgba(0,0,0,0.1)`
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
