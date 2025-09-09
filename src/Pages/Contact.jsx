import React from 'react';
import { motion } from 'framer-motion';
import HomeHero from '../Components/HeroSection';
import ContactSection from '../Components/ContactSection';

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#fffdf4] text-gray-900">
      {/* Animated Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="px-6 md:px-12"
      >
        <HomeHero
          header="CONTACT US"
          text="Have a project in mind"
          texter1="Contact us now"
          paragraph="Our company delivers exceptional construction services backed by 25 years of experience."
        />
      </motion.section>

      {/* Animated Contact Form Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
        className="px-6 md:px-12 py-16 max-w-5xl mx-auto"
      >
        <ContactSection />
      </motion.section>
    </div>
  );
};

export default Contact;
