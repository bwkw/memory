import React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


export default function BaseCard(props) {
  return (
    <Grid container direction="row" spacing={4} columns={{ md: 11 }} justifyContent="center" alignItems="center">
      {props.items.map((item) => (
        <Grid item xs={8} md={3}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              width="300"
              image={item.image_path}
              alt={item.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {item.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" href={`/travels/${item.id}`}>Details</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
