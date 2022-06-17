import { Module } from '@nestjs/common';
import { StoresService } from './stores.service';
import { StoresResolver } from './stores.resolver';
import { DatabaseModule } from '../common/database/database.module';
import { StoresRepository } from './store.repository';

@Module({
  imports: [DatabaseModule],
  providers: [StoresRepository, StoresResolver, StoresService, DatabaseModule],
})
export class StoresModule {}
