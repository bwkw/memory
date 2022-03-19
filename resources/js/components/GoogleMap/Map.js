import { GoogleMap, LoadScript } from "@react-google-maps/api";


export default function Map(props) {
  const lat = +props.lat;
  const lng = +props.lng;

  const containerStyle = {
    height: "100%",
    width: "100%",
  };

  const center = {
    lat: lat,
    lng: lng,
  };
  
  
    
  return (
    <LoadScript googleMapsApiKey={ process.env.MIX_GOOGLE_MAP_API_KEY }>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={17}>
      </GoogleMap>
    </LoadScript>
  );
}
