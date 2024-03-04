import { ApiProperty } from '@nestjs/swagger';

export class SpeciesDTO {
  @ApiProperty()
  name: string;

  @ApiProperty()
  classification: string;
}
