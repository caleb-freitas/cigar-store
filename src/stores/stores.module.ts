import { Module } from '@nestjs/common';
import { StoresService } from './stores.service';
import { StoresResolver } from './stores.resolver';
import { DatabaseModule } from '../@common/database/database.module';
import { StoresRepository } from './store.repository';
import { PrismaService } from '../@common/database/prisma/prisma.service';
import { CigarsService } from '../cigars/cigars.service';
import { CigarsRepository } from '../cigars/cigars.repository';

@Module({
  imports: [DatabaseModule],
  providers: [
    PrismaService,
    StoresRepository,
    StoresResolver,
    StoresService,
    CigarsRepository,
    CigarsService,
  ],
})
export class StoresModule {}
