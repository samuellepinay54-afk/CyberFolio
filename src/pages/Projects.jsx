import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../contexts/ThemeContext'

const Projects = () => {
  const { theme } = useTheme()
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [expandedId, setExpandedId] = useState(null)

  const getStaticProjects = () => [
    {
      id: 1,
      title: '🔐 Audit de Sécurité – Site E-commerce Shopify',
      description:
        'Audit de sécurité non intrusif d\'un site e-commerce Shopify pour identifier les faiblesses de configuration et évaluer la surface d\'attaque exposée.',
      tags: ['Audit', 'OWASP', 'Shopify', 'Blue Team'],
      link: '#',
      github: '#',
      featured: true,
    },
    {
      id: 2,
      title: 'Machine HTB - [Nom de la machine]',
      description:
        'Machine résolue avec accès root. Write-up publié sur GitHub avec méthodologie détaillée.',
      tags: ['Pentest', 'HTB', 'Linux', 'PrivEsc'],
      link: '#',
      github: '#',
    },
    {
      id: 3,
      title: 'CTF Challenge - Web Exploitation',
      description:
        'Résolution de challenges CTF avec focus sur l\'exploitation web et les vulnérabilités OWASP Top 10.',
      tags: ['CTF', 'Web', 'OWASP', 'Exploitation'],
      link: '#',
      github: '#',
    },
  ]

  useEffect(() => {
    // Load projects from Netlify Function or static data
    const loadProjects = async () => {
      try {
        // Try to fetch from Netlify Function
        const response = await fetch('/.netlify/functions/getProjects')
        if (response.ok) {
          const data = await response.json()
          setProjects(data)
        } else {
          // Fallback to static data
          setProjects(getStaticProjects())
        }
      } catch (error) {
        console.error('Error loading projects:', error)
        setProjects(getStaticProjects())
      } finally {
        setLoading(false)
      }
    }

    loadProjects()
  }, [])

  if (loading) {
    return (
      <section className="min-h-screen py-24 md:py-32 flex items-center justify-center">
        <div className="text-cyan-400 text-xl">Chargement des projets...</div>
      </section>
    )
  }

  return (
    <section className="min-h-screen py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Mes <span className="text-cyan-400">Projets</span>
          </h1>
          <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
            Découvrez mes réalisations en cybersécurité, du pentesting à l'audit de sécurité.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`rounded-lg border overflow-hidden transition-all ${
                  theme === 'dark'
                    ? 'bg-slate-800 border-slate-700'
                    : 'bg-white border-slate-200'
                } ${expandedId === project.id ? 'md:col-span-2 lg:col-span-3' : ''}`}
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-cyan-400">
                    {project.title}
                  </h3>
                  <p
                    className={`mb-4 ${
                      theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
                    }`}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full bg-cyan-400 bg-opacity-20 text-cyan-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        Voir le projet →
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        GitHub →
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

