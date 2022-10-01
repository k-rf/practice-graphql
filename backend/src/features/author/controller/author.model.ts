import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType("Author")
export class AuthorModel {
  @Field(() => ID)
  id!: string;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;
}
