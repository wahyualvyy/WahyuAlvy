import React from "react";

const About = () => {
  return (
    <div className="mt-6 flex justify-center items-center p-4">
      <div className="w-full max-w-screen-xl border-1 border-solid border-white p-8 rounded-lg shadow-xl bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        <h1 className="text-white font-bold text-[35px] mb-6 border-b-4 border-yellow-500 pb-2">
          About Me
        </h1>

        {/* Wrapper for image and text */}
        <div className="flex items-center space-x-6">
          {/* Profile Image */}
          <img
            src="https://imgs.search.brave.com/oO1amrj4_q3X3dARQCLECEyPUqPg-gcZvrGUBCfI5ls/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vZGlhbmlz/YS5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjQvMDIvR2Ft/YmFyLTA4Li1QUC1X/QS1BZXN0aGV0aWMt/SGlqYWItZm90by1k/ZW5nYW4tbGFuZ2l0/LmpwZz9yZXNpemU9/NTAwLDUwMCZzc2w9/MQ"
            alt="Profile"
            className="w-48 h-48 object-cover rounded-full border-4 border-yellow-500 shadow-lg"
          />

          {/* Description Text */}
          <p className="text-white font-medium text-lg">
            Hi everyone! My name is Bagas Rakha Putra. I&apos;m a web developer from
            Bogor, West Java. I have 1 year of experience in back-end web
            development. I really enjoy what I do right now, in my opinion,
            creating programs is not just a job, but also an art that has
            aesthetic value. My job is to build your website to be functional and
            user-friendly yet still attractive. In addition, I provide a personal
            touch to your product and ensure that the website catches attention
            and is easy to use. My goal is to convey your message and identity in
            the most creative way. If you are interested in hiring me, please
            contact the listed contact.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
