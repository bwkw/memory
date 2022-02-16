import { useContext, useEffect, useState } from 'react';
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
  const inputDataLists = [];
  var id = 0;
  
  var item = {
    "shooting_date": "撮影日",
    "name": "名称",
    "image": "画像",
  };

  for ( var name in currentState ) {
    inputDataLists.push(
      {
        "id": id,
        "name": item[name],
        "value": currentState[name]
      }
    );
    id++;
  }
  
  function onSubmit() {
    axios
      .post("/api/travels", {
        name: currentState.name,
        latitude: currentState.lat,
        longitude: currentState.lng,
        shooting_date: currentState.shooting_date,
        image: currentState.image
      })
      .then(res => {
        console.log(res);
    });
  }
  
  
  return (
    <TableContainer component={Paper}>
      <Grid container>
        <Grid sm={2} />
        <Grid lg={8} sm={8} spacing={10}>
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
          <Box mt={2} mb={4}>
            <Stack spacing={2} direction="row">
              <Button variant="contained" color="primary" onClick={props.handleBack}>
                  戻る
              </Button>
              <Button variant="contained" color="primary" onClick={onSubmit}>
                  送信
              </Button>
            </Stack>  
          </Box>
        </Grid>
      </Grid>
    </TableContainer>
  );
}
