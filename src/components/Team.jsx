import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, Award, Briefcase, Globe,
  Linkedin, Mail, Phone, Quote
} from 'lucide-react';


import image from '../assets/img/image.jpg';

const Team = () => {
  const [activeMember, setActiveMember] = useState(0);

  const directors = [
    {
      name: "M. Ousmane NDOUR",
      position: "Co-Fondateur",
      experience: "25+ ans d'expérience",
      description: "Ingénieur Civil diplômé de l'École Polytechnique de Thiès. Expert en gestion de grands projets d'infrastructure avec plus de 50 projets majeurs réalisés au Sénégal.",
      specialties: ["Gestion de Projet", "Stratégie d'Entreprise", "Relations Clients"],
      image: image,
      color: "from-seta-orange-500 to-orange-600"
    },
    {
      name: "M. Birame SENE",
      position: "Co-Fondateur",
      experience: "25+ ans d'expérience",
      description: "Ingénieure des Travaux Publics, spécialisée en contrôle qualité et gestion des équipes. Responsable de la supervision de tous les chantiers de l'entreprise.",
      specialties: ["Contrôle Qualité", "Gestion des Opérations", "Sécurité"],
      image: image,
      color: "from-seta-green-500 to-green-600"
    }
  ];

  const teamMembers = [
    {
      name: "Cheikh Sow",
      position: "Chef de Projet Senior",
      department: "Construction Bâtiment"
    },
    {
      name: "Moussa Fall",
      position: "Ingénieur Structures",
      department: "Calcul & Conception"
    },
    {
      name: "Fatou Bâ",
      position: "Responsable Qualité",
      department: "Contrôle & Certification"
    },
    {
      name: "Ibrahima Dia",
      position: "Chef de Chantier",
      department: "Exécution Travaux"
    },
    {
      name: "Khadidiatou Diagne",
      position: "Architecte",
      department: "Design & Planification"
    },
    {
      name: "Omar Gueye",
      position: "Responsable Sécurité",
      department: "Hygiène & Sécurité"
    }
  ];

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
            <Users className="w-5 h-5 text-gradient" />
            <span className="font-semibold text-gradient">Notre Équipe</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Rencontrez Nos <span className="text-gradient">Dirigeants</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une équipe d'experts passionnés, dirigée par des professionnels chevronnés du génie civil sénégalais.
          </p>
        </motion.div>

        {/* Directors Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {directors.map((director, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative group cursor-pointer ${
                  activeMember === index ? 'lg:scale-105' : ''
                } transition-transform duration-500`}
                onClick={() => setActiveMember(index)}
              >
                {/* Card */}
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${director.color} opacity-5`}></div>
                  
                  {/* Content */}
                  <div className="relative p-8">
                    <div className="flex flex-col lg:flex-row gap-8 items-center">
                      {/* Image */}
                      <div className="relative">
                        <div className="w-48 h-48 rounded-2xl overflow-hidden border-4 border-white shadow-lg">
                          <img
                            src={director.image}
                            alt={director.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                        </div>
                        <div className={`absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br ${director.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                          <Award className="w-8 h-8 text-white" />
                        </div>
                      </div>

                      {/* Info */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`p-2 rounded-lg bg-gradient-to-br ${director.color}`}>
                            <Briefcase className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-sm font-semibold text-gray-600">
                            {director.experience}
                          </span>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{director.name}</h3>
                        <div className="text-lg font-semibold text-gradient mb-4">{director.position}</div>
                        
                        <p className="text-gray-600 mb-6">{director.description}</p>
                        
                        {/* Specialties */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {director.specialties.map((specialty, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>

                        {/* Contact Icons */}
                        <div className="flex gap-4">
                          <button className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-seta-orange-100 hover:text-seta-orange-600 transition-colors">
                            <Linkedin className="w-5 h-5" />
                          </button>
                          <button className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-seta-green-100 hover:text-seta-green-600 transition-colors">
                            <Mail className="w-5 h-5" />
                          </button>
                          <button className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors">
                            <Phone className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Quote */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: activeMember === index ? 1 : 0, x: 0 }}
                      className="mt-8 pt-8 border-t border-gray-100"
                    >
                      <div className="flex items-start gap-4">
                        <Quote className="w-8 h-8 text-seta-orange-300 flex-shrink-0" />
                        <div>
                          <p className="text-lg italic text-gray-700">
                            "Notre engagement est de bâtir un Sénégal moderne et durable, un projet à la fois."
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Active Indicator */}
                {activeMember === index && (
                  <div className="absolute -inset-2 bg-gradient-to-r from-seta-orange-500 to-seta-green-500 rounded-3xl -z-10 blur-lg opacity-30"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team Members */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            Notre <span className="text-gradient">Équipe d'Experts</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="flex items-start gap-4">
                  {/* Avatar Placeholder */}
                  <div className="relative">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-seta-orange-100 to-seta-green-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <span className="text-2xl font-bold text-gradient">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-gradient-to-br from-seta-orange-500 to-seta-green-500 rounded-full flex items-center justify-center">
                      <Globe className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h4>
                    <div className="text-gradient font-semibold mb-2">{member.position}</div>
                    <div className="text-sm text-gray-600">{member.department}</div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Expérience</span>
                    <span className="font-semibold text-gradient">10+ ans</span>
                  </div>
                  <div className="flex justify-between text-sm mt-2">
                    <span className="text-gray-500">Projets</span>
                    <span className="font-semibold text-gradient">20+ réalisés</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Team;