import React, { useState } from 'react';
import HomeHero from '../Components/HomeHero'
import HomeWho from '../Components/HomeWho'
import HomeWork from '../Components/HomeWork'
import ConstructionCards from '../Components/ConstructionCards'
import HomeProject from '../Components/HomeProject'
import IncresePart from '../Components/IncresePart'
import Client from '../Components/Client'
import HomeBlog from '../Components/HomeBlog'
import GetInTouch from '../Components/GetInTouch'

const Home = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      {/* ...other sections... */}
      
      <section
        className="relative bg-cover bg-center bg-no-repeat h-[120vh] flex items-center justify-center text-center px-4"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-0" />

        {/* Content */}
        <div className="relative z-10 max-w-2xl text-white">
          {/* Icon */}
          <div className="flex justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-yellow-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 11c0 1.38-1.12 2.5-2.5 2.5S7 12.38 7 11s1.12-2.5 2.5-2.5S12 9.62 12 11zm0 0c0 1.38 1.12 2.5 2.5 2.5S17 12.38 17 11s-1.12-2.5-2.5-2.5S12 9.62 12 11z"
              />
            </svg>
          </div>

          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
            Transforming The Future With <br /> Sustainable Innovation <br /> Construction Building.
          </h1>

          {/* CTA Button */}
          <button
            onClick={() => setShowForm(true)}
            className="bg-yellow-300 cursor-pointer hover:bg-yellow-400 text-black font-medium px-6 py-3 rounded-full transition-all shadow-lg"
          >
            Get A Quotation →
          </button>
        </div>

        {/* Modal Form */}
        {showForm && (
          <div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            onClick={() => setShowForm(false)}
          >
            <div
              className="bg-white rounded-lg p-8 max-w-md w-full relative"
              onClick={e => e.stopPropagation()} // prevent modal close on clicking inside form
            >
              <button
                className="absolute top-3 right-3 text-gray-700 hover:text-black font-bold text-xl"
                onClick={() => setShowForm(false)}
                aria-label="Close form"
              >
                ×
              </button>

              <h2 className="text-2xl font-semibold mb-4">Get a Quotation</h2>

              <form className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="border border-gray-300 rounded px-3 py-2 focus:outline-yellow-400"
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="border border-gray-300 rounded px-3 py-2 focus:outline-yellow-400"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="border border-gray-300 rounded px-3 py-2 focus:outline-yellow-400"
                />
                <textarea
                  placeholder="Project Details"
                  rows={4}
                  className="border border-gray-300 rounded px-3 py-2 focus:outline-yellow-400"
                />
                <button
                  type="submit"
                  className="bg-yellow-400 text-black font-semibold py-2 rounded hover:bg-yellow-500 transition"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}
      </section>

      <section>
        <Client />
      </section>

      <section>
        <HomeBlog />
      </section>
    </div>
  );
};

export default Home;
