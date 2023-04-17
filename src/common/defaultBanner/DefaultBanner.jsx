import useFetch from 'common/hooks/useFetch';
import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { FiStar } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { MdManageSearch } from 'react-icons/md';

const DefaultBanner = () => {
  const { data } = useFetch(`${process.env.REACT_APP_PLAY_API_URL}/react-play`);

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
          className="body-c2a-btn umami--click--github"
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
  );
};

export default DefaultBanner;
