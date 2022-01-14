import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Switch } from 'react-router-dom';
import axios from 'axios';
import BaseCard from './BaseCard';
import { theme } from '../../theme'
import { ThemeProvider } from '@mui/material/styles';


function GetLaravelApi() {
	const [datas, setDatas] = useState([]);
	
	useEffect(() => {
		axios
			.get('/api/travels')
		  .then(response => {
		      setDatas(response.data);     
		      console.log(response.data);　
		  })
		  .catch(() => {
		      console.log('通信に失敗しました');
		  });
	},[])

	return datas
}

export default function LaravelApiCard() {
	const laravelApiDatas = GetLaravelApi();
	
	return(
		<ThemeProvider theme={theme}>
			<BaseCard items={laravelApiDatas} />
		</ThemeProvider>
	);
}

if (document.getElementById('index_card')) {
	ReactDOM.render(
	  <LaravelApiCard />, document.getElementById('index_card')
	);
}
