import React, { useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap  } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = ({ latitude, longitude, resdata, setlatitude, setlongitude }) => {
  const GetCoordinates = () => {
    const map = useMap();

    useEffect(() => {
      if (!map) return;
      const info = L.DomUtil.create('div', 'legend');

      const positon = L.Control.extend({
        options: {
          position: 'bottomleft'
        },

        onAdd: function () {
          return info;
        }
      });

      map.on('click', (e) => {
        setlatitude(e.latlng.lat);
        setlongitude(e.latlng.lng);
      });

      map.addControl(new positon());
    }, [map]);

    return null;
  };

  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {resdata &&
        resdata.data.map((item) => {
          const position = [
            Number(item.latitude ? item.latitude : ''),
            Number(item.longitude ? item.longitude : '')
          ];

          return (
            <Marker position={position}>
              <Popup>
                {item.name}
                <img src={item.photo ? item.photo.images.medium.url : ''} alt="" />
              </Popup>
            </Marker>
          );
        })}

      <GetCoordinates />
    </MapContainer>
  );
};

export default Map;