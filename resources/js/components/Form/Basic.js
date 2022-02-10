import {useContext} from 'react';
import { useForm, Controller } from "react-hook-form";

import Box from '@mui/material/Box';
import { Button } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from "@material-ui/core/TextField";
import TableContainer from '@material-ui/core/TableContainer';
import { UserInputData } from "@/components/Form/AllForm";


export default function Basic(props) {
  const { currentState, setCurrentState } = useContext(UserInputData);
  const { control, formState: { errors }, handleSubmit, register } = useForm({
    defaultValues: {
      shooting_date: currentState ? currentState["shooting_date"] : "",
      name: currentState ? currentState["name"] : "",
      image: "",
    },
    mode: "onChange",
  });
  const onSubmit = (data) => {
    props.handleNext();
    setCurrentState(data);
  };
  
  return (
    <TableContainer component={Paper}>
      <Grid container>
        <Grid xs={1} sm={2} />
        <Grid xs={10} sm={8}>
          <Box m={5} />
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller                      
              control={control}
              name="shooting_date"
              render={({ field }) => (
                <TextField
                  {...field}
                  id="shooting_date"
                  label="shooting_date"
                  type="date"
                  inputProps={{ style: {fontSize: "20px", fontFamily:['Moon Dance', 'Noto Serif JP']} }}  
                  InputLabelProps={{ 
                    style: {fontSize: "20px", fontFamily:['Moon Dance', 'Noto Serif JP']},
                    shrink:true,
                  }}
                  sx={{ width: 220 }}
                  {...register("shooting_date", {
                    required: { value: true, message: "Please enter a shooting_date" }
                  })}
                />
              )}
            />
            {errors.shooting_date && <p style={{ color: "red", fontSize: "20px", fontFamily:['Moon Dance', 'Noto Serif JP'] }}>{errors.shooting_date.message}</p>}
            <br/>
            <Controller
              control={control}
              name="name"
              render={({ field }) => (
                <TextField
                  {...field}
                  label="name"
                  margin="normal"
                  inputProps={{ style: {fontSize: "20px", fontFamily:['Moon Dance', 'Noto Serif JP']} }}  
                  placeholder="name"
                  {...register("name", {
                    required: { value: true, message: "Please enter a name" },
                    maxLength: { value: 10, message: "The maximum value entered is 10" }
                  })}
                />
              )}
            />
            {errors.name && <p style={{ color: "red", fontSize: "20px", fontFamily:['Moon Dance', 'Noto Serif JP'] }}>{errors.name.message}</p>}
            <br/>
            <br/>
            <Controller
              control={control}
              name="image"
              render={({ field }) => (
                <input
                  {...field}
                  label="image"
                  margin="normal"
                  type="file"
                  inputProps={{ style: {fontSize: "20px", fontFamily:['Moon Dance', 'Noto Serif JP']} }}  
                />
              )}
            />
            <Box
              mt={2}
              mb={4}
            >
              <Button
                variant="contained"
                color="primary"
                type="submit"
              >
                次へ
              </Button>
            </Box>
          </form>
        </Grid>
      </Grid>
    </TableContainer>
  );
}
