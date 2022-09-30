import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { PostModule } from "../post/post.module";

import { AuthorResolver } from "./controller/author.resolver";
import { AuthorRepository } from "./domain/author.repository";
import { Author } from "./repository/author.entity";
import { AuthorTypeOrmRepository } from "./repository/author.typeorm.repository";
import { GetAuthorService } from "./service/get-author.service";

@Module({
  imports: [PostModule, TypeOrmModule.forFeature([Author])],
  providers: [
    AuthorResolver,
    GetAuthorService,
    { provide: AuthorRepository, useClass: AuthorTypeOrmRepository },
  ],
})
export class AuthorModule {}
