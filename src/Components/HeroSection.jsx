import React, { useEffect, useState } from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const textVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const HomeHero = () => {
  const userImages = [
    'https://demo8.eightheme.com/mindo/wp-content/uploads/sites/10/2025/03/industrial-worker-female-builder-with-working-documents-outdoor-construction-1536x1024.jpg',
    'https://demo8.eightheme.com/mindo/wp-content/uploads/sites/10/2025/03/workers-team-working-together-with-contractor-at-construction-site-engineer-project-teamwork-1536x1024.jpg',
    'https://demo8.eightheme.com/mindo/wp-content/uploads/sites/10/2025/03/a-male-architect-in-a-hard-hat-safety-vest-reviews-construction-documents-construction-contractor-1536x1024.jpg',
  ];

  const backgroundImages = [
    'https://demo8.eightheme.com/mindo/wp-content/uploads/sites/10/2025/03/industrial-worker-female-builder-with-working-documents-outdoor-construction-1024x682.jpg',
    'https://demo8.eightheme.com/mindo/wp-content/uploads/sites/10/2025/03/workers-team-working-together-with-contractor-at-construction-site-engineer-project-teamwork-1024x682.jpg',
    'https://demo8.eightheme.com/mindo/wp-content/uploads/sites/10/2025/03/a-male-architect-in-a-hard-hat-safety-vest-reviews-construction-documents-construction-contractor-1024x682.jpg',
  ];

  const [currentBgImage, setCurrentBgImage] = useState(0);

  // Detect if section is in view
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgImage((prev) => (prev + 1) % backgroundImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={ref} className="relative h-[100vh] sm:h-[110vh] overflow-hidden text-white">
      {/* Background */}
      <motion.div
        key={currentBgImage}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImages[currentBgImage]})` }}
        initial={{ opacity: 0.4, scale: 1 }}
        animate={{ opacity: 1, scale: 1.1 }}
        transition={{ duration: 10, ease: 'easeInOut' }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-4 sm:px-6 md:px-16 max-w-7xl mx-auto text-center md:text-left">
        {/* Animated Button */}
        <motion.button
          custom={0}
          variants={textVariant}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mb-4 text-[#FFF165] border-2 border-[#FFF165] font-bold px-4 py-2 rounded-full text-sm sm:text-base w-fit mx-auto md:mx-0"
        >
          🛠️ BUILDING EXCELLENCE
        </motion.button>

        {/* Animated Heading */}
        <motion.h1
          custom={1}
          variants={textVariant}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-6"
        >
          Trusted Contractors<br />
          Delivering <span className="text-[#FFF165]">High-Quality</span><br />
          Construction Service.
        </motion.h1>

        {/* Paragraph + Rating */}
        <motion.div
          custom={2}
          variants={textVariant}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 sm:gap-8 mb-6"
        >
          <p className="text-gray-200 text-base md:text-lg max-w-full md:max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>

          {/* User Images + Ratings */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex -space-x-2">
              {userImages.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`User ${idx + 1}`}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <div>
              <div className="flex text-yellow-400 text-xl sm:text-2xl gap-1">
                {'★★★★★'.split('').map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
              </div>
              <p className="text-sm sm:text-base mt-1">
                <span className="text-[#FFF165] font-semibold">98%</span> + Client Satisfaction Rate
              </p>
            </div>
          </div>
        </motion.div>

        {/* Buttons */}
        <motion.div
          custom={3}
          variants={textVariant}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 sm:gap-6"
        >
          <button className="bg-gradient-to-br from-white to-[#FFF165] hover:from-[#FFF165] hover:to-white text-black font-semibold px-6 py-3 rounded-full transition text-center">
            Our Services
          </button>
          <div className="flex items-center gap-2 text-sm sm:text-base">
            <FiPhoneCall className="text-lg sm:text-xl" />
            <span>123 456 789</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomeHero;