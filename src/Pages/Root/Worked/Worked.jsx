import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    id: 1,
    title: "Syeda Farhana Hussain High School",
    category: "mern",
    image: "/SFHHS.jpeg",
    description: "AI powered fitness and wellness platform.",
    live: "https://sfhhs.vercel.app/",
    github: "https://github.com/mizanurrahman017/syeda-farhana-hussain",
  },
  {
    id: 2,
    title: "Car Info",
    category: "react",
    image: "/carinfo.jpeg",
    description: "Sports club booking and dashboard system.",
    live: "https://carinfo-beige.vercel.app/",
    github: "https://github.com/mizanurrahman017/Car-Details",
  },
  {
    id: 3,
    title: "Food Expiry Tracker",
    category: "mern",
    image: "/Foodbadge.jpeg",
    description: "Track food expiry dates and reduce waste.",
    live: "https://food-badge.vercel.app/",
    github: "https://github.com/mizanurrahman017/FoodBadge",
  },
  {
    id: 4,
    title: "Kacha Bazar",
    category: "react",
    image: "/kacha bazar.jpeg",
    description: "Plant management system.",
    live: "https://kacha-bazar-olive.vercel.app/",
    github: "https://github.com/mizanurrahman017/Kacha-bazar",
  },
  {
    id: 5,
    title: "INNOVIVE",
    category: "mern",
    image: "/INNOVIVE.jpeg",
    description: "Parcel delivery tracking system.",
    live: "https://innovive.vercel.app/",
    github: "https://github.com/mizanurrahman017/Innovive",
  },
  {
    id: 6,
    title: "MyBank",
    category: "ui",
    image: "/mybank.png",
    description: "Online banking dashboard.",
    live: "https://your-live-link.com",
    github: "https://github.com/yourgithub/mybank",
  },
];

const Worked = () => {

  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section className="bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-700 text-white py-28 px-6 md:px-20">

      {/* Title */}
      <div className="text-center mb-14">
        <h2 className="text-5xl font-bold mb-4">My Projects</h2>
        <p className="text-gray-400">Some of the projects I have worked on</p>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-14 flex-wrap">

        {["all", "react", "mern", "ui"].map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            className={`px-6 py-2 rounded-full capitalize transition
            ${
              filter === item
                ? "bg-cyan-500 text-white"
                : "bg-slate-800 text-gray-300 hover:bg-slate-700"
            }`}
          >
            {item}
          </button>
        ))}

      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

        {filteredProjects.map((project) => (

          <motion.div
            key={project.id}
            whileHover={{ scale: 1.04 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="group relative rounded-2xl overflow-hidden border border-slate-700 bg-slate-900"
          >

            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-52 object-cover group-hover:scale-110 transition duration-500"
            />

            {/* Hover Overlay */}
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

              <h3 className="text-xl font-semibold mb-2">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm">
                {project.description}
              </p>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
};

export default Worked;