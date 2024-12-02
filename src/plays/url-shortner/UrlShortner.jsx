import PlayHeader from 'common/playlists/PlayHeader';
import { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

function UrlShortner(props) {
  // Your Code Start below.
  const [userInput, setUserInput] = useState('');
  const [shortenedLink, setShortenedLink] = useState('');
  const [error, setError] = useState(null);
  const handleSubmit = async () => {
    try {
      if (!userInput.trim()) {
        toast('Please enter a valid URL.', {
          position: 'top-center',
          type: 'error',
          autoClose: 1500
        });

        return;
      }
      setShortenedLink('');
      const response = await axios.get(`https://tinyurl.com/api-create.php?url=${userInput}`);
      if (response.data) {
        toast('URL Shortened successfully!', {
          position: 'top-center',
          type: 'success',
          autoClose: 1500
        });
        setShortenedLink(response.data);
        setError(null);
      } else {
        setError(response.data.error);
        setShortenedLink(null);
      }
    } catch (e) {
      setError('An error occurred. Please try again later.');
      setShortenedLink(null);
    }
  };
  const copyTextToClipboard = (text) => {
    const textarea = document.createElement('textarea');
    textarea.value = text;

    document.body.appendChild(textarea);

    textarea.select();

    try {
      document.execCommand('copy');
      toast('Link Copied To Clipboard', {
        position: 'top-center',
        type: 'success',
        autoClose: 2000
      });
    } catch (err) {
      setError('Failed to copy text: ', err);
    } finally {
      document.body.removeChild(textarea);
    }
  };

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          <ToastContainer />
          <div className="h-screen flex justify-center items-center ">
            <div className=" text-center">
              <h1 className=" text-2xl font-medium text-blue-500 mb-4">
                React <span className=" text-purple-600 font-bold">URL Shortener</span>
              </h1>
              <div className="w-full flex flex-col max-w-md mx-auto items-center">
                <input
                  required
                  className="outline-none border-2 border-blue-500 rounded-md backdrop-blur-xl bg-white/20 shadow-md px-3 py-2.5 leading-[1.5] placeholder:text-gray-400 w-full"
                  placeholder="Enter link to be shortened"
                  type="text"
                  value={userInput}
                  onChange={(e) => {
                    setUserInput(e.target.value);
                  }}
                />
                <button
                  class="ms-4 group mt-4 relative h-12 px-6 overflow-hidden rounded-lg bg-white text-lg shadow"
                  onClick={handleSubmit}
                >
                  <div class="absolute inset-0 w-3 bg-[#0087fe] transition-all duration-[250ms] ease-out group-hover:w-full" />
                  <span class="relative text-black group-hover:text-white">Short URL</span>
                </button>
              </div>
              {error && <div className="text-red-500 mt-5">{error}</div>}
              {shortenedLink && (
                <div className="mt-5">
                  <p>Here's your shortened URL:</p>

                  <div className="flex justify-center items-center">
                    <div className="relative px-4 py-2 bg-white shadow-lg rounded-xl  bg-clip-padding bg-opacity-60 border border-gray-200 text-slate-500">
                      {shortenedLink ? shortenedLink : 'Shorten An URL First'}
                    </div>
                    <button
                      className="border-2 px-5 py-2 ml-4 rounded-md font-medium 'border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white cursor-pointer"
                      disabled={!shortenedLink}
                      onClick={() => copyTextToClipboard(shortenedLink)}
                    >
                      Copy
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UrlShortner;
