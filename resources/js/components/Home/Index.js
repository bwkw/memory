import React from 'react';
import ReactDOM from 'react-dom';
import Category from '../Category/Category';
import { theme } from '@/theme'
import { ThemeProvider } from '@mui/material/styles';


function Index() {
  return (
    <ThemeProvider theme={theme}>
      <Category />
    </ThemeProvider>
  );
}


if (document.getElementById('home_index')) {
  ReactDOM.render(
    <Index />, document.getElementById('home_index')
  );
}
