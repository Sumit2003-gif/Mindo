import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import blogData from './blogdata';
import { motion, AnimatePresence } from 'framer-motion';

const SingleBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const postId = Number(id);
  const post = blogData.find((p) => p.id === postId);

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [successMsg, setSuccessMsg] = useState('');

  if (!post) return <div className="p-10 text-center text-xl">Post not found.</div>;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existing = JSON.parse(localStorage.getItem('blogMessages')) || [];
    localStorage.setItem('blogMessages', JSON.stringify([...existing, { ...formData, postId }]));
    setFormData({ name: '', email: '', message: '' });
    setSuccessMsg('Thank you! Your message has been saved locally.');
    setTimeout(() => setSuccessMsg(''), 5000);
  };

  const latestPosts = blogData.filter((p) => p.id !== postId).slice(0, 3);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  return (
    <section className="py-16 px-6 md:px-12 bg-white text-gray-900 max-w-4xl mx-auto space-y-16">
      {/* Back to Blog Button */}
      <motion.button
        onClick={() => navigate('/blogs')}
        className="mb-6 inline-flex items-center gap-2 text-yellow-600 hover:text-yellow-800 font-semibold transition"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        aria-label="Back to blog list"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
        Back to Blog
      </motion.button>

      {/* Blog Post */}
      <motion.article
        className="space-y-8"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        <img
          src={post.image}
          alt={post.title}
          className="w-full rounded-lg shadow-lg object-cover max-h-96"
          loading="lazy"
        />
        <h1 className="text-4xl font-extrabold tracking-tight">{post.title}</h1>
        <p className="text-sm text-gray-500 italic">
          {post.category} • {post.date.day} {post.date.month}
        </p>

        <p className="text-lg leading-relaxed max-w-prose text-gray-700">
          Dive deep into our latest blog post to uncover valuable insights and expert advice. Whether you're
          looking for inspiration or practical tips, this article is crafted to help you get the most out of your
          journey.
        </p>

        <p className="text-lg leading-relaxed max-w-prose">{post.description}</p>
      </motion.article>

      <hr className="border-gray-200" />

      {/* Latest Posts Section */}
      <motion.section
        className="max-w-4xl mx-auto"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.3 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-gray-900 border-b-2 border-yellow-400 pb-2">
          Latest Posts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {latestPosts.map(({ id, image, title, category, date }) => (
            <Link
              key={id}
              to={`/blogs/${id}`}
              className="block rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-yellow-50"
            >
              <img
                src={image}
                alt={title}
                className="w-full h-36 object-cover"
                loading="lazy"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1 text-yellow-900">{title}</h3>
                <p className="text-sm text-yellow-700 italic">
                  {category} • {date.day} {date.month}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </motion.section>

      {/* Message Form */}
      <motion.div
        className="bg-yellow-50 p-10 rounded-2xl shadow-lg border border-yellow-300 max-w-xl mx-auto"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.6 }}
      >
        <h2 className="text-3xl font-semibold mb-6 text-yellow-800 text-center">Leave a Message</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-yellow-900 mb-1">
              Your Name
            </label>
            <input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
              className="w-full px-4 py-3 border border-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-yellow-900 mb-1">
              Your Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-yellow-900 mb-1">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              placeholder="Write your message here..."
              className="w-full px-4 py-3 border border-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none transition"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded-full shadow-lg transition duration-300"
          >
            Send Message
          </button>
        </form>

        {/* AnimatePresence to handle fade in/out */}
        <AnimatePresence>
          {successMsg && (
            <motion.p
              className="mt-4 text-center text-green-600 font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {successMsg}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default SingleBlog;
