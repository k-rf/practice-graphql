import { Args, Mutation, Parent, ResolveField, Resolver } from "@nestjs/graphql";

import { AuthorModel } from "~/features/author/controller/author.model";

import { GetPostInput } from "../core/service/get-post.input";
import { GetPostService } from "../core/service/get-post.service";

import { PostModel } from "./post.model";

@Resolver(() => AuthorModel)
export class PostResolver {
  constructor(private service: GetPostService) {}

  @ResolveField(() => [PostModel], { nullable: "itemsAndList" })
  async posts(@Parent() author: AuthorModel) {
    const result = await this.service.handle(
      new GetPostInput({
        authorId: author.id,
      })
    );

    return result.map((post) => ({
      id: post.value.id,
      title: post.value.title,
      votes: post.value.votes,
    }));
  }

  @Mutation(() => String, { nullable: true })
  post(@Args("data", { type: () => String }) _data: string) {
    console.log(_data);
  }
}
