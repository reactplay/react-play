import React, { useEffect } from 'react';
import './home.css';
import HomeBanner from './HomeBanner';
import HomeContent from './HomeContent';
import HomeFeatures from './HomeFeatures';
import HomeIdeas from './HomeIdeas';
import HomePlays from './HomePlays';
import HomeTestimonials from './HomeTestimonials';
import HomeContributors from './HomeContributors';
import HomeSponsors from './HomeSponsors';
import ExtendedFooter from 'common/footer/ExtendedFooter';

const Home = () => {
  return (
    <main>
      <section className="app-home-body">
        <HomeBanner />
        <HomeContent />
      </section>
      <section className="home-features">
        <HomeFeatures />
        <HomeIdeas />
      </section>
      <HomePlays />
      <HomeTestimonials />
      <HomeContributors />
      <HomeSponsors />
      <ExtendedFooter />
    </main>
  );
};

export default Home;
