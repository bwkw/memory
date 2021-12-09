import React from 'react';
import ReactDOM from 'react-dom';
import { styled } from '@mui/material/styles';
import axios from 'axios';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


const images = [
    {
<<<<<<< HEAD
      url: 'https://couple-memory.s3.ap-northeast-1.amazonaws.com/top-page/travel.jpeg',
      title: 'Travel',
      width: '100%',
    },
    {
      url: 'https://couple-memory.s3.ap-northeast-1.amazonaws.com/top-page/food.jpeg',
      title: 'Food',
      width: '100%',
    },
    {
      url: 'https://couple-memory.s3.ap-northeast-1.amazonaws.com/top-page/scenery.jpeg',
      title: 'Scenery',
      width: '100%',
    },
    {
      url: 'https://couple-memory.s3.ap-northeast-1.amazonaws.com/top-page/dating.png',
      title: 'Dating',
      width: '100%',
=======
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
>>>>>>> 7f3150e5a754cc9170625e59bc6ca4addaf9cc5e
    },
]

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 300,
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

export default function Category() {
  return (

    <Grid container rowSpacing={2} columnSpacing={4} justifyContent="center">
      {images.map((image) => (
      <Grid item xs={8} md={5}>
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      </Grid>
      ))}
    </Grid>
  );
}
