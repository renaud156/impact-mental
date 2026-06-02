import { Link } from 'react-router-dom'
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">🧠 Impact Mental</h3>
            <p className="text-sm">
              Préparez votre esprit, transformez votre vie.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white transition">Accueil</Link></li>
              <li><Link to="/programs" className="hover:text-white transition">Programmes</Link></li>
              <li><Link to="/about" className="hover:text-white transition">À propos</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} /> contact@impactmental.fr
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} /> +33 (0)1 23 45 67 89
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} /> Paris, France
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-4">Nous suivre</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition"><Facebook size={20} /></a>
              <a href="#" className="hover:text-white transition"><Twitter size={20} /></a>
              <a href="#" className="hover:text-white transition"><Instagram size={20} /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p>&copy; {currentYear} Impact Mental. Tous droits réservés.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition">Politique de confidentialité</a>
              <a href="#" className="hover:text-white transition">Conditions d'utilisation</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
