import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { resolve } from 'node:path';
import { StoresModule } from './stores/stores.module';
import { DatabaseModule } from './common/database/database.module';
import { CustomersModule } from './customers/customers.module';

@Module({
  imports: [
    DatabaseModule,
    StoresModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: resolve(process.cwd(), 'src/schema.graphql'),
    }),
    CustomersModule,
  ],
})
export class AppModule {}
