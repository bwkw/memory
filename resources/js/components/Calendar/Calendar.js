import { useEffect, useState } from 'react';
import axios from 'axios';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

import Grid from '@mui/material/Grid';
import ModalForm from '@/components/Modal/Form';


export default function Calendar() {
  const [events, setEvents] = useState([]);
  const [title, setTitle] = useState();
  const [start, setStart] = useState();
  const [end, setEnd] = useState();
  const [selectFlag, setSelectFlag] = useState(false);
  const [eventFlag, setEventFlag] = useState(false);
  const [inView, setInView] = useState(true);
  
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
    const selectStart = new Date(selectInfo.start);
    const selectEnd = new Date(selectInfo.end);
    setStart(selectStart.getHours());
    setEnd(selectEnd.getHours());
    
    // 登録モーダル表示用にselectFlagをtrueに
    setSelectFlag(true);
    setInView(true);
  };
  
  // カレンダーの予定クリック時のイベント編集フォーム表示
  const handleEvent = (eventInfo) => {
    const event = eventInfo.event;
    console.log(event);
    setTitle(event.title);
    setStart(event.start);
    setEnd(event.end);
    
    // 編集モーダル表示用にeventFlagをtrueに
    setEventFlag(true);
    setInView(true);
  };
  
  return (
    <div>
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
      
      { (selectFlag && inView) && <ModalForm mode="create" start={start} end={end} inView={inView} setInView={setInView} /> }
      { (eventFlag && inView) && <ModalForm mode="edit" title={title} start={start} end={end} inView={inView} setInView={setInView} /> }
    </div>
  );
}
