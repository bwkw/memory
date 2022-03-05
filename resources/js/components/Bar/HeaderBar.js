import { useContext, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

import AppBar from '@mui/material/AppBar';
import { AuthenticateCheck } from "@/components/Router/Router";
import { AuthenticateName } from "@/components/Router/Router";
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SideBarMenu from '@/components/Menu/SideBarMenu';
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
  const { userName, setUserName } = useContext(AuthenticateName);
  const classes = useStyles();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const logoutSubmit = (e) => {
    e.preventDefault();

    axios.post(`/api/logout`).then(res => {
      if (res.data.status === 200) {
        localStorage.removeItem('auth_token', res.data.token);
        localStorage.removeItem('auth_name', res.data.username);
        setIsAuthenticated(false);
        setUserName(null);
        swal("ログアウトしました", res.data.message, "success");
        navigate('/logout');
      } 
    });
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  var AuthButtons = '';
  if (isAuthenticated || localStorage.getItem('auth_token')) {
    AuthButtons = (
      <div>
        <Typography
          component="span"
          sx={{ flexGrow: 1 }}
          onClick={handleMenu}
        >
          { userName ? <span className="text-white">{userName}</span> : <span className="text-white">{localStorage.getItem('auth_name')}</span> }
        </Typography>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={logoutSubmit}>Logout</MenuItem>
        </Menu>
      </div>
    );
  } else {
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
  }
  
  
  return (
    <Box sx={{ flexGrow: 1, mb: 4 }}>
      <AppBar position="static">
        <Toolbar className={classes.toolBar}>
          { (isAuthenticated || localStorage.getItem('auth_token')) && <SideBarMenu /> }
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
