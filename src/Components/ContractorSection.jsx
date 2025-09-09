import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { motion } from 'framer-motion';

const contractors = [
  {
    name: 'Mr. John Doe',
    image:
      'https://demo8.eightheme.com/mindo/wp-content/uploads/sites/10/elementor/thumbs/confident-contractor-on-construction-site-r2cjufdwfirxzknob0d6zoo93w0fsgv6isn60zh7wg.jpg',
  },
  {
    name: 'Ms. Jane Smith',
    image:
      'https://demo8.eightheme.com/mindo/wp-content/uploads/sites/10/elementor/thumbs/female-contractor-admiring-a-new-construction-object-r2cjuaophclidiui2gc257uy4ynlpzciu5dqmlo6rk.jpg',
  },
  {
    name: 'Mr. Mike Johnson',
    image:
      'https://demo8.eightheme.com/mindo/wp-content/uploads/sites/10/elementor/thumbs/image-of-building-contractor-working-at-new-building-construction-site--r2cjumwly728kgcr33m7jmrxuyzdi1p17tv1v762io.jpg',
  },
];

// Animation variants for cards
const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6, ease: 'easeOut' },
  }),
};

const ContractorCard = ({ image, name, index }) => {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={cardVariants}
      className="group relative overflow-hidden rounded-[2rem] shadow-2xl transition-transform hover:scale-[1.05] cursor-pointer"
    >
      <img
        src={image}
        alt={name}
        className="w-full h-[350px] md:h-[400px] object-cover rounded-[2rem]"
      />

      {/* Hover Overlay & Social Icons */}
      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center rounded-[2rem]">
        <div className="flex gap-6">
          {[FaFacebookF, FaTwitter, FaLinkedinIn].map((Icon, idx) => (
            <a
              key={idx}
              href="#"
              aria-label={`Visit ${name}'s social media`}
              className="text-black bg-yellow-400 p-3 rounded-lg text-xl hover:bg-white hover:text-yellow-500 transform hover:scale-110 hover:shadow-lg transition-all duration-300"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>

      {/* Name Label */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-orange-500 to-yellow-400 text-white text-center py-3 font-semibold rounded-b-[2rem]">
        {name}
      </div>
    </motion.div>
  );
};

const ContractorsSection = () => {
  return (
    <section className="bg-[#353200] text-white py-20 px-6 md:px-12">
      {/* Badge */}
      <div className="text-center mb-6">
        <span className="inline-block text-yellow-400 border border-yellow-400 px-5 py-1 rounded-full text-sm tracking-wider font-semibold">
          TEAM WORK
        </span>
      </div>

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-14 leading-snug max-w-3xl mx-auto">
        Discover Our Professionalism <br /> and Contractors Work.
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {contractors.map((contractor, index) => (
          <ContractorCard key={index} index={index} {...contractor} />
        ))}
      </div>
    </section>
  );
};

export default ContractorsSection;
