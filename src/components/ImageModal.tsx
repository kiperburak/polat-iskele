import React from 'react';
import { Dialog, DialogContent, DialogActions, IconButton, Typography, Box } from '@mui/material';
import { Close, ArrowUpward } from '@mui/icons-material';

interface ImageModalProps {
  open: boolean;
  image: string | null;
  imageIndex: number;
  totalImages: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ open, image, imageIndex, totalImages, onClose, onPrev, onNext }) => (
  <Dialog
    open={open}
    onClose={onClose}
    maxWidth="lg"
    fullWidth
    PaperProps={{
      sx: {
        backgroundColor: 'rgba(0,0,0,0.9)',
        boxShadow: 'none',
        borderRadius: 2,
      }
    }}
  >
    <DialogContent sx={{ p: 0, position: 'relative' }}>
      <IconButton
        onClick={onClose}
        sx={{
          position: 'absolute',
          top: 16,
          right: 16,
          color: 'white',
          zIndex: 10,
          backgroundColor: 'rgba(0,0,0,0.5)',
          '&:hover': {
            backgroundColor: 'rgba(0,0,0,0.7)',
          }
        }}
      >
        <Close />
      </IconButton>
      <IconButton
        onClick={onPrev}
        sx={{
          position: 'absolute',
          top: '50%',
          left: 16,
          transform: 'translateY(-50%)',
          color: 'white',
          zIndex: 10,
          backgroundColor: 'rgba(0,0,0,0.5)',
          '&:hover': {
            backgroundColor: 'rgba(0,0,0,0.7)',
          }
        }}
      >
        <ArrowUpward sx={{ transform: 'rotate(-90deg)' }} />
      </IconButton>
      <IconButton
        onClick={onNext}
        sx={{
          position: 'absolute',
          top: '50%',
          right: 16,
          transform: 'translateY(-50%)',
          color: 'white',
          zIndex: 10,
          backgroundColor: 'rgba(0,0,0,0.5)',
          '&:hover': {
            backgroundColor: 'rgba(0,0,0,0.7)',
          }
        }}
      >
        <ArrowUpward sx={{ transform: 'rotate(90deg)' }} />
      </IconButton>
      {image && (
        <Box
          component="img"
          src={image}
          alt={`Proje ${imageIndex + 1}`}
          sx={{
            width: '100%',
            height: 'auto',
            maxHeight: '80vh',
            objectFit: 'contain',
            display: 'block',
          }}
        />
      )}
    </DialogContent>
    <DialogActions sx={{ p: 2, justifyContent: 'center' }}>
      <Typography variant="body2" sx={{ color: 'white' }}>
        {imageIndex + 1} of {totalImages}
      </Typography>
    </DialogActions>
  </Dialog>
);

export default ImageModal; 