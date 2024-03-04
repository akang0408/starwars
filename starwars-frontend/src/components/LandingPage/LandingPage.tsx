import React from 'react';
import Box from '@mui/material/Box';

const LandingPage = (): JSX.Element => {
  return (
    <Box
      sx={{
        position: 'relative',
        overflowX: 'hidden',
        backgroundImage: 'url(/starwars-characters.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}
    />
  );
};

export default LandingPage;
