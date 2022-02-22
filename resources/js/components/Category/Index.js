import { useEffect, useState }  from 'react';
import axios from 'axios';

import Back from '@/components/Button/Back';
import BaseCard from '@/components/Card/BaseCard';
import Create from '@/components/Button/Create';
import Stack from '@mui/material/Stack';


{/* 各CategoryのIndexメインコンポーネント */}
export default function Index(props) {
  const [datas, setDatas] = useState([]);
  const [datasFlag, setDatasFlag] = useState(false);
  
	useEffect(() => {
		axios
			.get(`/api/${props.category}`)
		  .then(response => {
		  	const data = response.data;
		  	if (data.length > 0) {
		  	  setDatas(data);
		      setDatasFlag(true);
		  	} else {
		  		setDatasFlag(false);
		  	}
		  })
		  .catch(() => {
		    console.log("通信に失敗しました");
		  });
	}, [props.category, datasFlag]);


  return(
  	<div>
  		<Stack direction="row" spacing={3} justifyContent="center">
  			<Back url="/" />
      	<Create url={`/${props.category}/create`} />
      </Stack>
      
      <br />
      
      { datasFlag && <BaseCard datas={datas} setDatas={setDatas}/> }
    </div>
  );
}
