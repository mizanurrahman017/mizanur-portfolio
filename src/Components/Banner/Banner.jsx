import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 px-6 md:px-40 pt-28 pb-12 text-white">

      {/* Glow Shapes */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500 opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-500 opacity-30 rounded-full blur-3xl"></div>

      <div className="relative w-full grid md:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <div>
          <h2 className="text-lg md:text-xl font-medium text-purple-200 mb-2">
            # Hello world! I’m
          </h2>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Mizanur Rahman
          </h1>

          {/* Typewriter */}
          <h3 className="text-2xl md:text-3xl text-purple-300 mt-4">
            <Typewriter
              words={[
                "Frontend Web Developer",
                "React Developer",
                "MERN Stack Developer",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h3>

          <p className="mt-6 text-purple-100 max-w-xl leading-relaxed">
            I build clean, responsive and user-friendly websites using modern
            technologies. Passionate about crafting beautiful UI and smooth
            user experiences that make an impact.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="bg-white text-purple-800 px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 hover:bg-purple-100 transition-all duration-300">
              Hire Me
            </button>

            <button className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full font-semibold hover:bg-white/20 transition-all duration-300">
              Download CV
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center relative">
          <div className="absolute w-96 h-96 bg-purple-500 opacity-30 rounded-full blur-3xl"></div>

          <img
            src="/mizan.jpeg"
            alt="profile"
            className="relative w-72 md:w-[420px] rounded-full border-4 border-white/20 shadow-2xl hover:scale-105 transition-all duration-500"
          />
        </div>

      </div>
    </section>
  );
};

export default Banner;