import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { name: 'Accueil', path: '/' },
    { name: 'Programmes', path: '/programs' },
    { name: 'À propos', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            🧠 Impact Mental
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
