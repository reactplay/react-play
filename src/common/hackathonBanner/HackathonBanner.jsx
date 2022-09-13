import React from "react";
import { AiFillGithub } from "react-icons/ai";
import HackerBannerImage from "./banner.png";
import "./HackathonBanner.css";

function HackathonBanner() {
  return (
    <div className="flex flex-col lg:flex-row justify-between w-full  max-w-[600px]  md:max-w-[980px] mt-16 m-auto text-white">
      <div className="w-[90%] lg:w-[60%] mx-auto text-center lg:text-left">
        <h1 className="inline-block text-4xl md:text-5xl font-bold">
          ReactPlay
        </h1>
        <span className="text-lg md:text-xl">Presents</span>
        <h1 className=" uppercase text-5xl md:text-6xl font-bold text-cyan-300">
          Hackathon
        </h1>
        <span className="text-2xl text-cyan-300">16 Sep - 8 Oct</span>
        <div className="my-2 md:my-4">
          <p>
            ReactPlay is an open-source platform to learn, create and share
            ReactJs projects with the developer community.
          </p>
          <p>
            Join us in ReactPlay hackathon and showcase your mind blowing ideas
            and amazing projects.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center lg:justify-start w-full">
          <button className="p-4 my-2 rounded-full bg-cyan-300 font-bold">
            Get started
          </button>
          <button className="p-4 my-2 mx-2 rounded-full border-2 border-cyan-300 text-white font-bold">
            <AiFillGithub className="inline-block w-6 h-6 mx-2 text-cyan-300" />
            GitHub
          </button>
        </div>
      </div>
      <div>
        <img src={HackerBannerImage} className="hackathon-banner-image " />
      </div>
    </div>
  );
}

export default HackathonBanner;
