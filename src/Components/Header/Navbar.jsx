import React, { useState } from "react";
import { NavLink } from "react-router";
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkStyle = ({ isActive }) =>
    isActive
      ? "text-purple-600 font-semibold"
      : "hover:text-purple-600 transition-colors duration-300";

  return (
    <nav className="w-full bg-white shadow-sm px-6 md:px-12 py-4 relative">
      <div className="flex items-center justify-between">
        
        {/* Logo */}
        <NavLink
          to="/"
          className="text-2xl font-bold text-purple-600"
          onClick={() => setMenuOpen(false)}
        >
          Portfolio
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li>
            <NavLink to="/" className={navLinkStyle}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={navLinkStyle}>About</NavLink>
          </li>
          <li>
            <NavLink to="/worked" className={navLinkStyle}>Worked</NavLink>
          </li>
          <li>
            <NavLink to="/skills" className={navLinkStyle}>Skills</NavLink>
          </li>
          <li>
            <NavLink to="/education" className={navLinkStyle}>Education</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={navLinkStyle}>Contact</NavLink>
          </li>
        </ul>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center gap-4 text-xl text-gray-700">
          <a
            href="https://github.com/mizanurrahman017"
            target="_blank"
            rel="noreferrer"
            className="hover:text-purple-600 transition-colors duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/mizanur-rahman-asif-599711383/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-purple-600 transition-colors duration-300"
          >
            <FaLinkedin />
          </a>

          <NavLink
            to="/contact"
            className="hover:text-purple-600 transition-colors duration-300"
          >
            <FaEnvelope />
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300 ease-in-out ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <ul className="flex flex-col gap-5 p-6 text-gray-700 font-medium">
          <li>
            <NavLink
              to="/"
              className={navLinkStyle}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={navLinkStyle}
              onClick={() => setMenuOpen(false)}
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/worked"
              className={navLinkStyle}
              onClick={() => setMenuOpen(false)}
            >
              Worked
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/skills"
              className={navLinkStyle}
              onClick={() => setMenuOpen(false)}
            >
              Skills
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/education"
              className={navLinkStyle}
              onClick={() => setMenuOpen(false)}
            >
              Education
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={navLinkStyle}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
