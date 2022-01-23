import { GoogleMap, LoadScript } from "@react-google-maps/api";


const containerStyle = {
  width: "400px",
  height: "400px",
};


export default function Map(props) {
  const lat = props.lat;
  const lng = props.lng;

  const center = {
    lat: lat,
    lng: lng,
  };

  return (
    <LoadScript googleMapsApiKey={process.env.MIX_GOOGLE_MAP_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={17}
      ></GoogleMap>
    </LoadScript>
  );
}
