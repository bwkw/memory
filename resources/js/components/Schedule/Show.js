import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import BaseDisplayCard from '@/components/Card/BaseDisplayCard';
import Circular from '@/components/Loading/Circular';


{/* ScheduleのShowメインコンポーネント */}
export default function Show(props) {
  const { id } = useParams();
	const [datas, setDatas] = useState([]);
	const [datasFlag, setDatasFlag] = useState(false);
  const [existDatasFlag, setExistDatasFlag] = useState(false);
	
  useEffect(() => {
    axios
      .get('/api/schedules/' + id)
      .then(response => {
        const data = response.data;
        console.log(data);
        setDatasFlag(true);
		  	if (data.length > 0) {
		  	  setDatas(data);
		      setExistDatasFlag(true);
		  	} else {
		  		setExistDatasFlag(false);
		  	}
      })
      .catch(() => {
        console.log('通信に失敗しました');
      });
	 },[existDatasFlag]);


  return(
    <div>
    
  		{ (existDatasFlag) && <BaseDisplayCard datas={datas} /> }
      { (!datasFlag) && <Circular /> }
    </div>
	);
}
