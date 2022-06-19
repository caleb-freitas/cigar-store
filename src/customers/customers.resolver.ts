import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { CustomersService } from './customers.service';
import { Customer } from './models/customer.model';
import { CreateCustomerInput, LoginCustomerInput } from './inputs';
import { GqlAuthGuard } from '../@common/authentication/guards/gql-auth.guard';
import { UseGuards } from '@nestjs/common';
import { GqlCurrentUser } from '../@common/authentication/decorators/current.user';
import { LoginResponse } from '../@common/authentication/contracts/login-response';

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

  @Mutation(() => LoginResponse)
  @UseGuards(GqlAuthGuard)
  loginCustomer(
    @Args('loginCustomerInput') loginCustomerInput: LoginCustomerInput,
    @Context() context,
  ): Promise<LoginResponse> {
    return this.customersService.login(context.user);
  }

  @Query(() => [Customer])
  findAllCustomers(): Promise<Customer[]> {
    return this.customersService.findAll();
  }

  @Query(() => Customer)
  @UseGuards(GqlAuthGuard)
  whoAmI(@GqlCurrentUser() customer: Customer): Promise<Customer> {
    return this.customersService.findOneByEmail(customer.email);
  }
}
