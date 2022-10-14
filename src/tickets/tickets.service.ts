import {
  BadRequestException,
  Inject,
  forwardRef,
  Injectable,


} from '@nestjs/common';
import { PaymentEntity } from './entities/payment.entitiy';
import { TicketInformationDto } from './dto/ticket-information.dto';
import { PaymentTrxService } from './entities/paymentTrx.service';

import { PaymentDto } from './dto/payment.dto';
import axios from 'axios';

@Injectable()
export class TicketsService {
  @Inject(forwardRef(() => PaymentTrxService))
  private readonly paymentTrxService: PaymentTrxService;

  async requestTicketInfo(data: TicketInformationDto) {
    const response = await axios.post(
      'https://acc.tranzer.com/api/v1/journey/',
      data,
    );
    return response;
  }

  getSpecificJourney(id: number) {
    const response = axios.get(`https://acc.tranzer.com/api/v1/journey/${id}/`);
    return response;
  }

  purchaseTicket(id: number, data: any) {
    const response = axios.post(
      `https://acc.tranzer.com/api/v1/journey/${id}/purchase/`,
      data,
    );

    return response;
  }

  async createPayment(createPayment: PaymentDto): Promise<PaymentEntity> {
    const payment = new PaymentEntity();
    payment.userid = createPayment.userid;
    payment.ticketId = createPayment.ticketId;
    payment.referenceId = createPayment.referenceId;
    payment.purchaseDate = createPayment.purchaseDate;
    payment.purchaseAmount = createPayment.purchaseAmount;
    return this.paymentTrxService.createPayment(payment);
  }

  updateUser(id: number, data: any) {
    const response = axios.put(
      `https://acc.tranzer.com/api/v1/journey/${id}/update_passengers/`,
      data,
    );
    return response;
  }

  getAllTickets(reference: string) {
    const response = axios.get(
      `https://acc.tranzer.com/api/v1/journey/purchased/reference=${reference}`,
    );
    return response;
  }
}
