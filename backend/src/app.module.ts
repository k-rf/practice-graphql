import * as path from "path";

import { ApolloDriverConfig, ApolloDriver } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
// import { MercuriusDriver, MercuriusDriverConfig } from "@nestjs/mercurius";
import { TypeOrmModule } from "@nestjs/typeorm";

import { AuthorModule } from "./features/author/author.module";

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: path.join(process.cwd(), "graphql/schema.gql"),
    }),
    // GraphQLModule.forRoot<MercuriusDriverConfig>({
    //   driver: MercuriusDriver,
    //   autoSchemaFile: path.join(process.cwd(), "graphql/schema.gql"),
    //   graphiql: true,
    // }),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "database",
      port: 5432,
      username: "practice_graphql",
      password: "P@ssw0rd!123",
      database: "practice_graphql_db",
      synchronize: true,
      autoLoadEntities: true,
    }),
    AuthorModule,
  ],
})
export class AppModule {}
