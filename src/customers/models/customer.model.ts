import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Customer {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;

  password: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
