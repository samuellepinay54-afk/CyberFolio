import { useTheme } from '../contexts/ThemeContext'

const Footer = () => {
  const { theme } = useTheme()

  return (
    <footer
      className={`py-8 mt-auto border-t ${
        theme === 'dark'
          ? 'bg-[#141b2d] border-slate-700 text-slate-400'
          : 'bg-white border-slate-200 text-slate-600'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2">
          <p>&copy; 2024 CyberFolio. Construit avec passion pour la cybersécurité.</p>
          <p className="text-sm">
            🔒 Tous les projets présentés ont été réalisés dans des environnements autorisés et légaux.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

