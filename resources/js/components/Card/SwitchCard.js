import React, { useState, useEffect } from 'react';
import { Switch } from 'react-router-dom';
import axios from 'axios';


export default function GetLaravelApiIndex() {
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
