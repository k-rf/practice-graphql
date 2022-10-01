import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { PostModule } from "../post/post.module";

import { AuthorResolver } from "./controller/author.resolver";
import { AuthorRepository } from "./core/domain/author.repository";
import { CreateAuthorService } from "./core/service/create-author.service";
import { GetAllAuthorService } from "./core/service/get-all-author.service";
import { GetAuthorService } from "./core/service/get-author.service";
import { AuthorEntity } from "./repository/author.entity";
import { AuthorTypeOrmRepository } from "./repository/author.typeorm.repository";

@Module({
  imports: [PostModule, TypeOrmModule.forFeature([AuthorEntity])],
  providers: [
    AuthorResolver,
    GetAuthorService,
    GetAllAuthorService,
    CreateAuthorService,
    { provide: AuthorRepository, useClass: AuthorTypeOrmRepository },
  ],
})
export class AuthorModule {}
