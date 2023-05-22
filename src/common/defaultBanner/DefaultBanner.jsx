import useFetch from 'common/hooks/useFetch';
import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { FiStar } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { MdManageSearch } from 'react-icons/md';
import { UMAMI_EVENTS } from 'constants';

const DefaultBanner = () => {
  const { data } = useFetch('https://api.github.com/repos/reactplay/react-play');

  return (
    <div>
      <h1 className="body-title">
        Start <strong>React Code</strong> Arena <br />
        with ReactPlay
      </h1>
      <p className="body-desc">
        ReactPlay is an open-source platform to learn, create and share ReactJS projects with the
        developer community. Start by browsing the plays or exploring the source code.
      </p>

      <div className="body-c2a">
        <Link className="body-c2a-btn body-c2a-btn--primary" to="/plays">
          <MdManageSearch className="icon" />
          <span className="btn-label">Browse</span>
        </Link>
        <a
          className="body-c2a-btn"
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
      <div className="body-desc">
        Check out our bouquet of events{' '}
        <Link className="home-anchor" target="_blank" to="https://hustles.reactplay.io/">
          <span className="text text-secondary">here</span>
        </Link>
      </div>
    </div>
  );
};

export default DefaultBanner;
