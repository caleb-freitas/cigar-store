import { Injectable } from '@nestjs/common';
import { PrismaService } from '../@common/database/prisma/prisma.service';
import { CreateCustomerInput } from './inputs/create-customer.input';
import { Customer } from './models/customer.model';

export interface CustomersRepository {
  create(createCustomerInput: CreateCustomerInput): Promise<Customer>;
  findAll(): Promise<Customer[]>;
}

@Injectable()
export class CustomersRepository implements CustomersRepository {
  constructor(private prisma: PrismaService) {}

  async create(createCustomerInput: CreateCustomerInput): Promise<Customer> {
    return await this.prisma.customer.create({
      data: {
        ...createCustomerInput,
      },
    });
  }

  async findAll(): Promise<Customer[]> {
    return await this.prisma.customer.findMany();
  }
}
