import { ApiProperty } from '@nestjs/swagger';
import { FilmDTO } from './film.dto';
import { SpeciesDTO } from './species.dto';
import { StarshipDTO } from './starship.dto';

export class CharacterDTO {
  @ApiProperty()
  name: string;

  @ApiProperty()
  height: string;

  @ApiProperty()
  mass: string;

  @ApiProperty({ name: 'hair_color' })
  hair_color: string;

  @ApiProperty({ name: 'birth_year' })
  birth_year: string;

  @ApiProperty({ type: [FilmDTO] })
  films: FilmDTO[];

  @ApiProperty({ type: [SpeciesDTO] })
  species: SpeciesDTO[];

  @ApiProperty({ type: [StarshipDTO] })
  starships: StarshipDTO[];
}
