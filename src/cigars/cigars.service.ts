import { Injectable } from '@nestjs/common';
import { Cigar } from './models/cigar.model';
import { CigarsRepository } from './cigars.repository';
import { CreateCigarInput } from './inputs/create-cigar.input';

export interface CigarsService {
  create(createCigarsInput: CreateCigarInput): Promise<Cigar>;
  findAll(): Promise<Cigar[]>;
  findAllFromStore(storeId: string): Promise<Cigar[]>;
}

@Injectable()
export class CigarsService implements CigarsService {
  constructor(private cigarsRepository: CigarsRepository) {}

  async create(createCigarInput: CreateCigarInput): Promise<Cigar> {
    return await this.cigarsRepository.create(createCigarInput);
  }

  async findAll(): Promise<Cigar[]> {
    return await this.cigarsRepository.findAll();
  }

  async findAllFromStore(storeId: string): Promise<Cigar[]> {
    return await this.cigarsRepository.findAllFromStore(storeId);
  }
}
