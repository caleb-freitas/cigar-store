import { Module } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomersResolver } from './customers.resolver';
import { CustomersRepository } from './customers.repository';
import { PrismaService } from '../@common/database/prisma/prisma.service';

@Module({
  providers: [
    PrismaService,
    CustomersResolver,
    CustomersService,
    CustomersRepository,
  ],
})
export class CustomersModule {}
