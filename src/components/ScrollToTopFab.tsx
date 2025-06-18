import React from 'react';
import { Fab, Zoom } from '@mui/material';
import { ArrowUpward } from '@mui/icons-material';

interface ScrollToTopFabProps {
  show: boolean;
  onClick: () => void;
}

const ScrollToTopFab: React.FC<ScrollToTopFabProps> = ({ show, onClick }) => (
  <Zoom in={show}>
    <Fab
      onClick={onClick}
      sx={{
        position: 'fixed',
        bottom: 16,
        right: 16,
        zIndex: 1000,
        backgroundColor: '#1e3a8a',
        color: 'white',
        '&:hover': {
          backgroundColor: '#1e40af'
        }
      }}
    >
      <ArrowUpward />
    </Fab>
  </Zoom>
);

export default ScrollToTopFab; 