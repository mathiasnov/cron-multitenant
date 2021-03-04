import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Tenant } from './tenant/tenant.entity';
import { TenantModule } from './tenant/tenant.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksModule } from './books/books.module';
import { GamesModule } from './games/games.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: '',
    password: '',
    database: 'test_multi',
    entities: [ Tenant ],
    synchronize: true,
  }),
    TenantModule,
    BooksModule,
    GamesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
