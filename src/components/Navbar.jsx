import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.jpeg';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Accueil', path: '/' },
    { name: 'À Propos', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Réalisations', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-900 text-white py-2 px-4">
        <div className="container-custom flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-seta-orange-500" />
              <span>+221 33 832 65 75</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <Mail className="w-4 h-4 text-seta-orange-500" />
              <span>contact@seta-international.sn</span>
            </div>
            <div className="hidden lg:flex items-center gap-2">
              <MapPin className="w-4 h-4 text-seta-orange-500" />
              <span>Dakar, Sénégal</span>
            </div>
          </div>
          <Link to={'/contact'} className="btn-primary text-sm py-2 px-4 mt-2 md:mt-0">
            Demander un Devis
          </Link>
        </div>
      </div>

      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'
        }`}
      >
        <div className="container-custom px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
<Link to="/" className="flex items-center gap-3">
  <motion.img
    src={logo}
    alt="SETA International Logo"
    className="w-12 h-12 object-contain"
    whileHover={{ scale: 1.05 }}
    transition={{ type: 'spring', stiffness: 300 }}
  />

  <div>
    <div className="font-heading font-black text-2xl text-gray-900">
      SETA
    </div>
    <div className="text-sm font-semibold text-gradient">
      INTERNATIONAL SARL
    </div>
  </div>
</Link>


            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="relative font-medium text-gray-700 hover:text-seta-orange-500 transition-colors group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-seta-orange-500 to-seta-green-500 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t"
            >
              <div className="container-custom px-4 py-6">
                <div className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className="py-3 px-4 rounded-lg hover:bg-gray-50 hover:text-seta-orange-500 transition-colors font-medium"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;