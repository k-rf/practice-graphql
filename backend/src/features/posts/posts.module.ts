import { Module } from "@nestjs/common";

import { PostsResolver } from "~/features/posts/post.resolvers";

@Module({
  providers: [PostsResolver],
})
export class PostsModule {}
