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
import { Sidebar, DRAWER_WIDTH } from './Sidebar';

// Styled components
const DashboardContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  minHeight: '100vh',
  background: theme.palette.background.default,
}));

const MainContent = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  padding: 0,
  marginLeft: 50,
}));

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  background: 'rgba(127, 231, 243, 0.05)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

const WelcomeCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginBottom: theme.spacing(3),
  background: 'rgba(127, 231, 243, 0.1)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
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
      <Sidebar selectedItem={selectedItem} />

      {/* Main content */}
      <MainContent>
        {/* Welcome Section with Stats */}
        <Box sx={{ mb: 4 }}>
          <WelcomeCard elevation={0}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <Box>
                <Typography 
                  variant="h4" 
                  gutterBottom 
                  sx={{ 
                    fontWeight: 600,
                    background: 'linear-gradient(45deg, #7FE7F3, #ACB6E5)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                  }}
                >
                  Welcome back, Alex! 🌟
                </Typography>
                <Typography variant="h6" color="text.secondary" sx={{ mb: 2 }}>
                  Here's your wellness summary for today
                </Typography>
              </Box>
              <Button
                variant="contained"
                onClick={() => navigate('/analyzer')}
                sx={{ 
                  borderRadius: '20px',
                  px: 3,
                  py: 1.5,
                  backgroundColor: 'rgba(127, 231, 243, 0.1)',
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
        <Paper 
          sx={{ 
            p: 3,
            mb: 4,
            background: 'linear-gradient(135deg, rgba(127, 231, 243, 0.1), rgba(172, 182, 229, 0.1))',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(127, 231, 243, 0.2)',
            borderRadius: 2,
          }}
        >
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={8}>
              <Typography variant="h5" gutterBottom sx={{ color: '#7FE7F3' }}>
                Connect with a Mental Health Professional
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Get personalized care and expert guidance by inviting your doctor to monitor your mental health progress.
                Our secure platform ensures private and efficient communication.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'left', md: 'right' } }}>
              <Button
                variant="contained"
                startIcon={<SupportIcon />}
                onClick={() => setOpenInviteDialog(true)}
                sx={{
                  backgroundColor: 'rgba(127, 231, 243, 0.1)',
                  color: '#7FE7F3',
                  borderRadius: '20px',
                  px: 4,
                  py: 1.5,
                  border: '1px solid rgba(127, 231, 243, 0.3)',
                  boxShadow: '0 0 10px rgba(127, 231, 243, 0.2)',
                  '&:hover': {
                    backgroundColor: 'rgba(127, 231, 243, 0.2)',
                    boxShadow: '0 0 15px rgba(127, 231, 243, 0.3)',
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                Invite Your Doctor
              </Button>
            </Grid>
          </Grid>
        </Paper>

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

        {/* Status Cards */}
        <Typography variant="h6" sx={{ mb: 2, pl: 1 }}>
          Current Status
        </Typography>
        <Grid container spacing={2} sx={{ mb: 4 }}>
          {indicators.map((indicator) => (
            <Grid item key={indicator.title} xs={12} sm={6} md={3}>
              <StyledCard elevation={0}>
                <CardContent>
                  <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
                    <IconButton
                      size="small"
                      sx={{ 
                        backgroundColor: `${indicator.color}15`,
                        color: indicator.color,
                      }}
                    >
                      {indicator.icon}
                    </IconButton>
                    <Typography variant="h6" component="div">
                      {indicator.title}
                    </Typography>
                  </Stack>
                  <Typography 
                    variant="h5"
                    component="div"
                    sx={{ 
                      color: indicator.color,
                      fontWeight: 500,
                    }}
                  >
                    {indicator.value}
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>

        {/* Two Column Layout for Recommendations and Activities */}
        <Grid container spacing={3} alignItems="flex-start">
          {/* Left Column - Personalized Recommendations */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6" sx={{ mb: 2, pl: 1 }}>
              Personalized Recommendations
            </Typography>
            <Paper 
              sx={{ 
                p: 3,
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <List>
                {recommendations.map((rec, index) => (
                  <React.Fragment key={index}>
                    <ListItem>
                      <ListItemIcon>
                        <InsightIcon sx={{ color: '#7FE7F3' }} />
                      </ListItemIcon>
                      <ListItemText 
                        primary={
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            {rec.title}
                            <Chip 
                              label={rec.priority} 
                              size="small"
                              sx={{ 
                                backgroundColor: 
                                  rec.priority === 'High' ? 'rgba(76, 175, 80, 0.1)' :
                                  rec.priority === 'Medium' ? 'rgba(255, 193, 7, 0.1)' :
                                  'rgba(127, 231, 243, 0.1)',
                                color:
                                  rec.priority === 'High' ? '#4CAF50' :
                                  rec.priority === 'Medium' ? '#FFC107' :
                                  '#7FE7F3',
                              }}
                            />
                          </Box>
                        } 
                        secondary={rec.description}
                      />
                    </ListItem>
                    {index < recommendations.length - 1 && (
                      <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)' }} />
                    )}
                  </React.Fragment>
                ))}
              </List>
            </Paper>

            {/* Daily Reflection */}
            <Paper 
              sx={{ 
                p: 3,
                mt: 3,
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <Typography variant="h6" gutterBottom>
                Daily Reflection
              </Typography>
              <Typography 
                variant="h5" 
                sx={{ 
                  color: '#7FE7F3',
                  fontWeight: 500,
                  mb: 2
                }}
              >
                {dailyQuestions[currentQuestion]}
              </Typography>
              <Button
                variant="outlined"
                color="primary"
                onClick={handleNextQuestion}
                sx={{ 
                  borderRadius: '20px',
                  px: 3,
                }}
              >
                Next Question
              </Button>
            </Paper>
          </Grid>

          {/* Right Column - Today's Activities */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6" sx={{ mb: 2, pl: 1 }}>
              Today's Activities
            </Typography>
            <Paper 
              sx={{ 
                p: 3,
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                display: 'flex',
                flexDirection: 'column',
                height: 'calc(100% - 40px)', // Subtracting the height of the Typography header
              }}
            >
              <List sx={{ flex: 1 }}>
                {wellnessActivities.slice(0, 4).map((activity, index) => (
                  <React.Fragment key={activity.title}>
                    <ListItem>
                      <ListItemIcon>
                        <IconButton
                          size="small"
                          sx={{ 
                            backgroundColor: 'rgba(127, 231, 243, 0.1)',
                            color: 'primary.main',
                          }}
                        >
                          {activity.icon}
                        </IconButton>
                      </ListItemIcon>
                      <ListItemText
                        primary={activity.title}
                        secondary={
                          <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                            <Chip
                              label={activity.duration}
                              size="small"
                              sx={{ backgroundColor: 'rgba(127, 231, 243, 0.1)' }}
                            />
                            <Chip
                              label={activity.type}
                              size="small"
                              sx={{ backgroundColor: 'rgba(127, 231, 243, 0.1)' }}
                            />
                          </Stack>
                        }
                      />
                      <Button
                        variant="outlined"
                        color="primary"
                        size="small"
                        sx={{ 
                          ml: 2,
                          borderRadius: '15px',
                          minWidth: '100px'
                        }}
                      >
                        Start
                      </Button>
                    </ListItem>
                    {index < 3 && (
                      <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)' }} />
                    )}
                  </React.Fragment>
                ))}
              </List>
              <Box sx={{ textAlign: 'center', mt: 'auto', pt: 2 }}>
                <Button
                  variant="text"
                  color="primary"
                  sx={{ 
                    borderRadius: '20px',
                    '&:hover': {
                      backgroundColor: 'rgba(127, 231, 243, 0.1)',
                    }
                  }}
                >
                  View All Activities
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>

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