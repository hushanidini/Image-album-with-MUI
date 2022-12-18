import React from 'react';
import { Box, Button,  Typography } from '@mui/material';



export default function NotFound() {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          minHeight: '100vh',
          backgroundColor: '#e6faf880',
        }}
      >
        <Typography variant="h1" style={{ color: '#069482' }}>
          404
        </Typography>
        <Typography variant="h6" style={{ color: '#069482' }}>
          The page you’re looking for doesn’t exist.
        </Typography>
        <Button variant="contained" sx={{ bgcolor: '#069482' }}>Back Home</Button>
      </Box>
    );
  }