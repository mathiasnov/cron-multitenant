import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { GamesService } from './games.service';

@Injectable()
export class GamesScheduler {
  constructor(
    private readonly service: GamesService
  ) {}

  @Cron('5 * * * * *')
  async testScheduler() {
    console.log('tes');
    console.log(this.service.hello())
  }
}
