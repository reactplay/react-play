
import {
  CountDownTimer,
  CurrentTimer,
  MovieContainer,
  WhyReact
} from "../plays";

const plays = [
  {
    name: 'Why React',
    component: () => {return <WhyReact />},
    path: '/plays/why-react',
    index: true,
    includeInMenu: true,
  },
  {
    name: 'Current Timer',
    component: () => {return <CurrentTimer />},
    path: '/plays/clock',
    includeInMenu: true,
  },
  {
    name: 'Countdown Timer',
    component: () => {return <CountDownTimer targetDate = {'Jan 25, 2022 15:37:25'} />},
    path: '/plays/countdown',
    includeInMenu: true,
  },
  {
    name: 'Movies',
    component: () => {return <MovieContainer />},
    path: '/plays/movies',
    includeInMenu: true,
  },
];

const getAllPlays = () => {
  return plays;
};

const getPlaysToInclude = () => {
  return plays.filter(play => play.includeInMenu);
}

export {
  getAllPlays,
  getPlaysToInclude,
};



