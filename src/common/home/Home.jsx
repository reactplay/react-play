import "./home.css";

// sections
import SectionLanding from "./sections/landing";
import ExtendedFooter from "common/footer/ExtendedFooter";
import SectionFeatures from "./sections/features";
import SectionPlayground from "./sections/playground";
import SectionTweets from "./sections/tweets";
import SectionContributors from "./sections/contributors";

const Home = () => {
  return (
    <main>
      <SectionLanding />
      <SectionFeatures />
      <SectionPlayground />
      <SectionTweets />
      <SectionContributors />
      <ExtendedFooter />
    </main>
  )
};

export default Home;
