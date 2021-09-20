import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';

function Create() {
    return (
        <div>
            <a href="/scenery/create">
                <Button variant="outlined" endIcon={<Icon>add_circle</Icon>}>
                    Create
                </Button>
            </a>
        </div>
    );
}

export default Create;
