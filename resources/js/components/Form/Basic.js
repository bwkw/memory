import React, {useContext} from 'react';
import { useForm, Controller } from "react-hook-form";

import Box from '@mui/material/Box';
import { Button, MenuItem } from "@material-ui/core";
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from "@material-ui/core/TextField";
import TableContainer from '@material-ui/core/TableContainer';
import { UserInputData } from "@/components/Form/AllForm";

export default function Basic(props) {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      checkBox: false,
      textBox: "",
      pullDown: "",
    },
  });
  const { currentState, setCurrentState } = useContext(UserInputData);
  const onSubmit = (data) => {
    props.handleNext();
    setCurrentState({...currentState, "Basic": data });
  };
  
  return (
    <TableContainer component={Paper}>
      <Grid container>
        <Grid sm={2} />
        <Grid lg={8} sm={8} spacing={10}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller                      
              control={control}
              name="checkBox"
              render={({ field: { value, onChange } }) => (
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={value}
                      onChange={onChange}
                      color='primary'
                    />
                  }
                  label="チェックボックス"
                />
              )}
            />
            <Controller
              control={control}
              name="textBox"
              render={({ field }) => (
                <TextField
                  {...field}
                  label="テキストフィールド"
                  fullWidth
                  margin="normal"
                  placeholder="プレースホルダー"
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
