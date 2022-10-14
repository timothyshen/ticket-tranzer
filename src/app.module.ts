import { Module } from '@nestjs/common';
import { TicketsModule } from './tickets/tickets.module';
import { DatabaseModule } from './TypeORM/datasouce.module';

@Module({
  imports: [TicketsModule, DatabaseModule],
})
export class AppModule {}
