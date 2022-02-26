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
  
  const onDelete = (id) => {
    axios
      .post(`/api/${props.category}/${id}/delete`)
      .then(response => {
        props.setDatas(response.data);
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
      {props.datas.map((data) => (
        <Grid key={data.id} item xs={10} sm={7} md={5} lg={3}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              width="300"
              image={data.image_path}
              alt={data.name}
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
                    {data.name}
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
                    <Link to={`/scedules/${data.schedule.id}`} style={{ color: 'gray' }}>
                      {data.schedule.title}
                    </Link>
                  </Typography>
                </Grid>
                <Grid item xs={1} sm={1}/>
                <Grid item xs={6} sm={5}>
                  <Typography style={{fontSize: 14}}>
                    <Link to={`/shootings/${data.shooting_date}`} style={{ color: 'black' }}>
                      {data.shooting_date}
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
                  <Link to={`/${props.category}/${data.id}`}>
                    Details
                  </Link>
                </Grid>
                <Grid item xs={2} lg={3} />
                <Grid item xs={3} lg={2}>
                  <Button 
                    variant="contained" 
                    color="primary" 
                    style={{ fontFamily:['Moon Dance', 'Noto Serif JP'] }}
                    onClick={() => onDelete(data.id)}
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
                    to={`/${props.category}/${data.id}/edit`}
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
