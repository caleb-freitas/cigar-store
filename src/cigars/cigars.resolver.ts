import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CigarsService } from './cigars.service';
import { Cigar } from './models/cigar.model';
import { CreateCigarInput } from './inputs/create-cigar.input';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../@common/authentication/guards/jwt-auth.guard';
import { GqlCurrentUser } from '../@common/authentication/decorators/current.user';

@Resolver(() => Cigar)
export class CigarsResolver implements CigarsResolver {
  constructor(private readonly cigarsService: CigarsService) {}

  @Mutation(() => Cigar)
  @UseGuards(JwtAuthGuard)
  createCigar(
    @Args('createCigarInput') createCigarInput: CreateCigarInput,
  ): Promise<Cigar> {
    return this.cigarsService.create(createCigarInput);
  }

  @Query(() => [Cigar])
  @UseGuards(JwtAuthGuard)
  findAllCigars(@GqlCurrentUser() customer): Promise<Cigar[]> {
    return this.cigarsService.findAll();
  }
}
