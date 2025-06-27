import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Calendar, MessageSquare, Send, Navigation } from 'lucide-react';
import { useState } from 'react';
import LotusIcon from '../components/LotusIcon';
import LotusPattern from '../components/LotusPattern';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    preferredDate: '',
    preferredTime: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will contact you within 24 hours.');
    setFormData({ 
      name: '', 
      email: '', 
      phone: '', 
      service: '', 
      message: '',
      preferredDate: '',
      preferredTime: '',
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      details: 'Road No. 14, Banjara Hills',
      subdetails: 'Hyderabad, Telangana 500034',
      action: 'Get Directions',
      actionIcon: Navigation,
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+91 40 1234 5678',
      subdetails: 'Available 24/7 for emergencies',
      action: 'Call Now',
      actionIcon: Phone,
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@anantharehab.com',
      subdetails: 'We respond within 2 hours',
      action: 'Send Email',
      actionIcon: Mail,
    },
    {
      icon: Clock,
      title: 'Hours',
      details: 'Mon - Sat: 8:00 AM - 8:00 PM',
      subdetails: 'Sun: 9:00 AM - 5:00 PM',
      action: 'View Schedule',
      actionIcon: Calendar,
    },
  ];

  const services = [
    'Neuro Rehabilitation',
    'Orthopedic Rehabilitation',
    'Pain Management',
    'Cardiac Rehabilitation',
    'Pulmonary Rehabilitation',
    'Pediatric Care',
    'Geriatric Care',
    'General Consultation',
  ];

  const departments = [
    { name: 'Emergency', phone: '+91 40 1234 5678', available: '24/7' },
    { name: 'Appointments', phone: '+91 40 1234 5679', available: 'Mon-Sat 8AM-8PM' },
    { name: 'Pain Management', phone: '+91 40 1234 5680', available: 'Mon-Fri 9AM-6PM' },
    { name: 'Admissions', phone: '+91 40 1234 5681', available: 'Mon-Sat 9AM-5PM' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-50 to-lavender-50 dark:from-dark-surface dark:to-dark-bg overflow-hidden">
        <div className="absolute top-10 right-10 opacity-10">
          <LotusIcon size="xl" className="w-32 h-32 text-primary-300" />
        </div>
        <div className="absolute bottom-10 left-10 opacity-10">
          <LotusPattern count={5} opacity={0.2} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-6 py-3 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-700 dark:text-primary-300 text-sm font-medium mb-6">
              <LotusIcon size="sm" className="mr-2" />
              Contact Anantha Rehab
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Get in Touch with{' '}
              <span className="bg-gradient-to-r from-primary-600 to-plum-700 bg-clip-text text-transparent">
                Our Experts
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to start your recovery journey? Contact us today to schedule 
              a consultation with our specialists or learn more about our services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20 bg-white dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-dark-surface p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-plum-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {info.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 font-medium mb-1">{info.details}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">{info.subdetails}</p>
                <button className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200">
                  <info.actionIcon className="w-4 h-4 mr-2" />
                  {info.action}
                </button>
              </motion.div>
            ))}
          </div>

          {/* Main Contact Section */}
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-dark-surface rounded-2xl p-8 shadow-xl"
            >
              <div className="flex items-center mb-6">
                <LotusIcon size="md" className="text-primary-600 dark:text-primary-400 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Book Your Consultation
                </h2>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-dark-bg dark:text-white transition-all duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-dark-bg dark:text-white transition-all duration-200"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-dark-bg dark:text-white transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Service of Interest
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-dark-bg dark:text-white transition-all duration-200"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-dark-bg dark:text-white transition-all duration-200"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Preferred Time
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-dark-bg dark:text-white transition-all duration-200"
                    >
                      <option value="">Select time</option>
                      <option value="morning">Morning (9 AM - 12 PM)</option>
                      <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                      <option value="evening">Evening (4 PM - 7 PM)</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-dark-bg dark:text-white transition-all duration-200"
                    placeholder="Tell us about your condition or any specific questions..."
                  />
                </div>
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-600 to-plum-700 text-white font-semibold rounded-xl hover:from-primary-700 hover:to-plum-800 transition-all duration-200 shadow-lg"
                >
                  <Send className="mr-2 w-5 h-5" />
                  Send Message
                </motion.button>
              </form>
              
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center">
                We respect your privacy. Your information will never be shared with third parties.
              </p>
            </motion.div>

            {/* Additional Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Quick Actions */}
              <div className="bg-white dark:bg-dark-bg p-8 rounded-2xl shadow-lg border border-primary-100 dark:border-primary-800">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <LotusIcon size="sm" className="text-primary-600 dark:text-primary-400 mr-2" />
                  Quick Actions
                </h3>
                <div className="space-y-4">
                  <motion.a
                    href="tel:+91-40-1234-5678"
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-4 p-4 bg-red-50 dark:bg-red-900/20 rounded-xl hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors duration-200 border border-red-200 dark:border-red-800"
                  >
                    <Phone className="w-6 h-6 text-red-600 dark:text-red-400" />
                    <div>
                      <span className="text-red-700 dark:text-red-300 font-semibold block">Emergency Call</span>
                      <span className="text-red-600 dark:text-red-400 text-sm">Available 24/7</span>
                    </div>
                  </motion.a>
                  
                  <motion.a
                    href="https://wa.me/919123456789"
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-xl hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors duration-200 border border-green-200 dark:border-green-800"
                  >
                    <MessageSquare className="w-6 h-6 text-green-600 dark:text-green-400" />
                    <div>
                      <span className="text-green-700 dark:text-green-300 font-semibold block">WhatsApp Chat</span>
                      <span className="text-green-600 dark:text-green-400 text-sm">Quick responses</span>
                    </div>
                  </motion.a>
                  
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-4 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-xl hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors duration-200 w-full border border-primary-200 dark:border-primary-800"
                  >
                    <Calendar className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    <div className="text-left">
                      <span className="text-primary-700 dark:text-primary-300 font-semibold block">Schedule Online</span>
                      <span className="text-primary-600 dark:text-primary-400 text-sm">Book appointment</span>
                    </div>
                  </motion.button>
                </div>
              </div>

              {/* Department Numbers */}
              <div className="bg-white dark:bg-dark-bg p-8 rounded-2xl shadow-lg border border-primary-100 dark:border-primary-800">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  Department Contact Numbers
                </h3>
                <div className="space-y-4">
                  {departments.map((dept, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 dark:border-gray-700 last:border-b-0">
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white">{dept.name}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">{dept.available}</div>
                      </div>
                      <a
                        href={`tel:${dept.phone}`}
                        className="text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200"
                      >
                        {dept.phone}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-white dark:bg-dark-bg p-8 rounded-2xl shadow-lg border border-primary-100 dark:border-primary-800">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  Find Us
                </h3>
                <div className="bg-gray-200 dark:bg-gray-700 h-64 rounded-xl flex items-center justify-center relative overflow-hidden">
                  <div className="text-center text-gray-500 dark:text-gray-400 z-10">
                    <MapPin className="w-12 h-12 mx-auto mb-2" />
                    <p className="font-medium">Interactive Map</p>
                    <p className="text-sm">Road No. 14, Banjara Hills</p>
                    <p className="text-sm">Hyderabad, Telangana 500034</p>
                  </div>
                  <div className="absolute inset-0 opacity-10">
                    <LotusPattern count={8} opacity={0.3} />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;