import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';

function Create(){
    return (
        <div>
            <Button variant="outlined" endIcon={<Icon>add_circle</Icon>} onclick="handelCreate">
                Create
            </Button>
        </div>
    );
}

export default Create;
