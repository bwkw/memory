import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import BaseCard from '@/components/Card/BaseCard';
import Box from '@mui/material/Box';
import Circular from '@/components/Loading/Circular';


{/* ScheduleのShowメインコンポーネント */}
export default function Show(props) {
  const { id } = useParams();
  const [schedule, setSchedule] = useState([]);
	const [events, setEvents] = useState([]);
	const [eventsFlag, setEventsFlag] = useState(false);
  const [existEventsFlag, setExistEventsFlag] = useState(false);
	
  useEffect(() => {
    axios
      .get('/api/schedules/' + id)
      .then(response => {
        const responseSchedule = response.data.schedule;
        responseSchedule.start = responseSchedule.start.match(/\d{2}-\d{2}-\d{2}/)[0];
        responseSchedule.end = responseSchedule.end.match(/\d{2}-\d{2}-\d{2}/)[0];
        const responseEvents = response.data.events;
        
        setSchedule(responseSchedule);
        setEventsFlag(true);
		  	if (responseEvents) {
		  	  setEvents(responseEvents);
		      setExistEventsFlag(true);
		  	} else {
		  		setExistEventsFlag(false);
		  	}
      })
      .catch(() => {
        console.log('通信に失敗しました');
      });
	 },[eventsFlag]);


  return(
    <div>
  		{ (existEventsFlag) &&
  		  <div>
    		  <h1 style={{ textAlign: 'center' }}>{ schedule.title }</h1>
          <p style={{ textAlign: 'center' }}>（{ schedule.start } - { schedule.end }）</p>
          <Box
            m={3}
          />
          <BaseCard events={events} setEventsFlag={setEventsFlag} /> 
  		  </div>
  		}
      { (!eventsFlag) && <Circular /> }
    </div>
	);
}
