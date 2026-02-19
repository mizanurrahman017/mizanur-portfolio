import React, { useEffect } from "react";
import { FaGraduationCap } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const educationData = [
  {
    title: "B.Sc. in Computer Science and Engineering",
    institute: "Sylhet govt. model school and collage (SGMSC)",
    period: "2026 - Present",
    description:
      "Specialized in Machine Learning and Artificial Intelligence. Focused on building modern web and intelligent systems.",
    side: "left",
  },
  {
    title: "Diploma in Computer Science and Engineering (CSE)",
    institute: "Syeda farhana hussain high school (SFHHS)",
    period: "2020 - 2025",
    description:
      "Focused on Software Development, UI/UX, and Full-Stack Web Technologies.",
    side: "right",
  },
];

const Education = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);

  return (
    <section className="py-20 bg-gray-50 relative">
      <h2 className="text-4xl font-bold text-center mb-12">My Education</h2>

      <div className="max-w-6xl mx-auto relative">
        {/* Vertical Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-pink-500 h-full"></div>

        {educationData.map((edu, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center w-full mb-12 ${
              edu.side === "left" ? "md:justify-start" : "md:justify-end"
            }`}
            data-aos="fade-up"
            data-aos-delay={index * 200}
          >
            <div className="bg-[#0f172a] text-white p-6 rounded-xl shadow-lg md:w-5/12 w-full">
              <h3 className="text-xl font-semibold mb-2">{edu.title}</h3>
              <p className="text-pink-400 mb-1">{edu.institute}</p>
              <p className="italic text-sm mb-2">{edu.period}</p>
              <p className="text-gray-300 text-sm">{edu.description}</p>
            </div>

            {/* Timeline Icon */}
            <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-pink-500 text-white text-lg font-bold mx-6 z-10">
              <FaGraduationCap />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
