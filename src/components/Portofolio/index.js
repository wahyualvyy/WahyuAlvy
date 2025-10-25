import React, { useState, useEffect, useRef } from "react";

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const projects = [
    { 
      title: "Showroom Mobil", 
      url: "https://github.com/wahyualvyy/project-pkl.github.io", 
      image: "/assets/project/contoh.png",
      description: "Website manajemen showroom mobil dengan fitur CRUD lengkap",
      tech: ["PHP", "MySQL", "Bootstrap", "CodeIgniter"],
      category: "Web App"
    },
    { 
      title: "E-Absensi", 
      url: "https://github.com/wahyualvyy/project-e-absensi-github.io", 
      image: "/assets/project/contoh.png",
      description: "Sistem absensi digital untuk manajemen kehadiran siswa",
      tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      category: "Management System"
    },
    { 
      title: "Penyewaan Villa", 
      url: "https://github.com/wahyualvyy/Project-livecoding.github.io", 
      image: "/assets/project/contoh.png",
      description: "Platform booking villa dengan sistem pembayaran terintegrasi",
      tech: ["PHP", "MySQL", "CSS", "JavaScript", "Bootstrap"],
      category: "Booking System"
    }
  ];

  return (
    <div 
      ref={sectionRef}
      className="min-h-screen flex justify-center items-center p-4 lg:p-8 bg-gradient-to-br from-gray-900 via-black to-gray-900" 
      id="project"
    >
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9) rotateY(-10deg);
          }
          to {
            opacity: 1;
            transform: scale(1) rotateY(0deg);
          }
        }

        @keyframes shine {
          0% {
            transform: translateX(-100%) translateY(-100%) rotate(30deg);
          }
          100% {
            transform: translateX(100%) translateY(100%) rotate(30deg);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>

      <div className="w-full max-w-7xl relative">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500 rounded-full filter blur-3xl opacity-5 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-5 animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="relative bg-gradient-to-br from-gray-800/50 via-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl shadow-2xl overflow-hidden p-8 lg:p-12">
          {/* Header */}
          <div 
            className={`mb-12 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            style={{ animation: isVisible ? 'fadeInUp 0.8s ease-out' : 'none' }}
          >
            <div className="flex items-center gap-4 mb-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                My Projects
              </h1>
              <div className="flex-1 h-1 bg-gradient-to-r from-yellow-500 to-transparent rounded-full" />
            </div>
            <p className="text-gray-400 text-lg">
              Showcase of my recent work and personal projects
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                style={{ 
                  animation: isVisible ? `scaleIn 0.6s ease-out ${0.2 * index}s backwards` : 'none'
                }}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border-2 border-gray-700 hover:border-yellow-500 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20">
                  {/* Image Container */}
                  <div className="relative h-56 overflow-hidden bg-gray-700">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <p className="text-white text-sm leading-relaxed">{project.description}</p>
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-yellow-500 text-black text-xs font-bold rounded-full transform -translate-x-20 group-hover:translate-x-0 transition-transform duration-500">
                      {project.category}
                    </div>

                    {/* Shine effect */}
                    {hoveredProject === index && (
                      <div 
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"
                        style={{ animation: 'shine 1.5s ease-in-out' }}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 relative z-10 bg-gradient-to-br from-gray-800 to-gray-900">
                    {/* Title and Link */}
                    <div className="flex items-start justify-between mb-4">
                      <h2 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300 flex-1">
                        {project.title}
                      </h2>
                      <a 
                        href={project.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 text-black rounded-full flex items-center justify-center hover:from-yellow-400 hover:to-orange-400 transform hover:rotate-12 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-yellow-500/50"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M14 3h7v7h-2V5.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z" />
                        </svg>
                      </a>
                    </div>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-gray-700 text-yellow-400 text-xs font-semibold rounded-full border border-gray-600 group-hover:border-yellow-500 transition-colors duration-300"
                          style={{
                            animation: hoveredProject === index ? `float 2s ease-in-out ${techIndex * 0.2}s infinite` : 'none'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* View Project Button */}
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                      <a 
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full text-center py-2 bg-gradient-to-r from-gray-700 to-gray-800 text-white font-semibold rounded-lg hover:from-yellow-500 hover:to-orange-500 hover:text-black transition-all duration-300"
                      >
                        View on GitHub →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats/CTA Section */}
          <div 
            className={`mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            style={{ animation: isVisible ? 'fadeInUp 0.8s ease-out 0.8s backwards' : 'none' }}
          >
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-6 text-center hover:border-yellow-500 transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl font-bold text-yellow-400 mb-2">{projects.length}+</div>
              <div className="text-gray-400">Projects Completed</div>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-6 flex items-center justify-center hover:border-yellow-500 transition-all duration-300 transform hover:scale-105">
              <a 
                href="https://github.com/wahyualvyy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-yellow-400 font-bold hover:text-yellow-300 transition-colors duration-300 flex items-center gap-2"
              >
                <span>View All Projects</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14 3h7v7h-2V5.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;