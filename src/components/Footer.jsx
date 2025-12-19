import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, Phone, Mail, Clock, Facebook, Twitter, 
  Linkedin, Instagram, Youtube, ArrowUp, Send,
  Building, ShieldCheck, Award, Globe
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/img/logo.jpeg';

const Footer = () => {
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Vérifier si on est sur la page d'accueil
  const isHomePage = location.pathname === '/';

  // Gestion du scroll pour le bouton "back to top"
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      // Simulation d'abonnement
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const quickLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'À Propos', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projets', path: '/projects' },
    { name: 'Contact', path: '/contact' },

  ];

  const services = [
    'Construction Bâtiment',
    'Routes & Infrastructures',
    'Travaux Publics',
    'Rénovation',
    'Consultation Technique',
    'Gestion de Projet',
    'Études de Faisabilité',
    'Contrôle Qualité'
  ];

  const contactInfo = [
    {
      icon: MapPin,
      text: 'Rue de la République, Immeuble SETA Mariste, Dakar, Sénégal',
      link: 'https://maps.app.goo.gl/if9aibi8mLjLu5z3A'
    },
    {
      icon: Phone,
      text: '+221 33 832 65 75',
      link: 'tel:+221338326575'
    },
    {
      icon: Phone,
      text: '+221 77 234 56 78',
      link: 'tel:+221772345678'
    },
    {
      icon: Mail,
      text: 'contact@seta-international.sn',
      link: 'mailto:contact@seta-international.sn'
    },
    {
      icon: Clock,
      text: 'Lun - Ven: 8h00 - 18h00 | Sam: 9h00 - 13h00',
    }
  ];

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', color: 'hover:bg-blue-600', link: '#' },
    { icon: Twitter, label: 'Twitter', color: 'hover:bg-sky-500', link: '#' },
    { icon: Linkedin, label: 'LinkedIn', color: 'hover:bg-blue-700', link: '#' },
    { icon: Instagram, label: 'Instagram', color: 'hover:bg-pink-600', link: '#' },
    { icon: Youtube, label: 'YouTube', color: 'hover:bg-red-600', link: '#' },
  ];

  const certifications = [
    { name: 'ISO 9001:2015', desc: 'Qualité' },
    { name: 'ISO 14001:2015', desc: 'Environnement' },
    { name: 'OHSAS 18001', desc: 'Sécurité' },
    { name: 'BTP Sénégal', desc: 'Certification Nationale' },
  ];

  return (
    <>
      {/* Bouton Scroll to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-gradient-to-br from-seta-orange-500 to-seta-green-500 text-white rounded-full shadow-2xl flex items-center justify-center hover:shadow-3xl transition-all duration-300 hover:scale-110 group"
            aria-label="Retour en haut"
          >
            <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Section pré-footer */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-seta-orange-500 to-seta-green-500"
      >
        <div className="container-custom px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-12">
            {/* Stats */}
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-white mb-6">
                Chiffres Clés
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-3xl font-bold text-white mb-1">50+</div>
                  <div className="text-white/90">Projets</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">15+</div>
                  <div className="text-white/90">Ans Expérience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">200+</div>
                  <div className="text-white/90">Employés</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">100%</div>
                  <div className="text-white/90">Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-6">
                Restez Informé
              </h3>
              <AnimatePresence mode="wait">
                {isSubscribed ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="bg-white/20 backdrop-blur-sm rounded-xl p-6"
                  >
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-6 h-6 text-seta-green-500" />
                    </div>
                    <p className="text-white font-semibold">
                      Merci pour votre inscription !
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubscribe}
                    className="flex flex-col sm:flex-row gap-3"
                  >
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Votre email"
                      className="flex-1 px-4 py-3 rounded-lg bg-white/90 backdrop-blur-sm border-0 focus:ring-2 focus:ring-white focus:outline-none placeholder-gray-600"
                      required
                    />
                    <button
                      type="submit"
                      className="bg-white text-gray-900 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
                    >
                      S'abonner
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>

            {/* Certification Badge */}
            <div className="text-center lg:text-right">
              <h3 className="text-2xl font-bold text-white mb-6">
                Certifications
              </h3>
              <div className="flex flex-wrap justify-center lg:justify-end gap-3">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2"
                  >
                    <div className="font-bold text-white">{cert.name}</div>
                    <div className="text-sm text-white/80">{cert.desc}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer principal */}
      <footer className="bg-gray-900 text-white">
        <div className="container-custom px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 py-16">
            {/* Logo et description */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <motion.img
                    src={logo}
                    alt="SETA International Logo"
                    className="w-12 h-12 object-contain"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  />
                <div>
                  <div className="font-heading font-black text-2xl">SETA</div>
                  <div className="text-sm font-semibold text-gradient">INTERNATIONAL SARL</div>
                </div>
              </div>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                Leader en génie civil au Sénégal, nous bâtissons l'avenir avec innovation, 
                qualité et engagement depuis plus de 15 ans.
              </p>
              
              <div className="flex items-center gap-4 mb-8">
                <ShieldCheck className="w-5 h-5 text-seta-orange-400" />
                <span className="text-gray-300">Entreprise certifiée</span>
              </div>
              
              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center transition-all duration-300 ${social.color} hover:text-white`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Liens rapides */}
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <div className="w-2 h-6 bg-gradient-to-b from-seta-orange-500 to-seta-green-500 rounded-full"></div>
                Liens Rapides
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-gradient-to-r from-seta-orange-500 to-seta-green-500 transition-all"></div>
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <div className="w-2 h-6 bg-gradient-to-b from-seta-orange-500 to-seta-green-500 rounded-full"></div>
                Nos Services
              </h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <motion.li
                    key={service}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <span className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group cursor-pointer">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-gradient-to-r from-seta-orange-500 to-seta-green-500 transition-all"></div>
                      {service}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <div className="w-2 h-6 bg-gradient-to-b from-seta-orange-500 to-seta-green-500 rounded-full"></div>
                Contactez-nous
              </h3>
              <ul className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.li
                    key={info.text}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="p-2 rounded-lg bg-gradient-to-br from-gray-800 to-gray-700 mt-0.5">
                      <info.icon className="w-4 h-4 text-seta-orange-400" />
                    </div>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-400 hover:text-white transition-colors hover:underline"
                      >
                        {info.text}
                      </a>
                    ) : (
                      <span className="text-gray-400">{info.text}</span>
                    )}
                  </motion.li>
                ))}
              </ul>


            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-gray-500 text-sm">
                © {new Date().getFullYear()} SETA INTERNATIONAL SARL. Tous droits réservés.
              </div>
              
              <div className="flex items-center gap-2 text-gray-500">
                <Globe className="w-4 h-4" />
                <span>Site développé par <Link to="/https://inset-group.com/">INSET-GROUP</Link></span>
              </div>
              
              <div className="flex items-center gap-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Politique de confidentialité
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Conditions d'utilisation
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Plan du site
                </a>
              </div>
            </div>

            {/* Badge pays */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 pt-8 border-t border-gray-800 text-center"
            >
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-800 to-gray-900 rounded-full px-6 py-3">
                <div className="w-8 h-6 bg-gradient-to-r from-green-500 to-yellow-500 rounded"></div>
                <span className="text-gray-300">
                  Entreprise 100% sénégalaise • Fièrement basée à Dakar
                </span>
                <div className="text-2xl">🇸🇳</div>
              </div>
            </motion.div>
          </div>
        </div>


      </footer>

      {/* Whatsapp Float Button */}
      <motion.a
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2 }}
        href="https://wa.me/221771234567"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-28 right-8 z-40 w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:shadow-3xl transition-all duration-300 hover:scale-110 group"
        aria-label="Contact WhatsApp"
      >
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.507 14.307l-.009.075c-2.199-1.096-2.429-1.242-2.713-.816-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.293-.506.32-.578.878-1.634.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.576-.05-.997-.05-1.368.344-1.614 1.774-1.207 3.604.174 5.55 2.714 3.552 4.16 4.206 6.8 5.114.714.227 1.365.195 1.88.121.574-.091 1.754-.721 2.006-1.413.255-.691.255-1.29.18-1.414-.074-.125-.27-.195-.57-.345z"/>
          <path d="M20.52 3.449C12.15-2 1.188-.968 1.188-.968A15.99 15.99 0 00.014 11.553c-.02 3.56.988 7.197 3.014 10.126l.03.045-1.271 4.652a.496.496 0 00.643.596l5.803-2.39c1.298.7 2.764 1.148 4.298 1.148h.02c8.673 0 15.75-7.074 15.75-15.75 0-4.173-1.63-8.093-4.59-11.042zM12 22.104h-.02a10.03 10.03 0 01-5.129-1.43l-.366-.214-3.76 1.55.998-3.648-.239-.375a13.07 13.07 0 01-2.354-7.625c0-7.252 5.918-13.16 13.16-13.16 3.513 0 6.814 1.368 9.297 3.851a13.058 13.058 0 013.852 9.297c0 7.252-5.918 13.16-13.16 13.16z"/>
        </svg>
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center animate-pulse">
          <span className="text-xs font-bold text-green-600">!</span>
        </div>
      </motion.a>
    </>
  );
};

export default Footer;