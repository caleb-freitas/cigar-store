import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { JwtModule } from '@nestjs/jwt';

import { AuthenticationModule } from './@common/authentication/authentication.module';
import { DatabaseModule } from './@common/database/database.module';
import { CigarsModule } from './cigars/cigars.module';
import { CustomersModule } from './customers/customers.module';
import { StoresModule } from './stores/stores.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.graphql',
    }),
    JwtModule,
    AuthenticationModule,
    DatabaseModule,
    CigarsModule,
    CustomersModule,
    StoresModule,
  ],
})
export class AppModule {}
