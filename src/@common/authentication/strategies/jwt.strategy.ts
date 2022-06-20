import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: '1bf555be7cf8c149ae593be95ecae215',
    });
  }

  async validate(payload: any) {
    const { sub, username } = payload;
    return {
      customerId: sub,
      storeId: sub,
      email: username,
    };
  }
}
