import { useForm, Controller } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Box from '@mui/material/Box';
import { Button } from "@material-ui/core";
import {createStyles, makeStyles} from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";


const useStyles = makeStyles(() =>
  createStyles({
    cover: {
      opacity: 0,
      visibility: 'hidden',
      position: 'fixed',
      width: '100%',
      height: '100%',
      zIndex: 1000,
      top: 0,
      left: 0,
      background: 'rgba(0, 0, 0, 0.3)'
    },
    form: {
      opacity: 0,
      visibility: 'hidden',
      position: 'fixed',
      top: '30%',
      left: '38%',
      fontWeight: 'bold',
      background: 'rgba(255, 255, 255)',
      width: '400px',
      height: '500px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 2000,
    },
    inView: {
      opacity: 1,
      visibility: 'visible'
    },
  })
);

export default function Form(props) {
  const classes = useStyles();
  const navigate = useNavigate();
  const { control, formState: { errors }, handleSubmit, register } = useForm({
    defaultValues: {
      title: props.title,
      start: props.start,
      end: props.end
    },
    mode: "onChange",
  });
  
  const head = () => {
    switch(props.mode){
      case "create":
        return(
          <div>予定を作成する</div>
        );
      case "edit":
        return(
          <div>予定を編集する</div>
        );
    }
  };
  
  const onSubmit = (data) => {
    switch(props.mode){
      case "create":
        axios
          .post(`/api/schedules`, data)
          .then(res => {
            props.setSaveFlag(true);
            props.setInView(false);
          })
          .catch(error => {
            console.log(error);
          });
      case "edit":
        
    }
  };
  
  return (
    <div>
      <div
        onClick={() => props.setInView(false)}
        className={
          props.inView
            ? `${classes.cover} ${classes.inView}`
            : classes.cover
        }
      />
      <div
        className={
          props.inView
            ? `${classes.form} ${classes.inView}`
            : classes.form
        }
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          { head() }
          <Box
            m={3}
          >
          </Box>
          
          <Controller                      
            control={control}
            name="title"
            render={({ field }) => (
              <TextField
                {...field}
                id="title"
                label="title"
                inputProps={{ style: {fontSize: "20px", fontFamily:['Moon Dance', 'Noto Serif JP']} }}  
                InputLabelProps={{ 
                  style: {fontSize: "20px", fontFamily:['Moon Dance', 'Noto Serif JP']},
                  shrink:true,
                }}
                {...register("title", {
                  required: { value: true, message: "Please enter a title" }
                })}
              />
            )}
          />
          {errors.title && <p style={{ color: "red", margin: 0, fontSize: "20px", fontFamily:['Moon Dance', 'Noto Serif JP'] }}>{errors.title.message}</p>}
          
          <Box
            m={3}
          >
          </Box>
            
          <Controller                      
            control={control}
            name="start"
            render={({ field }) => (
              <TextField
                {...field}
                id="start"
                label="start"
                type="datetime-local"
                inputProps={{ style: {fontSize: "20px", fontFamily:['Moon Dance', 'Noto Serif JP']} }}  
                InputLabelProps={{ 
                  style: {fontSize: "20px", fontFamily:['Moon Dance', 'Noto Serif JP']},
                  shrink:true,
                }}
                {...register("start", {
                  required: { value: true, message: "Please enter start-time" }
                })}
              />
            )}
          />
          {errors.start && <p style={{ color: "red", margin: 0, fontSize: "20px", fontFamily:['Moon Dance', 'Noto Serif JP'] }}>{errors.start.message}</p>}
          
          <Box
            m={3}
          >
          </Box>
          
          <Controller                      
            control={control}
            name="end"
            render={({ field }) => (
              <TextField
                {...field}
                id="end"
                label="end"
                type="datetime-local"
                inputProps={{ style: {fontSize: "20px", fontFamily:['Moon Dance', 'Noto Serif JP']} }}  
                InputLabelProps={{ 
                  style: {fontSize: "20px", fontFamily:['Moon Dance', 'Noto Serif JP']},
                  shrink:true,
                }}
                {...register("end", {
                  required: { value: true, message: "Please enter end-time" }
                })}
              />
            )}
          />
          {errors.end && <p style={{ color: "red", margin: 0, fontSize: "20px", fontFamily:['Moon Dance', 'Noto Serif JP'] }}>{errors.end.message}</p>}
          
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
              Save
            </Button>
          </Box>
        </form>
      </div>
    </div>
  );
}
