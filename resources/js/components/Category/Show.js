import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Map from '@/components/GoogleMap/Map';


{/* 各CategoryのShowメインコンポーネント */}
export default function Show(props) {
  const { id } = useParams();
	const [data, setData] = useState([]);
	
  useEffect(() => {
    axios
      .get(`/api/${props.category}/` + id)
      .then(response => {
        setData(response.data);
      })
      .catch(() => {
        console.log('通信に失敗しました');
      });
	 },[]);


  return(
		<Map name={data.name} lat={data.latitude} lng={data.longitude} />
	);
}
