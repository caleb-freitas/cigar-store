import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { CigarsService } from './cigars.service';
import { Cigar } from './models/cigar.model';
import { CreateCigarInput } from './inputs/create-cigar.input';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../@common/authentication/guards/jwt-auth.guard';
import { GqlCurrentUser } from '../@common/authentication/decorators/current.user';

export interface CigarsResolver {
  createCigar(createCigarInput: CreateCigarInput): Promise<Cigar>;
}

@Resolver(() => Cigar)
export class CigarsResolver implements CigarsResolver {
  constructor(private readonly cigarsService: CigarsService) {}

  @Mutation(() => Cigar)
  createCigar(
    @Args('createCigarInput') createCigarInput: CreateCigarInput,
  ): Promise<Cigar> {
    return this.cigarsService.create(createCigarInput);
  }

  @Query(() => [Cigar])
  @UseGuards(JwtAuthGuard)
  findAllCigars(@GqlCurrentUser() customer): Promise<Cigar[]> {
    console.log(customer);
    return this.cigarsService.findAll();
  }
}
