import { useEffect, useState, useRef, useTransition } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { FiSearch } from 'react-icons/fi';

// Project local imports
import PlayHeader from 'common/playlists/PlayHeader';
import useFetch from 'common/hooks/useFetch';
import EmojiCard from './components/EmojiCard';
import SkeletonCard from './components/SkeletonCard';
import { API_BASE_URL } from './config';

function Emojipedia(props) {
  // Your Code Start below.
  const [emojisList, setEmojisList] = useState([]);
  const [query, setQuery] = useState('');
  const [isPending, startTransition] = useTransition();
  const inputRef = useRef(null);

  // Fetch all the emojis
  const { data, loading, error } = useFetch(API_BASE_URL);

  const handleEmojiSearch = (e) => setQuery(e.target.value);

  // Copy emoji handler
  const handleCopyEmoji = async (emojiCharacter) => {
    if ('clipboard' in navigator) {
      await navigator.clipboard.writeText(emojiCharacter);
      toast.success(`Emoji ${emojiCharacter} copied to clipboard.`);
    }
  };

  // Search filter
  useEffect(() => {
    const delayFn = setTimeout(() => {
      if (query) {
        startTransition(() => {
          setEmojisList(
            data.filter((emoji) => emoji?.unicodeName?.toLowerCase().includes(query?.toLowerCase()))
          );
        });
      } else {
        setEmojisList(data);
      }
    }, 300);

    return () => clearTimeout(delayFn);
  }, [query, data]);

  useEffect(() => {
    if (error) {
      toast.error('Something went wrong');
    }

    // Set Emoji list
    if (data?.length) {
      setEmojisList(data);
    }

    // Set focus to search field
    inputRef.current.focus();
  }, [data, error]);

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body !p-2 bg-gradient-to-r from-[#0f172a] to-[#1c2d52]">
          {/* Your Code Starts Here */}
          <div className="emojipedia__container max-w-[95%] mx-auto text-center ">
            <div className="max-w-[700px] mx-auto m-5 mb-12 ">
              <div className="w-[100%] mx-auto flex justify-center items-center bg-[#3d4b63] rounded-md px-3 text-gray-300">
                <FiSearch fontSize={22} />
                <input
                  className="w-[100%] !p-3 outline-none !border-0 bg-transparent text-gray-300"
                  placeholder="Search Emoji..."
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={handleEmojiSearch}
                />
              </div>
            </div>

            <div className="text-white grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6">
              {loading
                ? Array.from(Array(25).keys()).map((_, index) => <SkeletonCard key={index} />)
                : isPending
                ? Array.from(Array(25).keys()).map((_, index) => <SkeletonCard key={index} />)
                : emojisList?.map((emoji, index) => (
                    <EmojiCard emoji={emoji} handleCopyEmoji={handleCopyEmoji} key={index} />
                  ))}
            </div>

            {emojisList?.length === 0 &&
              (error ? (
                <div className="mt-20">
                  <p className="mb-3 text-center text-2xl font-semibold text-gray-200">
                    Cannot load emojis, Please try again later...
                  </p>
                </div>
              ) : (
                <div className="mt-20">
                  <p className="mb-3 text-center text-2xl font-semibold text-gray-200">
                    Oops ...! No Emoji Found
                  </p>
                  <span className="text-center text-gray-300">
                    We can't find any emoji matching your search, please try again
                  </span>
                </div>
              ))}

            {/* Toaster to show errors & copied emoji message */}
            <Toaster position="top-center" />
          </div>
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default Emojipedia;
