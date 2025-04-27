import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { LandingPage } from './components/LandingPage';
import { Dashboard } from './components/Dashboard';
import { Analysis } from './components/Analysis';
import { LogoGenerator } from './components/LogoGenerator';
import { AboutUs } from './components/AboutUs';
import { Box, Typography, Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { Features } from './components/Features';

// Placeholder components for other routes
const PlaceholderPage: React.FC<{ title: string }> = ({ title }) => {
  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh',
      background: 'radial-gradient(circle at 70% 30%, rgba(127, 231, 243, 0.15) 0%, rgba(10, 10, 26, 0) 50%)'
    }}>
      <Typography variant="h2" sx={{ color: 'primary.main', mb: 4 }}>
        {title} - Coming Soon
      </Typography>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
        <Button
          variant="outlined"
          color="primary"
          component={Link}
          to="/dashboard"
          sx={{
            borderRadius: '12px',
            px: 3,
            py: 1.5,
            fontSize: '1.1rem',
            borderWidth: '2px',
            '&:hover': {
              borderWidth: '2px',
              backgroundColor: 'rgba(127, 231, 243, 0.1)',
            }
          }}
        >
          Go to Dashboard
        </Button>
        <Button
          variant="outlined"
          color="primary"
          component={Link}
          to="/analyzer"
          sx={{
            borderRadius: '12px',
            px: 3,
            py: 1.5,
            fontSize: '1.1rem',
            borderWidth: '2px',
            '&:hover': {
              borderWidth: '2px',
              backgroundColor: 'rgba(127, 231, 243, 0.1)',
            }
          }}
        >
          Go to Analysis
        </Button>
      </Stack>
    </Box>
  );
};

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#7FE7F3',
    },
    background: {
      default: '#0A0A1A',
      paper: '#0A0A1A',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/features" element={<Features />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/analyzer" element={<Analysis />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/mental-wellness" element={<PlaceholderPage title="Mental Wellness" />} />
          <Route path="/self-care" element={<PlaceholderPage title="Self Care" />} />
          <Route path="/support" element={<PlaceholderPage title="Support" />} />
          <Route path="/settings" element={<PlaceholderPage title="Settings" />} />
          <Route path="/logo-generator" element={<LogoGenerator />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
