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
    title: "MERN Stack Development",
    desc: "Building full-stack web applications using MongoDB, Express.js, React, Next.js, TypeScript, Tailwind and Node.js.",
  },
  {
    icon: <FaServer />,
    title: "Backend Development",
    desc: "Building secure and scalable server-side applications with modern architectures.",
  },
  {
    icon: <FaDatabase />,
    title: "Database Design",
    desc: "Designing optimized and efficient database schemas with performance in mind.",
  },
  {
    icon: <FaCogs />,
    title: "API Development",
    desc: "Creating clean, scalable, and well-documented RESTful APIs for applications.",
  },
];

const Service = () => {
  return (
    <section id="services" className="w-full bg-gray-50 px-6 md:px-16 py-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <h2 
          data-aos="fade-up"
          className="text-4xl font-bold text-center mb-14"
        >
          Services <span className="text-purple-600">I Offer</span>
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
