import React, { useState } from "react";

// For demonstration purposes - in a real app, use react-router-dom
const NavItem = ({ icon, label, href, isActive, onClick }) => (
  <a
    href={href}
    onClick={(e) => {
      e.preventDefault();
      onClick(href);
    }}
    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 w-full
      ${isActive 
        ? "bg-blue-600 text-white font-medium" 
        : "text-gray-300 hover:bg-gray-800 hover:text-white"
      }`}
  >
    <span className="text-lg">{icon}</span>
    <span className="font-medium">{label}</span>
  </a>
);

const Sidebar = () => {
  const [activePath, setActivePath] = useState("/");

  // Social icons are just placeholders since we can't import react-icons
  const SocialIcon = ({ bg, hoverBg }) => (
    <a
      href="#"
      className={`${bg} ${hoverBg} p-2 rounded-full transition-colors flex items-center justify-center w-8 h-8`}
    >
      <div className="w-4 h-4 bg-white rounded-sm"></div>
    </a>
  );

  // Navigation icon placeholders
  const Icon = () => <div className="w-5 h-5 bg-current rounded-sm"></div>;

  return (
    <div className="bg-gray-900 h-screen w-64 fixed left-0 top-0 flex flex-col shadow-lg">
      {/* Profile section with gradient overlay */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/30 to-gray-900"></div>
        <div className="relative flex flex-col items-center pt-8 pb-6 px-4">
          {/* Profile Photo with subtle glow */}
          <div className="relative mb-3">
            <div className="absolute inset-0 bg-blue-500 opacity-20 rounded-full blur-md"></div>
            <img
              src="/api/placeholder/150/150"
              alt="Prithvi Raj"
              className="w-24 h-24 rounded-full border-2 border-blue-400 object-cover relative z-10"
            />
          </div>

          {/* Name */}
          <h1 className="text-xl font-bold text-white mb-1">Prithvi Raj</h1>
          <p className="text-blue-400 text-sm mb-4">Software Developer</p>

          {/* Social Icons with improved styling */}
          <div className="flex gap-3 mb-2">
            <SocialIcon bg="bg-gray-800" hoverBg="hover:bg-gray-700" />
            <SocialIcon bg="bg-gray-800" hoverBg="hover:bg-blue-700" />
            <SocialIcon bg="bg-gray-800" hoverBg="hover:bg-blue-600" />
            <SocialIcon bg="bg-gray-800" hoverBg="hover:bg-pink-600" />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-gray-700 opacity-50"></div>

      {/* Navigation with active state */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        <NavItem 
          icon={<Icon />} 
          label="Home" 
          href="/" 
          isActive={activePath === "/"} 
          onClick={setActivePath}
        />
        <NavItem 
          icon={<Icon />} 
          label="About" 
          href="/about" 
          isActive={activePath === "/about"} 
          onClick={setActivePath}
        />
        <NavItem 
          icon={<Icon />} 
          label="Resume" 
          href="/resume" 
          isActive={activePath === "/resume"} 
          onClick={setActivePath}
        />
        <NavItem 
          icon={<Icon />} 
          label="Projects" 
          href="/projects" 
          isActive={activePath === "/projects"} 
          onClick={setActivePath}
        />
        <NavItem 
          icon={<Icon />} 
          label="Education" 
          href="/education" 
          isActive={activePath === "/education"} 
          onClick={setActivePath}
        />
        <NavItem 
          icon={<Icon />} 
          label="Contact" 
          href="/contact" 
          isActive={activePath === "/contact"} 
          onClick={setActivePath}
        />
      </nav>

      {/* Footer */}
      <div className="p-4 text-center border-t border-gray-800">
        <p className="text-xs text-gray-500">© 2025 Prithvi Raj</p>
      </div>
    </div>
  );
};

export default Sidebar;