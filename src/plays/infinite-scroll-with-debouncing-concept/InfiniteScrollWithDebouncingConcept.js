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
        className="text-lg text-cyan-800 box-border flex-wrap w-54 p-4 border-4 rounded-md border-orange-300 overflow-x-auto"
        key={key + '_' + title}
        ref={ref}
      >
        {title}
      </div>
    );
  };

  // Function to fetch the data from api
  const getData = (apiQuery, pageNumber) => {
    return new Promise((resolve, reject) => {
      if (apiQuery) {
        try {
          const promise = fetch(
            'https://openlibrary.org/search.json?' +
              new URLSearchParams({
                q: apiQuery,
                page: pageNumber
              })
          ).then((res) => {
            const data = res.json().then((data) => {
              resolve();
              setData((prevData) => [...prevData, ...data.docs]);
            });
          });
        } catch (err) {
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
              className="border-solid border-2 border-black rounded-md m-2"
              placeholder=" Start typing..."
              type="text"
              value={apiQuery}
              onChange={handleSearchInput}
            />
            {apiQuery !== '' && (
              <InfiniteScroll
                apiQuery={apiQuery}
                getData={getData}
                listData={data}
                renderListItem={renderItem}
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
