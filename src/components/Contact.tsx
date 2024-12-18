import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'tharindu.dulanka@eversoft.lk',
      href: 'mailto:tharindu.dulanka@eversoft.lk',
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '0774754156',
      href: 'tel:+94774754156',
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Seeduwa, Sri Lanka',
      href: '#',
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <section
      id="contact"
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
            Get in Touch
          </h2>
          <div className="mt-2 h-1 w-20 bg-primary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-50/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Contact Information
            </h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 group"
                >
                  <div className="flex-shrink-0">
                    <info.icon className="h-6 w-6 text-primary-500 group-hover:text-primary-400 transition-colors duration-300 animate-bounce-slow" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {info.label}
                    </p>
                    <a
                      href={info.href}
                      className="text-base text-gray-900 dark:text-white hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300 transform hover:translate-x-1 inline-block"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gray-50/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  disabled
                  className="mt-1 block w-full rounded-md border-gray-300 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white shadow-sm focus:border-primary-500 focus:ring-primary-500 transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  disabled
                  className="mt-1 block w-full rounded-md border-gray-300 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white shadow-sm focus:border-primary-500 focus:ring-primary-500 transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  disabled
                  className="mt-1 block w-full rounded-md border-gray-300 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white shadow-sm focus:border-primary-500 focus:ring-primary-500 transition-colors"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  disabled
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
