import React from 'react';
import { Link } from 'react-router-dom';
import FeaturedPlays from 'common/playlists/FeaturedPlays';

const HomePlays = () => {
  return (
    <section className="home-plays">
      <FeaturedPlays />
      <div className="home-plays-footer">
        <Link className="home-anchor" to="/plays">
          <span className="text">View all Plays</span>
        </Link>
      </div>
    </section>
  );
};

export default HomePlays;
