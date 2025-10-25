import React, { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skill" },
    { name: "Project", href: "#project" },
    { name: "Certificate", href: "#sertifikasi-section" },
  ];

  return (
    <>
      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes glow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(234, 179, 8, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(234, 179, 8, 0.6);
          }
        }

        @keyframes slideIn {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-black/90 backdrop-blur-lg shadow-lg shadow-yellow-500/10"
            : "bg-transparent"
        }`}
        style={{ animation: "fadeInDown 0.8s ease-out" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="group flex items-center space-x-3 transition-all duration-300"
            >
              <div className="relative">
                <div
                  className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"
                  style={{ animation: "glow 3s ease-in-out infinite" }}
                />
                <span className="relative text-xl lg:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 group-hover:from-yellow-300 group-hover:to-yellow-500 transition-all duration-300">
                  Mochammad Wahyu Alvy Kusuma
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative text-gray-300 font-semibold hover:text-yellow-400 transition-all duration-300 group"
                  style={{
                    animation: `fadeInDown 0.8s ease-out ${
                      0.2 + index * 0.1
                    }s backwards`,
                  }}
                >
                  <span className="relative z-10">{link.name}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>

            {/* Social Links */}
            <div
              className="hidden md:flex items-center space-x-4"
              style={{ animation: "fadeInDown 0.8s ease-out 0.8s backwards" }}
            >
              <Link
                href="https://linkedin.com/in/wahyu-alvy"
                target="_blank"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-yellow-500 flex items-center justify-center transform hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/50"
              >
                <img
                  src="https://i.pinimg.com/736x/b2/f8/28/b2f828513f21444829a619ce563d4d4e.jpg"
                  className="w-6 h-6 rounded-full"
                  alt="LinkedIn"
                />
              </Link>
              <Link
                href="https://github.com/wahyualvyy"
                target="_blank"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-yellow-500 flex items-center justify-center transform hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/50"
              >
                <img
                  src="https://imgs.search.brave.com/GduSKacK9ReAYwmDLPyB3b294OleC4df4OvTGmJcr3M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yYXcu/Z2l0aHVidXNlcmNv/bnRlbnQuY29tL2ph/eXdjamxvdmUvbG9n/by9tYXN0ZXIvaW1n/L2dpdGh1Yi5zdmc"
                  className="w-6 h-6 rounded-full"
                  alt="GitHub"
                />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-10 h-10 rounded-lg bg-gray-800 hover:bg-yellow-500 flex flex-col items-center justify-center space-y-1.5 transform hover:scale-110 transition-all duration-300"
            >
              <span
                className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <div className="bg-black/95 backdrop-blur-lg border-t border-yellow-500/20 px-6 py-4 space-y-4">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-gray-300 font-semibold hover:text-yellow-400 transition-all duration-300 py-2"
                style={{
                  animation: isMobileMenuOpen
                    ? `slideIn 0.3s ease-out ${index * 0.1}s backwards`
                    : "none",
                }}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center space-x-4 pt-4 border-t border-yellow-500/20">
              <Link
                href="https://linkedin.com/in/wahyu-alvy"
                target="_blank"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-yellow-500 flex items-center justify-center transform hover:scale-110 transition-all duration-300"
              >
                <img
                  src="https://i.pinimg.com/736x/b2/f8/28/b2f828513f21444829a619ce563d4d4e.jpg"
                  className="w-6 h-6 rounded-full"
                  alt="LinkedIn"
                />
              </Link>
              <Link
                href="https://github.com/wahyualvyy"
                target="_blank"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-yellow-500 flex items-center justify-center transform hover:scale-110 transition-all duration-300"
              >
                <img
                  src="https://imgs.search.brave.com/GduSKacK9ReAYwmDLPyB3b294OleC4df4OvTGmJcr3M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yYXcu/Z2l0aHVidXNlcmNv/bnRlbnQuY29tL2ph/eXdjamxvdmUvbG9n/by9tYXN0ZXIvaW1n/L2dpdGh1Yi5zdmc"
                  className="w-6 h-6 rounded-full"
                  alt="GitHub"
                />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;