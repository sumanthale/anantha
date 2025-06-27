import { motion } from 'framer-motion';
import { Check, X, Star, Award, Users, Clock, Heart, Shield } from 'lucide-react';

const WhyChoose = () => {
  const comparison = [
    { feature: 'Comprehensive Multidisciplinary Team', anantha: true, others: false },
    { feature: '24/7 Medical Support', anantha: true, others: false },
    { feature: 'State-of-the-art Equipment', anantha: true, others: true },
    { feature: 'Personalized Treatment Plans', anantha: true, others: false },
    { feature: 'Pain Management Specialists', anantha: true, others: false },
    { feature: 'Transitional Care Services', anantha: true, others: false },
    { feature: 'Family Counseling & Support', anantha: true, others: false },
    { feature: 'Insurance Accepted', anantha: true, others: true },
  ];

  const advantages = [
    {
      icon: Star,
      title: 'Clinical Excellence',
      description: 'Evidence-based treatments with proven outcomes and continuous quality improvement',
      stat: '95% Success Rate',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Board-certified specialists with decades of combined experience in rehabilitation',
      stat: '50+ Specialists',
    },
    {
      icon: Clock,
      title: 'Rapid Recovery',
      description: 'Accelerated healing protocols that reduce recovery time without compromising quality',
      stat: '40% Faster Recovery',
    },
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'Patient-centered approach with emotional support throughout the healing journey',
      stat: '99% Patient Satisfaction',
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Rigorous safety protocols and infection control measures for peace of mind',
      stat: 'Zero Incidents',
    },
    {
      icon: Award,
      title: 'Accredited Facility',
      description: 'Internationally recognized standards and certifications for quality healthcare',
      stat: 'ISO Certified',
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-dark-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose Anantha Rehab?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Experience the difference that specialized care, advanced technology, 
            and genuine compassion make in your recovery journey.
          </p>
        </motion.div>

        {/* Advantages Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-dark-bg p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-plum-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <advantage.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {advantage.title}
                    </h3>
                    <span className="text-sm font-semibold text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 px-3 py-1 rounded-full">
                      {advantage.stat}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-dark-bg rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="bg-gradient-to-r from-primary-600 to-plum-700 p-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center">
              Anantha Rehab vs. Other Clinics
            </h3>
            <p className="text-primary-100 text-center mt-2">
              See why we're the preferred choice for rehabilitation in South India
            </p>
          </div>

          <div className="p-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left py-4 text-gray-900 dark:text-white font-semibold">
                      Features & Services
                    </th>
                    <th className="text-center py-4 text-primary-600 dark:text-primary-400 font-bold">
                      Anantha Rehab
                    </th>
                    <th className="text-center py-4 text-gray-500 dark:text-gray-400 font-semibold">
                      Other Clinics
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((item, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-dark-surface/50 transition-colors duration-200"
                    >
                      <td className="py-4 text-gray-700 dark:text-gray-300">
                        {item.feature}
                      </td>
                      <td className="py-4 text-center">
                        {item.anantha ? (
                          <div className="inline-flex items-center justify-center w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-full">
                            <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
                          </div>
                        ) : (
                          <div className="inline-flex items-center justify-center w-8 h-8 bg-red-100 dark:bg-red-900/20 rounded-full">
                            <X className="w-5 h-5 text-red-600 dark:text-red-400" />
                          </div>
                        )}
                      </td>
                      <td className="py-4 text-center">
                        {item.others ? (
                          <div className="inline-flex items-center justify-center w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-full">
                            <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
                          </div>
                        ) : (
                          <div className="inline-flex items-center justify-center w-8 h-8 bg-red-100 dark:bg-red-900/20 rounded-full">
                            <X className="w-5 h-5 text-red-600 dark:text-red-400" />
                          </div>
                        )}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 text-center"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-plum-700 text-white font-semibold rounded-xl hover:from-primary-700 hover:to-plum-800 transition-all duration-200 shadow-lg"
              >
                Experience the Anantha Advantage
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChoose;