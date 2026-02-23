import React from "react";
import { FaGlobe, FaRobot, FaTrophy } from "react-icons/fa";

const About = () => {
  return (
    <section className="w-full bg-white px-6 md:px-16 py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        
        {/* Left Side - About Text */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-2">About Me</h2>
          <h4 className="text-lg text-gray-500 mb-6">Frontend Developer</h4>

          <p className="text-gray-600 mb-4 leading-relaxed">
            I am a Software Development Engineer with 2+ years of professional
            experience. I specialize in transforming people’s requirements into
            real-world solutions whether through intelligent machines, AI systems,
            or modern web applications.
          </p>

          <p className="text-gray-600 mb-4 leading-relaxed">
            My strong foundation in web development comes from working on numerous
            real-world projects, including building professional websites for clients.
            Alongside that, I have solved 500+ problems across different platforms,
            which has sharpened my problem-solving skills.
          </p>

        
        </div>

        {/* Right Side - Skills */}
        <div className="space-y-6">
          
          {/* Web Dev */}
          <div className="bg-white shadow-md rounded-xl p-6 border">
            <h3 className="flex items-center gap-2 text-xl font-semibold mb-4">
              <FaGlobe className="text-purple-600" /> Web Development
            </h3>
            <div className="flex flex-wrap gap-3">
              {["HTML", "CSS", "Tailwind CSS", "JavaScript", "React", "Next.js","Firebase"].map(skill => (
                <span key={skill} className="px-4 py-1 text-sm border border-purple-500 text-purple-600 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
