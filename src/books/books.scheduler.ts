import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { BooksService } from './books.service';

@Injectable()
export class BooksScheduler {
  constructor(
    private readonly service: BooksService
  ) {}

  @Cron('5 * * * * *')
  async testScheduler() {
    console.log('tes');
    console.log(this.service.hello())
  }
}
