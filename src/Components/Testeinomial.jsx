// components/TestimonialCard.jsx
import React from "react";

const TestimonialCard = ({ name, role, image, quote, stars = 5 }) => {
  return (
    <div className="bg-[#FFF9F0] rounded-2xl p-6 w-full max-w-md shadow-md">
      {/* Stars */}
      <div className="flex space-x-1 mb-4">
        {Array.from({ length: stars }, (_, i) => (
          <svg
            key={i}
            className="w-5 h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.163c.969 0 1.371 1.24.588 1.81l-3.37 2.449a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.449a1 1 0 00-1.176 0l-3.37 2.449c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.07 9.384c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.286-3.957z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <p className="text-gray-600 italic font-semibold mb-6">{quote}</p>

      {/* Client Info */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src={image}
            alt={name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h4 className="text-black font-bold">{name}</h4>
            <span className="text-orange-500 text-sm font-medium uppercase tracking-wide">
              {role}
            </span>
          </div>
        </div>

        {/* Quotation Icon */}
        <svg
          className="w-8 h-8 text-gray-300"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M7.17 4A5.002 5.002 0 002 9c0 2.485 1.794 4.5 4 4.9V15a3 3 0 003 3h1v-1a2 2 0 00-2-2H7v-2.1A5.002 5.002 0 007.17 4zM17.17 4A5.002 5.002 0 0012 9c0 2.485 1.794 4.5 4 4.9V15a3 3 0 003 3h1v-1a2 2 0 00-2-2h-1v-2.1A5.002 5.002 0 0017.17 4z" />
        </svg>
      </div>
    </div>
  );
};

export default TestimonialCard;
