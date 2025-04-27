import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  useTheme,
  Fade,
} from '@mui/material';
import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { Navbar } from './Navbar';
import MonitorIcon from '@mui/icons-material/MonitorHeartOutlined';
import ComfortIcon from '@mui/icons-material/SpaOutlined';
import QuantumIcon from '@mui/icons-material/PsychologyOutlined';
import PersonIcon from '@mui/icons-material/PersonOutlineOutlined';
import SecurityIcon from '@mui/icons-material/SecurityOutlined';
import PortableIcon from '@mui/icons-material/DevicesOutlined';

interface Feature {
  title: string;
  content: string;
  icon: React.ReactNode;
}

const FeatureCard: React.FC<{
  title: string;
  content: string;
  icon: React.ReactNode;
  delay: number;
}> = ({ title, content, icon, delay }) => {
  return (
    <Fade in timeout={1000} style={{ transitionDelay: `${delay}ms` }}>
      <Card
        elevation={0}
        sx={{
          height: '100%',
          background: 'rgba(255, 255, 255, 0.03)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          transition: 'transform 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-5px)',
          },
        }}
      >
        <CardContent sx={{ p: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            {icon}
            <Typography variant="h5" component="h3" sx={{ ml: 2 }}>
              {title}
            </Typography>
          </Box>
          <Typography variant="body1" color="text.secondary">
            {content}
          </Typography>
        </CardContent>
      </Card>
    </Fade>
  );
};

export const Features: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const features: Feature[] = [
    {
      title: 'Real-Time Monitoring',
      content: 'Continuously capture high-resolution brainwave activity through a fleet of strategically placed scalp electrodes. Our streaming dashboard visualizes these electrical patterns live, allowing users and clinicians to observe cognitive shifts and emotional responses as they happen. With customizable alert thresholds, you\'ll never miss subtle signs of stress, anxiety, or focus lapses.',
      icon: <MonitorIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
    },
    {
      title: 'Non-Invasive Design',
      content: 'Engineered for maximum comfort and ease of use, the NeurotiQ headset employs a soft, adjustable frame and hydrogel-coated electrodes—no gels, no needles, and no surgical procedures. Lightweight and unobtrusive, it empowers individuals to self-administer tests at home or in a clinical setting, eliminating barriers to frequent monitoring and improving adherence.',
      icon: <ComfortIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
    },
    {
      title: 'Quantum-Enhanced Analysis',
      content: 'Our proprietary QSVM (Quantum Support Vector Machine) algorithms map EEG feature vectors into high-dimensional quantum Hilbert spaces, uncovering non-linear relationships that classical methods often miss. By leveraging noise-resilient quantum circuits on IBM\'s Brisbane backend, NeurotiQ achieves faster training times and higher classification accuracy when detecting conditions such as depression, ADHD, and anxiety.',
      icon: <QuantumIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
    },
    {
      title: 'Personalized Recommendations',
      content: 'Beyond raw metrics, NeurotiQ\'s embedded AI engine interprets your unique brainwave signatures to generate tailored guidance. Whether it\'s mindfulness exercises optimized for your stress profile, sleep-hygiene tips based on circadian markers, or prompts to consult a specialist, each recommendation adapts dynamically as your EEG patterns evolve over time.',
      icon: <PersonIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
    },
    {
      title: 'Data Security',
      content: 'Every data packet from sensor to cloud is wrapped in end-to-end encryption and stored using quantum-resistant key exchange protocols. Role-based access controls ensure that only authorized clinicians or caregivers can view sensitive records, while on-device anonymization safeguards user privacy. Continuous compliance monitoring keeps NeurotiQ aligned with GDPR, HIPAA, and emerging quantum-era standards.',
      icon: <SecurityIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
    },
    {
      title: 'Portable & Scalable',
      content: 'From single-user wellness programs to large-scale clinical trials, NeurotiQ scales effortlessly. Our modular headset design pairs with a cloud-native infrastructure that auto-balances workloads across regions. Lightweight and battery-powered, the system can be deployed in schools, remote clinics, or research labs—bringing advanced mental-health screening to any environment.',
      icon: <PortableIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
    },
  ];

  return (
    <Box sx={{ minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      <Navbar />
      
      {/* Hero Section */}
      <Container maxWidth="xl" sx={{ mt: { xs: 8, sm: 12 }, mb: 8 }}>
        <Fade in timeout={1000}>
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
            <Typography
              variant="h2"
              component="h1"
              sx={{
                mb: 3,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 700,
              }}
            >
              Features
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{
                maxWidth: '800px',
                mx: 'auto',
                px: { xs: 2, sm: 0 },
                fontSize: { xs: '1.1rem', md: '1.3rem' },
              }}
            >
              Explore the capabilities that make NeurotiQ the next generation in mental health screening. Harnessing cutting-edge EEG acquisition with quantum-powered analytics, our platform delivers actionable insights faster than ever before.
            </Typography>
          </Box>
        </Fade>

        {/* Features Grid */}
        <Box 
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            margin: -2, // Compensate for child padding
            width: 'calc(100% + 32px)', // Compensate for negative margin
          }}
        >
          {features.map((feature, index) => (
            <Box
              key={feature.title}
              sx={{
                width: {
                  xs: '100%',
                  md: '50%'
                },
                padding: 2,
              }}
            >
              <FeatureCard
                title={feature.title}
                content={feature.content}
                icon={feature.icon}
                delay={index * 200}
              />
            </Box>
          ))}
        </Box>

        {/* Call to Action */}
        <Fade in timeout={1000} style={{ transitionDelay: '1200ms' }}>
          <Box
            sx={{
              textAlign: 'center',
              mt: { xs: 8, md: 12 },
              mb: { xs: 4, md: 6 },
            }}
          >
            <Typography
              variant="h4"
              component="h2"
              sx={{ mb: 3, fontWeight: 600 }}
            >
              Ready to transform mental healthcare?
            </Typography>
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/analyzer')}
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                borderRadius: '50px',
                background: 'linear-gradient(45deg, #7FE7F3 10%, #ACB6E5 90%)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #6CD6E2 10%, #9BA5D4 90%)',
                },
              }}
            >
              Get Started Today →
            </Button>
          </Box>
        </Fade>
      </Container>

      {/* Background Gradient */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at 70% 30%, rgba(127, 231, 243, 0.15) 0%, rgba(10, 10, 26, 0) 50%)',
          zIndex: -1,
        }}
      />
    </Box>
  );
}; 