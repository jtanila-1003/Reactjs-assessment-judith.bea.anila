import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const AppBarComponent = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Books Collection
            </Typography>
            <Button component={Link} to={'/'} color="inherit">
              View Books
            </Button>
            <Button component={Link} to={'/addbooks'} color="inherit">
              Add New Books
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default AppBarComponent;
