import { useState, useEffect } from 'react';

import data from './ideas.json';


const PlayIdeas = () => {
  const [ideas, setIdeas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    try {
      async function fetchData() {
        //const response = await fetch('./ideas.json');
        //const json = await response.json();
        const json = data.ideas;
        setIdeas(json);
        setIsLoading(false);
      }
      fetchData();
    } catch (error) {
      console.log(error);
      setIsError(true);
      setIsLoading(false);
    }
  }, []);

  if (isError) {
    return <div>Something went wrong ...</div>;
  }

  if (isLoading) {
    return <div>Loading ...</div>;
  }


  return (
    <div>
      <h1>Play Ideas</h1>
      <ul>
        {ideas.map((idea) => (
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