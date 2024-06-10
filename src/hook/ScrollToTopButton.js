import React, { useState, useEffect } from 'react';
import { Button, Fab, styled } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Box from '@mui/material/Box';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrolled = document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    if (scrolled > (documentHeight - windowHeight) * 2 / 5) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    isVisible && (
      <Box
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          zIndex: 1000,
        }}
      >
         <Fab
          onClick={scrollToTop}
          color="secondary"  // Thay đổi màu của nút, bạn có thể dùng 'primary' hoặc định nghĩa màu tùy chỉnh
          sx={{
            backgroundColor: '#bd945f',  // Màu nền tùy chỉnh
            '&:hover': {
              backgroundColor: '#45A049'  // Màu nền khi hover
            }
          }}
        >
          <ArrowUpwardIcon />
        </Fab>
      </Box>
    )
  );
};

export default ScrollToTopButton;
