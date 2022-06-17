import { Injectable } from '@nestjs/common';
import { PrismaService } from '../@common/database/prisma/prisma.service';
import { CreateCustomerInput } from './inputs/create-customer.input';

@Injectable()
export class CustomersRepository {
  constructor(private prisma: PrismaService) {}

  async create(createCustomerInput: CreateCustomerInput) {
    return await this.prisma.customer.create({
      data: {
        ...createCustomerInput,
      },
    });
  }

  async findAll() {
    return await this.prisma.customer.findMany();
  }
}
