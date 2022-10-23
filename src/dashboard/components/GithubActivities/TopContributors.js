import { getContributors } from 'common/services/dashboard/fetch-github-stats';
import { useEffect, useState } from 'react';
import '../../style/githubActivities.scss';

const TopContributors = () => {
  const [topContributors, setTopContributors] = useState([]);

  useEffect(() => {
    async function getTopContributor() {
      const res = await getContributors();
      if (Array.isArray(res)) {
        // console.log("I got a call")
        setTopContributors(res);
      }
    }
    getTopContributor();
  }, []);
  return (
    <>
      <h3
        className="flex  gap-3 col-span-1 text-center md:text-left my-4 text-base">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
        </svg>
        Top 10 Contributors
      </h3>
      <div className=" col-span-1 xs:place-items-center md:place-items-start  grid grid-cols-1 md:grid-cols-4">

        {
          topContributors.map((value, index) => {
            return (
              <div key={value.login} className="col-span-1 rounded-md py-4 bg-blue-100 shadow mb-10 h-28  w-60 px-6 grid grid-cols-3">
                <div className=" col-span-1">
                  <img
                    className=" h-16 w-16 rounded-full"
                    src={value.avatar_url}
                    alt={`${value.login} avatar`} />
                </div>
                <div className="pl-3 col-span-2 pt-3">
                  <p className=" text-sm overflow-hidden text-ellipsis">
                    {value.login.toUpperCase()}
                  </p>
                  <span className="contributionTag rounded-full  px-3 py-1 text-white  text-xs">{value.contributions}</span>
                </div>
              </div>
            );
          })
        }
      </div>
    </>
  );
}
export default TopContributors;