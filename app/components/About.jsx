import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 lg:py-32">
      <div className="box-border mx-auto w-[1200px] max-2xl:w-[1200px] max-xl:w-[980px] max-lg:w-full max-md:w-full max-sm:w-full px-5 lg::px-8 grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-14">
        <div>
          <div className="flex justify-center items-center rounded-full text-primary bg-primary-100 border-[10px] border-primary-50 w-14 h-14">
            <FaUser style={{ color: "#7e4fdb" }} />
          </div>
          <h2 className="text-3xl font-semibold mt-4 md:mt-6">About me.</h2>
          <p className="text-gray-500 text-lg md:text-[20px] mt-3 md:mt-5">
            Software Developer Exgineer
            <br />
            Hashnode Blogger
          </p>
        </div>
        <div className="md:row-start-2 lg:row-start-auto md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          <div>
            <h3 className="text-lg md:text-[20px] font-medium">School</h3>
            <p className="text-gray-500 text-base mt-2">I completed 10th and 12th from APS Mhow with a PCM stream and PE as an optional subject. It was a pretty good experience as I was part of the debate team and an editorial board member, and I went to different levels.</p>
          </div>
          <div>
            <h3 className="text-lg md:text-[20px] font-medium">College</h3>
            <p className="text-gray-500 text-base mt-2">I completed my college from LNCT, Indore. Most of my time was spent at home due to COVID, and thankfully attendance wasn't an issue. Overall, I graduated in 2024 with a pretty good experience from the CSE branch.</p>
          </div>
          <div>
            <h3 className="text-lg md:text-[20px] font-medium">Projects</h3>
            <p className="text-gray-500 text-base mt-2">
              While learning different skills, I made quite a few projects—some silly, some ugly, and some were really exciting! <br />{" "}
              <Link target="" rel="noreferrer noopener" href="/pages/projects">
                <span className="flex items-center cursor-pointer">
                  {" "}
                  Do explore &nbsp; <FaArrowRight />
                </span>
              </Link>
            </p>
          </div>
          <div>
            <h3 className="text-lg md:text-[20px] font-medium">Experience</h3>
            <p className="text-gray-500 text-base mt-2">
              From different libraries to different frameworks, from different stacks to different projects, I have a lot to tell.{" "}
              <Link target="" rel="noreferrer noopener" href="/pages/experience">
                <span className="flex items-center cursor-pointer">
                  {" "}
                  Explore!. &nbsp; <FaArrowRight />
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
