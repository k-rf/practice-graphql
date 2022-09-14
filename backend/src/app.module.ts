import * as path from "path";

// import { ApolloDriverConfig, ApolloDriver } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { MercuriusDriver, MercuriusDriverConfig } from "@nestjs/mercurius";

import { PostsModule } from "~/features/posts/posts.module";

@Module({
  imports: [
    // GraphQLModule.forRoot<ApolloDriverConfig>({
    //   driver: ApolloDriver,
    //   autoSchemaFile: path.join(process.cwd(), "src/graphql/schema.gql"),
    //   sortSchema: true,
    // }),
    GraphQLModule.forRoot<MercuriusDriverConfig>({
      driver: MercuriusDriver,
      autoSchemaFile: path.join(process.cwd(), "src/graphql/schema.gql"),
      sortSchema: true,
      graphiql: true,
    }),
    PostsModule,
  ],
})
export class AppModule {}
