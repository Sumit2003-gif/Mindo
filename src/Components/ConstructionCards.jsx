import React from 'react';
import { motion } from 'framer-motion';

const cards = [
  {
    id: 1,
    title: 'Residential Construction',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon: (
      <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 22V12h6v10" />
      </svg>
    ),
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg',
  },
  {
    id: 2,
    title: 'Commercial Construction',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon: (
      <svg className="w-8 h-8 text-yellow-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M9 21V10m6 11V10m-3-7v7" />
        <rect x="7" y="3" width="10" height="7" rx="2" />
      </svg>
    ),
    image: 'https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg',
  },
  {
    id: 3,
    title: 'Concrete & Masonry',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon: (
      <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 12h7v7h-7z" />
      </svg>
    ),
    image: 'https://images.pexels.com/photos/1145434/pexels-photo-1145434.jpeg',
  },
  {
    id: 4,
    title: 'Roofing & Siding',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon: (
      <svg className="w-8 h-8 text-yellow-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 21V9h6v12" />
      </svg>
    ),
    image: 'https://images.pexels.com/photos/8448746/pexels-photo-8448746.jpeg',
  },
  {
    id: 5,
    title: 'Plumbing & Electrical',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon: (
      <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v6m0 6v6m-6-6h12" />
      </svg>
    ),
    image: 'https://images.pexels.com/photos/4254162/pexels-photo-4254162.jpeg',
  },
  {
    id: 6,
    title: 'Landscaping & Outdoor Spaces',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon: (
      <svg className="w-8 h-8 text-yellow-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12l2 2 4-4" />
      </svg>
    ),
    image: 'https://images.pexels.com/photos/8448761/pexels-photo-8448761.jpeg',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

const ConstructionCards = () => {
  return (
    <div
      className="relative py-16 px-6 md:px-12 text-center text-white"
      style={{ backgroundColor: '#3b3a00' }}
    >
      {/* Background image behind content */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('https://demo8.eightheme.com/mindo/wp-content/uploads/sites/10/2025/03/futuristic-geometric-shape-composition-backgrounds-2023-11-27-05-32-33-utc-1-1.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 1,
          opacity: 0.2,
        }}
      ></div>

      <div className="mb-8 relative z-10 max-w-4xl mx-auto">
        <button className="inline-flex items-center gap-2 border border-yellow-300 text-yellow-300 rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-wider hover:bg-yellow-400 hover:text-white transition">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
          What We Do
        </button>
        <h2 className="text-3xl md:text-4xl font-extrabold mt-4 leading-tight">
          Comprehensive Construction Services For Every Need.
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
        {cards.map((card, idx) => {
          const isWhiteOverlay = idx % 2 === 0;

          return (
            <motion.div
              key={card.id}
              custom={idx}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(0,0,0,0.4)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="relative rounded-3xl overflow-hidden cursor-pointer group shadow-md"
              style={{
                backgroundImage: `url(${card.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '320px',
                willChange: 'transform',
              }}
            >
              {/* White overlay */}
              {isWhiteOverlay && (
                <div className="absolute inset-0 bg-white rounded-3xl transition-opacity duration-500 group-hover:opacity-0 pointer-events-none"></div>
              )}

              {/* Content */}
              <div
                className={`relative z-10 p-10 flex flex-col items-center justify-center h-full text-center transition-colors duration-300 ${
                  isWhiteOverlay ? 'text-black group-hover:text-white' : 'text-white'
                }`}
              >
                <div className="mb-6">{card.icon}</div>
                <h3 className="text-lg font-semibold mb-3">{card.title}</h3>
                <p
                  className={`mb-6 max-w-xs ${
                    isWhiteOverlay ? 'text-gray-600 group-hover:text-yellow-100' : 'text-yellow-100'
                  }`}
                >
                  {card.description}
                </p>
                <button
                  className={`rounded-full px-6 py-2 font-semibold transition ${
                    isWhiteOverlay
                      ? 'bg-yellow-300 text-black hover:bg-yellow-400'
                      : 'bg-white text-black hover:bg-yellow-300'
                  }`}
                >
                  Learn More &rarr;
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ConstructionCards;
