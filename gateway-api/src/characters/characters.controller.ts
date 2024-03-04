import { Controller, Get, Query } from '@nestjs/common';
import { CharactersService } from './characters.service';
import { ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import Character from './types/characters';

@ApiTags('character')
@Controller('character')
export class CharactersController {
  constructor(private readonly charactersService: CharactersService) {}

  @ApiOkResponse({
    type: Object,
    description: 'Returns available roles and associated users',
  })
  @ApiQuery({
    name: 'search',
    type: String,
    description: 'Star Wars Character Name',
    required: false,
  })
  @Get()
  async searchCharacter(@Query('search') search: string): Promise<Character[]> {
    const result = await this.charactersService.searchCharacter(search);
    return result;
  }
}
