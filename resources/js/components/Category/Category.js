import React from 'react';
import { Link } from 'react-router-dom';

import ButtonBase from '@mui/material/ButtonBase';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';


const items = [
    {
      img_url: 'https://couple-memory.s3.ap-northeast-1.amazonaws.com/top-page/travels/travel.jpeg',
      img_title: 'Travel',
      img_width: '100%',
      onclick_url: '/travels'
    },
    {
      img_url: 'https://couple-memory.s3.ap-northeast-1.amazonaws.com/top-page/foods/food.jpeg',
      img_title: 'Food',
      img_width: '100%',
      onclick_url: '/foods'
    },
    {
      img_url: 'https://couple-memory.s3.ap-northeast-1.amazonaws.com/top-page/sceneries/scenery.jpeg',
      img_title: 'Scenery',
      img_width: '100%',
      onclick_url: '/sceneries'
    },
    {
      img_url: 'https://couple-memory.s3.ap-northeast-1.amazonaws.com/top-page/datings/dating.png',
      img_title: 'Dating',
      img_width: '100%',
      onclick_url: '/datings'
    },
];

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
      {items.map((item) => (
        <React.Fragment key={item.id}>
          <Grid item xs={8} md={5}>
            <ImageButton
              focusRipple
              style={{
                width: item.img_width,
              }}
            >
              <ImageSrc style={{ backgroundImage: `url(${item.img_url})` }} />
              <ImageBackdrop className="MuiImageBackdrop-root" />
              <Image>
                <Link to={ item.onclick_url } style={{ color: '#FFF' }}>
                  <Typography
                    component="div"
                    variant="subtitle1"
                    color="inherit"
                    sx={{
                      position: 'relative',
                      p: 4,
                      pt: 2,
                      pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                    }}
                  >
                    {item.img_title}
                    <ImageMarked className="MuiImageMarked-root" />
                  </Typography>
                </Link>
              </Image>
            </ImageButton>
          </Grid>
        </React.Fragment>
      ))}
    </Grid>
  );
}
