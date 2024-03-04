import React, { useState } from 'react';
import {
  Card,
  Box,
  Button,
  TextField,
  CircularProgress,
  InputAdornment,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import Profile from './components/Profile';
import Character from 'types/character';
import CharacterSearchService from '../../services/CharacterSearchService';

const Characters: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState<Character[] | null>(null);
  const [loading, setLoading] = useState(false);
  const handleSearch = async () => {
    try {
      // Set loading to true while fetching data
      setLoading(true);
      const result = await CharacterSearchService.searchCharacter(searchTerm);
      setSearchResult(result);
    } catch (error) {
      console.error('Error searching character:', error);
    } finally {
      // Set loading to false after fetching data
      setLoading(false);
    }
  };

  const handleKeyDown = async (
    event: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      await handleSearch();
    }
  };

  return (
    <Box maxWidth={{ sm: 720, md: 1236 }} margin={'0 auto'} paddingX={2}>
      <Box
        padding={2}
        width={1}
        component={Card}
        boxShadow={4}
        marginBottom={4}
      >
        <Box display="flex" alignItems={'center'}>
          <Box width={1} marginRight={1}>
            <TextField
              sx={{
                height: 55,
              }}
              variant="outlined"
              size="medium"
              placeholder="Search for Character"
              fullWidth
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              onKeyDown={handleKeyDown}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon color="primary" />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box>
            <Button
              sx={{ height: 55, minWidth: 100, marginLeft: 1 }}
              variant="contained"
              size="medium"
              onClick={handleSearch}
            >
              Search
            </Button>
          </Box>
        </Box>
      </Box>
      <Box>
        {loading && (
          <Box marginLeft={2} data-testid="loading-spinner">
            <CircularProgress />
          </Box>
        )}
        {!loading && searchResult && searchResult.length === 0 && (
          <Box marginLeft={2}>
            <Typography fontSize={'large'}>No Characters Found</Typography>
          </Box>
        )}
        {!loading &&
          searchResult &&
          searchResult.map((character: Character) => (
            <Profile key={character.name} character={character} />
          ))}
      </Box>
    </Box>
  );
};

export default Characters;
