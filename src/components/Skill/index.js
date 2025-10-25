import React, { useState, useEffect, useRef } from "react";

const Skill = () => {
  const [selectedCategory, setSelectedCategory] = useState("skill");
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);
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

  const skills = [
    { name: "HTML", icon: "https://img.icons8.com/color/48/000000/html-5.png", level: "Advanced"},
    { name: "CSS", icon: "https://img.icons8.com/color/48/000000/css3.png", level: "Intermediate"},
    { name: "PHP", icon: "https://img.icons8.com/color/48/000000/php.png", level: "Intermediate"},
    { name: "JavaScript", icon: "https://static.vecteezy.com/system/resources/previews/027/127/560/non_2x/javascript-logo-javascript-icon-transparent-free-png.png", level: "Beginner"},
    { name: "Python", icon: "https://images.ctfassets.net/em6l9zw4tzag/oVfiswjNH7DuCb7qGEBPK/b391db3a1d0d3290b96ce7f6aacb32b0/python.png", level: "Beginner"},
    { name: "C++", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/640px-ISO_C%2B%2B_Logo.svg.png", level: "Beginner"},
    { name: "Java", icon: "https://education.oracle.com/file/general/p-80-java.png", level: "Beginner"},
  ];

  const tools = [
    { name: "Laravel", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1969px-Laravel.svg.png", level: "Beginner"},
    { name: "CodeIgniter", icon: "https://www.exabytes.co.id/blog/wp-content/uploads/2023/08/codeigniter-adalah-540x641.png", level: "Intermediate"},
    { name: "Bootstrap", icon: "https://raw.githubusercontent.com/themedotid/bootstrap-icon/HEAD/docs/bootstrap-icon-css.png", level: "Intermediate"},
    { name: "MySQL", icon: "https://upload.wikimedia.org/wikipedia/id/a/a9/MySQL.png", level: "Intermediate"},
    { name: "Tailwind", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png", level: "Beginner"},
  ];

  const currentList = selectedCategory === "skill" ? skills : tools;

  const getLevelColor = (level) => {
    switch (level) {
      case "Advanced":
        return "text-green-400";
      case "Intermediate":
        return "text-blue-400";
      case "Beginner":
        return "text-yellow-400";
      default:
        return "text-gray-400";
    }
  };

  return (
    <div 
      ref={sectionRef}
      className="min-h-screen flex justify-center items-center p-4 lg:p-8 bg-gradient-to-br from-gray-900 via-black to-gray-900" 
      id="skill"
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
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes glow {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(234, 179, 8, 0.3);
          }
          50% { 
            box-shadow: 0 0 40px rgba(234, 179, 8, 0.6);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }
      `}</style>

      <div className="w-full max-w-7xl relative">
        {/* Background decorative elements */}
        <div className="absolute top-10 right-10 w-72 h-72 bg-yellow-500 rounded-full filter blur-3xl opacity-5 animate-pulse" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl opacity-5 animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="relative bg-gradient-to-br from-gray-800/50 via-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl shadow-2xl overflow-hidden p-8 lg:p-12">
          {/* Header */}
          <div 
            className={`mb-12 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            style={{ animation: isVisible ? 'fadeInUp 0.8s ease-out' : 'none' }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-4">
              Skills & Tools
            </h1>
            <div className="w-32 h-1.5 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full" />
            <p className="text-gray-400 mt-4 text-lg">
              Technologies and tools I work with
            </p>
          </div>

          {/* Tab Buttons */}
          <div 
            className={`flex gap-4 mb-12 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            style={{ animation: isVisible ? 'fadeInUp 0.8s ease-out 0.2s backwards' : 'none' }}
          >
            <button
              onClick={() => setSelectedCategory("skill")}
              className={`flex-1 lg:flex-none px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === "skill"
                  ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-black shadow-lg shadow-yellow-500/50"
                  : "bg-gray-800 text-yellow-500 border-2 border-yellow-500 hover:bg-gray-700"
              }`}
            >
              <span className="mr-2">💻</span>
              Programming Languages
            </button>
            <button
              onClick={() => setSelectedCategory("tools")}
              className={`flex-1 lg:flex-none px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === "tools"
                  ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-black shadow-lg shadow-yellow-500/50"
                  : "bg-gray-800 text-yellow-500 border-2 border-yellow-500 hover:bg-gray-700"
              }`}
            >
              <span className="mr-2">🛠️</span>
              Tools & Frameworks
            </button>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentList.map((item, index) => (
              <div
                key={item.name}
                className={`relative group ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                style={{ animation: isVisible ? `scaleIn 0.5s ease-out ${0.1 * index}s backwards` : 'none' }}
                onMouseEnter={() => setHoveredSkill(item.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                {/* Card */}
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700 rounded-2xl p-6 hover:border-yellow-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20 overflow-hidden">
                  {/* Shimmer effect on hover */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
                      animation: hoveredSkill === item.name ? 'shimmer 2s infinite' : 'none'
                    }}
                  />

                  {/* Content */}
                  <div className="relative flex items-center gap-4 mb-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-gray-700 rounded-xl flex items-center justify-center group-hover:bg-gray-600 transition-colors duration-300 overflow-hidden">
                      <img
                        src={item.icon}
                        alt={item.name}
                        className="w-12 h-12 object-contain transform group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white text-xl font-bold mb-1">{item.name}</h3>
                      <span className={`text-sm font-semibold ${getLevelColor(item.level)}`}>
                        {item.level}
                      </span>
                    </div>
                  </div>

                  {/* Hover indicator */}
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div 
            className={`mt-12 grid grid-cols-2 gap-6 item ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            style={{ animation: isVisible ? 'fadeInUp 0.8s ease-out 0.8s backwards' : 'none' }}
          >
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-6 text-center hover:border-yellow-500 transition-all duration-300">
              <div className="text-4xl font-bold text-yellow-400 mb-2">{skills.length}</div>
              <div className="text-gray-400 text-sm">Programming Languages</div>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-6 text-center hover:border-yellow-500 transition-all duration-300">
              <div className="text-4xl font-bold text-yellow-400 mb-2">{tools.length}</div>
              <div className="text-gray-400 text-sm">Tools & Frameworks</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;