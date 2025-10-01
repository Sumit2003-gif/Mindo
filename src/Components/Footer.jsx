import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaPinterestP,
} from 'react-icons/fa';

const quickLinks = [
  { name: 'Homepage', to: '/' },
  { name: 'About Us', to: '/About' },
  { name: 'Blogs', to: '/blogs' },
  { name: 'Contact Us', to: '/contact' },
];

const Footer = () => {
  return (
    <footer className="bg-[#3a3906] relative px-6 md:px-20 py-16 text-white overflow-hidden">
      {/* Background Wave Lines */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "url('https://demo8.eightheme.com/mindo/wp-content/uploads/sites/10/2025/03/futuristic-geometric-shape-composition-backgrounds-2023-11-27-05-32-33-utc-1-1.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>

      <div className="relative z-10 mx-auto grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10">
  {/* Logo and Info */}
  <div>
    <div className="flex items-center gap-3 mb-6 ">
      <img
        src="https://demo8.eightheme.com/mindo/wp-content/uploads/sites/10/2025/03/Mindo-Dark.png"
        alt="Mindo Logo"
        className="w-40 h-10"
      />
    </div>
    <p className="mb-6 max-w-xs">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
      tellus, luctus nec ullamcorper mattis.
    </p>
    <div className="flex items-center gap-3 mb-2">
      <FaEnvelope className="text-yellow-400" />
      <a href="mailto:Hello@Email.co" className="hover:underline">
        Hello@Email.co
      </a>
    </div>
    <div className="flex items-center gap-3">
      <FaPhoneAlt className="text-yellow-400" />
      <a href="tel:+44123456789" className="hover:underline">
        +44 123 456 789
      </a>
    </div>
  </div>

  {/* Quick Links */}
  <div>
    <h3 className="font-semibold text-white mb-6">Quick Links</h3>
    <ul className="space-y-3 text-yellow-100">
      {quickLinks.map((link) => (
        <li key={link.name}>
          <Link to={link.to} className="hover:text-yellow-400">
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>

  {/* Newsletter */}
  <div>
    <h3 className="font-semibold text-white mb-6">Subscribe Our Newslater</h3>
    <p className="text-yellow-100 mb-4 text-sm">
      Get Our Latest Update & New Offers Sales Discount
    </p>
    <form className="flex gap-2 max-w-md" onSubmit={e => e.preventDefault()}>
      <input
        type="email"
        placeholder="Email"
        className="flex-1 rounded-full px-4 py-2 focus:outline-none"
        required
      />
      <button
        type="submit"
        className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white px-6 py-2 rounded-full font-semibold hover:opacity-90 transition"
      >
        Subscribe
      </button>
    </form>
  </div>
</div>

    </footer>
  );
};

export default Footer;
