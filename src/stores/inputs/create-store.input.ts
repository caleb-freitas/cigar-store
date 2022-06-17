import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateStoreInput {
  @Field()
  cnpj: string;

  @Field()
  name: string;
}
