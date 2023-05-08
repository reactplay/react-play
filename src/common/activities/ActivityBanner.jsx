import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { FiStar } from 'react-icons/fi';
import { IoIosRocket } from 'react-icons/io';
import useFetch from 'common/hooks/useFetch';
import { activities } from './activitiesConfig';
import './activityBanner.css';
import { UMAMI_EVENTS } from 'constants';

function ActivityBanner({ currentActivity }) {
  const { data } = useFetch('https://api.github.com/repos/reactplay/react-play');
  const activity = activities.filter((a) => a.id === currentActivity);
  const { name, subtitle, description, logo, heroImage } = activity[0];

  return (
    <div className="flex flex-col lg:flex-row justify-between w-[98%]  max-w-[600px]  md:max-w-[992px] lg:max-w-[1200px] mt-16 m-auto text-white">
      <div className="w-[100%] lg:w-[60%] text-center lg:text-left">
        <span className="text-lg md:text-xl lg:text-2xl">ReactPlay Presents</span>
        <h1 className=" uppercase text-5xl md:text-6xl lg:text-8xl font-bold text-cyan-300 text-center lg:text-left">
          <span className="sr-only">{name}</span>
          <img
            alt="HRP Logo"
            className="w-10/12 md:w-64 lg:w-auto ml-auto mr-auto lg:ml-0 lg:mr-0 lg:inline-block"
            src={require(`${logo}`)}
          />
        </h1>
        <div className="my-2 md:my-4 md:text-xl">
          <p className="text-2xl font-bold mt-8 mb-4 text-center lg:text-left">{subtitle}</p>
          <p className="text-base opacity-50 mt-4 mb-8 text-center lg:text-left">{description}</p>
        </div>
        <div className="">
          <div className="body-c2a body-c2a-hackathon">
            <a
              className="body-c2a-btn  body-c2a-btn--primary"
              href="https://hustles.reactplay.io/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <IoIosRocket className="icon" />
              <span className="btn-label">Get started</span>
            </a>
            <a
              className="body-c2a-btn "
              data-umami-event={UMAMI_EVENTS.GITHUB_BUTTON}
              href="https://github.com/reactplay/react-play"
              rel="noopener noreferrer"
              target="_blank"
            >
              <BsGithub className="icon" />
              <span className="btn-label">
                GitHub{' '}
                <div className="label-info-more">
                  <FiStar /> <div className="more-label">{data.stargazers_count}</div>
                </div>{' '}
              </span>
            </a>
          </div>
        </div>
      </div>
      <div>
        <img alt="" className="hackathon-banner-image" src={require(`${heroImage}`)} />
      </div>
    </div>
  );
}

export default ActivityBanner;
