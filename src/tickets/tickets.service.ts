import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { PaymentEntity } from './entities/payment.entitiy';
import { TicketInformationDto } from './dto/ticket-information.dto';
import { PaymentTrxService } from './entities/paymentTrx.service';
import { mockResponse } from '../response.json';
import { PaymentDto } from './dto/payment.dto';
import axios from 'axios';
import { CardDto } from './dto/card.dto';

@Injectable()
export class TicketsService {
  @Inject(forwardRef(() => PaymentTrxService))
  private readonly paymentTrxService: PaymentTrxService;

  async requestTicketInfo(data: TicketInformationDto) {
    /*
        * This method is used to request ticket information
        * @param {TicketInformationDto} data
        * @returns {Promise<any>}
     */
    return {
      status: 200,
      message: 'Ticket information found',
      data,
      mockResponse,
    };
  }

  getSpecificJourney(id: number) {
    /*
        * This method is used to get a specific journey
        * @param {number} id
        * @returns {Promise<any>}
     */
    try {
      // const response = axios.get(
      //   `https://acc.tranzer.com/api/v1/journey/${id}/`,
      // );
      console.log(mockResponse);
      return mockResponse;
    } catch (error) {
      return {
        status: 404,
        message: 'Journey not found',
      };
    }
  }

  async purchaseTicket(data: PaymentDto) {
    /*
        * This method is used to purchase a ticket
        * @param {PaymentDto} data
        * @returns {Promise<any>}
     */
    console.log(data);
    await this.paymentTrxService.createPayment(data);
    return {
      status: 200,
      message: 'Ticket purchased successfully',
      data,
    };
    // }
    // const response = axios.post(
    //   `https://acc.tranzer.com/api/v1/journey/${id}/purchase/`,
    //   {
    //   },
    // );
    // return response;
  }

  updateUser(id: number, data: any) {
    /*
     * This method is used to update a user's details
     * @param {number} id
     * @param {any} data
     * @return {any} should be an object inform user all the data has been updated
     */
    const response = axios.put(
      `https://acc.tranzer.com/api/v1/journey/${id}/update_passengers/`,
      data,
    );
    return response;
  }

  getAllTickets(reference: string) {
    /*
     * This method is used to get all tickets for a specific user
     * @param {string} reference
     * @returns {Promise<PaymentEntity[]>}
     */
    // This is the axios call to get all tickets via the reference id
    // const response = axios.get(
    //   `https://acc.tranzer.com/api/v1/journey/purchased/reference=${reference}`,
    // );
    // return response;

    //This is the mock response
    return {
      status: 200,
      referenceType: reference,
      data: mockResponse,
      message: 'Tickets found',
    };
  }
}
