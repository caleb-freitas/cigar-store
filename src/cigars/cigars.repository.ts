import { Injectable } from '@nestjs/common';
import { PrismaService } from '../@common/database/prisma/prisma.service';
import { CreateCigarInput } from './inputs/create-cigar.input';
import { Cigar } from './models/cigar.model';

export interface CigarsRepository {
  create(createCigarsInput: CreateCigarInput): Promise<Cigar>;
  findAll(): Promise<Cigar[]>;
  findAllFromStore(storeId: string): Promise<Cigar[]>;
}

@Injectable()
export class CigarsRepository implements CigarsRepository {
  constructor(private prisma: PrismaService) {}

  async create(createCigarsInput: CreateCigarInput): Promise<Cigar> {
    return await this.prisma.cigar.create({
      data: {
        ...createCigarsInput,
      },
    });
  }

  async findAll(): Promise<Cigar[]> {
    return await this.prisma.cigar.findMany();
  }

  async findAllFromStore(storeId: string): Promise<Cigar[]> {
    return await this.prisma.cigar.findMany({
      where: {
        storeId,
      },
      orderBy: {
        value: 'desc',
      },
    });
  }
}
