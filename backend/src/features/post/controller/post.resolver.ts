import { Args, Mutation, Parent, ResolveField, Resolver } from "@nestjs/graphql";

import { Author } from "~/features/author/controller/author.model";

import { Post } from "./post.model";

@Resolver(() => Author)
export class PostResolver {
  @ResolveField(() => [Post], { nullable: "itemsAndList" })
  async posts(@Parent() _author: Author) {
    return [
      { id: 1, title: "title1", votes: 42 },
      { id: 2, title: "title2", votes: 42 },
    ];
  }

  @Mutation(() => String, { nullable: true })
  post(@Args("data", { type: () => String }) _data: string) {}
}
