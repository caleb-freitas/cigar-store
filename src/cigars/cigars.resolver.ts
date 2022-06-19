import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CigarsService } from './cigars.service';
import { Cigar } from './models/cigar.model';
import { CreateCigarInput } from './inputs/create-cigar.input';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../@common/authentication/guards/jwt-auth.guard';

export interface CigarsResolver {
  createCigar(createCigarInput: CreateCigarInput): Promise<Cigar>;
  findAllCigars(): Promise<Cigar[]>;
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
  findAllCigars(): Promise<Cigar[]> {
    return this.cigarsService.findAll();
  }
}
