import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Comment {
  @Field(() => String, { nullable: true })
  comment!: string;
}
