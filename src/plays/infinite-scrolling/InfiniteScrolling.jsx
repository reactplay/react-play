import { useEffect, useState } from 'react';
import PlayHeader from 'common/playlists/PlayHeader';
import './styles.css';
import Posts from './Posts';

function InfiniteScrolling(props) {
  const [posts, setPosts] = useState([]);

  const fectPost = async () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((res) => res.json())
      .then((data) => setPosts(data));
  };
  useEffect(() => {
    fectPost();
  }, []);

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}
          <Posts posts={posts} />
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default InfiniteScrolling;
