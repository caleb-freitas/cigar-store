import { Injectable } from '@nestjs/common';
import { StoresRepository } from './store.repository';
import { CreateStoreInput } from './inputs/create-store.input';

@Injectable()
export class StoresService {
  constructor(private storeRepository: StoresRepository) {}

  async create(createStoreInput: CreateStoreInput) {
    return await this.storeRepository.create(createStoreInput);
  }

  async findAll() {
    return await this.storeRepository.findAll();
  }
}
