import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Circular from '@/components/Loading/Circular';
import Grid from '@mui/material/Grid';
import Map from '@/components/GoogleMap/Map';
import Typography from '@mui/material/Typography';


{/* 各CategoryのShowメインコンポーネント */}
export default function Show(props) {
  const { id } = useParams();
	const [data, setData] = useState([]);
	const [dataFlag, setDataFlag] = useState(false);
	
  useEffect(() => {
    axios
      .get(`/api/${props.category}/` + id)
      .then(response => {
        setData(response.data[0]);
        setDataFlag(true);
      })
      .catch(() => {
        console.log('通信に失敗しました');
      });
	},[]);
  
  const Title = styled.h2`
    font-size: ${(props) => props.fs};
    font-weight: bold;
    text-align: center;
    color: ${(props) => props.c};
  `;
  

  return(
    <div>
      {dataFlag ? (
        <Grid
          item
          container
          columns={{ xs: 18 }}
          justifyContent="center"
        >
          <Grid item xs={16}>
            <Title>{data.name}</Title>
            <Grid
              item
              container
              columns={{ xs: 10 }}
              justifyContent="center"
            >
              <Card sx={{ height: '70vh', width: '60vh' }}>
                <CardMedia
                  component="img"
                  height="60%"
                  image={data.image_path}
                  alt={data.name}
                />
                <Card sx={{ display: 'flex', height: '28vh', width: '100%' }}>
                  <Map name={data.name} lat={data.latitude} lng={data.longitude} />
                  <Grid
                    item
                    container
                    columns={{ xs: 10 }}
                    direction="row"
                    alignItems="center"
                  >
                    <Grid item xs={2} />
                    <Grid item xs={6}>
                      <Typography variant="h6" component="div">
                        <Link to={`/${props.category}`} style={{ color: 'black' }}>
                          カテゴリ: {props.category}
                        </Link>
                      </Typography>
                      <br />
                      {data.schedule && (
                        <Link to={`/schedules/${data.schedule.id}`} style={{ color: 'gray' }}>
                          {data.schedule.title}
                        </Link>
                      )}
                      <br />
                      <Typography style={{fontSize: 12}}>
                        <Link to={`/shootings/${data.shooting_date}`} style={{ color: 'black' }}>
                          {data.shooting_date}
                        </Link>
                        に撮影
                      </Typography>
                    </Grid>
                  </Grid>
                </Card>
              </Card>
            </Grid>
          </Grid>
      	</Grid>
      ) : (
        <Circular />
      )}
    </div>
	);
}
