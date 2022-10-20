import { ApiProperty } from '@nestjs/swagger';


export class CardDto {
    @ApiProperty()
    cardNumber: string;

    @ApiProperty()
    cardHolderName: string;

    @ApiProperty()
    expiryDate: string;

    @ApiProperty()
    cvv: string;
}
