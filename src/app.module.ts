import { Module } from '@nestjs/common';
import { TicketsModule } from './tickets/tickets.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentEntity } from './tickets/entities/payment.entitiy';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'identifier.sqlite',
      entities: [PaymentEntity],
      synchronize: true,
    }),
    TicketsModule,
  ],
})
export class AppModule {}
