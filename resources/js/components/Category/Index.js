import { useEffect, useState }  from 'react';
import axios from 'axios';

import Back from '@/components/Button/Back';
import BaseCard from '@/components/Card/BaseCard';
import Circular from '@/components/Loading/Circular';
import Create from '@/components/Button/Create';
import Stack from '@mui/material/Stack';


{/* 各CategoryのIndexメインコンポーネント */}
export default function Index(props) {
  const [events, setEvents] = useState([]);
  const [eventsFlag, setEventsFlag] = useState(false);
  const [existEventsFlag, setExistEventsFlag] = useState(false);
  
	useEffect(() => {
		axios
			.get(`/api/${props.category}`)
		  .then(response => {
		  	const responseDatas = response.data;
		  	responseDatas.map((data) => (
		  		data.category = props.category
		  	));
		  	setEventsFlag(true);
		  	if (responseDatas.length > 0) {
		  	  setEvents(responseDatas);
		      setExistEventsFlag(true);
		  	} else {
		  		setExistEventsFlag(false);
		  	}
		  })
		  .catch(() => {
		    console.log("通信に失敗しました");
		  });
	}, [props.category, eventsFlag]);


  return(
  	<div>
  		<Stack direction="row" spacing={3} justifyContent="center">
  			<Back url="/" />
      	<Create url={`/${props.category}/create`} />
      </Stack>
      
      <br />
      
      { (existEventsFlag) && <BaseCard events={events} setEventsFlag={setEventsFlag} /> }
      { (!eventsFlag) && <Circular /> }
    </div>
  );
}
