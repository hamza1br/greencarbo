import React from 'react';
import SEO from '@/Components/SEO.jsx';
import { ChevronDown, Mail, Phone, MapPin, Leaf, LineChart, Target, Users, ArrowRight } from 'lucide-react';

const GreenCarboHome = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">GreenCarbo</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-600 hover:text-green-600 transition-colors">Services</a>
              <a href="#about" className="text-gray-600 hover:text-green-600 transition-colors">À propos</a>
              <a href="#contact" className="text-gray-600 hover:text-green-600 transition-colors">Contact</a>
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                Demander un devis
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Construisons ensemble un avenir durable
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              GreenCarbo vous accompagne dans votre transition écologique avec des solutions concrètes et mesurables.
            </p>
            <div className="flex space-x-4">
              <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center">
                Découvrir nos services
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="px-6 py-3 border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors">
                En savoir plus
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <LineChart className="h-8 w-8 text-green-600" />,
                title: "Évaluation d'impact",
                description: "Mesurez et analysez votre empreinte environnementale pour identifier les axes d'amélioration."
              },
              {
                icon: <Target className="h-8 w-8 text-green-600" />,
                title: "Stratégie bas-carbone",
                description: "Développez une feuille de route alignée sur les objectifs climatiques internationaux."
              },
              {
                icon: <Users className="h-8 w-8 text-green-600" />,
                title: "Formation RSE",
                description: "Sensibilisez vos équipes aux enjeux environnementaux et aux bonnes pratiques."
              }
            ].map((service, index) => (
              <div key={index} className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Leaf className="h-6 w-6 text-green-400" />
                <span className="ml-2 text-lg font-bold">GreenCarbo</span>
              </div>
              <p className="text-gray-400">
                Votre partenaire pour une transition écologique réussie.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center">
                  <Mail className="h-5 w-5 mr-2" />
                  contact@greencarbo.fr
                </p>
                <p className="flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  +33 1 23 45 67 89
                </p>
                <p className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  Paris, France
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Évaluation d'impact</li>
                <li>Stratégie bas-carbone</li>
                <li>Formation RSE</li>
                <li>Reporting ESG</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Légal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Mentions légales</li>
                <li>Politique de confidentialité</li>
                <li>CGU</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 GreenCarbo. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GreenCarboHome;