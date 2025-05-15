import React from "react";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative w-full bg-gradient-to-r from-gray-900 to-gray-800 min-h-screen flex items-center">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-full h-full bg-grid-pattern-dots"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 py-12 flex flex-col md:flex-row items-center">
        {/* Text content */}
        <div className="md:w-1/2 text-left md:pr-8 z-10">
          <span className="text-blue-400 font-semibold tracking-wider mb-3 block">SOFTWARE DEVELOPER</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Hi, I'm <span className="text-blue-400">Prithvi Raj</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-lg">
            I build exceptional digital experiences with modern technologies.
            Specialized in creating robust, scalable, and user-friendly applications.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center">
              <FileText className="mr-2 h-5 w-5" />
              View Resume
            </button>
            <button className="px-6 py-3 bg-transparent hover:bg-white/10 text-white border border-gray-600 font-medium rounded-lg transition-colors flex items-center justify-center">
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </button>
          </div>
          
          <div className="flex space-x-5">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        {/* Image */}
        <div className="md:w-1/2 mt-10 md:mt-0 z-10 flex justify-center">
          <div className="relative">
            {/* Blue glow effect behind image */}
            <div className="absolute -inset-2 bg-blue-500 opacity-20 rounded-full blur-xl"></div>
            
            {/* Image with border */}
            <div className="h-64 w-64 md:h-80 md:w-80 rounded-full border-4 border-blue-400 overflow-hidden relative z-10">
              <img 
                src="/api/placeholder/500/500" 
                alt="Prithvi Raj" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating skill badges */}
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;