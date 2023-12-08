import React from 'react';
import { RiSlideshow4Line } from 'react-icons/ri';
import { BiShareAlt, BiAddToQueue } from 'react-icons/bi';

const HomeFeatures = () => {
  return (
    <ul className="list-home-features">
      <li className="home-features-item">
        <div className="item-icon">
          <RiSlideshow4Line className="icon" color="var(--color-neutral-90)" />
        </div>
        <h2 className="item-title">Learn </h2>
        <p className="item-desc">
          Learn how to "Think in React" and build applications inspired by several plays(source code
          & demos). Get to the source code of it, find related article, or even a YouTube video.
          Learn from the expert code reviews.
        </p>
      </li>
      <li className="home-features-item">
        <div className="item-icon">
          <BiAddToQueue className="icon" color="var(--color-neutral-90)" />
        </div>
        <h2 className="item-title">Create </h2>
        <p className="item-desc">
          Create your own plays and own them by following a few simple steps. Learned something new?
          Perfect to present as a play. You can also contribute to the existing plays. Your play
          will be reviewed by the experts before being made public.
        </p>
      </li>
      <li className="home-features-item">
        <div className="item-icon">
          <BiShareAlt className="icon" color="var(--color-neutral-90)" />
        </div>
        <h2 className="item-title">Socialize </h2>
        <p className="item-desc">
          Share your plays with the community. The best way of building in public is by sharing the
          learning. You can share your plays on social media platforms like Facebook, Twitter,
          LinkedIn, to name a few, just with a single click.
        </p>
      </li>
    </ul>
  );
};

export default HomeFeatures;
