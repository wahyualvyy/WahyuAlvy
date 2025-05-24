import React from "react";

const House = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="flex items-center text-center space-x-8">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <img
            src="https://i.ibb.co/HLGBx1vn/fotoprofile.png"
            alt="none"
            className="w-64 h-84 rounded-full border-4 border-yellow-500 shadow-2xl transition-transform transform hover:scale-110"
          />
        </div>

        {/* Introduction Text */}
        <div>
          <h1 className="text-4xl font-bold text-yellow-500">
            I&apos;m{" "}
            <span className="text-white">Mochammad Wahyu Alvy Kusuma</span>
          </h1>
          <p className="text-2xl mt-2 text-white">
            <span className="text-animate">Web Developer</span>
          </p>
          <p className="mt-4 text-2xl">
            Welcome to My personal website.{" "}
            <span className="wave-hand">👋</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default House;
