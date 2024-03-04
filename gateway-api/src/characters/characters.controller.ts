import { Controller, Get, Query } from '@nestjs/common';
import { CharactersService } from './characters.service';
import { ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import Character from './types/characters';
import { CharacterDTO } from './dto/character.dto';

@ApiTags('character')
@Controller('character')
export class CharactersController {
  constructor(private readonly charactersService: CharactersService) {}

  @ApiOkResponse({
    type: CharacterDTO,
    description: 'Returns available Star Wars Character metadata',
  })
  @ApiQuery({
    name: 'search',
    type: String,
    description:
      'Enter a Star Wars character name. Will find partial text match.',
    required: false,
  })
  @Get()
  async searchCharacter(@Query('search') search: string): Promise<Character[]> {
    const result = await this.charactersService.searchCharacter(search);
    return result;
  }
}
