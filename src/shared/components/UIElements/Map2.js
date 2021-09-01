import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import MAP_STYLE from "./MapStyle";

import "./Map.css";

function Map2(props) {
  const { center, zoom } = props;
  const [viewPort, setViewPort] = useState({
    latitude: center.lat,
    longitude: center.lng,
    zoom: zoom,
    width: "100%",
    height: "100%",
  });

  return (
    <ReactMapGL
      className="map"
      mapboxApiAccessToken={
        "pk.eyJ1IjoibW9oaXQtbmFnYXIiLCJhIjoiY2tzNjI1aTJhMHl6ejJ1cGh6cWlmczVsaCJ9.u8ppHmZaD8zoXBh2S-jj3w"
      }
      mapStyle={MAP_STYLE}
      {...viewPort}
      onViewportChange={(nextViewPort) => setViewPort(nextViewPort)}
    >
      <Marker
        latitude={center.lat}
        longitude={center.lng}
        offsetTop={(-viewPort.zoom * 3) / 2}
      >
        <img
          src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png"
          alt="marker"
          width={viewPort.zoom * 3}
          height={viewPort.zoom * 3}
        />
      </Marker>
    </ReactMapGL>
  );
}

export default Map2;
