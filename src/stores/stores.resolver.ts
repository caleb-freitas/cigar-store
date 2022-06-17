import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { StoresService } from './stores.service';
import { Store } from './models/store.model';
import { CreateStoreInput } from './inputs/create-store.input';

@Resolver(() => Store)
export class StoresResolver {
  constructor(private readonly storesService: StoresService) {}

  @Mutation(() => Store)
  createStore(@Args('createStoreInput') createStoreInput: CreateStoreInput) {
    return this.storesService.create(createStoreInput);
  }

  @Query(() => [Store])
  findAll() {
    return this.storesService.findAll();
  }
}
