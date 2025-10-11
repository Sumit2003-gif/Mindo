import React from 'react';
import HomeWho from '../Components/HomeWho';
import HomeHero from '../Components/HeroSection';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import OurVision from '../Components/OurVision';
import ContractorsSection from '../Components/ContractorSection';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageHero from '../Components/HeroAllSection';

const About = () => {
  const images = [
    "https://demo8.eightheme.com/mindo/wp-content/uploads/sites/10/2025/03/logoipsum-311-1-1.png",
    "https://demo8.eightheme.com/mindo/wp-content/uploads/sites/10/2025/03/logoipsum-323-2-1.png",
    "https://demo8.eightheme.com/mindo/wp-content/uploads/sites/10/2025/03/logoipsum-317-1-1.png",
    "https://demo8.eightheme.com/mindo/wp-content/uploads/sites/10/2025/03/logoipsum-321-2-1.png",
    "https://demo8.eightheme.com/mindo/wp-content/uploads/sites/10/2025/03/logoipsum-317-1-1.png",
    "https://demo8.eightheme.com/mindo/wp-content/uploads/sites/10/2025/03/logoipsum-311-1-1.png"
  ];

  // Common fade & slide up animation
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

    const breadcrumbs = [
    { label: 'ABOUT', link: '/about' }
  ];

  return (
    <div>
      {/* Hero Section */}
      
       <PageHero
        title="Who We Are"
      subtitle="Dedicated professionals building solutions that matter."
      image="https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg"
      breadcrumbs={breadcrumbs}
       />

      {/* Who We Are + Swiper Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat py-12 pb-0"
        style={{
          backgroundImage:
            "url('https://demo8.eightheme.com/mindo/wp-content/uploads/sites/10/2025/03/10-school-paper-texture-hq-2023-11-27-05-02-52-utc-1.jpg')",
        }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-[#FDFAEF]/90 z-0"></div>

        {/* Content Over Image */}
        <div className="relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-7xl mx-auto px-6 md:px-12"
          >
            <HomeWho />

            {/* Swiper Section */}
            <section className="px-[3%] -mb-14 overflow-hidden rounded-lg">
              <Swiper
                modules={[Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                breakpoints={{
                  640: { slidesPerView: 2, spaceBetween: 30 },
                  768: { slidesPerView: 3, spaceBetween: 30 },
                  1024: { slidesPerView: 4, spaceBetween: 40 },
                }}
                loop={true}
                speed={3000}
                autoplay={{
                  delay: 0,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: false,
                }}
                grabCursor={false}
                allowTouchMove={false}
                className="py-20 bg-white rounded-2xl"
              >
                {[...images, ...images].map((item, index) => (
                  <SwiperSlide
                    key={index}
                    className="w-40 py-10 flex justify-center items-center"
                  >
                    <img
                      src={item}
                      alt={`Logo ${index + 1}`}
                      className="w-28 object-contain opacity-80 hover:opacity-100 transition"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </section>
          </motion.div>
        </div>
      </section>

      {/* Our Vision */}
    
        <OurVision />
      

      {/* Contractors Section */}
      
        <ContractorsSection />

      {/* Final Call to Action Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="relative bg-cover bg-center bg-no-repeat py-20 md:py-32 px-6 md:px-12 text-white"
        style={{
          backgroundImage:
            "url('https://demo8.eightheme.com/mindo/wp-content/uploads/sites/10/2025/03/construction-industry-and-engineering-engineers-architects-and-contractors-on-the-construction-si.jpg')",
        }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black/40 z-0"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center md:text-left">
          {/* Icon */}
          <div className="mb-6 flex justify-center md:justify-start">
            <img
              src="/your-icon-path.svg" // Replace with actual icon if needed
              alt="icon"
              className="w-12 h-12"
            />
          </div>

          {/* Heading */}
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            We Are Trusted - Let’s Build <br />
            Something Great Together.
          </h1>

          {/* Paragraph */}
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto md:mx-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
            luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>

          {/* CTA Button */}
          <Link to="/contact">
          <button className="bg-gradient-to-r from-white cursor-pointer to-yellow-300 text-black font-semibold px-6 py-3 rounded-full shadow-md hover:scale-105 transition transform duration-300 inline-flex items-center gap-2 mx-auto md:mx-0">
            Contact Us <span className="text-xl">→</span>
          </button>
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
