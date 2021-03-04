import { BadRequestException, MiddlewareConsumer, Module, Scope } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { REQUEST } from '@nestjs/core';

import { Connection, getConnection } from 'typeorm';
import { Tenant } from './tenant.entity';

export const TENANT_CONNECTION = 'TENANT_CONNECTION';

@Module({
  imports: [
    TypeOrmModule.forFeature([Tenant])
  ],
  providers: [
    {
      provide: TENANT_CONNECTION,
      inject: [
        REQUEST,
        Connection
      ],
      scope: Scope.REQUEST,
      useFactory: async (request, connection) => {
        const tenant: Tenant = await connection.getRepository(Tenant).findOne(({ where: { host: request.headers.host }}));
        return getConnection(tenant.name);
      }
    }
  ],
  exports: [
    TENANT_CONNECTION
  ]
})
export class TenantModule {
  constructor(private readonly connection: Connection) {}

  configure(consumer: MiddlewareConsumer): void {
    consumer
      .apply(async (req, res, next) => {
        const tenant: Tenant = await this.connection.getRepository(Tenant).findOne(({ where: {host: req.headers.host}}));

        try {
          getConnection(tenant.name);
          next();
        } catch (e) {
            throw new BadRequestException(
              'Database Connection Error',
              'There is an Error with the Database!'
            );
          }
      }).forRoutes('*');
  }
}
