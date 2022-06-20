import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { CustomersService } from '../../customers/customers.service';
import { StoresService } from '../../stores/stores.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { LoginResponse, UserWithoutPassword } from './contracts/login-response';

@Injectable()
export class AuthenticationService {
  constructor(
    @Inject(forwardRef(() => CustomersService))
    private readonly customersService: CustomersService,
    private readonly storesService: StoresService,
    private readonly jwtService: JwtService,
  ) {}

  async validateCustomer(email: string, password: string): Promise<any> {
    const store = await this.storesService.findOneByEmail(email);
    const customer = await this.customersService.findOneByEmail(email);
    if (!store && !customer) {
      return null;
    }
    if (!store) {
      const customerPasswordMatch = await bcrypt.compare(
        password,
        customer.password,
      );
      if (customerPasswordMatch) {
        const { password, ...customerWithoutPassword } = customer;
        return customerWithoutPassword;
      }
    }
    if (!customer) {
      const storePasswordMatch = await bcrypt.compare(password, store.password);
      if (storePasswordMatch) {
        const { password, ...storeWithoutPassword } = store;
        return storeWithoutPassword;
      }
    }
  }

  async login(user: UserWithoutPassword): Promise<LoginResponse> {
    const payload = { username: user.email, sub: user.id };
    const accessToken = this.jwtService.sign(payload);
    return {
      access_token: accessToken,
      user,
    };
  }
}
