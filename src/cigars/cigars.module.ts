import { Module } from '@nestjs/common';
import { CigarsService } from './cigars.service';
import { CigarsResolver } from './cigars.resolver';
import { CigarsRepository } from './cigars.repository';
import { PrismaService } from '../@common/database/prisma/prisma.service';

@Module({
  providers: [PrismaService, CigarsResolver, CigarsService, CigarsRepository],
})
export class CigarsModule {}
