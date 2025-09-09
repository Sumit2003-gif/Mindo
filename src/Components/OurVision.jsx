import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

const OurVision = () => {
  const features = [
    {
      title: 'Experienced Professionals',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut elit tellus luctus.',
    },
    {
      title: 'On-Time Project Delivery',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut elit tellus luctus.',
    },
    {
      title: 'Innovative Building Solutions',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut elit tellus luctus.',
    },
    {
      title: 'Certified & Insured',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut elit tellus luctus.',
    },
  ];

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat text-white min-h-[90vh]"
      style={{
        backgroundImage:
          "url('https://demo8.eightheme.com/mindo/wp-content/uploads/sites/10/2025/03/construction-site-with-cranes-at-sunset-construction-of-an-apartment-building.jpg')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Main Content */}
      <div className="relative z-10 text-center py-20 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Top Heading */}
        <motion.button
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={0}
          className="text-yellow-400 font-semibold border border-yellow-400 px-4 py-1 rounded-full text-sm tracking-wider mb-6 hover:bg-yellow-400 hover:text-black transition"
        >
          OUR VISION
        </motion.button>

        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={1}
          className="text-4xl md:text-5xl font-bold leading-tight mb-4 max-w-4xl mx-auto"
        >
          Delivering High-Quality Construction Solutions With Precision.
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={2}
          className="text-lg md:text-xl text-gray-200 mb-16 max-w-3xl mx-auto"
        >
          We build with integrity and precision to deliver long-lasting value.
        </motion.p>

        {/* Bottom Content Section */}
        <div className="flex flex-col lg:flex-row gap-10 justify-between items-start lg:items-stretch">
          {/* Left Orange Box */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="bg-gradient-to-b from-orange-500 to-yellow-400 text-white rounded-[2rem] p-8 lg:w-1/3 shadow-lg flex flex-col"
          >
            <h2 className="text-2xl font-bold mb-4">
              Our Commitment To <br /> Excellence Work.
            </h2>
            <p className="mb-6 text-white/90 flex-grow">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut elit
              tellus luctus nec ullamcorper mattis.
            </p>

            <hr className="border-white/40 mb-6" />

            <ul className="space-y-4 text-white text-left">
              <li className="flex items-start gap-3">
                <FaCheck className="mt-1" />
                Every project is built with precision
              </li>
              <li className="flex items-start gap-3">
                <FaCheck className="mt-1" />
                We prioritize transparency
              </li>
              <li className="flex items-start gap-3">
                <FaCheck className="mt-1" />
                Using eco-friendly materials
              </li>
            </ul>
          </motion.div>

          {/* Right Feature Grid */}
          <div
            className="relative rounded-[2rem] overflow-hidden flex-1 p-6 md:p-8 grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10"
            style={{
              backgroundImage:
                "url('https://demo8.eightheme.com/mindo/wp-content/uploads/sites/10/2025/03/futuristic-geometric-shape-composition-backgrounds-2023-11-27-05-32-33-utc-1-1.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Olive overlay */}
            <div className="absolute inset-0 bg-[#353200]/90 z-0 rounded-[2rem]"></div>

            {/* Features */}
            {features.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 * i, duration: 0.6, ease: 'easeOut' }}
                className="relative z-10 flex flex-col gap-3 bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg cursor-pointer hover:scale-[1.03] hover:shadow-2xl transition-transform"
              >
                <FaCheck className="text-yellow-300 text-xl" />
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="text-gray-200 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurVision;
