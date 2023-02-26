import React, { useEffect } from 'react';
import { MapContainer, Popup, TileLayer, useMap, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

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
            <Marker key={i} position={position}>
              <Popup>
                {item.name}
                <img src={item.photo ? item.photo.images.medium.url : ''} />
              </Popup>
            </Marker>
          );
        })}

      <GetCoordinates />
    </MapContainer>
  );
};

export default Map;
