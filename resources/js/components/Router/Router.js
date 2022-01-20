import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CategoryIndex from '@/components/Category/Index';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/travels" element={<CategoryIndex category="travels" />} />
        <Route path="/foods" element={<CategoryIndex category="foods" />} />
        <Route path="/sceneries" element={<CategoryIndex category="sceneries" />} />
        <Route path="/datings" element={<CategoryIndex category="datings" />} />
      </Routes>
    </BrowserRouter>
  )
}

if (document.getElementById('category_index')) {
  ReactDOM.render(
    <Router />, document.getElementById('category_index')
  );
}