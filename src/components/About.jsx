import React from "react";
import profileImage from "./Assests/pri.png";

const About = () => {
  return (
    <section className="px-4 md:px-8 py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-2 text-gray-800">About Me</h2>
          <div className="w-20 h-1 bg-blue-500 mb-6 mx-auto md:mx-0"></div>
          <p className="text-gray-600 max-w-3xl mx-auto md:mx-0 leading-relaxed">
            Motivated and detail-oriented software developer with hands-on experience in full-stack development 
            using Python, Django, ReactJS, Flutter and MySQL. Proficient in API integration, responsive UI design, 
            and agile development practices. Passionate about building scalable and user-friendly applications.
          </p>
        </div>

        {/* Content Grid */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left - Image Column */}
          <div className="w-full lg:w-2/5 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-blue-500 rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
              <img
                src={profileImage}
                alt="Profile"
                className="relative w-full max-w-md rounded-lg shadow-lg transition duration-500 hover:shadow-2xl hover:scale-105 object-cover"
              />
            </div>
          </div>

          {/* Right - Details Column */}
          <div className="w-full lg:w-3/5">
            <h3 className="text-2xl font-bold mb-2 text-gray-800">
              Full Stack Developer & Mobile App Developer
            </h3>
            <p className="italic text-gray-500 mb-6">
              Passionate about building responsive and impactful digital products.
            </p>

            {/* Personal Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-sm text-gray-700 mb-8">
              <div className="flex items-center space-x-2 transition duration-300 hover:text-blue-600">
                <span className="flex items-center font-semibold text-blue-600 mr-1">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  Birthday:
                </span>
                <span>8 May 2002</span>
              </div>
              <div className="flex items-center space-x-2 transition duration-300 hover:text-blue-600">
                <span className="flex items-center font-semibold text-blue-600 mr-1">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  Age:
                </span>
                <span>23</span>
              </div>
              <div className="flex items-center space-x-2 transition duration-300 hover:text-blue-600">
                <span className="flex items-center font-semibold text-blue-600 mr-1">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                  Degree:
                </span>
                <span>Master (MCA)</span>
              </div>
              <div className="flex items-center space-x-2 transition duration-300 hover:text-blue-600">
                <span className="flex items-center font-semibold text-blue-600 mr-1">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Phone:
                </span>
                <span>9472688501</span>
              </div>
              <div className="flex items-center space-x-2 transition duration-300 hover:text-blue-600">
                <span className="flex items-center font-semibold text-blue-600 mr-1">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Email:
                </span>
                <span>prithvisingh.ps514@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 transition duration-300 hover:text-blue-600">
                <span className="flex items-center font-semibold text-blue-600 mr-1">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  City:
                </span>
                <span>Aurangabad (Bihar)</span>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition duration-300">
              <p className="text-gray-600 leading-relaxed">
                I have built multiple projects including job portals, e-commerce platforms, 
                Luytens Webpage and Blinkit clone using Flutter, applying modern frameworks 
                and best practices. I love to learn new technologies and contribute to 
                impactful development teams.
              </p>
            </div>

            {/* Skills Section */}
            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4 text-gray-800">Skills</h4>
              <div className="flex flex-wrap gap-2">
                {["Python", "Django", "ReactJS", "Flutter", "MySQL", "Power Bi", "Java"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium transition duration-300 hover:bg-blue-100">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;