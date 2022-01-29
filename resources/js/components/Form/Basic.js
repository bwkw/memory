import React, {useContext} from 'react';
import { useForm, Controller } from "react-hook-form";

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import Box from '@mui/material/Box';
import { Button, MenuItem } from "@material-ui/core";
import DateTimePicker from '@mui/lab/DateTimePicker';
import Grid from '@material-ui/core/Grid';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
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
        <Grid sm={2} />
        <Grid lg={8} sm={8} spacing={10}>
          <Box m={3} />
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller                      
              control={control}
              name="datepicker"
              render={({ field: { value, onChange } }) => (
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DateTimePicker
                    renderInput={(props) => <TextField {...props} />}
                    label="DateTimePicker"
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                  />
                </LocalizationProvider>
              )}
            />
            <Controller
              control={control}
              name="textBox"
              render={({ field }) => (
                <TextField
                  {...field}
                  label="名称"
                  fullWidth
                  margin="normal"
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
                  label="プルダウンリスト"
                  fullWidth
                  margin="normal"
                  id="select"
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
