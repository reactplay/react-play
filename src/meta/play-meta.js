
import {
  CountDownTimer,
  CurrentTimer,
  Home,
  MovieContainer,
  PageNotFound,
  WhyReact
} from "../plays";

const plays = [
  {
    name: 'Why React',
    component: () => {return <WhyReact />},
    path: '/why-react',
    includeInMenu: true,
  },
  {
    name: 'Current Timer',
    component: () => {return <CurrentTimer />},
    path: '/clock',
    includeInMenu: true,
  },
  {
    name: 'Countdown Timer',
    component: () => {return <CountDownTimer targetDate = {'Jan 25, 2022 15:37:25'} />},
    path: '/countdown',
    includeInMenu: true,
  },
  {
    name: 'Home',
    component: () => {return <Home />},
    path: '/',
    index: true,
    includeInMenu: false,
  },
  {
    name: 'Movies',
    component: () => {return <MovieContainer />},
    path: '/movies',
    includeInMenu: true,
  },
  {
    name: 'Page Not Found',
    component: () => {return <PageNotFound />},
    path: '/*',
    includeInMenu: false,
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



