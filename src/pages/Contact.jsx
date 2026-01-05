import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../contexts/ThemeContext'
import BubblesBackground from '../components/BubblesBackground'

const Contact = () => {
  const { theme } = useTheme()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          ...formData,
        }),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'samuellepinay54@gmail.com',
      link: 'mailto:samuellepinay54@gmail.com',
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'Bientôt disponible',
      link: null,
      unavailable: true,
    },
    {
      icon: '🐙',
      label: 'GitHub',
      value: 'github.com/AxASam-afk',
      link: 'https://github.com/AxASam-afk',
    },
    {
      icon: '💀',
      label: 'Hack The Box',
      value: 'Profil HTB',
      link: '#',
    },
  ]

  return (
    <section className="relative min-h-screen py-24 md:py-32 overflow-hidden">
      <BubblesBackground />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="text-cyan-400">Contact</span>
          </h1>
          <p className="text-center text-slate-400 mb-12">
            Disponible pour des opportunités en alternance, stage ou freelance en cybersécurité.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {contactInfo.map((info) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className={`p-6 rounded-lg border text-center ${
                  theme === 'dark'
                    ? 'bg-slate-800 border-slate-700'
                    : 'bg-white border-slate-200'
                }`}
              >
                <div className="text-4xl mb-3">{info.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-cyan-400">{info.label}</h3>
                {info.unavailable ? (
                  <div className="flex items-center justify-center gap-2 text-slate-400">
                    <span className="italic">{info.value}</span>
                    <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
                  </div>
                ) : (
                  <a
                    href={info.link}
                    target={info.link?.startsWith('http') ? '_blank' : undefined}
                    rel={info.link?.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`${
                      theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
                    } hover:text-cyan-400 transition-colors`}
                  >
                    {info.value}
                  </a>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`p-8 rounded-lg border ${
              theme === 'dark'
                ? 'bg-slate-800 border-slate-700'
                : 'bg-white border-slate-200'
            }`}
          >
            <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
              <input type="hidden" name="form-name" value="contact" />
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className={`block mb-2 font-semibold ${
                      theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                    }`}
                  >
                    Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      theme === 'dark'
                        ? 'bg-slate-900 border-slate-700 text-slate-300'
                        : 'bg-white border-slate-300 text-slate-900'
                    } focus:outline-none focus:border-cyan-400`}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className={`block mb-2 font-semibold ${
                      theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                    }`}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      theme === 'dark'
                        ? 'bg-slate-900 border-slate-700 text-slate-300'
                        : 'bg-white border-slate-300 text-slate-900'
                    } focus:outline-none focus:border-cyan-400`}
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className={`block mb-2 font-semibold ${
                    theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                  }`}
                >
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    theme === 'dark'
                      ? 'bg-slate-900 border-slate-700 text-slate-300'
                      : 'bg-white border-slate-300 text-slate-900'
                  } focus:outline-none focus:border-cyan-400`}
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className={`block mb-2 font-semibold ${
                    theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                  }`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    theme === 'dark'
                      ? 'bg-slate-900 border-slate-700 text-slate-300'
                      : 'bg-white border-slate-300 text-slate-900'
                  } focus:outline-none focus:border-cyan-400 resize-none`}
                />
              </div>

              {status === 'success' && (
                <div className="mb-4 p-4 bg-green-500 bg-opacity-20 text-green-400 rounded-lg">
                  Message envoyé avec succès !
                </div>
              )}

              {status === 'error' && (
                <div className="mb-4 p-4 bg-red-500 bg-opacity-20 text-red-400 rounded-lg">
                  Erreur lors de l'envoi. Veuillez réessayer.
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full px-6 py-3 bg-cyan-400 text-slate-900 rounded-lg font-semibold hover:bg-cyan-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Envoi en cours...' : 'Envoyer le message'}
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

