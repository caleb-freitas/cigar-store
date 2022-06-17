import { Injectable } from '@nestjs/common';
import { CreateStoreInput } from './inputs/create-store.input';
import { PrismaService } from '../@common/database/prisma/prisma.service';

@Injectable()
export class StoresRepository {
  constructor(private prisma: PrismaService) {}

  async create(createStoreInput: CreateStoreInput) {
    return await this.prisma.store.create({
      data: {
        ...createStoreInput,
      },
    });
  }

  async findAll() {
    return await this.prisma.store.findMany();
  }
}
