import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily: [
      'Moon Dance',
      'Noto Serif JP'
    ].join(","),
    fontSize: 18
  },
  palette: {
    primary: {
      main: "#263238"
    },
    secondary: {
      main: "#546e7a"
    }
  }
});
