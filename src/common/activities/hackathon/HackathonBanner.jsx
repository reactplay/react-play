import React from "react";
import { BsGithub } from "react-icons/bs";
import { FiStar } from "react-icons/fi";
import { IoIosRocket } from "react-icons/io";
import HackerBannerImage from "./img-hero-coders.png";
import HRPLogo from "./Logo.png";
import useFetch from "common/hooks/useFetch";
import "./hackathonBanner.css";

function HackathonBanner() {
  const { data } = useFetch(
    "https://api.github.com/repos/reactplay/react-play"
  );
  return (
    <div className="flex flex-col lg:flex-row justify-between w-[98%]  max-w-[600px]  md:max-w-[992px] lg:max-w-[1200px] mt-16 m-auto text-white">
      <div className="w-[100%] lg:w-[60%] text-center lg:text-left">
        <span className="text-lg md:text-xl lg:text-2xl">ReactPlay Presents</span>
        <h1 className=" uppercase text-5xl md:text-6xl lg:text-8xl font-bold text-cyan-300 text-center lg:text-left">
          <span className="sr-only">HACK-R-PLAY</span>
          <img src={HRPLogo} className="w-10/12 md:w-64 lg:w-auto ml-auto mr-auto lg:ml-0 lg:mr-0 lg:inline-block" alt="HRP Logo" />
        </h1>
        <div className="my-2 md:my-4 md:text-xl">
          <p className="text-2xl font-bold mt-8 mb-4 text-center lg:text-left">Developers and Hacking are inseparable!</p>
          <p className="text-base opacity-50 mt-4 mb-8 text-center lg:text-left">
            ReactPlay brings you the opportunity to take part in the Hackathon
            and learn from it. Showcase your mindblowing ideas, build projects,
            and create content - there are also chances to win exciting prizes.
          </p>
        </div>
        <div className="">
          <div className="body-c2a body-c2a-hackathon">
            <a
              href="https://hustles.reactplay.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="body-c2a-btn  body-c2a-btn--primary"
            >
              <IoIosRocket className="icon"/>
              <span className="btn-label">Get started</span>
            </a>
            <a
            href="https://github.com/reactplay/react-play"
            target="_blank"
            rel="noopener noreferrer"
            className="body-c2a-btn umami--click--github"
          >
            <BsGithub className="icon" />
            <span className="btn-label">
              GitHub{" "}
              <div className="label-info-more">
                <FiStar />{" "}
                <div className="more-label">{data.stargazers_count}</div>
              </div>{" "}
            </span>
          </a>
          </div>
          
        </div>
      </div>
      <div>
        <img src={HackerBannerImage} className="hackathon-banner-image" alt="" />
      </div>
    </div>
  );
}

export default HackathonBanner;
