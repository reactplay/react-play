import React, { useEffect } from 'react';
import { MapContainer, Popup, TileLayer, useMap, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../styles.css';

import L from 'leaflet';

const customMarker = new L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40]
});

const Map = ({ latitude, longitude, resdata, setlatitude, setlongitude }) => {
  const GetCoordinates = () => {
    const map = useMap();

    useEffect(() => {
      if (!map) return;

      map.on('click', (e) => {
        setlatitude(e.latlng.lat);
        setlongitude(e.latlng.lng);
      });
    }, [map]);

    return null;
  };

  return (
    <div className="travel-advisor-leaflet-cont">
      <MapContainer
        center={[latitude, longitude]}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%' }}
        zoom={13}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {resdata &&
          resdata.data.map((item, i) => {
            const position = [
              Number(item.latitude ? item.latitude : ''),
              Number(item.longitude ? item.longitude : '')
            ];

            return (
              <Marker icon={customMarker} key={i} position={position}>
                <Popup>
                  {item.name}
                  <img src={item.photo ? item.photo.images.medium.url : ''} />
                </Popup>
              </Marker>
            );
          })}

        <GetCoordinates />
      </MapContainer>
    </div>
  );
};

export default Map;
