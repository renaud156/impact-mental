import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Users, Target, Award } from 'lucide-react'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Transformez votre préparation mentale
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Maîtrisez votre esprit, atteignez vos objectifs. Des programmes scientifiquement prouvés pour développer votre mental d'acier.
            </p>
            <div className="flex gap-4">
              <Link to="/programs" className="btn-primary inline-block">
                Découvrir nos programmes <ArrowRight className="inline ml-2" size={20} />
              </Link>
              <Link to="/contact" className="btn-outline inline-block">
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="section-title text-center">Pourquoi nous choisir ?</h2>
          <p className="section-subtitle text-center">
            Une approche holistique basée sur la science du bien-être mental
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target size={32} className="text-blue-600 mb-4" />,
                title: 'Objectifs clairs',
                description: 'Définissez et atteignez vos objectifs avec une méthode structurée et éprouvée.'
              },
              {
                icon: <Users size={32} className="text-purple-600 mb-4" />,
                title: 'Communauté bienveillante',
                description: 'Rejoignez des milliers de personnes engagées dans leur développement personnel.'
              },
              {
                icon: <Award size={32} className="text-amber-600 mb-4" />,
                title: 'Résultats garantis',
                description: 'Plus de 95% de nos participants voient des résultats en 30 jours.'
              },
            ].map((feature, i) => (
              <div key={i} className="card">
                {feature.icon}
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Les bénéfices de la préparation mentale</h2>
              <ul className="space-y-4">
                {[
                  'Meilleure gestion du stress et de l\'anxiété',
                  'Confiance en soi accrue',
                  'Concentration et focus améliorés',
                  'Résilience face aux obstacles',
                  'Sommeil plus réparateur',
                  'Productivité maximale',
                ].map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
                    <span className="text-lg text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg h-96 flex items-center justify-center">
              <p className="text-gray-600 text-center">📊 Espace réservé pour image/vidéo</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-4">Prêt à commencer votre transformation ?</h2>
          <p className="text-xl text-blue-100 mb-8">Rejoignez nos programmes et découvrez le potentiel caché de votre esprit.</p>
          <Link to="/programs" className="btn-primary inline-block">
            Voir tous nos programmes
          </Link>
        </div>
      </section>
    </div>
  )
}
