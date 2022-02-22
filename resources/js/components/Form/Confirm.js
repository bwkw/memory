import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Box from '@mui/material/Box';
import { Button } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Stack from '@mui/material/Stack';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { UserInputData } from '@/components/Form/AllForm';


export default function Confirm(props) {
  const { currentState } = useContext(UserInputData);
  const [image, setImage] = useState();
  const [image_name, setImageName] = useState();
  const inputDataLists = [];
  var id = 0;
  
  var item = {
    "shooting_date": "撮影日",
    "name": "名称",
    "image": "画像",
  };

  for ( var name in currentState ) {
    if(item[name])
      inputDataLists.push(
        {
          "id": id,
          "name": item[name],
          "value": currentState[name]
        }
      );
    id++;
  }
  
  const changeImage = (e) => {
    if(!e.target.files) return;
    
    const file = e.target.files[0];
    setImage(file);
    setImageName(file.name);
  };
  
  const onSubmit = (id) => {
    const data = new FormData();
    data.append('name', currentState.name);
    data.append('latitude', currentState.lat);
    data.append('longitude', currentState.lng);
    data.append('shooting_date', currentState.shooting_date);
    data.append('image', image);

    const headers = { "content-type": "multipart/form-data" };
    
    if (id) {
      axios
      .post(`/api/travels/${id}/edit`, data, { headers })
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
    } else {
    axios
      .post("/api/travels", data, { headers })
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
    }
  };

  
  return (
    <TableContainer component={Paper}>
      <Grid container>
        <Grid xs={1} sm={2} md={3} />
        <Grid xs={10} sm={8} md={6}>
        <Box m={3} />
          <Table aria-label="Customer Input Data">
            <TableHead>
              <TableRow>
                <TableCell>項目</TableCell>
                <TableCell>入力内容</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                inputDataLists.map(function(elem) {
                  return (
                    <TableRow key={elem.id}>
                      <TableCell>{elem.name}</TableCell>
                      { elem.value ? <TableCell>{elem.value}</TableCell> : <TableCell>None</TableCell> }
                    </TableRow>
                  );
                })
              }
            </TableBody>
          </Table>
          <br />
          <label htmlFor="upload-button">
            <input accept=".png, .jpg, .jpeg" id="upload-button" type="file" onChange={ changeImage } hidden />
            <Button
              variant="contained"
              component="span"
              style={{ fontFamily:['Moon Dance', 'Noto Serif JP'] }}
            >
              upload
            </Button>
            <Box ml={3} component="span"/>
            { image_name }
          </label>
      
          <Box mt={2} mb={4}>
            <Stack spacing={2} direction="row">
              <Button 
                variant="contained" 
                color="primary" 
                style={{ fontFamily:['Moon Dance', 'Noto Serif JP'] }}
                onClick={props.handleBack}
              >
                back
              </Button>
              <Button
                variant="contained"
                color="secondary"
                style={{ fontFamily:['Moon Dance', 'Noto Serif JP'] }}
                onClick={() => onSubmit(currentState.id)}
                component={Link}
                to="/travels"
              >
                send
              </Button>
            </Stack>  
          </Box>
        </Grid>
      </Grid>
    </TableContainer>
  );
}
