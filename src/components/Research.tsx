import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  List,
  ListItem,
  ListItemText,
  Divider,
  useTheme,
  Fade,
} from '@mui/material';
import { Navbar } from './Navbar';

interface ResearchSection {
  title: string;
  content: React.ReactNode;
}

export const Research: React.FC = () => {
  const theme = useTheme();

  const sections: ResearchSection[] = [
    {
      title: "Problem & Impact",
      content: (
        <>
          <Typography variant="body1" paragraph>
            Global Burden: Nearly 970 million people worldwide live with a mental health disorder.
          </Typography>
          <Typography variant="body1" paragraph>
            Anxiety Prevalence: One in eight adults experience clinically significant anxiety symptoms.
          </Typography>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Economic Costs:
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="$1 trillion per year lost in global productivity due to mental health issues" />
            </ListItem>
            <ListItem>
              <ListItemText primary="12.8 billion AED per year lost in the Arab world alone" />
            </ListItem>
            <ListItem>
              <ListItemText primary="EEG Procedure Expense: Manual, slow EEG diagnostics incur over $16 billion annually in global healthcare costs" />
            </ListItem>
          </List>
        </>
      ),
    },
    {
      title: "Methodology",
      content: (
        <>
          <Typography variant="h6" gutterBottom>
            EEG Data Extraction & Preprocessing
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Signal Acquisition: 19-channel recordings following the international 10–20 system." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Artifact Removal & Filtering: Independent Component Analysis and 0.5–40 Hz band-pass filters cleanse raw data." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Epoch Segmentation: Non-overlapping 2-second windows baseline-corrected for consistency." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Dimensionality Reduction: PCA projects 19 channels onto the top 4 components, preserving 92% of signal variance." />
            </ListItem>
          </List>

          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Quantum State Preparation & Kernel Construction
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Amplitude Encoding: Four-dimensional feature vectors encoded into qubit amplitudes." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Phase Mapping: Diagonal Rz rotations embed non-linear feature relationships into Hilbert space." />
            </ListItem>
            <ListItem>
              <ListItemText primary="QSVM Kernel: Similarity computed as the squared overlap of quantum feature states." />
            </ListItem>
          </List>

          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Experimental Setup
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Backends: Hybrid execution on IBM Brisbane hardware (with error mitigation) and the Aer simulator." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Hyperparameter Tuning: Five-fold cross-validation optimizes regularization and kernel parameters." />
            </ListItem>
          </List>

          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Recommendation Generation
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Likelihood Vector: QSVM outputs—for example, [0.75, 0.12, 0.05, 0.03, 0.05]—are parsed by a fine-tuned LLM." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Actionable Insights: The LLM produces personalized guidance (e.g., relaxation exercises, clinician referrals) based on class probabilities." />
            </ListItem>
          </List>
        </>
      ),
    },
    {
      title: "Key Findings",
      content: (
        <List>
          <ListItem>
            <ListItemText primary="Accuracy: 81.3% true-positive and true-negative rate on held-out data." />
          </ListItem>
          <ListItem>
            <ListItemText primary="False Positives: 12.5% overall." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Quantum Advantage: QSVM training converges 30% faster and yields an 8% higher F1-score for anxiety detection versus classical RBF-SVM." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Circuit Efficiency: Post-optimization depth under 50 gates enables real-time inference." />
          </ListItem>
        </List>
      ),
    },
    {
      title: "Future Work",
      content: (
        <>
          <Typography variant="h6" gutterBottom>
            Short-Term Goals (6 Months):
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Prototype enhanced quantum algorithms for EEG data." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Conduct clinician co-design workshops." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Implement basic quantum-resistant data security protocols." />
            </ListItem>
          </List>

          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Long-Term Goals (3 Years):
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Launch clinical trials and secure regulatory approvals." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Build advanced quantum cryptography infrastructure." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Integrate MEG modalities into a fully quantum-native platform." />
            </ListItem>
          </List>
        </>
      ),
    },
    {
      title: "References",
      content: (
        <List>
          <ListItem>
            <ListItemText 
              primary="Aksoy, G., Cattan, G., Chakraborty, S. et al."
              secondary="Quantum Machine-Based Decision Support System for the Detection of Schizophrenia from EEG Records. J Med Syst."
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary="Chodavadia, P., Teo, I., Poremski, D., Fung, D. S. S., & Finkelstein, E. A."
              secondary="Prevalence and Economic Burden of Depression and Anxiety Symptoms Among Singaporean Adults. BMC Psychiatry, 23, 104 (2023)."
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary="World Health Organization"
              secondary="Mental Health. 2019."
            />
          </ListItem>
        </List>
      ),
    },
  ];

  return (
    <Box sx={{ minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      <Navbar />
      
      <Container maxWidth="xl" sx={{ mt: { xs: 10, sm: 12 }, mb: 8 }}>
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
              Research
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
              Dive deep into NeurotiQ's scientific foundation: a seamless integration of advanced EEG acquisition, rigorous signal processing, and pioneering quantum machine learning to revolutionize mental health diagnostics.
            </Typography>
          </Box>
        </Fade>

        <Box 
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
          }}
        >
          {sections.map((section, index) => (
            <Fade in timeout={1000} style={{ transitionDelay: `${index * 200}ms` }} key={section.title}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  background: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '16px',
                }}
              >
                <Typography
                  variant="h4"
                  component="h2"
                  sx={{
                    mb: 3,
                    fontSize: { xs: '1.8rem', md: '2.2rem' },
                    fontWeight: 600,
                    color: theme.palette.primary.main,
                  }}
                >
                  {section.title}
                </Typography>
                {section.content}
              </Paper>
            </Fade>
          ))}
        </Box>
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