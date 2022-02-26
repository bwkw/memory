import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Calendar from '@/components/Calendar/Calendar';
import CategoryCreate from '@/components/Category/Create';
import CategoryEdit from '@/components/Category/Edit';
import CategoryIndex from '@/components/Category/Index';
import CategoryShow from '@/components/Category/Show';
import HomeIndex from '@/components/Home/Index';
import HeaderBar from '@/components/Bar/HeaderBar';
import { theme } from '@/theme';
import { ThemeProvider } from '@mui/material/styles';


function Router() {
  const Body = (
    <Routes>
      <Route path="/" element={<HomeIndex />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/datings" element={<CategoryIndex category="datings" />} />
      <Route path="/datings/create" element={<CategoryCreate category="datings" />} />
      <Route path="/datings/:id" element={<CategoryShow category="datings" />} />
      <Route path="/datings/:id/edit" element={<CategoryEdit category="datings" />} />
      <Route path="/foods" element={<CategoryIndex category="foods" />} />
      <Route path="/foods/create" element={<CategoryCreate category="foods" />} />
      <Route path="/foods/:id" element={<CategoryShow category="foods" />} />
      <Route path="/foods/:id/edit" element={<CategoryEdit category="foods" />} />
      <Route path="/sceneries" element={<CategoryIndex category="sceneries" />} />
      <Route path="/sceneries/create" element={<CategoryCreate category="sceneries" />} />
      <Route path="/sceneries/:id" element={<CategoryShow category="sceneries" />} />
      <Route path="/sceneries/:id/edit" element={<CategoryEdit category="sceneries" />} />
      <Route path="/travels" element={<CategoryIndex category="travels" />} />
      <Route path="/travels/create" element={<CategoryCreate category="travels" />} />
      <Route path="/travels/:id" element={<CategoryShow category="travels" />} />
      <Route path="/travels/:id/edit" element={<CategoryEdit category="travels" />} />
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
