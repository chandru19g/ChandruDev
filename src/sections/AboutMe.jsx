import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import profileImage from "../assets/profile.jpeg";
import Divider from "../components/UI/Divider";
import { SectionHeader } from "../components/UI/SectionHeader";

const AboutMe = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="about" data-aos="zoom-in-up">
      <div className="max-w-screen-xl mx-auto flex md:flex-row flex-col-reverse items-center justify-center px-4 py-8 text-whiteColor md:py-24">
        <div className="relative inline-block">
          <img
            src={profileImage}
            alt="Profile Picture"
            className="relative z-10"
          />
          <div className="absolute top-[-10px] left-[-10px] w-full h-full border-[16px] border-secondaryColor z-0"></div>
        </div>
        <div className="flex flex-col md:justify-start md:items-start justify-center items-center self-start md:w-max md:ml-16 md:pb-0 pb-8">
          <div className="flex flex-col md:w-max">
            <SectionHeader title={"About Me"} />
            <div className="text-secondaryColor text-end text-sm">
              --Who Am I?
            </div>
          </div>
          <div className="pt-6 text-greyColor text-xl font-medium">
            I specialize in building high-quality mobile and web applications,
            with expertise in Android and iOS development using Flutter and
            full-stack web development with the MERN stack (MongoDB, Express,
            React, and Node.js). My focus is on creating seamless, responsive,
            and user-friendly solutions that not only meet your business
            requirements but also provide an engaging experience for users. From
            crafting intuitive user interfaces to implementing robust back-end
            systems, I am dedicated to delivering reliable, scalable software
            that brings your vision to life efficiently and effectively.
          </div>
          <div className="text-secondaryColor border-2 border-secondaryColor p-2 text-xl font-medium mt-10 cursor-pointer">
            Download Resume
          </div>
        </div>
      </div>
      <Divider className={`border-secondaryColor mx-0`} />
    </section>
  );
};

export default AboutMe;
