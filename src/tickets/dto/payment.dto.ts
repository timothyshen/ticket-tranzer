import { ApiProperty } from '@nestjs/swagger';

/*
    * Create payment data transfer object
    * userId: string
    * ticketId: number
    * referenceId: number
    * purchaseDate: Date
    * purchaseAmount: number
 */
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
