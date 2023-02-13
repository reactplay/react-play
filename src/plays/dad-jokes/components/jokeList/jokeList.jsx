import { useEffect, useState } from 'react';
import axios from 'axios';
import SingleJoke from '../singleJoke/SingleJoke';
import './jokeList.css';
import laughingImage from '../../laughing-emoji.gif';
import CategoryModal from '../categoryModal/CategoryModal';

const JokeList = ({ darkTheme }) => {
  // Defining State variables
  const [jokeArray, setJokeArray] = useState([]);
  const [categoryModalToggle, setCategoryModalToggle] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchJokes('Any');
  }, []);

  // Fetching Jokes
  async function fetchJokes(category) {
    let { data } = await axios.get(
      `${process.env.REACT_APP_DADJOKES_URL}${category}?type=single&amount=10&blacklistFlags=nsfw&safe-mode`,
      {
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_DADJOKES_APIKEY,
          'X-RapidAPI-Host': process.env.REACT_APP_DADJOKES_APIHOST
        }
      }
    );
    let updatedArray = data.jokes.map((currEle) => ({ ...currEle, vote: 0 }));
    setJokeArray(updatedArray);
    setLoading(false);
  }

  // Increamenting or decreamenting votes
  const handleVote = (id, num) => {
    setJokeArray(
      jokeArray.map((currEle) => {
        currEle.id === id ? (currEle.vote += num) : currEle;

        return currEle;
      })
    );
  };

  return (
    <>
      {loading ? (
        <img alt="laughing-emoji" src={laughingImage} />
      ) : (
        <>
          {/* -----------------------------------------------------------Joke List Container-------------------------------------------------------------------- */}
          <div className={darkTheme ? 'jokelist dark' : 'jokelist'}>
            {/* -----------------------------------------------------------Joke List Sidebar-------------------------------------------------------------------- */}
            <div className="jokelist-sidebar">
              {/* -----------------------------------------------------------Sidebar Title-------------------------------------------------------------------- */}
              <div className="jokelist-sidebar-title">
                <h1>
                  <span>Dad</span> Jokes
                </h1>
              </div>

              {/* -----------------------------------------------------------Sidebar Emoji-------------------------------------------------------------------- */}
              <div className="jokelist-sidebar-emoji">
                <img
                  alt="joke-icon"
                  src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg"
                />
              </div>
              {/* -----------------------------------------------------------New Jokes Button-------------------------------------------------------------------- */}
              <div className="jokelist-sidebar-getmore">
                <button onClick={() => setCategoryModalToggle(true)}>New Jokes</button>
              </div>
            </div>
            {/* -----------------------------------------------------------Joke List-------------------------------------------------------------------- */}
            <div className="jokelist-jokes">
              {jokeArray.map((currEle) => (
                <SingleJoke
                  downvote={() => handleVote(currEle.id, -1)}
                  jokeText={currEle.joke}
                  key={currEle.id}
                  upvote={() => handleVote(currEle.id, 1)}
                  vote={currEle.vote}
                />
              ))}
            </div>
          </div>
          {/* -----------------------------------------------------------Category Modal Popup-------------------------------------------------------------------- */}
          <CategoryModal
            categoryModalToggle={categoryModalToggle}
            darkTheme={darkTheme}
            fetchJokes={fetchJokes}
            setCategoryModalToggle={setCategoryModalToggle}
            setLoading={setLoading}
          />
        </>
      )}
    </>
  );
};

export default JokeList;
