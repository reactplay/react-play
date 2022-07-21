import PlayHeader from 'common/playlists/PlayHeader';
import './devDash.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Blogs from './components/Blogs';
import LeftSide from './components/LeftSide';
import GraphRightSide from './components/GraphRightSide';
function DevDash(props) {

  // Your Code Start below.
  const [reactions, setReactions] = useState([]);
  const [text, setText] = useState("shreyazz");
  const [image, setImage] = useState("");
  const [userName, setUserName] = useState("@shreyazz");
  const [profName, setProfName] = useState("");
  const [twitterUserName, setTwitterUserName] = useState("@PahuneShreyas");
  const [graphType, setGraphType] = useState("area");
  const [blogs, setBlogs] = useState([]);
  const [read, setRead] = useState(3);
  //function to fetch the reactions

  async function getData() {
    try {
      const res = await axios.get(
        `https://dev.to/api/articles?username=${text}`
      );

      const posCounts = [];
      for (let i = 0; i < res.data.length; i++) {
        posCounts.push({
          reactions: res.data[i].public_reactions_count,
          comments: res.data[i].comments_count,
        });
      }
      setReactions(posCounts.reverse());
      setImage(res.data[1].user.profile_image);
      setUserName(res.data[1].user.username);
      setProfName(res.data[1].user.name);
      setTwitterUserName(res.data[1].user.twitter_username);
      setBlogs(res.data);
      setRead(3);
    } catch (e) {
      console.error(e);
      alert("No user found");
    }
  }
  //useEffect
  useEffect(() => {
    setRead(3);
    getData();
    setText("");

  }, []);

  //handle change function for text and submit
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
  };
  //active class styles
  const activeClassStyle = {
    background: "rgba(197, 197, 197, 0.401)",
    borderRadius: "0.6rem",
    height: "70%",
    paddingInline: "0.6rem",
    paddingBlock: "0.35rem",
  };

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
        {/* Your Code Starts Here */}
        <div className="main">
        <form onSubmit={handleSubmit}>
          <div className="search">
            <input
              type="text"
              placeholder="Dev.to Username"
              onChange={handleChange}
              value={text}
            />
            <p>Press enter to search...</p>
          </div>
          <i
            className="fas fa-search"
            onClick={getData}
            style={{ cursor: "pointer" }}
          ></i>
        </form>
        <div className="mid">
          <LeftSide
            image={image}
            profName={profName}
            userName={userName}
            twitterUserName={twitterUserName}
          />
          <GraphRightSide
            graphType={graphType}
            reactions={reactions}
            activeClassStyle={activeClassStyle}
            setGraphType={setGraphType}
          />
        </div>
        <i className="fas fa-chevron-down"></i>
        <div className="blog-main">
          {blogs.slice(0, read).map((e) => {
            return (
              <>
                <Blogs
                  image={e.cover_image}
                  url={e.url}
                  title={e.title}
                  desc={e.description}
                  readTime={e.reading_time_minutes}
                />
              </>
            );
          })}
          {/* {console.log(reactions.length, read - 1)} */}
        </div>
        {read - 1 !== reactions.length || read !== reactions.length ? (
          <button className="read-more" onClick={() => setRead(read + 3)}>
            Load More
          </button>
        ) : (
          ""
        )}
        <div className="free-space"></div>
        <footer>
          Made with ❤️ by Shreyas Pahune <br /> Powered by
           Firebase
        </footer>
      </div>
        {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default DevDash;