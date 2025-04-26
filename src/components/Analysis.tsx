import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Paper,
  Card,
  CardContent,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Button,
  CircularProgress,
  Divider,
  TextField,
  IconButton,
  Avatar,
  Drawer,
  Toolbar,
  AppBar,
  Grid as MuiGrid,
  Stack,
  useTheme,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert,
} from '@mui/material';
import {
  Psychology as BrainIcon,
  Lightbulb as InsightIcon,
  CheckCircle as CheckIcon,
  Warning as WarningIcon,
  ArrowUpward as ImprovementIcon,
  Send as SendIcon,
  LocationOn as LocationIcon,
  Support as SupportIcon,
  Chat as ChatIcon,
  Close as CloseIcon,
  Dashboard as DashboardIcon,
  Timeline,
  Psychology,
  SelfImprovement,
  Help,
  Settings,
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import logo from '../assets/logo.png';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from 'recharts';
import { Sidebar, DRAWER_WIDTH } from './Sidebar';

const Grid = MuiGrid as React.ComponentType<any>;

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  background: 'rgba(22, 28, 36, 0.8)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(145, 158, 171, 0.12)',
  borderRadius: 16,
  display: 'flex',
  flexDirection: 'column'
}));

// Sample classification results
const classificationResults = {
  focus: 85,
  meditation: 70,
  stress: 45,
  cognitive_load: 60,
};

// Sample nearby clinics
const nearbyClinics = [
  {
    name: 'NeuroHealth Center',
    distance: '0.8 miles',
    address: '123 Brain Street, San Francisco, CA',
    specialties: ['Neurology', 'Mental Health'],
    rating: 4.8,
  },
  {
    name: 'Mind & Wellness Clinic',
    distance: '1.2 miles',
    address: '456 Cognitive Ave, San Francisco, CA',
    specialties: ['Psychology', 'Psychiatry'],
    rating: 4.6,
  },
  {
    name: 'BrainCare Medical',
    distance: '2.1 miles',
    address: '789 Neural Drive, San Francisco, CA',
    specialties: ['Neurofeedback', 'Therapy'],
    rating: 4.7,
  },
];

