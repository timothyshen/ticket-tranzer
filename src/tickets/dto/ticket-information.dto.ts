import { ApiProperty } from '@nestjs/swagger';
import { CustomerDto } from './cutomer.dto';

/*
    * Create ticket data transfer object
 */
export class TicketInformationDto {
  @ApiProperty({ name: 'origin' })
  origin!: string;

  @ApiProperty({ name: 'destination' })
  destination!: string;

  @ApiProperty({ name: 'travel_class' })
  travelClass!: number;

  @ApiProperty({ name: 'train_preferred' })
  trainPreferred!: boolean;

  @ApiProperty({ name: 'tram_preferred' })
  tramPreferred!: boolean;

  @ApiProperty({ name: 'bus_preferred' })
  busPreferred!: boolean;

  @ApiProperty({ name: 'subway_preferred' })
  subwayPreferred!: boolean;

  @ApiProperty({ name: 'n_person' })
  nPerson!: number;

  @ApiProperty({ name: 'arrival_time' })
  arrivalTime!: Date;

  @ApiProperty({ name: 'passengers' })
  passengers!: CustomerDto[];
}
