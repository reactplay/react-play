import {
  BasicTree,
  CdTimerComp,
  CurrentTimer,
  MovieContainer,
  WhyReact,
  CounterApp,
  States,
  SocialCard,
  RandomMemeGenerator,
  ReactTodoApp,
  ExpandingCards,
  AnalogClock,
  //import play here
} from "plays";

export const plays = [
  {
    id: "pl-0001",
    name: "Why React",
    description: "A simple application to demonstrate JSX usages",
    component: () => {
      return <WhyReact />;
    },
    path: "/plays/why-react",
    index: true,
    level: "Beginner",
    tags: "JSX",
    github: "atapas",
  },
  {
    id: "pl-0002",
    name: "Clock",
    description:
      "This application shows the current time and it increases every second",
    component: () => {
      return <CurrentTimer />;
    },
    path: "/plays/clock",
    level: "Beginner",
    tags: "JSX, Schedule",
    github: "atapas",
    blog: "https://blog.greenroots.info",
    video: "https://youtube.com/tapasadhikary",
  },
  {
    id: "pl-0003",
    name: "Countdown Timer",
    description: "It is a timer that fires every second and decreases the time",
    component: () => {
      return <CdTimerComp />;
    },
    path: "/plays/date-time-counter",
    level: "Intermediate",
    tags: "Schedule, Component Structure, Hooks, Custom Hooks",
    github: "atapas",
    blog: "https://blog.greenroots.info/how-to-create-a-countdown-timer-using-react-hooks",
  },
  {
    id: "pl-0004",
    name: "Movies",
    description: "A list of movies from API call.",
    component: () => {
      return <MovieContainer />;
    },
    path: "/plays/movies",
    level: "Intermediate",
    tags: "Fetch Data, Hooks",
    github: "atapas",
    blog: "https://blog.openreplay.com/understanding-the-container-component-pattern-with-react-hooks",
  },
  {
    id: "pl-0005",
    name: "Organization Tree",
    description: "A simple org tree",
    component: () => {
      return <BasicTree />;
    },
    path: "/plays/org-tree",
    level: "Intermediate",
    tags: "Recursion, Tree",
    github: "green-roots",
    featured: true,
  },
  {
    id: "pl-counter",
    name: "Counter",
    description:
      "A simple counter which increments the value upto a certain limit!",
    component: () => {
      return <CounterApp />;
    },
    path: "/plays/counter",
    level: "Beginner",
    tags: "JSX, State, Props",
    github: "murtuzaalisurti"
  },
  {
    id: "pl-states",
    name: "States",
    description: "States in Functional Components",
    component: () => {
      return <States />;
    },
    path: "/plays/states",
    level: "Beginner",
    tags: "Hooks,State,JSX",
    github: "Abhishek-90",
    cover: "",
    blog: "https://abhishek-90.github.io/My-Portfolio/",
  },
  {
    id: "pl-social-card",
    name: "Social Card",
    description:
      "The Social Card helps you telling who you are using photo, name, and other social footprints.",
    component: () => {
      return <SocialCard />;
    },
    path: "/plays/social-card",
    level: "Intermediate",
    tags: "Form,Events,Complex State",
    github: "atapas",
    featured: true,
    cover: "",
    blog: "https://blog.greenroots.info/how-to-create-react-form-with-a-single-change-event-handler",
    video: "",
  },
  {
    id: "pl-random-meme-generator",
    name: "Random Meme Generator",
    description:
      "A project to demonstrate the use of API to fetch random memes! It also demonstrates how you can do event handling!",
    component: () => {
      return <RandomMemeGenerator />;
    },
    path: "/plays/random-meme-generator",
    level: "Beginner",
    tags: "JSX,Hooks,API,EventHandling",
    github: "murtuzaalisurti",
    featured: true,
    cover: "",
    blog: "",
    video: "",
  },
  {
    id: "pl-react-todo-app",
    name: "React Todo App",
    description:
      "It is a simple Todo App which keeps track of your regular work",
    component: () => {
      return <ReactTodoApp />;
    },
    path: "/plays/react-todo-app",
    level: "Beginner",
    tags: "ReactHooks, JavaScript, Css, React State",
    github: "nirban256",
    cover:
      "https://res.cloudinary.com/atapas/image/upload/v1650866465/demos/cover_y20bzk.png",
    blog: "",
    video: "",
  },
  {
    id: "pl-expanding-cards",
    name: "Expanding-Cards",
    description:
      "this project shows bunch of striped cards on screen if you want to show the card. you just have to click to expand it",
    component: () => {
      return <ExpandingCards />;
    },
    path: "/plays/expanding-cards",
    level: "Beginner",
    tags: "Jsx, useState, hooks, toggle, React, css-transitions",
    github: "Deepak8717",
    featured: true,
    cover: "",
    blog: "",
    video: "",
  },
  {
    id: "pl-analog-clock",
    name: "Analog-Clock",
    description: "A beautiful wall clock",
    component: () => {
      return <AnalogClock />;
    },
    path: "/plays/analog-clock",
    level: "Beginner",
    tags: "useState, useEffect, Date, setInterval",
    github: "Deepak8717",
    cover: "",
    blog: "",
    video: "",
  }, //replace new play item here
];
