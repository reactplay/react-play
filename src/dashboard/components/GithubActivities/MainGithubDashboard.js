// import { useEffect } from 'react';
import Loader from 'common/spinner/spinner';
import { useState } from 'react';
import '../../style/githubActivities.scss'
import Stats from './Stats';
import TopContributors from "./TopContributors";

const MainGithubDashboard = () => {
  const [loading, setLoading] = useState(true);
  return (
    <div className="grid grid-cols-1   px-4 pt-5 pb-10 ">
      <h1 className="mb-1 col-span-1 text-center md:text-left text-xl font-bold">Github Activities</h1>
      <div className=' headerBreakerLine border-b-4'></div>
      {
        loading ? (
          <div className=" min-h-screen flex justify-center align-middle ">
            <Loader subtitle={"Cooking up"} />
          </div>) :
          null
      }
      <Stats setLoading={() => setLoading(false)} />
      <TopContributors loading={loading} setLoading={() => setLoading(false)} />
    </div>
  );
}
export default MainGithubDashboard;