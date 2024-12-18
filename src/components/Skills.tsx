import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaAndroid,
} from 'react-icons/fa'
import {
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiNuxtdotjs,
  SiChartdotjs,
  SiBootstrap,
  SiPhp,
  SiExpress,
  SiNextdotjs,
  SiMysql,
  SiSupabase,
  SiPostman,
  SiSemanticui,
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
    { name: 'Git', icon: FaGitAlt, color: '#F05032' },
    { name: 'Database Design', icon: FaDatabase, color: '#FF6B6B' },
    { name: 'Nuxt.js', icon: SiNuxtdotjs, color: '#00DC82' }, // Nuxt.js
    { name: 'Charts.js', icon: SiChartdotjs, color: '#FF6384' }, // Charts.js
    { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' }, // Bootstrap
    { name: 'PHP', icon: SiPhp, color: '#8993BE' }, // PHP
    { name: 'Semantic UI', icon: SiSemanticui, color: '#611F69' }, // Semantic UI
    { name: 'Express.js', icon: SiExpress, color: '#000000' }, // Express.js
    { name: 'Next.js', icon: SiNextdotjs, color: '#000000' }, // Next.js
    { name: 'MySQL', icon: SiMysql, color: '#00758F' }, // MySQL
    { name: 'Supabase', icon: SiSupabase, color: '#3ECF8E' }, // Supabase
    { name: 'GitHub', icon: FaGithub, color: '#181717' }, // GitHub
    { name: 'Postman', icon: SiPostman, color: '#FF6C37' }, // Postman
    { name: 'Android Studio', icon: FaAndroid, color: '#3DDC84' }, // Android Studio
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
      className="relative py-20 bg-transparent transition-colors duration-300"
      ref={ref}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              className="flex flex-col items-center p-6 bg-gray-50/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-md hover:shadow-xl dark:hover:shadow-xl dark:hover:shadow-primary-500/10 transition-all duration-300 transform hover:-translate-y-1 dark:hover:-translate-y-1 hover:scale-105 dark:hover:scale-105 group cursor-pointer"
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
