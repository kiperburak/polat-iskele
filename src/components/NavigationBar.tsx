import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

interface NavigationBarProps {
  onScrollHome?: () => void;
  onScrollPortfolio?: () => void;
  onScrollContact?: () => void;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ onScrollPortfolio, onScrollContact }) => (
  <AppBar position="fixed" sx={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(10px)' }}>
    <Toolbar>
      <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
        <Box
          component="img"
          src="/logo.jpg"
          alt="Polat İskele Logo"
          sx={{
            height: 40,
            width: 40,
            mr: 2,
            borderRadius: 1,
            backgroundColor: '#f0f0f0',
            border: '1px solid #ddd'
          }}
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
        <Typography variant="h6" component="div" sx={{ color: 'text.primary', fontWeight: 'bold' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', lineHeight: 1 }}>
            <Typography 
              component="span" 
              sx={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'text.primary', lineHeight: 1 }}
            >
              POLAT
            </Typography>
            <Typography 
              component="span" 
              sx={{ fontSize: '1rem', fontWeight: 'bold', color: 'text.primary', lineHeight: 1, textAlign: 'center' }}
            >
              İSKELE
            </Typography>
          </Box>
        </Typography>
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
        <Button color="inherit" sx={{ color: 'text.primary' }} onClick={onScrollPortfolio}>
          Portföy
        </Button>
        <Button color="inherit" sx={{ color: 'text.primary' }} onClick={onScrollContact}>
          İletişim
        </Button>
      </Box>
    </Toolbar>
  </AppBar>
);

export default NavigationBar; 