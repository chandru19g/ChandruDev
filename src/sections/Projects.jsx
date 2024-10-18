import React, { useState } from "react";
import Divider from "../components/UI/Divider";
import { SectionHeader } from "../components/UI/SectionHeader";
import { projectsData } from "../data/ProjectsData";

export const Projects = () => {
  const platforms = ["All Projects", "Android App", "iOS App", "Websites"];

  const [selectedPlatforms, setSelectedPlatforms] = useState("All Projects");

  return (
    <section id="projects">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center px-4 py-4 text-whiteColor md:py-24">
        <SectionHeader title={"Projects"} />
        <ul className="flex flex-row gap-4 py-8">
          {platforms.map((platform, index) => (
            <li key={index}>
              <div
                onClick={(e) => {
                  setSelectedPlatforms(platform);
                  e.preventDefault();
                }}
                className={`px-4 py-2 border-[1px] border-secondaryColor text-lg font-medium hover:cursor-pointer rounded-lg ${
                  selectedPlatforms == platform
                    ? "bg-secondaryColor text-primaryColor"
                    : "text-whiteColor"
                }`}
              >
                {platform}
              </div>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap justify-around gap-8 content-around">
          {projectsData.map((project, index) => (
            <div className="flex flex-col">
              {/* <img */}
              {/* /* className="object-cover h-60 w-full" src={`${project.image}`}
              alt={project.name}
              /> */}
              <div
                key={index}
                className="p-10 w-[565px] bg-whiteColor rounded-b-xl"
              >
                {project.name}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Divider className={`border-secondaryColor mx-0`} />
    </section>
  );
};
