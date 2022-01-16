import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Switch } from 'react-router-dom';
import axios from 'axios';
import BaseCard from './BaseCard';
import { theme } from '../../theme'
import { ThemeProvider } from '@mui/material/styles';


function GetLaravelApiIndex() {
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

	return datas;
}

function Index() {
	const laravelApiIndexDatas = GetLaravelApiIndex();
	
	return(
		<ThemeProvider theme={theme}>
			<BaseCard items={laravelApiIndexDatas} />
		</ThemeProvider>
	);
}

if (document.getElementById('index')) {
	ReactDOM.render(
	  <Index />, document.getElementById('index')
	);
}
