import { Injectable } from '@nestjs/common';
import { CustomersRepository } from './customers.repository';
import { CreateCustomerInput } from './inputs/create-customer.input';
import { Customer } from './models/customer.model';

export interface CustomersService {
  create(createCustomerInput: CreateCustomerInput): Promise<Customer>;
  findAll(): Promise<Customer[]>;
}

@Injectable()
export class CustomersService implements CustomersService {
  constructor(private customersRepository: CustomersRepository) {}

  async create(createCustomerInput: CreateCustomerInput): Promise<Customer> {
    return await this.customersRepository.create(createCustomerInput);
  }

  async findAll(): Promise<Customer[]> {
    return await this.customersRepository.findAll();
  }
}
