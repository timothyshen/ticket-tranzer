import { ApiProperty } from '@nestjs/swagger';

export class PaymentDto {
    @ApiProperty()
    userid: string;

    @ApiProperty()
    ticketId: number;

    @ApiProperty()
    referenceId: number;

    @ApiProperty()
    purchaseDate: Date;

    @ApiProperty()
    purchaseAmount: number;
}
