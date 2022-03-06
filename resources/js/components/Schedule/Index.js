import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ScheduleIndex from '@/components/Table/ScheduleIndex';


{/* Schedule一覧のメインコンポーネント */}
export default function Index(props) {
  return(
    <Grid container>
      <Grid item xs={1} sm={2} />
      <Grid item xs={10} sm={8}>
        <Box m={2} />
        <h2>スケジュール一覧</h2>
        <Box m={2} />
        <ScheduleIndex />
      </Grid>
    </Grid>
  );
}
