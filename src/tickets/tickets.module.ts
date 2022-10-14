import { Module } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { TicketsController } from './tickets.controller';
import { PaymentTrxService } from './entities/paymentTrx.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentEntity } from './entities/payment.entitiy';

@Module({
  imports: [TypeOrmModule.forFeature([PaymentEntity])],
  controllers: [TicketsController],
  providers: [TicketsService, PaymentTrxService],
  exports: [TicketsService],
})
export class TicketsModule {}
