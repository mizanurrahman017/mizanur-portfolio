import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiRedux, SiTailwindcss, SiExpress } from "react-icons/si";

import { NavLink } from "react-router";
// comment


const skillsData = [
    { name: "HTML", category: "frontend", icon: <FaHtml5 className="text-orange-500 text-5xl" /> },
    { name: "CSS", category: "frontend", icon: <FaCss3Alt className="text-blue-500 text-5xl" /> },
    { name: "JavaScript", category: "language", icon: <FaJs className="text-yellow-400 text-5xl" /> },
    { name: "React.js", category: "frontend", icon: <FaReact className="text-cyan-400 text-5xl" /> },
    { name: "Redux", category: "frontend", icon: <SiRedux className="text-purple-500 text-5xl" /> },
    { name: "TailwindCSS", category: "frontend", icon: <SiTailwindcss className="text-sky-400 text-5xl" /> },
    { name: "Java", category: "language ", icon: <FaNodeJs className="text-green-500 text-5xl" /> },
    { name: "Git", category: "tools", icon: <SiExpress className="text-gray-300 text-5xl" /> },
    { name: "GitHub", category: "tools", icon: <SiExpress className="text-gray-300 text-5xl" /> },
    { name: "VS Code", category: "tools", icon: <SiExpress className="text-gray-300 text-5xl" /> },
    { name: "Netlify", category: "tools", icon: <SiExpress className="text-gray-300 text-5xl" /> },
    { name: "Vercel", category: "tools", icon: <SiExpress className="text-gray-300 text-5xl" /> },
    
];

const Skill = () => {

    const [filter, setFilter] = useState("all");

    const filteredSkills =
        filter === "all"
            ? skillsData
            : skillsData.filter((skill) => skill.category === filter);

    return (
        <section className="relative bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-700 text-white py-28 px-6 md:px-20 overflow-hidden">


            {/* Title */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-14"
            >
                <h2 className="text-5xl font-bold mb-4">Skills</h2>
                <p className="text-gray-400 max-w-xl mx-auto">
                    Technologies and tools I use to build modern web applications.
                </p>
            </motion.div>

            {/* Filter Buttons */}
            <div className="flex justify-center flex-wrap gap-4 mb-14">

                {["all", "frontend",  "language", "tools"].map((item) => (
                    <button
                        key={item}
                        onClick={() => setFilter(item)}
                        className={`px-6 py-2 rounded-full capitalize transition
            ${filter === item
                                ? "bg-cyan-500 text-white"
                                : "bg-slate-800 hover:bg-slate-700 text-gray-300"}`}
                    >
                        {item === "language" ? "Programming" : item}
                    </button>
                ))}

            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                {filteredSkills.map((skill, index) => (

                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.07 }}
                        transition={{ duration: 0.3 }}
                        className="relative group"
                    >

                        {/* glow border */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 blur opacity-0 group-hover:opacity-40 transition"></div>

                        <div className="relative bg-slate-900 border border-slate-700 rounded-2xl p-10 flex flex-col items-center justify-center">

                            <div className="group-hover:scale-110 transition">
                                {skill.icon}
                            </div>

                            <p className="mt-5 text-lg text-gray-300">
                                {skill.name}
                            </p>

                        </div>

                    </motion.div>

                ))}

            </div>

            {/* Button */}
            <div className="flex justify-center mt-16">

                <NavLink
                    to="/skills"
                    className="group relative inline-flex items-center gap-2 px-8 py-3 
    rounded-xl border border-cyan-400 text-white font-medium
    overflow-hidden transition duration-300
    hover:text-white"
                >

                    {/* Glow background */}
                    <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition"></span>

                    {/* Text */}
                    <span className="relative z-10 flex items-center gap-2">
                        View All Skills
                        <span className="group-hover:translate-x-1 transition">→</span>
                    </span>

                </NavLink>

            </div>

        </section>
    );
};

export default Skill;