import * as path from "path";

import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
// import { MercuriusDriver, MercuriusDriverConfig } from "@nestjs/mercurius";
import { TypeOrmModule } from "@nestjs/typeorm";

import { AuthorModule } from "./features/author/author.module";
import { PubSubModule } from "./lib/pubsub.module";
import { LoggerMiddleware } from "./middleware/logger.middleware";

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: path.join(process.cwd(), "graphql/schema.gql"),
      subscriptions: {
        "graphql-ws": true,
      },
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
      logging: "all",
    }),
    AuthorModule,
    PubSubModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes({ path: "*", method: RequestMethod.ALL });
  }
}
