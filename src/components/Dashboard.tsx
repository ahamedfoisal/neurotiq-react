import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Paper,
  Grid as MuiGrid,
  Card,
  CardContent,
  IconButton,
  Button,
  useTheme,
  Stack,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert,
  useMediaQuery,
} from '@mui/material';
import {
  TrendingUp,
  LocalFlorist,
  EmojiEmotions,
  DirectionsRun,
  Restaurant,
  Brightness7,
  MusicNote,
  Spa,
  CheckCircle as CheckIcon,
  Warning as WarningIcon,
  ArrowUpward as ImprovementIcon,
  Lightbulb as InsightIcon,
  Support as SupportIcon,
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { Sidebar, DRAWER_WIDTH, COLLAPSED_DRAWER_WIDTH } from './Sidebar';
import { Navbar } from './Navbar';

// Styled components
const DashboardContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  minHeight: '100vh',
  background: theme.palette.background.default,
}));

const MainContent = styled(Box)<{ open?: boolean }>(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  paddingTop: theme.spacing(12),
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  [theme.breakpoints.up('md')]: {
    width: '100%'
  },
  [theme.breakpoints.down('md')]: {
    marginLeft: 0,
    width: '100%',
    padding: theme.spacing(2),
    paddingTop: theme.spacing(12),
  },
}));

const StyledCard = styled(Card)(({ theme }) => ({
  background: 'rgba(17, 25, 41, 0.7)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: 16,
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

const WelcomeCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  background: 'rgba(17, 25, 41, 0.7)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: 16,
}));

// Positive activities
const wellnessActivities = [
  { title: 'Morning Meditation', icon: <Spa />, duration: '10 mins', type: 'Mindfulness' },
  { title: 'Nature Walk', icon: <DirectionsRun />, duration: '20 mins', type: 'Exercise' },
  { title: 'Gratitude Journal', icon: <EmojiEmotions />, duration: '5 mins', type: 'Reflection' },
  { title: 'Healthy Breakfast', icon: <Restaurant />, duration: '15 mins', type: 'Nutrition' },
  { title: 'Mood Music', icon: <MusicNote />, duration: '10 mins', type: 'Relaxation' },
  { title: 'Sunlight Break', icon: <Brightness7 />, duration: '15 mins', type: 'Wellness' },
];

// Mood-lifting questions
const dailyQuestions = [
  "What made you smile today?",
  "What are you looking forward to?",
  "What's one thing you're proud of?",
  "Who would you like to thank today?",
];

// Mental health status indicators with positive framing
const indicators = [
  { title: 'Energy', value: 'Balanced', icon: <TrendingUp />, color: '#4CAF50' },
  { title: 'Mood', value: 'Bright', icon: <EmojiEmotions />, color: '#7FE7F3' },
  { title: 'Mindfulness', value: 'Present', icon: <Spa />, color: '#9C27B0' },
  { title: 'Wellness', value: 'Growing', icon: <LocalFlorist />, color: '#FF9800' },
];

// Sample recommendations
const recommendations = [
  {
    title: 'Mindfulness Practice',
    description: 'Incorporate 10-minute mindfulness sessions twice daily to maintain focus levels.',
    priority: 'High',
  },
  {
    title: 'Stress Management',
    description: 'Practice deep breathing exercises during high-stress periods.',
    priority: 'Medium',
  },
  {
    title: 'Cognitive Training',
    description: 'Engage in problem-solving activities to optimize cognitive load management.',
    priority: 'Low',
  },
];

const Grid = MuiGrid as React.ComponentType<any>;

