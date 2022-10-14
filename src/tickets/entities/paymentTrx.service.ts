import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaymentEntity } from './payment.entitiy';
import { PaymentDto } from '../dto/payment.dto';

@Injectable()
export class PaymentTrxService {
  @InjectRepository(PaymentEntity)
  private readonly repository: Repository<PaymentEntity>;

  async createPayment(createPayment: PaymentDto): Promise<PaymentEntity> {
    const payment = new PaymentEntity();
    payment.userid = createPayment.userid;
    payment.ticketId = createPayment.ticketId;
    payment.referenceId = createPayment.referenceId;
    payment.purchaseDate = createPayment.purchaseDate;
    payment.purchaseAmount = createPayment.purchaseAmount;
    return this.repository.save(payment);
  }
}
