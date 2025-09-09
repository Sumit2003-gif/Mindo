import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const steps = [
  {
    id: 1,
    title: '01. Consultation & Planning',
    image:
      'https://demo8.eightheme.com/mindo/wp-content/uploads/sites/10/2025/03/a-male-architect-in-a-hard-hat-safety-vest-reviews-construction-documents-construction-contractor-1536x1024.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    checklist: [
      'Schedule a free consultation',
      'Get expert recommendations',
      'On-time execution',
    ],
  },
  {
    id: 2,
    title: '02. Construction & Execution',
    image: 'https://images.pexels.com/photos/5854191/pexels-photo-5854191.jpeg',
    description:
      'Our team ensures high-quality construction following all safety guidelines.',
    checklist: [
      'Skilled & certified workforce',
      'Quality materials & tools',
      'Timely updates & reports',
    ],
  },
  {
    id: 3,
    title: '03. Project Completion & Handover',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
    description:
      'We ensure your project is delivered clean, complete, and ready to use.',
    checklist: [
      'Final quality checks',
      'Complete documentation',
      'Smooth handover process',
    ],
  },
];

const HomeWork = () => {
  const [activeStep, setActiveStep] = useState(null);

  const toggleStep = (stepId) => {
    setActiveStep(activeStep === stepId ? null : stepId);
  };

  return (
    <>
      {/* TWO COLUMN SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* LEFT: Accordion Steps */}
        <div>
          <button className="text-orange-500 border border-orange-400 rounded-full px-5 py-2 text-sm font-semibold mb-6 hover:bg-orange-100 transition">
            HOW IT'S WORK
          </button>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Step Work For
            <br />
            Infrastructure Projects
            <br />
            With Precision.
          </h1>
          <p className="text-gray-600 mb-12 max-w-xl text-base md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
            luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>

          {steps.map((step) => (
            <div key={step.id} className="mb-8">
              <button
                onClick={() => toggleStep(step.id)}
                className="flex items-center justify-between w-full px-4 text-left font-bold text-[#3a3a00] text-lg mb-3 hover:text-orange-500 transition-colors duration-300 focus:outline-none"
                aria-expanded={activeStep === step.id}
                aria-controls={`step-content-${step.id}`}
              >
                <span>{step.title}</span>
                <motion.span
                  animate={{
                    rotate: activeStep === step.id ? 45 : 0,
                    color: activeStep === step.id ? '#F97316' : '#3a3a00',
                    scale: 1,
                  }}
                  whileHover={{ scale: 1.2, cursor: 'pointer' }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="text-xl select-none"
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {activeStep === step.id && (
                  <motion.div
                    id={`step-content-${step.id}`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="bg-[#3d3c00] text-white rounded-3xl p-6 shadow-lg overflow-hidden"
                  >
                    <p className="text-sm mb-6">{step.description}</p>

                    <div className="flex flex-col md:flex-row items-start gap-8">
                      <div className="rounded-xl overflow-hidden w-full md:w-64 h-40 flex-shrink-0 shadow-md">
                        <img
                          src={step.image}
                          alt={step.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="space-y-3 text-sm flex-1">
                        <ul className="space-y-3">
                          {step.checklist.map((item, index) => (
                            <li key={index} className="flex items-center gap-3">
                              <span className="text-green-400 text-lg select-none">✔</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* RIGHT: Sticky Image */}
        <div className="hidden lg:block">
          <div className="sticky top-6 w-full h-[600px] rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.pexels.com/photos/8961297/pexels-photo-8961297.jpeg"
              alt="Engineers"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeWork;
