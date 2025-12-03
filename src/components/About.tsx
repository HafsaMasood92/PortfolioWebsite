import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaArrowLeft, FaGraduationCap, FaCode, FaChartLine, FaRobot } from 'react-icons/fa'

type CategoryType = 'education' | 'mern' | 'marketing' | 'automation' | null

interface MainCategory {
  id: CategoryType
  title: string
  subtitle: string
  color: 'purple' | 'green' | 'blue' | 'pink'
  icon: React.ReactNode
}

interface SkillDetail {
  id: string
  title: string
  description: string
  color: 'purple' | 'green' | 'blue' | 'pink' | 'lavender' | 'mint' | 'peach'
}

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>(null)

  const mainCategories: MainCategory[] = [
    {
      id: 'education',
      title: 'Education',
      subtitle: 'Mehran University of Engineering and Technology, Jamshoro',
      color: 'purple',
      icon: <FaGraduationCap />
    },
    {
      id: 'mern',
      title: 'MERN Stack',
      subtitle: 'Full-Stack Web Development',
      color: 'green',
      icon: <FaCode />
    },
    {
      id: 'marketing',
      title: 'Digital Marketing',
      subtitle: 'SEO & Growth Strategy',
      color: 'blue',
      icon: <FaChartLine />
    },
    {
      id: 'automation',
      title: 'Automation',
      subtitle: 'n8n & Chatbots',
      color: 'pink',
      icon: <FaRobot />
    }
  ]

  const educationDetails: SkillDetail[] = [
    {
      id: 'degree',
      title: 'Bachelor of Computer Systems Engineering',
      description: 'Completed my Bachelors degree from Mehran University of Engineering and Technology, Jamshoro      (2021-2025 ) CGPA: 3.18/4.0',
      color: 'purple'
    },
  ]

  const mernDetails: SkillDetail[] = [
    {
      id: 'frontend',
      title: 'Frontend Development',
      description:
        'I build fast and scalable user interfaces using React and TypeScript. My focus is on component-driven architecture, smooth animations with Framer Motion, clean UI using Tailwind/shadcn, and seamless API integrations for modern user experiences.',
      color: 'purple'
    },
    {
      id: 'backend',
      title: 'Backend & APIs',
      description:
        'I develop secure and production-ready backend systems using Node.js and Express. I design REST APIs, implement JWT authentication, manage middleware architecture, and build reliable services that focus on performance and scalability.',
      color: 'lavender'
    },
    {
      id: 'database',
      title: 'Database & Cloud',
      description:
        'I work with MongoDB for schema design, optimized queries, and aggregation pipelines. I also handle deployments using platforms like Vercel and Render ensuring stable cloud environments and secure data management.',
      color: 'mint'
    }
  ]

  const marketingDetails: SkillDetail[] = [
    {
      id: 'seo',
      title: 'SEO & Analytics',
      description:
        'I optimize websites through keyword research, on-page and off-page SEO strategies, and performance tracking using analytics tools. My focus is improving search visibility, user engagement, and ranking through data-driven decisions.',
      color: 'blue'
    },
    {
      id: 'content',
      title: 'Content Strategy',
      description:
        'I develop strategic content plans, manage social media execution, and create targeted content that boosts engagement, strengthens branding, and drives consistent audience growth across digital platforms.',
      color: 'mint'
    },
    {
      id: 'gadgetry',
      title: 'Digital Marketing Lead at Gadgetry',
      description:
        'At Gadgetry, I lead SEO optimization, product visibility improvements, and content planning. I manage the brand’s digital presence to increase traffic, enhance discoverability, and support early customer acquisition for the tech e-commerce startup.',
      color: 'peach'
    }
  ];

  const automationDetails: SkillDetail[] = [
    {
      id: 'workflows',
      title: 'n8n Workflow Automation',
      description:
        'I design and automate end-to-end workflows in n8n by integrating APIs, databases, and third-party services. My automations reduce manual work, streamline operations, and create reliable systems that run 24/7.',
      color: 'pink'
    },
    {
      id: 'chatbots',
      title: 'No-Code Chatbots',
      description:
        'I build no-code chatbots for WhatsApp and websites, enabling automated conversations, lead handling, customer support, and data collection. These bots enhance user engagement and reduce response time for businesses.',
      color: 'lavender'
    },
    {
      id: 'fiverr',
      title: 'Fiverr Projects',
      description:
        'I have delivered multiple automation and chatbot projects on Fiverr, helping clients improve operational efficiency through intelligent workflows, API integrations, and custom automation setups with measurable results.',
      color: 'green'
    }
  ];

  const getSkillDetails = (category: CategoryType): SkillDetail[] => {
    switch (category) {
      case 'education':
        return educationDetails
      case 'mern':
        return mernDetails
      case 'marketing':
        return marketingDetails
      case 'automation':
        return automationDetails
      default:
        return []
    }
  }

  // --- STYLING LOGIC ---

  const getFrontCardStyle = (color: string) => {
    const map: Record<string, string> = {
      purple: 'pastel-purple',
      green: 'pastel-mint',
      blue: 'pastel-blue',
      pink: 'pastel-pink',
    };
    const targetColor = map[color] || 'pastel-purple';

    return {
      // Reverted: No border on hover, just shadow and bg tint
      container: `bg-white dark:bg-dark-surface 
                  border border-white/50 dark:border-white/5
                  hover:bg-${targetColor}/5 dark:hover:bg-${targetColor}/10
                  hover:shadow-lg hover:shadow-${targetColor}/10`,
      iconBg: `bg-${targetColor}/10 text-${targetColor}-dark dark:text-${targetColor}`,
      title: `text-gray-900 dark:text-gray-100 group-hover:text-${targetColor}`,
      subtitle: `text-gray-500 dark:text-dark-muted`
    }
  }

  const getDetailCardStyle = (color: string) => {
    const colorMap: Record<string, {
      bg: string
      text: string
      border: string
      hover: string
    }> = {
      purple: {
        bg: 'bg-pastel-purple/10 dark:bg-pastel-purple/10',
        text: 'text-pastel-purple-dark dark:text-pastel-purple',
        border: 'border-pastel-purple-dark/20 dark:border-pastel-purple/20',
        hover: 'hover:bg-pastel-purple/20 dark:hover:bg-pastel-purple/20'
      },
      blue: {
        bg: 'bg-pastel-blue/10 dark:bg-pastel-blue/10',
        text: 'text-pastel-blue-dark dark:text-pastel-blue',
        border: 'border-pastel-blue-dark/20 dark:border-pastel-blue/20',
        hover: 'hover:bg-pastel-blue/20 dark:hover:bg-pastel-blue/20'
      },
      pink: {
        bg: 'bg-pastel-pink/10 dark:bg-pastel-pink/10',
        text: 'text-pastel-pink-dark dark:text-pastel-pink',
        border: 'border-pastel-pink-dark/20 dark:border-pastel-pink/20',
        hover: 'hover:bg-pastel-pink/20 dark:hover:bg-pastel-pink/20'
      },
      lavender: {
        bg: 'bg-pastel-lavender/10 dark:bg-pastel-lavender/10',
        text: 'text-pastel-lavender-dark dark:text-pastel-lavender',
        border: 'border-pastel-lavender-dark/20 dark:border-pastel-lavender/20',
        hover: 'hover:bg-pastel-lavender/20 dark:hover:bg-pastel-lavender/20'
      },
      mint: {
        bg: 'bg-pastel-mint/10 dark:bg-pastel-mint/10',
        text: 'text-pastel-mint-dark dark:text-pastel-mint',
        border: 'border-pastel-mint-dark/20 dark:border-pastel-mint/20',
        hover: 'hover:bg-pastel-mint/20 dark:hover:bg-pastel-mint/20'
      },
      peach: {
        bg: 'bg-pastel-peach/10 dark:bg-pastel-peach/10',
        text: 'text-pastel-peach-dark dark:text-pastel-peach',
        border: 'border-pastel-peach-dark/20 dark:border-pastel-peach/20',
        hover: 'hover:bg-pastel-peach/20 dark:hover:bg-pastel-peach/20'
      },
      green: {
        bg: 'bg-pastel-mint/10 dark:bg-pastel-mint/10',
        text: 'text-pastel-mint-dark dark:text-pastel-mint',
        border: 'border-pastel-mint-dark/20 dark:border-pastel-mint/20',
        hover: 'hover:bg-pastel-mint/20 dark:hover:bg-pastel-mint/20'
      }
    }
    return colorMap[color] || colorMap.purple
  }

  const handleCategoryClick = (categoryId: CategoryType) => {
    setSelectedCategory(categoryId)
  }

  const handleBack = () => {
    setSelectedCategory(null)
  }

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      ref={ref}
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

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4 text-gradient dark:text-gradient-dark">
            About Me
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
          
          {/* --- LEFT SIDE: IMAGE --- */}
          <motion.div 
            className="w-full lg:w-4/12 flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative group w-full max-w-xs">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 dark:border-white/10 aspect-[3/4] ml-8">
                <img 
                  src="/MyProfile.png" 
                  alt="Profile" 
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </motion.div>


          {/* --- RIGHT SIDE: CARDS & CONTENT --- */}
          <motion.div 
            className="w-full lg:w-8/12"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >

            {/* Back Button */}
            <AnimatePresence>
              {selectedCategory && (
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  onClick={handleBack}
                  className="mb-8 flex items-center gap-2 px-5 py-2 rounded-xl bg-white/80 dark:bg-dark-surface/80 backdrop-blur-sm border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-200 font-medium hover:border-pastel-purple hover:text-pastel-purple transition-all shadow-sm"
                  whileHover={{ scale: 1.02, x: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaArrowLeft className="text-sm" />
                  <span>Back to Categories</span>
                </motion.button>
              )}
            </AnimatePresence>

            {/* Main Categories View - ONE COLUMN NOW */}
            <AnimatePresence mode="wait">
              {!selectedCategory && (
                <motion.div
                  key="main-categories"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col gap-4"
                >
                  {mainCategories.map((category, index) => {
                    const style = getFrontCardStyle(category.color)
                    
                    return (
                      <motion.div
                        key={category.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.01, x: 5 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleCategoryClick(category.id)}
                        className={`
                          group cursor-pointer rounded-2xl p-6
                          ${style.container}
                          transition-all duration-300 ease-out
                          flex flex-col justify-center w-full
                        `}
                      >
                        <div className="flex items-center justify-between gap-4">
                          <div className="flex items-center gap-4">
                            {/* Icon Container */}
                            <div className={`p-3 rounded-full ${style.iconBg} text-xl flex-shrink-0 transition-colors duration-300`}>
                              {category.icon}
                            </div>
                            
                            <div>
                              <h3 className={`text-xl font-display font-bold mb-1 transition-colors duration-300 ${style.title}`}>
                                {category.title}
                              </h3>
                              <p className={`text-sm font-medium ${style.subtitle}`}>
                                {category.subtitle}
                              </p>
                            </div>
                          </div>
                          <div className={`text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-x-1`}>
                             →
                          </div>
                        </div>
                      </motion.div>
                    )
                  })}
                </motion.div>
              )}

              {/* Skill Details View */}
              {selectedCategory && (
                <motion.div
                  key={`details-${selectedCategory}`}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col gap-4"
                >
                  {getSkillDetails(selectedCategory).map((detail, index) => {
                    const colors = getDetailCardStyle(detail.color)
                    
                    return (
                      <motion.div
                        key={detail.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.01, x: 5 }}
                        className={`
                          rounded-2xl p-6 shadow-sm backdrop-blur-sm
                          border-l-4
                          ${colors.bg}
                          ${colors.border}
                          ${colors.hover}
                          transition-all duration-300
                        `}
                      >
                        <h3 className={`text-lg font-display font-bold mb-2 ${colors.text}`}>
                          {detail.title}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                          {detail.description}
                        </p>
                      </motion.div>
                    )
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default About