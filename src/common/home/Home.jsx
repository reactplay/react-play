import { useState, useEffect, useContext} from "react";
import useFetch from "common/hooks/useFetch";
import { Link } from "react-router-dom";
import "./home.css";
import { RiSlideshow4Line } from "react-icons/ri";
import { BiShareAlt, BiAddToQueue } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { FiStar } from "react-icons/fi";
import { FaLightbulb } from 'react-icons/fa';
import { ReactComponent as Flower } from "images/icon-flower.svg";
import { MdManageSearch } from "react-icons/md";
import YoutubeVideoEmbed from 'common/components/YouTubeEmbed';
import FeaturedPlays from "common/playlists/FeaturedPlays";
import Contributors from "./Contributors";
import ExtendedFooter from "common/footer/ExtendedFooter";
import { SearchContext } from "common/search/search-context";
import { Tweet } from "react-twitter-widgets";
import Spinner from "../spinner/spinner"




const Home = () => {
  const [gitHubStars, setGitHubStars] = useState("...");
  const { data } = useFetch("https://api.github.com/repos/reactplay/react-play");
  const { setSearchTerm, searchTerm, setFilterQuery } =
    useContext(SearchContext);
  useEffect(() => {
    setGitHubStars(data.stargazers_count);
    setSearchTerm("");
    setFilterQuery({
      level_id: "",
      tags: [],
      owner_user_id: "",
      language: ""
    });
  }, [data, setSearchTerm, searchTerm, setFilterQuery]);

  //* array of tweet IDs to show on the home page
    const tweetIdArray = [
        "1544376341172068352",  
        "1530197614771458049",
        "1529884210269671424",
        "1522165831005728769",
        "1521784126717710336",
        "1518200201302974464",
        "1541802575775035392",
        "1515598358748237830",
        "1528938773710782464",
        "1532349503709122561"
    ]

    //* set the state for loading
   
    const [isLoading,setLoading] = useState(true)



    function tweetLoadHandler (){
        //* as soon as tweets loads on DOM disable the loading spinner
        setLoading(false)
    }


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
            ReactPlay is an open-source platform to learn, create and share
            ReactJS projects with the developer community. Start by browsing the
            plays or exploring the source code.
          </p>
          <div className="body-c2a">
            <Link to="/plays" className="body-c2a-btn body-c2a-btn--primary">
              <MdManageSearch className="icon" />
              <span className="btn-label">Browse</span>
            </Link>
            <a
              href="https://github.com/reactplay/react-play"
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
        <div className="home-ideas">
          <FaLightbulb className="icon" color="var(--color-brand-primary)" size='48px'/>
          <p className="ideas-lead">Not sure how to get started?</p>
          <p className="ideas-title">We have got lot of ideas</p>
          <Link to="/ideas" className="home-anchor">
            <span className="text">Get started with some ideas</span>
          </Link>
        </div>
      </section>
      <section className="home-plays">
        <FeaturedPlays />
        <div className="home-plays-footer">
          <Link to="/plays" className="home-anchor">
            <span className="text">View all Plays</span>
          </Link>
        </div>
      </section>
      <section className="home-tweets">
              <h3 className="title-primary">
                What Our <strong>
                       <span>Community</span>
                  </strong> Says!
              </h3>

        {
            (isLoading) ? <Spinner/> :""
        }
        <div className="tweets-container active" >
            {
                
                tweetIdArray.map(id=> {

                    return <Tweet  key={id} tweetId={id}
                    onLoad={tweetLoadHandler} options={{width:'410' ,conversation:"none",cards:"hidden",align:"center"}} />
                })
            }
        </div>
         
      </section>
      <section className="home-contributors">
        <Contributors />
      </section>
      <ExtendedFooter />
    </div>
  );
};

export default Home;
