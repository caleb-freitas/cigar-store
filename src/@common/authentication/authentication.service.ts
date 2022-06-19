import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { CustomersService } from '../../customers/customers.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Customer } from '../../customers/models/customer.model';

@Injectable()
export class AuthenticationService {
  constructor(
    @Inject(forwardRef(() => CustomersService))
    private readonly customersService: CustomersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateCustomer(email: string, password: string): Promise<any> {
    const customer = await this.customersService.findOneByEmail(email);
    const passwordMatch = await bcrypt.compare(password, customer.password);
    if (customer && passwordMatch) {
      const { password, ...customerWithoutPassword } = customer;
      return customerWithoutPassword;
    }
    return null;
  }

  async login(customer: Omit<Customer, 'password'>): Promise<string> {
    const payload = { username: customer.email, sub: customer.id };
    const accessToken = this.jwtService.sign(payload);
    return accessToken;
  }
}