// Sample chat messages
interface ChatMessage {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

// Sample EEG data
const generateEEGData = (startTime: number, length: number) => {
  return Array.from({ length }, (_, i) => ({
    time: startTime + i,
    alpha: Math.sin((startTime + i) * 0.1) * 10 + Math.random() * 5,
    beta: Math.cos((startTime + i) * 0.1) * 8 + Math.random() * 4,
    theta: Math.sin((startTime + i) * 0.05) * 6 + Math.random() * 3,
    delta: Math.cos((startTime + i) * 0.05) * 12 + Math.random() * 6,
  }));
};

const sidebarItems = [
  { text: 'Overview', icon: DashboardIcon, path: '/dashboard' },
  { text: 'Analysis', icon: BrainIcon, path: '/analyzer' },
  { text: 'Mental Wellness', icon: Psychology, path: '/mental-wellness' },
  { text: 'Self-Care', icon: SelfImprovement, path: '/self-care' },
  { text: 'Support', icon: Help, path: '/support' },
  { text: 'Settings', icon: Settings, path: '/settings' },
];

interface EEGData {
  time: number;
  alpha: number;
  beta: number;
  theta: number;
  delta: number;
}

export const Analysis: React.FC = () => {
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState('Analysis');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      text: "Hello! I'm your NeuroAssistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const chatContainerRef = React.useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const [currentTime, setCurrentTime] = useState(300);
  const [eegData, setEEGData] = useState<EEGData[]>(generateEEGData(currentTime, 100));
  const [openInviteDialog, setOpenInviteDialog] = useState(false);
  const [inviteForm, setInviteForm] = useState({
    doctorName: '',
    doctorEmail: '',
    specialization: '',
    hospitalName: '',
    additionalNotes: '',
  });
  const [formError, setFormError] = useState('');

  const handleNavigation = (text: string, path: string) => {
    setSelectedItem(text);
    navigate(path);
  };

  const handleStartAnalysis = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
    }, 2000);
  };

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const userMessage: ChatMessage = {
      id: chatMessages.length + 1,
      text: newMessage,
      sender: 'user',
      timestamp: new Date(),
    };

    setChatMessages([...chatMessages, userMessage]);
    setNewMessage('');

    // Simulate bot response
    setTimeout(() => {
      const botMessage: ChatMessage = {
        id: chatMessages.length + 2,
        text: "I understand your concern. Based on your recent brain activity patterns, I'd recommend focusing on mindfulness exercises. Would you like me to suggest some specific techniques?",
        sender: 'bot',
        timestamp: new Date(),
      };
      setChatMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  React.useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatMessages]);

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(prev => prev + 1);
      setEEGData(prev => {
        const newPoint = {
          time: prev[prev.length - 1].time + 1,
          alpha: Math.sin(prev[prev.length - 1].time * 0.1) * 10 + Math.random() * 5,
          beta: Math.cos(prev[prev.length - 1].time * 0.1) * 8 + Math.random() * 4,
          theta: Math.sin(prev[prev.length - 1].time * 0.05) * 6 + Math.random() * 3,
          delta: Math.cos(prev[prev.length - 1].time * 0.05) * 12 + Math.random() * 6,
        };
        return [...prev.slice(1), newPoint];
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#0A0A1A' }}>
      <Sidebar selectedItem={selectedItem} />

      <Box sx={{ flexGrow: 1 }}>
        <AppBar 
          position="fixed" 
          color="transparent" 
          elevation={0} 
          sx={{ 
            backdropFilter: 'blur(10px)',
            width: '100%',
            bgcolor: 'rgba(22, 28, 36, 0.2)'
          }}
        >
          <Container maxWidth="xl">
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="h6" sx={{ color: '#fff' }}>
                Brain Wave Analysis
              </Typography>
              <Button
                variant="contained"
                startIcon={<SupportIcon />}
                onClick={() => setOpenInviteDialog(true)}
                sx={{
                  backgroundColor: 'rgba(127, 231, 243, 0.1)',
                  color: '#7FE7F3',
                  borderRadius: '12px',
                  px: { xs: 2, sm: 3 },
                  py: 1,
                  border: '1px solid rgba(127, 231, 243, 0.3)',
                  '&:hover': {
                    backgroundColor: 'rgba(127, 231, 243, 0.2)',
                  }
                }}
              >
                Invite a Doctor
              </Button>
            </Toolbar>
          </Container>
        </AppBar>

        <Container maxWidth="xl" sx={{ mt: 10, mb: 4, px: { xs: 2, sm: 3 } }}>
          {/* Analysis Controls */}
          <Paper 
            sx={{ 
              p: { xs: 2, sm: 3 }, 
              mb: { xs: 2, sm: 4 },
              backgroundColor: 'rgba(22, 28, 36, 0.8)',
              backdropFilter: 'blur(10px)',
              borderRadius: 2
            }}
          >
            <Box sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: { xs: 'stretch', sm: 'center' }, 
              justifyContent: 'space-between',
              gap: 2
            }}>
              <Typography variant="h6" sx={{ color: '#fff' }}>Real-time Analysis</Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={handleStartAnalysis}
                disabled={isAnalyzing}
                startIcon={isAnalyzing ? <CircularProgress size={20} /> : <BrainIcon />}
                sx={{
                  backgroundColor: 'rgba(127, 231, 243, 0.1)',
                  color: '#7FE7F3',
                  borderRadius: '12px',
                  px: 3,
                  py: 1,
                  '&:hover': {
                    backgroundColor: 'rgba(127, 231, 243, 0.2)',
                  }
                }}
              >
                {isAnalyzing ? 'Analyzing...' : 'Start Analysis'}
              </Button>
            </Box>
          </Paper>

          {/* Classification Results and AI Insights */}
          <Box sx={{ 
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: 3,
            mb: { xs: 2, sm: 4 },
            '& > *': {
              minHeight: '100%'
            }
          }}>
            {/* Classification Results */}
            <StyledCard>
              <CardContent sx={{ 
                p: { xs: 2, sm: 3 },
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <Typography variant="h6" gutterBottom sx={{ color: '#fff' }}>Classification Results</Typography>
                <List sx={{ 
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}>
                  {Object.entries(classificationResults).map(([key, value]) => (
                    <ListItem key={key} sx={{ 
                      px: 0,
                      py: 2
                    }}>
                      <ListItemIcon>
                        <Box
                          sx={{
                            width: 32,
                            height: 32,
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: 'rgba(127, 231, 243, 0.1)',
                          }}
                        >
                          <BrainIcon sx={{ color: '#7FE7F3', fontSize: 20 }} />
                        </Box>
                      </ListItemIcon>
                      <ListItemText 
                        primary={
                          <Typography variant="body1" sx={{ color: '#fff', mb: 1 }}>
                            {key.replace('_', ' ').toUpperCase()}
                          </Typography>
                        }
                        secondary={
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Box 
                              sx={{ 
                                flexGrow: 1, 
                                bgcolor: 'rgba(22, 28, 36, 0.8)',
                                borderRadius: 1,
                                mr: 2,
                                height: 8
                              }}
                            >
                              <Box
                                sx={{
                                  width: `${value}%`,
                                  bgcolor: '#7FE7F3',
                                  height: '100%',
                                  borderRadius: 1,
                                }}
                              />
                            </Box>
                            <Typography variant="body2" sx={{ color: '#7FE7F3', minWidth: 45 }}>
                              {value}%
                            </Typography>
                          </Box>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </StyledCard>

            {/* AI Insights */}
            <StyledCard>
              <CardContent sx={{ 
                p: { xs: 2, sm: 3 },
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <Typography variant="h6" gutterBottom sx={{ color: '#fff' }}>AI Insights</Typography>
                <List sx={{ 
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}>
                  {[
                    {
                      text: 'Your focus levels are exceptionally high, indicating strong concentration abilities.',
                      icon: CheckIcon,
                      color: '#4CAF50',
                    },
                    {
                      text: 'Moderate stress levels detected. Consider incorporating stress management techniques.',
                      icon: WarningIcon,
                      color: '#FFC107',
                    },
                    {
                      text: 'Your meditation practice is showing positive results. Keep maintaining regular sessions.',
                      icon: ImprovementIcon,
                      color: '#7FE7F3',
                    },
                  ].map((insight, index) => (
                    <ListItem key={index} sx={{ 
                      px: 0,
                      py: 2
                    }}>
                      <ListItemIcon>
                        <Box
                          sx={{
                            width: 32,
                            height: 32,
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: `${insight.color}15`,
                          }}
                        >
                          <insight.icon sx={{ color: insight.color, fontSize: 20 }} />
                        </Box>
                      </ListItemIcon>
                      <ListItemText 
                        primary={
                          <Typography 
                            sx={{ 
                              color: '#fff',
                              fontSize: { xs: '0.875rem', sm: '1rem' },
                              lineHeight: 1.5
                            }}
                          >
                            {insight.text}
                          </Typography>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </StyledCard>
          </Box>

          {/* EEG Analysis */}
          <Grid container spacing={{ xs: 2, sm: 3 }} sx={{ mb: { xs: 2, sm: 4 } }}>
            <Grid item xs={12}>
              <StyledCard>
                <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
                  <Typography variant="h6" gutterBottom sx={{ color: '#fff' }}>
                    Real-time EEG Waves
                  </Typography>
                  <Box sx={{ height: { xs: 250, sm: 300 } }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={eegData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(145, 158, 171, 0.12)" />
                        <XAxis 
                          dataKey="time" 
                          stroke="#919EAB"
                          tick={{ fill: '#919EAB' }}
                          tickLine={{ stroke: '#919EAB' }}
                          domain={['dataMin', 'dataMax']}
                          type="number"
                          interval="preserveStartEnd"
                          tickCount={10}
                        />
                        <YAxis 
                          stroke="#919EAB"
                          tick={{ fill: '#919EAB' }}
                          tickLine={{ stroke: '#919EAB' }}
                          ticks={[-18, -9, 0, 9, 18]}
                          domain={[-18, 18]}
                        />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: 'rgba(22, 28, 36, 0.9)',
                            border: '1px solid rgba(145, 158, 171, 0.12)',
                            borderRadius: '8px',
                          }}
                        />
                        <Line
                          type="monotone"
                          dataKey="alpha"
                          stroke="#7FE7F3"
                          dot={false}
                          name="Alpha Waves"
                        />
                        <Line
                          type="monotone"
                          dataKey="beta"
                          stroke="#ACB6E5"
                          dot={false}
                          name="Beta Waves"
                        />
                        <Line
                          type="monotone"
                          dataKey="theta"
                          stroke="#4CAF50"
                          dot={false}
                          name="Theta Waves"
                        />
                        <Line
                          type="monotone"
                          dataKey="delta"
                          stroke="#FFC107"
                          dot={false}
                          name="Delta Waves"
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </Box>
                  <Typography variant="body2" sx={{ color: '#919EAB', mt: 2 }}>
                    Real-time visualization of all brain wave frequencies including Alpha, Beta, Theta, and Delta waves.
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>

            <Grid item xs={12}>
              <StyledCard>
                <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
                  <Typography variant="h6" gutterBottom sx={{ color: '#fff' }}>
                    Alpha Wave Activity
                  </Typography>
                  <Box sx={{ height: { xs: 250, sm: 300 } }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={eegData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(145, 158, 171, 0.12)" />
                        <XAxis 
                          dataKey="time" 
                          stroke="#919EAB"
                          tick={{ fill: '#919EAB' }}
                          tickLine={{ stroke: '#919EAB' }}
                          domain={['dataMin', 'dataMax']}
                          type="number"
                          interval="preserveStartEnd"
                          tickCount={10}
                        />
                        <YAxis 
                          stroke="#919EAB"
                          tick={{ fill: '#919EAB' }}
                          tickLine={{ stroke: '#919EAB' }}
                          ticks={[-16, -8, 0, 8, 16]}
                          domain={[-16, 16]}
                        />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: 'rgba(22, 28, 36, 0.9)',
                            border: '1px solid rgba(145, 158, 171, 0.12)',
                            borderRadius: '8px',
                          }}
                        />
                        <Area
                          type="monotone"
                          dataKey="alpha"
                          stroke="#7FE7F3"
                          fill="rgba(127, 231, 243, 0.2)"
                          name="Alpha Wave"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </Box>
                  <Typography variant="body2" sx={{ color: '#919EAB', mt: 2 }}>
                    Alpha waves are associated with relaxation and mental coordination. Higher alpha activity often indicates a calm, focused state.
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>
          </Grid>

          {/* Support and Resources Section */}
          <Grid container spacing={{ xs: 2, sm: 3 }}>
            {/* Nearby Clinics */}
            <Grid item xs={12} md={6}>
              <StyledCard>
                <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <LocationIcon sx={{ mr: 1, color: '#7FE7F3' }} />
                    <Typography variant="h6" sx={{ color: '#fff' }}>Nearby Mental Health Clinics</Typography>
                  </Box>
                  <List>
                    {nearbyClinics.map((clinic, index) => (
                      <React.Fragment key={clinic.name}>
                        <ListItem sx={{ px: 0 }}>
                          <ListItemText
                            primary={
                              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 1 }}>
                                <Typography variant="subtitle1" sx={{ color: '#fff' }}>{clinic.name}</Typography>
                                <Chip 
                                  label={clinic.distance} 
                                  size="small"
                                  sx={{ 
                                    backgroundColor: 'rgba(127, 231, 243, 0.1)',
                                    color: '#7FE7F3',
                                  }}
                                />
                              </Box>
                            }
                            secondary={
                              <>
                                <Typography variant="body2" sx={{ color: '#919EAB', mt: 1 }}>
                                  {clinic.address}
                                </Typography>
                                <Box sx={{ display: 'flex', gap: 1, mt: 1, flexWrap: 'wrap' }}>
                                  {clinic.specialties.map(specialty => (
                                    <Chip 
                                      key={specialty}
                                      label={specialty}
                                      size="small"
                                      sx={{ 
                                        backgroundColor: 'rgba(22, 28, 36, 0.8)',
                                        color: '#919EAB',
                                      }}
                                    />
                                  ))}
                                </Box>
                              </>
                            }
                          />
                        </ListItem>
                        {index < nearbyClinics.length - 1 && (
                          <Divider sx={{ borderColor: 'rgba(145, 158, 171, 0.12)' }} />
                        )}
                      </React.Fragment>
                    ))}
                  </List>
                </CardContent>
              </StyledCard>
            </Grid>

            {/* Support and Chat */}
            <Grid item xs={12} md={6}>
              <StyledCard>
                <CardContent sx={{ p: { xs: 2, sm: 3 }, minHeight: { xs: 300, sm: 400 } }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <SupportIcon sx={{ mr: 1, color: '#7FE7F3' }} />
                    <Typography variant="h6" sx={{ color: '#fff' }}>24/7 Support</Typography>
                  </Box>
                  
                  {!isChatOpen ? (
                    <Box sx={{ textAlign: 'center', py: 4 }}>
                      <Button
                        variant="contained"
                        startIcon={<ChatIcon />}
                        onClick={() => setIsChatOpen(true)}
                        sx={{
                          backgroundColor: 'rgba(127, 231, 243, 0.1)',
                          color: '#7FE7F3',
                          '&:hover': {
                            backgroundColor: 'rgba(127, 231, 243, 0.2)',
                          }
                        }}
                      >
                        Start Chat with NeuroAssistant
                      </Button>
                      <Typography variant="body2" sx={{ color: '#919EAB', mt: 2 }}>
                        Get instant support and guidance from our AI assistant
                      </Typography>
                    </Box>
                  ) : (
                    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <IconButton 
                          size="small" 
                          onClick={() => setIsChatOpen(false)}
                          sx={{ mb: 1, color: '#919EAB' }}
                        >
                          <CloseIcon />
                        </IconButton>
                      </Box>
                      
                      <Box 
                        ref={chatContainerRef}
                        sx={{ 
                          flexGrow: 1, 
                          overflowY: 'auto',
                          maxHeight: { xs: '300px', sm: '400px' },
                          mb: 2,
                          px: 1
                        }}
                      >
                        {chatMessages.map(message => (
                          <Box
                            key={message.id}
                            sx={{
                              display: 'flex',
                              justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start',
                              mb: 2,
                            }}
                          >
                            {message.sender === 'bot' && (
                              <Avatar 
                                sx={{ 
                                  bgcolor: 'rgba(127, 231, 243, 0.1)',
                                  mr: 1,
                                }}
                              >
                                <BrainIcon sx={{ color: '#7FE7F3' }} />
                              </Avatar>
                            )}
                            <Paper
                              sx={{
                                maxWidth: '80%',
                                p: 2,
                                backgroundColor: message.sender === 'user' 
                                  ? 'rgba(127, 231, 243, 0.1)' 
                                  : 'rgba(22, 28, 36, 0.8)',
                                borderRadius: 2,
                                color: '#fff'
                              }}
                            >
                              <Typography variant="body1" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>
                                {message.text}
                              </Typography>
                              <Typography 
                                variant="caption" 
                                sx={{ 
                                  display: 'block',
                                  mt: 1,
                                  color: '#919EAB',
                                }}
                              >
                                {message.timestamp.toLocaleTimeString()}
                              </Typography>
                            </Paper>
                            {message.sender === 'user' && (
                              <Avatar 
                                sx={{ 
                                  bgcolor: 'rgba(127, 231, 243, 0.1)',
                                  ml: 1,
                                }}
                              >
                                U
                              </Avatar>
                            )}
                          </Box>
                        ))}
                      </Box>
                      
                      <Box sx={{ display: 'flex', gap: 1 }}>
                        <TextField
                          fullWidth
                          variant="outlined"
                          placeholder="Type your message..."
                          value={newMessage}
                          onChange={(e) => setNewMessage(e.target.value)}
                          onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                              handleSendMessage();
                            }
                          }}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              backgroundColor: 'rgba(22, 28, 36, 0.8)',
                              borderRadius: '12px',
                              color: '#fff',
                              '& fieldset': {
                                borderColor: 'rgba(145, 158, 171, 0.12)',
                              },
                              '&:hover fieldset': {
                                borderColor: 'rgba(145, 158, 171, 0.24)',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: '#7FE7F3',
                              },
                            },
                            '& .MuiInputBase-input::placeholder': {
                              color: '#919EAB',
                            },
                          }}
                        />
                        <IconButton 
                          onClick={handleSendMessage}
                          sx={{ 
                            backgroundColor: 'rgba(127, 231, 243, 0.1)',
                            borderRadius: '12px',
                            p: 2,
                            color: '#7FE7F3',
                            '&:hover': {
                              backgroundColor: 'rgba(127, 231, 243, 0.2)',
                            }
                          }}
                        >
                          <SendIcon />
                        </IconButton>
                      </Box>
                    </Box>
                  )}
                </CardContent>
              </StyledCard>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}; 