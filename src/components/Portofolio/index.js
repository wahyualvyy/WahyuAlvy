import React from "react";

const Portofolio = () => {
  const projects = [
    { title: "Project Showroom Mobil", url: "https://github.com/wahyualvyy/project-pkl.github.io", image: "https://i.ibb.co/rKWJX3mP/showrom.png" },
    { title: "Project E-Absensi", url: "https://github.com/wahyualvyy/project-e-absensi-github.io", image: "https://i.ibb.co/bMcvQnsd/image.png" },
    { title: "Project Penyewaan Villa", url: "https://github.com/wahyualvyy/Project-livecoding.github.io", image: "https://i.ibb.co/ZpCkGdjf/image.png" }
  ];

  return (
    <div className="mt-6 flex justify-center items-center p-4">
      <div className="w-full max-w-screen-xl border-2 border-solid border-white p-8 rounded-lg shadow-lg">
        <h1 className="text-white font-bold text-[35px] mb-6">My Project</h1>
        
        {/* Grid untuk Card */}
        <div className="grid grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="relative bg-gray-800 p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-[0_0_20px_5px_rgba(0,123,255,0.7)] hover:shadow-blue-500/70 overflow-hidden"
            >
              <div className="w-full h-40 rounded-md overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-300" />
              </div>
              <div className="flex justify-between items-center mt-2">
                <h2 className="text-white font-semibold">{project.title}</h2>
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-white bg-blue-600 p-2 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14 3h7v7h-2V5.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portofolio;
