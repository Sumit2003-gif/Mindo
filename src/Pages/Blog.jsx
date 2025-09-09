import React from 'react';
import { Link } from 'react-router-dom';

import HomeHero from '../Components/HeroSection';
import Card from '../Components/Cads';
import blogData from '../Components/blogdata';

import { motion } from 'framer-motion';

const Blog = () => {
  const recentPosts = blogData.slice(0, 3); // Get first 3 for recent

  // Animation variants for fade/slide
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <div className="bg-[#fffdf4] text-gray-800 min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <HomeHero
          header="BLOGS"
          text="Blog Content Can Elevate"
          texter1="Construction Building"
          paragraph="Our company delivers exceptional construction services backed by 25 years of experience."
        />
      </motion.section>

      {/* Main Blog Layout */}
      <motion.div
        className="max-w-7xl mx-auto px-4 md:px-6 py-16 grid grid-cols-1 lg:grid-cols-4 gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        {/* Blog Cards */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {blogData.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: item.id * 0.1 }}
              >
                <Card
                  id={item.id}
                  image={item.image}
                  category={item.category}
                  date={item.date}
                  description={item.description}
                  title={item.title}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-12 sticky top-24 self-start">
          {/* Search Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-4 text-gray-900">Search Blog</h3>
            <div className="relative">
              <input
                type="text"
                placeholder="Search blog post..."
                className="w-full px-4 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-yellow-600 font-bold text-sm">
                Go
              </button>
            </div>
          </motion.div>

          {/* Recent Posts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4 text-gray-900">Recent Posts</h3>
            <ul className="space-y-6">
              {recentPosts.map((post) => (
                <li key={post.id} className="flex gap-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-16 h-16 rounded object-cover"
                  />
                  <div className="text-sm flex-1">
                    <h4 className="font-semibold text-gray-800 line-clamp-2">{post.title}</h4>
                    <p className="text-xs text-gray-500">
                      {post.date.day} {post.date.month} • {post.category}
                    </p>
                    <Link
                      to={`/blogs/${post.id}`}
                      className="text-yellow-600 font-medium text-sm mt-1 inline-block"
                    >
                      View →
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </aside>
      </motion.div>
    </div>
  );
};

export default Blog;
