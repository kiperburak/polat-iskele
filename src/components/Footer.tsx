import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const Footer: React.FC = () => (
  <Box sx={{ py: 4, backgroundColor: 'grey.900', color: 'white' }}>
    <Container maxWidth="lg">
      <Typography variant="body2" textAlign="center" sx={{ opacity: 0.7 }}>
        © 2025 Burak Kiper. All rights reserved.
      </Typography>
    </Container>
  </Box>
);

export default Footer; 