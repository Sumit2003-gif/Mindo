import React from 'react';
import { motion } from 'framer-motion';
import HomeHero from '../Components/HeroSection';
import ContactSection from '../Components/ContactSection';

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#fffdf4] text-gray-900">
      {/* Animated Hero Section */}
      
        <HomeHero
          header="CONTACT US"
          text="Have a project in mind"
          texter1="Contact us now"
          paragraph="Our company delivers exceptional construction services backed by 25 years of experience."
        />

      {/* Animated Contact Form Section */}
      
        <ContactSection />
    </div>
  );
};

export default Contact;
