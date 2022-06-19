import { Field, ObjectType } from '@nestjs/graphql';
import { Customer } from '../../../customers/models/customer.model';

export type CustomerWithoutPassword = Omit<Customer, 'password'>;

@ObjectType()
export class LoginResponse {
  @Field()
  access_token: string;

  @Field(() => Customer)
  customer: CustomerWithoutPassword;
}
