import React, { useState } from 'react';
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
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../assets/logo.png';

export const menuItems = [
  { text: 'Features', path: '/features' },
  { text: 'Research', path: '/research' },
  { text: 'Dashboard', path: '/dashboard' },
  { text: 'About Us', path: '/about-us' },
];

export const Navbar: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigation = (item: { text: string; path?: string; onClick?: () => void }) => {
    if (item.path) {
      navigate(item.path);
    } else if (item.onClick) {
      item.onClick();
    }
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <AppBar 
        position="fixed" 
        color="transparent" 
        elevation={0} 
        sx={{ 
          backdropFilter: 'blur(10px)',
          background: 'rgba(17, 17, 44, 0.7)',
        }}
      >
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 8 } }}>
          <Toolbar sx={{ justifyContent: 'space-between', minHeight: { xs: 64, sm: 80 } }}>
            <Typography 
              variant="h6" 
              component="div" 
              sx={{ 
                display: 'flex', 
                alignItems: 'center',
                cursor: 'pointer'
              }}
              onClick={() => navigate('/')}
            >
              <img 
                src={logo} 
                alt="NeurotiQ Logo" 
                style={{ 
                  height: isMobile ? 60 : 80, 
                  width: 'auto' 
                }} 
              />
            </Typography>
            
            {isMobile ? (
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={toggleMobileMenu}
                sx={{ color: 'primary.main' }}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Stack direction="row" spacing={4}>
                {menuItems.map((item) => (
                  <Button 
                    key={item.text}
                    color="inherit"
                    onClick={() => handleNavigation(item)}
                    sx={{
                      '&:hover': {
                        color: 'primary.main',
                      }
                    }}
                  >
                    {item.text}
                  </Button>
                ))}
              </Stack>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Menu Drawer */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={toggleMobileMenu}
        PaperProps={{
          sx: {
            width: '100%',
            maxWidth: '300px',
            background: 'rgba(17, 17, 44, 0.95)',
            backdropFilter: 'blur(10px)',
            borderLeft: '1px solid rgba(127, 231, 243, 0.2)',
          }
        }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton 
            onClick={toggleMobileMenu}
            sx={{ color: 'primary.main' }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                onClick={() => handleNavigation(item)}
                sx={{
                  py: 2,
                  px: 3,
                  '&:hover': {
                    backgroundColor: 'rgba(127, 231, 243, 0.1)',
                  }
                }}
              >
                <ListItemText 
                  primary={item.text}
                  sx={{
                    '& .MuiTypography-root': {
                      fontSize: '1.1rem',
                      fontWeight: 500,
                    }
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}; 