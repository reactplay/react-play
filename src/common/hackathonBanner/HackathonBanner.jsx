import React, { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";
import { MdManageSearch } from "react-icons/md";
import { FiStar } from "react-icons/fi";
import HackerBannerImage from "./banner.png";
import useFetch from "common/hooks/useFetch";
import "./hackathonBanner.css";

function HackathonBanner() {
  const { data } = useFetch(
    "https://api.github.com/repos/reactplay/activities"
  );
  console.log(data);
  return (
    <div className="flex flex-col lg:flex-row justify-between w-[98%]  max-w-[600px]  md:max-w-[992px] lg:max-w-[1200px] mt-16 m-auto text-white">
      <div className="w-[90%] lg:w-[60%] mx-auto text-center lg:text-left">
        <h1 className="inline-block text-4xl md:text-5xl lg:text-7xl font-bold">
          ReactPlay
        </h1>
        <span className="text-lg md:text-xl lg:text-2xl">Presents</span>
        <h1 className=" uppercase text-5xl md:text-6xl lg:text-8xl font-bold text-cyan-300">
          Hackathon
        </h1>
        <span className="text-xl md:text-2xl lg:text-3xl text-cyan-300">
          16 Sep - 8 Oct
        </span>
        <div className="my-2 md:my-4 md:text-xl">
          <p>
            ReactPlay is an open-source platform to learn, create and share
            ReactJs projects with the developer community.
          </p>
          <p>
            Join us in ReactPlay hackathon and showcase your mind blowing ideas
            and amazing projects.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center lg:justify-start w-full ">
          <button className="p-4 lg:w-48 my-2 rounded-full bg-cyan-300 font-bold  cursor-pointer">
            Get started
          </button>
          <a
            href="https://github.com/reactplay/activities"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 my-2 mx-2 rounded-full border-2 border-cyan-300 text-white font-bold cursor-pointer hover:bg-slate-300 hover:border-slate-300 group group hover:text-black "
          >
            <AiFillGithub className="inline-block w-6 h-6 mx-2 text-cyan-300 group-hover:text-black" />
            GitHub
            <div className="mx-2 inline-block">
              <FiStar className="inline-block  w-8 text-xl" />
              <div className="inline-block text-sm w-8 leading-9">
                {data.stargazers_count}
              </div>
            </div>
          </a>
          <Link
            to="/plays"
            className="p-4 lg:w-48 my-2 flex justify-center items-center rounded-full bg-cyan-300 font-bold text-black  cursor-pointer"
          >
            <MdManageSearch className="inline-block text-xl" />
            <span className="inline-block">Browse</span>
          </Link>
        </div>
      </div>
      <div>
        <img src={HackerBannerImage} className="hackathon-banner-image" />
      </div>
    </div>
  );
}

export default HackathonBanner;
