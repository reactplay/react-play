import { useState, useEffect } from 'react';

import data from './ideas.json';


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
    <div>
      <h1>Heading</h1>
      <p>Some text.</p>
      <div className="ideas-levels">
        Filter by level:
        <input type="radio" name="level" value="" id="all-id" onChange={onValueChange} defaultChecked/>
        <label htmlFor="all-id">All Levels</label>
        <input type="radio" name="level" value="Beginner" id="beginner-id" onChange={onValueChange} />
        <label htmlFor="beginner-id">Beginner</label>
        <input type="radio" name="level" value="Intermediate" id="intermediate-id" onChange={onValueChange}/>
        <label htmlFor="intermediate-id">Intermediate</label>
        <input type="radio" name="level" value="Advanced" id="advanced-id" onChange={onValueChange}/>
        <label htmlFor="advanced-id">Advanced</label>
        
      </div>
      <ul>
        <h2>Play Ideas({filteredIdeas.length})</h2>
        {filteredIdeas.map((idea) => (
          <li key={idea.id}>
            <h2>{idea.title}</h2>
            <p>{idea.description}</p>
            <p>{idea.level}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlayIdeas;