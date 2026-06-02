import { Heart, Brain, Zap, Users } from 'lucide-react'

export default function About() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-16">
        <div className="container">
          <h1 className="text-5xl font-bold mb-4">À Propos d'Impact Mental</h1>
          <p className="text-xl text-blue-100">
            Notre mission : transformer des vies à travers la préparation mentale.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="section-title">Notre Mission</h2>
              <p className="text-lg text-gray-700 mb-4">
                Impact Mental est fondé sur la conviction que chacun possède un potentiel mental illimité. Notre mission est de fournir des outils, des techniques et du soutien pour aider les individus à libérer ce potentiel.
              </p>
              <p className="text-lg text-gray-700">
                Nous croyons que la préparation mentale est la clé du succès dans tous les domaines de la vie : sport, carrière, relations personnelles et bien-être général.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg h-96 flex items-center justify-center">
              <Brain size={128} className="text-purple-600" />
            </div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <h2 className="col-span-full section-title text-center">Nos Valeurs</h2>
            {[
              {
                icon: <Heart size={32} className="text-red-500" />,
                title: 'Bienveillance',
                description: 'Nous mettons le bien-être de nos utilisateurs au cœur de tout ce que nous faisons.'
              },
              {
                icon: <Brain size={32} className="text-blue-600" />,
                title: 'Rigueur Scientifique',
                description: 'Tous nos programmes sont basés sur les dernières recherches en psychologie et neurosciences.'
              },
              {
                icon: <Zap size={32} className="text-amber-500" />,
                title: 'Excellence',
                description: 'Nous visons l\'excellence dans chaque aspect de nos services et contenus.'
              },
              {
                icon: <Users size={32} className="text-green-500" />,
                title: 'Communauté',
                description: 'Nous construisons une communauté forte et bienveillante de personnes motivées.'
              },
            ].map((value, i) => (
              <div key={i} className="card">
                {value.icon}
                <h3 className="text-xl font-bold mt-4 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '50K+', label: 'Utilisateurs actifs' },
              { number: '95%', label: 'Taux de satisfaction' },
              { number: '500+', label: 'Heures de contenu' },
              { number: '15+', label: 'Années d\'expérience' },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-4xl font-bold mb-2">{stat.number}</p>
                <p className="text-blue-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-20">
        <div className="container">
          <h2 className="section-title text-center">Notre Équipe</h2>
          <p className="section-subtitle text-center">
            Des experts passionnés par la préparation mentale
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Marie Dupont',
                role: 'Fondatrice & Coach Principal',
                bio: 'Spécialiste en psychologie du sport avec 15 ans d\'expérience.'
              },
              {
                name: 'Thomas Laurent',
                role: 'Psychologue Clinicien',
                bio: 'Expert en gestion du stress et résilience mentale.'
              },
              {
                name: 'Sophie Martin',
                role: 'Coach en Développement Personnel',
                bio: 'Spécialiste en motivation et atteinte d\'objectifs.'
              },
            ].map((member, i) => (
              <div key={i} className="card text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-purple-600 font-semibold mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
