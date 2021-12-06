import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';

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
        img: 'https://couple-memory.s3.ap-northeast-1.amazonaws.com/top-page/dating.jpeg',
        title: 'Dating',
    },
]

export default function Category(props) {
    return (
        <ImageList xs={{ width: 1200, height: 800 }}>
            {itemData.map((item) => (
                <ImageListItem>
                    <img
                        src={item.img}
                        alt={item.title}
                    />
                    <ImageListItemBar
                        title={item.title}
                    />
                </ImageListItem>
             ))}
        </ImageList>
    );
}
