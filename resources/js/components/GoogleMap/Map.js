import { GoogleMap, LoadScript } from "@react-google-maps/api";
import ReactDOM from 'react-dom';
import Geocode from './Geocode';


const containerStyle = {
  width: "400px",
  height: "400px",
};


export const Map = () => {
  const {lat, lng} = Geocode();

  const center = {
    lat: lat,
    lng: lng,
  }

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
