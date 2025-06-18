import React from 'react';
import { Box, useTheme, useMediaQuery } from '@mui/material';
import NavigationBar from './components/NavigationBar';
import HeroSection from './components/HeroSection';
import './App.css';
import PortfolioSection from './components/PortfolioSection';
import { portfolioImages } from './data/portfolioImages';
import ClientsSection from './components/ClientsSection';
import { clients } from './data/clients';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ImageModal from './components/ImageModal';
import ScrollToTopFab from './components/ScrollToTopFab';

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [showScrollTop, setShowScrollTop] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = React.useState<number>(0);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handleNextImage = () => {
    const nextIndex = (selectedImageIndex + 1) % portfolioImages.length;
    setSelectedImageIndex(nextIndex);
    setSelectedImage(portfolioImages[nextIndex].full);
  };

  const handlePrevImage = () => {
    const prevIndex = selectedImageIndex === 0 ? portfolioImages.length - 1 : selectedImageIndex - 1;
    setSelectedImageIndex(prevIndex);
    setSelectedImage(portfolioImages[prevIndex].full);
  };

  return (
    <Box sx={{ flexGrow: 1, minHeight: '100vh', width: '100%' }}>
      <NavigationBar
        onScrollHome={() => document.body.scrollIntoView({ behavior: 'smooth', block: 'start' })}
        onScrollPortfolio={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
        onScrollContact={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
      />

      <HeroSection isMobile={isMobile} />

      <PortfolioSection isMobile={isMobile} portfolioImages={portfolioImages} />

      <ClientsSection isMobile={isMobile} clients={clients} />

      <ServicesSection />

      <ContactSection />

      <Footer />

      <ImageModal
        open={!!selectedImage}
        image={selectedImage}
        imageIndex={selectedImageIndex}
        totalImages={portfolioImages.length}
        onClose={handleCloseModal}
        onPrev={handlePrevImage}
        onNext={handleNextImage}
      />

      <ScrollToTopFab show={showScrollTop} onClick={scrollToTop} />
    </Box>
  );
}

export default App;
