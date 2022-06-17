import { Injectable } from '@nestjs/common';
import { StoresRepository } from './store.repository';
import { CreateStoreInput } from './inputs/create-store.input';
import { Store } from './models/store.model';

export interface StoresService {
  create(createStoreInput: CreateStoreInput): Promise<Store>;
  findAll(): Promise<Store[]>;
}

@Injectable()
export class StoresService {
  constructor(private storeRepository: StoresRepository) {}

  async create(createStoreInput: CreateStoreInput): Promise<Store> {
    return await this.storeRepository.create(createStoreInput);
  }

  async findAll(): Promise<Store[]> {
    return await this.storeRepository.findAll();
  }
}
