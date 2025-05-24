import React from "react";

const House = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="flex items-center text-center space-x-8">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <img
            src="https://imgs.search.brave.com/oO1amrj4_q3X3dARQCLECEyPUqPg-gcZvrGUBCfI5ls/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vZGlhbmlz/YS5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjQvMDIvR2Ft/YmFyLTA4Li1QUC1X/QS1BZXN0aGV0aWMt/SGlqYWItZm90by1k/ZW5nYW4tbGFuZ2l0/LmpwZz9yZXNpemU9/NTAwLDUwMCZzc2w9/MQ"
            alt="-"
            className="w-64 h-64 rounded-full border-4 border-yellow-500 shadow-2xl transition-transform transform hover:scale-110"
          />
        </div>

        {/* Introduction Text */}
        <div>
          <h1 className="text-4xl font-bold text-yellow-500">
            Hello World, I&apos;m{" "}
            <span className="text-white">Wuwuk Slebew</span>
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
