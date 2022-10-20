import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { PaymentEntity } from './entities/payment.entitiy';
import { TicketInformationDto } from './dto/ticket-information.dto';
import { PaymentTrxService } from './entities/paymentTrx.service';

import { PaymentDto } from './dto/payment.dto';
import axios from 'axios';
import { CardDto } from './dto/card.dto';

@Injectable()
export class TicketsService {
  @Inject(forwardRef(() => PaymentTrxService))
  private readonly paymentTrxService: PaymentTrxService;

  async requestTicketInfo(data: TicketInformationDto) {
    // const response = axios.get(
    //     `https://acc.tranzer.com/api/v1/journey-request/`,
    //     data,
    // );
    // return response;
    if (data === null) {
      return {
        status: 400,
        message: 'Invalid request',
      };
    } else {
      return {
        data: data,
        id: 44455566678,
        type: 'transit',
        status: 'active',
        status_until: '2021-11-15T09:49:54.294671Z',
        transit_origin: {},
        total_co2: 2.81,
        transit_destination: {},
        notification_time: '2021-10-19T14:38:16.587580+02:00',
        messages: [],
        total_ticket_price: 15.41,
        total_emv_ticket_price: 14.51,
        total_ticket_price_without_extras: 14.51,
        service_fees: [
          {
            payment_method: 'Adyen',
            amount: 2.3,
            amount_currency: 'EUR',
            display_name: 'Credit card',
          },
        ],
        plan: {
          id: 1234566,
          departure_time: '2021-10-20T12:25:59+02:00',
          arrival_time: '2021-10-20T12:25:59+02:00',
          duration: '00:49:01',
          bounds: {
            southwest: {
              lat: 52.15345211656229,
              lon: 5.373564067496421,
            },
            northeast: {
              lat: 52.15345211656229,
              lon: 5.373564067496421,
            },
          },
          polyline:
            'obu~Hg_|\\s@iGKMr@oCvAyFp@eC~@_Fx@oHl@wIDaEEaEc@gN@eCR}D|BwWfBgSbAaLh@{CfCmLdBgIfA_Hp@sCvAuDzBcDrAmAfB}@bCk@nC[`B@hBZ|B|@rGdDtDjBnCjAfBZjGEtHOfC`@lCdAfBbAvAtAvChE~@lBf@~AfArEvIhc@dCfNpAbGbAvCbAnBpBfCpChBlBd@hCLxBSzAa@fA_@zBwAvB}AvFgDnLcG`KaFnHeCxCeAjEuBpC}ApF{DhN}K|L_KjBgBrMkNbJiI|AuAnE_EdIcI`FqFrCgDzDsEvAcBvB_CnHgH~GqFzCaCjKkI~U}S|KaKnWkVbN}LhPuNjNeMxYiWv^a\\xRaQxVeTzZaWlUcSvE{DtS{Q|KwJlMcKvFyDhIkGjV_Tl]uZl^s[hHaGtFsD`G}CdI}CfHmBlHiArHg@xFGnIV~Fh@rIrA~{@vO~z@lOdK~Afk@|KzYtFhWfEjY`FhJ`BzB^|IhBlXfFvZpFfNpCdBP|JlBdGt@|BTjGZtLCvIS|Ig@fC]rGyAlBg@hG{BhJcFtF_E~FkFbFyFnEcGxDaGrEwIzAeDlDwIbHwQfHwPjMaXnf@_dApNyYtMaXtv@c~AvNeZjEgJzNsY~HaPhRi`@d^at@dq@_wAfGiM~KkTvDwGlMyTvA}DdBqHlB{IhBoEbBeCzA{ArAoAnCwBn@a@xAqApEqDjCwBt@q@TbApArF]XeA~@X?^K~@w@VW}CkJJ`@cA|@{AlA_GhEyE|CqCbCaFtEyAvAeAl@gCrA_AXoBRqA?{H}@sEkAeCkAmE{CoCwC{CsEaGkLaCaFwEoKgCsHqBiH{A_HkAcHqEaX}Ty`BwFaa@mEw\\a@}DcCmQeDsQyCkMaDwQgEaY{VcxAqQ_eAwDeT_Ied@gDsPeFa\\sU}sAuTooA}Hya@yFi\\qCoRmFmZ_Kml@cBwHyHy[aIw\\oGkS{CwHeMk[gHoQ}H{RsImTsU_l@kGoOkLeTwGuLqFiKqGwKyA}B}@{@oAmA}@m@qB_AmCs@yBOgCJ{Dt@uB|@kD|Bk@l@qLrQwKhPm@t@uBlBuBzAeLvHoBb@aAHgAGaDy@kBo@eGgDyAq@iAOcACkALkSlGaF~AyItCkDxAoGxDeAn@kC`D_MfR{EdHeE|EyAbBjP_Wrp@adAdn@s`AnmCwdEdc@eq@zD_H`@}@bBwFfAkGZaDXsGF{GRmLByGMwKGgGD_@x@}Rl@_A',
          legs: [
            {
              id: 12345,
              origin: {
                lat: 52.15345211656229,
                lon: 5.373564067496421,
                name: 'Amersfoort',
                address: {
                  id: 1234567,
                  formatted_address:
                    'Stationsplein 39-45, 3818 Amersfoort, Netherlands',
                  street: 'Stationsplein',
                  house_number: '39-45',
                  postal_code: '3818',
                  city: 'Amersfoort',
                  county: 'Utrecht',
                  country: 'the Netherlands',
                  country_code: 'ml',
                },
              },
              departure_time: '2021-10-20T12:26:00+02:00',
              destination: {
                lat: 52.15345211656229,
                lon: 5.373564067496421,
                name: 'Amersfoort',
                address: {
                  id: 1234567,
                  formatted_address:
                    'Stationsplein 39-45, 3818 Amersfoort, Netherlands',
                  street: 'Stationsplein',
                  house_number: '39-45',
                  postal_code: '3818',
                  city: 'Amersfoort',
                  county: 'Utrecht',
                  country: 'the Netherlands',
                  country_code: 'ml',
                },
              },
              co2: 3.44,
              arrival_time: '2021-10-20T12:26:00+02:00',
              messages: [
                {
                  key: 'message_key',
                  type: 'info',
                  title:
                    "'This operator or line is not yet available in Tranzer'",
                  data: {},
                },
              ],
              agency_logo: 'https://my-server.nl/nl-operators/NS.png',
              info: 'NS Intercity; towards Rotterdam Centraal',
              additional_info: 'Intercity',
              title: 'Train towards Rotterdam Centraal',
              mode: 'Train',
              polyline:
                'bi}Hesx_@m@~@y@|REJhAx{@zb@|dBxFbh@`JnhCoJtmHlCp`@l^jyBf_A...',
              duration: '00:13:00',
              distance: 20842,
              line_number: 'Intercity',
              line_name: 'Rotterdam Centraal <-> Leeuwarden IC600',
              headsign: 'Rotterdam Centraal',
              agency: 'NS',
              delay: '+5',
              departure_platform: '4a',
              arrival_platform: '11b',
              errors: [
                {
                  code: 404,
                  description: 'something went wrong',
                },
              ],
              reference: '134566789',
              excluded: false,
              occupancy: '4',
              occupancy_date: '2021-10-20T12:26:00+02:00',
              tickets: [],
            },
          ],
        },
        currency: 'EUR',
        contains_purchased_tickets: true,
        is_emv_only: true,
        flex_fee: {},
        extra_fees: [
          {
            price: 14.51,
            price_currency: 'EUR',
            display_name: 'Bicycle off-peak',
          },
        ],
        total_ticket_option_price: 14.51,
        total_ticket_option_price_without_extras: 14.51,
        upsell_categories: [],
        parking_costs: '14.51',
        total_fixed_cost: '14.51',
        total_flex_cost: '14.41',
        co2_emission: '4.55',
        total_estimate_costs: '144.51',
        value_added_tax: {
          'percentage country code': {
            amount: '1.44',
            currency: 'EUR',
          },
        },
        taxi_offers: {},
      };
    }
  }

  getSpecificJourney(id: number) {
    try {
      const response = axios.get(
        `https://acc.tranzer.com/api/v1/journey/${id}/`,
      );
      console.log(response);
      return response;
    } catch (error) {
      return {
        status: 404,
        message: 'Journey not found',
      };
    }
  }

  async purchaseTicket(id: number) {
    await this.paymentTrxService.createPayment({
      userid: '123565',
      ticketId: 1234556,
      referenceId: 1235654435,
      purchaseDate: new Date(),
      purchaseAmount: 100,
    });
    return {
      status: 200,
      message: 'Payment successful',
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
    const response = axios.put(
      `https://acc.tranzer.com/api/v1/journey/${id}/update_passengers/`,
      data,
    );
    return response;
  }

  getAllTickets(reference: string) {
    // const response = axios.get(
    //   `https://acc.tranzer.com/api/v1/journey/purchased/reference=${reference}`,
    // );
    // return response;
    return {
      status: 200,
      referenceType: reference,
      message: 'Tickets found',
    };
  }
}
