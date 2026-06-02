import { useState } from 'react'
import { Mail, Phone, MapPin, MessageCircle, Clock } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-16">
        <div className="container">
          <h1 className="text-5xl font-bold mb-4">Nous Contacter</h1>
          <p className="text-xl text-blue-100">
            Avez des questions ? Nous sommes là pour vous aider.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
            {[
              {
                icon: <Mail className="text-blue-600" size={32} />,
                title: 'Email',
                content: 'contact@impactmental.fr',
              },
              {
                icon: <Phone className="text-purple-600" size={32} />,
                title: 'Téléphone',
                content: '+33 (0)1 23 45 67 89',
              },
              {
                icon: <MapPin className="text-red-600" size={32} />,
                title: 'Adresse',
                content: '123 Rue de la Paix, Paris',
              },
              {
                icon: <Clock className="text-green-600" size={32} />,
                title: 'Horaires',
                content: 'Lun-Ven: 9h-18h',
              },
            ].map((info, i) => (
              <div key={i} className="card text-center">
                <div className="flex justify-center mb-4">{info.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
                <p className="text-gray-600">{info.content}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="card">
              <h2 className="text-2xl font-bold mb-6">Envoyez-nous un message</h2>
              {submitted ? (
                <div className="bg-green-50 border-2 border-green-500 text-green-700 p-4 rounded-lg text-center">
                  <p className="font-semibold">✓ Message envoyé avec succès !</p>
                  <p>Nous vous répondrons dans les 24 heures.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Nom</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none"
                      placeholder="votre@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Sujet</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none"
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="question">Question générale</option>
                      <option value="inscription">Aide à l'inscription</option>
                      <option value="feedback">Retours d'expérience</option>
                      <option value="partnership">Partenariat</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none"
                      placeholder="Votre message..."
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full">
                    Envoyer le message
                  </button>
                </form>
              )}
            </div>

            {/* Map Placeholder */}
            <div className="card">
              <h2 className="text-2xl font-bold mb-6">Notre Localisation</h2>
              <div className="w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={48} className="mx-auto text-gray-400 mb-4" />
                  <p className="text-gray-600">Carte Google Maps</p>
                  <p className="text-sm text-gray-500 mt-2">Intégration à configurer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-20">
        <div className="container">
          <h2 className="section-title text-center">Questions Fréquemment Posées</h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {[
              { q: 'Quel est le meilleur moment pour me contacter ?', a: 'Vous pouvez nous contacter à tout moment. Nous répondons généralement en moins de 24 heures.' },
              { q: 'Proposez-vous des consultations gratuites ?', a: 'Oui, nous proposons une première consultation gratuite de 30 minutes pour discuter de vos besoins.' },
              { q: 'Comment puis-je revoir mes informations d\'inscription ?', a: 'Connectez-vous à votre compte et accédez à la section "Paramètres" pour modifier vos informations.' },
              { q: 'Y a-t-il un support client ?', a: 'Oui, notre équipe support est disponible du lundi au vendredi de 9h à 18h.' },
            ].map((item, i) => (
              <details key={i} className="card cursor-pointer">
                <summary className="font-semibold text-lg flex items-center gap-2">
                  <MessageCircle size={20} />
                  {item.q}
                </summary>
                <p className="mt-4 text-gray-600">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
