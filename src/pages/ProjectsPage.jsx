import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Filter, Search, MapPin, Calendar, 
  Users, DollarSign, Building, CheckCircle,
  X, ChevronRight, Award, TrendingUp,
  Eye, Download, Share2, Maximize2
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  const categories = [
    { id: 'all', name: 'Tous les Projets' },
    { id: 'residential', name: 'Résidentiel', icon: '🏠' },
    { id: 'commercial', name: 'Commercial', icon: '🏢' },
    { id: 'infrastructure', name: 'Infrastructure', icon: '🛣️' },
    { id: 'industrial', name: 'Industriel', icon: '🏭' },
    { id: 'public', name: 'Public', icon: '🏛️' },
    { id: 'renovation', name: 'Rénovation', icon: '🔨' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Complexe Résidentiel "Les Almadies"',
      category: 'residential',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800',
      location: 'Almadies, Dakar',
      year: '2023',
      duration: '24 mois',
      budget: '15M €',
      size: '25 000 m²',
      client: 'Groupe Immobilier Dakarois',
      status: 'completed',
      description: 'Construction d\'un complexe résidentiel de luxe de 5 tours de 15 étages avec piscine, spa et services haut de gamme.',
      features: [
        '5 tours de 15 étages',
        '200 appartements',
        'Piscine olympique',
        'Spa et fitness',
        'Parking souterrain',
        'Sécurité 24/7'
      ],
      stats: [
        { label: 'Surface', value: '25 000 m²' },
        { label: 'Durée', value: '24 mois' },
        { label: 'Budget', value: '15M €' },
        { label: 'Équipe', value: '250 personnes' }
      ]
    },
    {
      id: 2,
      title: 'Pont Autoroutier de Thiès',
      category: 'infrastructure',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800',
      location: 'Thiès, Sénégal',
      year: '2022',
      duration: '18 mois',
      budget: '8M €',
      size: '500 m',
      client: 'Ministère des Transports',
      status: 'completed',
      description: 'Construction d\'un pont autoroutier de 500m permettant de désengorger le trafic dans la région de Thiès.',
      features: [
        'Longueur: 500m',
        '4 voies de circulation',
        'Éclairage LED',
        'Système de drainage',
        'Protection anti-corrosion',
        'Surveillance électronique'
      ],
      stats: [
        { label: 'Longueur', value: '500 m' },
        { label: 'Durée', value: '18 mois' },
        { label: 'Budget', value: '8M €' },
        { label: 'Capacité', value: '20k véhicules/jour' }
      ]
    },
    {
      id: 3,
      title: 'Centre Commercial "Diamniadio Mall"',
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=800',
      location: 'Diamniadio, Dakar',
      year: '2023',
      duration: '30 mois',
      budget: '25M €',
      size: '45 000 m²',
      client: 'Diamniadio Development',
      status: 'completed',
      description: 'Plus grand centre commercial d\'Afrique de l\'Ouest avec 200 boutiques, cinéma, restaurants et parc de loisirs.',
      features: [
        '200 boutiques',
        '12 salles de cinéma',
        'Food court',
        'Parking 1500 places',
        'Parc de loisirs',
        'WiFi gratuit'
      ],
      stats: [
        { label: 'Surface', value: '45 000 m²' },
        { label: 'Durée', value: '30 mois' },
        { label: 'Budget', value: '25M €' },
        { label: 'Emplois', value: '1500 créés' }
      ]
    },
    {
      id: 4,
      title: 'Usine Agro-alimentaire Kaolack',
      category: 'industrial',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800',
      location: 'Kaolack, Sénégal',
      year: '2021',
      duration: '20 mois',
      budget: '12M €',
      size: '30 000 m²',
      client: 'Agro-Industries Sénégal',
      status: 'completed',
      description: 'Construction d\'une usine moderne de transformation agro-alimentaire avec technologies de pointe.',
      features: [
        'Lignes de production automatisées',
        'Unités de conditionnement',
        'Entrepôts frigorifiques',
        'Station de traitement des eaux',
        'Bureaux administratifs',
        'Logements du personnel'
      ],
      stats: [
        { label: 'Surface', value: '30 000 m²' },
        { label: 'Durée', value: '20 mois' },
        { label: 'Budget', value: '12M €' },
        { label: 'Production', value: '50 tonnes/jour' }
      ]
    },
    {
      id: 5,
      title: 'Rénovation Hôpital Principal de Dakar',
      category: 'renovation',
      image: 'https://images.unsplash.com/photo-1586773860418-dc22f8b874bc?auto=format&fit=crop&w=800',
      location: 'Dakar Plateau',
      year: '2020',
      duration: '36 mois',
      budget: '18M €',
      size: '60 000 m²',
      client: 'Ministère de la Santé',
      status: 'completed',
      description: 'Rénovation complète et modernisation du plus grand hôpital public du Sénégal.',
      features: [
        'Nouvelles salles d\'opération',
        'Unités de soins intensifs',
        'Système HVAC moderne',
        'Éclairage médical',
        'Ascenseurs médicaux',
        'Système d\'urgence'
      ],
      stats: [
        { label: 'Surface', value: '60 000 m²' },
        { label: 'Durée', value: '36 mois' },
        { label: 'Budget', value: '18M €' },
        { label: 'Lits', value: '800 mis à niveau' }
      ]
    },
    {
      id: 6,
      title: 'Stade Régional de Saint-Louis',
      category: 'public',
      image: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=800',
      location: 'Saint-Louis, Sénégal',
      year: '2022',
      duration: '22 mois',
      budget: '10M €',
      size: '35 000 m²',
      client: 'Ministère des Sports',
      status: 'completed',
      description: 'Construction d\'un stade multifonctionnel de 10 000 places avec pistes d\'athlétisme et installations sportives.',
      features: [
        '10 000 places assises',
        'Piste d\'athlétisme',
        'Terrain synthétique',
        'Éclairage sportif',
        'Vestiaires modernes',
        'Bureaux administratifs'
      ],
      stats: [
        { label: 'Surface', value: '35 000 m²' },
        { label: 'Durée', value: '22 mois' },
        { label: 'Budget', value: '10M €' },
        { label: 'Capacité', value: '10 000 places' }
      ]
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
              <Building className="w-5 h-5 text-seta-orange-400" />
              <span className="font-semibold">Nos Réalisations</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-8">
              <span className="block">Projets d'Excellence</span>
              <span className="bg-gradient-to-r from-seta-orange-400 to-seta-green-400 bg-clip-text text-transparent">
                Au Sénégal
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-12 max-w-3xl leading-relaxed">
              Découvrez notre portfolio de projets majeurs réalisés à travers le Sénégal, 
              témoignant de notre expertise et de notre engagement envers l'excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary inline-flex items-center gap-2 group">
                Proposer un Projet
                <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
              <a href="#projects" className="btn-secondary">
                Explorer les Projets
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Banner */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-12 bg-gradient-to-r from-seta-orange-500 to-seta-green-500"
      >
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '50+', label: 'Projets Réalisés' },
              { value: '15+', label: 'Villes Couvertes' },
              { value: '500M+', label: '€ Investis' },
              { value: '2000+', label: 'Emplois Créés' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white/90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <section id="projects" className="section-padding">
        <div className="container-custom">
          {/* Controls */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold">
                  <span className="text-gradient">Nos Réalisations</span>
                </h2>
                <p className="text-gray-600 mt-2">
                  {filteredProjects.length} projet{filteredProjects.length > 1 ? 's' : ''} trouvé{filteredProjects.length > 1 ? 's' : ''}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                {/* Search */}
                <div className="relative flex-1 sm:flex-none">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Rechercher un projet..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full sm:w-64 pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-seta-orange-500 focus:border-transparent"
                  />
                </div>
                
                {/* View Toggle */}
                <div className="flex items-center gap-2 bg-gray-100 rounded-xl p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg transition-colors ${
                      viewMode === 'grid' ? 'bg-white shadow' : 'hover:bg-gray-200'
                    }`}
                  >
                    <div className="w-5 h-5 grid grid-cols-2 gap-0.5">
                      <div className="bg-gray-600 rounded-sm"></div>
                      <div className="bg-gray-600 rounded-sm"></div>
                      <div className="bg-gray-600 rounded-sm"></div>
                      <div className="bg-gray-600 rounded-sm"></div>
                    </div>
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg transition-colors ${
                      viewMode === 'list' ? 'bg-white shadow' : 'hover:bg-gray-200'
                    }`}
                  >
                    <div className="w-5 h-5 flex flex-col gap-0.5">
                      <div className="h-1 bg-gray-600 rounded"></div>
                      <div className="h-1 bg-gray-600 rounded"></div>
                      <div className="h-1 bg-gray-600 rounded"></div>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-seta-orange-500 to-seta-green-500 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {category.icon && <span className="text-lg">{category.icon}</span>}
                  {category.name}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid/List */}
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2">
                    <div className="relative overflow-hidden h-64">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute top-4 right-4">
                        <span className="bg-seta-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {categories.find(c => c.id === project.category)?.name}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="flex items-center gap-4 text-sm">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {project.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {project.year}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-seta-orange-500 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-6 line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex justify-between text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {project.client}
                        </span>
                        <span className="flex items-center gap-1">
                          <DollarSign className="w-4 h-4" />
                          {project.budget}
                        </span>
                      </div>
                      <div className="mt-6 pt-6 border-t border-gray-100">
                        <button className="flex items-center gap-2 text-seta-orange-600 font-semibold group-hover:text-seta-orange-700">
                          <Eye className="w-4 h-4" />
                          Voir les détails
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3">
                      <div className="relative h-64 md:h-full">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-seta-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            {categories.find(c => c.id === project.category)?.name}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-seta-orange-500 transition-colors">
                          {project.title}
                        </h3>
                        <span className="text-seta-green-600 font-semibold mt-2 md:mt-0">
                          {project.status === 'completed' ? '✓ Terminé' : 'En cours'}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-6">
                        {project.description}
                      </p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <div className="text-sm text-gray-500">Localisation</div>
                          <div className="font-semibold text-gray-900">{project.location}</div>
                        </div>
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <div className="text-sm text-gray-500">Année</div>
                          <div className="font-semibold text-gray-900">{project.year}</div>
                        </div>
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <div className="text-sm text-gray-500">Budget</div>
                          <div className="font-semibold text-gray-900">{project.budget}</div>
                        </div>
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <div className="text-sm text-gray-500">Durée</div>
                          <div className="font-semibold text-gray-900">{project.duration}</div>
                        </div>
                      </div>
                      <button className="flex items-center gap-2 text-seta-orange-600 font-semibold">
                        <Maximize2 className="w-4 h-4" />
                        Voir le projet complet
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Aucun projet trouvé
              </h3>
              <p className="text-gray-600 max-w-md mx-auto mb-8">
                Aucun projet ne correspond à vos critères de recherche. Essayez de modifier vos filtres.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchTerm('');
                }}
                className="btn-primary"
              >
                Voir tous les projets
              </button>
            </motion.div>
          )}

          {/* Project Modal */}
          <AnimatePresence>
            {selectedProject && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 overflow-y-auto"
                onClick={() => setSelectedProject(null)}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden my-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Header */}
                  <div className="relative h-96">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="absolute top-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full transition-colors"
                    >
                      <X className="w-6 h-6" />
                    </button>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8 text-white">
                      <div className="flex flex-wrap gap-3 mb-4">
                        <span className="bg-seta-orange-500 text-white px-4 py-2 rounded-full font-semibold">
                          {categories.find(c => c.id === selectedProject.category)?.name}
                        </span>
                        <span className="bg-seta-green-500 text-white px-4 py-2 rounded-full font-semibold">
                          {selectedProject.year}
                        </span>
                        <span className="bg-gray-800 text-white px-4 py-2 rounded-full font-semibold">
                          {selectedProject.status === 'completed' ? 'Terminé' : 'En cours'}
                        </span>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold">{selectedProject.title}</h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 overflow-y-auto max-h-[calc(90vh-24rem)]">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      <div className="lg:col-span-2">
                        <h4 className="text-2xl font-bold mb-6">Description du Projet</h4>
                        <p className="text-gray-700 text-lg mb-8">
                          {selectedProject.description}
                        </p>

                        <h4 className="text-2xl font-bold mb-6">Caractéristiques</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                          {selectedProject.features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-3">
                              <CheckCircle className="w-5 h-5 text-seta-green-500 flex-shrink-0" />
                              <span className="text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-2xl font-bold mb-6">Informations</h4>
                        <div className="space-y-6">
                          <div>
                            <div className="text-sm text-gray-500 mb-2">Client</div>
                            <div className="text-lg font-semibold text-gray-900">
                              {selectedProject.client}
                            </div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-500 mb-2">Localisation</div>
                            <div className="flex items-center gap-2 text-lg font-semibold text-gray-900">
                              <MapPin className="w-5 h-5 text-seta-orange-500" />
                              {selectedProject.location}
                            </div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-500 mb-2">Durée</div>
                            <div className="flex items-center gap-2 text-lg font-semibold text-gray-900">
                              <Calendar className="w-5 h-5 text-seta-green-500" />
                              {selectedProject.duration}
                            </div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-500 mb-2">Budget</div>
                            <div className="flex items-center gap-2 text-lg font-semibold text-gray-900">
                              <DollarSign className="w-5 h-5 text-blue-500" />
                              {selectedProject.budget}
                            </div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-500 mb-2">Surface</div>
                            <div className="flex items-center gap-2 text-lg font-semibold text-gray-900">
                              <Building className="w-5 h-5 text-purple-500" />
                              {selectedProject.size}
                            </div>
                          </div>
                        </div>

                        <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                          <h5 className="font-bold text-gray-900 mb-4">Chiffres Clés</h5>
                          <div className="grid grid-cols-2 gap-4">
                            {selectedProject.stats.map((stat, index) => (
                              <div key={index} className="text-center p-3 bg-white rounded-lg">
                                <div className="text-2xl font-bold text-gradient mb-1">
                                  {stat.value}
                                </div>
                                <div className="text-sm text-gray-600">{stat.label}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-12 pt-8 border-t border-gray-200 flex flex-wrap gap-4">
                      <button className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                        <Download className="w-5 h-5" />
                        Télécharger la fiche projet
                      </button>
                      <button className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                        <Share2 className="w-5 h-5" />
                        Partager
                      </button>
                      <Link
                        to="/contact"
                        className="ml-auto btn-primary"
                        onClick={() => setSelectedProject(null)}
                      >
                        Discuter d'un projet similaire
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;