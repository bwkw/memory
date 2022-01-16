import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { theme } from '../../theme'
import { ThemeProvider } from '@mui/material/styles';
import Map from '../GoogleMap/Map';


function GetLaravelApiShow() {
  const id = document.getElementById('travel_show').dataset.id;
	const [data, setData] = useState([]);
	
  useEffect(() => {
    axios
      .get("/api/travels/" + id)
    .then(response => {
      setData(response.data);
    })
      .catch(() => {
      console.log('通信に失敗しました');
      });
	 },[])

	return data
}


function Show() {
  const data = GetLaravelApiShow();
  
  return(
		<ThemeProvider theme={theme}>
			<Map lat={data.latitude} lng={data.longitude} />
		</ThemeProvider>
	);
}

if (document.getElementById('travel_show')) {
	ReactDOM.render(
	  <Show />, document.getElementById('travel_show')
	);
}