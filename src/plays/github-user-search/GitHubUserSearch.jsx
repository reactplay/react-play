import {getPlayById} from "meta/play-meta-util";

import PlayHeader from "common/playlists/PlayHeader";
import "./gitHubUserSearch.css";
import {useEffect, useState} from "react";
import axios from "axios";
import {GitHubUserCard} from "./GitHubUserCard";

function GitHubUserSearch(props) {
  // Do not remove the below lines.
  // The following code is to fetch the current play from the URL
  const {id} = props;
  const play = getPlayById(id);

  // Your Code Start below.
  const [query, setQuery] = useState("");
  const [resData, setData] = useState({
    data: null,
    remaining_searches: 0,
    time_until_reset: undefined,
  });
  const [dataFetchStates, setDataFetchStates] = useState({
    loading: false,
    error: false,
  });

  const getResetTime = (time) => {
    const newTime = new Date(time * 1000);
    return newTime.toLocaleTimeString();
  };

  const getUsers = async () => {
    try {
      setDataFetchStates((prev) => ({
        ...prev,
        loading: true,
      }));
      const res = await axios.get(
        `https://api.github.com/search/users?q=${query}&per_page=24`
      );
      setDataFetchStates((prev) => ({
        ...prev,
        loading: false,
      }));
      setData((prev) => ({...prev, data: res.data.items}));
    } catch (error) {
      setDataFetchStates((prev) => ({
        ...prev,
        loading: false,
        error: true,
      }));
      setData((prev) => ({...prev, data: null}));
    }
  };

  useEffect(() => {
    (async function () {
      const rate_limit = await axios.get("https://api.github.com/rate_limit");
      const reset_time = getResetTime(rate_limit.data.resources.search.reset);
      const reset_count = rate_limit.data.resources.search.remaining;
      if (reset_count > 1)
        setDataFetchStates((prev) => ({
          ...prev,
          error: false,
        }));
      setData((prev) => ({
        ...prev,
        remaining_searches: reset_count,
        time_until_reset: reset_time,
      }));
    })();
  }, [query, resData]);

  return (
    <>
      <div className="play-details">
        <PlayHeader play={play} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}
          <div className=" w-full flex items-center justify-center flex-col gap-4">
            <input
              className=" rounded-lg p-2 text-center"
              type="search"
              value={query}
              placeholder="Enter query here"
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              className="bg-[#00f2fe] p-2 rounded-xl disabled:text-gray-500 disabled:cursor-not-allowed disabled:bg-[#00bbc5]"
              onClick={getUsers}
              disabled={query === "" || dataFetchStates.error ? true : false}
            >
              Search
            </button>
            {dataFetchStates.loading && <h2> L O A D I N G . . .</h2>}
            {!resData.remaining_searches < 1 && (
              <p>No. of searches remaining : {resData.remaining_searches}</p>
            )}
            {dataFetchStates.error && (
              <h2>
                You have exhausted your search limit. Try again after{" "}
                {resData.time_until_reset}
              </h2>
            )}
            {resData?.data?.length === 0 && (
              <h1 className="text-3xl text-center">
                No matching GitHub User Profiles
              </h1>
            )}
            {!dataFetchStates.error && (
              <div className="grid gap-2 grid-cols-[repeat(auto-fit,minmax(15rem,1fr))] w-full place-items-center">
                {resData?.data?.map(({id, login, avatar_url, html_url}) => (
                  <GitHubUserCard
                    key={id}
                    username={login}
                    avatar={avatar_url}
                    link={html_url}
                  />
                ))}
              </div>
            )}
          </div>
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default GitHubUserSearch;
