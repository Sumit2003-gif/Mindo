import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlay, FiArrowRight } from 'react-icons/fi';
import {
  FaCity,

} from 'react-icons/fa';

import IncresePart from './IncresePart';

const projectData = {
  "Hotels Building": {
    title: "Hotels Building Projects",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image:
      "https://images.unsplash.com/photo-1613395864011-c4cf6324c18b?auto=format&fit=crop&w=1350&q=80",
    tags: [
      { icon: <FaCity className="text-orange-500 w-5 h-5" />, label: "Heavy Equipment" },
      // Alternative icon: <GiHammer className="text-orange-500 w-5 h-5" />
      { icon: <FaCity className="text-orange-500 w-5 h-5" />, label: "City Building" },
      { icon: <FaCity className="text-orange-500 w-5 h-5" />, label: "Location Survey" }
    ]
  },
  "Modern House": {
    title: "Modern House Projects",
    description:
      "Design-focused and future-ready modern homes crafted for comfort, sustainability, and beauty.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1350&q=80",
    tags: [
      { icon: <FaCity className="text-orange-500 w-5 h-5" />, label: "Smart Design" },
      { icon: <FaCity className="text-orange-500 w-5 h-5" />, label: "Eco Friendly" },
      { icon: <FaCity className="text-orange-500 w-5 h-5" />, label: "Premium Materials" }
    ]
  },
  "City Building": {
    title: "City Building Projects",
    description:
      "Large-scale city infrastructure and skyline-defining developments for growing communities.",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1350&q=80",
    tags: [
      { icon: <FaCity className="text-orange-500 w-5 h-5" />, label: "High Rise" },
      { icon: <FaCity className="text-orange-500 w-5 h-5" />, label: "Urban Planning" },
      // Alternative icon: <MdApartment className="text-orange-500 w-5 h-5" />
      { icon: <FaCity className="text-orange-500 w-5 h-5" />, label: "Commercial Zones" }
    ]
  }
};

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4, ease: "easeIn" } }
};

const HomeProject = () => {
  const [activeTab, setActiveTab] = useState("Hotels Building");

  const currentProject = projectData[activeTab];

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat py-12 pb-0 px-6 md:px-20 font-sans min-h-screen"
      style={{
        backgroundImage:
          "url('https://demo8.eightheme.com/mindo/wp-content/uploads/sites/10/2025/03/10-school-paper-texture-hq-2023-11-27-05-02-52-utc-1.jpg')"
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-[#FDFAEF]/92 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10 max-w-4xl mx-auto">
          <div className="text-orange-500 font-semibold tracking-wide uppercase text-sm mb-2 select-none">
            Featured Projects
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
            Discover Our Proven <br /> Success In Every Build.
          </h1>

          {/* Tabs */}
          <div className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start">
            {Object.keys(projectData).map((name, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(name)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
                  activeTab === name
                    ? 'bg-gradient-to-r from-orange-500 to-yellow-400 text-white shadow-lg'
                    : 'bg-yellow-900 text-yellow-300 hover:bg-yellow-800'
                }`}
                aria-pressed={activeTab === name}
              >
                {name}
              </button>
            ))}
          </div>
        </div>

        {/* Project Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex flex-col lg:flex-row bg-white rounded-3xl shadow-lg overflow-hidden"
          >
            {/* Image Section */}
            <div className="relative w-full lg:w-1/2 h-80 lg:h-auto group">
              <img
                src={currentProject.image}
                alt={currentProject.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-yellow-400 transition-colors">
                  <FiPlay className="w-6 h-6 text-orange-500" aria-hidden="true" />
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="p-6 flex-1 flex flex-col justify-center">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                {currentProject.title}
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {currentProject.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-6 text-sm text-gray-700 mb-6">
                {currentProject.tags.map(({ icon, label }, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 cursor-default select-none hover:underline transition"
                    aria-label={label}
                    title={label}
                  >
                    {icon}
                    <span className="text-orange-500">{label}</span>
                  </div>
                ))}
              </div>
                <Link to="/about"> 
              <button
                className="bg-gradient-to-r cursor-pointer from-yellow-400 to-yellow-500 text-black font-medium px-6 py-2 rounded-full shadow-md hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-yellow-400 w-max flex items-center gap-2"
                aria-label={`See details of ${currentProject.title}`}
              >
                See Detail <FiArrowRight />
              </button>\
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Counter Section */}
        <section className="pt-[10%] -mb-[10%]">
          <IncresePart />
        </section>
      </div>
    </div>
  );
};

export default HomeProject;
