import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, Route, Wrench, PaintBucket, 
  ShieldCheck, TrendingUp, ArrowRight,
  CheckCircle, Clock, Users, Award
} from 'lucide-react';


const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: Building2,
      title: "Construction de Bâtiments",
      description: "Conception et construction de bâtiments résidentiels, commerciaux et industriels selon les normes internationales.",
      features: [
        "Bâtiments résidentiels de luxe",
        "Complexes commerciaux",
        "Usines et entrepôts",
        "Bureaux administratifs"
      ],
      color: "from-seta-orange-500 to-orange-600"
    },
    {
      icon: Route,
      title: "Routes & Infrastructures",
      description: "Construction et réhabilitation de routes, ponts et ouvrages d'art pour le développement urbain et rural.",
      features: [
        "Routes nationales et autoroutes",
        "Ponts et viaducs",
        "Réseaux d'assainissement",
        "Éclairage public"
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
        "Travaux maritimes"
      ],
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: PaintBucket,
      title: "Rénovation & Réhabilitation",
      description: "Modernisation et rénovation complète de structures existantes pour améliorer leur durabilité et esthétique.",
      features: [
        "Rénovation de bâtiments",
        "Restauration patrimoniale",
        "Renforcement structurel",
        "Modernisation d'infrastructures"
      ],
      color: "from-purple-500 to-pink-600"
    },
  ];

  const values = [
    {
      icon: ShieldCheck,
      title: "Qualité Garantie",
      description: "Respect strict des normes de qualité et de sécurité internationales"
    },
    {
      icon: Clock,
      title: "Respect des Délais",
      description: "Livraison dans les temps impartis avec un planning rigoureux"
    },
    {
      icon: Users,
      title: "Équipe Expert",
      description: "Ingénieurs et techniciens qualifiés avec années d'expérience"
    },
    {
      icon: Award,
      title: "Innovation",
      description: "Utilisation des dernières technologies et méthodes de construction"
    },
  ];

  // Créer une variable pour l'icône active
  const ActiveServiceIcon = services[activeService].icon;

  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-seta-orange-100 to-seta-green-100 rounded-full px-4 py-2 mb-6">
            <TrendingUp className="w-5 h-5 text-gradient" />
            <span className="font-semibold text-gradient">Nos Expertises</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Services de <span className="text-gradient">Génie Civil</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous offrons une gamme complète de services en génie civil, de la conception à la réalisation, 
            avec un engagement total envers la qualité et l'excellence.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {/* Services List */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => {
                const ServiceIcon = service.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setActiveService(index)}
                    className={`group cursor-pointer p-6 rounded-2xl border-2 transition-all duration-300 ${
                      activeService === index
                        ? 'border-seta-orange-500 bg-gradient-to-br from-white to-seta-orange-50 shadow-xl'
                        : 'border-gray-200 hover:border-seta-orange-300 hover:shadow-lg'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                        <ServiceIcon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-seta-orange-500 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {service.description}
                        </p>
                        <ul className="space-y-2">
                          {service.features.slice(0, 2).map((feature, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-seta-green-500" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${
                        activeService === index 
                          ? 'text-seta-orange-500 translate-x-2' 
                          : 'text-gray-400 group-hover:text-seta-orange-500'
                      }`} />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Service Detail */}
          <motion.div
            key={activeService}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className={`p-3 rounded-lg bg-gradient-to-br ${services[activeService].color}`}>
                <ActiveServiceIcon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold">{services[activeService].title}</h3>
            </div>
            
            <p className="text-gray-300 mb-8">
              {services[activeService].description}
            </p>
            
            <div className="space-y-4 mb-8">
              <h4 className="text-lg font-semibold">Points Forts :</h4>
              <ul className="space-y-3">
                {services[activeService].features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-seta-orange-500 to-seta-green-500"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <button className="w-full bg-white text-gray-900 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
              Demander un Devis
            </button>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl font-bold mb-12">
            Nos <span className="text-gradient">Valeurs</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const ValueIcon = value.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="relative inline-flex mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-seta-orange-100 to-seta-green-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <ValueIcon className="w-10 h-10 text-seta-green-600" />
                    </div>
                    <div className="absolute -inset-4 bg-gradient-to-r from-seta-orange-500 to-seta-green-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA */}

      </div>
    </section>
  );
};

export default Services;