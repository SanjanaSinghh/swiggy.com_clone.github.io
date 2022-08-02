import * as React from 'react';
import Map,{Marker} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN = 'pk.eyJ1IjoiZmFoZHNoYWlraCIsImEiOiJja2gzYzB3a3YwaXlsMnJvaWJ3ZDdiYzBpIn0.EC5-vAFFL-32D0ZCkCkQFg';

function Mapping() {
  return (
    <Map
      initialViewState={{
        latitude: 37.8,
        longitude: -122.4,
        zoom: 14
      }}
      style={{width: 800, height: 600}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={MAPBOX_TOKEN}
    >
      <Marker longitude={-122.4} latitude={37.8} color="red" />
    </Map>
  );
}
export default Mapping;