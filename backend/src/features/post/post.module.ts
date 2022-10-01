import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { PostResolver } from "./controller/post.resolver";
import { PostRepository } from "./core/domain/post.repository";
import { GetPostService } from "./core/service/get-post.service";
import { PostEntity } from "./repository/post.entity";
import { PostTypeOrmRepository } from "./repository/post.typeorm.repository";

@Module({
  imports: [TypeOrmModule.forFeature([PostEntity])],
  providers: [
    PostResolver,
    GetPostService,
    { provide: PostRepository, useClass: PostTypeOrmRepository },
  ],
})
export class PostModule {}
