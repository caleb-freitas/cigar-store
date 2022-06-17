import { Injectable } from '@nestjs/common';
import { CustomersRepository } from './customers.repository';
import { CreateCustomerInput } from './inputs/create-customer.input';

@Injectable()
export class CustomersService {
  constructor(private customersRepository: CustomersRepository) {}

  async create(createCustomerInput: CreateCustomerInput) {
    // hash customer's password (use crypto from node)
    return await this.customersRepository.create(createCustomerInput);
  }

  async findAll() {
    return await this.customersRepository.findAll();
  }
}
