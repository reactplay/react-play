import '../../style/githubActivities.scss'
import TopContributors from "./TopContributors";

const MainGithubDashboard = () => {


  return (
    <div className="grid grid-cols-1   px-4 pt-5 pb-10 ">
      <h1 className="mb-1 col-span-1 text-center md:text-left text-xl font-bold">Github Activities</h1>
      <div className=' headerBreakerLine border-b-4'></div>
      <TopContributors />
    </div>
  );
}
export default MainGithubDashboard;