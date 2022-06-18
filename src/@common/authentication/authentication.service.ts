import { Injectable } from '@nestjs/common';
import { CustomersService } from '../../customers/customers.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthenticationService {
  constructor(private readonly customersService: CustomersService) {}

  async validateCustomer(email: string, password: string): Promise<any> {
    const customer = await this.customersService.findOne(email);
    const passwordMatch = await bcrypt.compare(password, customer.password);
    if (customer && passwordMatch) {
      const { password, ...customerWithoutPassword } = customer;
      return customerWithoutPassword;
    }
    return null;
  }
}
