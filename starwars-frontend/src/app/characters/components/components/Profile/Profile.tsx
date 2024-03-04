import { Box, Card, Typography } from '@mui/material';
import React from 'react';
import Film from '../Film/Film';
import StarshipComponent from '../Starship/Starship';
import SpeciesComponent from '../Species/Species';
import PersonIcon from '@mui/icons-material/Person';
import HeightIcon from '@mui/icons-material/Height';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import PaletteIcon from '@mui/icons-material/Palette';
import CakeIcon from '@mui/icons-material/Cake';
import TheatersIcon from '@mui/icons-material/Theaters';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import PetsIcon from '@mui/icons-material/Pets';
import Character, { Species, Starship } from 'types/character';

type Props = {
  character: Character;
};

const Profile = (props: Props) => {
  const { character } = props;

  return (
    <>
      <Card
        sx={{
          padding: 4,
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#fce41c' }}>
          Character Profile
        </Typography>

        {character.name && (
          <Box mt={2} sx={{ display: 'flex', alignItems: 'center' }}>
            <PersonIcon />
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginX: 1 }}>
              Name:
            </Typography>
            <Typography variant="h6">{character.name}</Typography>
          </Box>
        )}

        {character.height && (
          <Box mt={2} sx={{ display: 'flex', alignItems: 'center' }}>
            <HeightIcon />
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginX: 1 }}>
              Height:
            </Typography>
            <Typography variant="h6">{character.height} cms</Typography>
          </Box>
        )}

        {character.mass && (
          <Box mt={2} sx={{ display: 'flex', alignItems: 'center' }}>
            <FitnessCenterIcon />
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginX: 1 }}>
              Weight:
            </Typography>
            <Typography variant="h6">{character.mass} kgs</Typography>
          </Box>
        )}

        {character.hair_color && (
          <Box mt={2} sx={{ display: 'flex', alignItems: 'center' }}>
            <PaletteIcon />
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginX: 1 }}>
              Hair Color:
            </Typography>
            <Typography variant="h6">{character.hair_color}</Typography>
          </Box>
        )}

        {character.birth_year && (
          <Box mt={2} sx={{ display: 'flex', alignItems: 'center' }}>
            <CakeIcon />
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginX: 1 }}>
              Birth Year:
            </Typography>
            <Typography variant="h6">{character.birth_year}</Typography>
          </Box>
        )}
        {character.films.length > 0 && (
          <Box
            mt={2}
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <TheatersIcon />
              <Typography variant="h6" sx={{ fontWeight: 'bold', marginX: 1 }}>
                Films:
              </Typography>
            </Box>
            {character.films.map((film: Film) => (
              <Film key={film.title} film={film} />
            ))}
          </Box>
        )}

        {character.starships.length > 0 && (
          <Box
            mt={2}
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <FlightTakeoffIcon />
              <Typography variant="h6" sx={{ fontWeight: 'bold', marginX: 1 }}>
                Starships:
              </Typography>
            </Box>
            {character.starships.map((starship: Starship) => (
              <StarshipComponent starship={starship} key={starship.name} />
            ))}
          </Box>
        )}

        {character.species.length > 0 && (
          <Box
            mt={2}
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <PetsIcon />
              <Typography variant="h6" sx={{ fontWeight: 'bold', marginX: 1 }}>
                Species:
              </Typography>
            </Box>
            {character.species.map((species: Species) => (
              <SpeciesComponent species={species} key={species.name} />
            ))}
          </Box>
        )}
      </Card>
    </>
  );
};

export default Profile;
