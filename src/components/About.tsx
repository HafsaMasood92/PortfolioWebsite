import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaArrowLeft, FaGraduationCap, FaCode, FaChartLine, FaRobot, FaExternalLinkAlt, FaGlobe, FaInstagram } from 'react-icons/fa'

type CategoryType = 'education' | 'mern' | 'marketing' | 'automation' | null

interface MainCategory {
  id: CategoryType
  title: string
  subtitle: string
  description: string 
  color: 'purple' | 'green' | 'blue' | 'pink'
  icon: React.ReactNode
}

interface SkillDetail {
  id: string
  title: string
  description: string
  color: 'purple' | 'green' | 'blue' | 'pink' | 'lavender' | 'mint' | 'peach'
  link?: string
  links?: { text: string; url: string; icon: React.ReactNode }[]
}

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>(null)

  const mainCategories: MainCategory[] = [
    {
      id: 'education',
      title: 'Education',
      subtitle: 'Mehran UET, Jamshoro',
      description: 'Building a strong foundation in computer systems, algorithms, and engineering principles.',
      color: 'purple',
      icon: <FaGraduationCap />
    },
    {
      id: 'mern',
      title: 'MERN Stack',
      subtitle: 'Full-Stack Web Development',
      description: 'Creating dynamic, scalable web applications with MongoDB, Express, React, and Node.js.',
      color: 'green',
      icon: <FaCode />
    },
    {
      id: 'marketing',
      title: 'Digital Marketing',
      subtitle: 'SEO & Growth Strategy',
      description: 'Driving growth and visibility through strategic SEO, content planning, and analytics.',
      color: 'blue',
      icon: <FaChartLine />
    },
    {
      id: 'automation',
      title: 'Automation',
      subtitle: 'n8n & Chatbots',
      description: 'Streamlining workflows and building intelligent chatbots using n8n and no-code tools.',
      color: 'pink',
      icon: <FaRobot />
    }
  ]

  const educationDetails: SkillDetail[] = [
    {
      id: 'degree',
      title: 'Bachelor of Computer Systems Engineering',
      description: 'Completed my Bachelors degree from Mehran University of Engineering and Technology, Jamshoro (2021-2025) with a CGPA of 3.18/4.0. The curriculum provided in-depth knowledge of embedded systems, software engineering, and computer architecture.',
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
      color: 'peach',
      links: [
        { text: 'Website', url: 'https://thegadgetryofficial.com/', icon: <FaGlobe /> },
        { text: 'Instagram', url: 'https://www.instagram.com/_gadgetryofficial/', icon: <FaInstagram /> }
      ]
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
      color: 'lavender',
      link: 'https://www.fiverr.com/maazmasoodrajp/build-a-custom-faq-chatbot-for-your-website-or-business?context_referrer=tailored_homepage_perseus&source=recently_viewed_gigs&ref_ctx_id=5ca89ac81c3841ce880feceea4784f80&context=recommendation&pckg_id=1&pos=3&context_alg=recently_viewed&seller_online=true&imp_id=9c2cf8ab-9d32-456d-a611-9c5e308e7504'
    },
    {
      id: 'fiverr',
      title: 'Fiverr Projects',
      description:
        'I have delivered multiple automation and chatbot projects on Fiverr, helping clients improve operational efficiency through intelligent workflows, API integrations, and custom automation setups with measurable results.',
      color: 'green',
      link: 'https://www.fiverr.com/maazmasoodrajp/build-a-custom-faq-chatbot-for-your-website-or-business?context_referrer=tailored_homepage_perseus&source=recently_viewed_gigs&ref_ctx_id=5ca89ac81c3841ce880feceea4784f80&context=recommendation&pckg_id=1&pos=3&context_alg=recently_viewed&seller_online=true&imp_id=9c2cf8ab-9d32-456d-a611-9c5e308e7504'
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
      container: `bg-white dark:bg-dark-surface 
                  border border-white/50 dark:border-white/5
                  hover:bg-${targetColor}/5 dark:hover:bg-${targetColor}/10
                  hover:shadow-lg hover:shadow-${targetColor}/10`,
      iconBg: `bg-${targetColor}/10 text-${targetColor}-dark dark:text-${targetColor}`,
      title: `text-gray-900 dark:text-gray-100 group-hover:text-${targetColor}`,
      subtitle: `text-gray-500 dark:text-dark-muted`
    }
  }

  // FIXED: Added missing getListStyle function
  const getListStyle = (color: string) => {
    const map: Record<string, string> = {
      purple: 'pastel-purple',
      green: 'pastel-mint',
      blue: 'pastel-blue',
      pink: 'pastel-pink',
      lavender: 'pastel-lavender',
      mint: 'pastel-mint',
      peach: 'pastel-peach'
    };
    const target = map[color] || 'pastel-purple';

    return {
      border: `border-${target}`,
      title: `text-${target}-dark dark:text-${target}`,
      hoverBg: `hover:bg-${target}/5`
    }
  }

  const handleCategoryClick = (categoryId: CategoryType) => {
    setSelectedCategory(categoryId)
  }

  const handleBack = () => {
    setSelectedCategory(null)
  }

  // Component to render a category card (Main View)
  const CategoryCard = ({ category }: { category: MainCategory }) => {
    const style = getFrontCardStyle(category.color)
    return (
      <motion.div
        key={category.id}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
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
  }

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 relative bg-pastel-purple/[0.03] dark:bg-dark-bg transition-all duration-300"
      ref={ref}
    >
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4 text-gradient dark:text-gradient-dark">
            About Me
          </h2>
          <div className="section-divider"></div>
        </div>

        {/* Dynamic Content Container */}
        <div className="w-full max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            {!selectedCategory ? (
              // VIEW 1: CATEGORY CARDS (2x2 Grid)
              <motion.div
                key="main-list"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {mainCategories.map((category) => (
                  <CategoryCard key={category.id} category={category} />
                ))}
              </motion.div>
            ) : (
              // VIEW 2: DETAILS LIST
              <motion.div
                key="details-view"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col h-full"
              >
                {/* Back Button */}
                <motion.button
                  onClick={handleBack}
                  className="mb-8 self-start flex items-center gap-2 px-5 py-2 rounded-xl bg-white/80 dark:bg-dark-surface/80 backdrop-blur-sm border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-200 font-medium hover:border-pastel-purple hover:text-pastel-purple transition-all shadow-sm"
                  whileHover={{ scale: 1.02, x: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaArrowLeft className="text-sm" />
                  <span>Back</span>
                </motion.button>

                <div className="flex flex-col space-y-8 pl-2">
                  {getSkillDetails(selectedCategory).map((detail, index) => {
                    const styles = getListStyle(detail.color)
                    
                    return (
                      <motion.div
                        key={detail.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className={`
                          relative pl-6 sm:pl-8 border-l-4 ${styles.border}
                          ${styles.hoverBg} transition-colors duration-300 rounded-r-xl p-4
                        `}
                      >
                        <div className="flex flex-col gap-2">
                           <div className="flex items-center gap-3">
                              <span className={`text-xs font-bold px-2 py-0.5 rounded bg-gray-100 dark:bg-white/10 text-gray-500 dark:text-gray-400`}>
                                0{index + 1}
                              </span>
                              <h3 className={`text-xl font-display font-bold ${styles.title}`}>
                                {detail.title}
                              </h3>
                           </div>
                           
                           <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base">
                             {detail.description}
                           </p>

                           {/* Links */}
                           {detail.links && (
                              <div className="flex flex-wrap gap-4 mt-2">
                                {detail.links.map((link, idx) => (
                                  <a 
                                    key={idx}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`inline-flex items-center gap-2 text-sm font-semibold hover:underline ${styles.title}`}
                                  >
                                    {link.text} <FaExternalLinkAlt className="text-xs" />
                                  </a>
                                ))}
                              </div>
                           )}

                           {detail.link && (
                              <div className="mt-2">
                                <a 
                                  href={detail.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={`inline-flex items-center gap-2 text-sm font-semibold hover:underline ${styles.title}`}
                                >
                                  View on Fiverr <FaExternalLinkAlt className="text-xs" />
                                </a>
                              </div>
                           )}
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default About