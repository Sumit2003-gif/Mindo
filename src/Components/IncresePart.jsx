import React from 'react';
import CountUp from 'react-countup';

const stats = [
  { number: 3859, suffix: "+", title: "Completed Projects", text: "Lorem ipsum dolor" },
  { number: 685, suffix: "+", title: "Skilled Workers", text: "Lorem ipsum dolor" },
  { number: 98, suffix: "%+", title: "Satisfaction Rate", text: "Lorem ipsum dolor" },
  { number: 15, suffix: "Y+", title: "Years In Business", text: "Lorem ipsum dolor" },
];

const IncresePart = () => {
  return (
    <div className="bg-[#2a2600] py-16 px-6 md:px-20 text-white rounded-3xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
        {stats.map((item, index) => (
          <div key={index}>
            <h1 className="text-4xl md:text-5xl font-bold text-yellow-300 mb-2">
              <CountUp end={item.number} duration={2} />{item.suffix}
            </h1>
            <p className="text-lg font-semibold text-white">{item.title}</p>
            <p className="text-gray-300">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IncresePart;
