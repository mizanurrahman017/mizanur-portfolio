import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const skillsData = [
  {
    title: "Frontend Development",
    skills: "HTML, CSS, Tailwind CSS, JavaScript, React, Next.js, TypeScript",
    level: "Expert Level",
    desc: "Experienced in building responsive, modern, and dynamic web interfaces using React and Tailwind CSS.",
    side: "left",
  },
  {
    title: "Backend Development",
    skills: "Node.js, Express.js, RESTful APIs",
    level: "Intermediate Level",
    desc: "Capable of creating secure and optimized backend systems and APIs for full-stack applications.",
    side: "right",
  },
  {
    title: "Database Management",
    skills: "MySQL, MongoDB",
    level: "Intermediate Level",
    desc: "Proficient in designing and managing relational and NoSQL databases with efficient data modeling.",
    side: "left",
  },
  {
    title: "Artificial Intelligence & Machine Learning",
    skills: "Python, TensorFlow, Scikit-learn",
    level: "Intermediate Level",
    desc: "Focused on developing intelligent systems and predictive models using supervised and unsupervised learning techniques.",
    side: "right",
  },
];

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      // once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="bg-white py-16 px-4">
      <h2
        data-aos="fade-up"
        className="text-3xl font-bold text-center mb-12"
      >
        My Skills
      </h2>

      <div className="relative max-w-6xl mx-auto">
        {/* Vertical Line */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-pink-500 h-full"></div>

        <div className="space-y-12">
          {skillsData.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 200} // stagger animation
              className={`flex flex-col md:flex-row items-center ${
                item.side === "left" ? "md:justify-start" : "md:justify-end"
              }`}
            >
              {/* Card */}
              <div className="bg-[#0f172a] text-white p-6 rounded-xl shadow-lg w-full md:w-5/12">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-pink-400 font-medium mb-1">{item.skills}</p>
                <p className="italic text-sm mb-2">{item.level}</p>
                <p className="text-sm text-gray-300">{item.desc}</p>
              </div>

              {/* Circle Icon */}
              <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-pink-500 text-white font-bold mx-6 z-10">
                •
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
