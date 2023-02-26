import { input } from '@tensorflow/tfjs';
import PlayHeader from 'common/playlists/PlayHeader';
import { useEffect, useState } from 'react';
import { getCoordinates, getPlacesData } from './api/travel_api';
import Map from './components/Map';
import Search from './components/Search';
import './styles.css';

// WARNING: Do not change the entry componenet name
function TravelAdvisor(props) {
  // Your Code Start below.
  const [latitude, setlatitude] = useState();
  const [longitude, setlongitude] = useState();
  const [resdata, setresdata] = useState();
  const [inputval, setinputval] = useState();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setlatitude(latitude);
      setlongitude(longitude);
    });
  }, []);

  useEffect(() => {
    getPlacesData(latitude, longitude).then((data) => {
      setresdata(data);
    });
  }, [latitude, longitude]);

  useEffect(() => {
    getCoordinates(inputval).then((data) => {
      console.log(data);
      setlatitude(data.data[0].lat);
      setlongitude(data.data[0].lon);
    });
  }, [inputval]);

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}
          <div className="Main-Contanier">
            <Search inputval={inputval} setinputval={setinputval} />
            {resdata && (
              <Map
                latitude={latitude}
                longitude={longitude}
                resdata={resdata}
                setlatitude={setlatitude}
                setlongitude={setlongitude}
              />
            )}
          </div>
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default TravelAdvisor;
