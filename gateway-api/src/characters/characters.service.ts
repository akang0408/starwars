import { Injectable } from '@nestjs/common';
import axios from 'axios';
import Character, { Film, Species, Starship } from './types/characters';

@Injectable()
export class CharactersService {
  async searchCharacter(search: string): Promise<Character[]> {
    const response = await axios.get(
      `https://swapi.dev/api/people/?search=${search}`,
    );
    const { data } = response;
    const characters = data.results;

    const processedCharacters = await Promise.all(
      characters.map(async (character) => {
        const [films, species, starships] = await Promise.all([
          this.fetchDetails(character.films, [
            'title',
            'director',
            'producer',
            'release_date',
          ]),
          this.fetchDetails(character.species, ['name', 'classification']),
          this.fetchDetails(character.starships, [
            'name',
            'model',
            'manufacturer',
          ]),
        ]);

        const { name, height, mass, hair_color, birth_year } = character;

        return {
          name,
          height,
          mass,
          hair_color,
          birth_year,
          films,
          species,
          starships,
        };
      }),
    );

    return processedCharacters;
  }

  async fetchDetails(
    urls: string[],
    fields?: string[],
  ): Promise<(Film | Species | Starship)[]> {
    const results = await Promise.all(
      urls.map(async (url) => {
        const response = await axios.get(url);
        const data = response.data;

        // Extract specified fields from data object if provided
        if (fields) {
          return fields.reduce((acc, field) => {
            acc[field] = data[field];
            return acc;
          }, {});
        }

        return data;
      }),
    );
    return results;
  }
}
