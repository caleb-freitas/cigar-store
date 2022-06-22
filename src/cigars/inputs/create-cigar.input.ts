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

  @Field()
  country: string;

  @Field()
  description: string;

  @Field()
  strength: string;

  @Field()
  gaugeSize: string;

  @Field()
  quantityType: string;
}
