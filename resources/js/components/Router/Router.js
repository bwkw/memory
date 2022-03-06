import { useState, createContext } from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import axios from 'axios';

import Calendar from '@/components/Calendar/Calendar';
import CategoryCreate from '@/components/Category/Create';
import CategoryEdit from '@/components/Category/Edit';
import CategoryIndex from '@/components/Category/Index';
import CategoryShow from '@/components/Category/Show';
import HomeIndex from '@/components/Home/Index';
import HeaderBar from '@/components/Bar/HeaderBar';
import Login from '@/components/Certification/Login';
import Register from '@/components/Certification/Register';
import ScheduleIndex from '@/components/Schedule/Index';
import { theme } from '@/theme';
import { ThemeProvider } from '@mui/material/styles';


axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.withCredentials = true;
axios.interceptors.request.use(function(config){
  const token = localStorage.getItem('auth_token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});

export const AuthenticateCheck = createContext();
export const AuthenticateUser = createContext();

function Router() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({id: "", name:""});
  const authenticateCheck = {isAuthenticated, setIsAuthenticated};
  const authenticateUser = {user, setUser};
  
  let Body;
  if (isAuthenticated || localStorage.getItem('auth_token')) {
    Body = (
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
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
        <Route path="/schedules" element={<ScheduleIndex />} />
        <Route path="/travels" element={<CategoryIndex category="travels" />} />
        <Route path="/travels/create" element={<CategoryCreate category="travels" />} />
        <Route path="/travels/:id" element={<CategoryShow category="travels" />} />
        <Route path="/travels/:id/edit" element={<CategoryEdit category="travels" />} />
      </Routes>
    );
  } else {
    Body = (
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    );
  }
  
  
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AuthenticateCheck.Provider value={authenticateCheck}>
          <AuthenticateUser.Provider value={authenticateUser}>
            <HeaderBar />
            { Body }
          </AuthenticateUser.Provider>
        </AuthenticateCheck.Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

if (document.getElementById('main')) {
  ReactDOM.render(
    <Router />, document.getElementById('main')
  );
}
