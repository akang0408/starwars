import { ApiProperty } from '@nestjs/swagger';

export class FilmDTO {
  @ApiProperty()
  title: string;

  @ApiProperty()
  director: string;

  @ApiProperty()
  producer: string;

  @ApiProperty({ name: 'release_date' })
  release_date: string;
}
