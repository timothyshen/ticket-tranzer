import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { TicketInformationDto } from './dto/ticket-information.dto';
import { PaymentDto } from './dto/payment.dto';

@Controller('tickets')
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService) {}

  @Post('request-ticket-info')
  requestTicketInfo(@Body() createTicketDto: TicketInformationDto) {
    return this.ticketsService.requestTicketInfo(createTicketDto);
  }

  @Get('get-purchased-journey/:id')
  getPurchasedJourney(@Param('id') id: number) {
    return this.ticketsService.getSpecificJourney(+id);
  }

  @Post('purchase-ticket')
  purchaseTicket(id: number) {
    return this.ticketsService.purchaseTicket(id);
  }

  @Post('update-user/:id')
  updateUser(@Param('id') id: number, @Body() data: any) {
    return this.ticketsService.updateUser(+id, data);
  }
  // @Post('create-payment')
  // createPayment(@Body() createPayment: PaymentDto) {
  //   return this.ticketsService.createPayment(createPayment);
  // }

  @Get('get-all-tickets/:reference')
  getAllTickets(@Param('reference') reference: string) {
    return this.ticketsService.getAllTickets(reference);
  }
}
