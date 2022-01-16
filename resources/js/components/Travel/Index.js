import React from 'react';
import ReactDOM from 'react-dom';
import BaseCard from '@/components/Card/BaseCard';
import Create from '@/components/Button/Create';
import GetLaravelApiIndex from '@/components/Card/SwitchCard';
import { theme } from '@/theme'
import { ThemeProvider } from '@mui/material/styles';


function Index() {
  const laravelApiIndexDatas = GetLaravelApiIndex();

  return(
    <ThemeProvider theme={theme}>
      <Create />
	  <BaseCard items={laravelApiIndexDatas} />
    </ThemeProvider>
  );
}

if (document.getElementById('index')) {
  ReactDOM.render(
    <Index />, document.getElementById('index')
  );
}
