import { motion } from 'framer-motion';
import { Brain, Bone, Heart, Settings as Lungs, Users, Baby, ArrowRight, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: 'Neuro Rehabilitation',
      description: 'Comprehensive recovery programs for stroke, spinal cord injuries, and neurological conditions',
      features: ['Stroke Recovery', 'Spinal Cord Injury', 'Traumatic Brain Injury', 'Multiple Sclerosis'],
      gradient: 'from-blue-500 to-indigo-600',
    },
    {
      icon: Bone,
      title: 'Orthopedic Rehabilitation',
      description: 'Advanced therapy for joint replacements, fractures, and musculoskeletal disorders',
      features: ['Joint Replacement', 'Sports Injuries', 'Fracture Recovery', 'Arthritis Management'],
      gradient: 'from-green-500 to-emerald-600',
    },
    {
      icon: Heart,
      title: 'Cardiac Rehabilitation',
      description: 'Specialized programs for heart attack recovery and cardiovascular health improvement',
      features: ['Post-Heart Attack', 'Cardiac Surgery Recovery', 'Heart Failure Management', 'Prevention Programs'],
      gradient: 'from-red-500 to-pink-600',
    },
    {
      icon: Lungs,
      title: 'Pulmonary Rehabilitation',
      description: 'Breathing therapy and lung function improvement for respiratory conditions',
      features: ['COPD Management', 'Post-COVID Recovery', 'Asthma Control', 'Breathing Techniques'],
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      icon: Users,
      title: 'Geriatric Care',
      description: 'Specialized rehabilitation services tailored for elderly patients and age-related conditions',
      features: ['Fall Prevention', 'Mobility Enhancement', 'Cognitive Health', 'Balance Training'],
      gradient: 'from-purple-500 to-violet-600',
    },
    {
      icon: Baby,
      title: 'Pediatric Rehabilitation',
      description: 'Comprehensive therapy programs designed specifically for children and adolescents',
      features: ['Developmental Delays', 'Cerebral Palsy', 'Learning Disabilities', 'Autism Support'],
      gradient: 'from-orange-500 to-red-600',
    },
  ];

  const painManagement = {
    title: 'Advanced Pain Management Clinic',
    subtitle: 'Led by Dr. Anusha Karumuri - Pain Medicine Specialist',
    description: 'Our specialized pain clinic offers cutting-edge, non-surgical treatments for chronic pain conditions using the latest evidence-based approaches.',
    treatments: [
      'Interventional Pain Procedures',
      'Chronic Pain Management',
      'Cancer Pain Relief',
      'Neuropathic Pain Treatment',
      'Regenerative Medicine',
      'Minimally Invasive Procedures',
    ],
  };

  return (
    <section id="services" className="py-20 bg-white dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Comprehensive Rehabilitation Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From neurological recovery to pain management, we offer specialized care 
            across all major rehabilitation disciplines under one roof.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-gray-50 dark:bg-dark-surface rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <div className="w-2 h-2 bg-primary-400 rounded-full mr-3" />
                    {feature}
                  </div>
                ))}
              </div>
              
              <motion.button
                whileHover={{ x: 5 }}
                className="flex items-center text-primary-600 dark:text-primary-400 font-medium group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors duration-200"
              >
                Learn More
                <ArrowRight className="ml-2 w-4 h-4" />
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Pain Management Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary-600 to-plum-700 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold">{painManagement.title}</h3>
                  <p className="text-primary-100 text-sm">{painManagement.subtitle}</p>
                </div>
              </div>
              
              <p className="text-lg text-primary-50 leading-relaxed">
                {painManagement.description}
              </p>
              
              <div className="grid sm:grid-cols-2 gap-3">
                {painManagement.treatments.map((treatment, idx) => (
                  <div key={idx} className="flex items-center text-primary-50">
                    <div className="w-2 h-2 bg-lavender-300 rounded-full mr-3" />
                    {treatment}
                  </div>
                ))}
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center px-8 py-4 bg-white text-primary-700 font-semibold rounded-xl hover:bg-primary-50 transition-all duration-200 shadow-lg"
              >
                Schedule Pain Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Advanced pain management therapy session"
                className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-700">95%</div>
                  <div className="text-sm text-gray-600">Pain Reduction</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;