import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';

import TestimonialCard from './Testeinomial'; // your reusable testimonial card
import { Link } from 'react-router-dom';

const testimonials = [
  {
    name: 'Mr. John Doe',
    role: 'Client',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
    stars: 5,
  },
  {
    name: 'Ms. Sarah Smith',
    role: 'Customer',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    quote: 'Amazing experience! The quality and professionalism were top-notch.',
    stars: 4,
  },
  {
    name: 'Mr. Alex Johnson',
    role: 'Client',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    quote: 'Highly recommended. The team was professional and fast.',
    stars: 5,
  },
  {
    name: 'Mrs. Emma Brown',
    role: 'Client',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    quote: 'Exceptional service and attention to detail. Truly impressed!',
    stars: 5,
  },
  {
    name: 'Mr. David Wilson',
    role: 'Customer',
    image: 'https://randomuser.me/api/portraits/men/78.jpg',
    quote: 'They handled everything professionally from start to finish.',
    stars: 4,
  },
];

// Animations
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

const Client = () => {
  return (
    <section className="bg-gradient-to-br from-yellow-50 to-white py-20 px-6 md:px-20 font-sans">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-12 mb-16 max-w-7xl mx-auto">
        {/* Text Content */}
        <motion.div
          className="lg:w-1/2 text-center lg:text-left"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={0}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6 tracking-wide">
            Let’s Know{' '}
            <span className="text-black underline decoration-yellow-400 underline-offset-4">
              What Our Clients
            </span>
            <br /> Say About Us.
          </h1>
        </motion.div>

        <motion.div
          className="lg:w-1/2 max-w-md md:max-w-none"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={1}
        >
          <p className="text-gray-500 mb-8 text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
            luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <Link to="/about">
          <button className="bg-yellow-400 cursor-pointer hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full transition-all shadow-md w-full md:w-auto">
            Let’s Talk Now →
          </button>
          </Link>
        </motion.div>

        {/* Image with play icon */}
        <motion.div
          className="relative lg:w-[500px] rounded-3xl overflow-hidden shadow-xl order-first lg:order-last w-full max-w-md mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <img
            src="https://img.freepik.com/free-photo/female-architect-orange-vest-white-helmet-standing-front-house_1303-30005.jpg?w=826"
            alt="Client testimonial"
            className="w-full h-72 md:h-96 object-cover rounded-3xl"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-yellow-400 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-black"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M6.5 5.5v9l7-4.5-7-4.5z" />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Swiper Slider for Testimonials */}
      <div className="max-w-6xl mx-auto">
        <Swiper
          className="testimonial-swiper"
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          centeredSlides={true}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              centeredSlides: false,
            },
            640: {
              slidesPerView: 1,
              centeredSlides: false,
            },
            768: {
              slidesPerView: 2,
              centeredSlides: false,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(255, 165, 0, 0.3)' }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="h-full"
              >
                <TestimonialCard {...t} />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Client;
