import { useEffect } from 'react';
import useFetch from 'common/hooks/useFetch';
import { Link } from 'react-router-dom';
import './home.css';
import { RiSlideshow4Line } from 'react-icons/ri';
import { BiShareAlt, BiAddToQueue } from 'react-icons/bi';
import { FaLightbulb } from 'react-icons/fa';
import { ReactComponent as Flower } from 'images/icon-flower.svg';
import FeaturedPlays from 'common/playlists/FeaturedPlays';
import Contributors from './Contributors';
import ExtendedFooter from 'common/footer/ExtendedFooter';
import { useSearchContext } from 'common/search/search-context';
import ActivityBanner from 'common/activities/ActivityBanner';
import DefaultBanner from 'common/defaultBanner/DefaultBanner';
import TestimonialSection from 'common/Testimonial/TestimonialSection';
import Sponsors from './Sponsors';

const Home = () => {
  const { data } = useFetch('https://api.github.com/repos/reactplay/react-play');
  const { setSearchTerm, searchTerm, setFilterQuery } = useSearchContext();
  useEffect(() => {
    setSearchTerm('');
    setFilterQuery({
      level_id: '',
      tags: [],
      owner_user_id: '',
      language: ''
    });
  }, [data, setSearchTerm, searchTerm, setFilterQuery]);

  // eslint-disable-next-line no-console
  console.log('process.env.REACT_APP_ACTIVITIES_ON', process.env.REACT_APP_ACTIVITIES_ON);

  return (
    <main>
      <section className="app-home-body">
        <div className="home-bg-graphics">
          <Flower className="home-bg-graphics-sm" />
          <Flower className="home-bg-graphics-rg" />
          <Flower className="home-bg-graphics-lg" />
        </div>
        <div className="app-home-body-content">
          {process.env.REACT_APP_ACTIVITIES_ON && process.env.REACT_APP_ACTIVITIES_ON === 'true' ? (
            <ActivityBanner currentActivity={process.env.REACT_APP_ACTIVITY_ID} />
          ) : (
            <DefaultBanner />
          )}
        </div>
      </section>
      <section className="home-features">
        <ul className="list-home-features">
          <li className="home-features-item">
            <div className="item-icon">
              <RiSlideshow4Line className="icon" color="var(--color-neutral-90)" />
            </div>
            <h2 className="item-title">Learn </h2>
            <p className="item-desc">
              Learn how to "Think in React" and build applications inspired by several plays(source
              code & demos). Get to the source code of it, find related article, or even a YouTube
              video. Learn from the expert code reviews.
            </p>
          </li>
          <li className="home-features-item">
            <div className="item-icon">
              <BiAddToQueue className="icon" color="var(--color-neutral-90)" />
            </div>
            <h2 className="item-title">Create </h2>
            <p className="item-desc">
              Create your own plays and own them by following a few simple steps. Learned something
              new? Perfect to present as a play. You can also contribute to the existing plays. Your
              play will be reviewed by the experts before being made public.
            </p>
          </li>
          <li className="home-features-item">
            <div className="item-icon">
              <BiShareAlt className="icon" color="var(--color-neutral-90)" />
            </div>
            <h2 className="item-title">Socialize </h2>
            <p className="item-desc">
              Share your plays with the community. The best way of building in public is by sharing
              the learning. You can share your plays on social media platforms like Facebook,
              Twitter, LinkedIn, to name a few, just with a single click.
            </p>
          </li>
        </ul>
        <div className="home-ideas">
          <FaLightbulb className="icon" color="var(--color-brand-primary)" size="48px" />
          <p className="ideas-lead">Not sure how to get started?</p>
          <p className="ideas-title">We have got lot of ideas</p>
          <Link className="home-anchor" to="/ideas">
            <span className="text">Get started with some ideas</span>
          </Link>
        </div>
      </section>
      <section className="home-plays">
        <FeaturedPlays />
        <div className="home-plays-footer">
          <Link className="home-anchor" to="/plays">
            <span className="text">View all Plays</span>
          </Link>
        </div>
      </section>
      <section className="testimonials">
        <h2 className="title-primary">
          What Our{' '}
          <strong>
            <span>Community</span>
          </strong>{' '}
          Says!
        </h2>

        <TestimonialSection />
        <div className="mt-16 text-center">
          <Link className="home-anchor" to="/testimonials">
            <span className="text">View all Testimonials</span>
          </Link>
        </div>
      </section>
      <section className="home-contributors" data-testid="contributors-section">
        <Contributors />
      </section>
      <section className="home-sponsors" data-testid="sponsors-section">
        <Sponsors />
      </section>
      <ExtendedFooter />
    </main>
  );
};

export default Home;
