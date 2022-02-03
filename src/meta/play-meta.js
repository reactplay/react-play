
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
    path: '/plays/why-react',
    index: true,
    level: 'Beginner',
    tags: 'JSX',
  },
  {
    name: 'Current Timer',
    component: () => {return <CurrentTimer />},
    path: '/plays/clock',
    level: 'Beginner',
    tags: 'JSX, Schedule'
  },
  {
    name: 'Countdown Timer',
    component: () => {return <CdTimerComp />},
    path: '/plays/countdown',
    level: 'Intermediate',
    tags: 'Schedule, Component Structure, Hooks, Custom Hooks'
  },
  {
    name: 'Movies',
    component: () => {return <MovieContainer />},
    path: '/plays/movies',
    level: 'Intermediate',
    tags: 'Fetch Data, Hooks'
  },
  {
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

export {
  getAllPlays,
  getPlaysOnSearch
};



