import { motion } from 'framer-motion'

const Hero = () => {
  const jobTitle = "Computer Systems Engineer".split(" ");
  const description = "Crafting scalable web applications, engineering reliable systems, and automating workflows with precision and creativity.".split(" ");

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 lg:pt-0"
    >
      {/* Background - Clean White/Slate with subtle blobs */}
      <div className="absolute inset-0 bg-slate-50 dark:bg-dark-bg"></div>
      
      {/* Animated Background Blobs (Subtle Green/Teal) */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-emerald-400/20 rounded-full blur-3xl"
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
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl"
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
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* --- LEFT SIDE: TEXT CONTENT --- */}
          <motion.div 
            className="w-full lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* 1. NAME - Size reduced to Medium */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 text-slate-800 dark:text-white tracking-tight whitespace-nowrap"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hafsa Masood
            </motion.h1>
            
            {/* 2. JOB TITLE (Animated Text) - Size reduced */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-x-3 text-xl sm:text-2xl md:text-3xl font-medium text-emerald-600 dark:text-emerald-400 mb-8">
              {jobTitle.map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.5 + (index * 0.1), 
                    ease: "easeOut"
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </div>
            
            {/* 3. DESCRIPTION (Animated Text) - Size reduced */}
            <div className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              {description.map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: 1.0 + (index * 0.03),
                    ease: "easeOut"
                  }}
                  className="inline-block mr-1.5"
                >
                  {word}
                </motion.span>
              ))}
            </div>

            {/* 4. CTA BUTTON */}
            <motion.a
              href="#about"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-emerald-600 text-white font-semibold text-lg shadow-lg hover:bg-emerald-700 hover:shadow-emerald-500/30 transition-all transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.2 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore My Work
            </motion.a>
          </motion.div>

          {/* --- RIGHT SIDE: IMAGE --- */}
          <motion.div 
            className="w-full lg:w-1/2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full p-2 border-4 border-white/50 dark:border-white/10 shadow-2xl bg-white/20 backdrop-blur-sm">
              <div className="w-full h-full rounded-full overflow-hidden bg-emerald-100 dark:bg-slate-800">
                <img 
                  src="/MyProfile.png" 
                  alt="Hafsa Masood" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Hero