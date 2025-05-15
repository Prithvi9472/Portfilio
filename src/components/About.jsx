import React from "react";
import profileImage from "./Assests/pri.png";

const About = () => {
  return (
    <section className="px-4 md:px-8 py-16 bg-gradient-to-r from-gray-900 to-gray-800">
  <div className="max-w-6xl mx-auto">
    {/* Section Header */}
    <div className="mb-12 text-center md:text-left">
      <h2 className="text-5xl font-bold mb-2 text-white">About Me</h2> {/* Increased from 4xl */}
      <div className="w-20 h-1 bg-blue-500 mb-6 mx-auto md:mx-0"></div>
      <p className="text-lg text-white max-w-3xl mx-auto md:mx-0 leading-relaxed"> {/* Increased to lg */}
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
        <h3 className="text-3xl font-bold mb-2 text-white"> {/* Increased from 2xl */}
          Full Stack Developer & Mobile App Developer
        </h3>
        <p className="italic text-lg text-white mb-6"> {/* Increased to lg */}
          Passionate about building responsive and impactful digital products.
        </p>

        {/* Personal Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-base text-gray-700 mb-8"> {/* Increased from text-sm */}
          
        </div>

        {/* Description */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition duration-300">
          <p className="text-lg text-gray-600 leading-relaxed"> {/* Increased to lg */}
            I have built multiple projects including job portals, e-commerce platforms, 
            Luytens Webpage and Blinkit clone using Flutter, applying modern frameworks 
            and best practices. I love to learn new technologies and contribute to 
            impactful development teams.
          </p>
        </div>

        {/* Skills Section */}
        <div className="mt-8">
          <h4 className="text-3xl font-semibold mb-4 text-white">Skills</h4> {/* Increased from xl */}
          <div className="flex flex-wrap gap-2">
            {["Python", "Django", "ReactJS", "Flutter", "MySQL", "Power Bi", "Java"].map((skill) => (
              <span key={skill} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-base font-medium transition duration-300 hover:bg-blue-100"> {/* Increased from text-sm */}
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