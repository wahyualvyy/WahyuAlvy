import React, { useState, useEffect, useRef } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
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
    { name: "Programming", level: 90, icon: "💻" },
    { name: "Laboratory Management", level: 85, icon: "🔬" },
    { name: "Networking", level: 80, icon: "🌐" },
    { name: "Team Collaboration", level: 95, icon: "🤝" },
  ];

  const achievements = [
    { title: "Lab Assistant", desc: "UMSIDA", icon: "🎓" },
    { title: "Team Leadership", desc: "Project Manager", icon: "👥" },
    { title: "Problem Solver", desc: "Critical Thinking", icon: "🧩" },
  ];

  return (
    <div 
      ref={sectionRef}
      className="min-h-screen flex justify-center items-center p-4 lg:p-8 bg-gradient-to-br from-gray-900 via-black to-gray-900" 
      id="about"
    >
      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

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

        @keyframes fillBar {
          from {
            width: 0%;
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>

      <div className="w-full max-w-7xl relative">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-500 rounded-full filter blur-3xl opacity-5" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl opacity-5" />

        <div className="relative bg-gradient-to-br from-gray-800/50 via-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl shadow-2xl overflow-hidden">
          {/* Animated border gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 via-transparent to-yellow-500/20 opacity-0 hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative p-8 lg:p-12">
            {/* Header */}
            <div className={`mb-12 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
              <h1 className="text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-4">
                About Me
              </h1>
              <div className="w-32 h-1.5 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full" />
            </div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Column - Image and Info Cards */}
              <div className="space-y-8">
                {/* Profile Image with floating effect */}
                <div 
                  className={`relative group ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                  style={{ 
                    animation: isVisible ? 'slideInLeft 0.8s ease-out, float 3s ease-in-out infinite' : 'none',
                    animationDelay: '0s, 0.8s'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                  <img
                    src="/images/profile.png"
                    alt="Profile"
                    className="relative w-full max-w-xs mx-auto rounded-3xl border-4 border-yellow-500 shadow-2xl object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-transparent via-transparent to-white opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                </div>

                {/* Achievement Cards */}
                <div className="grid grid-cols-3 gap-4">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className={`bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-4 hover:border-yellow-500 transition-all duration-300 hover:transform hover:scale-105 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                      style={{ 
                        animation: isVisible ? `fadeInUp 0.8s ease-out ${0.2 + index * 0.1}s backwards` : 'none'
                      }}
                    >
                      <div className="text-3xl mb-2">{achievement.icon}</div>
                      <h3 className="text-white font-bold text-sm mb-1">{achievement.title}</h3>
                      <p className="text-gray-400 text-xs">{achievement.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column - Description and Skills */}
              <div className="space-y-8">
                {/* Description */}
                <div 
                  className={`${isVisible ? 'opacity-100' : 'opacity-0'}`}
                  style={{ animation: isVisible ? 'slideInRight 0.8s ease-out' : 'none' }}
                >
                  <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700 rounded-2xl p-6 hover:border-yellow-500/50 transition-all duration-300">
                    <h2 className="text-2xl font-bold text-yellow-400 mb-4 flex items-center gap-2">
                      <span>🎓</span> My Journey
                    </h2>
                    <p className="text-gray-300 leading-relaxed text-justify">
                      Saya adalah mahasiswa Informatika di Universitas Muhammadiyah Sidoarjo (UMSIDA) yang memiliki passion dalam teknologi dan pengembangan diri. Melalui perjalanan akademik, saya tidak hanya memperoleh pengetahuan teoritis, tetapi juga pengalaman praktis yang berharga.
                    </p>
                  </div>
                </div>

                {/* Experience highlight */}
                <div 
                  className={`${isVisible ? 'opacity-100' : 'opacity-0'}`}
                  style={{ animation: isVisible ? 'slideInRight 0.8s ease-out 0.2s backwards' : 'none' }}
                >
                  <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700 rounded-2xl p-6 hover:border-yellow-500/50 transition-all duration-300">
                    <h2 className="text-2xl font-bold text-yellow-400 mb-4 flex items-center gap-2">
                      <span>🔬</span> Lab Assistant Role
                    </h2>
                    <p className="text-gray-300 leading-relaxed text-justify">
                      Sebagai Asisten Laboratorium, saya mengembangkan berbagai keahlian teknis seperti pemrograman, pengelolaan laboratorium, dan jaringan komputer. Pengalaman ini juga mengasah soft skills seperti kepemimpinan, manajemen waktu, komunikasi, dan kemampuan problem-solving melalui proyek-proyek kolaboratif dan inovatif.
                    </p>
                  </div>
                </div>
                {/* CTA Button */}
                <div 
                  className={`flex gap-4 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                  style={{ animation: isVisible ? 'fadeInUp 0.8s ease-out 0.6s backwards' : 'none' }}
                >
                  <button className="flex-1 px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold rounded-full hover:from-yellow-400 hover:to-orange-400 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-yellow-500/50">
                    Download CV
                  </button>
                  <button className="flex-1 px-6 py-3 bg-transparent border-2 border-yellow-500 text-yellow-500 font-bold rounded-full hover:bg-yellow-500 hover:text-black transform hover:scale-105 transition-all duration-300">
                    Contact Me
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;