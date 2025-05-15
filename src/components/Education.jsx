import React from "react";

const Education = () => {
  // Mock icon since we can't import react-icons directly
  const GraduationCapIcon = () => (
    <svg 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className="w-5 h-5"
    >
      <path d="M12 3L1 9L5 11.18V17.18L12 21L19 17.18V11.18L21 10.09V17H23V9L12 3ZM18.82 9L12 12.72L5.18 9L12 5.28L18.82 9ZM17 15.99L12 18.72L7 15.99V12.27L12 15L17 12.27V15.99Z" />
    </svg>
  );

  const educationData = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Kalinga Institute of Industrial Technology",
      year: "2023 - 2025",
      result: "81.6%",
      current: true,
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Birla Institute of Technology, Mesra",
      year: "2020 - 2023",
      result: "81.8%",
    },
    {
      degree: "Intermediate",
      institution: "P.Y.M (S.S) Public School",
      year: "2019 - 2020",
      result: "71%",
    },
    {
      degree: "Matriculation",
      institution: "D.A.L.I.M.S.S Sunbeam School",
      year: "2016 - 2017",
      result: "81.7%",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 p-8 md:p-12 lg:p-16">
      {/* Header with animation */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="inline-block">
          <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-3 mb-3">
            <span className="bg-blue-600 text-white p-2 rounded-lg">
              <GraduationCapIcon />
            </span>
            Education
          </h2>
          <div className="h-1 w-1/2 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
        </div>
        <p className="text-white mt-4 text-2xl font-bold max-w-1xl">
          My academic journey has equipped me with strong foundations in computer science and practical development skills.
        </p>
      </div>

      {/* Timeline design */}
      <div className="max-w-4xl mx-auto relative">
        {/* Timeline line */}
        <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-blue-200 hidden md:block"></div>

        <div className="space-y-10 relative">
          {educationData.map((edu, index) => (
            <div 
              key={index} 
              className="relative flex flex-col md:flex-row group"
            >
              {/* Timeline dot - hidden on mobile */}
              <div className="absolute left-5 top-5 w-5 h-5 rounded-full border-4 border-white bg-blue-600 shadow-md hidden md:block group-hover:scale-125 transition-transform duration-300"></div>
              
              {/* Card */}
              <div className="md:ml-16 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex-1">
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                    <h3 className="text-xl font-bold text-gray-800">
                      {edu.degree}
                      {edu.current && (
                        <span className="ml-3 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                          Current
                        </span>
                      )}
                    </h3>
                    <div className="text-sm font-medium px-4 py-1 bg-blue-50 text-blue-700 rounded-full inline-flex items-center">
                      <span>{edu.year}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 font-medium">{edu.institution}</p>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                    <div className="text-gray-500 text-sm">Performance</div>
                    <div className="flex items-center">
                      <div className="w-32 bg-gray-200 rounded-full h-2 mr-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: edu.result }}
                        ></div>
                      </div>
                      <span className="text-blue-700 font-bold">{edu.result}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;