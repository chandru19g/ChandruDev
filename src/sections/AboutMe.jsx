import React from "react";

import profileImage from "../assets/profile.jpeg";

const AboutMe = () => {
  return (
    <section id="about">
      <div className="max-w-screen-xl mx-auto flex flex-row items-center justify-center px-4 py-4 text-whiteColor md:py-24">
        <div className="relative inline-block">
          <img
            src={profileImage}
            alt="Profile Picture"
            className="relative z-10"
            height={450}
            width={400}
          />
          <div className="absolute top-[-10px] left-[-10px] w-full h-full border-[16px] border-secondaryColor z-0"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
