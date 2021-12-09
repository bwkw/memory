import axios from 'axios';
import Grid from '@mui/material/Grid';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import React from 'react';
import ReactDOM from 'react-dom';

const itemData = [
    {
      img: 'https://couple-memory.s3.ap-northeast-1.amazonaws.com/top-page/travel.jpeg',
      title: 'Travel',
    },
    {
      img: 'https://couple-memory.s3.ap-northeast-1.amazonaws.com/top-page/food.jpeg',
      title: 'Food',
    },
    {
      img: 'https://couple-memory.s3.ap-northeast-1.amazonaws.com/top-page/scenery.jpeg',
      title: 'Scenery',
    },
    {
      img: 'https://couple-memory.s3.ap-northeast-1.amazonaws.com/top-page/dating.png',
      title: 'Dating',
    },
]

export default function Category() {
  return (
    <Grid container rowSpacing={3} columnSpacing={2} justifyContent="center">
      {itemData.map((item) => (
        <Grid item xs={5}>
          <ImageListItem>
            <img
                src={item.img}
                alt={item.title}
            />
            <ImageListItemBar
                title={item.title}
            />
          </ImageListItem>
        </Grid>
      ))}
    </Grid>
  );
}
