import React from 'react';
import { motion } from 'framer-motion';
import HomeHero from '../Components/HeroSection';
import ContactSection from '../Components/ContactSection';
import PageHero from '../Components/HeroAllSection';

const Contact = () => {
    const breadcrumbs = [
    { label: 'Contact', link: '/about' }
  ];

  return (
    <div className="min-h-screen bg-[#fffdf4] text-gray-900">
      {/* Animated Hero Section */}
      
        <PageHero
         title="Get In Touch"
      subtitle="REACH OUT"
      image="https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg"
      breadcrumbs={breadcrumbs}
        />

      {/* Animated Contact Form Section */}
      
        <ContactSection />
    </div>
  );
};

export default Contact;
