import React, { useState, useEffect, useRef } from "react";

const Sertifikasi = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCert, setHoveredCert] = useState(null);
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

  const certificates = [
    { 
      title: "Belajar Dasar Pemrograman Web", 
      url: "https://www.dicoding.com/certificates/ERZR1Y0NOZYV", 
      image: "https://www.dropbox.com/scl/fi/0kbdr2uc85m6nfafq4bd7/sertifikat_course_123_2898745_010624122633_page-0001.jpg?rlkey=o27yq4hr0eqz0d4ksn091p898&st=swxf9rmz&raw=1",
      issuer: "Dicoding Indonesia",
      date: "June 2024",
      skills: ["HTML", "CSS", "Web Fundamentals"]
    },
    { 
      title: "Belajar Membuat Front-End Web untuk Pemula", 
      url: "https://www.dicoding.com/certificates/MEPJNQ26JX3V", 
      image: "https://www.dropbox.com/scl/fi/yyesjgpdupe1x7ywsa14z/sertifikat_course_315_2898745_100624145520_page-0001.jpg?rlkey=w4zv92ktuu88u5t7nnmt46irp&st=l94vpyj2&raw=1",
      issuer: "Dicoding Indonesia",
      date: "June 2024",
      skills: ["JavaScript", "DOM", "Web API"]
    },
    { 
      title: "Belajar Dasar Pemrograman JavaScript", 
      url: "https://www.dicoding.com/certificates/NVP7Q4L7VZR0", 
      image: "https://www.dropbox.com/scl/fi/s4sjhund3o7n29xv75qse/sertifikat_course_256_2898745_050624154537_page-0001.jpg?rlkey=uw7o7gy47c1k1uxzq2o0sf0bx&st=c01xln3p&raw=1",
      issuer: "Dicoding Indonesia",
      date: "June 2024",
      skills: ["JavaScript", "ES6", "Programming"]
    }
  ];

  return (
    <div 
      ref={sectionRef}
      id="sertifikasi-section"
      className="min-h-screen flex justify-center items-center p-4 lg:p-8 bg-gradient-to-br from-gray-900 via-black to-gray-900"
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

        @keyframes flipIn {
          from {
            opacity: 0;
            transform: perspective(1000px) rotateY(-15deg) scale(0.95);
          }
          to {
            opacity: 1;
            transform: perspective(1000px) rotateY(0deg) scale(1);
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

        @keyframes ribbon {
          0%, 100% {
            transform: translateY(0px) rotate(45deg);
          }
          50% {
            transform: translateY(-5px) rotate(45deg);
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(234, 179, 8, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(234, 179, 8, 0.6);
          }
        }
      `}</style>

      <div className="w-full max-w-7xl relative">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500 rounded-full filter blur-3xl opacity-5 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-5 animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="relative bg-gradient-to-br from-gray-800/50 via-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl shadow-2xl overflow-hidden p-8 lg:p-12">
          {/* Header */}
          <div 
            className={`mb-12 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            style={{ animation: isVisible ? 'fadeInUp 0.8s ease-out' : 'none' }}
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="text-5xl">🏆</span>
              <h1 className="text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                Certifications
              </h1>
              <div className="flex-1 h-1 bg-gradient-to-r from-yellow-500 to-transparent rounded-full" />
            </div>
            <p className="text-gray-400 text-lg ml-16">
              Professional certifications and achievements
            </p>
          </div>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((certificate, index) => (
              <div
                key={index}
                className={`group ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                style={{ 
                  animation: isVisible ? `flipIn 0.8s ease-out ${0.2 * index}s backwards` : 'none'
                }}
                onMouseEnter={() => setHoveredCert(index)}
                onMouseLeave={() => setHoveredCert(null)}
              >
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border-2 border-gray-700 hover:border-yellow-500 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20">
                  
                  {/* Verified Badge Ribbon */}
                  <div className="absolute top-4 right-4 z-20">
                    <div 
                      className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-500"
                      style={{ animation: hoveredCert === index ? 'pulse-glow 2s ease-in-out infinite' : 'none' }}
                    >
                      <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>

                  {/* Certificate Image */}
                  <div className="relative h-64 overflow-hidden bg-gray-700">
                    <img 
                      src={certificate.image} 
                      alt={certificate.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                    
                    {/* Shimmer effect on hover */}
                    {hoveredCert === index && (
                      <div 
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        style={{ animation: 'shimmer 2s ease-in-out' }}
                      />
                    )}

                    {/* Date badge */}
                    <div className="absolute bottom-4 left-4 px-3 py-1 bg-black/70 backdrop-blur-sm text-yellow-400 text-xs font-bold rounded-full border border-yellow-500/50">
                      📅 {certificate.date}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Title */}
                    <h2 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-yellow-400 transition-colors duration-300">
                      {certificate.title}
                    </h2>

                    {/* Issuer */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-2xl">🎓</span>
                      <p className="text-gray-400 text-sm font-medium">{certificate.issuer}</p>
                    </div>

                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {certificate.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-2 py-1 bg-gray-700 text-yellow-400 text-xs font-semibold rounded-md border border-gray-600 group-hover:border-yellow-500 transition-colors duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <a 
                        href={certificate.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold rounded-lg hover:from-yellow-400 hover:to-orange-400 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-yellow-500/50"
                      >
                        <span>View Certificate</span>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </a>
                      <button 
                        className="w-10 h-10 bg-gray-700 text-yellow-400 rounded-lg hover:bg-yellow-500 hover:text-black transform hover:scale-110 transition-all duration-300 flex items-center justify-center"
                        title="Share"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Decorative corner accent */}
                  <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-yellow-500/20 to-transparent rounded-br-full" />
                  <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-yellow-500/20 to-transparent rounded-tl-full" />
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div 
            className={`mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            style={{ animation: isVisible ? 'fadeInUp 0.8s ease-out 0.8s backwards' : 'none' }}
          >
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-6 text-center hover:border-yellow-500 transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl mb-2">🎓</div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">{certificates.length}</div>
              <div className="text-gray-400 text-sm">Certifications</div>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-6 text-center hover:border-yellow-500 transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl mb-2">🏢</div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">1</div>
              <div className="text-gray-400 text-sm">Platform</div>
            </div>
          </div>

          {/* CTA Section */}
          <div 
            className={`mt-8 text-center ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            style={{ animation: isVisible ? 'fadeInUp 0.8s ease-out 1s backwards' : 'none' }}
          >
            <p className="text-gray-400 mb-4">Want to verify these certificates?</p>
            <a 
              href="https://www.dicoding.com/users/wahyualvy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold rounded-full hover:from-yellow-400 hover:to-orange-400 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-yellow-500/50"
            >
              <span>View My Dicoding Profile</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sertifikasi;