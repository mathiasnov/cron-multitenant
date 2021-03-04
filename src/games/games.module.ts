import { Module } from '@nestjs/common';
import { GamesService } from './games.service';
import { GamesScheduler } from './games.scheduler';

@Module({
  providers: [
    GamesService,
    GamesScheduler
  ]
})
export class GamesModule {}
