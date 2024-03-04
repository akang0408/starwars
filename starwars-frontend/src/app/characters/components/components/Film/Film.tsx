import React from 'react';
import { Card, Typography, Box } from '@mui/material';
import { Film } from 'types/character';

type Props = {
  film: Film;
};

const Film: React.FC<Props> = ({ film }) => {
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
          Title: {film.title}
        </Typography>
        <Typography>Director: {film.director}</Typography>
        <Typography>Producer: {film.producer}</Typography>
        <Typography>Release Date: {film.release_date}</Typography>
      </Box>
    </Card>
  );
};

export default Film;
