import GoogleGeocode from "react-geocode";


export default function Geocode(data) {
  GoogleGeocode.setApiKey(process.env.MIX_GOOGLE_MAP_API_KEY);
  GoogleGeocode.fromAddress(data.name).then(
    response => {
      const location = response.results[0].geometry.location;
      const resLat = location.lat;
      const resLng = location.lng;
      data["lat"] = resLat;
      data["lng"] = resLng;
    },
  );
}
