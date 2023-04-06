import { useState, useEffect } from 'react';
import data from './ideas.json';
import { IoAddSharp } from 'react-icons/io5';
import { RiChatNewLine } from 'react-icons/ri';
import LevelBadge from 'common/components/LevelBadge';
import './playIdeas.css';
import { CREATE_PLAY_DOC_LINK } from 'constants';

const PlayIdeas = () => {
  const [ideas, setIdeas] = useState([]);
  const [filteredIdeas, setFilteredIdeas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [filteredLevel, setFilteredLevel] = useState('');

  async function fetchData() {
    // TODO: The idea list has to come from the DB
    // const response = await fetch('/api/ideas');
    // const json = await response.json();
    const json = data.ideas;
    setIdeas(json);
    setFilteredIdeas(json);
    setIsLoading(false);
  }

  useEffect(() => {
    try {
      fetchData();
    } catch (_error) {
      setIsError(true);
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (filteredLevel === '') {
      setFilteredIdeas(data.ideas);
    } else {
      const filteredIdeas = ideas.filter((idea) => idea.level === filteredLevel);
      setFilteredIdeas(filteredIdeas);
    }
  }, [filteredLevel, ideas]);

  if (isError) {
    return <div>Something went wrong ...</div>;
  }

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  const onValueChange = (event) => {
    setFilteredLevel(event.target.value);
  };

  return (
    <main className="app-body app-body-overflow-hidden">
      <div className="playideas-container">
        <div className="playideas-header">
          <div>
            <h1 className="header-title">
              Play Ideas
              <span className="header-title-badge">{filteredIdeas.length}</span>
            </h1>
            <p className="header-desc">
              Looking for project ideas to practice React? Great, you have landed on the right
              place. Here are some ideas to get you started.
            </p>
          </div>
          <div className="playideas-levels-pills">
            <div className="level-pill">
              <input
                defaultChecked
                className="level-pill-control"
                id="all-id"
                name="level"
                type="radio"
                value=""
                onChange={onValueChange}
              />
              <label className="level-pill-label" htmlFor="all-id">
                All
              </label>
            </div>
            <div className="level-pill">
              <input
                className="level-pill-control"
                id="beginner-id"
                name="level"
                type="radio"
                value="Beginner"
                onChange={onValueChange}
              />
              <label className="level-pill-label" htmlFor="beginner-id">
                BEGINNER
              </label>
            </div>
            <div className="level-pill">
              <input
                className="level-pill-control"
                id="intermediate-id"
                name="level"
                type="radio"
                value="Intermediate"
                onChange={onValueChange}
              />
              <label className="level-pill-label" htmlFor="intermediate-id">
                INTERMEDIATE
              </label>
            </div>
            <div className="level-pill">
              <input
                className="level-pill-control"
                id="advanced-id"
                name="level"
                type="radio"
                value="Advanced"
                onChange={onValueChange}
              />
              <label className="level-pill-label" htmlFor="advanced-id">
                ADVANCED
              </label>
            </div>
          </div>
        </div>
        <div className="playideas-body">
          <ul className="list-playideas">
            {filteredIdeas.map((idea) => (
              <li className="list-playideas-item" key={idea.id}>
                <h2 className="idea-title">{idea.title}</h2>
                <p className="idea-desc">{idea.description}</p>
                <p className="idea-level">
                  <LevelBadge level={idea.level} />
                </p>
                <div className="idea-actions">
                  {process.env.NODE_ENV === 'development' ? (
                    <a
                      className="btn-primary action-btn"
                      href="/plays/create"
                      rel="noopener noreferrer"
                    >
                      <IoAddSharp className="icon" />
                      <span className="btn-label">Create</span>
                    </a>
                  ) : (
                    <a
                      className="btn-primary action-btn"
                      href={CREATE_PLAY_DOC_LINK}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <IoAddSharp className="icon" />
                      <span className="btn-label">Create</span>
                    </a>
                  )}
                  <a
                    className="btn-default action-btn"
                    href={`https://github.com/reactplay/react-play/discussions/new?category=ideas&title=${idea.title}`}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <RiChatNewLine className="icon" />
                    <span className="btn-label">Start discussion</span>
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default PlayIdeas;
