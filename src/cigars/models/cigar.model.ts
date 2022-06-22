import { ObjectType, Field, ID, Int, Float } from '@nestjs/graphql';

@ObjectType()
export class Cigar {
  @Field(() => ID)
  id: string;

  @Field()
  storeId: string;

  @Field()
  name: string;

  @Field()
  brand: string;

  @Field(() => Float)
  value: number;

  @Field(() => Int)
  stock: number;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

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
