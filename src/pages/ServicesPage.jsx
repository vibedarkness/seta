import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, Route, Wrench, PaintBucket,
  Settings, Calculator, Shield, Zap,
  CheckCircle, Clock, Users, Award,
  ArrowRight, ChevronRight, Phone
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: Building2,
      title: "Construction Bâtiment",
      description: "Conception et construction complète de bâtiments résidentiels, commerciaux et industriels selon les normes internationales.",
      features: [
        "Bâtiments résidentiels de luxe",
        "Complexes commerciaux modernes",
        "Usines et entrepôts industriels",
        "Bureaux administratifs",
        "Établissements de santé",
        "Établissements éducatifs"
      ],
      process: [
        "Étude de faisabilité",
        "Conception architecturale",
        "Obtention des permis",
        "Construction",
        "Contrôle qualité",
        "Livraison clé en main"
      ],
      color: "from-seta-orange-500 to-orange-600"
    },
    {
      icon: Route,
      title: "Routes & Infrastructures",
      description: "Construction, réhabilitation et entretien de routes, ponts et ouvrages d'art pour le développement urbain et rural.",
      features: [
        "Routes nationales et autoroutes",
        "Ponts et viaducs",
        "Réseaux d'assainissement",
        "Éclairage public intelligent",
        "Signalisation routière",
        "Aménagement paysager"
      ],
      process: [
        "Analyse du terrain",
        "Ingénierie des travaux",
        "Préparation des sols",
        "Construction",
        "Contrôle des matériaux",
        "Mise en service"
      ],
      color: "from-seta-green-500 to-green-600"
    },
    {
      icon: Wrench,
      title: "Travaux Publics",
      description: "Réalisation de grands travaux d'infrastructure publique pour le développement durable du Sénégal.",
      features: [
        "Travaux hydrauliques",
        "Aménagement urbain",
        "Infrastructures portuaires",
        "Travaux maritimes",
        "Énergie renouvelable",
        "Traitement des eaux"
      ],
      process: [
        "Étude d'impact",
        "Planification",
        "Coordination",
        "Exécution",
        "Surveillance",
        "Maintenance"
      ],
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: PaintBucket,
      title: "Rénovation & Réhabilitation",
      description: "Modernisation et rénovation complète de structures existantes pour améliorer leur durabilité, sécurité et esthétique.",
      features: [
        "Rénovation de bâtiments",
        "Restauration patrimoniale",
        "Renforcement structurel",
        "Modernisation d'infrastructures",
        "Mise aux normes",
        "Amélioration énergétique"
      ],
      process: [
        "Diagnostic technique",
        "Conception des travaux",
        "Préparation du site",
        "Rénovation",
        "Contrôle qualité",
        "Remise en service"
      ],
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Calculator,
      title: "Études & Conseils",
      description: "Services d'ingénierie et de consultation technique pour vos projets de construction.",
      features: [
        "Études de faisabilité",
        "Design architectural",
        "Calcul de structures",
        "Gestion de projet",
        "Expertise technique",
        "Audit de sécurité"
      ],
      process: [
        "Analyse des besoins",
        "Étude technique",
        "Proposition de solutions",
        "Validation",
        "Accompagnement",
        "Suivi post-projet"
      ],
      color: "from-red-500 to-pink-600"
    },
    {
      icon: Shield,
      title: "Contrôle & Sécurité",
      description: "Services de contrôle qualité et de gestion de la sécurité sur les chantiers.",
      features: [
        "Contrôle qualité matériaux",
        "Inspection des travaux",
        "Formation sécurité",
        "Audit HSE",
        "Gestion des risques",
        "Conformité réglementaire"
      ],
      process: [
        "Évaluation des risques",
        "Plan de sécurité",
        "Surveillance continue",
        "Rapports d'inspection",
        "Formation continue",
        "Amélioration continue"
      ],
      color: "from-amber-500 to-yellow-600"
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Respect des Délais",
      description: "Planification rigoureuse pour une livraison dans les temps"
    },
    {
      icon: Award,
      title: "Qualité Garantie",
      description: "Normes internationales et matériaux de première qualité"
    },
    {
      icon: Users,
      title: "Équipe Expert",
      description: "Ingénieurs et techniciens hautement qualifiés"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Technologies de pointe et méthodes innovantes"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-seta-orange-500 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-seta-green-500 rounded-full translate-x-1/3 translate-y-1/3"></div>
        </div>

        <div className="container-custom relative z-10 py-24 px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
              <Settings className="w-5 h-5 text-seta-orange-400" />
              <span className="font-semibold">Nos Services</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-8">
              <span className="block">Solutions Complètes</span>
              <span className="bg-gradient-to-r from-seta-orange-400 to-seta-green-400 bg-clip-text text-transparent">
                en Génie Civil
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-12 max-w-3xl leading-relaxed">
              De la conception à la réalisation, nous offrons une gamme complète de services 
              en génie civil pour répondre à tous vos besoins de construction et d'infrastructure.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary inline-flex items-center gap-2 group">
                Demander un Devis
                <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
              <a href="#services" className="btn-secondary">
                Découvrir Nos Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Nos <span className="text-gradient">Domaines d'Expertise</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Chaque service est conçu pour répondre aux exigences les plus élevées 
              en matière de qualité, sécurité et durabilité.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActiveService(index)}
                className={`group cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${
                  activeService === index 
                    ? 'ring-2 ring-seta-orange-500 transform scale-105' 
                    : 'hover:-translate-y-2'
                }`}
              >
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${service.color}`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-gradient transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.slice(0, 3).map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-seta-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="flex items-center gap-2 text-seta-orange-600 font-semibold group-hover:text-seta-orange-700">
                    En savoir plus
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Detailed Service View */}
          <motion.div
            key={activeService}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-20"
          >
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <div className="flex items-center gap-4 mb-8">
  <div className={`p-4 rounded-2xl bg-gradient-to-br ${services[activeService].color}`}>
    {(() => {
      const IconComponent = services[activeService].icon;
      return <IconComponent className="w-8 h-8 text-white" />;
    })()}
  </div>
  <h3 className="text-3xl font-bold text-gray-900">
    {services[activeService].title}
  </h3>
</div>
                  
                  <p className="text-lg text-gray-700 mb-8">
                    {services[activeService].description}
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Caractéristiques</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {services[activeService].features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${services[activeService].color}`}></div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Notre Processus</h4>
                  <div className="space-y-4">
                    {services[activeService].process.map((step, index) => (
                      <motion.div
                        key={step}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-200"
                      >
                        <div className={`px-3 py-1 rounded-lg bg-gradient-to-br ${services[activeService].color} text-white font-bold`}>
                          {index + 1}
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">{step}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-12 pt-12 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      Intéressé par ce service ?
                    </h4>
                    <p className="text-gray-600">
                      Contactez-nous pour un devis personnalisé
                    </p>
                  </div>
                  <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    Demander un Devis
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">
                Pourquoi <span className="text-gradient">Nous Choisir</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Notre engagement envers l'excellence fait la différence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group text-center"
                >
                  <div className="relative inline-flex mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-seta-orange-100 to-seta-green-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <benefit.icon className="w-10 h-10 text-seta-green-600" />
                    </div>
                    <div className="absolute -inset-4 bg-gradient-to-r from-seta-orange-500 to-seta-green-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-seta-orange-500 to-seta-green-500 p-8 md:p-12"
          >
            <div className="relative z-10 text-center text-white">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Prêt à Lancer Votre Projet ?
              </h3>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Notre équipe d'experts est prête à vous accompagner dans la réalisation 
                de votre projet de construction.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="bg-white text-gray-900 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Demander une Consultation
                </Link>
                <a href="tel:+221331234567" className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                  Appelez-nous Maintenant
                </a>
              </div>
            </div>
            
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3"></div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;