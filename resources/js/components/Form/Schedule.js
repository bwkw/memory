import { useContext, useEffect, useState } from 'react';
import { useForm, Controller } from "react-hook-form";
import axios from 'axios';

import Box from '@mui/material/Box';
import { Button } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@material-ui/core/Paper';
import TextField from "@material-ui/core/TextField";
import TableContainer from '@material-ui/core/TableContainer';
import { UserInputData } from "@/components/Form/AllForm";


export default function Schedule(props) {
  const { currentState, setCurrentState } = useContext(UserInputData);
  const { control, formState: { errors }, handleSubmit, register } = useForm({
    defaultValues: {
      schedule_id: currentState ? currentState["schedule_id"] : "",
    },
    mode: "onChange",
  });
  const [schedules, setSchedules] = useState([]);
  
  useEffect(() => {
    axios
      .get("/api/schedules")
      .then(response => {
		  	setSchedules(response.data);
		  })
		  .catch(() => {
		    console.log("通信に失敗しました");
		  });
  }, []);
  
  const onSubmit = (data) => {
    props.handleNext();
    data["id"] = currentState.id;
    data["category"] = currentState.category;
    setCurrentState(data);
  };
  
  
  return (
    <TableContainer component={Paper}>
      <Grid container>
        <Grid item xs={1} sm={2} md={3} />
        <Grid item xs={10} sm={8} md={6}>
          <Box m={5} />
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller                      
              control={control}
              name="schedule_id"
              render={({ field }) => (
                <TextField
                  {...field}
                  id="schedule_id"
                  label="schedule"
                  fullWidth
                  margin="normal"
                  select
                  {...register("schedule_id", {
                    required: { value: true, message: "Please enter a schedule" }
                  })}
                >
                  {schedules.map((schedule) => (
                    <MenuItem key={schedule.id} value={schedule.id}>{schedule.title}</MenuItem>
                  ))}
                </TextField>
              )}
            />
            {errors.schedule_id && <p style={{ color: "red", margin: 0, fontSize: "20px", fontFamily:['Moon Dance', 'Noto Serif JP'] }}>{errors.schedule_id.message}</p>}
    
            <Box
              mt={5}
              mb={5}
            >
              <Button
                variant="contained"
                color="primary"
                type="submit"
                style={{ fontFamily:['Moon Dance', 'Noto Serif JP'] }}
              >
                next
              </Button>
            </Box>
          </form>
        </Grid>
      </Grid>
    </TableContainer>
  );
}
