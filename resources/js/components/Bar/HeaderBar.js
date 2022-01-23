import React from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import MuiLink from '@mui/material/Link';
import Menu from '@/components/Menu/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


export default function HeaderBar() {
  return (
    <Box sx={{ flexGrow: 1, mb: 4 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Menu />
          <Typography variant="h5" component="span" sx={{ flexGrow: 1 }}>
            <Link to="/" underline="none" color="inherit" style={{ color: '#FFF' }}>
              Toi et Moi
            </Link>
          </Typography>
          <MuiLink href="/login" underline="none" color="inherit" sx={{ pr: 3 }}>
            Login
          </MuiLink>
          <MuiLink href="/register" underline="none" color="inherit" sx={{ pr: 1 }}>
            Register
          </MuiLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
