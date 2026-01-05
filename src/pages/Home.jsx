import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTheme } from '../contexts/ThemeContext'
import BubblesBackground from '../components/BubblesBackground'
import CodeTerminal from '../components/CodeTerminal'

const Home = () => {
  const { theme } = useTheme()

  const stats = [
    { number: '15+', label: 'Projets sécurité' },
    { number: '20+', label: 'Machines HTB' },
    { number: '3', label: 'Certifications' },
  ]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <BubblesBackground />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24 md:pt-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className={theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}>
                Bonjour, je suis
              </span>
              <br />
              <span className="text-cyan-400">Lexiu</span>
            </h1>
            <h2 className="text-xl md:text-2xl mb-6 text-slate-400">
              Cybersecurity Analyst | Pentest & Blue Team
            </h2>
            <p className="text-lg mb-8 text-slate-300 leading-relaxed">
              Passionné par la cybersécurité offensive et défensive, je transforme les
              vulnérabilités en opportunités d'amélioration continue. Spécialisé dans
              l'analyse de sécurité, le pentesting et la réponse aux incidents.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Link
                to="/projects"
                className="px-6 py-3 bg-cyan-400 text-slate-900 rounded-lg font-semibold hover:bg-cyan-300 transition-colors"
              >
                Voir les projets
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-colors"
              >
                Me contacter
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-cyan-400">{stat.number}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:block"
          >
            <CodeTerminal />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Home

