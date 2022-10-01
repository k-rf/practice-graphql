import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateAuthorModelInput {
  @Field(() => String, { nullable: true })
  firstName?: string;

  @Field(() => String, { nullable: true })
  lastName?: string;
}
