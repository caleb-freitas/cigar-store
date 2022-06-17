import { Module } from '@nestjs/common';
import { StoresService } from './stores.service';
import { StoresResolver } from './stores.resolver';
import { DatabaseModule } from '../common/database/database.module';
import { StoresRepository } from './store.repository';
import { PrismaService } from '../common/database/prisma/prisma.service';

@Module({
  imports: [DatabaseModule],
  providers: [PrismaService, StoresRepository, StoresResolver, StoresService],
})
export class StoresModule {}
