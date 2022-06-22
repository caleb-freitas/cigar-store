import { Field, Float, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateCigarInput {
  storeId?: string;

  @Field()
  name: string;

  @Field()
  brand: string;

  @Field(() => Float)
  value: number;

  @Field(() => Int)
  stock: number;
}
