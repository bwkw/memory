import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Create from './create';

function Index() {
    return (
        <div>
            <Create/>
        </div>
    );
}

ReactDOM.render(
    <Index/>, document.getElementById('index')
);
