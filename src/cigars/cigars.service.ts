import { Injectable } from '@nestjs/common';
import { CigarsRepository } from './cigars.repository';
import { CreateCigarInput } from './inputs/create-cigar.input';

@Injectable()
export class CigarsService {
  constructor(private cigarsRepository: CigarsRepository) {}

  async create(createCigarInput: CreateCigarInput) {
    return await this.cigarsRepository.create(createCigarInput);
  }

  async findAll() {
    return await this.cigarsRepository.findAll();
  }
}
