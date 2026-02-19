import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const experiences = [
  {
    title: "Frontend Developer",
    company: "NeuroDevs Agency",
    period: "February 2025 - Present",
    description:
      "Worked as a Frontend Developer, developing scalable web applications using Next.js and TypeScript. Built modern, responsive user interfaces and implemented robust backend solutions.",
    skills: ["Next.js", "TypeScript", "Express.js", "JavaScript", "React", "UI/UX", "TailwindCSS"],
    current: true,
  },
  {
    title: "Software Developer",
    company: "Sazin Company Ltd.",
    period: "August 2025 - October 2025",
    description:
      "Worked as a Software Developer, developing scalable web applications using Next.js and TypeScript. Built modern, responsive user interfaces and implemented robust backend solutions.",
    skills: ["HTML", "CSS", "TailwindCSS", "JavaScript", "Next.js", "TypeScript", "Express.js", "MongoDB", "Node.js"],
    current: false,
  },
];

const Worked = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="py-20 bg-gray-50" id="experience">
      <div className="max-w-6xl mx-auto px-6">
        <h2 data-aos="fade-up" className="text-center text-purple-600 font-semibold mb-2">
          EXPERIENCE
        </h2>
        <h1 data-aos="fade-up" data-aos-delay="100" className="text-4xl font-bold text-center mb-12">
          Work Experience
        </h1>

        <div className="relative border-l-2 border-purple-400">
          {experiences.map((exp, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 200} // stagger effect
              className={`mb-12 ml-6 ${index % 2 === 0 ? "md:ml-0 md:mr-auto" : "md:ml-auto"}`}
            >
              <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-md relative">
                {exp.current && (
                  <span className="absolute top-4 right-4 bg-purple-600 px-3 py-1 text-xs rounded-full">
                    CURRENT
                  </span>
                )}
                <h3 className="text-2xl font-semibold mb-1">{exp.title}</h3>
                <p className="text-purple-400 italic mb-1">{exp.company}</p>
                <p className="text-gray-400 text-sm mb-4">{exp.period}</p>
                <p className="text-gray-300 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-purple-300 text-sm border border-purple-600 px-2 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Timeline Dot */}
          <div className="absolute left-[-8px] top-0 w-4 h-full flex flex-col items-center">
            <div className="w-4 h-4 bg-purple-600 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Worked;
