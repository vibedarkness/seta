/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/purity */
import React from 'react';
import { motion } from 'framer-motion';
import { Construction, HardHat, Building, Truck, Drill, Shield } from 'lucide-react';

const FloatingElements = () => {
  const icons = [
    { Icon: Construction, delay: 0, size: 'w-8 h-8' },
    { Icon: HardHat, delay: 1, size: 'w-10 h-10' },
    { Icon: Building, delay: 2, size: 'w-12 h-12' },
    { Icon: Truck, delay: 3, size: 'w-9 h-9' },
    { Icon: Drill, delay: 4, size: 'w-7 h-7' },
    { Icon: Shield, delay: 5, size: 'w-11 h-11' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {icons.map(({ Icon, delay, size }, index) => (
        <motion.div
          key={index}
          initial={{ 
            x: Math.random() * 100 - 50,
            y: Math.random() * 100 - 50,
            opacity: 0 
          }}
          animate={{ 
            x: [null, Math.random() * 100 - 50],
            y: [null, Math.random() * 100 - 50],
            opacity: [0.1, 0.2, 0.1],
            rotate: 360
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear",
            delay: delay
          }}
          className={`absolute ${size} ${
            index % 2 === 0 ? 'text-seta-orange-300' : 'text-seta-green-300'
          }`}
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
          }}
        >
          <Icon className="w-full h-full" />
        </motion.div>
      ))}
      
      {/* Particules flottantes */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 rounded-full"
          style={{
            backgroundColor: i % 2 === 0 ? '#fb923c' : '#22c55e',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElements;