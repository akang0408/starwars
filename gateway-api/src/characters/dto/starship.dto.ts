import { ApiProperty } from '@nestjs/swagger';

export class StarshipDTO {
  @ApiProperty()
  name: string;

  @ApiProperty()
  model: string;

  @ApiProperty()
  manufacturer: string;
}
