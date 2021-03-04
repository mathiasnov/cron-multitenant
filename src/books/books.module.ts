import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { TenantModule } from '../tenant/tenant.module';
import { ScheduleModule } from '@nestjs/schedule';
import { BooksScheduler } from './books.scheduler';

@Module({
  imports: [
    TenantModule,
    ScheduleModule.forRoot()
  ],
  controllers: [],
  providers: [BooksService, BooksScheduler]
})
export class BooksModule {}
