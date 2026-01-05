import { motion } from 'framer-motion'
import { useTheme } from '../contexts/ThemeContext'

const About = () => {
  const { theme } = useTheme()

  const values = [
    {
      icon: '🔒',
      title: 'Éthique avant tout',
      description: 'Tous mes tests sont réalisés dans des environnements autorisés et légaux.',
    },
    {
      icon: '🎯',
      title: 'Approche méthodique',
      description: 'OWASP, MITRE ATT&CK, et bonnes pratiques de l\'industrie.',
    },
    {
      icon: '📚',
      title: 'Apprentissage continu',
      description: 'Formation constante via HTB, TryHackMe, certifications et veille technologique.',
    },
    {
      icon: '🤝',
      title: 'Communication claire',
      description: 'Rapports accessibles avec explications claires des vulnérabilités et recommandations.',
    },
  ]

  return (
    <section className="min-h-screen py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            <span className="text-cyan-400">À propos</span> de moi
          </h1>

          <div className="space-y-6 mb-12 text-lg leading-relaxed">
            <p className={theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}>
              Passionné par la cybersécurité depuis plusieurs années, j'ai développé mes
              compétences à travers des plateformes comme Hack The Box, TryHackMe et Root-Me,
              complétées par une autoformation rigoureuse sur les méthodologies OWASP et MITRE
              ATT&CK.
            </p>
            <p className={theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}>
              Je me spécialise dans l'analyse de vulnérabilités, le pentesting web et la réponse
              aux incidents. Chaque projet que j'entreprends est une opportunité d'apprendre et
              d'améliorer mes compétences techniques tout en contribuant à renforcer la sécurité
              des organisations.
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Mes valeurs
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className={`p-6 rounded-lg border ${
                  theme === 'dark'
                    ? 'bg-slate-800 border-slate-700'
                    : 'bg-white border-slate-200'
                } hover:border-cyan-400 transition-colors`}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-cyan-400">
                  {value.title}
                </h3>
                <p className={theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

