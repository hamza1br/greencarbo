import React, { useState } from 'react';
import '../../css/app.css'; 
import { Leaf, LineChart, Target, Users, Rocket, Brain, FileCheck, ArrowRight, CheckCircle, Award, TrendingUp } from 'lucide-react';

const GreenCarboHome = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    entreprise: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
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
              <Leaf className="h-6 w-6 text-green-600" />
              <span className="ml-2 text-xl font-semibold text-gray-800">GreenCarbo</span>
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
          <h2 className="text-3xl font-bold text-center mb-12">Notre Impact</h2>
          <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 shadow-sm">
            <div className="space-y-8">
              {[
                {
                  title: "Réduction des émissions",
                  description: "Nos clients ont réduit leurs émissions de CO2 de 45% en moyenne"
                },
                {
                  title: "Économies réalisées",
                  description: "Plus de 2M€ d'économies générées grâce à l'optimisation des ressources"
                },
                {
                  title: "Engagement des employés",
                  description: "87% des employés plus engagés après nos formations RSE"
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-green-100 rounded-full p-2 mr-4">
                    <Target className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Contactez-nous</h2>
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
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
                className="w-full px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center"
              >
                Envoyer le message
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GreenCarboHome;