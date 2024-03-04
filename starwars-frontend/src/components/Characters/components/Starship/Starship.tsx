import React from 'react';
import { Card, Typography, Box } from '@mui/material';
import { Starship } from 'types/character';

type Props = {
  starship: Starship;
};

const StarshipComponent: React.FC<Props> = ({ starship }) => {
  return (
    <Card
      sx={{
        backgroundColor: '#f5f5f5',
        color: 'black',
        borderRadius: 8,
        padding: 2,
        marginY: 1,
      }}
    >
      <Box marginBottom={1}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          Name: {starship.name}
        </Typography>
        <Typography>Model: {starship.model}</Typography>
        <Typography>Manufacturer: {starship.manufacturer}</Typography>
      </Box>
    </Card>
  );
};

export default StarshipComponent;
