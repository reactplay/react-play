import PlayHeader from 'common/playlists/PlayHeader';
import './styles.css';
import React, { useState } from 'react';
import InfiniteScroll from './components/InfiniteScroll';

// WARNING: Do not change the entry componenet name
function InfiniteScrollWithDebouncingConcept(props) {
  // Your Code Start below.
  const [apiQuery, setApiQuery] = useState('');
  const [data, setData] = useState([]);
  const [noData, setNoData] = useState(false);
  const handleSearchInput = (e) => {
    setData([]);
    setNoData(false);
    setApiQuery(e.target.value);
    if (e.target.value.length === 0) {
      setData([]);
    }
  };
  const renderItem = ({ title, key }, ref) => {
    return (
      <div
        className="text-sm text-cyan-800 box-border flex-wrap p-4 border-4 rounded-md border-orange-300 break-words"
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
              if (data.docs.length === 0) {
                setNoData(true);
              }
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
          {/* Your Code Starts Here - Infinity Scroll */}
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
                noData={noData}
                renderListItem={renderItem}
              />
            )}
          </div>
          {/* Your Code Ends Here - Infinity Scroll */}
        </div>
      </div>
    </>
  );
}

export default InfiniteScrollWithDebouncingConcept;
