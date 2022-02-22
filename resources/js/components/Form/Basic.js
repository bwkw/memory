import { useContext } from 'react';
import { useForm, Controller } from "react-hook-form";

import Box from '@mui/material/Box';
import { Button } from "@material-ui/core";
import GoogleGeocode from "react-geocode";
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
    },
    mode: "onChange",
  });
  
  const Geocode = (data) => {
    GoogleGeocode.setApiKey(process.env.MIX_GOOGLE_MAP_API_KEY);
    GoogleGeocode.fromAddress(data.name).then(
      response => {
        const location = response.results[0].geometry.location;
        const resLat = location.lat;
        const resLng = location.lng;
        data["lat"] = resLat;
        data["lng"] = resLng;
      },
    );
  };
  
  const onSubmit = (data) => {
    props.handleNext();
    Geocode(data);
    data["id"] = currentState.id;
    setCurrentState(data);
  };
  
  
  return (
    <TableContainer component={Paper}>
      <Grid container>
        <Grid xs={1} sm={2} md={3} />
        <Grid xs={10} sm={8} md={6}>
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
                  {...register("shooting_date", {
                    required: { value: true, message: "Please enter a shooting_date" }
                  })}
                />
              )}
            />
            {errors.shooting_date && <p style={{ color: "red", margin: 0, fontSize: "20px", fontFamily:['Moon Dance', 'Noto Serif JP'] }}>{errors.shooting_date.message}</p>}
            
            <Box
              m={3}
            >
            </Box>
            
            <Controller
              m={0}
              control={control}
              name="name"
              render={({ field }) => (
                <TextField
                  {...field}
                  label="name"
                  inputProps={{ style: {fontSize: "20px", fontFamily:['Moon Dance', 'Noto Serif JP']} }}  
                  InputLabelProps={{ 
                    style: {fontSize: "20px", fontFamily:['Moon Dance', 'Noto Serif JP']},
                    shrink:true,
                  }}
                  {...register("name", {
                    required: { value: true, message: "Please enter a name" },
                    maxLength: { value: 10, message: "The maximum value entered is 10" }
                  })}
                />
              )}
            />
            {errors.name && <p mb={0} style={{ color: "red", margin: 0, fontSize: "20px", fontFamily:['Moon Dance', 'Noto Serif JP'] }}>{errors.name.message}</p>}
            
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
