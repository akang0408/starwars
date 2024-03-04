import React from 'react';
import { Card, Typography, Box } from '@mui/material';
import { Species } from 'types/character';

type Props = {
  species: Species;
};

const SpeciesComponent: React.FC<Props> = ({ species }) => {
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
          Name: {species.name}
        </Typography>
        <Typography>Classification: {species.classification}</Typography>
      </Box>
    </Card>
  );
};

export default SpeciesComponent;
