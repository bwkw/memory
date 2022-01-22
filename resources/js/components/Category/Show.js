import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';

import { theme } from '@/theme'
import { ThemeProvider } from '@mui/material/styles';
import Map from '@/components/GoogleMap/Map';


{/* 各CategoryのShowメインコンポーネント */}
export default function Show() {
  const { id } = useParams();
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

  return(
		<ThemeProvider theme={theme}>
			<Map lat={data.latitude} lng={data.longitude} />
		</ThemeProvider>
	);
}
