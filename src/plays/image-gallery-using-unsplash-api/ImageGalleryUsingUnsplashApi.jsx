import './styles.css';
import axios from 'axios';

import PlayHeader from 'common/playlists/PlayHeader';
import { useState, useEffect } from 'react';
import Photo from './components/Photo';
import SearchBar from './components/searchBar';

function ImageGalleryUsingUnsplashApi(props) {
  // Your Code Start below.
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');

  const clientID = 'client_id=LLC2ARXdcZNo-Hqh5IxJlveXFhOM_C1JfEq2YruC958';

  const URL = 'https://api.unsplash.com/photos';

  const searchURL = 'https://api.unsplash.com/search/photos';

  //  create a function
  //   which will fetch the url of the unsplash api
  //   on success will populate the photos
  async function fetchImages() {
    setLoading(true);

    let url;
    const urlPage = `?page=${page}`;

    const urlQuery = `&query=${query}`;

    if (query) {
      //  //  https://api.unsplash.com/search/photos?page=1&query=office&client_id=LLC2ARXdcZNo-Hqh5IxJlveXFhOM_C1JfEq2YruC958 This is the format for API calling
      url = `${searchURL}${urlPage}${urlQuery}&${clientID}`;
    } else {
      //  https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY
      url = `${URL}/?${clientID}`;
    }

    try {
      // const response = await fetch(url);

      const response = await axios.get(url);
      const data = response.data;

      let tempPhotoArray;
      if (query && page === 1) {
        tempPhotoArray = data.results;
      } else if (query) {
        tempPhotoArray = [...photos, ...data.results];
      } else {
        tempPhotoArray = [...data];
      }

      setPhotos(tempPhotoArray);
      setLoading(false);
    } catch (err) {
      setLoading(false);

      console.warn(err);
    }
  }

  useEffect(() => {
    fetchImages();
  }, [page]);

  const onScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    if (!loading && scrollTop + clientHeight >= scrollHeight - 2) {
      setPage(page + 2);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [photos]);

  function handleFormSubmit(e) {
    //  preventDefault will stop the form from getting submitted over and over again automatically

    e.preventDefault();
    setPage(1);
    fetchImages();
  }

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}
          <div className="unsplash-image-gallery-body">
            <section id="searchBar">
              <SearchBar setQuery={setQuery} onFormSubmit={handleFormSubmit} />
            </section>

            <section className="photoGrid">
              <div className="searchedPhotos">
                {photos.map((image, index) => {
                  return <Photo key={index} {...image} />;
                })}
              </div>
            </section>
          </div>
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default ImageGalleryUsingUnsplashApi;
