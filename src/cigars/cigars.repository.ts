import { Injectable } from '@nestjs/common';
import { PrismaService } from '../@common/database/prisma/prisma.service';
import { CreateCigarInput } from './inputs/create-cigar.input';

@Injectable()
export class CigarsRepository {
  constructor(private prisma: PrismaService) {}

  async create(createCigarsInput: CreateCigarInput) {
    return await this.prisma.cigar.create({
      data: {
        ...createCigarsInput,
      },
    });
  }

  async findAll() {
    return await this.prisma.cigar.findMany();
  }
}
