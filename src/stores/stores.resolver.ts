import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { StoresService } from './stores.service';
import { Store } from './models/store.model';
import { CreateStoreInput } from './inputs/create-store.input';

export interface StoresResolver {
  createStore(createStoreInput: CreateStoreInput): Promise<Store>;
  findAllStores(): Promise<Store[]>;
}

@Resolver(() => Store)
export class StoresResolver implements StoresResolver {
  constructor(private readonly storesService: StoresService) {}

  @Mutation(() => Store)
  createStore(
    @Args('createStoreInput') createStoreInput: CreateStoreInput,
  ): Promise<Store> {
    return this.storesService.create(createStoreInput);
  }

  @Query(() => [Store])
  findAllStores(): Promise<Store[]> {
    return this.storesService.findAll();
  }
}
