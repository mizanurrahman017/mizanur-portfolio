import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 text-white py-8 px-6 md:px-40 overflow-hidden">

      {/* Glow Effect */}
      <div className="absolute -top-10 left-10 w-60 h-60 bg-purple-500 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 right-10 w-60 h-60 bg-indigo-500 opacity-20 rounded-full blur-3xl"></div>

      <div className="relative text-center">
        <p className="text-sm md:text-base text-purple-200">
          © 2026 Portfolio | Built with{" "}
          <span className="text-pink-400 text-lg">💜</span> by{" "}
          <span className="text-white font-semibold">
            Mizanur Rahman
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;