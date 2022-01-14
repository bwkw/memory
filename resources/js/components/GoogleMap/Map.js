import { GoogleMap, LoadScript } from "@react-google-maps/api";
import ReactDOM from 'react-dom';

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: 35.69575,
  lng: 139.77521,
};

export const Map = () => {
  return (
    <LoadScript googleMapsApiKey={process.env.MIX_GOOGLE_MAP_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={17}
      ></GoogleMap>
    </LoadScript>
  );
};

if (document.getElementById('test')) {
	ReactDOM.render(
	  <Map />, document.getElementById('test')
	);
}
