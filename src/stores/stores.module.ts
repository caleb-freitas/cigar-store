import { forwardRef, Module } from '@nestjs/common';
import { StoresService } from './stores.service';
import { StoresResolver } from './stores.resolver';
import { StoresRepository } from './store.repository';
import { PrismaService } from '../@common/database/prisma/prisma.service';
import { CigarsService } from '../cigars/cigars.service';
import { CigarsRepository } from '../cigars/cigars.repository';
import { AuthenticationModule } from '../@common/authentication/authentication.module';

@Module({
  imports: [forwardRef(() => AuthenticationModule)],
  providers: [
    PrismaService,
    StoresRepository,
    StoresResolver,
    StoresService,
    CigarsRepository,
    CigarsService,
  ],
  exports: [StoresService],
})
export class StoresModule {}
