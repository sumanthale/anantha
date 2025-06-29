import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import WhyChoose from '../components/WhyChoose';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';
import Resources from '../components/Resources';
import Contact from '../components/Contact';
import Services from './Services';

const Home = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      {/* <About /> */}
      <div className='-pt-20'></div>
      <Services />
      <WhyChoose />
      <Team />
      <Testimonials />
      <Resources />
      <Contact />
    </motion.main>
  );
};

export default Home;