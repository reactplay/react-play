// eslint-disable-next-line @typescript-eslint/no-unused-vars
import PlayHeader from 'common/playlists/PlayHeader';
import { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import axios from 'axios';

function UrlShortner(props) {
  // Your Code Start below.
  const [userInput, setUserInput] = useState('');
  const [shortenedLink, setShortenedLink] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await axios(`https://api.shrtco.de/v2/shorten?url=${userInput}`);
      setShortenedLink(response.data.result.full_short_link);
    } catch (e) {
      // eslint-disable-next-line no-console
      // console.log(e);
    }
  };

  return (
    <>
      {/* <PlayHeader play={props} /> */}
      <div className="h-screen flex justify-center items-center ">
        <div className=" text-center">
          <h1 className=" text-2xl font-medium text-blue-500 mb-4">
            React <span className=" text-purple-600 font-bold">URL Shortener</span>
          </h1>
          <div>
            <input
              className="outline-none border-2 border-blue-500 rounded-md backdrop-blur-xl bg-white/20 shadow-md px-3 py-3"
              placeholder="Enter link to be shortened"
              type="text"
              value={userInput}
              onChange={(e) => {
                setUserInput(e.target.value);
              }}
            />
            <button
              class="ms-4 group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow"
              onClick={handleSubmit}
            >
              <div class="absolute inset-0 w-3 bg-[#0087fe] transition-all duration-[250ms] ease-out group-hover:w-full" />
              <span class="relative text-black group-hover:text-white">Shorten This Link</span>
            </button>
          </div>
          <div className="mt-5">
            <div className="relative px-4 py-2 bg-white shadow-lg rounded-xl  bg-clip-padding bg-opacity-60 border border-gray-200 text-slate-500">
              {shortenedLink ? shortenedLink : 'Shorten An URL First'}
            </div>
            <CopyToClipboard text={shortenedLink}>
              <button className="mt-5 border-2 border-blue-500 text-blue-500 font-medium px-5 py-2 ml-4 rounded-md hover:bg-blue-500 hover:text-white">
                Copy URL to Clipboard
              </button>
            </CopyToClipboard>
          </div>
        </div>
      </div>
    </>
  );
}

export default UrlShortner;
