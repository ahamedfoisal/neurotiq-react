import React from 'react';
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
} from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import { TypeAnimation } from 'react-type-animation';
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

  const handleStartAnalysis = () => {
    navigate('/analyzer');
  };

  const handleDashboard = () => {
    navigate('/dashboard');
  };

  return (
    <Box sx={{ minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      {/* Navigation */}
      <AppBar position="fixed" color="transparent" elevation={0} sx={{ backdropFilter: 'blur(10px)' }}>
        <Container maxWidth="xl" sx={{ px: { xs: '24px', md: '70px' } }}>
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Typography variant="h6" component="div" sx={{ 
              display: 'flex', 
              alignItems: 'center'
            }}>
              <img src={logo} alt="NeurotiQ Logo" style={{ height: 80, width: 'auto' }} />
            </Typography>
            
            {!isMobile && (
              <Stack direction="row" spacing={4}>
                <Button color="inherit">Features</Button>
                <Button color="inherit">Research</Button>
                <Button 
                  color="inherit"
                  onClick={handleDashboard}
                  sx={{
                    '&:hover': {
                      color: 'primary.main',
                    }
                  }}
                >
                  Dashboard
                </Button>
                <Button color="inherit">Contact Us</Button>
              </Stack>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Hero Section */}
      <Container maxWidth="xl" sx={{ mt: 12, px: { xs: '24px', md: '96px' } }}>
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: 8,
          alignItems: 'center',
          minHeight: '80vh',
          ml: 0
        }}>
          {/* Left Content */}
          <Fade in timeout={1000}>
            <Box>
              <Box 
                sx={{ 
                  mb: 2,
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
                    fontSize: '1.1rem',
                    fontWeight: 500
                  }}
                >
                  Advanced Brain Wave Analysis
                </Typography>
              </Box>
              
              <Typography variant="h1" sx={{ 
                mb: 3,
                fontSize: { xs: '3rem', md: '4rem' },
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
                  fontSize: '1.2rem',
                  maxWidth: '600px',
                  lineHeight: 1.6
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
                  px: 4,
                  py: 2,
                  fontSize: '1.2rem',
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
            <FloatingContainer sx={{ position: 'relative' }}>
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'radial-gradient(circle, rgba(127, 231, 243, 0.1) 0%, rgba(10, 10, 26, 0) 70%)',
                  zIndex: 0
                }}
              />
              <Box
                component="img"
                src={brainImage}
                alt="Brain with Headset"
                sx={{
                  width: '130%',
                  height: 'auto',
                  maxWidth: '800px',
                  display: 'block',
                  margin: '0 auto',
                  position: 'relative',
                  zIndex: 1,
                }}
              />
            </FloatingContainer>
          </Fade>
        </Box>
      </Container>

      {/* Background Gradient */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '50%',
          height: '100%',
          background: 'radial-gradient(circle at 70% 30%, rgba(127, 231, 243, 0.15) 0%, rgba(10, 10, 26, 0) 50%)',
          zIndex: -1
        }}
      />
    </Box>
  );
}; 