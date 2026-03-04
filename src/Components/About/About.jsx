import React from "react";
import { FaDownload, FaEnvelope } from "react-icons/fa";

const About = () => {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white px-6 md:px-40 py-24">

      {/* Top Content */}
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24 mb-16">
        
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <img
            src="/mizan.jpeg"
            alt="profile"
            className="w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-purple-600 shadow-lg"
          />
        </div>

        {/* Text Content */}
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Hi, I'm <span className="text-purple-400 font-semibold">Mizanur Rahman</span>, a passionate MERN stack developer who loves bringing ideas to life with clean UI, smooth interactions, and modern web technologies. I enjoy turning complex problems into simple, elegant solutions.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a
              href="/mizan_cv.pdf"
              className="flex items-center gap-2 px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-full font-semibold transition"
            >
              <FaDownload /> Resume
            </a>

            <a
              href="/contact"
              className="flex items-center gap-2 px-6 py-2 border border-purple-500 rounded-full hover:bg-purple-700 transition"
            >
              <FaEnvelope /> Let's Connect
            </a>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="relative flex flex-col md:grid md:grid-cols-2 md:gap-8">

        {/* Vertical line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-purple-600/40 transform -translate-x-1/2"></div>

        {/* Left Card */}
        <div className="relative md:pr-8 mb-12 md:mb-0">
          <div className="md:absolute md:right-1/2 md:translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full top-2"></div>
          <div className="bg-gray-900/70 border border-purple-600 rounded-xl p-6 shadow-md hover:shadow-purple-500 transition">
            <h3 className="font-semibold text-xl mb-2">My Programming Journey</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Started with C & C++, then explored Java, and finally found my passion in web development using JavaScript, React, and the MERN stack.
            </p>
          </div>
        </div>

        {/* Right Card */}
        <div className="relative md:pl-8">
          <div className="md:absolute md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full top-2"></div>
          <div className="bg-gray-900/70 border border-purple-600 rounded-xl p-6 shadow-md hover:shadow-purple-500 transition">
            <h3 className="font-semibold text-xl mb-2">The Work I Enjoy</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              I love building user-friendly web apps with clean design and interactive features. Problem-solving with elegant, modern solutions is my passion.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;