import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthenticationService } from '../authentication.service';
import { Customer } from '../../../customers/models/customer.model';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthenticationService) {
    super({ usernameField: 'email' });
  }

  async validate(
    username: string,
    password: string,
  ): Promise<Omit<Customer, 'password'>> {
    const customer = await this.authService.validateCustomer(
      username,
      password,
    );
    if (!customer) {
      throw new UnauthorizedException();
    }
    return customer;
  }
}
