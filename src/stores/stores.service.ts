import { Injectable, Inject, forwardRef } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { StoresRepository } from './store.repository';
import { CreateStoreInput } from './inputs/create-store.input';
import { Store } from './models/store.model';
import { AuthenticationService } from '../@common/authentication/authentication.service';
import {
  LoginResponse,
  StoreWithoutPassword,
} from '../@common/authentication/contracts/login-response';

export interface StoresService {
  create(createStoreInput: CreateStoreInput): Promise<Store>;
  findAll(): Promise<Store[]>;
  findOne(id: string): Promise<Store>;
}

@Injectable()
export class StoresService {
  constructor(
    private storeRepository: StoresRepository,
    @Inject(forwardRef(() => AuthenticationService))
    private readonly authenticationService: AuthenticationService,
  ) {}

  async create(createStoreInput: CreateStoreInput): Promise<Store> {
    const salt = 12;
    const hashedPassword = await bcrypt.hash(createStoreInput.password, salt);
    return await this.storeRepository.create({
      ...createStoreInput,
      password: hashedPassword,
    });
  }

  async login(loginStoreInput: StoreWithoutPassword): Promise<LoginResponse> {
    return await this.authenticationService.login(loginStoreInput);
  }

  async findAll(): Promise<Store[]> {
    return await this.storeRepository.findAll();
  }

  async findOne(id: string): Promise<Store> {
    return await this.storeRepository.findOne(id);
  }

  async findOneByEmail(email: string): Promise<Store> {
    return await this.storeRepository.findOneByEmail(email);
  }
}
