import React from "react";

const Banner = () => {
  return (
    <section className="w-full min-h-screen flex items-center bg-gray-50 px-6 md:px-16 py-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div>
          <h2 className="text-lg md:text-xl  font-semibold mb-2">
            # Hello world! I’m
          </h2>

          <h1 className="text-4xl md:text-6xl font-bold text-purple-800 leading-tight">
            Mizanur Rahman
          </h1>

          <h3 className="text-2xl md:text-3xl text-gray-600 mt-4">
            Frontend Web Developer
          </h3>

          <p className="mt-6 text-gray-500 max-w-lg">
            I build clean, responsive and user-friendly websites using modern
            technologies. Passionate about creating beautiful UI and smooth user
            experiences.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow hover:bg-purple-700 transition">
              Hire Me
            </button>

            <button className="border border-purple-600 text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-50 transition">
              Download CV
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="https://i.ibb.co/4pDNDk1/avatar.png"
            alt="profile"
            className="w-72 md:w-96 rounded-full shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
