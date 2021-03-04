import { Injectable } from '@nestjs/common';

@Injectable()
export class GamesService {
  hello(): string {
    return 'hello from GamesService';
  }
}
