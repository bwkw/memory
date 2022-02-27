import { useEffect, useState } from 'react';
import axios from 'axios';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

import Grid from '@mui/material/Grid';


export default function Calendar() {
  const [events, setEvents] = useState([]);
  
  useEffect(() => {
    axios
      .get("/api/schedules")
      .then(response => {
		  	const data = response.data;
	  	  setEvents(data);
		  })
		  .catch(() => {
		    console.log("通信に失敗しました");
		  });
  }, []);
  
  // カレンダーの空欄クリック時のイベント登録フォーム表示
  const handleSelect = (selectInfo) => {
    const start = new Date(selectInfo.start);
    const end = new Date(selectInfo.end);
    start.setHours(start.getHours());
    end.setHours(end.getHours());
    
    // 登録モーダル表示

  };
  
  // カレンダーの予定クリック時のイベント編集フォーム表示
  const handleEvent = (eventInfo) => {
    const event = eventInfo.event;
    const title = event.title
    const start = event.start
    const end = event.end
    
    // 編集モーダル表示
  };
  
  return (
    <Grid
      item
      container
      columns={{ xs: 12 }}
      justifyContent="center"
    >
      <Grid item xs={10}>
        <FullCalendar
          locale="ja"
          plugins={[timeGridPlugin, dayGridPlugin, interactionPlugin]}
          initialView="timeGridWeek"
          slotDuration="00:30:00"
          allDaySlot={true}
          businessHours={{
            daysOfWeek: [1, 2, 3, 4, 5],
            startTime: '00:00',
            endTime: '24:00'
          }} 
          weekends={true}
          titleFormat={{
            year: 'numeric',
            month: 'short'
          }}
          headerToolbar={{
            start: 'title',
            center: 'prev next today',
            end: 'dayGridMonth timeGridWeek'
          }}
          selectable={true}
          select={handleSelect}
          events={events}
          eventClick={handleEvent}
        />
      </Grid>
    </Grid>
  );
}
