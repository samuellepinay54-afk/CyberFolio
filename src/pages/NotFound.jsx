import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTheme } from '../contexts/ThemeContext'

const NotFound = () => {
  const { theme } = useTheme()

  return (
    <section className="min-h-screen flex items-center justify-center py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-8xl md:text-9xl font-bold mb-4 text-cyan-400">404</h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Page non trouvée
          </h2>
          <p className={`text-lg mb-8 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
            La page que vous recherchez n'existe pas ou a été déplacée.
          </p>
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-cyan-400 text-slate-900 rounded-lg font-semibold hover:bg-cyan-300 transition-colors"
          >
            Retour à l'accueil
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default NotFound

