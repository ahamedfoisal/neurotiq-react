import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Toolbar,
  Divider,
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  Psychology as BrainIcon,
  Psychology,
  SelfImprovement,
  Help,
  Settings,
} from '@mui/icons-material';
import logo from '../assets/logo.png';

export const DRAWER_WIDTH = 200;

export const sidebarItems = [
  { text: 'Overview', icon: DashboardIcon, path: '/dashboard' },
  { text: 'Analysis', icon: BrainIcon, path: '/analyzer' },
  { text: 'Mental Wellness', icon: Psychology, path: '/mental-wellness' },
  { text: 'Self-Care', icon: SelfImprovement, path: '/self-care' },
  { text: 'Support', icon: Help, path: '/support' },
  { text: 'Settings', icon: Settings, path: '/settings' },
];

interface SidebarProps {
  selectedItem: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ selectedItem }) => {
  const navigate = useNavigate();

  const handleNavigation = (text: string, path: string) => {
    navigate(path);
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: DRAWER_WIDTH,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: DRAWER_WIDTH,
          boxSizing: 'border-box',
          backgroundColor: 'background.default',
          borderRight: '1px solid rgba(255, 255, 255, 0.1)',
          pt: 0
        },
      }}
    >
      <Toolbar sx={{ px: 0, minHeight: '80px !important' }}>
        <Typography 
          variant="h6" 
          component="div" 
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            cursor: 'pointer',
            pl: 1.5
          }}
          onClick={() => navigate('/')}
        >
          <img src={logo} alt="NeurotiQ Logo" style={{ height: 60, width: 'auto' }} />
        </Typography>
      </Toolbar>
      <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)' }} />
      <List sx={{ mt: 0, px: 0 }}>
        {sidebarItems.map((item) => (
          <ListItemButton
            key={item.text}
            selected={selectedItem === item.text}
            onClick={() => handleNavigation(item.text, item.path)}
            sx={{
              borderRadius: '0',
              mr: 0,
              pl: 0.5,
              py: 1,
              minHeight: '48px',
              '&.Mui-selected': {
                backgroundColor: 'rgba(127, 231, 243, 0.1)',
                '&:hover': {
                  backgroundColor: 'rgba(127, 231, 243, 0.2)',
                }
              },
              '&:hover': {
                backgroundColor: 'rgba(127, 231, 243, 0.05)',
              }
            }}
          >
            <ListItemIcon sx={{ minWidth: 32, ml: 0.5 }}>
              <item.icon sx={{ 
                color: selectedItem === item.text ? 'primary.main' : 'inherit',
                fontSize: '1.2rem'
              }} />
            </ListItemIcon>
            <ListItemText 
              primary={item.text} 
              sx={{ 
                '& .MuiListItemText-primary': { 
                  color: selectedItem === item.text ? 'primary.main' : 'inherit',
                  fontWeight: selectedItem === item.text ? 500 : 400,
                  fontSize: '0.9rem'
                } 
              }} 
            />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
}; 