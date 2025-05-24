import React, { useState } from "react";

const Skill = () => {
  // State to manage the selected category (Skill or Tools)
  const [selectedCategory, setSelectedCategory] = useState("skill");

  return (
    <div className="mt-6 flex justify-center items-center p-4" id = "skill">
      <div className="w-full max-w-screen-xl p-8 rounded-lg shadow-xl bg-black mb-8">
        <h1 className="text-white font-bold text-[35px] mb-6 border-b-4 border-yellow-500 pb-2 font-poppins tracking-wider">
          Skills
        </h1>

        {/* Tab buttons to toggle between Skill and Tools */}
        <div className="mb-4">
          <button
            onClick={() => setSelectedCategory("skill")}
            className={`text-xl font-semibold mr-8 px-6 py-2 rounded-lg transition-colors duration-300 
              ${
                selectedCategory === "skill"
                  ? "bg-yellow-500 text-black"
                  : "bg-transparent text-yellow-500 border-2 border-yellow-500"
              }`}
          >
            Programming Language
          </button>
          <button
            onClick={() => setSelectedCategory("tools")}
            className={`text-xl font-semibold px-6 py-2 rounded-lg transition-colors duration-300 
              ${
                selectedCategory === "tools"
                  ? "bg-yellow-500 text-black"
                  : "bg-transparent text-yellow-500 border-2 border-yellow-500"
              }`}
          >
            Tools
          </button>
        </div>

        {/* Tech Stack or Tools Content */}
        <div>
          {selectedCategory === "skill" && (
            <div className="grid grid-cols-4 gap-6">
              {/* Skill Icons */}
              <div className="group relative flex items-center justify-start w-64 h-24 rounded-lg border-4 border-yellow-500 p-4 hover:scale-110 transition-transform">
                <img
                  src="https://img.icons8.com/color/48/000000/html-5.png"
                  alt="HTML"
                  className="object-contain w-16 h-16 mr-4 transition-transform duration-300"
                />
                <div className="flex flex-col items-start">
                  <p className="text-white text-lg font-semibold font-poppins tracking-wide">
                    HTML
                  </p>
                  <p className="text-xs font-bold text-yellow-500 opacity-0 group-hover:opacity-100 group-hover:translate-y-[-10px] transition-all">
                    Advanced
                  </p>
                </div>
              </div>

              <div className="group relative flex items-center justify-start w-64 h-24 rounded-lg border-4 border-yellow-500 p-4 hover:scale-110 transition-transform">
                <img
                  src="https://img.icons8.com/color/48/000000/css3.png"
                  alt="CSS"
                  className="object-contain w-16 h-16 mr-4 transition-transform duration-300"
                />
                <div className="flex flex-col items-start">
                  <p className="text-white text-lg font-semibold font-poppins tracking-wide">
                    CSS
                  </p>
                  <p className="text-xs font-bold text-yellow-500 opacity-0 group-hover:opacity-100 group-hover:translate-y-[-10px] transition-all">
                    Intermediate
                  </p>
                </div>
              </div>

              <div className="group relative flex items-center justify-start w-64 h-24 rounded-lg border-4 border-yellow-500 p-4 hover:scale-110 transition-transform">
                <img
                  src="https://img.icons8.com/color/48/000000/php.png"
                  alt="PHP"
                  className="object-contain w-16 h-16 mr-4 transition-transform duration-300"
                />
                <div className="flex flex-col items-start">
                  <p className="text-white text-lg font-semibold font-poppins tracking-wide">
                    PHP
                  </p>
                  <p className="text-xs font-bold text-yellow-500 opacity-0 group-hover:opacity-100 group-hover:translate-y-[-10px] transition-all">
                    Intermediate
                  </p>
                </div>
              </div>

              <div className="group relative flex items-center justify-start w-64 h-24 rounded-lg border-4 border-yellow-500 p-4 hover:scale-110 transition-transform">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/027/127/560/non_2x/javascript-logo-javascript-icon-transparent-free-png.png"
                  alt="JavaScript"
                  className="object-contain w-16 h-16 mr-4 transition-transform duration-300"/>
                <div className="flex flex-col items-start">
                  <p className="text-white text-lg font-semibold font-poppins tracking-wide">
                    JavaScript
                  </p>
                  <p className="text-xs font-bold text-yellow-500 opacity-0 group-hover:opacity-100 group-hover:translate-y-[-10px] transition-all">
                    Beginner
                  </p>
                </div>
              </div>
              <div className="group relative flex items-center justify-start w-64 h-24 rounded-lg border-4 border-yellow-500 p-4 hover:scale-110 transition-transform">
                <img
                  src="https://images.ctfassets.net/em6l9zw4tzag/oVfiswjNH7DuCb7qGEBPK/b391db3a1d0d3290b96ce7f6aacb32b0/python.png"
                  alt="JavaScript"
                  className="object-contain w-16 h-16 mr-4 transition-transform duration-300"
                />
                <div className="flex flex-col items-start">
                  <p className="text-white text-lg font-semibold font-poppins tracking-wide">
                    Python
                  </p>
                  <p className="text-xs font-bold text-yellow-500 opacity-0 group-hover:opacity-100 group-hover:translate-y-[-10px] transition-all">
                    Beginner
                  </p>
                </div>
              </div>
              <div className="group relative flex items-center justify-start w-64 h-24 rounded-lg border-4 border-yellow-500 p-4 hover:scale-110 transition-transform">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/640px-ISO_C%2B%2B_Logo.svg.png"
                  alt="JavaScript"
                  className="object-contain w-16 h-16 mr-4 transition-transform duration-300"
                />
                <div className="flex flex-col items-start">
                  <p className="text-white text-lg font-semibold font-poppins tracking-wide">
                    C++
                  </p>
                  <p className="text-xs font-bold text-yellow-500 opacity-0 group-hover:opacity-100 group-hover:translate-y-[-10px] transition-all">
                    Beginner
                  </p>
                </div>
              </div>
              <div className="group relative flex items-center justify-start w-64 h-24 rounded-lg border-4 border-yellow-500 p-4 hover:scale-110 transition-transform">
                <img
                  src="https://education.oracle.com/file/general/p-80-java.png"
                  alt="JavaScript"
                  className="object-contain w-16 h-16 mr-4 transition-transform duration-300"
                />
                <div className="flex flex-col items-start">
                  <p className="text-white text-lg font-semibold font-poppins tracking-wide">
                    Java
                  </p>
                  <p className="text-xs font-bold text-yellow-500 opacity-0 group-hover:opacity-100 group-hover:translate-y-[-10px] transition-all">
                    Beginner
                  </p>
                </div>
              </div>
            </div>
          )}

          {selectedCategory === "tools" && (
            <div className="grid grid-cols-4 gap-6">
              {/* Tools Icons */}
              <div className="group relative flex items-center justify-start w-64 h-24 rounded-lg border-4 border-yellow-500 p-4 hover:scale-110 transition-transform">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1969px-Laravel.svg.png"
                  alt="Laravel"
                  className="object-contain w-16 h-16 mr-4 transition-transform duration-300"
                />
                <div className="flex flex-col items-start">
                  <p className="text-white text-lg font-semibold font-poppins tracking-wide">
                    Laravel
                  </p>
                  <p className="text-xs font-bold text-yellow-500 opacity-0 group-hover:opacity-100 group-hover:translate-y-[-10px] transition-all">
                    Beginner
                  </p>
                </div>
              </div>

              <div className="group relative flex items-center justify-start w-64 h-24 rounded-lg border-4 border-yellow-500 p-4 hover:scale-110 transition-transform">
                <img
                  src="https://www.exabytes.co.id/blog/wp-content/uploads/2023/08/codeigniter-adalah-540x641.png"
                  alt="Codeigniter"
                  className="object-contain w-16 h-16 mr-4 transition-transform duration-300"
                />
                <div className="flex flex-col items-start">
                  <p className="text-white text-lg font-semibold font-poppins tracking-wide">
                    Codeigniter
                  </p>
                  <p className="text-xs font-bold text-yellow-500 opacity-0 group-hover:opacity-100 group-hover:translate-y-[-10px] transition-all">
                    Intermediate
                  </p>
                </div>
              </div>

              <div className="group relative flex items-center justify-start w-64 h-24 rounded-lg border-4 border-yellow-500 p-4 hover:scale-110 transition-transform">
                <img
                  src="https://raw.githubusercontent.com/themedotid/bootstrap-icon/HEAD/docs/bootstrap-icon-css.png"
                  alt="VueJS"
                  className="object-contain w-16 h-16 mr-4 transition-transform duration-300"
                />
                <div className="flex flex-col items-start">
                  <p className="text-white text-lg font-semibold font-poppins tracking-wide">
                    Boostrap
                  </p>
                  <p className="text-xs font-bold text-yellow-500 opacity-0 group-hover:opacity-100 group-hover:translate-y-[-10px] transition-all">
                    Intermediate
                  </p>
                </div>
              </div>

              <div className="group relative flex items-center justify-start w-64 h-24 rounded-lg border-4 border-yellow-500 p-4 hover:scale-110 transition-transform">
                <img
                  src="https://upload.wikimedia.org/wikipedia/id/a/a9/MySQL.png"
                  alt="NodeJS"
                  className="object-contain w-16 h-16 mr-4 transition-transform duration-300"
                />
                <div className="flex flex-col items-start">
                  <p className="text-white text-lg font-semibold font-poppins tracking-wide">
                    MySQL
                  </p>
                  <p className="text-xs font-bold text-yellow-500 opacity-0 group-hover:opacity-100 group-hover:translate-y-[-10px] transition-all">
                    Intermediate
                  </p>
                </div>
              </div>
              <div className="group relative flex items-center justify-start w-64 h-24 rounded-lg border-4 border-yellow-500 p-4 hover:scale-110 transition-transform">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png"
                  alt="NodeJS"
                  className="object-contain w-16 h-16 mr-4 transition-transform duration-300"
                />
                <div className="flex flex-col items-start">
                  <p className="text-white text-lg font-semibold font-poppins tracking-wide">
                    Tailwind
                  </p>
                  <p className="text-xs font-bold text-yellow-500 opacity-0 group-hover:opacity-100 group-hover:translate-y-[-10px] transition-all">
                    Beginner
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Skill;
