
import {
  BasicTree, CdTimerComp,
  CurrentTimer,
  MovieContainer,
  WhyReact
} from "plays";

const plays = [
  {
    name: 'Why React',
    component: () => {return <WhyReact />},
    path: '/plays/play/why-react',
    index: true,
    level: 'Beginner',
    tags: 'JSX',
  },
  {
    name: 'Current Timer',
    component: () => {return <CurrentTimer />},
    path: '/plays/play/clock',
    level: 'Beginner',
    tags: 'JSX, Schedule'
  },
  {
    name: 'Countdown Timer',
    component: () => {return <CdTimerComp />},
    path: '/plays/play/countdown',
    level: 'Intermediate',
    tags: 'Schedule, Component Structure, Hooks, Custom Hooks'
  },
  {
    name: 'Movies',
    component: () => {return <MovieContainer />},
    path: '/plays/play/movies',
    level: 'Intermediate',
    tags: 'Fetch Data, Hooks'
  },
  {
    name: 'Basic Family Tree',
    component: () => {return <BasicTree />},
    path: '/plays/play/basic-family-tree',
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



