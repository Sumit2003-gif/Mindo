import React from 'react';
import { motion } from 'framer-motion';
import Card from './Cads';
import blogData from './blogdata';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.15, duration: 0.6, ease: 'easeOut' },
  }),
};

const HomeBlog = () => {
  // Slice only the first 3 blogs
  const featuredBlogs = blogData.slice(0, 3);

  return (
    <section className="py-16 px-6 md:px-20 bg-[#fff7ea] font-sans max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={0}
          className=""
        >
          <div className="text-orange-500 font-bold uppercase text-sm mb-4 tracking-wider select-none">
            📝 Blog
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
            Blog Content Can Elevate Your Construction Building With Us.
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={1}
          className="flex flex-col justify-between"
        >
          <p className="text-gray-500 text-lg mb-6 md:mb-0 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
            ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 5px 15px rgba(234,179,8,0.6)' }}
            className="w-fit bg-gradient-to-r from-yellow-300 to-yellow-500 text-black font-semibold px-6 py-3 rounded-full shadow-md transition-all"
          >
            Discover Our Blog →
          </motion.button>
        </motion.div>
      </div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredBlogs.map((blog, idx) => (
          <motion.div
            key={blog.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            custom={idx + 2} // start delay after header animations
          >
            <Card
              id={blog.id}
              image={blog.image}
              category={blog.category}
              date={blog.date}
              title={blog.title}
              description={blog.description}
              link={blog.link}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HomeBlog;
