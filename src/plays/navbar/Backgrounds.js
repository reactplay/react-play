import dash from "./backgroundImages/bg_dashboard.png";
import ideas from "./backgroundImages/bg_ideas.png";
import join from "./backgroundImages/bg_join.png";
import create from "./backgroundImages/bg_create.png";
import search from "./backgroundImages/bg_search.png";
const Backgrounds = [
    {
        id: 1,
        title: "Dashboard",
        type: "dashboard",
        discription: "ReactPlay is an OpenSource to Learn, Create, and Share ReactJS Projects",
        statement: "Know More",
        image: dash,
        opac: "true",
        url: "https://reactplay.io/"
    },
    {
        id: 2,
        title: "Ideas",
        type: "ideas",
        discription: "Looking for project ideas to practice React? Great, click down below for some ideas to get you started.",
        statement: "Get Ideas",
        image: ideas,
        opac: "false",
        url: "https://reactplay.io/ideas",
    },
    {
        id: 3,
        title: "Join",
        type: "join",
        discription: "Join us on Twitter and be a part of ReactPlay Community",
        statement: "Join Now",
        image: join,
        opac: "false",
        url: "https://twitter.com/reactplayio",
    },
    {
        id: 4,
        title: "Build",
        type: "build",
        discription: "Ready to create a new play? It is super easy, click down below to get started.",
        statement: "Create Now",
        image: create,
        opac: "false",
        url: "https://github.com/reactplay/react-play/blob/main/CREATE-PLAY.md"
    },
    {
        id: 5,
        title: "Search",
        type: "search",
        discription: "Start browsing the plays built by our community developers.",
        statement: "Browse Now",
        image: search,
        opac: "false",
        url: "https://reactplay.io/plays"
    },
]
export default Backgrounds;
