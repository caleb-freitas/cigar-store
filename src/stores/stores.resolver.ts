import {
  Resolver,
  Mutation,
  Args,
  Query,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { StoresService } from './stores.service';
import { Store } from './models/store.model';
import { CreateStoreInput } from './inputs/create-store.input';
import { Cigar } from '../cigars/models/cigar.model';
import { CigarsService } from '../cigars/cigars.service';

export interface StoresResolver {
  createStore(createStoreInput: CreateStoreInput): Promise<Store>;
  findAllStores(): Promise<Store[]>;
  listCigars(store: Store): Promise<Cigar[]>;
}

@Resolver(() => Store)
export class StoresResolver implements StoresResolver {
  constructor(
    private readonly storesService: StoresService,
    private readonly cigarsService: CigarsService,
  ) {}

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

  @ResolveField(() => [Cigar])
  cigars(@Parent() store: Store): Promise<Cigar[]> {
    return this.cigarsService.findAllFromStore(store.id);
  }

  @Query(() => Store)
  findStore(@Args('id') id: string): Promise<Store> {
    return this.storesService.findOne(id);
  }
}
