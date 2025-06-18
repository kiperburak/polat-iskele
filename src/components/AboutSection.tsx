import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

const AboutSection: React.FC = () => (
  <Box sx={{ py: 8, backgroundColor: '#f8f9fa' }}>
    <Container maxWidth="lg">
      <Grid container spacing={6} alignItems="center">
        <Grid size={{ xs: 12, md: 6 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <Box
              component="img"
              src="/logo.jpg"
              alt="TechCorp Solutions Logo"
              sx={{
                height: 60,
                width: 60,
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
              About TechCorp Solutions
            </Typography>
          </Box>
          <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem', lineHeight: 1.7, color: '#555' }}>
            Founded in 2018, TechCorp Solutions has been at the forefront of digital innovation, 
            helping businesses of all sizes transform their digital presence. Our team of experts 
            combines creativity with technical excellence to deliver solutions that exceed expectations.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#555' }}>
            We believe in building long-term partnerships with our clients, understanding their 
            unique challenges, and providing tailored solutions that drive real business results.
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=400&fit=crop"
            alt="Our team"
            sx={{
              width: '100%',
              height: 'auto',
              borderRadius: 3,
              boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
            }}
          />
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default AboutSection; 