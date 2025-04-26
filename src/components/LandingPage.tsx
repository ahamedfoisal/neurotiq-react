import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  Stack,
  useTheme,
  useMediaQuery,
  Fade,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
} from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import { TypeAnimation } from 'react-type-animation';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../assets/logo.png';
import brainImage from '../assets/brain_with_headset2.png';

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const GradientText = styled('span')(({ theme }) => ({
  background: `linear-gradient(45deg, ${theme.palette.primary.main}, #FFFFFF)`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
}));

const FloatingContainer = styled(Box)(({ theme }) => ({
  animation: `${float} 6s ease-in-out infinite`,
}));

export const LandingPage: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleStartAnalysis = () => {
    navigate('/analyzer');
  };

  const handleDashboard = () => {
    navigate('/dashboard');
  };

  const menuItems = [
    { text: 'Features', onClick: () => {} },
    { text: 'Research', onClick: () => {} },
    { text: 'Dashboard', onClick: handleDashboard },
    { text: 'Contact Us', onClick: () => {} },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <Box sx={{ minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      {/* Navigation */}
      <AppBar 
        position="fixed" 
        color="transparent" 
        elevation={0} 
        sx={{ 
          backdropFilter: 'blur(10px)',
          background: 'rgba(17, 17, 44, 0.7)',
        }}
      >
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 8 } }}>
          <Toolbar sx={{ justifyContent: 'space-between', minHeight: { xs: 64, sm: 80 } }}>
            <Typography 
              variant="h6" 
              component="div" 
              sx={{ 
                display: 'flex', 
                alignItems: 'center'
              }}
            >
              <img 
                src={logo} 
                alt="NeurotiQ Logo" 
                style={{ 
                  height: isMobile ? 60 : 80, 
                  width: 'auto' 
                }} 
              />
            </Typography>
            
            {isMobile ? (
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={toggleMobileMenu}
                sx={{ color: 'primary.main' }}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Stack direction="row" spacing={4}>
                {menuItems.map((item) => (
                  <Button 
                    key={item.text}
                    color="inherit"
                    onClick={item.onClick}
                    sx={{
                      '&:hover': {
                        color: 'primary.main',
                      }
                    }}
                  >
                    {item.text}
                  </Button>
                ))}
              </Stack>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Menu Drawer */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={toggleMobileMenu}
        PaperProps={{
          sx: {
            width: '100%',
            maxWidth: '300px',
            background: 'rgba(17, 17, 44, 0.95)',
            backdropFilter: 'blur(10px)',
            borderLeft: '1px solid rgba(127, 231, 243, 0.2)',
          }
        }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton 
            onClick={toggleMobileMenu}
            sx={{ color: 'primary.main' }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                onClick={() => {
                  item.onClick();
                  toggleMobileMenu();
                }}
                sx={{
                  py: 2,
                  px: 3,
                  '&:hover': {
                    backgroundColor: 'rgba(127, 231, 243, 0.1)',
                  }
                }}
              >
                <ListItemText 
                  primary={item.text}
                  sx={{
                    '& .MuiTypography-root': {
                      fontSize: '1.1rem',
                      fontWeight: 500,
                    }
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Hero Section */}
      <Container 
        maxWidth="xl" 
        sx={{ 
          mt: { xs: 8, sm: 12 },
          px: { xs: 2, sm: 3, md: 8 },
        }}
      >
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: { xs: 4, md: 8 },
          alignItems: 'center',
          minHeight: { xs: 'calc(100vh - 64px)', md: '80vh' },
        }}>
          {/* Left Content */}
          <Fade in timeout={1000}>
            <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Box 
                sx={{ 
                  mb: { xs: 3, md: 2 },
                  p: 2,
                  borderRadius: '10px',
                  backgroundColor: 'rgba(127, 231, 243, 0.1)',
                  display: 'inline-block'
                }}
              >
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: 'primary.main',
                    fontSize: { xs: '0.9rem', sm: '1.1rem' },
                    fontWeight: 500
                  }}
                >
                  Advanced Brain Wave Analysis
                </Typography>
              </Box>
              
              <Typography variant="h1" sx={{ 
                mb: 3,
                fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem' },
                fontWeight: 700,
                lineHeight: 1.2
              }}>
                Understand Your{' '}
                <br />
                Mind Through{' '}
                <GradientText>
                  <TypeAnimation
                    sequence={[
                      'Neuroscience',
                      2000,
                      'Quantam AI Analysis',
                      2000,
                      'Brain Waves',
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
                </GradientText>
              </Typography>

              <Typography 
                variant="body1" 
                sx={{ 
                  mb: 4,
                  color: 'text.secondary',
                  fontSize: { xs: '1rem', sm: '1.2rem' },
                  maxWidth: '600px',
                  lineHeight: 1.6,
                  mx: { xs: 'auto', md: 0 }
                }}
              >
                Experience breakthrough mental health analysis powered by advanced brain wave technology. 
                Get personalized insights and recommendations based on your unique neural patterns.
              </Typography>

              <Button 
                variant="outlined"
                color="primary"
                size="large"
                onClick={handleStartAnalysis}
                sx={{ 
                  px: { xs: 3, sm: 4 },
                  py: { xs: 1.5, sm: 2 },
                  fontSize: { xs: '1rem', sm: '1.2rem' },
                  borderRadius: '30px',
                  borderWidth: '2px',
                  '&:hover': {
                    borderWidth: '2px',
                  }
                }}
              >
                Try Now
                <Box 
                  component="span" 
                  sx={{ 
                    ml: 1,
                    fontSize: '1.5rem',
                    lineHeight: 1,
                    transform: 'rotate(-45deg)',
                    display: 'inline-block'
                  }}
                >
                  →
                </Box>
              </Button>
            </Box>
          </Fade>

          {/* Right Content - Brain Wave Visualization */}
          <Fade in timeout={1000}>
            <FloatingContainer 
              sx={{ 
                position: 'relative',
                display: { xs: 'none', sm: 'block' },
                mt: { xs: 4, md: 0 }
              }}
            >
              <Box
                component="img"
                src={brainImage}
                alt="Brain Wave Analysis"
                sx={{
                  width: '100%',
                  height: 'auto',
                  maxWidth: '600px',
                  margin: '0 auto',
                  display: 'block',
                }}
              />
            </FloatingContainer>
          </Fade>
        </Box>
      </Container>

      {/* Background Gradient */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: { xs: '100%', md: '50%' },
          height: '100%',
          background: 'radial-gradient(circle at 70% 30%, rgba(127, 231, 243, 0.15) 0%, rgba(10, 10, 26, 0) 50%)',
          zIndex: -1,
        }}
      />
    </Box>
  );
}; 