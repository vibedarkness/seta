import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Construction, HardHat, Award } from 'lucide-react';
import heroVideo from '../assets/img/hero-video.mp4';
import { Link } from 'react-router-dom';


const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-custom">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
  <video
    className="w-full h-full object-cover"
    src={heroVideo}
    autoPlay
    loop
    muted
    playsInline
  />
  {/* Overlay pour lisibilité */}
  <div className="absolute inset-0 bg-black/40"></div>
</div>

      {/* Animated Construction Elements */}
      <div className="absolute top-10 left-5 animate-float" style={{ animationDelay: '1s' }}>
        <Construction className="w-16 h-16 text-seta-orange-500 opacity-20" />
      </div>
      <div className="absolute bottom-10 right-5 animate-float" style={{ animationDelay: '3s' }}>
        <HardHat className="w-16 h-16 text-seta-green-500 opacity-20" />
      </div>

      <div className="container-custom relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-8 shadow-lg"
          >
            <Award className="w-5 h-5 text-seta-orange-500" />
            <span className="text-sm font-semibold text-gray-700">Entreprise de Génie Civil Sénégal</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6">
            <span className="block text-seta-orange-500">SETA</span>
            <span className="text-gradient block">INTERNATIONAL</span>
            <span className="block text-seta-green-500">SARL</span>
          </h1>

          <p className="text-xl md:text-2xl text-white mb-10 max-w-3xl mx-auto leading-relaxed">
            Excellence en génie civil, bâtissant l'avenir du Sénégal avec innovation, qualité et professionnalisme.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to={'/projects'} className="btn-primary text-lg px-10 py-4 flex items-center gap-2 group">
              Nos Réalisations
              <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link to={'/contact'} className="btn-secondary text-lg px-10 py-4">
              Contactez-nous
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
          >
            {[
              { value: '50+', label: 'Projets Réalisés' },
              { value: '15+', label: 'Années Expérience' },
              { value: '100%', label: 'Satisfaction Client' },
              { value: '24/7', label: 'Support Technique' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;