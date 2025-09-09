import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const HomeHero = ({
  header = "",
  text = "",
  texter1 = "",
  paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  backgroundImages = [
    'https://demo8.eightheme.com/mindo/wp-content/uploads/sites/10/2025/03/industrial-worker-female-builder-with-working-documents-outdoor-construction-1024x682.jpg',
    'https://demo8.eightheme.com/mindo/wp-content/uploads/sites/10/2025/03/workers-team-working-together-with-contractor-at-construction-site-engineer-project-teamwork-1024x682.jpg',
    'https://demo8.eightheme.com/mindo/wp-content/uploads/sites/10/2025/03/a-male-architect-in-a-hard-hat-safety-vest-reviews-construction-documents-construction-contractor-1024x682.jpg',
  ],
}) => {
  const [currentBgImage, setCurrentBgImage] = useState(0);

  // Rotate background images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgImage((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgroundImages]);

  // Split header into chunks of 3-4 words (not currently used but kept for future)
  const splitHeader = (text, chunkSize = 4) => {
    const words = text.split(' ');
    const chunks = [];
    for (let i = 0; i < words.length; i += chunkSize) {
      chunks.push(words.slice(i, i + chunkSize).join(' '));
    }
    return chunks;
  };

  const headerChunks = splitHeader(header, 4);

  // Animation variants for fade + slide up
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (custom = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.2, duration: 0.6, ease: 'easeOut' },
    }),
  };

  return (
    <div className="relative h-[120vh] overflow-hidden text-white">
      {/* Background with zoom and fade effect */}
      <motion.div
        key={currentBgImage}
        className="absolute inset-0 bg-cover bg-center scale-110 transition-all duration-1000"
        style={{
          backgroundImage: `url(${backgroundImages[currentBgImage]})`,
        }}
        initial={{ opacity: 0.6, scale: 1 }}
        animate={{ opacity: 1, scale: 1.1 }}
        transition={{ duration: 30, ease: 'easeInOut' }} // slow zoom
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-[12%] px-6 md:px-16 mx-auto max-w-7xl">
        <motion.button
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="mb-4 text-[#FFF165] bg-transparent border-2 font-bold px-5 py-2 rounded-full w-fit text-sm md:text-base max-w-max"
        >
          {headerChunks[0] || "Welcome"}
        </motion.button>

        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 pt-2 max-w-4xl"
        >
          {text} <br />
          ensuring <span className="text-[#FFF165]">{texter1}</span>
          <br />
        </motion.h1>

        <motion.div
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 max-w-xl mb-6 text-gray-300 text-lg"
        >
          <p className="flex-1 leading-relaxed">{paragraph}</p>
          {/* Placeholder for future additions */}
        </motion.div>
      </div>
    </div>
  );
};

export default HomeHero;
