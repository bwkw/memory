import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";


export default function Map(props) {
  const lat = +props.lat;
  const lng = +props.lng;
  const name = props.name;

  const containerStyle = {
    height: "100%",
    width: "100%",
  };

  const center = {
    lat: lat,
    lng: lng,
  };
  
  const markerLabel = {
    color: "black",
    fontFamily: "sans-serif",
    fontSize: "17px",
    fontWeight: "500",
    text: name,
  };
    
  return (
    <LoadScript googleMapsApiKey={ process.env.MIX_GOOGLE_MAP_API_KEY }>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={17}>
        <Marker position={center} label={markerLabel} />
      </GoogleMap>
    </LoadScript>
  );
}
