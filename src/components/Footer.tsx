import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/luci1927',
      icon: FaGithub,
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/tharindudulanka',
      icon: FaLinkedin,
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/yourusername',
      icon: FaTwitter,
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/94774754156',
      icon: FaWhatsapp,
    },
  ]

  return (
    <footer className="bg-white dark:bg-gray-900 py-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400 transition-colors duration-300"
              >
                <span className="sr-only">{link.name}</span>
                <link.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm transition-colors duration-300">
            {currentYear} Tharindu Dulanka. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
