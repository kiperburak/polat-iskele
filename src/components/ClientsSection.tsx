import React from 'react';
import { Box, Container, Typography, IconButton } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Business, ChevronLeft, ChevronRight } from '@mui/icons-material';

interface ClientsSectionProps {
  isMobile: boolean;
  clients: string[];
}

const ClientsSection: React.FC<ClientsSectionProps> = ({ isMobile, clients }) => {
  const [currentClientSlide, setCurrentClientSlide] = React.useState<number>(0);
  const [touchStart, setTouchStart] = React.useState<number | null>(null);
  const [touchEnd, setTouchEnd] = React.useState<number | null>(null);

  const clientsPerSlide = isMobile ? 2 : 4;
  const maxSlides = Math.ceil(clients.length / clientsPerSlide);

  const handleNextClientSlide = () => {
    setCurrentClientSlide((prev) => (prev + 1) % maxSlides);
  };
  const handlePrevClientSlide = () => {
    setCurrentClientSlide((prev) => (prev - 1 + maxSlides) % maxSlides);
  };
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  const handleClientTouchEnd = () => {
    if (touchStart === null || touchEnd === null) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    if (isLeftSwipe && currentClientSlide < maxSlides - 1) {
      handleNextClientSlide();
    }
    if (isRightSwipe && currentClientSlide > 0) {
      handlePrevClientSlide();
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <Box sx={{ py: 8, backgroundColor: '#f8f9fa' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 700,
            color: '#1a365d',
            mb: 6,
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: -10,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 80,
              height: 4,
              backgroundColor: '#38b2ac',
              borderRadius: 2,
            },
          }}
        >
          Müşterilerimiz
        </Typography>
        <Typography align="center" sx={{ color: '#555', mb: 5 }}>
          Bu şirketlerle işbirliği içinde bulunmaktan gurur duyuyoruz
        </Typography>
        {/* Mobile Slider */}
        <Box
          sx={{ position: 'relative', mb: 4 }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleClientTouchEnd}
        >
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              overflow: 'hidden',
              px: 2,
            }}
          >
            {clients.slice(currentClientSlide * 2, (currentClientSlide * 2) + 2).map((client) => (
              <Box
                key={client}
                sx={{ flex: '0 0 calc(50% - 8px)', minWidth: 0 }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 3,
                    borderRadius: 3,
                    boxShadow: '0 4px 16px rgba(26,54,93,0.06)',
                    backgroundColor: 'white',
                    minHeight: 90,
                    transition: 'box-shadow 0.3s',
                    '&:hover': {
                      boxShadow: '0 8px 32px rgba(56,178,172,0.12)',
                    },
                  }}
                >
                  <Business sx={{ color: '#1a365d', fontSize: 36, mr: 2 }} />
                  <Typography variant="h6" sx={{ color: '#1a365d', fontWeight: 600, fontSize: '1rem' }}>
                    {client}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
          {/* Navigation Arrows for Mobile */}
          {isMobile && (
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 2 }}>
              <IconButton onClick={handlePrevClientSlide} disabled={currentClientSlide === 0}>
                <ChevronLeft />
              </IconButton>
              <IconButton onClick={handleNextClientSlide} disabled={currentClientSlide === maxSlides - 1}>
                <ChevronRight />
              </IconButton>
            </Box>
          )}
        </Box>
        {/* Desktop Grid */}
        <Grid container spacing={4} sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
          {clients.map((client) => (
            <Grid key={client} size={{ xs: 12, md: 3 }} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Box
                sx={{
                  p: 3,
                  borderRadius: 3,
                  boxShadow: '0 4px 16px rgba(26,54,93,0.06)',
                  backgroundColor: 'white',
                  minHeight: 90,
                  transition: 'box-shadow 0.3s',
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  '&:hover': {
                    boxShadow: '0 8px 32px rgba(56,178,172,0.12)',
                  },
                }}
              >
                <Business sx={{ color: '#1a365d', fontSize: 36, mr: 2 }} />
                <Typography variant="h6" sx={{ color: '#1a365d', fontWeight: 600, fontSize: { xs: '1rem', md: '1.1rem' } }}>
                  {client}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ClientsSection; 