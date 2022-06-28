import PlayHeader from "common/playlists/PlayHeader";
import {useState} from "react";
import axios from "axios";
import {GitHubUserCard} from "./GitHubUserCard";

function GitHubUserSearch(props) {
  // Your Code Start below.
  const [input, setInput] = useState({
    query: "",
    response_size: 30,
  });
  const [resData, setData] = useState({
    data: null,
    remaining_searches: 0,
    time_until_reset: null,
  });
  const [dataFetchStates, setDataFetchStates] = useState({
    loading: false,
    error: false,
  });

  const getResetTime = (time) => {
    const newTime = new Date(time * 1000);
    return newTime.toLocaleTimeString();
  };

  const getRateLimitData = async () => {
    const rate_limit = await axios.get("https://api.github.com/rate_limit");
    const reset_time = getResetTime(rate_limit.data.resources.search.reset);
    const reset_count = rate_limit.data.resources.search.remaining - 1;
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
  };

  const getUsersData = async () => {
    const res = await axios.get(
      `https://api.github.com/search/users?q=${input.query}&per_page=${input.response_size}`
    );
    setData((prev) => ({...prev, data: res.data.items}));
  };

  const getGitHubData = async () => {
    try {
      setDataFetchStates((prev) => ({
        ...prev,
        loading: true,
      }));
      await getRateLimitData();
      await getUsersData();
      setDataFetchStates((prev) => ({
        ...prev,
        loading: false,
      }));
    } catch (error) {
      setDataFetchStates((prev) => ({
        ...prev,
        loading: false,
        error: true,
      }));
      setData((prev) => ({...prev, data: null}));
    }
  };

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}
          <div className=" w-full flex items-center justify-center flex-col gap-4">
            <form
              className="flex flex-col gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="user_name" className="text-center">
                Who are you searching for ?{" "}
              </label>
              <input
                id="user_name"
                className=" rounded-lg p-2 text-center"
                type="search"
                inputMode="text"
                value={input.query}
                placeholder="Enter query here"
                onChange={(e) =>
                  setInput((prev) => ({...prev, query: e.target.value}))
                }
                required
                autoFocus
              />
              <label htmlFor="response_size">
                Maximum number of results you want to see at once:
              </label>
              <input
                id="response_size"
                className=" rounded-lg p-2 text-center"
                type="number"
                inputMode="numeric"
                min="1"
                max="100"
                value={input.response_size}
                onChange={(e) =>
                  setInput((prev) => ({...prev, response_size: e.target.value}))
                }
              />
              <p className="text-xs text-neutral-500 text-center">
                Default value is 30
              </p>
              <button
                type="submit"
                className="bg-[#00f2fe] p-2 rounded-xl disabled:text-gray-500 disabled:cursor-not-allowed disabled:bg-[#00bbc5]"
                onClick={() => {
                  input.query !== "" && getGitHubData();
                }}
              >
                Search
              </button>
            </form>
            {resData.remaining_searches >= 0 && (
              <p>No. of searches remaining : {resData.remaining_searches}</p>
            )}
            {dataFetchStates.loading && <h2> L O A D I N G . . .</h2>}

            <h2 className=" text-red-500">
              {dataFetchStates.error &&
                `You have exhausted your search limit. Try again after ${resData.time_until_reset}`}
            </h2>

            {resData?.data?.length === 0 && (
              <h1 className="text-3xl text-center">
                No matching GitHub User Profile
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
