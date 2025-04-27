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

// Import team photos
import yousraPhoto from '../assets/team_photos/Yousra_farhani.jpeg';
import premPhoto from '../assets/team_photos/Prem_Bist.jpg';
import zainPhoto from '../assets/team_photos/Assaf_Zain.png';
import tusharPhoto from '../assets/team_photos/Tushar-Pandey.jpg';
import valentinePhoto from '../assets/team_photos/Mohaugen_Valentine.jpg';
import mayurPhoto from '../assets/team_photos/Jhamnani_Mayur.jpeg';
import makuochukwuPhoto from '../assets/team_photos/Okeke_Makuochukwu.jpeg';
import douaaPhoto from '../assets/team_photos/Douaa-Salah.jpg';
import fenleiPhoto from '../assets/team_photos/Chen_Fenlei.jpg';
import sultanPhoto from '../assets/team_photos/Alshehhi_Sultan.jpg';
import syedPhoto from '../assets/team_photos/Syed-Affan.jpg';
import chantellePhoto from '../assets/team_photos/Chantel-Amoako.jpg';
import foisalPhoto from '../assets/team_photos/Ahamed_Foisal.jpg';
import khloudPhoto from '../assets/team_photos/Khloud-Al-Jallad.jpg';

const Grid = MuiGrid as React.ComponentType<any>;

const StyledCard = styled(Card)(({ theme }) => ({
  background: 'rgba(17, 25, 41, 0.7)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: 16,
  height: '550px', // Increased height to accommodate all content
  width: '300px',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out',
  margin: '0 auto',
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
    image: yousraPhoto,
  },
  {
    name: 'Prem Bist',
    role: 'Student, Mentor',
    affiliation: 'Jeonbuk National University',
    country: 'Nepal',
    residence: 'South Korea',
    skills: ['Quantum Computing', 'Research', 'Development'],
    image: premPhoto,
  },
  {
    name: 'Ahamed Foisal',
    role: 'Student',
    affiliation: 'New York University Abu Dhabi',
    country: 'Bangladesh',
    residence: 'UAE',
    skills: ['Development', 'Research'],
    image: foisalPhoto,
  },
  {
    name: 'Zain Assaf',
    role: 'Student',
    affiliation: 'Arab American University Palestine',
    country: 'Jordan',
    residence: 'Palestine',
    skills: ['Development', 'Research'],
    image: zainPhoto,
  },
  {
    name: 'Tushar Pandey',
    role: 'Mentor',
    affiliation: 'Agnostiq',
    country: 'India',
    residence: 'USA',
    skills: ['Quantum Computing', 'Mentorship', 'Development'],
    image: tusharPhoto,
  },
  {
    name: 'Valentine Mohaugen',
    role: 'Student/mentor',
    affiliation: 'Clemson University & SC Quantum',
    country: 'USA',
    residence: 'USA',
    skills: ['Quantum Computing', 'Development'],
    image: valentinePhoto,
  },
  {
    name: 'Mayur Manoj Jhamnani',
    role: 'Student',
    affiliation: 'American University of Sharjah',
    country: 'India',
    residence: 'UAE',
    skills: ['Development', 'Research'],
    image: mayurPhoto,
  },
  {
    name: 'Makuochukwu Okeke',
    role: 'Student',
    affiliation: 'African Leadership University, Rwanda',
    country: 'Nigeria',
    residence: 'Rwanda',
    skills: ['Development', 'Research'],
    image: makuochukwuPhoto,
  },
  {
    name: 'Douaa Salah',
    role: 'Student',
    affiliation: 'École Polytechnique Fédérale de Lausanne',
    country: 'Morocco',
    residence: 'Switzerland',
    skills: ['Development', 'Research'],
    image: douaaPhoto,
  },
  {
    name: 'Fenlei Chen',
    role: 'Student',
    affiliation: 'Yale University',
    country: 'USA',
    residence: 'USA',
    skills: ['Development', 'Research'],
    image: fenleiPhoto,
  },
  {
    name: 'Sultan Alshehhi',
    role: 'Student',
    affiliation: 'Khalifa University',
    country: 'UAE',
    residence: 'UAE',
    skills: ['Development', 'Research'],
    image: sultanPhoto,
  },
  {
    name: 'Syed Affan',
    role: 'Student',
    affiliation: 'Khalifa University',
    country: 'USA',
    residence: 'UAE',
    skills: ['Development', 'Research'],
    image: syedPhoto,
  },
  {
    name: 'Chantelle Amoako-Atta',
    role: 'Student',
    affiliation: 'African Institute for Mathematical Sciences',
    country: 'Ghana',
    residence: 'Ghana',
    skills: ['Development', 'Research'],
    image: chantellePhoto,
  },
  {
    name: 'Khloud Al Jallad',
    role: 'Student',
    affiliation: 'Higher Institute for Applied Sciences and Technology',
    country: 'Syria',
    residence: 'Syria',
    skills: ['Development', 'Research'],
    image: khloudPhoto,
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
                    height="300"
                    image={member.image}
                    alt={member.name}
                    sx={{
                      objectFit: 'cover',
                      objectPosition: 'top center',
                      backgroundColor: 'rgba(127, 231, 243, 0.1)',
                    }}
                  />
                  <CardContent sx={{ 
                    p: 2,
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    height: '250px', // Increased content height
                    overflow: 'visible', // Allow content to be fully visible
                  }}>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        color: '#fff',
                        fontSize: '1rem',
                        fontWeight: 500,
                        mb: 1,
                        lineHeight: 1.2,
                        overflow: 'visible',
                        textOverflow: 'unset',
                        display: 'block',
                        WebkitLineClamp: 'unset',
                        WebkitBoxOrient: 'unset',
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
                        overflow: 'visible',
                        textOverflow: 'unset',
                        display: 'block',
                        WebkitLineClamp: 'unset',
                        WebkitBoxOrient: 'unset',
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
                          mb: 1.5,
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
                        mb: 1,
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