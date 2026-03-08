import React from "react";
import { FaLaptopCode, FaPalette, FaServer, FaDatabase, FaCodeBranch, FaCogs } from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode />,
    title: "Responsive Web Design",
    desc: "Crafting responsive and visually appealing websites that adapt seamlessly to all devices.",
  },
  {
    icon: <FaPalette />,
    title: "UI/UX Design",
    desc: "Converting complex designs (Figma/Adobe XD) into pixel-perfect, highly interactive, and responsive user interfaces.",
  },
  {
    icon: <FaCodeBranch />,
    title: "React Web Application Development",
    desc: "Developing fast and dynamic web applications using React.js with reusable components and optimized performance.",
  },
  {
    icon: <FaServer />,
    title: "Landing Page Design",
    desc: "Designing high-converting landing pages for businesses, startups, and products with attractive layouts and smooth animations.",
  },
  {
    icon: <FaDatabase />,
    title: "Website Redesign & UI Improvement",
    desc: "Redesigning old websites with modern UI/UX trends to make them more attractive, responsive, and user-friendly.",
  },
  {
    icon: <FaCogs />,
    title: "Website Performance Optimization",
    desc: "Improving website speed, performance, and loading time to ensure a smooth and fast user experience.",
  },
];

const Service = () => {
  return (
    <section id="services" className="w-full bg-gray-50 px-6 md:px-16 py-20 bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-700">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <h2 
          data-aos="fade-up"
          className="text-5xl font-bold text-center mb-14 text-white"
        >
          Services <span className="text-black-600">I Offer</span>
        </h2>

        {/* Service Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150} // একটার পর একটা আসবে
              className="bg-white border border-purple-100 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-purple-100 text-purple-600 text-2xl mb-5">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
