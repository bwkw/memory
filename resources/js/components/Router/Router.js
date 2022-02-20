import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import CategoryIndex from '@/components/Category/Index';
import CategoryShow from '@/components/Category/Show';
import CategoryCreate from '@/components/Category/Create';
import HomeIndex from '@/components/Home/Index';
import HeaderBar from '@/components/Bar/HeaderBar';
import { theme } from '@/theme';
import { ThemeProvider } from '@mui/material/styles';


function Router() {
  const Body = (
    <Routes>
      <Route path="/" element={<HomeIndex />} />
      <Route path="/travels" element={<CategoryIndex category="travels" />} />
      <Route path="/travels/create" element={<CategoryCreate category="travels" />} />
      <Route path="/travels/:id" element={<CategoryShow category="travels" />} />
      <Route path="/foods" element={<CategoryIndex category="foods" />} />
      <Route path="/foods/create" element={<CategoryCreate category="foods" />} />
      <Route path="/foods/:id" element={<CategoryShow category="foods" />} />
      <Route path="/sceneries" element={<CategoryIndex category="sceneries" />} />
      <Route path="/sceneries/create" element={<CategoryCreate category="sceneries" />} />
      <Route path="/sceneries/:id" element={<CategoryShow category="sceneries" />} />
      <Route path="/datings" element={<CategoryIndex category="datings" />} />
      <Route path="/datings/create" element={<CategoryCreate category="datings" />} />
      <Route path="/datings/:id" element={<CategoryShow category="datings" />} />
    </Routes>
  );
  
  
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <HeaderBar />
        { Body }
      </ThemeProvider>
    </BrowserRouter>
  );
}

if (document.getElementById('main')) {
  ReactDOM.render(
    <Router />, document.getElementById('main')
  );
}
