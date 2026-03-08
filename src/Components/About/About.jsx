import React from "react";
import { FaDownload, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="w-full bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-700 text-white py-28 px-6 md:px-20 overflow-hidden">

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 120 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        // viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center mb-20"
      >
        About Me
      </motion.h2>

      {/* Top About Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-16 mb-28">

        {/* Image */}
        <motion.img
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          // viewport={{ once: true }}
          src="/public/asif1.jpeg"
          alt="profile"
          className="w-56 h-56 md:w-72 md:h-72 object-cover rounded-full border-4 border-cyan-400 shadow-xl"
        />

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          // viewport={{ once: true }}
          className="max-w-xl"
        >
          <p className="text-gray-300 leading-relaxed mb-6">
            Hi, I'm <span className="text-cyan-400 font-semibold">Mizanur Rahman</span>,
            a passionate MERN stack developer who enjoys building modern,
            responsive and interactive web applications. I love transforming
            complex ideas into clean and elegant solutions.
          </p>

          <div className="flex gap-4 flex-wrap">

            <button className="flex items-center gap-2 border border-cyan-400 px-6 py-3 rounded-lg hover:bg-cyan-400 hover:text-black transition">
              <FaDownload />
              Resume
            </button>

            <button className="flex items-center gap-2 border border-white/40 px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
              <FaEnvelope />
              Lets Connect
            </button>

          </div>
        </motion.div>
      </div>

      {/* Timeline Section */}
      <div className="relative max-w-6xl mx-auto">

        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 w-1 h-full bg-cyan-400/30 transform -translate-x-1/2"></div>

        {/* Timeline Item */}
        {timelineData.map((item, index) => {

          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: isLeft ? -120 : 120 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              // viewport={{ once: true }}
              className={`mb-16 flex ${isLeft ? "justify-start" : "justify-end"} w-full`}
            >

              {/* Card */}
              <div className={`w-full md:w-1/2 ${isLeft ? "pr-10" : "pl-10"}`}>
                <div className="relative bg-[#0f172a]/70 border border-cyan-400/40 p-12 rounded-[28px] backdrop-blur-lg shadow-[0_0_25px_rgba(34,211,238,0.2)] hover:shadow-[0_0_45px_rgba(34,211,238,0.4)] transition duration-300">

                  {/* Dot */}
                  <span className="absolute top-12 -right-14 md:block hidden w-5 h-5 bg-cyan-400 rounded-full border-4 border-[#020617]"></span>

                  <h3 className="text-2xl font-semibold mb-5 text-white">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed max-w-md">
                    {item.desc}
                  </p>

                </div>
              </div>

            </motion.div>
          );
        })}
      </div>
      
      

    </section>
  );
};

const timelineData = [
  {
    title: "My Programming Journey",
    desc: "I started my programming journey with curiosity about how software works, beginning with C and C++. Over time, I explored Java, and eventually found my passion in web development with JavaScript, React, and the MERN stack."
  },
  {
    title: "The Work I Enjoy",
    desc: "I love building user-friendly web apps with clean design and interactive features. Problem-solving excites me, and I enjoy working on real-world projects where creativity meets logic."
  },
  {
    title: "Hobbies & Interests",
    desc: "Outside programming, I enjoy reading tech blogs and exploring creative design. These hobbies keep me energized and bring fresh ideas into my coding work."
  },
  {
    title: "Future Goals",
    desc: "I aim to deepen my expertise in web development and explore emerging technologies like AI. My goal is to create impactful solutions that enhance user experiences."
  }
];
export default About;