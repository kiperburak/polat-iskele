import React from 'react';
import { Box, Container, Typography, Card, CardContent, CardMedia, Fade } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Palette, Engineering, Business, Support } from '@mui/icons-material';
import { services } from '../data/services';

const iconMap: Record<string, React.ReactNode> = {
  Palette: <Palette sx={{ fontSize: 60, color: '#1e3a8a' }} />,
  Engineering: <Engineering sx={{ fontSize: 60, color: '#1e3a8a' }} />,
  Business: <Business sx={{ fontSize: 60, color: '#1e3a8a' }} />,
  Support: <Support sx={{ fontSize: 60, color: '#1e3a8a' }} />,
};

const ServicesSection: React.FC = () => (
  <Box sx={{ py: 8, backgroundColor: 'white' }}>
    <Container maxWidth="lg">
      <Box textAlign="center" sx={{ mb: 6 }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 3 }}>
          <Box
            component="img"
            src="/logo.jpg"
            alt="TechCorp Solutions Logo"
            sx={{
              height: 50,
              width: 50,
              mr: 2,
              borderRadius: 2,
              backgroundColor: '#f0f0f0',
              border: '1px solid #ddd'
            }}
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <Typography variant="h3" component="h2" sx={{ fontWeight: 'bold', color: '#333' }}>
            İskele Kurulumu ve Montaj Hizmetlerimiz
          </Typography>
        </Box>
        <Typography variant="h6" sx={{ maxWidth: 600, mx: 'auto', color: '#666' }}>
          Güvenli, kaliteli ve profesyonel iskele kurulum ve montaj hizmetleri sunuyoruz. Projeleriniz için en uygun çözümleri sağlıyoruz.
        </Typography>
      </Box>
      <Grid container spacing={4} alignItems="stretch" justifyContent="center">
        {services.map((service, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }} sx={{ display: 'flex', maxWidth: 340, flexGrow: 0 }}>
            <Fade in timeout={500 + index * 200} style={{ width: '100%' }}>
              <Card
                sx={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                  }
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={service.image}
                  alt={service.title}
                />
                <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                  <Box sx={{ mb: 2 }}>
                    {iconMap[service.icon]}
                  </Box>
                  <Typography variant="h6" component="h3" sx={{ mb: 2, fontWeight: 'bold', color: '#333' }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#666' }}>
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Fade>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default ServicesSection; 