import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import CategoryIndex from '@/components/Category/Index';
import CategoryShow from '@/components/Category/Show';
import HomeIndex from '@/components/Home/Index';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeIndex />} />
        <Route path="/travels" element={<CategoryIndex category="travels" />} />
        <Route path="/travels/:id" element={<CategoryShow />} />
        <Route path="/foods" element={<CategoryIndex category="foods" />} />
        <Route path="/sceneries" element={<CategoryIndex category="sceneries" />} />
        <Route path="/datings" element={<CategoryIndex category="datings" />} />
      </Routes>
    </BrowserRouter>
  )
}

if (document.getElementById('main')) {
  ReactDOM.render(
    <Router />, document.getElementById('main')
  );
}