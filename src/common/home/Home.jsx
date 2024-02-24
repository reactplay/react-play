import ExtendedFooter from 'common/footer/ExtendedFooter';
import React from 'react';
import HomeBanner from './HomeBanner';
import HomeContent from './HomeContent';
import HomeContributors from './HomeContributors';
import HomeFeatures from './HomeFeatures';
import HomeIdeas from './HomeIdeas';
import HomePlays from './HomePlays';
import HomeSponsors from './HomeSponsors';
import HomeTestimonials from './HomeTestimonials';
import './home.css';

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
