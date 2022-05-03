import { useState, useEffect } from 'react';

import data from './ideas.json';
import { IoRibbon } from "react-icons/io5";
import "./playIdeas.css";


const PlayIdeas = () => {
  const [ideas, setIdeas] = useState([]);
  const [filteredIdeas, setFilteredIdeas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [filteredLevel, setFilteredLevel] = useState('');

  useEffect(() => {
    try {
      async function fetchData() {
        //const response = await fetch('/api/ideas');
        //const json = await response.json();
        const json = data.ideas;
        setIdeas(json);
        setFilteredIdeas(json);
        setIsLoading(false);
      }
      fetchData();
    } catch (error) {
      console.log(error);
      setIsError(true);
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (filteredLevel === '') {
      setFilteredIdeas(data.ideas);
    } else {
      const filteredIdeas = ideas.filter(idea => idea.level === filteredLevel);
      setFilteredIdeas(filteredIdeas);
    }
  }, [filteredLevel]);

  if (isError) {
    return <div>Something went wrong ...</div>;
  }

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  const onValueChange = (event) => {
    setFilteredLevel(event.target.value);
  }

  return (
    <div className='app-body app-body-overflow-hidden'>
      <div className="playideas-container">
        <div className="playideas-header">
          <div>
          <h3 className='header-title'>
            Play Ideas
            <span className='header-title-badge'>{filteredIdeas.length}</span>
          </h3>
          <p className='header-desc'>Some text.</p>
          </div>
          <div className="playideas-levels-pills">
            <div className="levels-label">Filter by level:</div>
            <div className="level-pill">
              <input type="radio" name="level" value="" id="all-id" className='level-pill-control' onChange={onValueChange} defaultChecked/>
              <label htmlFor="all-id" className='level-pill-label'>All</label>
            </div>
            <div className="level-pill">
              <input type="radio" name="level" value="Beginner" id="beginner-id" className='level-pill-control' onChange={onValueChange} />
              <label htmlFor="beginner-id" className='level-pill-label'>
                Beginner</label>
            </div>
            <div className="level-pill">
              <input type="radio" name="level" value="Intermediate" id="intermediate-id" className='level-pill-control' onChange={onValueChange}/>
              <label htmlFor="intermediate-id" className='level-pill-label'>
                Intermediate</label>
            </div>
            <div className="level-pill">
              <input type="radio" name="level" value="Advanced" id="advanced-id" className='level-pill-control' onChange={onValueChange}/>
              <label htmlFor="advanced-id" className='level-pill-label'>
                Advanced</label>
            </div>
          </div>
          
        </div>
        <div className="playideas-body">
          <ul className='list-playideas'>
            {filteredIdeas.map((idea) => (
              <li className='list-playideas-item' key={idea.id}>
                <h4 className='idea-title'>{idea.title}</h4>
                <p className='idea-desc'>{idea.description}</p>
                <p className='idea-level'>
                  <span className="play-level play-level-1">
                    <IoRibbon size="16px" /> {idea.level}
                  </span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PlayIdeas;