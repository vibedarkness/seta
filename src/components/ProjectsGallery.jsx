import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Search, Filter } from 'lucide-react';

const ProjectsGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    'all',
    'Bâtiments',
    'Routes & Ponts',
    'Infrastructures',
    'Travaux Publics',
    'Rénovation',
  ];

  const projects = [
    {
      id: 1,
      title: 'Complexe Résidentiel Dakar Plateau',
      category: 'Bâtiments',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800',
      description: 'Construction d\'un complexe résidentiel de luxe de 15 étages.',
      year: '2023',
      location: 'Dakar, Sénégal'
    },
    {
      id: 2,
      title: 'Pont Autoroutier Thiès',
      category: 'Routes & Ponts',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800',
      description: 'Construction d\'un pont autoroutier de 500m de longueur.',
      year: '2022',
      location: 'Thiès, Sénégal'
    },
    {
      id: 3,
      title: 'Station d\'Épuration Mbour',
      category: 'Infrastructures',
      image: 'https://images.unsplash.com/photo-1621451537084-482c73073a0f?auto=format&fit=crop&w=800',
      description: 'Station d\'épuration moderne d\'une capacité de 50 000 m3/jour.',
      year: '2023',
      location: 'Mbour, Sénégal'
    },
    {
      id: 4,
      title: 'Rénovation Hôpital Principal',
      category: 'Rénovation',
      image: 'https://images.unsplash.com/photo-1586773860418-dc22f8b874bc?auto=format&fit=crop&w=800',
      description: 'Rénovation complète des infrastructures hospitalières.',
      year: '2021',
      location: 'Dakar, Sénégal'
    },
    {
      id: 5,
      title: 'Route Nationale N°1',
      category: 'Routes & Ponts',
      image: 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&w=800',
      description: 'Réhabilitation de 50km de route nationale.',
      year: '2022',
      location: 'Kaolack, Sénégal'
    },
    {
      id: 6,
      title: 'Centre Commercial Diamniadio',
      category: 'Bâtiments',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=800',
      description: 'Construction d\'un centre commercial moderne.',
      year: '2023',
      location: 'Diamniadio, Sénégal'
    },
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
   <section className="section-padding bg-gray-50 relative z-10">

      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nos <span className="text-gradient">Réalisations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos projets phares qui témoignent de notre expertise en génie civil au Sénégal.
          </p>
        </motion.div>

        {/* Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-seta-orange-500 to-seta-green-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
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
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-seta-orange-500 transition-colors">
                      {project.title}
                    </h3>
                    <Search className="w-5 h-5 text-gray-400 group-hover:text-seta-green-500 transition-colors" />
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{project.year}</span>
                    <span>{project.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
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
                </div>
                <div className="p-8">
                  <div className="flex flex-wrap gap-4 mb-6">
                    <span className="bg-seta-orange-100 text-seta-orange-800 px-4 py-2 rounded-full font-semibold">
                      {selectedProject.category}
                    </span>
                    <span className="bg-seta-green-100 text-seta-green-800 px-4 py-2 rounded-full font-semibold">
                      {selectedProject.year}
                    </span>
                    <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full font-semibold">
                      {selectedProject.location}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">{selectedProject.title}</h3>
                  <p className="text-gray-600 text-lg mb-6">{selectedProject.description}</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <div className="text-2xl font-bold text-gradient">15 000</div>
                      <div className="text-gray-600">m² Superficie</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <div className="text-2xl font-bold text-gradient">18</div>
                      <div className="text-gray-600">Mois de Travail</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <div className="text-2xl font-bold text-gradient">200+</div>
                      <div className="text-gray-600">Ouvriers</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <div className="text-2xl font-bold text-gradient">100%</div>
                      <div className="text-gray-600">Satisfaction</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsGallery;