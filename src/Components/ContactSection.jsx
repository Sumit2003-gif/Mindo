import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingMessages = JSON.parse(localStorage.getItem('contactMessages')) || [];
    const updatedMessages = [...existingMessages, formData];
    localStorage.setItem('contactMessages', JSON.stringify(updatedMessages));

    setFormData({ name: '', email: '', message: '' });
    alert('Message saved locally! ✅');
  };

  // Animation variants
  const containerVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const buttonHover = {
    scale: 1.05,
    boxShadow: '0px 8px 15px rgba(252, 211, 77, 0.6)', // yellow glow
    transition: { duration: 0.3 },
  };

  return (
    <section className="bg-[#fef9ec] py-20 px-4 md:px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        {/* Form Section */}
        <motion.div
          variants={containerVariant}
          initial="hidden"
          animate="visible"
          className="flex flex-col"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl">
            Have a question or want to discuss your next project? Fill out the form below and we'll get back to you soon.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6 max-w-xl w-full">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              rows="5"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:outline-none resize-none transition"
            />

            <motion.button
              type="submit"
              whileHover={buttonHover}
              className="bg-yellow-400 cursor-pointer hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full shadow-md transition"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Map Section */}
        <motion.div
          variants={containerVariant}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
          className="rounded-2xl overflow-hidden shadow-lg min-h-[400px]"
        >
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.028181479582!2d90.36650977590503!3d23.81839058666186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a1c158e8d9%3A0x674623d74801b46f!2sOpenAI%20Bangladesh%20Office!5e0!3m2!1sen!2sbd!4v1695700000000!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            className="border-none"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
