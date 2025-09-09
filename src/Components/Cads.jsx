import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Card = ({ id, image, category, date, title, description }) => {
  return (
    <motion.div
      className="rounded-3xl overflow-hidden shadow-md bg-[#353104] text-white w-full max-w-sm mx-auto cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      whileHover={{ scale: 1.05 }}
      layout
    >
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-56 sm:h-64 md:h-72 object-cover transition-transform duration-500 ease-in-out"
          whileHover={{ rotate: 3, scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        />

        {/* Category Label */}
        <div className="absolute top-4 left-4 bg-white text-yellow-900 font-semibold px-4 py-1 text-sm rounded-full select-none">
          {category}
        </div>

        {/* Date */}
        <div className="absolute bottom-0 left-4 bg-orange-500 text-white text-center px-3 py-2 rounded-t-md select-none">
          <p className="text-xs font-bold">{date?.day}</p>
          <p className="text-[10px] uppercase tracking-widest">{date?.month}</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm sm:text-base text-yellow-100 mb-4">{description}</p>
        <Link
          to={`/blogs/${id}`}
          className="text-yellow-400 font-medium inline-flex items-center group hover:underline"
        >
          Read More
          <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </motion.div>
  );
};

export default Card;
