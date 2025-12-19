import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Services from '../components/Services';
import ProjectsGallery from '../components/ProjectsGallery';
import Team from '../components/Team';
import gc from '../assets/img/gc.webp';

import FloatingElements from '../components/ui/FloatingElements';

import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="relative">
      <FloatingElements />
      
      {/* Hero Section */}
      <section id="hero" className="relative">
        <Hero />
      </section>

      {/* Présentation de l'entreprise */}
      <section id="presentation" className="py-20 md:py-28 bg-gradient-to-b from-white to-seta-orange-50/20">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            {/* Grande Image à gauche */}
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-tr from-seta-orange-500/10 to-seta-green-500/10 z-10"></div>
              <img 
                src={gc} // Remplacez par votre image
                alt="SETATRAVAUX - Notre entreprise"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Badge décoratif */}
              <div className="absolute top-6 left-6 z-20">
                <div className="bg-gradient-to-r from-seta-orange-500 to-seta-green-500 text-white px-6 py-3 rounded-lg shadow-lg">
                  <span className="font-bold text-lg">Depuis 2008</span>
                </div>
              </div>
              
              {/* Effet de bordure */}
              <div className="absolute inset-0 border-4 border-white/30 rounded-2xl"></div>
            </div>

            {/* Texte de présentation à droite */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-seta-orange-600 to-seta-green-600 bg-clip-text text-transparent">
                    SETATRAVAUX
                  </span>
                  <br />
                  <span className="text-gray-800">Votre Partenaire de Confiance</span>
                </h2>
                
                <div className="w-24 h-1 bg-gradient-to-r from-seta-orange-500 to-seta-green-500 mb-6"></div>
              </div>

              <div className="space-y-6 text-gray-700">
                <p className="text-lg leading-relaxed">
                  Forts de <span className="font-bold text-seta-orange-600">15 ans d'expérience</span> dans le secteur du BTP, nous avons bâti notre réputation sur l'excellence, la fiabilité et l'innovation.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Notre équipe de <span className="font-bold text-seta-green-600">plus de 500 professionnels qualifiés</span> met son expertise au service de vos projets, qu'ils soient résidentiels, commerciaux ou industriels.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Chez SETATRAVAUX, chaque projet est unique. Nous combinons savoir-faire traditionnel et technologies modernes pour garantir des résultats qui dépassent vos attentes.
                </p>
              </div>

              {/* Points forts */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  { icon: "✓", text: "Expertise technique avérée", color: "text-seta-green-600" },
                  { icon: "✓", text: "Respect des délais", color: "text-seta-orange-600" },
                  { icon: "✓", text: "Qualité premium", color: "text-seta-green-600" },
                  { icon: "✓", text: "Support personnalisé", color: "text-seta-orange-600" }
                ].map((point, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <span className={`text-xl font-bold ${point.color}`}>{point.icon}</span>
                    <span className="text-gray-700 font-medium">{point.text}</span>
                  </div>
                ))}
              </div>

              {/* Bouton CTA */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="pt-6"
              >
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-seta-orange-500 to-seta-green-500 hover:from-seta-orange-600 hover:to-seta-green-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <span>Découvrir notre histoire</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Banner */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-16 bg-gradient-to-r from-seta-orange-500 to-seta-green-500"
      >
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: 50, suffix: '+', label: 'Projets Réalisés' },
              { value: 15, suffix: '+', label: "Années d'Expérience" },
              { value: 200, suffix: '+', label: 'Clients Satisfaits' },
              { value: 500, suffix: '+', label: 'Ouvriers Qualifiés' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-white/90 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Services */}
      <section id="services">
        <Services />
      </section>

      {/* Projects */}
      <section id="projects" className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-seta-orange-50/30 to-white"></div>
        <ProjectsGallery />
      </section>

      {/* Team */}
      <section id="team">
        <Team />
      </section>





      {/* Floating Contact Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-8 right-8 z-40"
      >
        <Link
          to="/contact"
          className="group relative flex items-center justify-center w-16 h-16 bg-gradient-to-br from-seta-orange-500 to-seta-green-500 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110"
        >
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center text-xs font-bold text-gradient">
            !
          </span>
        </Link>
      </motion.div>
    </div>
  );
};

export default Home;