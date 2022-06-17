import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CustomersService } from './customers.service';
import { Customer } from './models/customer.model';
import { CreateCustomerInput } from './inputs/create-customer.input';

@Resolver(() => Customer)
export class CustomersResolver {
  constructor(private readonly customersService: CustomersService) {}

  @Mutation(() => Customer)
  createCustomer(
    @Args('createCustomerInput') createCustomerInput: CreateCustomerInput,
  ) {
    return this.customersService.create(createCustomerInput);
  }

  @Query(() => [Customer])
  findAllCustomers() {
    return this.customersService.findAll();
  }
}
