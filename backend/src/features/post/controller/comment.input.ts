import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CommentInput {
  @Field(() => String, { nullable: true })
  commentAdded?: string;
}
