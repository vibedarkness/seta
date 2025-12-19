import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, History, Eye, Users, 
  Trophy, Globe, Shield, Heart,
  ChevronRight, Building, MapPin,
  Calendar, Award, TrendingUp
} from 'lucide-react';
import { Link } from 'react-router-dom';
import gc from '../assets/img/gc.webp';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "Nous visons l'excellence dans chaque projet avec des standards de qualité internationaux."
    },
    {
      icon: Shield,
      title: "Sécurité",
      description: "La sécurité de nos employés et de nos chantiers est notre priorité absolue."
    },
    {
      icon: Heart,
      title: "Engagement",
      description: "Engagés envers nos clients, nos employés et notre communauté sénégalaise."
    },
    {
      icon: Trophy,
      title: "Innovation",
      description: "Nous adoptons les dernières technologies et méthodes de construction modernes."
    }
  ];

  const milestones = [
    { year: "2008", title: "Fondation", description: "Création de SETA INTERNATIONAL SARL" },
    { year: "2012", title: "Expansion", description: "Premier grand projet national" },
    { year: "2015", title: "Certification", description: "Obtention ISO 9001:2015" },
    { year: "2018", title: "Croissance", description: "100 employés, 30 projets réalisés" },
    { year: "2021", title: "Innovation", description: "Adoption des technologies BIM" },
    { year: "2023", title: "Leader", description: "Leader du génie civil au Sénégal" }
  ];

  const achievements = [
    { number: "50+", label: "Projets réalisés", icon: Building },
    { number: "15+", label: "Années d'expérience", icon: Calendar },
    { number: "30+", label: "Clients satisfaits", icon: Users },
    { number: "12", label: "Certifications", icon: Award }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
<img 
            src={gc} // Remplacez par votre image
            alt="SETATRAVAUX - À propos de nous"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container-custom relative z-10 py-24 px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
              <History className="w-5 h-5 text-seta-orange-400" />
              <span className="font-semibold">À Propos de Nous</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-8">
              <span className="block">Notre Histoire,</span>
              <span className="bg-gradient-to-r from-seta-orange-400 to-seta-green-400 bg-clip-text text-transparent">
                Notre Vision
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-12 max-w-3xl leading-relaxed">
              Depuis 2008, SETA INTERNATIONAL SARL est le partenaire de confiance pour 
              les projets de génie civil les plus ambitieux au Sénégal. Notre engagement 
              envers l'excellence et l'innovation nous a permis de bâtir une réputation solide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/projects" className="btn-primary inline-flex items-center gap-2 group">
                Voir Nos Réalisations
                <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link to="/contact" className="btn-secondary">
                Nous Contacter
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Vision Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-seta-orange-50 to-orange-100 rounded-3xl p-8 md:p-12"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-xl bg-gradient-to-br from-seta-orange-500 to-orange-600">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Notre Mission</h2>
              </div>
              <p className="text-gray-700 text-lg mb-6">
                Fournir des solutions de génie civil innovantes et durables qui transforment 
                le paysage sénégalais, en respectant les plus hauts standards de qualité, 
                sécurité et respect de l'environnement.
              </p>
              <ul className="space-y-4">
                {[
                  "Délivrer des projets dans les délais et budgets impartis",
                  "Garantir la sécurité sur tous nos chantiers",
                  "Promouvoir le développement durable",
                  "Former et développer les talents locaux"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-seta-orange-500"></div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-seta-green-50 to-green-100 rounded-3xl p-8 md:p-12"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-xl bg-gradient-to-br from-seta-green-500 to-green-600">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Notre Vision</h2>
              </div>
              <p className="text-gray-700 text-lg mb-6">
                Devenir le leader incontesté du génie civil en Afrique de l'Ouest, reconnu 
                pour notre excellence technique, notre innovation et notre contribution au 
                développement économique de la région.
              </p>
              <ul className="space-y-4">
                {[
                  "Être le premier choix pour les projets d'infrastructure majeurs",
                  "Pionnier dans l'adoption de technologies de construction vertes",
                  "Créer 500 emplois supplémentaires d'ici 2025",
                  "Exporter notre expertise dans la sous-région"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-seta-green-500"></div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">
                Nos <span className="text-gradient">Valeurs</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Les principes qui guident chacune de nos actions et décisions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group text-center"
                >
                  <div className="relative inline-flex mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-seta-orange-100 to-seta-green-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <value.icon className="w-10 h-10 text-seta-green-600" />
                    </div>
                    <div className="absolute -inset-4 bg-gradient-to-r from-seta-orange-500 to-seta-green-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">
                Notre <span className="text-gradient">Parcours</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                15 ans d'excellence et d'innovation dans le génie civil sénégalais
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-seta-orange-500 to-seta-green-500"></div>

              {/* Milestones */}
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                      <div className={`inline-block p-6 rounded-2xl ${
                        index % 2 === 0 
                          ? 'bg-gradient-to-r from-seta-orange-50 to-orange-100' 
                          : 'bg-gradient-to-r from-seta-green-50 to-green-100'
                      }`}>
                        <div className={`text-2xl font-bold mb-2 ${
                          index % 2 === 0 ? 'text-seta-orange-600' : 'text-seta-green-600'
                        }`}>
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>
                    
                    {/* Timeline Dot */}
                    <div className="relative z-10">
                      <div className="w-8 h-8 bg-white border-4 border-gradient rounded-full"></div>
                      <div className="absolute inset-0 w-8 h-8 bg-gradient-to-r from-seta-orange-500 to-seta-green-500 rounded-full animate-ping opacity-20"></div>
                    </div>
                    
                    <div className="w-1/2"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-seta-orange-500 to-seta-green-500 rounded-3xl p-8 md:p-12 text-white"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">Nos Réalisations</h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Des chiffres qui témoignent de notre expertise et de notre croissance
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold mb-2">{achievement.number}</div>
                  <div className="text-white/90">{achievement.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;