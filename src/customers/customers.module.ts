import { forwardRef, Module } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomersResolver } from './customers.resolver';
import { CustomersRepository } from './customers.repository';
import { PrismaService } from '../@common/database/prisma/prisma.service';
import { AuthenticationModule } from '../@common/authentication/authentication.module';

@Module({
  imports: [forwardRef(() => AuthenticationModule)],
  providers: [
    PrismaService,
    CustomersResolver,
    CustomersService,
    CustomersRepository,
  ],
  exports: [CustomersService],
})
export class CustomersModule {}
