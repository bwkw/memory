import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Category from './Category/Category';

function Index() {
    return (
        <div>
            <Category />
        </div>
    );
}

ReactDOM.render(
    <Index/>, document.getElementById('index')
);
