import React, { useState } from "react";
import { NavLink } from "react-router";
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinkStyle = ({ isActive }) =>
        isActive
            ? "text-purple-600 font-semibold"
            : "hover:text-purple-600";

    return (
        <nav className="w-full bg-white shadow-sm px-6 md:px-12 py-4">
            <div className="flex items-center justify-between">

                {/* Logo */}
                <NavLink to="/" className="text-2xl font-bold text-purple-600">
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
                    <a href="https://github.com/mizanurrahman017" target="_blank" rel="noreferrer" className="hover:text-purple-600">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/mizanur-rahman-asif-599711383/" target="_blank" rel="noreferrer" className="hover:text-purple-600">
                        <FaLinkedin />
                    </a>
                    <NavLink to="/contact" className="hover:text-purple-600">
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
            {menuOpen && (
                <div className="md:hidden mt-4 space-y-4 text-gray-700 font-medium">

                    <NavLink to="/" className={navLinkStyle}>Home</NavLink>
                    <NavLink to="/about" className={navLinkStyle}>About</NavLink>
                    <NavLink to="/worked" className={navLinkStyle}>Worked</NavLink>
                    <NavLink to="/skills" className={navLinkStyle}>Skills</NavLink>
                    <NavLink to="/education" className={navLinkStyle}>Education</NavLink>
                    <NavLink to="/contact" className={navLinkStyle}>Contact</NavLink>

                </div>
            )}
        </nav>
    );
};

export default Navbar;
