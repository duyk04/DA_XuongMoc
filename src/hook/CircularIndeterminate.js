import React, { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useLocation } from 'react-router-dom';

export default function CircularIndeterminate() {
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    loading ? (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: '1000', position: 'absolute', top: "128px", left: 0, bottom: 0, right: 0, backgroundColor:'#fff' }}>
        <CircularProgress style={{ color: '#bd945f' }} />
      </Box>
    ) : null
  );
}
