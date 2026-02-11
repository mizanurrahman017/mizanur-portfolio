import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm px-6 md:px-12 py-4">
      <div className="flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-purple-600">Portfolio</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li className="text-purple-600 cursor-pointer">Home</li>
          <li className="hover:text-purple-600 cursor-pointer">About</li>
          <li className="hover:text-purple-600 cursor-pointer">Worked</li>
          <li className="hover:text-purple-600 cursor-pointer">Skills</li>
          <li className="hover:text-purple-600 cursor-pointer">Education</li>
          <li className="hover:text-purple-600 cursor-pointer">Contact</li>
        </ul>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center gap-4 text-xl text-gray-700">
          <a href="https://github.com/mizanurrahman017" target="_blank" rel="noreferrer" className="hover:text-purple-600">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/mizanur-rahman-asif-599711383/" target="_blank" rel="noreferrer" className="hover:text-purple-600">
            <FaLinkedin />
          </a>
          <a href="mailto:your@email.com" className="hover:text-purple-600">
            <FaEnvelope />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-4 text-gray-700 font-medium">
          <p className="text-purple-600">Home</p>
          <p className="hover:text-purple-600 cursor-pointer">About</p>
          <p className="hover:text-purple-600 cursor-pointer">Worked</p>
          <p className="hover:text-purple-600 cursor-pointer">Skills</p>
          <p className="hover:text-purple-600 cursor-pointer">Education</p>
          <p className="hover:text-purple-600 cursor-pointer">Contact</p>

          {/* Mobile Icons */}
          <div className="flex gap-4 text-xl pt-2">
            <FaGithub className="hover:text-purple-600 cursor-pointer" />
            <FaLinkedin className="hover:text-purple-600 cursor-pointer" />
            <FaEnvelope className="hover:text-purple-600 cursor-pointer" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
