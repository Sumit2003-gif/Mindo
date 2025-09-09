import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const GetInTouch = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  // Load existing data from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("contactFormData");
    if (stored) {
      setFormData(JSON.parse(stored));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("contactFormData", JSON.stringify(formData));
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
  };

  return (
    <section className="bg-white text-black py-10 px-6 md:px-12 rounded-lg">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-black/10 backdrop-blur-md p-8 rounded-lg shadow-lg space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div>
            <label className="block text-black font-semibold mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-white border border-gray-300 focus:outline-yellow-400"
            />
          </div>

          <div>
            <label className="block text-black font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-white border border-gray-300 focus:outline-yellow-400"
            />
          </div>

          <div>
            <label className="block text-black font-semibold mb-1">Message</label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-white border border-gray-300 focus:outline-yellow-400"
            ></textarea>
          </div>

          {success && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-green-600 font-medium pt-2"
            >
              Message saved to local storage!
            </motion.p>
          )}

          <div className="flex justify-between gap-4 pt-4">
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-400 hover:bg-yellow-300 cursor-pointer text-black font-bold py-2 px-6 rounded-full transition"
            >
              Send Message
            </motion.button>

            {closeModal && (
              <motion.button
                type="button"
                onClick={closeModal}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-300 hover:bg-gray-400 cursor-pointer text-black font-bold py-2 px-6 rounded-full transition"
              >
                Close
              </motion.button>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default GetInTouch;
