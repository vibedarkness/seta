import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Building, HardHat, Truck, Wrench, Hammer, Shield, Construction } from 'lucide-react';

const LoadingScreen = () => {
const steps = [
  { text: "Initialisation du chantier...", icon: Construction },
  { text: "Chargement des plans...", icon: Building },
  { text: "Préparation des équipements...", icon: Hammer },
  { text: "Vérification de la sécurité...", icon: Shield },
  { text: "Mise en place des fondations...", icon: Wrench },
  { text: "Transport des matériaux...", icon: Truck },
  { text: "Finalisation de la construction...", icon: HardHat },
];

const [progress, setProgress] = useState(0);
const [currentStep, setCurrentStep] = useState(0);
const [particles, setParticles] = useState([]);

const CurrentStepIcon = steps[currentStep].icon;


  // Générer des particules aléatoires
  useEffect(() => {
    const newParticles = Array.from({ length: 30 }, () => ({
      id: Math.random(),
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      speed: Math.random() * 2 + 1,
      color: Math.random() > 0.5 ? '#fb923c' : '#22c55e',
    }));
    setParticles(newParticles);
  }, []);

  // Simulation de progression
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 3;
        if (newProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        
        // Changer l'étape en fonction de la progression
        const stepIndex = Math.floor((newProgress / 100) * steps.length);
        if (stepIndex !== currentStep) {
          setCurrentStep(stepIndex);
        }
        
        return newProgress;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [currentStep]);

  // Animation des particules
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev => 
        prev.map(p => ({
          ...p,
          y: (p.y + p.speed) % 100,
          x: p.x + Math.sin(Date.now() * 0.001 + p.id) * 0.5,
        }))
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Particles */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
              backgroundColor: particle.color,
              opacity: 0.6,
            }}
            animate={{
              y: [null, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 2 + Math.random(),
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      {/* Animated Construction Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 grid grid-cols-5 grid-rows-5">
          {Array.from({ length: 25 }).map((_, i) => (
            <motion.div
              key={i}
              className="border border-white/10"
              animate={{
                backgroundColor: [
                  'rgba(251, 146, 60, 0)',
                  'rgba(251, 146, 60, 0.1)',
                  'rgba(34, 197, 94, 0.1)',
                  'rgba(251, 146, 60, 0)',
                ],
              }}
              transition={{
                duration: 2,
                delay: i * 0.1,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center">
        {/* Animated Logo */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="relative mb-12"
        >
          {/* Outer Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
          >
            <div className="w-48 h-48 border-4 border-dashed border-seta-orange-500/30 rounded-full"></div>
          </motion.div>

          {/* Middle Ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
          >
            <div className="w-40 h-40 border-2 border-dotted border-seta-green-500/30 rounded-full m-4"></div>
          </motion.div>

          {/* Main Logo */}
          <div className="relative w-32 h-32 mx-auto">
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{ 
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              className="w-32 h-32 bg-gradient-to-br from-seta-orange-500 to-seta-green-500 rounded-2xl flex items-center justify-center shadow-2xl"
            >
              <Building className="w-16 h-16 text-white" />
            </motion.div>
            
            {/* Floating Icons */}
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.2, 1],
              }}
              transition={{ 
                rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute -top-6 -right-6 w-16 h-16"
            >
              <HardHat className="w-full h-full text-seta-orange-400" />
            </motion.div>
            
            <motion.div
              animate={{ 
                rotate: -360,
                scale: [1, 1.1, 1],
              }}
              transition={{ 
                rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute -bottom-6 -left-6 w-14 h-14"
            >
              <Wrench className="w-full h-full text-seta-green-400" />
            </motion.div>
          </div>
        </motion.div>

        {/* Company Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-6xl font-black text-white mb-2">
            SETA
          </h1>
          <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-seta-orange-400 to-seta-green-400 bg-clip-text text-transparent">
            INTERNATIONAL SARL
          </div>
          <p className="text-gray-400 mt-2">Génie Civil • Excellence Sénégalaise</p>
        </motion.div>

        {/* Current Step */}
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-center gap-3 text-white/90">
  <CurrentStepIcon className="w-5 h-5 text-seta-orange-400" />
  <span className="text-lg font-medium">{steps[currentStep].text}</span>
</div>
        </motion.div>

        {/* Progress Bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="flex justify-between text-sm text-gray-400 mb-2">
            <span>Chargement...</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
              className="h-full bg-gradient-to-r from-seta-orange-500 via-seta-orange-400 to-seta-green-500 rounded-full relative"
            >
              {/* Shine effect */}
              <motion.div
                animate={{ x: ['0%', '100%'] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              />
            </motion.div>
          </div>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center gap-2 mb-8">
          {steps.map((_, index) => (
            <motion.div
              key={index}
              animate={{
                scale: currentStep === index ? 1.2 : 1,
                backgroundColor: currentStep >= index ? 
                  (currentStep === index ? '#fb923c' : '#22c55e') : 
                  '#4b5563'
              }}
              transition={{ duration: 0.3 }}
              className="w-2 h-2 rounded-full"
            />
          ))}
        </div>

        {/* Fun Facts */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-400 text-sm"
        >
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2">
            <span>💡</span>
            <span>Saviez-vous ? Nous avons construit plus de 50 projets au Sénégal</span>
          </div>
        </motion.div>

        {/* Construction Animation */}
        <div className="mt-12 relative h-20">
          <motion.div
            animate={{ x: [-100, 400] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-0"
          >
            <Truck className="w-12 h-12 text-seta-orange-400" />
          </motion.div>
          
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
            className="absolute left-1/4 bottom-0"
          >
            <Hammer className="w-8 h-8 text-seta-green-400" />
          </motion.div>
          
          <motion.div
            animate={{ rotate: [0, 90, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="absolute right-1/4 bottom-0"
          >
            <Wrench className="w-8 h-8 text-seta-orange-400" />
          </motion.div>
        </div>
      </div>

      {/* Copyright */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 text-gray-500 text-sm"
      >
        © {new Date().getFullYear()} SETA INTERNATIONAL SARL • Tous droits réservés
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;