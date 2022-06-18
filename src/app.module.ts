import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { StoresModule } from './stores/stores.module';
import { DatabaseModule } from './@common/database/database.module';
import { CustomersModule } from './customers/customers.module';
import { CigarsModule } from './cigars/cigars.module';
import { AuthenticationModule } from './@common/authentication/authentication.module';

@Module({
  imports: [
    DatabaseModule,
    StoresModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.graphql',
    }),
    CustomersModule,
    CigarsModule,
    AuthenticationModule,
  ],
})
export class AppModule {}
