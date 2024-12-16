import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section
      id="about"
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={variants}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            About Me
          </h2>
          <div className="mt-2 h-1 w-20 bg-primary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="mt-10">
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={variants}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="prose prose-lg mx-auto dark:prose-invert"
          >
            <p className="text-gray-600 dark:text-gray-300">
              I am a passionate Fullstack Software Engineer trainee with a strong
              foundation in both frontend and backend development. My journey in
              software development began with a curiosity to understand how things
              work on the web, and it has evolved into a professional pursuit of
              creating elegant, efficient, and user-friendly applications.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mt-4">
              I specialize in modern web technologies and am constantly learning
              new tools and frameworks to stay current with industry trends. My
              approach to development focuses on writing clean, maintainable code
              while ensuring optimal performance and user experience.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mt-4">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing my knowledge with
              the developer community. I believe in continuous learning and am
              always excited to take on new challenges that push my boundaries.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={variants}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 text-center"
          >
            <a
              href="/path-to-your-resume.pdf"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume From Here
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
