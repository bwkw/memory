import React from 'react';
import ReactDOM from 'react-dom';
import Category from '../Category/Category';

function Index() {
  return (
    <div>
      <Category />
    </div>
  );
}


if (document.getElementById('home_index')) {
  ReactDOM.render(
    <Index />, document.getElementById('home_index')
  );
}
