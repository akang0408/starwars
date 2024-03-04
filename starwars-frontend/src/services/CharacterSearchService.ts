import axios, { AxiosResponse } from 'axios';
import Character from 'types/character';

const API_BASE_URL = 'http://localhost:3001';

const CharacterSearchService = {
  async searchCharacter(searchTerm: string): Promise<Character[]> {
    try {
      const response: AxiosResponse<Character[]> = await axios.get(
        `${API_BASE_URL}/character`,
        {
          params: { search: searchTerm },
        },
      );
      return response.data;
    } catch (error) {
      console.error('Error calling GET /character', error);
      throw error;
    }
  },
};

export default CharacterSearchService;
