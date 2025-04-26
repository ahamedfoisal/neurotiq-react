import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { LandingPage } from './components/LandingPage';
import { Dashboard } from './components/Dashboard';
import { Analysis } from './components/Analysis';
import { LogoGenerator } from './components/LogoGenerator';
import { Box, Typography } from '@mui/material';

// Placeholder components for other routes
const PlaceholderPage: React.FC<{ title: string }> = ({ title }) => (
  <Box sx={{ 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    minHeight: '100vh',
    background: 'radial-gradient(circle at 70% 30%, rgba(127, 231, 243, 0.15) 0%, rgba(10, 10, 26, 0) 50%)'
  }}>
    <Typography variant="h2" sx={{ color: 'primary.main' }}>
      {title} - Coming Soon
    </Typography>
  </Box>
);

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
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/analyzer" element={<Analysis />} />
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
