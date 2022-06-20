import { Field, ObjectType } from '@nestjs/graphql';
import { Customer } from '../../../customers/models/customer.model';
import { Store } from '../../../stores/models/store.model';

export type CustomerWithoutPassword = Omit<Customer, 'password'>;
export type StoreWithoutPassword = Omit<Store, 'password'>;
export type UserWithoutPassword =
  | CustomerWithoutPassword
  | StoreWithoutPassword;

@ObjectType()
export class LoginResponse {
  @Field()
  access_token: string;

  @Field(() => Customer || Store)
  user: UserWithoutPassword;
}
