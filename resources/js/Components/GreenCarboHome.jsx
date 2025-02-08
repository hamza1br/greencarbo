import React, { useState } from 'react';
import '../../css/app.css'; 
import logo from "../assets/logo.png";
import { Leaf, LineChart, Target, Users, Rocket, Brain, FileCheck, ArrowRight, CheckCircle, Award, TrendingUp } from 'lucide-react';
import img1 from "../assets/img1.jpg";
import im3 from "../assets/im3.jpg";
import axios from 'axios';

const GreenCarboHome = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    entreprise: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    submitting: false,
    success: null,
    error: null
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: null, error: null });

    try {
      const response = await axios.post('/contact', formData);
      setStatus({
        submitting: false,
        success: response.data.message,
        error: null
      });
      // Réinitialiser le formulaire
      setFormData({
        nom: '',
        email: '',
        entreprise: '',
        message: ''
      });
    } catch (error) {
      setStatus({
        submitting: false,
        success: null,
        error: error.response?.data?.message || 'Une erreur est survenue'
      });
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('hero')}>
            <img 
              src={logo} 
              alt="GreenCarbo Logo"
              className="h-20 w-29 object-contain"
              // Added object-contain for proper scaling
            />
          </div>
            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('apropos')} className="text-gray-600 hover:text-green-600 transition-colors">
                À propos
              </button>
              <button onClick={() => scrollToSection('services')} className="text-gray-600 hover:text-green-600 transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection('impact')} className="text-gray-600 hover:text-green-600 transition-colors">
                Notre Impact
              </button>
              <button onClick={() => scrollToSection('contact')} 
                className="px-5 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium">
                Nous Contacter
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      

      {/* À propos Section */}
      <section id="hero" className="relative min-h-screen pt-20 overflow-hidden">
        {/* Background gradient and pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-blue-50 to-white">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,...')] opacity-30" />
        </div>
        
        <div className="container mx-auto px-6 h-full">
          <div className="grid md:grid-cols-2 gap-12 items-center min-h-[calc(100vh-80px)]">
            {/* Left content */}
            <div className="relative z-10 space-y-8">
              <div className="inline-flex items-center bg-green-100 rounded-full px-4 py-2 text-green-700">
                <Leaf className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">Stratégie RSE & Développement Durable</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Construisons ensemble un{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                  avenir durable
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                Créée en 2024, GreenCarbo est votre partenaire expert en stratégie RSE, 
                dédié à la réduction de votre empreinte carbone et à l'intégration de 
                pratiques durables dans votre entreprise.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('services')}
                  className="px-8 py-4 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors flex items-center justify-center font-medium group"
                >
                  Découvrir nos services
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button 
                  onClick={() => scrollToSection('apropos')}
                  className="px-8 py-4 border-2 border-green-600 text-green-600 rounded-xl hover:bg-green-50 transition-colors font-medium"
                >
                  En savoir plus
                </button>
              </div>
            </div>

            {/* Right side decorative elements */}
            <div className="relative hidden md:block">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative w-96 h-96">
                  {/* Background circles */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-200 to-blue-200 rounded-full opacity-20 animate-pulse" />
                  <div className="absolute inset-4 bg-gradient-to-br from-green-300 to-blue-300 rounded-full opacity-20 animate-pulse delay-150" />
                  <div className="absolute inset-8 bg-gradient-to-br from-green-400 to-blue-400 rounded-full opacity-20 animate-pulse delay-300" />
                  
                  {/* Center icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Leaf className="h-24 w-24 text-green-600" />
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute top-1/4 left-1/4 bg-white p-4 rounded-xl shadow-lg animate-float">
                <Target className="h-8 w-8 text-green-600" />
              </div>
              <div className="absolute bottom-1/4 right-1/4 bg-white p-4 rounded-xl shadow-lg animate-float delay-150">
                <LineChart className="h-8 w-8 text-blue-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 rounded-full border-2 border-green-600 flex items-center justify-center">
            <div className="w-2 h-2 bg-green-600 rounded-full" />
          </div>
        </div>
      </section>
      <section id="apropos" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          {/* Vision Card */}
          <div className="bg-green-50/50 rounded-3xl p-8 mb-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Notre Vision</h3>
            <p className="text-gray-600 leading-relaxed max-w-3xl">
              Chez GreenCarbo, nous croyons en un futur où la performance économique va de pair 
              avec la responsabilité environnementale. Notre expertise en RSE transforme vos 
              engagements en actions concrètes et mesurables.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-12 mb-24">
            {[
              {
                icon: <Users className="h-6 w-6 text-green-600" />,
                number: "150+",
                label: "Entreprises Accompagnées"
              },
              {
                icon: <Target className="h-6 w-6 text-green-600" />,
                number: "45%",
                label: "Réduction Moyenne des Émissions"
              },
              {
                icon: <Award className="h-6 w-6 text-green-600" />,
                number: "98%",
                label: "Clients Satisfaits"
              },
              {
                icon: <LineChart className="h-6 w-6 text-green-600" />,
                number: "25+",
                label: "Experts RSE"
              }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-green-100 rounded-full p-3">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Expertise Section */}
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-green-100 rounded-full px-4 py-2 text-green-700 mb-6">
              <Leaf className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Pourquoi GreenCarbo ?</span>
            </div>

            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              L'expertise au service de votre transition écologique
            </h2>

            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              Notre approche unique combine expertise technique, innovation et 
              accompagnement personnalisé pour répondre aux défis environnementaux 
              spécifiques de votre entreprise.
            </p>

            <div className="space-y-8 mb-12">
              {[
                {
                  title: "Expertise Reconnue",
                  description: "Une équipe de spécialistes certifiés en environnement et développement durable"
                },
                {
                  title: "Approche Sur Mesure",
                  description: "Des solutions adaptées à votre secteur d'activité et vos objectifs spécifiques"
                },
                {
                  title: "Résultats Mesurables",
                  description: "Des indicateurs clairs et un suivi précis de votre progression"
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <button 
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors group"
            >
              Discuter de votre projet
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <LineChart className="h-8 w-8 text-green-600" />,
                title: "Évaluation des impacts",
                description: "Analyse approfondie de votre empreinte environnementale pour identifier les opportunités d'amélioration."
              },
              {
                icon: <Target className="h-8 w-8 text-green-600" />,
                title: "Stratégie bas-carbone",
                description: "Développement de plans d'action alignés sur les objectifs climatiques internationaux."
              },
              {
                icon: <FileCheck className="h-8 w-8 text-green-600" />,
                title: "Reporting ESG",
                description: "Préparation de rapports extra-financiers conformes aux normes internationales."
              },
              {
                icon: <Brain className="h-8 w-8 text-green-600" />,
                title: "Formation RSE",
                description: "Programmes de sensibilisation et formation pour vos équipes."
              },
              {
                icon: <Rocket className="h-8 w-8 text-green-600" />,
                title: "Innovation Durable",
                description: "Solutions innovantes pour réduire votre impact environnemental."
              },
              {
                icon: <Users className="h-8 w-8 text-green-600" />,
                title: "Accompagnement",
                description: "Support continu dans votre démarche de transition écologique."
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

      {/* Impact Section */}
      <section id="impact" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Embarquer vos collaborateurs sur <br/>
            la RSE, c'est aussi :
          </h2>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Image côté gauche */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg h-[400px]">
              <img 
                src={img1} 
                alt="Collaboration RSE" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Contenu côté droit */}
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-gray-900">
                Améliorer votre marque employeur
              </h3>

              <div className="space-y-6">
                {[
                  {
                    title: "Attirer et retenir les talents",
                    description: "Développez une culture d'entreprise attractive et engageante"
                  },
                  {
                    title: "Améliorer votre réputation",
                    description: "Renforcez votre image d'entreprise responsable"
                  },
                  {
                    title: "Accroître la satisfaction",
                    description: "Répondez aux attentes de vos collaborateurs en quête de sens"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                        <Target className="w-6 h-6 text-green-600" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Deuxième bloc avec ordre inversé */}
          <div className="mt-24 grid md:grid-cols-2 gap-16 items-center">
            {/* Contenu côté gauche */}
            <div className="space-y-8 order-2 md:order-1">
              <h3 className="text-3xl font-bold text-gray-900">
                Optimiser votre performance
              </h3>

              <div className="space-y-6">
                {[
                  {
                    title: "Réduire vos coûts",
                    description: "Optimisez votre consommation d'énergie et vos ressources"
                  },
                  {
                    title: "Innover durablement",
                    description: "Développez des solutions respectueuses de l'environnement"
                  },
                  {
                    title: "Mesurer vos progrès",
                    description: "Suivez vos indicateurs de performance environnementale"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                        <Target className="w-6 h-6 text-green-600" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image côté droit */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg h-[400px] order-1 md:order-2">
              <img 
                src={im3} 
                alt="Performance RSE" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-green-100 rounded-full px-4 py-2 text-green-700 mb-4">
              <Users className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Parlons de votre projet</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">Contactez-nous</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Notre équipe d'experts est à votre écoute pour vous accompagner dans votre démarche RSE
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 bg-green-50 rounded-xl">
                <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-gray-600">contact@greencarbo.fr</p>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-xl">
                <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">Téléphone</h3>
                <p className="text-gray-600">+33 1 23 45 67 89</p>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-xl">
                <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">Bureau</h3>
                <p className="text-gray-600">Paris, France</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Affichage des messages de statut */}
                {status.error && (
                  <div className="p-4 bg-red-50 text-red-600 rounded-lg">
                    {status.error}
                  </div>
                )}
                {status.success && (
                  <div className="p-4 bg-green-50 text-green-600 rounded-lg">
                    {status.success}
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                      value={formData.nom}
                      onChange={(e) => setFormData({...formData, nom: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email professionnel
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Entreprise
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    value={formData.entreprise}
                    onChange={(e) => setFormData({...formData, entreprise: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Votre message
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status.submitting}
                  className="w-full px-6 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all flex items-center justify-center group disabled:opacity-50"
                >
                  {status.submitting ? 'Envoi en cours...' : 'Envoyer le message'}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-sm text-gray-500 text-center mt-4">
                  * Champs obligatoires
                </p>
              </form>
            </div>
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
                  <Leaf className="h-5 w-5 mr-2" />
                  contact@greencarbo.fr
                </p>
                <p className="flex items-center">
                  <Leaf className="h-5 w-5 mr-2" />
                  +33 1 23 45 67 89
                </p>
                <p className="flex items-center">
                  <Leaf className="h-5 w-5 mr-2" />
                  Paris, France
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Évaluation carbone</li>
                <li>Stratégie RSE</li>
                <li>Formation</li>
                <li>Accompagnement</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Légal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Mentions légales</li>
                <li>Confidentialité</li>
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