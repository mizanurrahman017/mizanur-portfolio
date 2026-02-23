import React, { useState } from "react";
import { NavLink } from "react-router";
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkStyle = ({ isActive }) =>
    isActive
      ? "text-white font-semibold relative after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-white"
      : "text-white/80 hover:text-white transition-all duration-300";

  return (
    <nav className="w-full  fixed top-0 left-0 z-50 backdrop-blur-lg bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-600 shadow-lg">
      
      {/* Decorative Glow Shapes */}
      <div className="absolute -top-10 -left-10 w-60 h-60 bg-purple-400 opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-indigo-400 opacity-30 rounded-full blur-3xl"></div>

      <div className="relative flex items-center justify-between px-6 md:px-40 py-4">
        
        {/* Logo */}
        <NavLink
          to="/"
          className="text-2xl md:text-3xl font-bold text-white tracking-wide"
          onClick={() => setMenuOpen(false)}
        >
          Portfolio
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-base font-medium">
          <li><NavLink to="/" className={navLinkStyle}>Home</NavLink></li>
          <li><NavLink to="/about" className={navLinkStyle}>About</NavLink></li>
          <li><NavLink to="/worked" className={navLinkStyle}>Projects</NavLink></li>
          <li><NavLink to="/skills" className={navLinkStyle}>Skills</NavLink></li>
          <li><NavLink to="/education" className={navLinkStyle}>Education</NavLink></li>
          <li><NavLink to="/contact" className={navLinkStyle}>Contact</NavLink></li>
        </ul>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center gap-5 text-xl text-white/80">
          <a
            href="https://github.com/mizanurrahman017"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white hover:scale-110 transition-all duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/mizanur-rahman-asif-599711383/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white hover:scale-110 transition-all duration-300"
          >
            <FaLinkedin />
          </a>

          <NavLink
            to="/contact"
            className="hover:text-white hover:scale-110 transition-all duration-300"
          >
            <FaEnvelope />
          </NavLink>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col gap-6 px-8 py-6 bg-gradient-to-b from-purple-700 to-indigo-700 text-white font-medium">
          <li><NavLink to="/" className={navLinkStyle} onClick={() => setMenuOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/about" className={navLinkStyle} onClick={() => setMenuOpen(false)}>About</NavLink></li>
          <li><NavLink to="/worked" className={navLinkStyle} onClick={() => setMenuOpen(false)}>Projects</NavLink></li>
          <li><NavLink to="/skills" className={navLinkStyle} onClick={() => setMenuOpen(false)}>Skills</NavLink></li>
          <li><NavLink to="/education" className={navLinkStyle} onClick={() => setMenuOpen(false)}>Education</NavLink></li>
          <li><NavLink to="/contact" className={navLinkStyle} onClick={() => setMenuOpen(false)}>Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;