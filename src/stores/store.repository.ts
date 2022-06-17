import { Injectable } from '@nestjs/common';
import { CreateStoreInput } from './inputs/create-store.input';
import { PrismaService } from '../@common/database/prisma/prisma.service';
import { Store } from './models/store.model';

export interface StoresRepository {
  create(createStoreInput: CreateStoreInput): Promise<Store>;
  findAll(): Promise<Store[]>;
}

@Injectable()
export class StoresRepository implements StoresRepository {
  constructor(private prisma: PrismaService) {}

  async create(createStoreInput: CreateStoreInput): Promise<Store> {
    return await this.prisma.store.create({
      data: {
        ...createStoreInput,
      },
    });
  }

  async findAll(): Promise<Store[]> {
    return await this.prisma.store.findMany();
  }
}
