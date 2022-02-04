
import {
  BasicTree, CdTimerComp,
  CurrentTimer,
  MovieContainer,
  WhyReact
} from "plays";

const plays = [
  {
    id: 'pl-0001',
    name: 'Why React',
    component: () => {return <WhyReact />},
    path: '/plays/why-react',
    index: true,
    level: 'Beginner',
    tags: 'JSX',
  },
  {
    id: 'pl-0002',
    name: 'Current Timer',
    component: () => {return <CurrentTimer />},
    path: '/plays/clock',
    level: 'Beginner',
    tags: 'JSX, Schedule'
  },
  {
    id: 'pl-0003',
    name: 'Countdown Timer',
    component: () => {return <CdTimerComp />},
    path: '/plays/countdown',
    level: 'Intermediate',
    tags: 'Schedule, Component Structure, Hooks, Custom Hooks'
  },
  {
    id: 'pl-0004',
    name: 'Movies',
    component: () => {return <MovieContainer />},
    path: '/plays/movies',
    level: 'Intermediate',
    tags: 'Fetch Data, Hooks'
  },
  {
    id: 'pl-0005',
    name: 'Basic Family Tree',
    component: () => {return <BasicTree />},
    path: '/plays/basic-family-tree',
    level: 'Intermediate',
    tags: 'Recursion, Tree'
  },
];

const getAllPlays = () => {
  return plays;
};

const getPlaysOnSearch = searchTerm => {
  return plays.filter(play => {
    return play.name.toLowerCase().includes(searchTerm.toLowerCase());
  });
}

const getBeginnerPlays = () => {
  return plays.filter(play => {
    return play.level === 'Beginner';
  });
}

const getIntermediatePlays = () => {
  return plays.filter(play => {
    return play.level === 'Intermediate';
  });
}

const getAdvancedPlays = () => {
  return plays.filter(play => {
    return play.level === 'Advanced';
  });
}

const getPlaysByTags = tags => {
  return plays.filter(play => {
    return play.tags.includes(tags);
  });
}

export {
  getAllPlays,
  getPlaysOnSearch,
  getBeginnerPlays,
  getIntermediatePlays,
  getAdvancedPlays,
  getPlaysByTags
};



