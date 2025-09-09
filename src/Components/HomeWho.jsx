import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const HomeWho = () => {
  const location = useLocation();

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat py-16 px-4 sm:px-10 lg:px-20 font-sans"
      style={{
        backgroundImage:
          "url('https://demo8.eightheme.com/mindo/wp-content/uploads/sites/10/2025/03/10-school-paper-texture-hq-2023-11-27-05-02-52-utc-1.jpg')",
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-[#FDFAEF]/90 z-0"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
        {/* Left Image */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <img
            src="https://images.pexels.com/photos/1325725/pexels-photo-1325725.jpeg"
            alt="Construction workers"
            className="w-full max-h-[130vh] rounded-xl object-cover shadow-2xl"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <motion.div
            className="text-orange-500 border border-orange-400 rounded-full px-5 py-2 text-sm font-semibold mb-5 inline-block hover:bg-orange-100 transition"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            WHO WE ARE
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-gray-900"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Expert Craftsmanship & Reliable <br className="hidden md:block" />
            Construction Building Solutions.
          </motion.h1>

          <motion.p
            className="text-gray-700 text-base sm:text-lg mb-8 max-w-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </motion.p>

          {/* Feature section with image */}
          <motion.div
            className="flex flex-col sm:flex-row items-start gap-6 mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="https://demo8.eightheme.com/mindo/wp-content/uploads/sites/10/2025/03/a-male-architect-in-a-hard-hat-safety-vest-reviews-construction-documents-construction-contractor-1536x1024.jpg"
              alt="Certified & Insured"
              className="w-full sm:w-60 h-56 rounded-xl object-cover shadow-lg"
            />
            <div>
              <h2 className="font-bold text-xl sm:text-2xl mb-2">Certified & Insured</h2>
              <p className="text-gray-600 mb-4 text-base sm:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2 text-lg">
                  <span className="text-orange-500 font-bold">✔</span> 15+ Years of Experience
                </li>
                <li className="flex items-center gap-2 text-lg">
                  <span className="text-orange-500 font-bold">✔</span> On-Time & On-Budget Delivery
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Conditional Button */}
          {location.pathname !== '/about' && (
            <Link to="/about">
              <motion.button
                className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-300 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                Learn More →
              </motion.button>
            </Link>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default HomeWho;
