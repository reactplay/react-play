
import {
  BasicTree, CdTimerComp,
  CurrentTimer,
  MovieContainer,
  WhyReact,
  //import play here
} from "plays";

const plays = [
  {
    id: 'pl-0001',
    name: 'Why React',
    description: 'A simple application to demonstrate JSX usages',
    component: () => {return <WhyReact />},
    path: '/plays/why-react',
    index: true,
    level: 'Beginner',
    tags: 'JSX',
    github: 'atapas'
  },
  {
    id: 'pl-0002',
    name: 'Current Timer',
    description: 'This application shows the current time and it increases every second',
    component: () => {return <CurrentTimer />},
    path: '/plays/clock',
    level: 'Beginner',
    tags: 'JSX, Schedule',
    github: 'atapas'
  },
  {
    id: 'pl-0003',
    name: 'Countdown Timer',
    description: 'It is a timer that fires every second and decreases the time',
    component: () => {return <CdTimerComp />},
    path: '/plays/countdown',
    level: 'Intermediate',
    tags: 'Schedule, Component Structure, Hooks, Custom Hooks',
    github: 'atapas'
  },
  {
    id: 'pl-0004',
    name: 'Movies',
    description: 'A list of movies from the local JSON data',
    component: () => {return <MovieContainer />},
    path: '/plays/movies',
    level: 'Intermediate',
    tags: 'Fetch Data, Hooks',
    github: 'atapas'
  },
  {
    id: 'pl-0005',
    name: 'Basic Family Tree',
    description: 'A simple family tree',
    component: () => {return <BasicTree />},
    path: '/plays/basic-family-tree',
    level: 'Intermediate',
    tags: 'Recursion, Tree',
    github: 'green-roots'
  }, //replace new play item here
];

const getAllPlays = () => {
  return plays;
};

const getPlayById = id => {
  return plays.find(play => play.id === id);
};

const getPlaysOnSearch = searchTerm => {
  return plays.filter(play => {
    return (play.name.toLowerCase().includes(searchTerm.toLowerCase())
      || play.description.toLowerCase().includes(searchTerm.toLowerCase()));
  });
}

const getPlaysByTags = tags => {
  return plays.filter(play => {
    return play.tags.includes(tags);
  });
}

const getPlaysByLevel = level => {
  return plays.filter(play => {
    return play.level === level;
  });
}

const getPlaysByCreator = creator => {
  return plays.filter(play => {
    return play.github === creator;
  });
}

const getAllTags = () => {
  const tags = plays.reduce((acc, play) => {
    return acc.concat(play.tags.split(', '));
  }, []);

  return Array.from(new Set([...tags]));
}

const getAllCreators = () => {
  const creators = plays.reduce((acc, play) => {
    return acc.concat(play.github);
  }, []);

  return Array.from(new Set([...creators]));
}

const getAllLevels = () => {
  const levels = plays.reduce((acc, play) => {
    return acc.concat(play.level);
  }, []);

  return Array.from(new Set([...levels]));
}

export {
  getAllPlays,
  getPlayById,
  getPlaysOnSearch,
  getPlaysByLevel,
  getPlaysByTags,
  getPlaysByCreator,
  getAllTags,
  getAllCreators,
  getAllLevels
};



