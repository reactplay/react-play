import { useEffect, useState } from "react";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
} from "react-simple-maps";
import mapdata from "./featues.json";
export default function Map({ activeGeo, handleClickMap }) {
  const activeStyle = {
    default: { outline: "none" },
    hover: { outline: "none" },
    pressed: { outline: "none" },
  };
  const defaultStyle = {
    default: { outline: "none" },
    hover: { outline: "none", fill: "#C0C0C0" },
<<<<<<< HEAD
    pressed: { outline: "none" },
  };
  return (
    <>
      <div className="w-full xl:w-[60%] ">
        <ComposableMap width={800} height={600}>
          <Geographies geography={mapdata}>
            {({ geographies }) =>
              geographies.map((geo) => {
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={
                      activeGeo === geo.id.toLowerCase()
                        ? "darkblue"
                        : "lightblue"
                    }
                    onClick={() => handleClickMap(geo)}
                    style={
                      activeGeo === geo.id.toLowerCase()
                        ? activeStyle
                        : defaultStyle
                    }
                  />
                );
              })
            }
          </Geographies>
=======
  };

  return (
    <>
      <div className="w-full xl:w-[60%]  mt-8">
        <ComposableMap width={800} height={600}>
          <ZoomableGroup>
            <Geographies geography={mapdata}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={
                        activeGeo === geo.id.toLowerCase()
                          ? "darkblue"
                          : "lightblue"
                      }
                      onClick={() => handleClickMap(geo)}
                      style={
                        activeGeo === geo.id.toLowerCase()
                          ? activeStyle
                          : defaultStyle
                      }
                    />
                  );
                })
              }
            </Geographies>
          </ZoomableGroup>
>>>>>>> a2622fc (worked on country specific detail)
        </ComposableMap>
      </div>
    </>
  );
}
