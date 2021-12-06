import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';

export default function Category(props) {
    return (
        <ImageList sx={{ width: 1200, height: 450 }}>
            <ImageListItem>
                <img
                    src='https://couple-memory.s3.ap-northeast-1.amazonaws.com/top-page/travel.jpeg'
                    alt="Travel"
                />
                <ImageListItemBar
                    title="Travel"
                />
            </ImageListItem>
        </ImageList>
    );
}
