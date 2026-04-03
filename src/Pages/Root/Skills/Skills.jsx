import React, { useState } from "react";
import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaGitAlt,
  FaCode, // ✅ VS Code fallback
} from "react-icons/fa";

import {
  SiRedux,
  SiTailwindcss,
  SiGithub,
  SiNetlify,
  SiVercel,
} from "react-icons/si";

// Skills Data
const skillsData = [
  { name: "HTML", category: "frontend", icon: <FaHtml5 className="text-orange-500 text-6xl" /> },
  { name: "CSS", category: "frontend", icon: <FaCss3Alt className="text-blue-500 text-6xl" /> },
  { name: "JavaScript", category: "language", icon: <FaJs className="text-yellow-400 text-6xl" /> },
  { name: "React.js", category: "frontend", icon: <FaReact className="text-cyan-400 text-6xl" /> },
  { name: "Redux", category: "frontend", icon: <SiRedux className="text-purple-500 text-6xl" /> },
  { name: "TailwindCSS", category: "frontend", icon: <SiTailwindcss className="text-sky-400 text-6xl" /> },

  { name: "Java", category: "language", icon: <FaJava className="text-red-500 text-6xl" /> },

  // Tools (fixed)
  { name: "Git", category: "tools", icon: <FaGitAlt className="text-orange-500 text-6xl" /> },
  { name: "GitHub", category: "tools", icon: <SiGithub className="text-white text-6xl" /> },
  { name: "VS Code", category: "tools", icon: <FaCode className="text-blue-400 text-6xl" /> }, // ✅ FIX
  { name: "Netlify", category: "tools", icon: <SiNetlify className="text-green-400 text-6xl" /> },
  { name: "Vercel", category: "tools", icon: <SiVercel className="text-white text-6xl" /> },
];

const Skills = () => {
  const [filter, setFilter] = useState("all");

  const filteredSkills =
    filter === "all"
      ? skillsData
      : skillsData.filter((skill) => skill.category === filter);

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-700 text-white px-6 md:px-20 py-24">

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          My Skills 🚀
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          Here are the technologies and tools I use.
        </p>
      </motion.div>

      {/* Filter */}
      <div className="flex justify-center flex-wrap gap-4 mb-16">
        {["all", "frontend", "language", "tools"].map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            className={`px-6 py-2 rounded-full capitalize transition ${
              filter === item
                ? "bg-cyan-500 text-white"
                : "bg-slate-800 hover:bg-slate-700 text-gray-300"
            }`}
          >
            {item === "language" ? "Programming" : item}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {filteredSkills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.3 }}
            className="relative group"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 blur opacity-0 group-hover:opacity-40 transition"></div>

            <div className="relative bg-slate-800 border border-slate-700 rounded-2xl p-10 flex flex-col items-center justify-center shadow-lg">
              <div className="group-hover:scale-110 transition">
                {skill.icon}
              </div>

              <h3 className="mt-6 text-xl font-semibold text-gray-200">
                {skill.name}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
};

export default Skills;