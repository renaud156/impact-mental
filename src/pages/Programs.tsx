import { CheckCircle, Clock, Users, Award } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Programs() {
  const programs = [
    {
      id: 1,
      name: 'Foundation',
      duration: '4 semaines',
      price: '49€',
      level: 'Débutant',
      description: 'Les bases de la préparation mentale pour tous.',
      features: [
        'Techniques de respiration',
        'Méditation guidée quotidienne',
        'Gestion du stress',
        'Accès à la communauté',
      ],
      color: 'blue'
    },
    {
      id: 2,
      name: 'Performance',
      duration: '8 semaines',
      price: '99€',
      level: 'Intermédiaire',
      description: 'Optimisez vos performances mentales et physiques.',
      features: [
        'Visualisation mentale avancée',
        'Gestion des émotions',
        'Focus et concentration',
        'Plans d\'entraînement personnalisés',
        'Sessions groupe hebdomadaires',
      ],
      color: 'purple',
      popular: true
    },
    {
      id: 3,
      name: 'Elite',
      duration: '12 semaines',
      price: '199€',
      level: 'Avancé',
      description: 'Programme complet pour atteindre l\'excellence mentale.',
      features: [
        'Tout du programme Performance',
        'Coaching 1-on-1 mensuel',
        'Accès illimité aux ressources',
        'Certification reconnue',
        'Accès communauté VIP',
        'Garantie satisfaction 100%',
      ],
      color: 'amber'
    },
  ]

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-16">
        <div className="container">
          <h1 className="text-5xl font-bold mb-4">Nos Programmes</h1>
          <p className="text-xl text-blue-100">
            Choisissez le programme qui correspond à vos objectifs et à votre niveau.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program) => (
              <div
                key={program.id}
                className={`card relative flex flex-col h-full ${
                  program.popular ? 'ring-2 ring-purple-600 md:scale-105' : ''
                }`}
              >
                {program.popular && (
                  <div className="absolute top-0 right-0 bg-purple-600 text-white px-4 py-1 rounded-bl-lg text-sm font-bold">
                    Populaire
                  </div>
                )}

                <div>
                  <h3 className="text-2xl font-bold mb-2">{program.name}</h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>

                  <div className="mb-6 space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Clock size={16} /> {program.duration}
                    </div>
                    <div className="flex items-center gap-2">
                      <Award size={16} /> Niveau {program.level}
                    </div>
                  </div>

                  <div className="mb-6 pb-6 border-b">
                    <span className="text-4xl font-bold">{program.price}</span>
                    <span className="text-gray-600 ml-2">/programme</span>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {program.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  program.popular
                    ? 'bg-purple-600 text-white hover:bg-purple-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  S'inscrire maintenant
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-20">
        <div className="container">
          <h2 className="section-title text-center">Questions fréquentes</h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {[
              { q: 'Puis-je accéder au contenu à tout moment ?', a: 'Oui, tous nos programmes sont accessibles 24/7 après votre inscription.' },
              { q: 'Y a-t-il une garantie de remboursement ?', a: 'Nous offrons une garantie satisfaction de 30 jours sans questions.' },
              { q: 'Quel est le niveau requis ?', a: 'Aucun prérequis. Nos programmes sont conçus pour tous les niveaux.' },
              { q: 'Puis-je changer de programme ?', a: 'Oui, vous pouvez upgrader votre programme à tout moment.' },
            ].map((item, i) => (
              <details key={i} className="card cursor-pointer">
                <summary className="font-semibold text-lg">{item.q}</summary>
                <p className="mt-4 text-gray-600">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
