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
  const [id, setId] = useState();
  const [title, setTitle] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [selectFlag, setSelectFlag] = useState(false);
  const [eventFlag, setEventFlag] = useState(false);
  const [saveFlag, setSaveFlag] = useState(false);
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
  }, [saveFlag]);
  
  // 日付成形用メソッド
  const moldDateTime = (dateTime) => {
    // 1桁の数字の前に0を付与
    const getdoubleDigestNumer = (number) => {
      return ("0" + number).slice(-2);
    };
    
    const dateTimeYear = dateTime.getFullYear();
    const dateTimeMonth = getdoubleDigestNumer(dateTime.getMonth()+1);
    const dateTimeDate = getdoubleDigestNumer(dateTime.getDate());
    const dateTimeHour = getdoubleDigestNumer(dateTime.getHours());
    const dateTimeMinutes = getdoubleDigestNumer(dateTime.getMinutes());
    const moldedDateTime = `${dateTimeYear}-${dateTimeMonth}-${dateTimeDate}T${dateTimeHour}:${dateTimeMinutes}:00`;
    
    return moldedDateTime;
  };
  
  // カレンダーの空欄クリック時のイベント登録フォーム表示
  const handleSelect = (selectInfo) => {
    const selectStart = new Date(selectInfo.start);
    const selectEnd = new Date(selectInfo.end);
    setStart(moldDateTime((selectStart)));
    setEnd(moldDateTime((selectEnd)));
    
    // 登録モーダル表示用にselectFlagをtrueに
    setSelectFlag(true);
    setInView(true);
  };
  
  // カレンダーの予定クリック時のイベント編集フォーム表示
  const handleEvent = (eventInfo) => {
    const event = eventInfo.event;
    setId(event.id);
    setTitle(event.title);
    setStart(moldDateTime(event.start));
    setEnd(moldDateTime(event.end));
    
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
      
      { (selectFlag && inView) && <ModalForm mode="create" title={title} start={start} end={end} inView={inView} setInView={setInView} setSaveFlag={setSaveFlag} /> }
      { (eventFlag && inView) && <ModalForm mode="edit" id={id} title={title} start={start} end={end} inView={inView} setInView={setInView} setSaveFlag={setSaveFlag} /> }
    </div>
  );
}
