import { useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

import AppBar from '@mui/material/AppBar';
import { AuthenticateCheck } from "@/components/Router/Router";
import Box from '@mui/material/Box';
import Menu from '@/components/Menu/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme) => ({
  toolBar: {
    backgroundColor: "#546e7a",
  },
}));

export default function HeaderBar() {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthenticateCheck);
  const classes = useStyles();
  const navigate = useNavigate();

  const logoutSubmit = (e) => {
    e.preventDefault();

    axios.post(`/api/logout`).then(res => {
      if (res.data.status === 200) {
        localStorage.removeItem('auth_token', res.data.token);
        localStorage.removeItem('auth_name', res.data.username);
        setIsAuthenticated(false);
        swal("ログアウトしました", res.data.message, "success");
        navigate('/');
      } 
    });
  };

  var AuthButtons = '';
  if (!isAuthenticated) {
    AuthButtons = (
      <div>
        <Link to="/register" className="text-white">
          <span className="text-white">Register</span>
        </Link>
        <Link to="/login" className="text-white">
          <span >Login</span>
        </Link>
      </div>
    );
  } else {
    AuthButtons = (
      <div onClick={logoutSubmit}>
        <Link to="/">
          logout
        </Link>
      </div>
    );
  }
  
  
  return (
    <Box sx={{ flexGrow: 1, mb: 4 }}>
      <AppBar position="static">
        <Toolbar className={classes.toolBar}>
          { localStorage.getItem('auth_token') && <Menu /> }
          <Typography variant="h5" component="span" sx={{ flexGrow: 1 }}>
            <Link to="/" underline="none" color="inherit" style={{ color: '#FFF' }}>
              Toi et Moi
            </Link>
          </Typography>
          { AuthButtons }
        </Toolbar>
      </AppBar>
    </Box>
  );
}
