import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  TextField,
  Paper,
  useTheme,
  AppBar,
  Toolbar,
  CircularProgress,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Sidebar, DRAWER_WIDTH } from './Sidebar';

interface Props {
  analysisData: any;
  setAnalysisData: (data: any) => void;
}

export const BrainWaveAnalyzer: React.FC<Props> = ({ analysisData, setAnalysisData }) => {
  const [inputText, setInputText] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState('Analysis');
  const theme = useTheme();
  const navigate = useNavigate();

  const handleAnalyze = async () => {
    setIsLoading(true);
    try {
      // TODO: Implement OpenAI analysis
      const mockAnalysis = {
        sentiment: 'positive',
        mentalState: 'calm',
        suggestions: ['Take deep breaths', 'Practice mindfulness', 'Stay hydrated']
      };
      setAnalysisData(mockAnalysis);
    } catch (error) {
      console.error('Error analyzing text:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'background.default' }}>
      <Sidebar selectedItem={selectedItem} />

      {/* Main Content */}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar 
          position="fixed" 
          color="transparent" 
          elevation={0} 
          sx={{ 
            backdropFilter: 'blur(10px)',
            ml: `${DRAWER_WIDTH}px`,
            width: `calc(100% - ${DRAWER_WIDTH}px)`
          }}
        >
          <Container maxWidth="xl">
            <Toolbar>
              <Typography variant="h6">
                Brain Wave Analysis
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>

        <Container maxWidth="md" sx={{ pt: 12, pb: 8 }}>
          <Typography 
            variant="h2" 
            component="h1" 
            align="center" 
            gutterBottom
            sx={{
              background: 'linear-gradient(45deg, #7FE7F3, #ACB6E5)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              mb: 4
            }}
          >
            Brain Wave Analysis
          </Typography>

          <Paper 
            elevation={3} 
            sx={{ 
              p: 4, 
              borderRadius: 4,
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)'
            }}
          >
            <TextField
              fullWidth
              multiline
              rows={6}
              variant="outlined"
              placeholder="Share your thoughts and feelings here..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              sx={{
                mb: 3,
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'rgba(127, 231, 243, 0.3)',
                  },
                  '&:hover fieldset': {
                    borderColor: 'rgba(127, 231, 243, 0.5)',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#7FE7F3',
                  },
                },
              }}
            />

            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={handleAnalyze}
                disabled={isLoading || !inputText.trim()}
                sx={{
                  px: 6,
                  py: 1.5,
                  borderRadius: '30px',
                  fontSize: '1.1rem',
                  backgroundColor: 'rgba(127, 231, 243, 0.1)',
                  '&:hover': {
                    backgroundColor: 'rgba(127, 231, 243, 0.2)',
                  },
                  '&.Mui-disabled': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  }
                }}
              >
                {isLoading ? (
                  <CircularProgress size={24} color="inherit" />
                ) : (
                  'Analyze'
                )}
              </Button>
            </Box>

            {analysisData && (
              <Box sx={{ mt: 4 }}>
                <Typography variant="h5" gutterBottom sx={{ color: '#7FE7F3' }}>
                  Analysis Results
                </Typography>
                <Typography variant="body1" paragraph>
                  Sentiment: {analysisData.sentiment}
                </Typography>
                <Typography variant="body1" paragraph>
                  Mental State: {analysisData.mentalState}
                </Typography>
                <Typography variant="h6" gutterBottom sx={{ color: '#7FE7F3', mt: 2 }}>
                  Suggestions:
                </Typography>
                <ul>
                  {analysisData.suggestions.map((suggestion: string, index: number) => (
                    <Typography 
                      key={index} 
                      component="li" 
                      variant="body1"
                      sx={{ mb: 1 }}
                    >
                      {suggestion}
                    </Typography>
                  ))}
                </ul>
              </Box>
            )}
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};