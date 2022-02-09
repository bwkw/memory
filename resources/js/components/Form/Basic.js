import React, {useContext} from 'react';
import { useForm, Controller } from "react-hook-form";

import Box from '@mui/material/Box';
import { Button, MenuItem } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from "@material-ui/core/TextField";
import TableContainer from '@material-ui/core/TableContainer';
import { UserInputData } from "@/components/Form/AllForm";


export default function Basic(props) {
  
  const { control, handleSubmit } = useForm({
    defaultValues: {
      datepicker: "",
      textBox: "",
      pullDown: "",
    },
    mode: "onChange",
  });
  const { setCurrentState } = useContext(UserInputData);
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
              name="datepicker"
              render={({ field }) => (
                <TextField
                  {...field}
                  id="date"
                  label="date"
                  type="date"
                  inputProps={{ style: {fontSize: "20px", fontFamily: "Moon Dance"} }}  
                  InputLabelProps={{ 
                    style: {fontSize: "20px", fontFamily: "Moon Dance"},
                    shrink:true,
                  }}
                  sx={{ width: 220 }}
                />
              )}
            />
            <Controller
              control={control}
              name="textBox"
              render={({ field }) => (
                <TextField
                  {...field}
                  label="place"
                  fullWidth
                  margin="normal"
                  inputProps={{ style: {fontSize: "20px", fontFamily: "Moon Dance"} }}  
                  InputLabelProps={{ style: {fontFamily: "Moon Dance"} }}
                  placeholder="名称"
                />
              )}
            />
            <Controller
              control={control}
              name="pullDown"
              render={({ field }) => (
                <TextField
                  {...field}
                  id="select"
                  label="プルダウンリスト"
                  fullWidth
                  margin="normal"
                  inputProps={{ style: {fontFamily: "Moon Dance"} }}  
                  InputLabelProps={{ style: {fontFamily: "Moon Dance"} }}
                  select
                >
                  <MenuItem value="one">選択肢1</MenuItem>
                  <MenuItem value="two">選択肢2</MenuItem>
                  <MenuItem value="three">選択肢3</MenuItem>
                </TextField>
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
