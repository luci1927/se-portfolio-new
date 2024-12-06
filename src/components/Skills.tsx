import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaGitAlt,
  FaDocker,
} from 'react-icons/fa'
import {
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
} from 'react-icons/si'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skills = [
    { name: 'React', icon: FaReact, color: '#61DAFB' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
    { name: 'Python', icon: FaPython, color: '#3776AB' },
    { name: 'TailwindCSS', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
    { name: 'Git', icon: FaGitAlt, color: '#F05032' },
    { name: 'Docker', icon: FaDocker, color: '#2496ED' },
    { name: 'Database Design', icon: FaDatabase, color: '#FF6B6B' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    <section
      id="skills"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Technical Skills
          </h2>
          <div className="mt-2 h-1 w-20 bg-primary-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-10"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl dark:hover:shadow-xl dark:hover:shadow-primary-500/10 transition-all duration-300 transform hover:-translate-y-1 dark:hover:-translate-y-1 hover:scale-105 dark:hover:scale-105 group cursor-pointer"
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
            >
              <skill.icon
                className="w-12 h-12 mb-4 text-primary-500 group-hover:text-primary-400 dark:group-hover:text-primary-400 transition-colors duration-300 animate-float"
                style={{ color: skill.color }}
              />
              <h3
                className="text-lg font-medium text-gray-900 dark:text-white transition-colors duration-300"
                style={{ color: 'inherit' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = skill.color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '';
                }}
              >
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Always learning and exploring new technologies to stay current with
            industry trends.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
