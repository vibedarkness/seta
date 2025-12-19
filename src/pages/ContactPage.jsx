import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Clock, Send,
  CheckCircle, AlertCircle, User, Building,
  MessageSquare, Calendar, Globe, Download,
  Facebook, Twitter, Linkedin, Instagram
} from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState('contact');

  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone",
      details: ["+221 33 123 45 67", "+221 77 234 56 78"],
      action: "tel:+221331234567",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["contact@seta-international.sn", "info@seta-international.sn"],
      action: "mailto:contact@seta-international.sn",
      color: "from-seta-orange-500 to-orange-600"
    },
    {
      icon: MapPin,
      title: "Adresse",
      details: ["Rue de la République, Immeuble SETA", "Mariste, Dakar, Sénégal"],
      action: "https://maps.google.com",
      color: "from-seta-green-500 to-green-600"
    },
    {
      icon: Clock,
      title: "Horaires",
      details: ["Lun - Ven: 8h00 - 18h00", "Sam: 9h00 - 13h00"],
      color: "from-purple-500 to-pink-600"
    }
  ];

  const socialMedia = [
    { icon: Facebook, name: "Facebook", url: "#", color: "hover:bg-blue-600" },
    { icon: Twitter, name: "Twitter", url: "#", color: "hover:bg-sky-500" },
    { icon: Linkedin, name: "LinkedIn", url: "#", color: "hover:bg-blue-700" },
    { icon: Instagram, name: "Instagram", url: "#", color: "hover:bg-pink-600" }
  ];

  const projectTypes = [
    "Construction Bâtiment",
    "Routes & Infrastructures",
    "Travaux Publics",
    "Rénovation",
    "Étude de Faisabilité",
    "Consultation Technique",
    "Autre"
  ];

  const budgets = [
    "Moins de 100k €",
    "100k - 500k €",
    "500k - 1M €",
    "1M - 5M €",
    "Plus de 5M €",
    "À déterminer"
  ];

  const timelines = [
    "Urgent (moins de 3 mois)",
    "Court terme (3-6 mois)",
    "Moyen terme (6-12 mois)",
    "Long terme (plus d'un an)",
    "À déterminer"
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
        projectType: '',
        budget: '',
        timeline: '',
        message: ''
      });
      
      // Reset du message de succès après 5 secondes
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 2000);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-seta-orange-500 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-seta-green-500 rounded-full translate-x-1/3 translate-y-1/3"></div>
        </div>


      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                {contactInfo.map((info, index) => (
                  <div
                    key={info.title}
                    className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${info.color}`}>
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h3>
                        {info.details.map((detail, i) => (
                          <div key={i} className="text-gray-600">
                            {info.action ? (
                              <a
                                href={info.action}
                                className="hover:text-seta-orange-600 transition-colors"
                              >
                                {detail}
                              </a>
                            ) : (
                              detail
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Social Media */}
                <div className="bg-gradient-to-br from-seta-orange-50 to-seta-green-50 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Suivez-nous</h3>
                  <div className="flex gap-3">
                    {socialMedia.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        className={`w-10 h-10 rounded-full bg-white flex items-center justify-center transition-all duration-300 ${social.color} hover:text-white shadow hover:shadow-lg`}
                        aria-label={social.name}
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Download Brochure */}
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 text-white">
                  <h3 className="text-lg font-bold mb-4">Documentation</h3>
                  <p className="text-gray-300 mb-6">
                    Téléchargez notre brochure pour découvrir nos services en détail.
                  </p>
                  <button className="w-full flex items-center justify-center gap-2 bg-white text-gray-900 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-all duration-300">
                    <Download className="w-5 h-5" />
                    Télécharger la Brochure
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
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

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Type de Projet *
                          </label>
                          <select
                            required
                            value={formData.projectType}
                            onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-seta-orange-500 focus:border-transparent transition-all"
                          >
                            <option value="">Sélectionnez...</option>
                            {projectTypes.map((type) => (
                              <option key={type} value={type}>{type}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Budget Estimé
                          </label>
                          <select
                            value={formData.budget}
                            onChange={(e) => setFormData({...formData, budget: e.target.value})}
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-seta-orange-500 focus:border-transparent transition-all"
                          >
                            <option value="">Sélectionnez...</option>
                            {budgets.map((budget) => (
                              <option key={budget} value={budget}>{budget}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Délai Souhaité
                          </label>
                          <select
                            value={formData.timeline}
                            onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-seta-orange-500 focus:border-transparent transition-all"
                          >
                            <option value="">Sélectionnez...</option>
                            {timelines.map((timeline) => (
                              <option key={timeline} value={timeline}>{timeline}</option>
                            ))}
                          </select>
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
                          Tous les champs marqués d'un * sont obligatoires. 
                          Nous vous répondrons dans les 24 heures ouvrables.
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

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <div className="bg-gradient-to-r from-seta-orange-500 to-seta-green-500 rounded-3xl p-1">
              <div className="bg-white rounded-2xl p-8">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Nos Bureaux à Dakar
                    </h3>
                    <p className="text-gray-600">
                      Visitez-nous à notre siège social au cœur de Dakar pour discuter 
                      de votre projet en personne.
                    </p>
                  </div>
                  
                </div>
                <div className="aspect-video rounded-xl overflow-hidden border border-gray-200">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15434.270279507398!2d-17.445050377679753!3d14.737023468872673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec10cd3ff68191f%3A0x3c1ce29229253a3e!2sHann%20Maristes%201%2C%20Dakar!5e0!3m2!1sfr!2ssn!4v1766148072995!5m2!1sfr!2ssn"
    className="w-full h-full"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>

              </div>
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">
                Questions <span className="text-gradient">Fréquentes</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Trouvez rapidement des réponses à vos questions les plus courantes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  question: "Quel est le délai moyen pour un projet de construction ?",
                  answer: "Le délai varie selon la complexité et la taille du projet. En moyenne, un projet résidentiel prend 12-18 mois, tandis qu'un projet commercial peut prendre 18-36 mois."
                },
                {
                  question: "Proposez-vous des services de financement ?",
                  answer: "Nous collaborons avec plusieurs institutions financières locales et internationales pour vous aider à obtenir le financement nécessaire à votre projet."
                },
                {
                  question: "Travaillez-vous dans toute l'Afrique de l'Ouest ?",
                  answer: "Oui, nous avons réalisé des projets au Sénégal, en Côte d'Ivoire, au Mali et en Guinée. Nous envisageons d'étendre nos services dans toute la sous-région."
                },
                {
                  question: "Quelles sont vos certifications ?",
                  answer: "Nous sommes certifiés ISO 9001:2015 pour la qualité, ISO 14001:2015 pour l'environnement et OHSAS 18001 pour la santé et sécurité au travail."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <h4 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h4>
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;