import { Link } from 'react-router-dom';
import axios from 'axios';

import { Button } from "@material-ui/core";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


export default function BaseCard(props) {
  
  const onDelete = (category, id) => {
    axios
      .post(`/api/${category}/${id}/delete`)
      .then(response => {
        props.setEventsFlag(false);
      })
      .catch(() => {
        console.log('通信に失敗しました');
      });
	};
	
	
  return (
    <Grid
      item
      container
      columns={{ xs: 12, sm: 12, md: 12, lg: 11 }}
      direction="row"
      spacing={4}
      justifyContent="center"
    >
      {props.events.map((event) => (
        <Grid key={`${event.category}-${event.id}`} item xs={10} sm={7} md={5} lg={3}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              width="300"
              image={event.image_path}
              alt={event.name}
            />
            <CardContent>
              <Grid
                item
                container
                columns={{ xs: 12 }}
                direction="row"
                alignItems="center"
              >
                <Grid item xs={1} />
                <Grid item xs={10}>
                  <Typography variant="h6" component="div">
                    {event.name}
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                item
                container
                columns={{ xs: 12, sm: 10 }}
                direction="row"
                alignItems="center"
                mt={1}
              >
                <Grid item xs={1} sm={1} />
                <Grid item xs={4} sm={3}>
                  <Typography style={{fontSize: 16}}>
                    {event.schedule ? (
                      <Link to={`/schedules/${event.schedule.id}`} style={{ color: 'gray' }}>
                        {event.schedule.title}
                      </Link>
                    ) : (
                      <Link to={`/${event.category}`} style={{ color: 'gray' }}>
                        {event.category}
                      </Link>
                    )}
                  </Typography>
                </Grid>
                <Grid item xs={1} sm={1}/>
                <Grid item xs={6} sm={5}>
                  <Typography style={{fontSize: 12}}>
                    <Link to={`/shootings/${event.shooting_date}`} style={{ color: 'black' }}>
                      {event.shooting_date}
                    </Link>
                    に撮影
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
            <CardActions>
              <Grid
                item
                container
                columns={{ xs: 12, lg: 12 }}
                direction="row"
                alignItems="center"
              >
                <Grid item xs={1} />
                <Grid item xs={1}>
                  <Link to={`/${event.category}/${event.id}`}>
                    Details
                  </Link>
                </Grid>
                <Grid item xs={2} lg={3} />
                <Grid item xs={3} lg={2}>
                  <Button 
                    variant="contained" 
                    color="primary" 
                    style={{ fontFamily:['Moon Dance', 'Noto Serif JP'] }}
                    onClick={() => onDelete(event.category, event.id)}
                  >
                    Delete
                  </Button>
                </Grid>
                <Grid item xs={1} lg={2} />
                <Grid item xs={3} lg={2}>
                  <Button 
                    variant="contained" 
                    color="secondary" 
                    style={{ fontFamily:['Moon Dance', 'Noto Serif JP'] }}
                    component={Link}
                    to={`/${event.category}/${event.id}/edit`}
                  >
                    Edit
                  </Button>
                </Grid>
                <Grid item xs={1} />
              </Grid>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
