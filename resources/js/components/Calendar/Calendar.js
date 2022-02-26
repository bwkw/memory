import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

import Grid from '@mui/material/Grid';


export default function Calendar() {
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
          selectable={true}
          businessHours={{
            daysOfWeek: [1, 2, 3, 4, 5],
            startTime: '00:00',
            endTIme: '24:00'
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
        />
      </Grid>
    </Grid>
  );
}
