import React, { useState } from 'react';
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
  IconButton,
  Box,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  Psychology as BrainIcon,
  Psychology,
  SelfImprovement,
  Help,
  Settings,
  Menu as MenuIcon,
  ChevronLeft,
  ChevronRight,
} from '@mui/icons-material';
import logo from '../assets/logo.png';

export const DRAWER_WIDTH = 240;
export const COLLAPSED_DRAWER_WIDTH = 65;

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
  onDrawerToggle?: (open: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ selectedItem, onDrawerToggle }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [isOpen, setIsOpen] = useState(!isMobile);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavigation = (text: string, path: string) => {
    navigate(path);
    if (isMobile) {
      setMobileOpen(false);
    }
  };

  const handleDrawerToggle = () => {
    if (isMobile) {
      setMobileOpen(!mobileOpen);
    } else {
      setIsOpen(!isOpen);
      onDrawerToggle?.(isOpen);
    }
  };

  const drawerContent = (
    <>
      <Toolbar 
        sx={{ 
          px: 1, 
          minHeight: '80px !important',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {(isOpen || isMobile) && (
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              cursor: 'pointer',
            }}
            onClick={() => navigate('/')}
          >
            <img src={logo} alt="NeurotiQ Logo" style={{ height: 60, width: 'auto' }} />
          </Typography>
        )}
        <IconButton 
          onClick={handleDrawerToggle}
          sx={{ 
            color: 'primary.main',
            display: { xs: 'none', md: 'flex' },
          }}
        >
          {isOpen ? <ChevronLeft /> : <ChevronRight />}
        </IconButton>
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
              pl: 1.5,
              py: 1,
              minHeight: '48px',
              justifyContent: isOpen || isMobile ? 'flex-start' : 'center',
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
            <ListItemIcon 
              sx={{ 
                minWidth: isOpen || isMobile ? 32 : 'auto',
                ml: isOpen || isMobile ? 0.5 : 0,
                mr: isOpen || isMobile ? 2 : 0,
              }}
            >
              <item.icon sx={{ 
                color: selectedItem === item.text ? 'primary.main' : 'inherit',
                fontSize: '1.2rem'
              }} />
            </ListItemIcon>
            {(isOpen || isMobile) && (
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
            )}
          </ListItemButton>
        ))}
      </List>
    </>
  );

  return (
    <>
      {/* Mobile Toggle Button */}
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{
          position: 'fixed',
          top: 16,
          left: 16,
          zIndex: theme.zIndex.drawer + 2,
          display: { xs: 'flex', md: 'none' },
          backgroundColor: 'rgba(127, 231, 243, 0.1)',
          backdropFilter: 'blur(10px)',
          '&:hover': {
            backgroundColor: 'rgba(127, 231, 243, 0.2)',
          },
        }}
      >
        <MenuIcon sx={{ color: 'primary.main' }} />
      </IconButton>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        ModalProps={{
          keepMounted: true, // Better mobile performance
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            width: DRAWER_WIDTH,
            backgroundColor: 'background.default',
            borderRight: '1px solid rgba(255, 255, 255, 0.1)',
            boxSizing: 'border-box',
          },
        }}
      >
        {drawerContent}
      </Drawer>

      {/* Desktop Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', md: 'block' },
          width: isOpen ? DRAWER_WIDTH : COLLAPSED_DRAWER_WIDTH,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: isOpen ? DRAWER_WIDTH : COLLAPSED_DRAWER_WIDTH,
            boxSizing: 'border-box',
            backgroundColor: 'background.default',
            borderRight: '1px solid rgba(255, 255, 255, 0.1)',
            overflowX: 'hidden',
            transition: theme.transitions.create('width', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
}; 