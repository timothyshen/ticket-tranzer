import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestModule } from './test/test.module';
import { TicketsModule } from './tickets/tickets.module';
import { PurchaseHistoryModule } from './purchase-history/purchase-history.module';

@Module({
  imports: [TestModule, TicketsModule, PurchaseHistoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
