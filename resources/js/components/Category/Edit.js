import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import AllForm from '@/components/Form/AllForm';


{/* 各CategoryのEditメインコンポーネント */}
export default function Edit(props) {
  const { id } = useParams();
	const [data, setData] = useState([]);
	const [datasFlag, setDatasFlag] = useState(false);
	
  useEffect(() => {
    axios
      .get(`/api/${props.category}/` + id)
      .then(response => {
        setData(response.data[0]);
        setDatasFlag(true);
      })
      .catch(() => {
        console.log('通信に失敗しました');
      });
	 },[]);
	 
	 
  return(
    <div>
      { datasFlag && <AllForm id={data.id} category={props.category} name={data.name} shooting_date={data.shooting_date} schedule_id={data.schedule_id} /> }
    </div>
  );
}
