import { motion } from 'framer-motion';
import { Download, BookOpen, FileText, Video, HeadphonesIcon, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const Resources = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you! Your download will begin shortly.');
    setIsFormOpen(false);
    setFormData({ name: '', email: '', phone: '' });
  };

  const resources = [
    {
      icon: FileText,
      title: 'Pain Management Guide',
      description: 'Comprehensive strategies for managing chronic pain at home',
      type: 'PDF Guide',
    },
    {
      icon: Video,
      title: 'Exercise Videos',
      description: 'Therapeutic exercises you can do from the comfort of your home',
      type: 'Video Series',
    },
    {
      icon: BookOpen,
      title: 'Recovery Journal',
      description: 'Track your progress and celebrate milestones in your healing journey',
      type: 'Interactive Tool',
    },
    {
      icon: HeadphonesIcon,
      title: 'Meditation Audio',
      description: 'Guided relaxation and mindfulness sessions for stress relief',
      type: 'Audio Library',
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Resource Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary-600 to-plum-700 rounded-3xl p-8 md:p-12 text-white mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
                📚 Free Educational Resource
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold">
                "7 Myths About Chronic Pain"
              </h2>
              
              <p className="text-lg text-primary-50 leading-relaxed">
                Discover the truth about chronic pain management and learn evidence-based 
                strategies from our pain specialists. This comprehensive guide debunks common 
                misconceptions and provides actionable insights for better pain management.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center text-primary-100">
                  <div className="w-2 h-2 bg-lavender-300 rounded-full mr-3" />
                  Understanding pain mechanisms and triggers
                </div>
                <div className="flex items-center text-primary-100">
                  <div className="w-2 h-2 bg-lavender-300 rounded-full mr-3" />
                  Non-pharmaceutical pain management techniques
                </div>
                <div className="flex items-center text-primary-100">
                  <div className="w-2 h-2 bg-lavender-300 rounded-full mr-3" />
                  When to seek professional help
                </div>
                <div className="flex items-center text-primary-100">
                  <div className="w-2 h-2 bg-lavender-300 rounded-full mr-3" />
                  Latest treatment innovations
                </div>
              </div>
              
              <motion.button
                onClick={() => setIsFormOpen(true)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center px-8 py-4 bg-white text-primary-700 font-semibold rounded-xl hover:bg-primary-50 transition-all duration-200 shadow-lg"
              >
                <Download className="mr-2 w-5 h-5" />
                Download Free Guide
              </motion.button>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/256559/pexels-photo-256559.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Educational resources and guides"
                className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl" />
              <div className="absolute bottom-6 left-6 bg-white p-4 rounded-xl shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-plum-600 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">32 Pages</div>
                    <div className="text-sm text-gray-600">Expert Insights</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              More Helpful Resources
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Access our library of educational materials, exercise guides, and recovery tools 
              to support your rehabilitation journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-dark-surface p-6 rounded-xl hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-lavender-100 dark:from-primary-900/30 dark:to-lavender-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                  <resource.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <span className="text-xs font-semibold text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 px-2 py-1 rounded-full">
                  {resource.type}
                </span>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mt-3 mb-2">
                  {resource.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {resource.description}
                </p>
                <div className="flex items-center text-primary-600 dark:text-primary-400 text-sm font-medium">
                  Access Resource
                  <ArrowRight className="ml-1 w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Download Form Modal */}
        {isFormOpen && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white dark:bg-dark-bg rounded-2xl p-8 max-w-md w-full shadow-2xl"
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Download Your Free Guide
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Enter your details to receive "7 Myths About Chronic Pain"
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-dark-surface dark:text-white"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-dark-surface dark:text-white"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-dark-surface dark:text-white"
                  />
                </div>

                <div className="flex space-x-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setIsFormOpen(false)}
                    className="flex-1 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-surface transition-colors duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-primary-600 to-plum-700 text-white rounded-lg hover:from-primary-700 hover:to-plum-800 transition-all duration-200"
                  >
                    Download Guide
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Resources;