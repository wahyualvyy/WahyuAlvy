import React from "react";

const Footer = () => {
  return (
    <div className="relative w-full">
      {/* Efek Api Bergelombang */}
      <div className="absolute bottom-full left-0 w-full h-6 overflow-hidden" style={{ transform: "scaleY(-1)" }}>
        <div className="relative w-full h-full flex space-x-0 animate-waving-fire">
          {[...Array(950)].map((_, i) => (
            <div
              key={i}
              className="w-0.5 h-full bg-gray-800 opacity-20 animate-flame"
              style={{ animationDelay: `${i * 0.005}s` }}
            ></div>
          ))}
        </div>
      </div>
      
      <footer className="bg-gray-900 text-white py-6 text-center relative z-10 mt-14">
        <div className="container mx-auto">
          <p className="text-sm">&copy; {new Date().getFullYear()} Mochammad Wahyu Alvy Kusuma. All rights reserved.</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes waving-fire {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
        }
        @keyframes flame {
          0%, 100% {
            transform: scaleY(1);
            opacity: 0.8;
          }
          50% {
            transform: scaleY(1.3);
            opacity: 1;
          }
        }
        .animate-waving-fire {
          animation: waving-fire 1.5s infinite linear;
        }
        .animate-flame {
          animation: flame 0.8s infinite alternate ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Footer;
