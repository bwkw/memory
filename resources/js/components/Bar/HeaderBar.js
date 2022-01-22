import React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


export default function HeaderBar() {
  return (
    <Box sx={{ flexGrow: 1, mb: 4 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            <Link className="navbar-brand" href="/" underline="none" color="inherit">
              Toi et Moi
            </Link>
          </Typography>
          <Link href="/login" underline="none" color="inherit">
            Login
          </Link>
          <Link href="/register" underline="none" color="inherit">
            Register
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
