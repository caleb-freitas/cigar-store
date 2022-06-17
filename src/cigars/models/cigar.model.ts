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
}
