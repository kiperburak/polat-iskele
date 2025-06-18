import React from 'react';
import { Box, Container, Typography, IconButton, Dialog, DialogContent, DialogActions } from '@mui/material';
import { ChevronLeft, ChevronRight, Close, ArrowUpward } from '@mui/icons-material';

interface PortfolioImage {
  preview: string;
  full: string;
}

interface PortfolioSectionProps {
  isMobile: boolean;
  portfolioImages: PortfolioImage[];
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({ isMobile, portfolioImages }) => {
  const imagesPerSlide = isMobile ? 3 : 6;
  const [currentSlide, setCurrentSlide] = React.useState<number>(0);
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = React.useState<number>(0);
  const [touchStart, setTouchStart] = React.useState<number | null>(null);
  const [touchEnd, setTouchEnd] = React.useState<number | null>(null);

  // Touch handlers for swipe functionality
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  const handleTouchEnd = () => {
    if (touchStart === null || touchEnd === null) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    if (isLeftSwipe && currentSlide < portfolioImages.length - imagesPerSlide) {
      handleNextSlide();
    }
    if (isRightSwipe && currentSlide > 0) {
      handlePrevSlide();
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  const handleImageClick = (imageData: PortfolioImage, index: number) => {
    setSelectedImage(imageData.full);
    setSelectedImageIndex(index);
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
  const handleNextSlide = () => {
    setCurrentSlide((prev) => {
      const nextSlide = prev + imagesPerSlide;
      return nextSlide < portfolioImages.length ? nextSlide : prev;
    });
  };
  const handlePrevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - imagesPerSlide, 0));
  };

  return (
    <Box
      id="portfolio"
      sx={{
        py: 8,
        px: 2,
        backgroundColor: 'white',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '300px',
          height: '300px',
          backgroundImage: 'url(/logo.jpg)',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          opacity: 0.03,
          filter: 'grayscale(100%)',
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
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
          Projelerimiz
        </Typography>
        {/* Portfolio Slider */}
        <Box 
          sx={{ position: 'relative', mb: 4 }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <Box
            sx={{
              display: 'flex',
              gap: { xs: 1, md: 2 },
              overflow: 'hidden',
              px: { xs: 1, md: 2 },
            }}
          >
            {portfolioImages.slice(currentSlide, currentSlide + imagesPerSlide).map((image, index) => (
              <Box
                key={currentSlide + index}
                sx={{
                  flex: `0 0 calc(${isMobile ? '33.333%' : '16.666%'} - ${isMobile ? '4px' : '8px'})`,
                  minWidth: 0,
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                  },
                }}
                onClick={() => handleImageClick(image, currentSlide + index)}
              >
                <Box
                  component="img"
                  src={`/images/previews/${(image.full.split('/').pop() || '').replace('.jpg', '_preview.jpg')}`}
                  alt={`Proje ${currentSlide + index + 1}`}
                  loading="lazy"
                  sx={{
                    width: '100%',
                    height: { xs: '120px', sm: '150px', md: '200px' },
                    objectFit: 'cover',
                    borderRadius: 2,
                    border: '2px solid #e2e8f0',
                    transition: 'border-color 0.3s ease',
                    '&:hover': {
                      borderColor: '#38b2ac',
                    },
                  }}
                />
              </Box>
            ))}
          </Box>
          {/* Navigation Arrows */}
          {currentSlide > 0 && (
            <IconButton
              onClick={handlePrevSlide}
              sx={{
                position: 'absolute',
                left: { xs: -10, md: -20 },
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: 'white',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                '&:hover': {
                  backgroundColor: '#f7fafc',
                },
                zIndex: 2,
                width: { xs: 32, md: 40 },
                height: { xs: 32, md: 40 },
              }}
            >
              <ChevronLeft sx={{ fontSize: { xs: 16, md: 24 } }} />
            </IconButton>
          )}
          {currentSlide < portfolioImages.length - imagesPerSlide && (
            <IconButton
              onClick={handleNextSlide}
              sx={{
                position: 'absolute',
                right: { xs: -10, md: -20 },
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: 'white',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                '&:hover': {
                  backgroundColor: '#f7fafc',
                },
                zIndex: 2,
                width: { xs: 32, md: 40 },
                height: { xs: 32, md: 40 },
              }}
            >
              <ChevronRight sx={{ fontSize: { xs: 16, md: 24 } }} />
            </IconButton>
          )}
        </Box>
        {/* Slide Indicators */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 2 }}>
          {Array.from({ length: Math.ceil(portfolioImages.length / imagesPerSlide) }).map((_, index) => (
            <Box
              key={index}
              onClick={() => setCurrentSlide(index * imagesPerSlide)}
              sx={{
                width: { xs: 8, md: 12 },
                height: { xs: 8, md: 12 },
                borderRadius: '50%',
                backgroundColor: currentSlide === index * imagesPerSlide ? '#38b2ac' : '#e2e8f0',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
                '&:hover': {
                  backgroundColor: currentSlide === index * imagesPerSlide ? '#38b2ac' : '#cbd5e0',
                },
              }}
            />
          ))}
        </Box>
      </Container>
      {/* Image Modal/Lightbox */}
      <Dialog
        open={!!selectedImage}
        onClose={handleCloseModal}
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
            onClick={handleCloseModal}
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
            onClick={handlePrevImage}
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
            onClick={handleNextImage}
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
          {selectedImage && (
            <Box
              component="img"
              src={selectedImage}
              alt={`Proje ${selectedImageIndex + 1}`}
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
            {selectedImageIndex + 1} of {portfolioImages.length}
          </Typography>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default PortfolioSection; 