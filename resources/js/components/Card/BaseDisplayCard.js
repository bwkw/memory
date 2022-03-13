import { Link } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


export default function BaseDisplayCard(props) {
  
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
                <Grid item xs={6}>
                  <Typography variant="h6" component="div">
                    {data.name}
                  </Typography>
                </Grid>
                <Grid item xs={1}/>
                <Grid item xs={4}>
                  <Typography style={{fontSize: 14}}>
                    <Link to={`/shootings/${data.shooting_date}`} style={{ color: 'black' }}>
                      {data.shooting_date}
                    </Link>
                    に撮影
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}