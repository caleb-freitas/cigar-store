import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthenticationService } from '../authentication.service';
import { LoginResponse } from '../contracts/login-response';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthenticationService) {
    super({ usernameField: 'email' });
  }

  async validate(username: string, password: string): Promise<LoginResponse> {
    const user = await this.authService.validateCustomer(username, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
