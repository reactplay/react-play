import React from 'react';
import { Link } from 'react-router-dom';
import { FaLightbulb } from 'react-icons/fa';

const HomeIdeas = () => {
  return (
    <div className="home-ideas">
      <FaLightbulb className="icon" color="var(--color-brand-primary)" size="48px" />
      <p className="ideas-lead">Not sure how to get started?</p>
      <p className="title-primary">
        We have got lot of{' '}
        <strong>
          <span>ideas</span>
        </strong>
      </p>
      <Link className="home-anchor" to="/ideas">
        <span className="text">Get started with some ideas</span>
      </Link>
    </div>
  );
};

export default HomeIdeas;
