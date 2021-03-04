import { Inject, Injectable } from '@nestjs/common';
import { TENANT_CONNECTION } from '../tenant/tenant.module';
import { TenantService } from '../tenant/tenant-service.decorator';

@TenantService()
@Injectable()
export class BooksService {
  constructor(@Inject(TENANT_CONNECTION) private connection) {
  }

  hello(): string {
    return 'hello from BooksService';
  }
}
