import React from 'react';
import { Box, Container, Typography, IconButton } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Phone, Email, LocationOn, LinkedIn, Twitter, Facebook } from '@mui/icons-material';

const contactItems = [
  {
    icon: <Phone sx={{ fontSize: 60, mb: 2 }} />, title: 'Telefon', value: '+1 (555) 123-4567',
  },
  {
    icon: <Email sx={{ fontSize: 60, mb: 2 }} />, title: 'E-posta', value: 'info@techcorp-solutions.com',
  },
  {
    icon: <LocationOn sx={{ fontSize: 60, mb: 2 }} />, title: 'Adres', value: (
      <>
        123 Innovation Drive<br />Tech City, TC 12345
      </>
    ),
  },
];

const ContactSection: React.FC = () => (
  <Box id="contact" sx={{ py: 8, backgroundColor: '#1e3a8a', color: 'white', position: 'relative' }}>
    {/* Background Logo Watermark */}
    <Box
      component="img"
      src="/logo.jpg"
      alt=""
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: { xs: '60vw', md: '25vw' },
        height: 'auto',
        opacity: 0.18,
        zIndex: 0,
        pointerEvents: 'none',
        filter: 'drop-shadow(0 0 16px white)',
        maxWidth: '350px',
        minWidth: '120px',
        userSelect: 'none',
      }}
    />
    <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
      <Box textAlign="center" sx={{ mb: 6 }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 3 }}>
          <Typography variant="h3" component="h2" sx={{ mb: 2, fontWeight: 'bold' }}>
            İletişime Geçin
          </Typography>
        </Box>
        <Typography variant="h6" sx={{ opacity: 0.9 }}>
          Bir sonraki projenize başlamak için hazır mısınız? Size nasıl yardımcı olabileceğimizi konuşalım.
        </Typography>
      </Box>
      {/* Contact Cards Grid Layout */}
      <Grid container spacing={4} alignItems="stretch" justifyContent="center" sx={{ mb: 4 }}>
        {contactItems.map((item, idx) => (
          <Grid key={idx} size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box
              sx={{
                minWidth: 220,
                maxWidth: 340,
                background: 'rgba(255,255,255,0.04)',
                borderRadius: 3,
                p: 3,
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                boxShadow: '0 2px 12px 0 rgba(30,58,138,0.08)',
                mx: 1,
                width: '100%',
              }}
            >
              {item.icon}
              <Typography variant="h6" sx={{ mb: 1, color: 'white' }}>
                {item.title}
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.9, color: 'white' }}>
                {item.value}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
      {/* Social Media */}
      <Box textAlign="center" sx={{ mt: 6 }}>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Bizi Takip Edin
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
          <IconButton sx={{ color: 'white', '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' } }}>
            <LinkedIn />
          </IconButton>
          <IconButton sx={{ color: 'white', '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' } }}>
            <Twitter />
          </IconButton>
          <IconButton sx={{ color: 'white', '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' } }}>
            <Facebook />
          </IconButton>
        </Box>
      </Box>
    </Container>
  </Box>
);

export default ContactSection; 