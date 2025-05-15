import React from "react";

const Resume = () => {
  // These would be replaced with actual imports in your implementation
  const Icons = {
    Education: () => (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3L1 9L5 11.18V17.18L12 21L19 17.18V11.18L21 10.09V17H23V9L12 3Z" />
      </svg>
    ),
    Work: () => (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 6H16V4C16 2.9 15.1 2 14 2H10C8.9 2 8 2.9 8 4V6H4C2.9 6 2 6.9 2 8V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V8C22 6.9 21.1 6 20 6ZM10 4H14V6H10V4ZM20 19H4V8H20V19Z" />
      </svg>
    ),
    Skills: () => (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21.67 18.17L14.9 11.4C15.58 10.39 16 9.19 16 8C16 4.65 13.35 2 10 2C6.65 2 4 4.65 4 8C4 11.35 6.65 14 10 14C11.19 14 12.39 13.58 13.4 12.9L20.17 19.67C20.39 19.89 20.7 19.9 20.91 19.68L21.68 18.91C21.9 18.7 21.9 18.38 21.67 18.17ZM10 12C7.74 12 6 10.26 6 8C6 5.74 7.74 4 10 4C12.26 4 14 5.74 14 8C14 10.26 12.26 12 10 12Z" />
      </svg>
    ),
    Projects: () => (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 11V3H15V6H9V3H2V11H9V8H11V18H15V21H22V13H15V16H13V8H15V11H22Z" />
      </svg>
    ),
    LinkedIn: () => (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H6.5V10H9V17ZM7.7 8.7C6.9 8.7 6.2 8 6.2 7.1C6.2 6.2 6.9 5.5 7.7 5.5C8.5 5.5 9.2 6.2 9.2 7.1C9.2 8 8.6 8.7 7.7 8.7ZM18 17H15.5V13.6C15.5 10.5 12.5 10.7 12.5 13.6V17H10V10H12.5V11.3C13.4 9.5 18 9.3 18 13.1V17Z" />
      </svg>
    ),
    GitHub: () => (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12C2 16.42 5.15 20.11 9.29 21.19C9.69 21.26 9.84 21.02 9.84 20.82C9.84 20.64 9.83 20.01 9.83 19.22C7 19.7 6.35 18.14 6.15 17.64C6.04 17.39 5.55 16.61 5.25 16.43C4.99 16.28 4.59 15.8 5.24 15.79C5.85 15.78 6.29 16.4 6.45 16.65C7.25 17.93 8.43 17.67 9.86 17.47C9.93 16.91 10.14 16.54 10.37 16.33C8.15 16.12 5.83 15.32 5.83 11.68C5.83 10.58 6.13 9.66 6.47 8.94C6.39 8.75 6.12 7.75 6.55 6.31C6.55 6.31 7.3 6.1 9.84 7.47C10.56 7.28 11.31 7.19 12.06 7.19C12.81 7.19 13.56 7.29 14.28 7.47C16.81 6.1 17.57 6.31 17.57 6.31C17.99 7.75 17.73 8.75 17.65 8.94C17.99 9.66 18.29 10.57 18.29 11.68C18.29 15.33 15.96 16.12 13.74 16.33C14.03 16.6 14.29 17.12 14.29 17.93C14.29 19.08 14.28 20.56 14.28 20.82C14.28 21.02 14.43 21.27 14.84 21.19C18.97 20.11 22.12 16.42 22.12 12C22.12 6.48 17.64 2 12.12 2H12Z" />
      </svg>
    ),
    Phone: () => (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.01 15.38C18.78 15.38 17.59 15.18 16.48 14.82C16.13 14.7 15.74 14.79 15.47 15.06L13.9 17.03C11.07 15.68 8.42 13.13 7.01 10.2L8.96 8.54C9.23 8.26 9.31 7.87 9.2 7.52C8.83 6.41 8.64 5.22 8.64 3.99C8.64 3.45 8.19 3 7.65 3H4.19C3.65 3 3 3.24 3 3.99C3 13.28 10.73 21 20.01 21C20.72 21 21 20.37 21 19.82V16.37C21 15.83 20.55 15.38 20.01 15.38Z" />
      </svg>
    ),
    Email: () => (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" />
      </svg>
    )
  };

  // Skills data
  const skills = [
    { category: "Languages", items: ["Python", "Java"] },
    { category: "Frameworks", items: ["Django", "DRF"] },
    { category: "Frontend", items: ["Flutter", "HTML5", "CSS", "ReactJS"] },
    { category: "APIs", items: ["RESTful", "3rd-party integrations"] },
    { category: "Databases", items: ["MySQL", "Oracle 10g"] },
    { category: "Tools", items: ["GitHub", "Postman", "VS Code", "Docker", "Power BI"] }
  ];

  // Projects data
  const projects = [
    {
      name: "Luytens WebPage",
      url: "https://github.com/Prithvi9472/WebPage",
      desc: [
        "Developed a responsive frontend using ReactJS and CSS.",
        "Integrated backend features using Django and EmailJS for contact form notifications.",
        "Ensured full responsiveness and mobile compatibility."
      ]
    },
    {
      name: "Job Portal",
      url: "https://github.com/Prithvi9472/JobGenee_ALL",
      desc: [
        "Built a job portal with job listings, search filters, and user profile management.",
        "Used ReactJS for UI and Django for backend logic.",
        "Deployed using Docker for containerization and scalability."
      ]
    },
    {
      name: "TechSpo – E-commerce",
      url: "https://github.com/Prithvi9472/E-commerce",
      desc: [
        "Built a responsive e-commerce web app with shopping cart, order management, and wishlist features.",
        "Integrated Strapi as the backend CMS for efficient content and product management.",
        "Ensured seamless user experience with dynamic UI and smooth functionality across devices."
      ]
    },
    {
      name: "Blinkit UI Clone",
      url: "https://github.com/Prithvi9472/Blinkit",
      desc: [
        "Developed a mobile UI clone of the Blinkit grocery app using Flutter and Dart",
        "Built core screens: Home, Cart, Category and Login",
        "Designed responsive, user-friendly layouts optimized for different device sizes."
      ]
    },
    {
      name: "Personal Portfolio",
      url: "https://github.com/Prithvi9472/Portfilio",
      desc: [
      "Developed a modern personal portfolio using React and Tailwind CSS.",
      "Features include sidebar navigation with emojis, project showcases, and a functional contact form with EmailJS.",
      "Fully responsive design with route-based navigation using React Router.",
      ]
    }
    
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header with print button */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white">Resume</h1>
            <div className="h-1 w-24 bg-blue-600 mt-2"></div>
          </div>

        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-blue-600 to-blue-400 p-6 text-white">
            <h2 className="text-2xl font-bold">PRITHVI RAJ</h2>
            <p className="opacity-90 ">Software Developer | Android App developer</p>
          </div>

          <div className="p-6 ">
            <div className="flex flex-wrap gap-y-3">
              <div className="w-full md:w-1/2 flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                  <Icons.Phone />
                </div>
                <span>+91-9472688501</span>
              </div>
              <div className="w-full md:w-1/2 flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                  <Icons.Email />
                </div>
                <span>Prithvisingh.ps514@gmail.com</span>
              </div>
              <div className="w-full md:w-1/2 flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                  <Icons.LinkedIn />
                </div>
                <a
                  href="https://www.linkedin.com/in/prithvir99"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/prithvir99
                </a>
              </div>
              <div className="w-full md:w-1/2 flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                  <Icons.GitHub />
                </div>
                <a
                  href="https://github.com/Prithvi9472"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/Prithvi9472
                </a>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-100">
              <h3 className="font-semibold text-gray-800 mb-2">Professional Summary</h3>
              <p className="text-gray-600">
                Motivated and detail-oriented software developer with hands-on experience in full-stack development
                using Python, Django, ReactJS, Flutter, and MySQL. Proficient in API integration, responsive UI design,
                and agile development practices. Passionate about building scalable and user-friendly applications.
              </p>
            </div>
          </div>
        </div>

        {/* Main content with two columns on desktop */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left column */}
          <div className="w-full lg:w-7/12 space-y-8">
            {/* Education Section */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="border-b border-gray-100">
                <div className="flex items-center gap-3 p-6">
                  <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                    <Icons.Education />
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">Education</h2>
                </div>
              </div>

              <div className="p-6 space-y-6">
                {/* Education item 1 */}
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-bold text-gray-800">Master of Computer Applications (MCA)</h3>
                  <p className="text-gray-600">Kalinga Institute of Industrial Technology</p>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-sm text-gray-500">2023 - 2025</span>
                    <span className="bg-blue-100 text-blue-700 text-sm px-2 py-1 rounded-full">CGPA: 81.6%</span>
                  </div>
                </div>

                {/* Education item 2 */}
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-bold text-gray-800">Bachelor of Computer Applications (BCA)</h3>
                  <p className="text-gray-600">Birla Institute of Technology, Mesra</p>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-sm text-gray-500">2020 - 2023</span>
                    <span className="bg-blue-100 text-blue-700 text-sm px-2 py-1 rounded-full">81.8%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Work Experience Section */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="border-b border-gray-100">
                <div className="flex items-center gap-3 p-6">
                  <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                    <Icons.Work />
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">Work Experience</h2>
                </div>
              </div>

              <div className="p-6">
                <div>
                  <div className="flex justify-between flex-wrap">
                    <h3 className="text-gray-800 font-bold">Software Developer</h3>
                    <span className="text-sm text-blue-600 font-medium bg-blue-50 px-3 py-1 rounded-full">
                      Jan 2024 – April 2025
                    </span>
                  </div>
                  <p className="text-gray-700 font-medium mb-3">Luytens Technology Solutions</p>

                  <p className="text-gray-700 font-medium mb-3">Luytens Technology Solutions</p>

                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Spearheaded the development of Job Genee, a job portal platform, integrating job listings, user profiles, and advanced search features using Python, Django, and ReactJS.
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Engineered RESTful APIs with Django, implementing JWT authentication to ensure robust and secure user authentication and authorization.
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Crafted intuitive, responsive user interfaces with ReactJS and CSS, optimizing the experience across multiple devices and platforms.
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Streamlined data management by designing and optimizing MySQL database schemas and queries for fast, efficient data storage and retrieval.
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Implemented Docker for containerization, promoting consistent development environments and simplifying the deployment process.
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Conducted comprehensive API testing using ThunderClient and Postman, ensuring seamless integration between front-end and back-end services.
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Collaborated effectively with cross-functional teams using GitHub, managing version control, code reviews, and maintaining a collaborative development environment.
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Led performance, cross-browser, and security testing to ensure the application’s scalability, reliability, and optimal user experience.
                    </li>
                  </ul>

                </div>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="w-full lg:w-5/12 space-y-8">
            {/* Skills Section */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="border-b border-gray-100">
                <div className="flex items-center gap-3 p-6">
                  <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                    <Icons.Skills />
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">Technical Skills</h2>
                </div>
              </div>

              <div className="p-6">
                <div className="space-y-4">
                  {skills.map((skillGroup, index) => (
                    <div key={index}>
                      <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">{skillGroup.category}</h3>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((skill, i) => (
                          <span key={i} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Projects Section */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="border-b border-gray-100">
                <div className="flex items-center gap-3 p-6">
                  <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                    <Icons.Projects />
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">Projects</h2>
                </div>
              </div>

              <div className="divide-y divide-gray-100">
                {projects.map((project, index) => (
                  <div key={index} className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-gray-800">{project.name}</h3>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded transition-colors"
                      >
                        GitHub
                      </a>
                    </div>
                    <ul className="space-y-1 text-sm text-gray-600">
                      {project.desc.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;