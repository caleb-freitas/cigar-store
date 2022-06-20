import { forwardRef, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { CustomersModule } from '../../customers/customers.module';
import { StoresModule } from '../../stores/stores.module';
import { AuthenticationService } from './authentication.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
  imports: [
    forwardRef(() => CustomersModule),
    forwardRef(() => StoresModule),
    PassportModule,
    JwtModule.register({
      secret: '1bf555be7cf8c149ae593be95ecae215',
      signOptions: { expiresIn: '15m' },
    }),
  ],
  providers: [AuthenticationService, LocalStrategy, JwtStrategy],
  exports: [AuthenticationService],
})
export class AuthenticationModule {}
