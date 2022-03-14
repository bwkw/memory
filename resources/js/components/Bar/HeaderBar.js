import { useContext, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

import AppBar from '@mui/material/AppBar';
import { AuthenticateCheck } from "@/components/Router/Router";
import { AuthenticateUser } from "@/components/Router/Router";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
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
  const { user, setUser } = useContext(AuthenticateUser);
  const classes = useStyles();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  
  const logoutSubmit = (e) => {
    e.preventDefault();

    axios.post(`/api/logout`).then(res => {
      if (res.data.status === 200) {
        localStorage.removeItem('auth_token', res.data.token);
        localStorage.removeItem('auth_name', res.data.userName);
        setIsAuthenticated(false);
        setUser({...user, id: ""});
        setUser({...user, name: ""});
        swal("ログアウトしました", res.data.message, "success");
        navigate('/');
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
        <Button
          component="span"
          sx={{ flexGrow: 1 }}
          onClick={handleMenu}
          color="inherit"
        >
          { user["name"] ? <span className="text-white">{user["name"]}</span> : <span className="text-white">{localStorage.getItem('auth_name')}</span> }
        </Button>
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
        &emsp;
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
