import React from "react";
import { Link } from "react-router-dom";
const PageHero = ({ 
  title, 
  subtitle, 
  image = 'https://images.pexels.com/photos/3813684/pexels-photo-3813684.jpeg',
  breadcrumbs = []
}) => {
  return (
    <div className="relative overflow-hidden -mx-4 sm:-mx-6 lg:-mx-8 -mt-4 rounded-b-3xl shadow-2xl mb-12">
      <div 
        className="relative h-[60vh] min-h-[400px] flex items-center"
        style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 text-white  p-8 md:p-12 max-w-4xl mx-auto md:mx-0 ml-8">
          {/* Breadcrumbs */}
          {breadcrumbs.length > 0 && (
            <nav className="flex items-center  mt-20 space-x-2 text-sm mb-6">
              <Link to="/" className="text-gray-200 hover:text-white cursor-pointer transition-colors">
                Home
              </Link>
              {breadcrumbs.map((crumb, index) => (
                <React.Fragment key={index}>
                  <span className="text-gray-100">/</span>
                  {crumb.link ? (
                    <Link to={crumb.link} className="text-gray-200 cursor-default hover:text-white transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white ">{crumb.label}</span>
                  )}
                </React.Fragment>
              ))}
            </nav>
          )}
          
          <p className="text-lg font-semibold tracking-widest uppercase mb-3 text-gray-200">
            {subtitle}
            <span className="inline-block w-8 h-px bg-gray-200 ml-2"></span>
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-md font-serif leading-tight">
            {title}
          </h1>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-[#1A444A]/30 to-transparent rounded-tl-full"></div>
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#1A444A]/30 to-transparent rounded-br-full"></div>
      </div>
    </div>
  );
};
export default PageHero