import React from "react";
import Pri from "./Assests/pri.png";
import { NavLink } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaHome,
  FaUser,
  FaFileAlt,
  FaProjectDiagram,
  FaGraduationCap,
  FaEnvelope,
} from "react-icons/fa";

const NavItem = ({ icon, label, href }) => (
  <NavLink
    to={href}
    className={({ isActive }) =>
      `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 w-full ${
        isActive
          ? "bg-blue-600 text-white font-medium"
          : "text-gray-300 hover:bg-gray-800 hover:text-white"
      }`
    }
  >
    <span className="text-lg">{icon}</span>
    <span className="font-medium">{label}</span>
  </NavLink>
);

const Sidebar = () => {
  return (
    <div className="bg-gray-900 h-screen w-[278px] fixed left-0 top-0 flex flex-col shadow-lg">
      {/* Profile section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/30 to-gray-900"></div>
        <div className="relative flex flex-col items-center pt-8 pb-6 px-4">
          <div className="relative mb-3">
            <div className="absolute inset-0 bg-blue-500 opacity-20 rounded-full blur-md"></div>
            <img
              src={Pri}
              alt="Prithvi Raj"
              className="w-24 h-24 rounded-full border-2 border-blue-400 object-cover relative z-10"
            />
          </div>
          <h1 className="text-xl font-bold text-white mb-1">Prithvi Raj</h1>
          <p className="text-blue-400 text-sm mb-4">Software Developer</p>
          <div className="flex gap-3 mb-2">
            <a
              href="https://github.com/Prithvi9472"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-colors flex items-center justify-center w-8 h-8 text-white"
            >
              <FaGithub size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/prithvir99"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-blue-700 p-2 rounded-full transition-colors flex items-center justify-center w-8 h-8 text-white"
            >
              <FaLinkedin size={16} />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-pink-600 p-2 rounded-full transition-colors flex items-center justify-center w-8 h-8 text-white"
            >
              <FaInstagram size={16} />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-blue-600 p-2 rounded-full transition-colors flex items-center justify-center w-8 h-8 text-white"
            >
              <FaFacebook size={16} />
            </a>
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-gray-700 opacity-50"></div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        <NavItem icon={<FaHome />} label="Home" href="/" />
        <NavItem icon={<FaUser />} label="About" href="/about" />
        <NavItem icon={<FaFileAlt />} label="Resume" href="/resume" />
        <NavItem icon={<FaProjectDiagram />} label="Projects" href="/projects" />
        <NavItem icon={<FaGraduationCap />} label="Education" href="/education" />
        <NavItem icon={<FaEnvelope />} label="Contact" href="/contact" />
      </nav>

      <div className="p-4 text-center border-t border-gray-800">
        <p className="text-xs text-white">© 2025 Prithvi Raj</p>
      </div>
    </div>
  );
};

export default Sidebar;
