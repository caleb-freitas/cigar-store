import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Cigar } from '../../cigars/models/cigar.model';

@ObjectType()
export class Store {
  @Field(() => ID)
  id: string;

  @Field()
  cnpj: string;

  @Field()
  name: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field(() => [Cigar])
  cigars?: Cigar[];
}
