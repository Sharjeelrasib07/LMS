import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Badge } from '@mui/material';
import { Notifications, AccountCircle } from '@mui/icons-material';

const Navbar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#1976d2', zIndex: 1201 }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          LMS
        </Typography>
        <IconButton color="inherit">
          <Badge badgeContent={1} color="secondary">
            <Notifications />
          </Badge>
        </IconButton>
        <IconButton color="inherit">
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
