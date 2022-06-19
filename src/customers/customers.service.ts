import { forwardRef, Inject, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { AuthenticationService } from '../@common/authentication/authentication.service';
import {
  CustomerWithoutPassword,
  LoginResponse,
} from '../@common/authentication/contracts/login-response';
import { CustomersRepository } from './customers.repository';
import { CreateCustomerInput } from './inputs/create-customer.input';
import { Customer } from './models/customer.model';

export interface CustomersService {
  create(createCustomerInput: CreateCustomerInput): Promise<Customer>;
  findAll(): Promise<Customer[]>;
}

@Injectable()
export class CustomersService implements CustomersService {
  constructor(
    private readonly customersRepository: CustomersRepository,
    @Inject(forwardRef(() => AuthenticationService))
    private readonly authenticationService: AuthenticationService,
  ) {}

  async create(createCustomerInput: CreateCustomerInput): Promise<Customer> {
    const salt = 12;
    const hashedPassword = await bcrypt.hash(
      createCustomerInput.password,
      salt,
    );
    return await this.customersRepository.create({
      ...createCustomerInput,
      password: hashedPassword,
    });
  }

  async login(
    loginCustomerInput: CustomerWithoutPassword,
  ): Promise<LoginResponse> {
    return await this.authenticationService.login(loginCustomerInput);
  }

  async findOneByEmail(email: string): Promise<Customer> {
    return await this.customersRepository.findOne(email);
  }

  async findAll(): Promise<Customer[]> {
    return await this.customersRepository.findAll();
  }
}