export const Dashboard: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [isDrawerOpen, setIsDrawerOpen] = useState(!isMobile);
  const [selectedItem, setSelectedItem] = useState('Overview');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [openInviteDialog, setOpenInviteDialog] = useState(false);
  const [inviteForm, setInviteForm] = useState({
    doctorName: '',
    doctorEmail: '',
    specialization: '',
    hospitalName: '',
    additionalNotes: '',
  });
  const [formError, setFormError] = useState('');

  const handleNextQuestion = () => {
    setCurrentQuestion((prev) => (prev + 1) % dailyQuestions.length);
  };

  const handleInviteFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInviteForm({
      ...inviteForm,
      [e.target.name]: e.target.value,
    });
    setFormError('');
  };

  const handleSpecializationChange = (e: any) => {
    setInviteForm({
      ...inviteForm,
      specialization: e.target.value,
    });
  };

  const handleInviteSubmit = () => {
    if (!inviteForm.doctorName || !inviteForm.doctorEmail) {
      setFormError('Please fill in all required fields');
      return;
    }
    // Here you would typically make an API call to send the invitation
    console.log('Sending invitation:', inviteForm);
    setOpenInviteDialog(false);
    // Reset form
    setInviteForm({
      doctorName: '',
      doctorEmail: '',
      specialization: '',
      hospitalName: '',
      additionalNotes: '',
    });
  };

  return (
    <DashboardContainer>
      <Navbar />
      <Sidebar 
        selectedItem={selectedItem}
        onDrawerToggle={(open: boolean) => setIsDrawerOpen(open)}
      />

      <MainContent open={isDrawerOpen}>
        {/* Welcome Section */}
        <Box sx={{ mb: 3 }}>
          <WelcomeCard elevation={0}>
            <Box sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'space-between',
              alignItems: { xs: 'flex-start', sm: 'center' }
            }}>
              <Box>
                <Typography 
                  variant="h4" 
                  sx={{ 
                    fontSize: { xs: '2rem', sm: '2.5rem' },
                    fontWeight: 500,
                    color: '#7FE7F3',
                    mb: 1
                  }}
                >
                  Welcome back, Alex! ⭐
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontSize: { xs: '1rem', sm: '1.1rem' }
                  }}
                >
                  Here's your wellness summary for today
        </Typography>
      </Box>
              <Button
                variant="contained"
                onClick={() => navigate('/analyzer')}
      sx={{
                  mt: { xs: 2, sm: 0 },
          backgroundColor: 'rgba(127, 231, 243, 0.1)',
                  color: '#7FE7F3',
                  borderRadius: '12px',
                  px: 3,
                  py: 1.5,
          '&:hover': {
            backgroundColor: 'rgba(127, 231, 243, 0.2)',
          }
                }}
              >
                Start New Analysis
              </Button>
            </Box>
          </WelcomeCard>
        </Box>

        {/* Invite Doctor Section */}
        <Box sx={{ mb: 3 }}>
          <StyledCard>
            <CardContent sx={{ p: 3 }}>
              <Typography 
                variant="h5" 
                sx={{ 
                  color: '#7FE7F3',
                  fontSize: { xs: '1.5rem', sm: '1.75rem' },
                  mb: 2
                }}
              >
                Connect with a Mental Health Professional
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: { xs: '0.9rem', sm: '1rem' },
                  lineHeight: 1.6,
                  mb: 3
                }}
              >
                Get personalized care and expert guidance by inviting your doctor to monitor your mental health progress. Our secure platform ensures private and efficient communication.
              </Typography>
              <Button
                variant="outlined"
                startIcon={<SupportIcon />}
                onClick={() => setOpenInviteDialog(true)}
                sx={{
                  color: '#7FE7F3',
                  borderColor: 'rgba(127, 231, 243, 0.3)',
                  borderRadius: '12px',
                  px: 3,
                  py: 1.5,
        '&:hover': {
                    borderColor: '#7FE7F3',
                    backgroundColor: 'rgba(127, 231, 243, 0.1)',
                  }
                }}
              >
                Invite Your Doctor
              </Button>
            </CardContent>
          </StyledCard>
        </Box>

        {/* Current Status */}
        <Typography 
          variant="h5" 
          sx={{ 
            mb: 2,
            color: '#fff',
            fontSize: { xs: '1.5rem', sm: '1.75rem' },
            fontWeight: 500
          }}
        >
          Current Status
        </Typography>
        <Grid 
          container 
          spacing={2} 
        sx={{ 
            mb: 4,
            '& .MuiGrid-item': {
              display: 'flex',
            }
          }}
        >
          {indicators.map((indicator) => (
            <Grid item xs={6} sm={6} md={3} key={indicator.title}>
              <StyledCard sx={{ 
                width: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                background: 'rgba(17, 25, 41, 0.7)',
                borderRadius: '16px'
              }}>
                <CardContent sx={{ 
                  p: 3, 
                  flex: 1, 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'space-between',
                  height: '100%'
                }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: `${indicator.color}15`,
                        '& > svg': {
                          fontSize: '1.5rem'
                        }
                      }}
                    >
                      {indicator.icon}
                    </Box>
                    <Typography 
                      variant="h6"
                      sx={{ 
                        color: '#fff',
                        fontSize: { xs: '1.1rem', sm: '1.25rem' }
                      }}
                    >
                      {indicator.title}
                    </Typography>
                  </Box>
                  <Typography 
                    variant="h5"
                    sx={{ 
                      color: indicator.color,
                      fontSize: { xs: '1.5rem', sm: '1.75rem' },
                      fontWeight: 500,
                      mt: 2
                    }}
                  >
                    {indicator.value}
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>

        {/* Personalized Recommendations */}
        <Typography 
          variant="h5" 
          sx={{ 
            mb: 2,
            color: '#fff',
            fontSize: { xs: '1.5rem', sm: '1.75rem' },
            fontWeight: 500
          }}
        >
          Personalized Recommendations
        </Typography>
        <StyledCard sx={{ mb: { xs: 3, md: 4 } }}>
          <List sx={{ p: 2 }}>
            {recommendations.map((recommendation, index) => (
              <React.Fragment key={recommendation.title}>
                <ListItem 
                  sx={{ 
                    px: 2,
                    py: 2,
                  }}
                >
                  <Box
        sx={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'rgba(127, 231, 243, 0.1)',
                      mr: 2
                    }}
                  >
                    <ImprovementIcon />
                  </Box>
                  <ListItemText
                    primary={
          <Typography 
            variant="h6" 
            sx={{ 
                          color: '#fff',
                          fontSize: { xs: '1rem', sm: '1.1rem' },
                          mb: 1
                        }}
                      >
                        {recommendation.title}
          </Typography>
                    }
                    secondary={
                      <Stack direction="row" spacing={1}>
                        <Chip
                          label={recommendation.priority}
                          size="small"
                          sx={{
                            backgroundColor: 'rgba(127, 231, 243, 0.1)',
                            color: '#7FE7F3',
                            borderRadius: '15px',
                          }}
                        />
                      </Stack>
                    }
                  />
                  <Button
                    variant="outlined"
                    sx={{
                      ml: 2,
                      color: '#7FE7F3',
                      borderColor: 'rgba(127, 231, 243, 0.3)',
                      borderRadius: '20px',
                      px: 3,
                      '&:hover': {
                        borderColor: '#7FE7F3',
                        backgroundColor: 'rgba(127, 231, 243, 0.1)',
                      }
                    }}
                  >
                    Learn More
                  </Button>
                </ListItem>
                {index < recommendations.length - 1 && (
                  <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)' }} />
                )}
              </React.Fragment>
            ))}
        </List>
          <Box sx={{ p: 2, textAlign: 'center' }}>
            <Button
              variant="text"
              sx={{ 
                color: '#7FE7F3',
                '&:hover': {
                  backgroundColor: 'rgba(127, 231, 243, 0.1)',
                }
              }}
            >
              View All Recommendations
            </Button>
          </Box>
        </StyledCard>

        {/* Today's Activities */}
        <Typography 
          variant="h5" 
          sx={{ 
            mb: 2,
            color: '#fff',
            fontSize: { xs: '1.5rem', sm: '1.75rem' },
            fontWeight: 500
          }}
        >
          Today's Activities
              </Typography>
        <StyledCard sx={{ mb: { xs: 3, md: 4 } }}>
          <List sx={{ p: 2 }}>
            {wellnessActivities.slice(0, 4).map((activity, index) => (
              <React.Fragment key={activity.title}>
                <ListItem 
                  sx={{ 
                    px: 2,
                    py: 2,
                  }}
                >
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'rgba(127, 231, 243, 0.1)',
                      mr: 2
                    }}
                  >
                    {activity.icon}
                  </Box>
                  <ListItemText
                    primary={
          <Typography 
                        variant="h6" 
            sx={{ 
                          color: '#fff',
                          fontSize: { xs: '1rem', sm: '1.1rem' },
                          mb: 1
                        }}
                      >
                        {activity.title}
          </Typography>
                    }
                    secondary={
                      <Stack direction="row" spacing={1}>
                        <Chip
                          label={activity.duration}
                          size="small"
                          sx={{
                            backgroundColor: 'rgba(127, 231, 243, 0.1)',
                            color: '#7FE7F3',
                            borderRadius: '15px',
                          }}
                        />
                        <Chip
                          label={activity.type}
                          size="small"
                          sx={{
                            backgroundColor: 'rgba(127, 231, 243, 0.1)',
                            color: '#7FE7F3',
                            borderRadius: '15px',
                          }}
                        />
                      </Stack>
                    }
                  />
                  <Button
                    variant="outlined"
                    sx={{
                      ml: 2,
                      color: '#7FE7F3',
                      borderColor: 'rgba(127, 231, 243, 0.3)',
                      borderRadius: '20px',
                      px: 3,
                      '&:hover': {
                        borderColor: '#7FE7F3',
                        backgroundColor: 'rgba(127, 231, 243, 0.1)',
                      }
                    }}
                  >
                    Start
                  </Button>
                </ListItem>
                {index < wellnessActivities.slice(0, 4).length - 1 && (
                  <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)' }} />
                )}
              </React.Fragment>
            ))}
          </List>
          <Box sx={{ p: 2, textAlign: 'center' }}>
            <Button
              variant="text"
              sx={{ 
                color: '#7FE7F3',
                '&:hover': {
                  backgroundColor: 'rgba(127, 231, 243, 0.1)',
                }
              }}
            >
              View All Activities
            </Button>
          </Box>
        </StyledCard>

        {/* Daily Reflection */}
        <Box sx={{ mt: 4 }}>
          <StyledCard>
            <CardContent sx={{ p: 3 }}>
              <Typography 
                variant="h6" 
              sx={{ 
                  color: '#7FE7F3',
                  fontSize: { xs: '1.25rem', sm: '1.5rem' },
                  mb: 2
                }}
              >
                Daily Reflection
              </Typography>
              <Typography 
                variant="h5" 
              sx={{ 
                  color: '#fff',
                  fontSize: { xs: '1.75rem', sm: '2rem' },
                  mb: 3,
                  fontWeight: 500
                }}
              >
                {dailyQuestions[currentQuestion]}
              </Typography>
              <Button
                variant="outlined"
                onClick={handleNextQuestion}
                sx={{ 
                  color: '#7FE7F3',
                  borderColor: 'rgba(127, 231, 243, 0.3)',
                  borderRadius: '12px',
                  px: 3,
                  py: 1.5,
                  '&:hover': {
                    borderColor: '#7FE7F3',
                    backgroundColor: 'rgba(127, 231, 243, 0.1)',
                  }
                }}
              >
                Next Question
              </Button>
            </CardContent>
          </StyledCard>
        </Box>

        {/* Invite Doctor Dialog */}
        <Dialog 
          open={openInviteDialog} 
          onClose={() => setOpenInviteDialog(false)}
          PaperProps={{
            sx: {
              backgroundColor: 'rgba(17, 17, 44, 0.95)',
              backdropFilter: 'blur(10px)',
              borderRadius: 2,
              minWidth: { xs: '90%', sm: '500px' },
            }
          }}
        >
          <DialogTitle sx={{ color: '#7FE7F3' }}>
            Invite Your Doctor
          </DialogTitle>
          <DialogContent>
            {formError && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {formError}
              </Alert>
            )}
            <Stack spacing={2} sx={{ mt: 1 }}>
              <TextField
                name="doctorName"
                label="Doctor's Name"
                required
                fullWidth
                value={inviteForm.doctorName}
                onChange={handleInviteFormChange}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'rgba(127, 231, 243, 0.3)',
                    },
                  },
                }}
              />
              <TextField
                name="doctorEmail"
                label="Doctor's Email"
                type="email"
                required
                fullWidth
                value={inviteForm.doctorEmail}
                onChange={handleInviteFormChange}
              sx={{ 
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'rgba(127, 231, 243, 0.3)',
                      },
                    },
                  }}
              />
              <FormControl fullWidth>
                <InputLabel>Specialization</InputLabel>
                <Select
                  value={inviteForm.specialization}
                  onChange={handleSpecializationChange}
                  label="Specialization"
                  sx={{
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'rgba(127, 231, 243, 0.3)',
                    },
                  }}
                >
                  <MenuItem value="psychiatrist">Psychiatrist</MenuItem>
                  <MenuItem value="neurologist">Neurologist</MenuItem>
                  <MenuItem value="psychologist">Psychologist</MenuItem>
                  <MenuItem value="therapist">Therapist</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </Select>
              </FormControl>
              <TextField
                name="hospitalName"
                label="Hospital/Clinic Name"
                fullWidth
                value={inviteForm.hospitalName}
                onChange={handleInviteFormChange}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'rgba(127, 231, 243, 0.3)',
                    },
                  },
                }}
              />
              <TextField
                name="additionalNotes"
                label="Additional Notes"
                multiline
                rows={3}
                fullWidth
                value={inviteForm.additionalNotes}
                onChange={handleInviteFormChange}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'rgba(127, 231, 243, 0.3)',
                    },
                  },
                }}
              />
            </Stack>
          </DialogContent>
          <DialogActions sx={{ p: 3 }}>
            <Button 
              onClick={() => setOpenInviteDialog(false)}
              sx={{ 
                color: 'text.secondary',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                },
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              onClick={handleInviteSubmit}
              sx={{
                backgroundColor: 'rgba(127, 231, 243, 0.1)',
                color: '#7FE7F3',
                borderRadius: '20px',
                px: 3,
                border: '1px solid rgba(127, 231, 243, 0.3)',
                '&:hover': {
                  backgroundColor: 'rgba(127, 231, 243, 0.2)',
                },
              }}
            >
              Send Invitation
            </Button>
          </DialogActions>
        </Dialog>

        {/* Background Gradient */}
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            right: 0,
            width: '50%',
            height: '100%',
            background: 'radial-gradient(circle at 70% 30%, rgba(127, 231, 243, 0.15) 0%, rgba(10, 10, 26, 0) 50%)',
            zIndex: -1,
          }}
        />
      </MainContent>
    </DashboardContainer>
  );
}; 