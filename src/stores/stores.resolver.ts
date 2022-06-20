import { UseGuards } from '@nestjs/common';
import {
  Args,
  Context,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { LoginResponse } from '../@common/authentication/contracts/login-response';
import { GqlAuthGuard } from '../@common/authentication/guards/gql-auth.guard';

import { CigarsService } from '../cigars/cigars.service';
import { Cigar } from '../cigars/models/cigar.model';
import { CreateStoreInput } from './inputs/create-store.input';
import { LoginStoreInput } from './inputs/login-store.input';
import { Store } from './models/store.model';
import { StoresService } from './stores.service';

@Resolver(() => Store)
export class StoresResolver implements StoresResolver {
  constructor(
    private readonly storesService: StoresService,
    private readonly cigarsService: CigarsService,
  ) {}

  @ResolveField(() => [Cigar])
  cigars(@Parent() store: Store): Promise<Cigar[]> {
    return this.cigarsService.findAllFromStore(store.id);
  }

  @Mutation(() => Store)
  createStore(
    @Args('createStoreInput') createStoreInput: CreateStoreInput,
  ): Promise<Store> {
    return this.storesService.create(createStoreInput);
  }

  @Mutation(() => LoginResponse)
  @UseGuards(GqlAuthGuard)
  loginStore(
    @Args('loginStoreInput') loginStoreInput: LoginStoreInput,
    @Context() context,
  ): Promise<LoginResponse> {
    return this.storesService.login(context.user);
  }

  @Query(() => [Store])
  findAllStores(): Promise<Store[]> {
    return this.storesService.findAll();
  }

  @Query(() => Store)
  findStore(@Args('id') id: string): Promise<Store> {
    return this.storesService.findOne(id);
  }
}
