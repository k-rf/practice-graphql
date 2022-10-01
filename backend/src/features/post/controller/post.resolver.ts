import { Inject } from "@nestjs/common";
import { Args, ID, Mutation, Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { PubSub } from "graphql-subscriptions";

import { AuthorModel } from "~/features/author/controller/author.model";
import { PUB_SUB } from "~/lib/pubsub.constants";

import { GetPostInput } from "../core/service/get-post.input";
import { GetPostService } from "../core/service/get-post.service";

import { CommentInput } from "./comment.input";
import { Comment } from "./comment.model";
import { PostModel } from "./post.model";

@Resolver(() => AuthorModel)
export class PostResolver {
  constructor(private service: GetPostService, @Inject(PUB_SUB) public pubSub: PubSub) {}

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

  @Mutation(() => Comment, { nullable: true })
  async addComment(
    @Args("postId", { type: () => ID }) postId: string,
    @Args("comment", { type: () => CommentInput }) comment: CommentInput
  ) {
    this.pubSub.publish("commentAdded", {
      commentAdded: { comment: comment.commentAdded },
    });
  }
}
