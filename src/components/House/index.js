import React, { useState, useEffect } from "react";

const House = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const titles = [
    "Web Developer",
    "Passionate Software Developer",
    "Web & Backend Enthusiast",
  ];
  const [currentTitle, setCurrentTitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [titles.length]);

  const socialLinks = [
    {
      name: "GitHub",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
      url: "https://github.com/wahyualvyy",
      color: "hover:bg-purple-500",
    },
    {
      name: "LinkedIn",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      url: "https://linkedin.com/in/wahyu-alvy",
      color: "hover:bg-blue-500",
    },
    {
      name: "Instagram",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      url: "https://www.instagram.com/ksmalvy_/?next=%2F",
      color: "hover:bg-pink-500",
    },
    {
      name: "Facebook",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.918c-1.505 0-1.796.716-1.796 1.765v2.314h3.59l-.467 3.622h-3.123V24h6.127C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z" />
        </svg>
      ),
      url: "https://web.facebook.com/afi.afi.777701/",
      color: "hover:bg-blue-600",
    },
    {
      name: "Email",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      url: "mailto:afikusuma1234@gmail.com",
      color: "hover:bg-red-500",
    },
  ];

  return (
    <div
      className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Animated background gradient orbs */}
      <div
        className="absolute w-96 h-96 bg-yellow-500 rounded-full filter blur-3xl opacity-10 animate-pulse"
        style={{
          top: "20%",
          left: "10%",
        }}
      />
      <div
        className="absolute w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-10 animate-pulse"
        style={{
          bottom: "20%",
          right: "10%",
          animationDelay: "1s",
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-500 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${
                5 + Math.random() * 10
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-10px);
          }
          75% {
            transform: translateY(-30px) translateX(5px);
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

        @keyframes wave {
          0%,
          100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(20deg);
          }
          75% {
            transform: rotate(-20deg);
          }
        }

        @keyframes glow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(234, 179, 8, 0.5),
              0 0 40px rgba(234, 179, 8, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(234, 179, 8, 0.8),
              0 0 60px rgba(234, 179, 8, 0.5);
          }
        }
      `}</style>

      <div
        className={`relative z-10 flex flex-col lg:flex-row items-center gap-12 px-8 transition-all duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Profile Image with 3D effect */}
        <div
          className="relative group"
          style={{
            transform: `perspective(1000px) rotateY(${
              (mousePosition.x - 500) / 50
            }deg) rotateX(${-(mousePosition.y - 300) / 50}deg)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <div
            className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"
            style={{ animation: "glow 3s ease-in-out infinite" }}
          />
          <img
            src="/images/profile.png"
            alt="Profile"
            className="relative w-72 h-72 lg:w-80 lg:h-80 rounded-full border-4 border-yellow-500 shadow-2xl object-cover transform transition-all duration-500 group-hover:scale-105 group-hover:border-yellow-400"
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-transparent to-white opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
        </div>

        {/* Text Content */}
        <div className="text-center lg:text-left max-w-2xl space-y-6">
          <div
            className="space-y-2"
            style={{ animation: "fadeInUp 0.8s ease-out" }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                I&apos;m
              </span>{" "}
              <span className="text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-white hover:to-gray-300 transition-all duration-300">
                Mochammad Wahyu Alvy Kusuma
              </span>
            </h1>
          </div>

          <div
            className="h-12 flex items-center justify-center lg:justify-start"
            style={{ animation: "fadeInUp 0.8s ease-out 0.2s backwards" }}
          >
            <p className="text-2xl lg:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500">
              {titles[currentTitle]}
            </p>
          </div>

          <p
            className="text-xl lg:text-2xl text-gray-300"
            style={{ animation: "fadeInUp 0.8s ease-out 0.4s backwards" }}
          >
            Welcome to my personal website{" "}
            <span
              className="inline-block"
              style={{ animation: "wave 1.5s ease-in-out infinite" }}
            >
              👋
            </span>
          </p>

          <div
            className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4"
            style={{ animation: "fadeInUp 0.8s ease-out 0.6s backwards" }}
          >
            <button className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold rounded-full hover:from-yellow-400 hover:to-yellow-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-yellow-500/50">
              View My Work
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-yellow-500 text-yellow-500 font-semibold rounded-full hover:bg-yellow-500 hover:text-black transform hover:scale-105 transition-all duration-300">
              Contact Me
            </button>
          </div>

          {/* Social Links with SVG Icons */}
          <div
            className="flex gap-6 justify-center lg:justify-start pt-4"
            style={{ animation: "fadeInUp 0.8s ease-out 0.8s backwards" }}
          >
            {socialLinks.map((social, index) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 rounded-full bg-gray-800 ${social.color} flex items-center justify-center cursor-pointer transform hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/50 group relative`}
                style={{
                  animation: `fadeInUp 0.8s ease-out ${
                    0.8 + index * 0.1
                  }s backwards`,
                }}
              >
                <div className="text-white transition-colors duration-300">
                  {social.icon}
                </div>

                {/* Tooltip */}
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gray-800 text-white text-xs font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none border border-gray-700 z-10">
                  {social.name}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-yellow-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-yellow-500 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default House;
