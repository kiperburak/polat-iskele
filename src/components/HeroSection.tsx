import React from 'react';
import { Box, Container, Grid, Typography, Button, Fade } from '@mui/material';


interface HeroSectionProps {
  isMobile: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ isMobile }) => (
  <Box
    sx={{
      background: 'linear-gradient(135deg, #1e3a8a 0%, #0f766e 100%)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      pt: '64px'
    }}
  >
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}
    >
      <Box
        component="img"
        src="/logo.jpg"
        alt=""
        sx={{
          position: 'relative',
          right: { xs: '5vw', md: '10vw' },
          width: { xs: '60vw', md: '30vw' },
          height: 'auto',
          opacity: 0.18,
          filter: 'drop-shadow(0 0 16px white)',
          maxWidth: '500px',
          minWidth: '180px',
          userSelect: 'none',
        }}
      />
    </Box>
    <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        <Grid size={{xs: 12, md: 6}}>
          <Fade in timeout={1000}>
            <Box>
              <Typography
                variant={isMobile ? 'h3' : 'h2'}
                component="h1"
                sx={{
                  color: 'white',
                  fontWeight: 'bold',
                  mb: 3,
                  textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                }}
              >
                Güvenli İskele Çözümleri
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: 'rgba(255,255,255,0.9)',
                  mb: 4,
                  lineHeight: 1.6
                }}
              >
                Projeleriniz için güvenli, kaliteli ve profesyonel iskele hizmetleri sunuyoruz.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: 'white',
                    color: '#1e3a8a',
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.9)'
                    }
                  }}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Teklif Al
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    borderColor: 'white',
                    color: 'white',
                    '&:hover': {
                      borderColor: 'white',
                      backgroundColor: 'rgba(255,255,255,0.1)'
                    }
                  }}
                  onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Projelerimiz
                </Button>
              </Box>
            </Box>
          </Fade>
        </Grid>
        <Grid size={{xs: 12, md: 6}}>
          <Fade in timeout={1500}>
            <Box
              component="img"
              src="/images/stock-scaffolding-01.jpeg"
              alt="Team collaboration"
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 3,
                boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
              }}
            />
          </Fade>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default HeroSection; 