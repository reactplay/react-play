import { useState, useEffect, useContext } from "react";
import useFetch from "common/hooks/useFetch";
import { Link } from "react-router-dom";
import "./home.css";
import { RiSlideshow4Line } from "react-icons/ri";
import { BiShareAlt, BiAddToQueue } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { FiStar } from "react-icons/fi";
import { ReactComponent as Flower } from "images/icon-flower.svg";
import { MdManageSearch } from "react-icons/md";
import YoutubeVideoEmbed from 'common/components/YouTubeEmbed';
import FeaturedPlays from "common/playlists/FeaturedPlays";
import Contributors from "./Contributors";
import { SearchContext } from "common/search/search-context";

const Home = () => {
  const [gitHubStars, setGitHubStars] = useState("...");
  const { data } = useFetch("https://api.github.com/repos/atapas/react-play");
  const { setSearchTerm, searchTerm, setFilterQuery } =
    useContext(SearchContext);
  useEffect(() => {
    setGitHubStars(data.stargazers_count);
    setSearchTerm("");
    setFilterQuery({
      level: "",
      tags: [],
      creator: "",
    });
  }, [data, setSearchTerm, searchTerm]);

  return (
    <div>
      <section className="app-home-body">
        <div className="home-bg-graphics">
          <Flower className="home-bg-graphics-sm" />
          <Flower className="home-bg-graphics-rg" />
          <Flower className="home-bg-graphics-lg" />
        </div>
        <div className="app-home-body-content">
          <h2 className="body-title">
            Start <strong>React Code</strong> Arena <br />
            with ReactPlay
          </h2>
          <p className="body-desc">
            ReactPlay is an open-source application to learn, create and share
            ReactJS projects with the developer community. Start by browsing the
            plays or exploring the source code.
          </p>
          <div className="body-c2a">
            <Link to="/plays" className="body-c2a-btn body-c2a-btn--primary">
              <MdManageSearch className="icon" />
              <span className="btn-label">Browse</span>
            </Link>
            <a
              href="https://github.com/atapas/react-play"
              target="_blank"
              rel="noopener noreferrer"
              className="body-c2a-btn"
            >
              <BsGithub className="icon" />
              <span className="btn-label">
                GitHub{" "}
                <div className="label-info-more">
                  <FiStar /> <div className="more-label">{gitHubStars}</div>
                </div>{" "}
              </span>
            </a>
          </div>          
          <div className="video">
            <YoutubeVideoEmbed videoId="XrWonrp296w" title="🤩 Introducing ReactPlay - An Opensource Platform to Create, Learn, and Share ReactJS Projects" />
          </div>
        </div>
      </section>
      <section className="home-features">
        <ul className="list-home-features">
          <li className="home-features-item">
            <div className="item-icon">
              <RiSlideshow4Line
                className="icon"
                color="var(--color-neutral-90)"
              />
            </div>
            <h3 className="item-title">Learn </h3>
            <p className="item-desc">
              Learn how to "Think in React" and build applications inspired by
              several plays(source code & demos). Get to the source code of it,
              find related article, or even a YouTube video. Learn from the
              expert code reviews.
            </p>
          </li>
          <li className="home-features-item">
            <div className="item-icon">
              <BiAddToQueue className="icon" color="var(--color-neutral-90)" />
            </div>
            <h3 className="item-title">Create </h3>
            <p className="item-desc">
              Create your own plays and own them by following a few simple
              steps. Learned something new? Perfect to present as a play. You
              can also contribute to the existing plays. Your play will be
              reviewed by the experts before being made public.
            </p>
          </li>
          <li className="home-features-item">
            <div className="item-icon">
              <BiShareAlt className="icon" color="var(--color-neutral-90)" />
            </div>
            <h3 className="item-title">Socialize </h3>
            <p className="item-desc">
              Share your plays with the community. The best way of building in
              public is by sharing the learning. You can share your plays on
              social media platforms like Facebook, Twitter, LinkedIn, to name a
              few, just with a single click.
            </p>
          </li>
        </ul>
      </section>
      <section className="home-plays">
        <FeaturedPlays />
        <div className="home-plays-footer">
          <Link to="/plays" className="home-anchor">
            <span className="text">View all Plays</span>
          </Link>
        </div>
      </section>
      <section className="home-contributors">
        <Contributors />
      </section>
    </div>
  );
};

export default Home;
