import { motion } from 'framer-motion';
import { Building, Users, Heart, Stethoscope, Award, Target, Clock, Shield, Star } from 'lucide-react';
import LotusIcon from '../components/LotusIcon';
import LotusPattern from '../components/LotusPattern';

const About = () => {
  const milestones = [
    { year: '2008', title: 'Foundation', description: 'Anantha Rehab was established with a vision to provide world-class rehabilitation services' },
    { year: '2012', title: 'Expansion', description: 'Expanded to 65,000 sq. ft. facility with advanced equipment and 75 beds' },
    { year: '2016', title: 'Accreditation', description: 'Received NABH accreditation for quality healthcare standards' },
    { year: '2020', title: 'Innovation', description: 'Introduced cutting-edge pain management and robotic rehabilitation' },
    { year: '2024', title: 'Excellence', description: 'Recognized as South India\'s premier rehabilitation center' },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'Every patient receives personalized attention with empathy and understanding, treating not just the condition but the whole person.',
    },
    {
      icon: Award,
      title: 'Clinical Excellence',
      description: 'Evidence-based treatments delivered by highly qualified specialists using the latest medical technologies and protocols.',
    },
    {
      icon: Target,
      title: 'Patient-Centered',
      description: 'Your recovery goals drive every aspect of our treatment approach, ensuring personalized care plans for optimal outcomes.',
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Rigorous safety protocols and infection control measures ensure the highest standards of patient safety and care.',
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock medical support and emergency care available whenever you need us most.',
    },
    {
      icon: Star,
      title: 'Continuous Innovation',
      description: 'Constantly evolving our practices with the latest research and technology to provide cutting-edge treatments.',
    },
  ];

  const leadership = [
    {
      name: 'Dr. Anusha Karumuri',
      title: 'Founder & Director',
      image: 'https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Visionary leader with 15+ years in pain management and rehabilitation medicine.',
    },
    {
      name: 'Dr. Rajesh Kumar',
      title: 'Chief Medical Officer',
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Expert neurologist specializing in stroke rehabilitation and spinal cord injuries.',
    },
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
              About Anantha Rehab
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Transforming Lives Through{' '}
              <span className="bg-gradient-to-r from-primary-600 to-plum-700 bg-clip-text text-transparent">
                Compassionate Care
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              For over 15 years, we've been South India's trusted partner in rehabilitation, 
              combining advanced medical expertise with genuine compassion to restore hope and independence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <img
                src="https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Modern healthcare facility"
                className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Our Mission: Restoring Lives, One Patient at a Time
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                At Anantha Rehab, we believe that every individual deserves access to world-class 
                rehabilitation and pain management services. Our commitment goes beyond treatment – 
                we partner with patients and families on their journey to recovery, independence, and renewed quality of life.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Building className="w-5 h-5 text-primary-600" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">65,000 Sq. Ft. Facility</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-primary-600" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">75 Beds Capacity</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Stethoscope className="w-5 h-5 text-primary-600" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">50+ Specialists</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="w-5 h-5 text-primary-600" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">10,000+ Lives Touched</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50 dark:bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Journey of Excellence
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From humble beginnings to becoming South India's premier rehabilitation center, 
              our journey has been marked by continuous innovation and unwavering commitment to patient care.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-primary-200 dark:bg-primary-800"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-dark-surface"></div>
                  
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white dark:bg-dark-bg p-6 rounded-xl shadow-lg border border-primary-100 dark:border-primary-800">
                      <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              These principles guide everything we do, from patient care to facility design, 
              ensuring excellence in every interaction.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-dark-surface p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-lavender-100 dark:from-primary-900/30 dark:to-lavender-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                  <value.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-plum-700 text-white relative overflow-hidden">
        <div className="absolute top-10 right-10 opacity-10">
          <LotusIcon size="xl" className="w-40 h-40" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Visionary Leadership
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Our leadership team combines decades of medical expertise with a shared vision 
              of transforming rehabilitation care in South India.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {leadership.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white/20"
                  />
                  <div className="absolute -bottom-2 -right-2">
                    <LotusIcon size="md" className="text-white/80" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">{leader.name}</h3>
                <p className="text-primary-200 font-medium mb-4">{leader.title}</p>
                <p className="text-primary-100 leading-relaxed">{leader.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;