import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCategories = [
    {
      category: "Development",
      color: "emerald",
      skills: [
        "React", "TypeScript", "Node.js", "Express.js", 
        "MongoDB", "Tailwind CSS", "Redux", "Next.js", 
        "Git & GitHub", "REST APIs"
      ]
    },
    {
      category: "Automation & AI",
      color: "rose", 
      skills: [
        "n8n Workflows", "Zapier", "Chatbot Design", 
        "OpenAI API", "Python Scripting", "Webhook Integrations"
      ]
    },
    {
      category: "Digital Marketing",
      color: "sky",
      skills: [
        "SEO Optimization", "Google Analytics", "Content Strategy", 
        "Social Media Growth", "Email Marketing", "Brand Positioning"
      ]
    }
  ]

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 relative bg-slate-50 dark:bg-dark-bg transition-colors duration-300"
      ref={ref}
    >
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4 text-slate-800 dark:text-white">
              Technical Skills
            </h2>
            <div className="w-24 h-1.5 bg-emerald-500 rounded-full mx-auto"></div>
          </div>

          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
            {/* Left Column: Skills List */}
            <div className="w-full lg:w-1/2 space-y-12">
              {skillCategories.map((category, index) => (
                <motion.div 
                  key={category.category}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="flex flex-col gap-4"
                >
                  <div className="flex items-center gap-3">
                    <div className={`h-8 w-1 bg-${category.color === 'emerald' ? 'emerald' : category.color === 'rose' ? 'rose' : 'sky'}-500 rounded-full`}></div>
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
                      {category.category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-3 pl-4">
                    {category.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className={`
                          cursor-default
                          px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                          bg-white dark:bg-slate-800 
                          border border-slate-200 dark:border-slate-700
                          text-slate-600 dark:text-slate-300
                          hover:border-emerald-500 dark:hover:border-emerald-500
                          hover:text-emerald-600 dark:hover:text-emerald-400
                          hover:shadow-md
                        `}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right Column: Tech Stack Image */}
            <motion.div 
              className="w-full lg:w-1/2 flex justify-center lg:justify-end lg:sticky lg:top-24"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative w-full max-w-lg mt-8 lg:mt-0">
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl"></div>
                
                {/* Tech Stack Icons Image */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700 aspect-[4/3] bg-white dark:bg-slate-800 z-10 mt-20">
                  <img 
                    src="/tech-stack.png" 
                    onError={(e) => {
                      // Fallback if local image is missing
                      e.currentTarget.src = "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop"
                    }}
                    alt="Technology Stack Icons" 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 "
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                  
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="text-sm font-medium uppercase tracking-wider mb-1 text-emerald-300">Toolbox</p>
                    <h3 className="text-2xl font-display font-bold">Modern Tech Stack</h3>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills