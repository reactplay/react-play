import PlayHeader from 'common/playlists/PlayHeader';
import './styles.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import InfiniteScroll from './components/InfiniteScroll';

// WARNING: Do not change the entry componenet name
function InfiniteScrollWithDebouncingConcept(props) {
  // Your Code Start below.
  const [apiQuery, setApiQuery] = useState('');
  const [data, setData] = useState([]);
  const handleSearchInput = (e) => {
    setApiQuery(e.target.value);
    if (e.target.value.length === 0) {
      setData([]);
    }
  };
  const renderItem = ({ title, key }, ref) => {
    return (
      <div
        key={key + '_' + title}
        ref={ref}
        className="text-lg text-cyan-800 box-border flex-wrap w-54 p-4 border-4 rounded-md border-orange-300 overflow-x-auto"
      >
        {title}
      </div>
    );
  };

  // Function to fetch the data from api
  const getData = (apiQuery, pageNumber) => {
    return new Promise(async (resolve, reject) => {
      if (apiQuery) {
        try {
          const promise = await fetch(
            'https://openlibrary.org/search.json?' +
              new URLSearchParams({
                q: apiQuery,
                page: pageNumber
              })
          );
          const data = await promise.json();
          resolve();
          setData((prevData) => [...prevData, ...data.docs]);
        } catch (err) {
          console.log('Error fetching data', err);
          reject();
        }
      }
    });
  };
  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}
          <div>
            <h1 className="m-2 text-gray-800 text-lg font-bold">Welcome to Infinite Scrolling</h1>
            <input
              type="text"
              placeholder=" Start typing..."
              value={apiQuery}
              onChange={handleSearchInput}
              className="border-solid border-2 border-black rounded-md m-2"
            />
            {apiQuery !== '' && (
              <InfiniteScroll
                renderListItem={renderItem}
                getData={getData}
                listData={data}
                apiQuery={apiQuery}
              />
            )}
          </div>
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default InfiniteScrollWithDebouncingConcept;
