import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Typography,
  Fade,
} from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import { TypeAnimation } from 'react-type-animation';
import brainImage from '../assets/brain_with_headset2.png';
import { Navbar } from './Navbar';

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
  const navigate = useNavigate();

  const handleStartAnalysis = () => {
    navigate('/dashboard');
  };

  return (
    <Box sx={{ minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      <Navbar />

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
                display: 'block',
                mt: { xs: 2, md: 0 },
                order: { xs: -1, md: 0 },
              }}
            >
              <Box
                component="img"
                src={brainImage}
                alt="Brain Wave Analysis"
                sx={{
                  width: '100%',
                  height: 'auto',
                  maxWidth: { xs: '280px', sm: '400px', md: '600px' },
                  margin: '0 auto',
                  display: 'block',
                  opacity: { xs: 0.8, md: 1 },
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