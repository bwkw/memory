import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ScheduleTable from '@/components/Table/Schedule';


{/* Schedule一覧のメインコンポーネント */}
export default function Index(props) {
  return(
    <Grid container>
      <Grid item xs={1} sm={2} />
      <Grid item xs={10} sm={8}>
        <Box m={2} />
        <ScheduleTable />
      </Grid>
    </Grid>
  );
}
