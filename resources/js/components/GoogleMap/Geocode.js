import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GoogleGeocode from "react-geocode";


function GetGeocodeName() {
    const id = document.getElementById('test').dataset.id;
	const [name, setName] = useState([]);
	
    useEffect(() => {
      axios
        .get("/api/travels/" + id)
	    .then(response => {
	      setName(response.data.name);
	    })
        .catch(() => {
	      console.log('通信に失敗しました');
        });
	 },[])

	return name
}


export default function Geocode() {
  const name = GetGeocodeName();
  const [lat, setLat] = useState([]);
  const [lng, setLng] = useState([]);
  
  GoogleGeocode.setApiKey(process.env.MIX_GOOGLE_MAP_API_KEY);
    GoogleGeocode.fromAddress(name).then(
      response => {
        const location = response.results[0].geometry.location;
        setLat(location.lat);
        setLng(location.lng);
      },
      error => {
        console.error(error);
      }
    );
  
  return {lat, lng};
}
