import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaCode, FaInfoCircle } from "react-icons/fa";

const projects = [
  {
    title: "Luytens WebPage",
    link: "https://github.com/Prithvi9472/WebPage",
    image: "/api/placeholder/800/600",
    tech: ["React", "CSS", "Django", "EmailJS"],
    description: [
      "Developed a responsive frontend using ReactJS and CSS.",
      "Integrated backend features using Django and EmailJS for contact form notifications.",
      "Ensured full responsiveness and mobile compatibility.",
    ],
  },
  {
    title: "Job Portal (JobGenee)",
    link: "https://github.com/Prithvi9472/JobGenee_ALL",
    image: "/api/placeholder/800/600",
    tech: ["React", "Django", "Docker"],
    description: [
      "Built a job portal with job listings, search filters, and user profile management.",
      "Used ReactJS for UI and Django for backend logic.",
      "Deployed using Docker for containerization and scalability.",
    ],
  },
  {
    title: "TechSpo – E-commerce Platform",
    link: "https://github.com/Prithvi9472/E-commerce",
    image: "/api/placeholder/800/600",
    tech: ["React", "Strapi", "CSS"],
    description: [
      "Built a responsive e-commerce web app with shopping cart, order management, and wishlist features.",
      "Integrated Strapi as the backend CMS for efficient content and product management.",
      "Ensured seamless user experience with dynamic UI and smooth functionality across devices.",
    ],
  },
  {
    title: "Blinkit (UI Clone)",
    link: "https://github.com/Prithvi9472/Blinkit",
    image: "/api/placeholder/800/600",
    tech: ["Flutter", "Dart"],
    description: [
      "Developed a mobile UI clone of the Blinkit grocery app using Flutter and Dart.",
      "Built core screens: Home, Cart, Category, and Login.",
      "Designed responsive, user-friendly layouts optimized for different device sizes.",
    ],
  },
];

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleProject = (index) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <section className="px-6 py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-12">
          <div className="w-2 h-16 bg-blue-600 rounded-full mr-4"></div>
          <div>
            <h2 className="text-4xl font-bold mb-2 text-white">Projects</h2>
            <p className="text-white text-lg">Recent work I've built and contributed to</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 ${
                expandedProject === index ? "ring-2 ring-blue-500" : ""
              }`}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => toggleProject(index)}
            >
              <div className="aspect-video w-full relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transform transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6 w-full">
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {expandedProject === index && (
                  <div className="mt-4 text-gray-700 space-y-2">
                    {project.description.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <FaInfoCircle className="text-blue-500 mt-1 flex-shrink-0" />
                        <p>{point}</p>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex justify-between items-center mt-6">
                  <div className="flex items-center text-sm text-gray-500">
                    <FaCode className="mr-1" />
                    <span>{expandedProject === index ? "Click to collapse" : "Click to expand"}</span>
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-blue-500 hover:text-white transition-colors duration-300"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaGithub className="text-lg" />
                    </a>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-blue-500 hover:text-white transition-colors duration-300"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaExternalLinkAlt className="text-lg" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;