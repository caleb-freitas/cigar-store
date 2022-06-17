import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CigarsService } from './cigars.service';
import { Cigar } from './models/cigar.model';
import { CreateCigarInput } from './inputs/create-cigar.input';

@Resolver(() => Cigar)
export class CigarsResolver {
  constructor(private readonly cigarsService: CigarsService) {}

  @Mutation(() => Cigar)
  createCigar(@Args('createCigarInput') createCigarInput: CreateCigarInput) {
    return this.cigarsService.create(createCigarInput);
  }

  @Query(() => [Cigar])
  findAllCigars() {
    return this.cigarsService.findAll();
  }
}
