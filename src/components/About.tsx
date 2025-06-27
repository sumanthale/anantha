import { motion } from 'framer-motion';
import { Building, Users, Heart, Stethoscope, Award, Target } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Building,
      title: '65,000 Sq. Ft. Facility',
      description: 'State-of-the-art infrastructure designed for optimal healing environments',
    },
    {
      icon: Users,
      title: '75 Beds Capacity',
      description: 'Comfortable, modern patient rooms with advanced medical equipment',
    },
    {
      icon: Heart,
      title: 'Holistic Approach',
      description: 'Integrating traditional and modern therapies for comprehensive care',
    },
    {
      icon: Stethoscope,
      title: 'Multidisciplinary Team',
      description: 'Expert specialists collaborating for personalized treatment plans',
    },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'Every patient receives personalized attention with empathy and understanding',
    },
    {
      icon: Award,
      title: 'Clinical Excellence',
      description: 'Evidence-based treatments delivered by highly qualified specialists',
    },
    {
      icon: Target,
      title: 'Patient-Centered',
      description: 'Your recovery goals drive every aspect of our treatment approach',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-dark-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Anantha Rehab
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Leading South India's rehabilitation revolution with comprehensive, 
            compassionate care that transforms lives and restores hope.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Our Mission: Restoring Lives, One Patient at a Time
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                At Anantha Rehab, we believe that every individual deserves access to world-class 
                rehabilitation and pain management services. Our commitment goes beyond treatment – 
                we partner with patients and families on their journey to recovery, independence, and renewed quality of life.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Founded with a vision to bridge the gap in specialized rehabilitation care in South India, 
                we've built a center of excellence that combines cutting-edge technology with compassionate, 
                personalized care. Our multidisciplinary approach ensures that every aspect of your health 
                and wellbeing is addressed.
              </p>
            </div>

            <div className="bg-gradient-to-r from-primary-50 to-lavender-50 dark:from-primary-900/20 dark:to-lavender-900/20 p-6 rounded-xl border border-primary-100 dark:border-primary-800">
              <h4 className="text-lg font-semibold text-primary-800 dark:text-primary-300 mb-2">
                Why Choose Anantha Rehab?
              </h4>
              <p className="text-primary-700 dark:text-primary-300">
                We're not just another healthcare facility. We're your partners in recovery, 
                committed to providing evidence-based treatments in a supportive, healing environment 
                that feels like home.
              </p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Modern healthcare facility interior"
              className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-dark-bg p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-plum-600 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-dark-bg rounded-2xl p-8 md:p-12 shadow-lg"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Core Values
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              These principles guide everything we do, from patient care to facility design, 
              ensuring excellence in every interaction.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-lavender-100 dark:from-primary-900/30 dark:to-lavender-900/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                  <value.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;