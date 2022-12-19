import { useContext } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import mapdata from './featues.json';
import { GeoContext } from './Context';

export default function Map() {
  const { activeGeo, handleClickMap } = useContext(GeoContext);

  const activeStyle = {
    default: { outline: 'none' },
    hover: { outline: 'none' },
    pressed: { outline: 'none' }
  };
  const defaultStyle = {
    default: { outline: 'none' },
    hover: { outline: 'none', fill: '#C0C0C0' },
    pressed: { outline: 'none' }
  };

  return (
    <>
      <div className="w-full xl:w-[60%] ">
        <ComposableMap height={550} width={800}>
          <Geographies geography={mapdata}>
            {({ geographies }) =>
              geographies.map((geo) => {
                return (
                  <Geography
                    fill={
                      activeGeo.toLowerCase() === geo.id.toLowerCase() ? 'darkblue' : 'lightblue'
                    }
                    geography={geo}
                    key={geo.rsmKey}
                    style={activeGeo === geo.id.toLowerCase() ? activeStyle : defaultStyle}
                    tabIndex="-1"
                    onClick={() => handleClickMap(geo)}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>
      </div>
    </>
  );
}
