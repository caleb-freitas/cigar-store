import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class LoginStoreInput {
  @Field()
  email: string;

  @Field()
  password: string;
}
