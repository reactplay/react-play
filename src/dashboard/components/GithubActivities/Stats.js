import { getStats } from "common/services/dashboard/fetch-github-stats";
import { useEffect, useState } from "react";

const dataTransformer = (data) => {
  let transformedData = [
    {
      id: "totalStarsCount",
      title: "Total Stars",
      count: data.stargazers_count,
      svg: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    }, {
      id: "totalForks",
      title: "Total Forks",
      count: data.forks_count,
      svg: <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-10 h-10 bi bi-git" viewBox="0 0 16 16">
        <path d="M15.698 7.287 8.712.302a1.03 1.03 0 0 0-1.457 0l-1.45 1.45 1.84 1.84a1.223 1.223 0 0 1 1.55 1.56l1.773 1.774a1.224 1.224 0 0 1 1.267 2.025 1.226 1.226 0 0 1-2.002-1.334L8.58 5.963v4.353a1.226 1.226 0 1 1-1.008-.036V5.887a1.226 1.226 0 0 1-.666-1.608L5.093 2.465l-4.79 4.79a1.03 1.03 0 0 0 0 1.457l6.986 6.986a1.03 1.03 0 0 0 1.457 0l6.953-6.953a1.031 1.031 0 0 0 0-1.457" />
      </svg>
    }, {
      id: "totalSubscribers",
      title: "Total Subscribers",
      count: data.subscribers_count,
      svg: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>

    }
  ];
  return transformedData;
}

const Stats = ({
  setLoading
}) => {
  const [counts, setCounts] = useState([]);

  useEffect(() => {
    async function getCounts() {
      const res = await getStats();
      localStorage.setItem("open-issue-count", await res.open_issues_count);
      setCounts(dataTransformer(await res));
      setLoading();
    }
    getCounts();
  }, []);

  return (
    <div className=" grid grid-cols-1 md:grid-cols-4 gap-2">
      {
        counts.map((value) => {
          return (
            <div key={value.id} className=" py-1 mt-6 mb-6 rounded col-span-1 statsCard grid grid-cols-3">
              <div className=" col-span-1 flex justify-center items-center">
                {value.svg}
              </div>
              <div className=" col-span-2 flex flex-col">
                <p className=" text-xs">{value.title}</p>
                <p className=" text-lg">{value.count}</p>
              </div>
            </div>
          );
        })
      }
    </div>
  );
}

export default Stats;