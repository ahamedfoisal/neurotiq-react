import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid as MuiGrid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Link,
  IconButton,
} from '@mui/material';
import {
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
  Language as WebsiteIcon,
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { Navbar } from './Navbar';

const Grid = MuiGrid as React.ComponentType<any>;

const StyledCard = styled(Card)(({ theme }) => ({
  background: 'rgba(17, 25, 41, 0.7)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: 16,
  height: '400px', // Fixed height
  width: '300px', // Fixed width
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out',
  margin: '0 auto', // Center card in grid item
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

const teamMembers = [
  {
    name: 'Yousra Farhani',
    role: 'Mentor',
    affiliation: 'Institute of Applied Science INSA Lyon, France / Quantum Africa',
    country: 'Algeria',
    residence: 'France',
    skills: ['Quantum Computing', 'Mentorship', 'Research'],
    image: '/placeholder.jpg',
  },
  {
    name: 'Prem Bist',
    role: 'Student, Mentor',
    affiliation: 'Jeonbuk National University',
    country: 'Nepal',
    residence: 'South Korea',
    skills: ['Quantum Computing', 'Research', 'Development'],
    image: '/placeholder.jpg',
  },
  {
    name: 'Zain Assaf',
    role: 'Student',
    affiliation: 'Arab American University Palestine',
    country: 'Jordan',
    residence: 'Palestine',
    skills: ['Development', 'Research'],
    image: '/placeholder.jpg',
  },
  {
    name: 'Tushar Pandey',
    role: 'Mentor',
    affiliation: 'Agnostiq',
    country: 'India',
    residence: 'USA',
    skills: ['Quantum Computing', 'Mentorship', 'Development'],
    image: '/placeholder.jpg',
  },
  {
    name: 'Valentine Mohaugen',
    role: 'Student/mentor',
    affiliation: 'Clemson University & SC Quantum',
    country: 'USA',
    residence: 'USA',
    skills: ['Quantum Computing', 'Development'],
    image: '/placeholder.jpg',
  },
  {
    name: 'Mayur Manoj Jhamnani',
    role: 'Student',
    affiliation: 'American University of Sharjah',
    country: 'India',
    residence: 'UAE',
    skills: ['Development', 'Research'],
    image: '/placeholder.jpg',
  },
  {
    name: 'Makuochukwu Okeke',
    role: 'Student',
    affiliation: 'African Leadership University, Rwanda',
    country: 'Nigeria',
    residence: 'Rwanda',
    skills: ['Development', 'Research'],
    image: '/placeholder.jpg',
  },
  {
    name: 'Douaa Salah',
    role: 'Student',
    affiliation: 'École Polytechnique Fédérale de Lausanne',
    country: 'Morocco',
    residence: 'Switzerland',
    skills: ['Development', 'Research'],
    image: '/placeholder.jpg',
  },
  {
    name: 'Fenlei Chen',
    role: 'Student',
    affiliation: 'Yale University',
    country: 'USA',
    residence: 'USA',
    skills: ['Development', 'Research'],
    image: '/placeholder.jpg',
  },
  {
    name: 'Sultan Alshehhi',
    role: 'Student',
    affiliation: 'Khalifa University',
    country: 'UAE',
    residence: 'UAE',
    skills: ['Development', 'Research'],
    image: '/placeholder.jpg',
  },
  {
    name: 'Syed Affan',
    role: 'Student',
    affiliation: 'Khalifa University',
    country: 'USA',
    residence: 'UAE',
    skills: ['Development', 'Research'],
    image: '/placeholder.jpg',
  },
  {
    name: 'Chantelle Amoako-Atta',
    role: 'Student',
    affiliation: 'African Institute for Mathematical Sciences',
    country: 'Ghana',
    residence: 'Ghana',
    skills: ['Development', 'Research'],
    image: '/placeholder.jpg',
  },
  {
    name: 'Ahamed Foisal',
    role: 'Student',
    affiliation: 'New York University Abu Dhabi',
    country: 'Bangladesh',
    residence: 'UAE',
    skills: ['Development', 'Research'],
    image: '/placeholder.jpg',
  },
  {
    name: 'Khloud Al Jallad',
    role: 'Student',
    affiliation: 'Higher Institute for Applied Sciences and Technology',
    country: 'Syria',
    residence: 'Syria',
    skills: ['Development', 'Research'],
    image: '/placeholder.jpg',
  },
];

export const AboutUs: React.FC = () => {
  return (
    <>
      <Navbar />
      <Box sx={{ 
        minHeight: '100vh',
        background: 'radial-gradient(circle at 70% 30%, rgba(127, 231, 243, 0.15) 0%, rgba(10, 10, 26, 0) 50%)',
        py: { xs: 10, sm: 12 }, // Increased top padding to account for navbar
      }}>
        <Container maxWidth="xl">
          <Typography 
            variant="h2" 
            sx={{ 
              color: 'primary.main',
              mb: 2,
              textAlign: 'center',
              fontSize: { xs: '2rem', sm: '3rem' }
            }}
          >
            Meet Our Team
          </Typography>
          <Typography 
            variant="h5" 
            sx={{ 
              color: 'text.secondary',
              mb: 6,
              textAlign: 'center',
              maxWidth: '800px',
              mx: 'auto',
              fontSize: { xs: '1rem', sm: '1.25rem' }
            }}
          >
            A diverse group of students and mentors from around the world working together to advance quantum computing and mental health technology
          </Typography>

          <Grid container spacing={3}>
            {teamMembers.map((member, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
                <StyledCard>
                  <CardMedia
                    component="img"
                    height="180"
                    image={member.image}
                    alt={member.name}
                    sx={{
                      objectFit: 'cover',
                      backgroundColor: 'rgba(127, 231, 243, 0.1)',
                    }}
                  />
                  <CardContent sx={{ 
                    p: 2,
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    height: '220px', // Fixed content height
                    overflow: 'hidden', // Prevent content overflow
                  }}>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        color: '#fff',
                        fontSize: '1rem',
                        fontWeight: 500,
                        mb: 1,
                        lineHeight: 1.2,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 1,
                        WebkitBoxOrient: 'vertical',
                      }}
                    >
                      {member.name}
                    </Typography>
                    <Typography 
                      variant="subtitle1" 
                      sx={{ 
                        color: 'primary.main',
                        mb: 1,
                        fontSize: '0.85rem',
                        lineHeight: 1.2,
                      }}
                    >
                      {member.role}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: 'text.secondary',
                        fontSize: '0.8rem',
                        mb: 2,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        lineHeight: 1.3,
                      }}
                    >
                      {member.affiliation}
                    </Typography>
                    <Box sx={{ mt: 'auto' }}>
                      <Stack 
                        direction="row" 
                        spacing={0.5} 
                        sx={{ 
                          mb: 1,
                          flexWrap: 'wrap',
                          gap: '4px',
                        }}
                      >
                        <Chip 
                          label={member.country} 
                          size="small"
                          sx={{ 
                            backgroundColor: 'rgba(127, 231, 243, 0.1)',
                            color: '#7FE7F3',
                            fontSize: '0.65rem',
                            height: '20px',
                          }}
                        />
                        <Chip 
                          label={member.residence} 
                          size="small"
                          sx={{ 
                            backgroundColor: 'rgba(127, 231, 243, 0.1)',
                            color: '#7FE7F3',
                            fontSize: '0.65rem',
                            height: '20px',
                          }}
                        />
                      </Stack>
                      <Box sx={{ 
                        display: 'flex', 
                        flexWrap: 'wrap', 
                        gap: '4px',
                      }}>
                        {member.skills.map((skill, idx) => (
                          <Chip
                            key={idx}
                            label={skill}
                            size="small"
                            sx={{
                              backgroundColor: 'rgba(22, 28, 36, 0.8)',
                              color: 'text.secondary',
                              fontSize: '0.65rem',
                              height: '20px',
                            }}
                          />
                        ))}
                      </Box>
                    </Box>
                  </CardContent>
                </StyledCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}; 