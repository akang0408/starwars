import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const Header = (): JSX.Element => {
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      paddingY={2}
    >
      <Box display={'flex'} component="a" href="/" title="StarWarsLogo">
        <Box component={'img'} src={'./Star_Wars_Logo.png'} maxWidth="100%" />
      </Box>

      <Box marginTop={2} display="flex" justifyContent="center">
        <Button color="inherit" component="a" href="/">
          Home
        </Button>
        <Button color="inherit" component="a" href="/characters">
          Characters
        </Button>
        <Button color="inherit" component="a" href="https://swapi.dev/">
          SWAPI API
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
