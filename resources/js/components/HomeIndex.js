import React from 'react';
import ReactDOM from 'react-dom';
import Category from './Category/Category';

function HomeIndex() {
  return (
    <div>
      <Category />
    </div>
  );
}


if (document.getElementById('home_index')) {
  ReactDOM.render(
    <HomeIndex />, document.getElementById('home_index')
  );
}
