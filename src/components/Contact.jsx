import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Clock, Send, CheckCircle,
  AlertCircle, Building, User, MessageSquare
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    projectType: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const projectTypes = [
    'Construction Bâtiment',
    'Routes & Infrastructures',
    'Travaux Publics',
    'Rénovation',
    'Consultation',
    'Autre'
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone",
      details: ["+221 33 123 45 67", "+221 77 234 56 78"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["contact@seta-international.sn", "info@seta-international.sn"],
      color: "from-seta-orange-500 to-orange-600"
    },
    {
      icon: MapPin,
      title: "Adresse",
      details: ["Rue de la République, Immeuble SETA", "Plateau, Dakar, Sénégal"],
      color: "from-seta-green-500 to-green-600"
    },
    {
      icon: Clock,
      title: "Horaires",
      details: ["Lun - Ven: 8h00 - 18h00", "Sam: 9h00 - 13h00"],
      color: "from-purple-500 to-pink-600"
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation d'envoi
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
        projectType: ''
      });
      
      // Reset du message de succès après 5 secondes
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 2000);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-seta-orange-100 to-seta-green-100 rounded-full px-4 py-2 mb-6">
            <Mail className="w-5 h-5 text-gradient" />
            <span className="font-semibold text-gradient">Contactez-nous</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Discutons de Votre <span className="text-gradient">Projet</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Prêt à concrétiser vos idées ? Notre équipe est à votre écoute pour transformer votre vision en réalité.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${info.color} group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h4>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-gray-600">{detail}</p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-seta-orange-500 to-seta-green-500 rounded-2xl p-1"
            >
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Localisation</h3>
                <div className="aspect-video rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-gradient mx-auto mb-4" />
                    <p className="text-gray-600 font-semibold">Dakar, Sénégal</p>
                    <p className="text-gray-500">Plateau - Rue de la République</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-r from-seta-orange-500 to-seta-green-500 rounded-2xl p-8 text-white text-center"
            >
              <h3 className="text-2xl font-bold mb-6">Notre Engagement</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold mb-2">24h</div>
                  <div className="text-white/90">Réponse Garantie</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">100%</div>
                  <div className="text-white/90">Satisfaction Client</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-seta-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-seta-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Message Envoyé avec Succès !
                  </h3>
                  <p className="text-gray-600 mb-8">
                    Nous vous recontacterons dans les plus brefs délais.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="btn-primary"
                  >
                    Envoyer un Nouveau Message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <span className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          Nom Complet *
                        </span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-seta-orange-500 focus:border-transparent transition-all"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <span className="flex items-center gap-2">
                          <Mail className="w-4 h-4" />
                          Email *
                        </span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-seta-orange-500 focus:border-transparent transition-all"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <span className="flex items-center gap-2">
                          <Phone className="w-4 h-4" />
                          Téléphone
                        </span>
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-seta-orange-500 focus:border-transparent transition-all"
                        placeholder="+221 XX XXX XX XX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <span className="flex items-center gap-2">
                          <Building className="w-4 h-4" />
                          Société
                        </span>
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-seta-orange-500 focus:border-transparent transition-all"
                        placeholder="Nom de votre société"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Type de Projet *
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {projectTypes.map((type) => (
                        <label
                          key={type}
                          className={`flex items-center justify-center p-3 rounded-lg border-2 cursor-pointer transition-all ${
                            formData.projectType === type
                              ? 'border-seta-orange-500 bg-seta-orange-50'
                              : 'border-gray-200 hover:border-seta-orange-300'
                          }`}
                        >
                          <input
                            type="radio"
                            name="projectType"
                            value={type}
                            checked={formData.projectType === type}
                            onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                            className="hidden"
                            required
                          />
                          <span className={`text-sm font-medium ${
                            formData.projectType === type ? 'text-seta-orange-600' : 'text-gray-600'
                          }`}>
                            {type}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <span className="flex items-center gap-2">
                        <MessageSquare className="w-4 h-4" />
                        Message *
                      </span>
                    </label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows="6"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-seta-orange-500 focus:border-transparent transition-all"
                      placeholder="Décrivez votre projet en détail..."
                    />
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl">
                    <AlertCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-blue-700">
                      Tous les champs marqués d'un * sont obligatoires. Nous vous répondrons dans les 24 heures.
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full btn-primary flex items-center justify-center gap-3 ${
                      isSubmitting ? 'opacity-80 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Envoyer le Message
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;