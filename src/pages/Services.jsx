import { motion } from 'framer-motion'
import { useTheme } from '../contexts/ThemeContext'

const Services = () => {
  const { theme } = useTheme()

  const services = [
    {
      icon: '🔍',
      title: 'Audit de Sécurité',
      description:
        'Analyse complète de votre infrastructure pour identifier les vulnérabilités et proposer des recommandations concrètes.',
      features: ['Analyse OWASP Top 10', 'Rapport détaillé', 'Recommandations prioritaires'],
    },
    {
      icon: '🎯',
      title: 'Pentesting Web',
      description:
        'Tests d\'intrusion sur vos applications web pour évaluer leur résistance aux attaques.',
      features: ['Tests manuels et automatisés', 'Exploitation contrôlée', 'Write-up technique'],
    },
    {
      icon: '🛡️',
      title: 'Blue Team',
      description:
        'Mise en place et optimisation de vos défenses, monitoring et réponse aux incidents.',
      features: ['Configuration SIEM', 'Analyse de logs', 'Plan de réponse'],
    },
    {
      icon: '📚',
      title: 'Formation & Conseil',
      description:
        'Sensibilisation et formation de vos équipes aux bonnes pratiques de cybersécurité.',
      features: ['Ateliers pratiques', 'Documentation', 'Support continu'],
    },
  ]

  return (
    <section className="min-h-screen py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Mes <span className="text-cyan-400">Services</span>
          </h1>
          <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
            Des services professionnels adaptés à vos besoins en cybersécurité.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-8 rounded-lg border ${
                  theme === 'dark'
                    ? 'bg-slate-800 border-slate-700'
                    : 'bg-white border-slate-200'
                } hover:border-cyan-400 transition-all hover:shadow-lg`}
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-3 text-cyan-400">
                  {service.title}
                </h3>
                <p className={`mb-4 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-center gap-2 ${
                        theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
                      }`}
                    >
                      <span className="text-cyan-400">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-center"
          >
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-cyan-400 text-slate-900 rounded-lg font-semibold hover:bg-cyan-300 transition-colors"
            >
              Demander un devis
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services

