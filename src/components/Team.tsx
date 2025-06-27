import { motion } from 'framer-motion';
import { Award, GraduationCap, Users, Heart } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Dr. Anusha Karumuri',
      title: 'Director & Pain Medicine Specialist',
      image: 'https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialization: 'Interventional Pain Management',
      experience: '15+ Years',
      education: 'MD, Fellowship in Pain Medicine',
      achievements: [
        'Board Certified Pain Medicine Specialist',
        'Published researcher in pain management',
        'International conference speaker',
        'Pioneer in minimally invasive procedures',
      ],
    },
    {
      name: 'Dr. Rajesh Kumar',
      title: 'Chief Neurologist',
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialization: 'Neuro Rehabilitation',
      experience: '12+ Years',
      education: 'MD Neurology, DM Neurology',
      achievements: [
        'Specialist in stroke rehabilitation',
        'Expert in spinal cord injuries',
        'Research in neuroplasticity',
        'Award for clinical excellence',
      ],
    },
    {
      name: 'Dr. Priya Sharma',
      title: 'Head Physiotherapist',
      image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialization: 'Orthopedic & Sports Physiotherapy',
      experience: '10+ Years',
      education: 'MPT, Certified Manual Therapist',
      achievements: [
        'Certified in advanced manual therapy',
        'Sports injury rehabilitation expert',
        'International certification holder',
        'Published therapy protocols',
      ],
    },
  ];

  const stats = [
    { icon: Users, label: 'Expert Specialists', value: '50+' },
    { icon: Award, label: 'Years Combined Experience', value: '200+' },
    { icon: GraduationCap, label: 'Board Certifications', value: '25+' },
    { icon: Heart, label: 'Patients Treated', value: '10,000+' },
  ];

  return (
    <section id="team" className="py-20 bg-white dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Meet Our Expert Team
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our multidisciplinary team of specialists brings together decades of experience 
            and cutting-edge expertise to deliver exceptional patient care.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-lavender-100 dark:from-primary-900/30 dark:to-lavender-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Team Members */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-dark-surface rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-sm font-medium">{member.experience}</div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                  {member.title}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {member.specialization}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    Education
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {member.education}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    Key Achievements
                  </h4>
                  <ul className="space-y-1">
                    {member.achievements.slice(0, 2).map((achievement, idx) => (
                      <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                        <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 mr-2 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-600 to-plum-700 rounded-2xl p-8 md:p-12 text-center text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Meet Our Team?
          </h3>
          <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our specialists and take the first step 
            towards your recovery journey with personalized, expert care.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center px-8 py-4 bg-white text-primary-700 font-semibold rounded-xl hover:bg-primary-50 transition-all duration-200 shadow-lg"
          >
            Schedule Consultation
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;