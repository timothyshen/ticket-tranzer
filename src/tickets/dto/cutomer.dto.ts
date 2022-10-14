import { ApiProperty } from '@nestjs/swagger';

/*
 * Customer data transfer object
 * firstName: string
 * lastName: string
 * age: number
 */

export class CustomerDto {
  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  age: number;
}
