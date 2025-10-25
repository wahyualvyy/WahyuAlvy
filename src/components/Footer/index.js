import React, { useState } from "react";

const Footer = () => {
  const [hoveredSocial, setHoveredSocial] = useState(null);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle, loading, success, error

  const socialLinks = [
    { name: "GitHub", icon: "💻", url: "https://github.com/wahyualvyy", color: "hover:text-purple-400" },
    { name: "LinkedIn", icon: "💼", url: "#", color: "hover:text-blue-400" },
    { name: "Instagram", icon: "📷", url: "#", color: "hover:text-pink-400" },
    { name: "Twitter", icon: "🐦", url: "#", color: "hover:text-sky-400" },
    { name: "Email", icon: "✉️", url: "mailto:wahyu@example.com", color: "hover:text-red-400" },
  ];

  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skill" },
    { name: "Projects", href: "#project" },
    { name: "Certificates", href: "#sertifikasi-section" },
  ];

  const handleSubscribe = () => {
    if (!email || !email.includes("@")) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
      return;
    }

    setStatus("loading");
    
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubscribe();
    }
  };

  return (
    <div className="relative w-full">
      <style jsx>{`
        @keyframes wave {
          0%, 100% { transform: translateX(0) translateY(0); }
          25% { transform: translateX(-5px) translateY(-3px); }
          50% { transform: translateX(0) translateY(-5px); }
          75% { transform: translateX(5px) translateY(-3px); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes glow {
          0%, 100% { box-shadow: 0 0 5px rgba(234, 179, 8, 0.5); }
          50% { box-shadow: 0 0 20px rgba(234, 179, 8, 0.8); }
        }

        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .wave-border {
          position: absolute;
          top: -1px;
          left: 0;
          width: 100%;
          overflow: hidden;
          line-height: 0;
        }

        .wave-border svg {
          position: relative;
          display: block;
          width: calc(100% + 1.3px);
          height: 80px;
        }

        .wave-border .shape-fill {
          fill: rgb(17, 24, 39);
        }
      `}</style>

      {/* Animated Wave Border */}
      <div className="wave-border">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>

      {/* Main Footer */}
      <footer className="bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white pt-20 pb-8 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-500 rounded-full filter blur-3xl opacity-5 animate-pulse" />
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl opacity-5 animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* About Column */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center font-bold text-black text-xl">
                  W
                </div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                  Wahyu Alvy
                </h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Passionate web developer and informatika student at UMSIDA, dedicated to creating innovative digital solutions.
              </p>
              <div className="flex items-center gap-2 text-yellow-400">
                <span className="text-2xl">📍</span>
                <span className="text-sm text-gray-400">Sidoarjo, Indonesia</span>
              </div>
            </div>

            {/* Quick Links Column */}
            <div>
              <h4 className="text-lg font-bold mb-4 text-yellow-400">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 text-sm flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-4 h-0.5 bg-yellow-400 transition-all duration-300"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Column */}
            <div>
              <h4 className="text-lg font-bold mb-4 text-yellow-400">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <span className="text-yellow-400">▹</span>
                  <span>Web Development</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow-400">▹</span>
                  <span>UI/UX Design</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow-400">▹</span>
                  <span>Database Design</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow-400">▹</span>
                  <span>System Analysis</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow-400">▹</span>
                  <span>Technical Support</span>
                </li>
              </ul>
            </div>

            {/* Newsletter Column - IMPROVED */}
            <div>
              <h4 className="text-lg font-bold mb-4 text-yellow-400">Stay Connected</h4>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                Subscribe to get updates about my latest projects and articles.
              </p>
              <div className="space-y-3">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Enter your email"
                    disabled={status === "loading"}
                    className="relative w-full px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-yellow-500 focus:bg-gray-800/80 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>
                
                <button
                  onClick={handleSubscribe}
                  disabled={status === "loading" || status === "success"}
                  className="relative w-full px-4 py-2.5 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-semibold rounded-lg hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-[1.02] active:scale-95 text-sm shadow-lg hover:shadow-yellow-500/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    {status === "idle" && "Subscribe Now"}
                    {status === "loading" && (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Subscribing...
                      </>
                    )}
                    {status === "success" && (
                      <>
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        Subscribed!
                      </>
                    )}
                    {status === "error" && "Invalid Email"}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>

                {/* Status Messages */}
                {status === "success" && (
                  <div className="flex items-center gap-2 text-green-400 text-xs animate-fadeIn">
                    <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Thank you for subscribing!</span>
                  </div>
                )}
                
                {status === "error" && (
                  <div className="flex items-center gap-2 text-red-400 text-xs animate-fadeIn">
                    <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span>Please enter a valid email.</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 my-8"></div>

          {/* Social Links Section */}
          <div className="mb-8">
            <h4 className="text-center text-lg font-bold mb-6 text-yellow-400">Connect With Me</h4>
            <div className="flex justify-center gap-4 flex-wrap">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setHoveredSocial(index)}
                  onMouseLeave={() => setHoveredSocial(null)}
                  className={`group relative w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center border-2 border-gray-700 hover:border-yellow-500 transition-all duration-300 transform hover:scale-110 ${social.color}`}
                  style={{ 
                    animation: hoveredSocial === index ? 'glow 1s ease-in-out infinite' : 'none'
                  }}
                >
                  <span className="text-2xl transform group-hover:scale-125 transition-transform duration-300">
                    {social.icon}
                  </span>
                  
                  {/* Tooltip */}
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gray-800 text-white text-xs font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none border border-gray-700">
                    {social.name}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 my-8"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <div className="text-gray-400 text-center md:text-left">
              <p>
                &copy; {new Date().getFullYear()} <span className="text-yellow-400 font-semibold">Mochammad Wahyu Alvy Kusuma</span>. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center gap-6 text-gray-400">
              <a href="#" className="hover:text-yellow-400 transition-colors duration-300">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-yellow-400 transition-colors duration-300">Terms of Service</a>
            </div>
          </div>

          {/* Made with love */}
          <div className="text-center mt-6 text-gray-500 text-xs">
            <p className="flex items-center justify-center gap-2">
              Made with 
              <span className="text-red-500 animate-pulse text-base">❤️</span> 
              by Wahyu Alvy
            </p>
          </div>

          {/* Back to Top Button */}
          <div className="flex justify-center mt-8">
            <a
              href="#top"
              className="group w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-yellow-500/50"
              style={{ animation: 'float 3s ease-in-out infinite' }}
            >
              <svg className="w-6 h-6 text-black transform group-hover:-translate-y-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;