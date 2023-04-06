import PlayHeader from 'common/playlists/PlayHeader';
import { useEffect, useState } from 'react';
import { getCoordinates, getPlacesData } from './api/travel_api';
import DropDown from './components/DropDown';
import Map from './components/Map';
import Search from './components/Search';
import './styles.css';

// WARNING: Do not change the entry componenet name
function TravelAdvisor(props) {
  // Your Code Start below.
  const [latitude, setlatitude] = useState('');
  const [longitude, setlongitude] = useState('');
  const [resdata, setresdata] = useState();
  const [inputval, setinputval] = useState('');
  const [type, setype] = useState('restaurants');
  const [sumbit, setsumbit] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setlatitude(latitude);
      setlongitude(longitude);
    });
  }, []);

  useEffect(() => {
    getPlacesData(latitude, longitude, type).then((data) => {
      setresdata(data);
    });
  }, [latitude, longitude, type]);

  useEffect(() => {
    getCoordinates(inputval).then((data) => {
      if (data) {
        setlatitude(data[0]?.latitude.toString());
        setlongitude(data[0]?.longitude.toString());
      }
    });
  }, [sumbit]);

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}
          <div className="travel-advisor-main-Contanier">
            <div className="travel-advisor-input-select-cont">
              <Search inputval={inputval} setinputval={setinputval} setsumbit={setsumbit} />
              <DropDown setype={setype} type={type} />
            </div>
            <div className="travel-advisor-map-cont">
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
          </div>
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default TravelAdvisor;
