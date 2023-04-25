import React from 'react';
import PlayHeader from 'common/playlists/PlayHeader';
import './styles.css';
import { HEADERS, PARAMS } from './utils/constants';
import axios from 'axios';
import CardContainer from './CardContainer';

function VideoPreview(props: any) {
  // Your Code Start below.
  const [searchValue, setSearchValue] = React.useState('');
  const [videos, setVideos] = React.useState([]);

  const getVideos = async (searchValue: string) => {
    const ALL_PARAMS = { q: searchValue, ...PARAMS };
    const OPTIONS = {
      params: ALL_PARAMS,
      headers: HEADERS
    };
    const { data } = await axios.get(process.env.REACT_APP_SEARCH_URL, OPTIONS);

    return data;
  };

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}
          <div>
            <h1>Play Details - Video Preview</h1>
          </div>
          {/* Your Code Ends Here */}
          <div className="flex flex-row justify-center align-middle p-10 relative">
            <input
              className="rounded-r-full p-2 w-[50%]"
              placeholder="Type the name of the video to search..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            {searchValue?.length > 0 && (
              <button
                className="cursor-pointer absolute right-0 w-1/2 mr-14 mt-1.5"
                onClick={() => setSearchValue('')}
              >
                x
              </button>
            )}
            <button
              className="p-2 cursor-pointer z-10"
              disabled={searchValue?.length < 1}
              onClick={async () => {
                const data = await getVideos(searchValue);
                setVideos(data?.contents);
              }}
            >
              🔍
            </button>
          </div>
          <p className="text-center font-bold mb-2">
            Type name of the video you want to search and then hover over the video to see the
            preview
          </p>
          <CardContainer content={videos} />
        </div>
      </div>
    </>
  );
}

export default VideoPreview;
