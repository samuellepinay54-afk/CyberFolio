import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeContext'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { path: '/', label: 'Accueil' },
    { path: '/about', label: 'À propos' },
    { path: '/projects', label: 'Projets' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? theme === 'dark'
            ? 'bg-[rgba(10,14,39,0.98)] backdrop-blur-md'
            : 'bg-[rgba(255,255,255,0.98)] backdrop-blur-md'
          : theme === 'dark'
          ? 'bg-[rgba(10,14,39,0.95)]'
          : 'bg-[rgba(255,255,255,0.95)]'
      } border-b ${
        theme === 'dark' ? 'border-slate-700' : 'border-slate-200'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="text-xl md:text-2xl font-bold font-mono">
            <span className={theme === 'dark' ? 'text-cyan-400' : 'text-slate-800'}>
              &lt;CyberFolio/&gt;
            </span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`relative transition-colors duration-200 ${
                    isActive(link.path)
                      ? theme === 'dark'
                        ? 'text-cyan-400'
                        : 'text-slate-800'
                      : theme === 'dark'
                      ? 'text-slate-300 hover:text-cyan-400'
                      : 'text-slate-600 hover:text-slate-800'
                  }`}
                >
                  {link.label}
                  {isActive(link.path) && (
                    <motion.span
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cyan-400"
                      layoutId="underline"
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg transition-colors hover:bg-opacity-20 hover:bg-cyan-400"
              aria-label="Toggle theme"
            >
              <span className="text-2xl">{theme === 'dark' ? '🌙' : '☀️'}</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg transition-colors hover:bg-opacity-20 hover:bg-cyan-400"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
                <motion.span
                  className={`block h-0.5 w-6 ${
                    theme === 'dark' ? 'bg-slate-300' : 'bg-slate-700'
                  }`}
                  animate={{
                    rotate: isMobileMenuOpen ? 45 : 0,
                    y: isMobileMenuOpen ? 8 : 0,
                  }}
                />
                <motion.span
                  className={`block h-0.5 w-6 ${
                    theme === 'dark' ? 'bg-slate-300' : 'bg-slate-700'
                  }`}
                  animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                />
                <motion.span
                  className={`block h-0.5 w-6 ${
                    theme === 'dark' ? 'bg-slate-300' : 'bg-slate-700'
                  }`}
                  animate={{
                    rotate: isMobileMenuOpen ? -45 : 0,
                    y: isMobileMenuOpen ? -8 : 0,
                  }}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden border-t ${
              theme === 'dark' ? 'border-slate-700 bg-[#141b2d]' : 'border-slate-200 bg-white'
            }`}
          >
            <ul className="py-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-6 py-2 transition-colors ${
                      isActive(link.path)
                        ? theme === 'dark'
                          ? 'text-cyan-400 bg-cyan-400 bg-opacity-10'
                          : 'text-slate-800 bg-slate-100'
                        : theme === 'dark'
                        ? 'text-slate-300 hover:bg-slate-800'
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar

