import { useEffect, useState }  from 'react';
import axios from 'axios';

import Back from '@/components/Button/Back';
import BaseCard from '@/components/Card/BaseCard';
import Create from '@/components/Button/Create';
import Stack from '@mui/material/Stack';


{/* 各CategoryのIndexメインコンポーネント */}
export default function Index(props) {
  const [datas, setDatas] = useState([]);
  
	useEffect(() => {
		axios
			.get(`/api/${props.category}`)
		  .then(response => {
		    setDatas(response.data);
		  })
		  .catch(() => {
		    console.log('通信に失敗しました');
		  });
	},[]);


  return(
  	<div>
  		<Stack direction="row" spacing={3} justifyContent="center">
  			<Back url="/" />
      	<Create url={`/${props.category}/create`} />
      </Stack>
      
      <br />
      
      <BaseCard items={datas} />
    </div>
  );
}
