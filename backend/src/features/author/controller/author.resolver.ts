import { Args, Int, Query, Resolver } from "@nestjs/graphql";

import { GetAuthorService } from "../service/get-author.service";

import { Author } from "./author.model";

@Resolver()
export class AuthorResolver {
  constructor(private service: GetAuthorService) {}

  @Query(() => Author)
  async author(@Args("id", { type: () => Int }) _id: number): Promise<Author> {
    return this.service.handle();
  }
}
