import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Category from './Category/Category';

function HomeIndex() {
    return (
        <div>
            <Category />
        </div>
    );
}

ReactDOM.render(
    <HomeIndex/>, document.getElementById('home_index')
);
