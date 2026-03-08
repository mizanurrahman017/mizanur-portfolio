import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { NavLink } from "react-router";

const projectsData = [
    {
        id: 1,
        title: "Syeda Farhana Hussain High School",
        description:
            "AI powered fitness platform with workout plans, diet tracking and progress monitoring.",
        image: "/SFHHS.jpeg",
        live: "https://sfhhs.vercel.app/",
        github: "https://github.com/mizanurrahman017/syeda-farhana-hussain",
    },
    {
        id: 2,
        title: "Car Info",
        description:
            "Sports club system with role-based dashboard, booking and payment system.",
        image: "/carinfo.jpeg",
        live: "https://carinfo-beige.vercel.app/",
        github: "https://github.com/mizanurrahman017/Car-Details",
    },
    {
        id: 3,
        title: "🥗 FoodBridge - Food Donation Management Platform",
        description:
            "Full stack MERN app to track food expiry dates and reduce food waste.",
        image: "/Foodbadge.jpeg",
        live: "https://food-badge.vercel.app/",
        github: "https://github.com/mizanurrahman017/FoodBadge",
    },
];

const Project = () => {
    return (
        <section className="bg-[#020617] text-white py-28 px-6 md:px-20">

            {/* Title */}
            <div className="text-center mb-16">
                <h2 className="text-5xl font-bold">My Projects</h2>
                <div className="w-24 h-1 bg-cyan-500 mx-auto mt-4"></div>
            </div>

            {/* Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

                {projectsData.map((project) => (

                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.4 }}
                        className="group relative rounded-2xl overflow-hidden border border-slate-700 bg-slate-900"
                    >

                        {/* Image */}
                        <div className="overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-52 object-cover group-hover:scale-110 transition duration-500"
                            />
                        </div>

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/70 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition">

                            <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-cyan-600 px-4 py-2 rounded-lg hover:bg-cyan-700"
                            >
                                <FiExternalLink />
                                Live
                            </a>

                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-lg hover:bg-slate-700"
                            >
                                <FaGithub />
                                Code
                            </a>

                        </div>

                        {/* Content */}
                        <div className="p-6">

                            <h3 className="text-xl font-semibold mb-3">
                                {project.title}
                            </h3>

                            <p className="text-gray-400 text-sm">
                                {project.description}
                            </p>

                        </div>

                    </motion.div>

                ))}

            </div>

            {/* View More */}
            <div className="flex justify-center mt-16">
                <NavLink
                    to="/worked"
                    className="px-8 py-3 border border-cyan-400 rounded-xl 
    hover:bg-cyan-500 transition duration-300 font-medium"
                >
                    View More
                </NavLink>
            </div>

        </section>
    );
};

export default Project;