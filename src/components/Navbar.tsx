import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { HiMenu, HiX, HiSun, HiMoon } from 'react-icons/hi'
import { motion, AnimatePresence } from 'framer-motion'

interface NavbarProps {
  darkMode: boolean
  toggleDarkMode: () => void
}

const Navbar = ({ darkMode, toggleDarkMode }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const navigation = [
    { name: 'Home', href: 'home' },
    { name: 'About', href: 'about' },
    { name: 'Skills', href: 'skills' },
    { name: 'Projects', href: 'projects' },
    { name: 'Contact', href: 'contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg'
          : 'bg-white dark:bg-gray-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-primary-600 dark:text-primary-500">
              TD
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-gray-600 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-400 px-3 py-2 text-sm font-medium transition-all duration-300 transform hover:scale-110 cursor-pointer"
              >
                {item.name}
              </Link>
            ))}

            <motion.button
              onClick={() => {
                toggleDarkMode();
                localStorage.setItem('darkMode', String(!darkMode));
              }}
              className="relative p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 focus:outline-none cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle dark mode"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={darkMode ? 'dark' : 'light'}
                  initial={{ y: -20, opacity: 0, rotate: -90 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: 20, opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                  className="relative w-6 h-6"
                >
                  {darkMode ? (
                    <HiSun className="w-6 h-6 text-yellow-500" />
                  ) : (
                    <HiMoon className="w-6 h-6 text-blue-500" />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center">
            <motion.button
              onClick={() => {
                toggleDarkMode();
                localStorage.setItem('darkMode', String(!darkMode));
              }}
              className="relative p-2 mr-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 focus:outline-none cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle dark mode"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={darkMode ? 'dark' : 'light'}
                  initial={{ y: -20, opacity: 0, rotate: -90 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: 20, opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                  className="relative w-6 h-6"
                >
                  {darkMode ? (
                    <HiSun className="w-6 h-6 text-yellow-500" />
                  ) : (
                    <HiMoon className="w-6 h-6 text-blue-500" />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <HiX className="w-6 h-6" />
              ) : (
                <HiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white dark:bg-gray-900 shadow-lg"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 cursor-pointer"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
