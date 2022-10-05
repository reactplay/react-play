// Project local imports
import PlayHeader from "common/playlists/PlayHeader";

import useFetch from "common/hooks/useFetch";
import "./styles.css";
import EmojiCard from "./components/EmojiCard";
import { useEffect, useState } from "react";
import { API_KEY } from "./config";
import { FiSearch } from "react-icons/fi";

const URL = `https://emoji-api.com/emojis?access_key=${API_KEY}`;

function Emojipedia(props) {
  // Your Code Start below.
  const [emojisList, setEmojisList] = useState([]);

  // Fetch all the emojis
  const { data, loading, error } = useFetch(URL);

  useEffect(() => {
    if (data?.length) {
      setEmojisList(data);
    }
  }, [data]);

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body !p-2 bg-gradient-to-r from-[#0f172a] to-[#1c2d52]">
          {/* Your Code Starts Here */}
          <div className="emojipedia__container max-w-[95%] mx-auto text-center ">
            <div className="max-w-[700px] mx-auto m-4  ">
              <div className="w-[95%] flex justify-center items-center bg-[#3d4b63] rounded-md px-3 text-gray-300">
                <FiSearch fontSize={22} />
                <input
                  type="text"
                  placeholder="Search Emoji..."
                  className="w-[100%] !p-3 outline-none !border-0 bg-transparent text-gray-300"
                />
              </div>
            </div>

            <div className="text-white grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {loading ? (
                <p>loading</p>
              ) : emojisList?.length ? (
                emojisList?.map((emoji, index) => (
                  <EmojiCard key={index} emoji={emoji} />
                ))
              ) : (
                <p>
                  Oops..! unable to load the emojis for you, please refresh the
                  page
                </p>
              )}
            </div>
          </div>
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default Emojipedia;
