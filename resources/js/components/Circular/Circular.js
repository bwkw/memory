import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';


export default function Circular() {
  return (
    <Grid container direction="row" justifyContent="center">
      <CircularProgress color="inherit" size="300px" />
    </Grid>
  );
}
