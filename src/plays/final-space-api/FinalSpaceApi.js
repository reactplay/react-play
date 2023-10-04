import PlayHeader from 'common/playlists/PlayHeader';
import './styles.css';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import CardGrid from './components/CardGrid';
import axios from 'axios';

// WARNING: Do not change the entry componenet name
function FinalSpaceApi(props) {
  // Your Code Start below.
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://finalspaceapi.com/api/v0/character/`);
      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, []);

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}
          <div className="container">
            <Header />
            <CardGrid isLoading={isLoading} items={items} />
          </div>
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default FinalSpaceApi;
