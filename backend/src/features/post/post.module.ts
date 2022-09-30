import { Module } from "@nestjs/common";

import { PostResolver } from "./controller/post.resolver";

@Module({
  providers: [PostResolver],
})
export class PostModule {}
