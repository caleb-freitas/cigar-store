import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CustomersService } from './customers.service';
import { Customer } from './models/customer.model';
import { CreateCustomerInput } from './inputs/create-customer.input';

export interface CustomersResolver {
  createCustomer(createCustomerInput: CreateCustomerInput): Promise<Customer>;
  findAllCustomers(): Promise<Customer[]>;
}

@Resolver(() => Customer)
export class CustomersResolver implements CustomersResolver {
  constructor(private readonly customersService: CustomersService) {}

  @Mutation(() => Customer)
  createCustomer(
    @Args('createCustomerInput') createCustomerInput: CreateCustomerInput,
  ): Promise<Customer> {
    return this.customersService.create(createCustomerInput);
  }

  @Query(() => [Customer])
  findAllCustomers(): Promise<Customer[]> {
    return this.customersService.findAll();
  }
}
