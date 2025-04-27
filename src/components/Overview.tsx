import React from 'react';
import { Container, Toolbar, Typography, Button, Box } from '@mui/material';
import { SupportIcon } from '../icons/SupportIcon';
import { Navbar } from './Navbar';

const Overview: React.FC = () => {
  return (
    <>
      <Navbar />
      <Box sx={{ pt: { xs: 10, sm: 12 } }}>
        <Container maxWidth="xl">
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h6">
              Overview
            </Typography>
            <Button
              variant="contained"
              startIcon={<SupportIcon />}
              sx={{
                backgroundColor: 'rgba(127, 231, 243, 0.1)',
                color: '#7FE7F3',
                borderRadius: '20px',
                px: 3,
                border: '1px solid rgba(127, 231, 243, 0.3)',
                boxShadow: '0 0 10px rgba(127, 231, 243, 0.2)',
                '&:hover': {
                  backgroundColor: 'rgba(127, 231, 243, 0.2)',
                  boxShadow: '0 0 15px rgba(127, 231, 243, 0.3)',
                },
                transition: 'all 0.3s ease'
              }}
            >
              Invite a Doctor
            </Button>
          </Toolbar>
        </Container>
      </Box>
    </>
  );
};

export default Overview; 