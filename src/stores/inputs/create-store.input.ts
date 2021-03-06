import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateStoreInput {
  @Field()
  cnpj: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  password: string;
}
